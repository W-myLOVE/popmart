# popmart

## 安装依赖
```
npm install
```

### 运行
```
npm run serve
```
挺多不成熟和遗憾的地方
1.轮播图切换渐入渐出效果的实现想要运用vue的<transition>组件实现却遇到了很多bug，轮播图往
前走的时候没有特效，往后走才有。要么干脆鬼畜过渡

2.官网是有一个在窗口进度条往下滑时各元素依次浮现的效果的，鼓捣了很久也没弄出来，知难而退了

3.高德地图api的引用，看高德api文档，<amap>组件的文档，各种博客，按照各方的代码引用都无效，
一直报错，挫败感拉满，3天没继续写这个项目，最终鼓起勇气把这块先放弃了。或许真的很简单，有机
会再实现试试吧

4.整个项目没有运用到网络请求，写了个纯静态的网页，完全没有锻炼到ajax网络请求这方面的能力

5.效率太慢了，注释也没写多少。继续努力！