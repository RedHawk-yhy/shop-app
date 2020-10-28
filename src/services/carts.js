import { post,get } from "../utils/request";
export function addToCart(product, amount) {
  return post("/api/v1/shop_carts",{
    product,
    quantity:amount
  })
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                       
//加载购物车数据
export function loadCarts(){
  return get("api/v1/shop_carts")
}
