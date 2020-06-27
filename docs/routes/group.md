---
title: group
---

# Group

Buzz 提供了对声音进行分组并控制它们的方法。

## 构造器

### new buzz.group( sounds )

创建一组声音示例。更多细节请参见`sound`部分。

```js
var mySound1 = new buzz.sound("/sounds/mysound1.ogg"),
    mySound2 = new buzz.sound("/sounds/mysound2.ogg"),
    mySound3 = new buzz.sound("/sounds/mysound3.ogg");
```

可以向构造成传入一个数组。

```js
var myGroup = new buzz.group([
    mySound1,
    mySound2,
    mySound3
]);
```

也可以作为参数依次传入构造器。

```js
var myGroup = new buzz.group(mySound1, mySound2, mySound3);
```

### buzz.all()

该方法包含了所有预定义的 buzz 声音实例。

```js
var mySound1 = new buzz.sound("/sounds/mysound1.ogg"),
    mySound2 = new buzz.sound("/sounds/mysound2.ogg"),
    mySound3 = new buzz.sound("/sounds/mysound3.ogg");

buzz.all().play();
```

## 方法

除访问器以外，几乎所有的声音方法都能够在组里使用。它们均支持链式调用。

```js
myGroup.loop().play().fadeIn();
```

### group.load()

加载声音。

```js
myGroup.load();
```

## 播放

### group.play()

加载声音并开始播放。

```js
myGroup.play()
```

### group.pause()

暂停播放，声音再次播放时会从当前暂停位置开始播放。

```js
myGroup.pause();
```

### group.togglePlay()

切换播放/暂停。

```js
myGroup.togglePlay();
```

### group.stop()

停止播放声音。再次播放则从起始位置开始。

```js
myGroup.stop();
```

### group.loop()

设置循环播放。

```js
myGroup.loop();
```

### group.unloop()

声音不再循环播放。

```js
myGroup.unloop();
```

## 音量

### group.mute()

静音。

```js
myGroup.mute();
```

### group.unmute()

取消静音。

```js
myGroup.unmute();
```

### group.toggleMute()

切换静音与否状态。

```js
myGroup.toggleMute();
```

### group.setVolume(volume)

设置音量。范围`0`-`100`。

```js
myGroup.setVolume(90);
```

### group.increaseVolume([volume])

根据传入的值提升音量，默认值为1。

```js
myGroup.increaseVolume(); // 当前音量 +1
```

### group.decreaseVolume( [volume] )

根据传入的值降低音量，默认值为1。

```js
myGroup.decreaseVolume(10); // 当前音量 -10
```

### group.fadeIn( [duration], [callback] )

在`duration`毫秒内将声音从`0`提升到`100`。结束之后调用传入的回调函数`callback`。

```js
myGroup.fadeIn(2000);
```

### group.fadeOut( [duration], [callback] )

在`duration`毫秒内将声音从`当前音量`降低到`0`。结束之后调用传入的回调函数`callback`

```js
myGroup.fadeOut(2000);
```

### group.fadeTo( volume, [duration], [callback] )

在`duration`毫秒内将声音从`当前音量`变为`volume`。结束之后调用传入的回调函数`callback`

```js
// 在2秒内将音量从20提升到90而后再降低回20.
myGroup.setVolume(20).fadeTo(90, 2000, function () {
    this.fadeTo(20, 2000);
});
```

## 事件

### group.bind( event, callback )

对声音组添加一个或多个事件监听器。更多细节请参见事件部分。

```js
myGroup.bind("ended pause", function () {
    var time = this.getTime(),
        duration = this.getDuration(),
        percent = buzz.toPercent(time, duration),
        message = "Stopped or paused at " + percent + "%";

    document.getElementById("percent").innerHTML = message;
});
```

事件可以设置命名空间，从而方便我们在解绑或触发某些事件时不影响其他事件。

```js
myGroup.bind("ended.one pause.one", function () {
    alert("Event type one");
}).bind("ended.two pause.two", function () {
    alert("Event type two");
});
```

### group.bindOnce( event, callback )

添加一个或多个事件侦听器，但只执行一次。详情请见事件部分。

```js
myGroup.bindOnce("pause", function () {
    alert("仅会在第一次暂停时执行");
});
```

### group.unbind( event )

解绑事件侦听器，可以按照命名空间解绑。

```js
group.unbind("ended.one .two");
```

### group.trigger( event )

执行绑定到事件的句柄。需要注意的是只是触发了函数，而非原生事件。

```js
myGroup.trigger("ended.one .two");
```

## 访问器

### group.setTime( seconds )

设置播放位置，单位`秒`。

```js
myGroup.setTime(90);
```

辅助方法`fromTimer`这里可以派上大用场。

```js
myGroup.setTime(buzz.fromTimer("01:30"));
```

### group.setPercent( percent )

设置`percent`百分比播放位置。

```js
myGroup.setPercent(50); // 50%
```

### group.setSpeed( speed )

设置播放速度，`1`为通常速度，`2`为双倍速度，依次类推。

```js
myGroup.setSpeed(2); // x2
```

### group.set( property, value )

直接在 HTML5 `<audio>`元素上设置原生属性。

```js
myGroup.set("volume", 0.5);
myGroup.set("currentTime", 90);
```