import userInfoController from "../controller/user";
import Router from '@koa/router';
const route = new Router();
const routers = route.get('/user/create', userInfoController.createUser)
export default routers;