No Match
=====

当用户在地址栏输入一些我们没有预料到的URL时，我们的路由会无法匹配，此时页面将会跳出不存在（404），对于用户来说这是一种不好的用户体验，我们最好能够预先设计一个提示页面。

要实现这个功能，我们需要配合几种组件来使用。
使用Switch组件包括一系列Route，那么会渲染第一个匹配的Route，如果我们在Switch的最后，放置一个不具有path属性的Route，那么当前面所有的Route都不匹配URL时，就会匹配到最后的这个Route，而这个Route，就用于渲染我们定制的404页面。

示例：

    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/introduce" exact component={Introduce}/>
        <Route path="/detail"  component={Detail}/>
        <Route path="/404" component={NotFound}/>
        <Route render={()=>(<Redirect to="/404"/>)}/>
    </Switch>

这里使用了一个重定向组件，其实是没有必要的,不过也是一种实现的方法。

[上一节](/detail/4)
[下一节](/detail/6)