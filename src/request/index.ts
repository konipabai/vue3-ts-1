import axios from "axios";
const service = axios.create({
    baseURL:'https://www.fastmock.site/mock/38965098aa2d9e86dbceccfce16baf8d/api',
    timeout:5000,
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    }
})

// 请求拦截                                 config: 请求过去的数据
service.interceptors.request.use((config)=>{
    //               config.headers 没有的话就赋 {} 这个值
    config.headers = config.headers || {}
    if (localStorage.getItem('token')){
        //                   localStorage.getItem('token')  没有的话就赋 '' 这个值
        config.headers.token = localStorage.getItem('token') || ''
    }
    return config
})

// 相应拦截                         res: 响应完成或者失败的结果
service.interceptors.response.use((res)=>{
    const code:number = res.data.code
    if (code != 200) {
        // 没请求成功就返回请求失败的信息
        return Promise.reject(res.data)
    }
    return res.data
},(err)=>{
    console.log(err)
})

export default service