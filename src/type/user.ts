export interface ListInt{
    id:number
    nickName:string
    role: RoleInt[]
    userName: string
}

export interface RoleInt{
    role: number
    roleName: string
}

export interface SelectDataInt{
    role: number,
    nickName: string
}

export interface RoleListInt{
    authority: number[]
    roleId: number
    roleName: string
}

export interface ActiveInt{
    id:number
    nickName:string
    role: number[]
    userName: string
}

export class InitData{
    // 查询时输入的数据的数据类型
    selectData:SelectDataInt = {
        role: 0,
        nickName: ""
    }
    // 用来接收用户信息的列表
    list: ListInt[] = []
    // 用来接收角色信息的列表
    roleList:RoleListInt[] = []
    isShow = false
    // 被选中的对象
    active:ActiveInt = {
        id:0,
        nickName:"",
        role: [],
        userName: "",
    }
}