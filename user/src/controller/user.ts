import userService from '../service/user';
const createUser = (ctx: { request: { body: any; }; body: { success: boolean; message: string; data: null; code: string; }; }) => {
    let formData = ctx.request.body
    let result = {
        success: false,
        message: '',
        data: null,
        code: ''
    }
    // result.data = userService.create(formData)
    ctx.body = result
}
export default { createUser };