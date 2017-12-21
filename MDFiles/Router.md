Router
=====
这一节主要是讲Router部分所发生的变化。

在V3.x的react router中，只有一个Router组件，它包含一个history属性，我们需要从包中引入三种模式

* hashHistory
* browserHistory
* createMemoryHistory

可以把其中任意一种模式传递给Router组件的history属性，以代表三种不同的历史模式。但是在V4.x版本中，我们不再需要这样做，因为V4.x版本内置多个Router组件：

*   Router
*   BrowserRouter
*   HashRouter
*   MemoryRouter

我们只需要将他们从react-router-dom包中引入即可使用，代表相应的history模式，比之前的更加方便。对于这三个新的Router，我们只需要把它当做之前的Router那样使用就可以了。

另外还有一个不同之处就是所有的Router组件，都不再像以前那样可以内嵌多个Route组件了，因为新版本中，一个Router组件只可以有一个根组件，那么当我们需要包含多个Route组件的时候，我们可以用一个div来包含所有的Route，让它作为根组件：

    <BrowserRouter>
        <div>
            <Route/>
            <Route/>
        </div>
    </BrowserRouter>

如果一个Router组件包含多个根组件，那么将会发生错误。
比如：

    <BrowserRouter>
        <Route/>
        <Route/>
    </BrowserRouter>

这是比较容易犯的错误，因为在V3.x中这样写是没有问题的，需要多加注意。


[上一节](/react-router-demo/detail/)
[下一节](/react-router-demo/detail/2)