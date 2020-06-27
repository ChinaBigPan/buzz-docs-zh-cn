---
home: true
heroImage: /images/logo.png
heroText: Buzz.js
tagline: audio 音频操作库
actionText: v 1.2.1
actionLink: /routes/
meta:
  - name: description
    content: Buzz 是一个小型的 JavaScript 库，它利用 HTML5 的 `<audio>`标签，可以助力您轻松地在网站中引入和管理声音。兼容非现代浏览器。
  - name: keywords
    content: audio, 音频
  - name: feversion
    content: v 1.2.1
  - name: fetags
    content: "[{'kind': 'html', 'text': '浏览器'}, {'kind':'audio', 'text': '音频'}]"
features:
  - title: 体积小
    details: gzip 后 < 1kb
  - title: 操作 <audio> 标签
    details: 助力您轻松地在网站中引入和管理声音
  - title: 高兼容性
    details: 兼容非现代浏览器
footer: MIT Licensed | Developed By jaysalvat | Translated By 大笑
---

## 安装

```shell
npm install --save buzz
```

## 简单示例

```js
var sound = new buzz.sound("/sounds/sound", {
    formats: [ "ogg", "mp3", "aac" ]
});

sound.play()
     .fadeIn()
     .loop()
     .bind("timeupdate", function() {
        var timer = buzz.toTimer(this.getTime());
        document.getElementById("timer").innerHTML = timer;
     });
```