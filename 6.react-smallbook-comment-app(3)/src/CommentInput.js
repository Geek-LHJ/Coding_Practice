import React,{Component} from 'react'

class CommentInput extends Component{
    //constructor构造器初始化state状态
    constructor(){
        super();
        this.state= {
            username:'',
            content:''
        }
    }
    //改变用户名状态的函数
    handleUsernameChange(e){
        this.setState({
            username: e.target.value
        })
    }
    //改变输入内容状态的函数
    handleContentChange(e){
        this.setState({
            content: e.target.value
        })
    }
    //handleSubmit
    handleSubmit(){
        if (this.props.onSubmit){
            const {username, content}= this.state;
            this.props.onSubmit({username, content});
        }
        this.setState({
            content: ''
        });
    }

    //渲染到页面
    render(){
        return(
            <div className= "comment-input">
                <div className= "comment-field">
                    <span className= "comment-field-name">用户名：</span>
                    <div className= "comment-field-input">
                        <input value= {this.state.username} onChange= {this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>

                <div className= "comment-field">
                    <span className= "comment-field-name">评论内容:</span>
                    <div className= "comment-field-input">
                        <textarea value= {this.state.content} onChange= {this.handleContentChange.bind(this)} />
                    </div>
                </div>

                <div  className= "comment-field-button">
                    <button onClick= {this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        );
    }
}

export default CommentInput;