---
title: events
---

# Events 

均为HTML5 `<audio>`元素的事件。本节将其列出并提供相关信息。

## 方法

可以使用`bind`，`bindOnce`、`unbind`和`trigger`来管理事件。

```js
mySound.bind("loadstart", function () {
    document.getElementById("loading").style.display = "block";
}).bind("loadeddata error", function () {
    document.getElementById("loading").style.display = "none";
});
```

## 事件

| 事件名称 | 作用 |
|:---:| --- |
| abort | 在事件终止播放时触发，如果媒体在播放状态下被重新播放，也会触发该事件。 |
| canplay | 在获得的数据足够媒体播放时触发。对应`CAN_PLAY`状态。 |
| canplaythrough | 在预计能够在不停下来进行缓冲的情况下持续播放指定的音频时触发。对应`CAN_PLAY_THROUGH`状态 |
| dataunavailable | 当状态切换至`DATA_UNAVAILABLE`时触发。  |
| durationchange | 元数据已加载或改变，音频的时长发生变化时触发。 |
| emptied | 音频资源突然不可用时触发。举例来说，当音频已经加载完毕(或部分加载完毕)的情况下，`load()`方法已经调用去重新加载时就会触发。|
| empty | 当出现错误且音频资源为空时触发。 |
| ended | 播放结束时触发。 |
| error | 出现错误时触发。标签元素的`error`属性包含的信息更多。 |
| sourceerror | 当音频资源出现错误时触发。|
| loadeddata | 当音频的第一帧加载完毕时触发。|
| loadedmetadata | 当音频的元数据加载完毕后触发。 |
| loadstart | 音频开始加载时触发。 |
| pause | 播放暂停时触发。 |
| play | 从暂停状态恢复播放时触发。 |
| playing | 当媒体开始播放时触发（包括但不限于首次、从暂停状态恢复以及结束后重新播放）。 |
| progress | 加载媒体信息过程中周期性触发，用于通知媒体元素的下载进度。已下载音频的当前信息可以在媒体元素的`bufferd`属性中找到。 |
| ratechange | 当播放速度改变时触发。|
| seeked | 当用户移动到新的播放位置动作结束时触发。|
| seeking | 搜寻用户移动进度条动作开始时触发。 |
| suspend | 在音频数据完全加载之前不论何种原因终止取回数据时触发。|
| timeupdate | 播放时间改变时触发。改变的时间会显示到元素的`currenTime`属性上。 |
| volumechange | 每当音量改变时（包括将音量设置为静音）时触发。|
| waiting | 当请求操作(如播放)被延迟，且在等待另一个操作(如移动进度条)完成时触发。|