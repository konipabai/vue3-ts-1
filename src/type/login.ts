// 暴露一个接口出去
export interface LoginFormInt{
    username:string
    password:string
}

// 一个名为 LoginData 的类，类里有叫 ruleForm 的属性，他是一个对象，有账号和密码两个属性，最后暴露出去
export class LoginData{
    ruleForm:LoginFormInt={
        username:'',
        password:''
    }
}