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
    { label: '用户管理', key: 'userManager', icon: 'icon-200yonghu_yonghu', isOpen: false, path: '/userManager' },
]

import TicTacToeGame from '@/view/game/ticTacToe/index.js'

const listMap = [
    { path: '/game/ticTacToe', Component: TicTacToeGame }
]

const currentItem = 'home'

export { list, currentItem, listMap }