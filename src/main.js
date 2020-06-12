import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Routes from "./routes";

Vue.config.productionTip = false

Vue.use(VueRouter);
/*const routeConst = new VueRouter();*/
const routeConst = new VueRouter({
    routes: Routes,
    mode: 'history',
});


new Vue({
    render: h => h(App),
    router: routeConst,
}).$mount('#app')
