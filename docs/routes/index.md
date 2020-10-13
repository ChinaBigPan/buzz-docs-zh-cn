---
title: Buzz
---

<febeacon />

# Buzz

[英文原地址](https://github.com/jaysalvat/buzz)

## 构造器

### new buzz.sound( sources, settings )

创建一个新的声音实例。

```js
var mySound = new buzz.sound("/sounds/mysound.ogg");
```

### new buzz.group( sounds )

创建一组声音实例。更多细节请参见`Group`部分。

```js
var myGroup = new buzz.group([
    new buzz.sound("/sounds/mysound1.ogg"),
    new buzz.sound("/sounds/mysound2.ogg"),
    new buzz.sound("/sounds/mysound3.ogg")
]);
```

## 方法

### buzz.all()

允许对所有声音实例进行操作。参见`Group`部分以了解更多细节。

```js
var mySound1 = new buzz.sound("/sounds/mysound1.ogg"),
    mySound2 = new buzz.sound("/sounds/mysound2.ogg"),
    mySound3 = new buzz.sound("/sounds/mysound3.ogg");
    
buzz.all().play();
```

### buzz.isSupported()

检查浏览器是否支持 HTML5 `<audio>`标签。

```js
if (!buzz.isSupported()) {
    alert("您的浏览器过于陈旧，请及时升级。");
}
```

#### buzz.isOGGSupported()

检查浏览器是否支持 OGG 音频格式。

```js
if (!buzz.isOGGSupported()) {
    alert("您的浏览器不支持 OGG 格式。");
}
```

### buzz.isWAVSupported()

检查浏览器是否支持 WAV 音频格式。

```js
if (!buzz.isWAVSupported()) {
    alert("您的浏览器不支持 WAV 格式。");
}
```

### buzz.isMP3Supported()

检查浏览器是否支持 MP3 音频格式。

```js
if (!buzz.isMP3Supported()) {
    alert("您的浏览器不支持 MP3 格式。");
}
```

### buzz.isAACSupported()

检查浏览器是否支持 AAC 音频格式。

```js
if (!buzz.isAACSupported()) {
    alert("您的浏览器不支持 AAC 格式。");
}
```

## 辅助方法

### buzz.toTimer( seconds, long )

将传入的`seconds`进行格式化为`00:00`，如果`long`传入`true`则格式化为`00:00:00`

```js
var mySound = new buzz.sound("/sounds/mysound.ogg"),
    timer = buzz.toTimer(mySound.getDuration());

document.getElemetById("duration").innerHTML = timer;
```

### buzz.fromTimer( timer )

将诸如`00:00`或`00:00:00`的计时器时间转换为秒。

```js
var mySound = new buzz.sound("/sounds/mysound.ogg");

mySound.setTime(buzz.fromTimer("00:30"));
```

### buzz.toPercent( value, total, round )

根据传入的`value`值计算百分比。

```js
var mySound  = new buzz.sound("/sounds/mysound.ogg"),
    time     = mySound.getTime(),
    duration = mySound.getDuration(),
    percent  = buzz.toPercent(time, duration, 2);

document.getElementById("percent").innerHTML = percent;
```

### buzz.fromPercent( value, total, round )

从百分比计算值。

```js
var mySound = new buzz.sound("/sounds/mysound.ogg");

mySound.setTime(buzz.fromPercent("20", mySound.getDuration());
```

## 属性

### buzz.defaults

所有的属性都可以全局设置。

```js
// 预加载声音文件，可选值：auto、metadata、none
buzz.defaults.preload = 'auto';
// 是否在声音准备好之后自动播放，默认值：false
buzz.defaults.autoplay = false;
// 是否循环声音：false
buzz.defaults.loop = false;
// 在无法进行时间转换时显示的值
buzz.defaults.placeholder = '--';
// 渐隐效果的持续时间，单位：毫秒
buzz.defaults.duration = 5000;
// 您的音频格式
buzz.defaults.formats = [ 'ogg', 'mp3', 'aac', 'wav' ]
```

### buzz.sounds

所有创建的声音实例的数组。

```js
for (var i in buzz.sounds) {
    buzz.sounds[i].mute();
}
```