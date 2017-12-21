1.前言
=====


React Router的4.0正式版本发布已经有了9个月了，最近正在学习React Router，但是国内网上主要的教程还是4.0版本之前的，只能在GitHub上对着英文文档学习，踩过了一些坑，借着实践React Router的这个机会，顺便总结一下自己学习过程中的经验。主要涉及React Router 4.x版本与3.x版本之间的差异。

2.定义
=====


React Router是专门为React框架定制的路由解决方案，在使用React开发过程中，可以方便的使用React Router实现URL与组件的映射关系以及路由导航。

3.开始使用
=====


npm方式：

`npm install react-router-dom --save`

在JavaScript文件中，使用之前再引入一下即可：
 
`import { Link, BrowserRouter, Route, } from 'react-router-dom'`

4.学习网址
=====



* [React-Router 官方汇总GitHub库](https://github.com/ReactTraining/react-router)
* [React-Router 官方Demo网址](https://reacttraining.com/react-router/web/guides/philosophy)
* [React Router 官方汇总如何从3.x迁移到4.x](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/migrating.md)
