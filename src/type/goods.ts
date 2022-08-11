export interface ListInt{
    userId: number,
    id: number,
    title: string,
    introduce: string
}

export interface selectDataInt{
    title: string,
    introduce: string,
    // 页码
    page: number,
    // 总条数
    count: number,
    // 默认一页显示几条
    pageSize: number
}

export class InitData{
    // 搜索表单的数据
    selectData:selectDataInt={
        title: "",
        introduce: "",
        page: 1,
        count: 0,
        pageSize: 7,
    }
    // 展示内容的数据
    list:ListInt[] = []
}