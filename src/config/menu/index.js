const list = [
    { label: '首页', key: 'home', icon: 'icon-shouye', isOpen: false, path: '/home' },
    { label: '开发文档', key: 'doc', icon: 'icon-icon_shiyongwendang', isOpen: false, path: '/doc' },
    { label: '引导页', key: 'start', icon: 'icon-peiwangyindao', isOpen: false, path: '/start' },
    {
        label: '权限测试',
        key: 'author',
        icon: 'icon-quanxianpeizhi',
        isOpen: false,
        children: [
            {
                label: '权限说明',
                key: 'authorDetail',
                isOpen: false,
                children: [
                    { label: 'admin页面', key: 'authorAdmin1', path: '/authorAdmin1' },
                ]
            },
            { label: 'admin页面', key: 'authorAdmin', path: '/authorAdmin' },
            { label: 'guest页面', key: 'authorGuest', path: '/authorGuest' },
            { label: 'editor页面', key: 'authorEditor', path: '/authorEditor' },
        ]
    },
    { label: '井字棋游戏', key: 'aboutMe', icon: 'icon-chuangzuozhezhongxin', isOpen: false, path: '/game/ticTacToe' },
    {
        label: '组件', key: 'component', icon: 'icon-chuangzuozhezhongxin', isOpen: false, children: [
            { label: '树', key: 'tree', path: '/com/tree' },
        ]
    },
    {
        label: '系统管理',
        key: 'systemManager',
        icon: 'icon-200yonghu_yonghu',
        isOpen: false,
        children: [
            { label: '用户管理', key: 'userManager', path: '/system/userManager' },
        ]
    },
]

import TicTacToeGame from '@/view/game/ticTacToe/index.js'
import UserManager from '@/view/system/userManager/index.js'
import Tree from '@/view/com/tree/index.js'

const listMap = [
    { path: '/game/ticTacToe', Component: TicTacToeGame },
    { path: '/system/userManager', Component: UserManager },
    { path: '/com/tree', Component: Tree },
]

const currentItem = 'home'

export { list, currentItem, listMap }