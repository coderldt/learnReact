const list = [
    { label: '首页', key: 'home', icon: 'icon-shouye', isOpen: false },
    { label: '开发文档', key: 'doc', icon: 'icon-icon_shiyongwendang', isOpen: false },
    { label: '引导页', key: 'start', icon: 'icon-peiwangyindao', isOpen: false },
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
                    { label: 'admin页面', key: 'authorAdmin1' },
                ] 
            },
            { label: 'admin页面', key: 'authorAdmin' },
            { label: 'guest页面', key: 'authorGuest' },
            { label: 'editor页面', key: 'authorEditor' },
        ] 
    },
    { label: '关于作者', key: 'aboutMe', icon: 'icon-chuangzuozhezhongxin', isOpen: false },
    { label: '用户管理', key: 'userManager', icon: 'icon-200yonghu_yonghu', isOpen: false },
]

const currentItem = 'home'

export { list, currentItem }