import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/index',
            name: 'index',
            component: require('./view/index'),
            children: [{
                path: 'all',
                name: 'all',
                component: require('./view/all') // 所有任务列表页
            }, {
                path: 'todo',
                name: 'todo',
                component: require('./view/todo') // 待完成任务列表页
            }, {
                path: 'done',
                name: 'done',
                component: require('./view/done') // 已完成任务列表页
            }, {
                path: 'new',
                name: 'new',
                component: require('./view/new') // 新建任务页
            }]
        }, {
            path: '/index',
            redirect: {
                name: 'all' // 默认重定向到“所有任务列表页”
            }
        }, {
            path: '*',
            redirect: {
                name: 'all' // 默认所有不匹配路径都跳转到“所有任务列表页”
            }
        }
    ]
})
