---
title: sound
---

# Sound

::: warning
重要提示：为了节省带宽，移动设备在没有用户干预的情况下不会加载/播放声音(没有自动播放)。 iPhone 和 iPad 一次只能播放一种声音，不允许动态改变音量。
:::


## 构造器

### new buzz.sound( sources, [settings] )

创建一个新的 `sound` 实例。

```js
var mySound = new buzz.sound("/sounds/mysound.ogg");
```

可以将多种声音文件的URI放入数组中：

```js
var mySound = new buzz.sound([
    "/sounds/mysound.ogg",
    "/sounds/mysound.mp3",
    "/sounds/mysound.aac",
    "/sounds/mysound.wav"
]);
```

您可以用下面这种方式提升可读性。

```js
var mySound = new buzz.sound("/sounds/mysound", {
    formats: [ "ogg", "mp3", "aac", "wav" ]
});
```

## 设置

```js
var mySound = new buzz.sound("/sounds/mysound", {
    formats: [ "ogg", "mp3", "aac", "wav" ],
    preload: true,
    autoplay: true,
    loop: false
});
```

| 设置项 | 可选值 | 描述 |
| --- | --- | --- |
| preload | `metadata`/`true`/`false` | 若设置为布尔值，则指定页面在加载时是否预加载声音文件。若设置为`metadata`，则浏览器只会加载元数据，如持续时间等。 |
| autoplay | `true`/`false` | 是否自动播放 |
| loop | `true`/`false` | 是否循环播放，部分浏览器对它的支持性并不好，因此请不要过分期待完美的循环。 |
| volume | `0`-`100` | 设置默认音量，默认值：`80` |
| webAudioAPi | `true`/`false` | 如果可用的话，通过`Web Audio API` 进行路由以提高性能。默认值：`false` |
| crossOrigin | `true`/`false` | 默认值：`false`。当在 HTTPS 中加载另一个域名的音频文件时，Chrome 将不会加载文件，同时报错“MediaElementAudioSource outputs zeroes due to CORS access restrictions”。该配置 就是为解决这个问题而生。<br /><br /> 注意：目标域名应当设置合适的`Access-Control-Allow-Origin` HTTP头。 |

## 方法

> 所有的方法都可以进行链式调用。

```js
mySound.loop().play().fadeIn();
```

#### sound.load()

加载声音。

```js
mySound.load();
```

### 播放

#### sound.play()

加载声音并开始播放。

```js
mySound.play();
```

#### sound.pause()

暂停声音播放，声音再次播放时会从当前暂停位置开始播放。

```js
mySound.pause();
```

#### sound.togglePlay()

自动暂停或播放声音。

```js
mySound.togglePlay();
```

#### sound.isPaused()

返回当前声音是否是暂停状态。

```js
if (mySound.isPaused()) {
    alert("声音已暂停!");
}
```

#### sound.stop()

停止播放声音。再次播放则从起始位置开始。

```js
mySound.stop();
```

#### sound.isEnded()

返回当前声音播放是否已结束。

```js
if (mySound.isEnded()) {
    alert("The sound has ended!");
}
```

#### sound.loop()

设置声音循环播放。

```js
mySound.loop();
```

#### sound.unloop()

停止声音的循环播放。

```js
mySound.unloop();
```

### 音量

#### sound.mute()

静音。

```js
mySound.mute();
```

##### sound.unmute()

取消静音。

```js
mySound.unmute();
```

#### sound.toggleMute()

切换静音与否状态。

```js
mySound.toggleMute();
```

#### sound.isMuted()

返回当前声音文件是否是静音状态。

```js
if (mySound.isMuted()) {
    alert("该声音已静音");
}
```

#### sound.setVolume(volume)

设置音量。范围`0`-`100`。

```js
mySound.setVolume(90);
```

##### sound.getVolume();

获取当前音量。范围`0`-`100`。

```js
var volume = mySound.getVolume();
```

#### sound.increaseVolume([volume])

根据传入的值提升音量，默认值为1。

```js
mySound.increaseVolume(); // 当前音量 +1
```

#### sound.decreaseVolume( [volume] )

根据传入的值降低音量，默认值为1。

```js
mySound.decreaseVolume(10); // 当前音量 -10
```

#### sound.fadeIn( [duration], [callback] )

在`duration`毫秒内将声音从`0`提升到`100`。结束之后调用传入的回调函数`callback`。

```js
mySound.fadeIn(2000);
```

#### sound.fadeOut( [duration], [callback] )

在`duration`毫秒内将声音从`当前音量`降低到`0`。结束之后调用传入的回调函数`callback`

```js
mySound.fadeOut(2000);
```

#### sound.fadeTo( volume, [duration], [callback] )

在`duration`毫秒内将声音从`当前音量`变为`volume`。结束之后调用传入的回调函数`callback`

```js
// 在2秒内将音量从20提升到90而后再降低回20.
mySound.setVolume(20).fadeTo(90, 2000, function () {
    this.fadeTo(20, 2000);
});
```

#### sound.fadeWith( sound, [duration] )

在`duration`毫秒内逐渐降低当前声音的音量，而后切换到另一个声音并提升音量，形成切换效果。

```js
var myOtherSound = new buzz.sound("/sounds/myothersound.ogg");
mySound.fadeWith(myOtherSound, 2000);
```

### 事件

#### sound.bind( event, callback )

对声音添加一个或多个事件监听器。更多细节请参见事件部分。

```js
mySound.bind("ended pause", function () {
    var percent = buzz.toPercent(this.getTime(), this.getDuration()),
        message = "Stopped or paused at " + percent + "%";
    document.getElementById("percent").innerHTML = message;
});
```

事件可以设置命名空间，从而方便我们在解绑或触发某些事件时不影响其他事件。

```js
mySound.bind("ended.one pause.one", function () {
    alert("Event type one");
}).bind("ended.two pause.two", function () {
    alert("Event type two");
});
```

#### sound.bindOnce( event, callback )

添加一个或多个事件侦听器，但只执行一次。详情请见事件部分。

```js
mySound.bindOnce("pause", function () {
    alert("仅会在第一次暂停时执行");
});
```

#### sound.unbind( event )

解绑事件侦听器，可以按照命名空间解绑。

```js
mySound.unbind("ended.one .two");
```

#### sound.trigger( event )

执行绑定到事件的句柄。需要注意的是只是触发了函数，而非原生事件。

```js
mySound.trigger("ended.one");
```

### 访问器 (Getters and Setters)

#### sound.setTime( seconds )

设置播放位置，单位`秒`。

```js
mySound.setTime(90);
```

辅助方法`fromTimer`这里可以派上大用场。

```js
mySound.setTime(buzz.fromTimer("01:30"));
```

#### sound.getTime()

获取当前的播放位置，单位是`秒`.

```js
var seconds = mySound.getTime(); // 90
```

辅助方法`toTimer`在这里可以派上用场。

```js
var timer = buzz.toTimer(mySound.getTime()); // 01:30
```

#### sound.setPercent( percent )

设置`percent`百分比播放位置。

```js
mySound.setPercent(50); // 50%
```

#### sound.getPercent()

获得百分比`percent`播放位置。

```js
var percent = mySound.getPercent() + "%";
```

#### sound.getDuration()

获取声音的总时长，单位是`秒`。

```js
var duration = mySound.getDuration() + " seconds";
```

辅助方法`toTimer`在这里可以派上用场。

```js
var timer = buzz.toTimer(mySound.getDuration()); // 05:46
```

#### sound.setSpeed( speed )

设置播放速度，`1`为通常速度，`2`为双倍速度，依次类推。

```js
mySound.setSpeed(2); // x2
```

#### sound.getSpeed( speed )

获取播放速度。

```js
var speed = mySound.getSpeed();
```

#### sound.set( property, value )

直接在 HTML5 `<audio>`元素上设置原生属性。

```js
mySound.set("volume", 0.5);
mySound.set("currentTime", 90);
```

#### sound.get()

直接获取HTML5 `<audio>`元素上的原生属性值。

### 时间范围

#### sound.getPlayed()

获取一个数组，其中的元素表示浏览器已经播放的声音范围。

```js
var played = mySound.getPlayed();

for (var i in played) {
    console.log(played[i]);
}
```

#### sound.getBuffered()

获取一个数组，其中的元素表示浏览器已经缓冲的声音范围。

```js
var buffered = mySound.getBuffered();

for (var i in buffered) {
    console.log(buffered[i]);
}
```

#### sound.getSeekable()

获取一个数组，其中的元素表示浏览器可能去搜寻的声音范围。

```js
var seekable = mySound.getSeekable();

for (var i in seekable) {
    console.log(seekable[i]);
}
```

### 错误和状态

#### sound.getErrorCode(), sound.getErrorMessage()

返回当前错误的代码/错误信息

| 错误代码 | 错误信息 | 含义 |
|:---:| --- | --- |
| 1 | MEDIA_ERR_ABORTED  | 在用户的请求下，用户中止了获取声音的过程。 |
| 2 | MEDIA_ERR_NETWORK  | 在声音已经建立并准备使用后，出现网络错误让浏览器停止获取声音。 |
| 3 | MEDIA_ERR_DECODE | 在资源已经建立且可用后，解码声音时发生了错误 |
| 4 | MEDIA_ERR_SRC_NOT_SUPPORTED | 不支持`src` 链接 |

```js
mySound.bind("error", function () {
    alert("Error: " + this.getErrorMessage());
});
```

#### sound.getStateCode(), sound.getStateMessage()

返回当前状态的代码/状态信息

| 状态码 | 状态信息 | 含义 |
|:---:| --- | --- |
| 0 | HAVE_NOTHING | 无可用信息。 |
| 1 | HAVE_METADATA | 已经获得了足够的声音来获得一些信息。|  
| 2 | HAVE_CURRENT_DATA | 当前播放位置的数据是可用的。 |
| 3 | HAVE_FUTURE_DATA | 当前播放位置的数据可用，并且进一步的数据也是可用的。 |
| 4 | HAVE_ENOUGH_DATA | 所有的信息都是可用的。 |

#### sound.getNetworkStateCode(), sound.getNetworkStateMessage()

返回当前网络状态代码/状态信息。

| 状态码 | 状态信息 | 含义 |
|:---:| --- | --- |
| 0 | NETWORK_EMPTY | 声音尚未初始化。 |
| 1 | NETWORK_IDLE | 声音已选择，不过它并未使用网络。 |
| 2 | NETWORK_LOADING | 浏览器正尝试下载数据。 |
| 3 | NETWORK_NO_SOURCE | 声音不可用。 |