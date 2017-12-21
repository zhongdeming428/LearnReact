Link
=====

Link组件的to属性时必须有的，另外主要的差异体现在V4.x新增了一个NavLink组件，差不多就是Link组件的升级版。原来Link组件所支持的activeClassName以及activeStyle已经不再支持，如果要自定义Link的激活样式，需要使用NavLink组件。

此外，还有一点差异体现在通过Link传递参数上。原来通过Link传递的参数可以在组件内通过this.props.params[paramName]来获取，但是现在已经不再生效。如果需要在组件内获取Link所传递的参数，我们需要使用到钩子函数。

在组件渲染时，会调用到构造函数，此时如果Link有传递参数给组件，那么构造函数会接收到一个对象参数，对象中包含一个match属性，通过这个属性，我们可以访问到外部所传递的参数。当组件发生改变（传递的参数发生变化）时，钩子函数componentWillReceiveProps()也会接收到一个这样的对象参数。具体做法如下：

    class DetailDisplay extends React.Component {
        //通过ES6解构来获取match属性
        constructor({match}){
            super();
            //match.params[]获取外部参数值
            this.param = match.params.param;
            this.renderMD = this.renderMD.bind(this);
            this.renderMD(this.param);
        }
        componentWillReceiveProps({match}){
            //在组件接受的参数发生变化时，也会接收到一个包含match的对象参数
            this.param = match.params.param;
            this.renderMD(this.param);
        }
        renderMD(param){
            let path = Params[0].file;
            if(param !== null && param !== undefined && param !== ' '){
                path = Params[param].file;
            }
            let tmp =  Ajax({
                url:path,
                headers:{
                    'content-type':'text/plain'
                },
                method:'get'
            });
            tmp.then(res => {
                // console.log(res);
                let Convertor = new showdown.Converter();
                let html = Convertor.makeHtml(res);
                document.getElementsByClassName('DetailDisplay')[0].innerHTML = html;
            });
        }
        render(){
            return <div className="DetailDisplay">
                
            </div>
        }
    }

通过这种方法，可以获取到通过Link传递给组件的参数。

[上一节](/detail/2)
[下一节](/detail/4)
