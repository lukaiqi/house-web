import VueRouter from 'vue-router'
import Danmu from './views/douyu/danmu.vue'
import Jinyan from './views/douyu/jinyan.vue'
import Gift from './views/douyu/gift.vue'
import BigGift from './views/douyu/biggift.vue'
import Sensor from './views/sensor/list.vue'
import Print from './views/print/index.vue'
const routes = [
    {
        path: '/',
        redirect: 'danmu'
    },
    {
        path: '/danmu',
        component: Danmu
    },
    {
        path: '/jinyan',
        component: Jinyan
    },
    {
        path: '/gift',
        component: Gift
    },
    {
        path: '/biggift',
        component: BigGift
    },
    {
        path: '/sensor',
        component: Sensor
    },
    {
        path: '/print',
        component: Print
    },
]

const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
})

export default router