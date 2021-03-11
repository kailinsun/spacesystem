import { MakeGet, MakePut, MakeDelete, MakePost } from './api.js'

// 提交配置的参数
const submitConfigParam = MakePost('/api/param/submit')


export {

    submitConfigParam,
   
}