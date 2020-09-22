# develop

基于 vue-cli3.0+webpack 4+vant ui + sass+ rem 适配方案+axios 封装，构建手机端模板脚手架

#### 介绍

[关于项目介绍](https://segmentfault.com/a/1190000019275330)

1.  vuecli3.0
2.  多环境开发
3.  axios 封装
4.  rem 适配方案
5.  生产环境 cdn 优化首屏加速
6.  babel 低版本浏览器兼容
7.  环境发布脚本

#### 多环境

之前写过一个多环境的方案，是基于 vue-cli2.0 的 [vue 多环境配置方案-传送门](https://segmentfault.com/a/1190000019136606)
最近新的项目采用了 vuecli3.0 开始了一番折腾

这里参考了[vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) 基本思路不变在 src 的文件里新建 config
根据不同的环境去引用不同的配置文件，不同的是在根目录下有三个设置环境变量的文件这里可以参考 vue-admin-template

#### rem 适配方案

还是那句话，用 vw 还是用 rem，这是个问题？

选用 rem 的原因是因为 vant 直接给到了这个适配方案，个人也比较喜欢这个方案

[vant](https://youzan.github.io/vant/#/zh-CN/quickstart)

#### 总结

因为项目刚刚构建起来，后面还会持续更新，实际使用过程中一定还有很多问题，如果文章中有错误希望能够被指正，一起成长

# 关于我

您可以扫描添加下方的微信并备注 Soul 加交流群，给我提意见，交流学习。

<p>
  <img src="https://tweapp.top1buyer.com/mine.jpg" width="256" style="display:inline;">
</p>
 
如果对你有帮助送我一颗小星星（づ￣3￣）づ╭❤～
