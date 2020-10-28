import { post } from "../utils/request";

/**
 * 注册
 * @param {*} user 
 */
export const regApi = user => post("/api/v1/auth/reg",user)
/**
 * 登录
 * @param {*} user 
 */
export const loginApi = user => post("/api/v1/auth/login",user)