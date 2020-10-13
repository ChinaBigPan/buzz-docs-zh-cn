module.exports= {
    title: 'Buzz.js',
    description: "Buzz 是一个小型的 JavaScript 库，它利用 HTML5 的 <audio> 标签，可以助力您轻松地在网站中引入和管理声音。兼容非现代浏览器。",
    base: "/buzz-docs-zh-cn/",
    markdown: {
        lineNumbers: true,
        anchor: {
            permalink: false
        }
    },
    themeConfig: {
        activeHeaderLinks: true,
        displayAllHeaders: true,
        logo: "/images/logo.png",
        nav: [
            {
                text: "大笑文档",
                link: "http://www.febeacon.com"
            },
            {
                text: "文档首页",
                link: "/"
            }
        ],
        sidebar: [
            {
                title: 'Buzz',
                path: '/routes/',
                sidebarDepth: 2
            },
            {
                title: 'Sound',
                path: '/routes/sound',
                sidebarDepth: 2
            },
            {
                title: 'Group',
                path: '/routes/group',
                sidebarDepth: 2
            },
            {
                title: 'Events',
                path: '/routes/events',
                sidebarDepth: 2
            }
        ]
    },
    head: [
        ["link", {
            rel: "icon", href: "/images/favicon.ico"
        }]
    ]
}