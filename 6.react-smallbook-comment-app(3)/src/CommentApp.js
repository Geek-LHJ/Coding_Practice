import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
    //
    constructor(){
        super();
        this.state= {
            comments:[]
        }
    }
    //handleSubmitContent
    handleSubmitContent(comment){
        // console.log(comment);
        if(!comment) return
        if(!comment.username) return alert('请输入用户名')
        if(!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment);
        this.setState({
            comments:this.state.comments
        });
    }

    //渲染到页面
    render(){
        return(
            <div className= "wrapper">
                {/* <p>hello React</p> */}
                <CommentInput onSubmit= {this.handleSubmitContent.bind(this)}/>
                <CommentList comments= {this.state.comments}/>
            </div>
        );
    }
}

export default CommentApp