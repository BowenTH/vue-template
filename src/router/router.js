import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const mock = r => require.ensure([], () => r(require('../page/home/children/mock')), 'mock')
const example = r => require.ensure([], () => r(require('../page/home/children/example')), 'example')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')

export default [{
    path: '/',
    component:  App,
    children: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home,
            children: [
                {
                    path: '/home/mock',
                    component: mock
                },
                {
                    path: '/home/example',
                    component: example
                }
            ]
        },
        {
            path: '/login/:id',
            component: login
        }
    ]
}]