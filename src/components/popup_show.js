import React,{Component} from 'react';
import {connect} from 'react-redux';
import {showPost} from '../actions/index';
import {Link} from 'react-router';


class PostShow extends Component{

componentWillMount(){	

	this.props.showPost(this.props.params.id);
}
	renderList(){
     const styleList={
     	marginLeft:5
      }
     const listStyle={
      	listStyle:'none'
      }
       const blox={
        display:'block'
      }
    return this.props.posts.map((post)=>{
      return(
           <li key={post.title}  style={listStyle}>
             <img  style={blox} src={post.owner.profile_image}/>
	           <span><strong>user :</strong><span style={styleList}>{post.owner.display_name}</span></span>
	           <span style={styleList}><strong>reputation :</strong><span style={styleList}>{post.owner.reputation}</span></span>
	           <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
	         </li>
	         )
         })
        }
	render(){
		const pull={
			marginLeft:'65%'
		}
		return(
      <div>
        <h1>Answer!!!</h1>
        <Link to='/'>
         <button style={pull} className='btn btn-success pull-left' type='button' >back to search</button>
        </Link>
        <ul>
         {this.renderList()}
        </ul>
      </div>
    );
	}
}
  function mapStateToProps(state){
    return {posts:state.posts.all}
  }

export default connect(mapStateToProps,{showPost})(PostShow);



