import VueRouter from 'vue-router'
import Danmu from './views/douyu/danmu.vue'
import Jinyan from './views/douyu/jinyan.vue'
import MfsList from './views/mfs/list.vue'
import MfsCount from './views/mfs/count.vue'
import BoardInfo from './views/board/info.vue'
import Sensor from './views/sensor/list.vue'
import BiliInfo from './views/bilibili/uinfo.vue'
import BiliList from './views/bilibili/list.vue'

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
        path: '/mfs_list',
        component: MfsList
    },
    {
        path: '/mfs_count',
        component: MfsCount
    },
    {
        path: '/board_info',
        component: BoardInfo
    },
    {
        path: '/sensor_list',
        component: Sensor
    },
    {
        path: '/bili_list',
        component: BiliList
    },
    {
        path: '/bili_info',
        component: BiliInfo
    }
]

const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
})

export default router