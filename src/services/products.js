import { get } from "../utils/request";

/**
 * 加载商品列表
 */
export function loadProducts(params) {
  return get("/api/v1/products",params);
}

/**
 * 根据id加载详情
 * @param {*} id
 */
export function loadProductDetail(id) {
  return get("/api/v1/products/" + id);
}
