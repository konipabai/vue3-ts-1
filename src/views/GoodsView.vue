<template>
  <div>
    <div class="select-box">
        <el-form :inline="true" :model="selectData" class="demo-form-inline">
          <el-form-item label="标题">
            <el-input v-model="selectData.title" placeholder="请输入关键字"/>
          </el-form-item>
          <el-form-item label="详情">
            <el-input v-model="selectData.introduce" placeholder="请输入关键字"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
    </div>
    <el-table :data="dataList.comList" border style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="title" label="标题" width="180" />
      <el-table-column prop="introduce" label="详情" />
    </el-table>
    <el-pagination @current-change="currentChange" @size-change="sizeChange" layout="prev, pager, next" :total="selectData.count" :page-size="selectData.pageSize"/>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, reactive, toRefs, watch} from 'vue';
import {getGoodsList} from "@/request/api";
import {InitData, ListInt} from "@/type/goods";

export default defineComponent({
  setup() {
    const data = reactive(new InitData())

    getGoodsList().then((res) => {
      data.list = res.data
      data.selectData.count = res.data.length
    })

    const dataList = reactive({
      comList:computed(()=>{
        return data.list.slice(
            (data.selectData.page - 1) * data.selectData.pageSize,
            data.selectData.page * data.selectData.pageSize
        )
      })
    })
    const currentChange=(page:number)=>{
      data.selectData.page = page
    }
    // ??
    const sizeChange=(pageSize:number)=>{
      data.selectData.pageSize = pageSize
    }

    const onSubmit=()=>{
      // 用来接收查询过后筛选出来的数据
      let arr:ListInt[]=[]
      if (data.selectData.title || data.selectData.introduce){
        if (data.selectData.title){
          arr = data.list.filter((value)=>{
            // list 里的和 selectData 里的 title 一样的话返回索引位置而非 -1，最后得到的是一个含有搜索内容的数组
            return value.title.indexOf(data.selectData.title) !== -1
          })
        }
        if (data.selectData.introduce){
          arr = data.list.filter((value)=>{
            // list 里的和 selectData 里的 title 一样的话返回索引位置而非 -1，最后得到的是一个含有搜索内容的数组
            return value.introduce.indexOf(data.selectData.introduce) !== -1
          })
        }
      }
      else arr = data.list

      data.selectData.count = arr.length
      data.list = arr
    }

    // 监听输入框的两个属性
    watch([()=>data.selectData.title, ()=>data.selectData.introduce], ()=>{
        if (data.selectData.title == "" && data.selectData.introduce == ""){
          getGoodsList().then((res)=>{
            data.list = res.data
            data.selectData.count = res.data.length
          })
        }
    })

    return { ...toRefs(data), dataList, currentChange, sizeChange, onSubmit }
  }
})
</script>

<style scoped>

</style>