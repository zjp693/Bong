import { requestWithToken } from "@/utils/request";

/**
 *  获取手机验证码
 * @returns {AxiosPromise}
 */
export function getPhoneCode(phone) {
  return requestWithToken("/users/getPhoneCode", "get", { phone });
}
/**
 *  图形验证码
 * @returns {AxiosPromise}
 */
export function getCaptchaSrc() {
  return requestWithToken("/users/getcaptcha", "get");
}

/**
 *  账号密码登录
 * @param username 账号
 * @param password 密码
 * @returns {AxiosPromise}
 */
export function accountLogin(username, password, captcha) {
  console.log(username, password, captcha);
  return requestWithToken("/users/login", "post", {
    username,
    password,
    captcha,
  });
}
/**
 *  手机号码登录
 * @param phone 手机号码
 * @returns {AxiosPromise}
 */
export function phoneLogin(phone, phoneCode) {
  return requestWithToken("/users/phoneLogin", "post", { phone, phoneCode });
}
