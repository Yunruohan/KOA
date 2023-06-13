import userModel from '../models/user';
const userService = {
    create(data: any) {
        let result = userModel.create(data);
        return result;
    }
}
export default userService;