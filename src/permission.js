//  获取角色信息，根据用户权限动态加载路由
import router from "./router/index"
import store from "../src/store"

// router.beforeEach((to, from, next) => {
//   if (store.getters.Authorization && store.getters.Authorization !== "undefined") {
//     if (to.path === "/login") {
//       next({path: "/"})
//     } else {
//       console.log('11111')
//     }
//   } else {
//     // if (to.path === "/login") {
//     //   next()
//     // }
//     next({path: "/login"})
//   }
// })
