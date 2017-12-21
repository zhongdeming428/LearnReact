Route
=====

在React Router V3.x 中，Route并非一个真正的组件，它只是用于创建了一个Route配置对象，我们知道在Vue.js中，创建路由就是通过一个JavaScript对象来配置的。在V3.x版本中，Route只是用于配置Route对象，类似于Vue，但是这样做的好处在于比直接配置对象更加直观，编程更加简便。

在React Router V4.x 中，Route成为了一个真正的组件，无论在哪使用了Route组件，都会被渲染。当Route的path属性匹配到当前URL时，会使用它的component、render、children属性去渲染；如果path属性不匹配，那么久不渲染组件（null）。

1.嵌套Route
-----

在React Router V3.x中，Route可以被一层一层的嵌套：

    <Route path="..." component={...}>
        <Route path="..." component={...}/>
        <Route path="..." component={...}/>
    </Route>

当嵌套的子Route的path属性匹配到当前URL时，就会使用该Route渲染React元素，子Route的component属性会被传递到父Route中去，作为Children呈现。

但是在React Router V4.x中，子Route只能被父Route的component属性渲染，即Route元素不再具有子元素。

很多人不理解这一句话，比较绕口，综合前面所说的Route已经真正成为了一个组件，那么体现在具体的做法中就是（父）Route不再需要在component所对应的的组件中添加一个指定渲染位置的{this.props.children},（子）Route不再包含在父Route中。因为Route已经是一个真正的组件，那么我们可以把需要渲染的Route直接放到原来{this.props.children}的位置即可。

接下来我们用代码实例来做一个演示：

V3.x写法：

    //父组件,中间包含一个指定子组件位置的this.props.children
    class Father extends React.Component {
        render(){
            return <div>
                <h1>I'm father！</h1>
                {this.props.children}
            </div>
        }
    }

    //子组件
    class Child extends React.Component {
        render(){
            return <h2>
                I'm Child!
            </h2>
        }
    }

    //Route可以嵌套，结果就是子Route的组件渲染到父Route的组件中的{this.props.children}位置
    <Router history="...">
        <Route path="..." component={Father}>
            <Route path="..." component={Child}/>
        </Route>
    </Router>

在V4.x版本中，Route不再可以嵌套使用，那么如何写呢？

    //父组件，原来{this.props.children}的位置被一个Route组件所取代
    class Father extends React.Component {
        render(){
            return <div>
                <h1>I'm father!</h1>
                <Route path="..." component={Child}/>
            </div>
        }
    }

    //子组件
    class Child extends React.Component {
        render(){
            return <h2>
                I'm Child!
            </h2>
        }
    }

    //Route不再嵌套，直接将子Route放入到父Route所关联的组件的内部。
    <BrowserRouter>
        <Route path="..." component={Father}>
    </BrowserRouter>


需要注意的是：Route外部必须使用Router包括起来，有关联的Link组件和Route组件必须包括在同一个Router之下。此外，一个Router有且只能有一个根组件。

2.on* 系列属性
------

V3.x中拥有一系列on*钩子函数，比如onEnter、onUpdate、onLeave等，它们会在Route路由进入、数据更新、离开时调用。但是这些方法本质上还是React组件的钩子函数，可以使用原来的方法取代，所以在V4.x版本中，这些方法不再使用。具体取代方案如下：

    onEnter -----> componentDidMount || componentWillMount
    onUpdate -----> componentDidUpdate || componentWillUpdate || componentWillReceiveProps
    onLeave -----> componentWillUnmount

这些钩子函数的作用是十分巨大的，它使得我们可以在适当的时机做一些需要做的事情。

3.Switch组件
------

这是V4.x中提供的一个新组件，如果Switch被使用，那么只渲染匹配的第一个Route。
在V3.x版本中，所有被匹配到的组件都会被渲染出来，现在如果使用Switch组件包括Route组件，那么只会渲染第一个匹配的Route。
使用方法：

    const App = ()=>(
        <Switch>
            <Route exact path="/"/>
            <Route exact path="/introduce"/>
            <Route exact path="/detail"/>
        </Switch>
    );

上面例子中，exact表示精准匹配，只有当当前URL完全匹配到path时，才会渲染对应Route的对应组件。

4.Redirect
-----

重定向组件，有一个必填属性to，表示要重定向到的路由。

[上一节](/detail/1)
[下一节](/detail/3)