export interface ListInt{
    name: string
    roleId: number
    //  带有 ? 的代表他是可选的，没有传入这个属性的值也不会报错
    roleList?: ListInt[]
    viewRole?: string
}


export class InitData{
    id: number
    authority: number[]
    constructor(id:number, authority: number[]) {
        this.id = id
        this.authority = authority
    }
    list:ListInt[] = []
    treeRef:any
}