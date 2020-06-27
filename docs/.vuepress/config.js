module.exports= {
    title: 'Buzz.js',
    description: "Buzz 是一个小型的 JavaScript 库，它利用 HTML5 的 <audio>标签，可以助力您轻松地在网站中引入和管理声音。兼容非现代浏览器。",
    base: "/Buzz_docs_zh_cn/",
    markdown: {
        lineNumbers: true,
        anchor: {
            permalink: false
        }
    },
    themeConfig: {
        activeHeaderLinks: true,
        displayAllHeaders: true,
        nav: [
            // {
            //     text: "主站",
            //     link: "https://febeacon.com"
            // },
            {
                text: "文档首页",
                link: "/"
            },
            {
                text: "Github",
                link: "https://github.com/jaysalvat/buzz"
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