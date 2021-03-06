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
        display:'block',
        marginTop:10,
        marginBottom:10,
        marginLeft:0
      }

     
    return this.props.posts.map((post)=>{
      return(
           <li key={post.title}  style={listStyle}>
             <img className='' style={blox} src={post.owner.profile_image}/>
	           <span><strong>user :</strong><span style={styleList}>{post.owner.display_name}</span></span>
	           <span style={styleList}><strong>reputation :</strong><span style={styleList}>{post.owner.reputation}</span></span>
	           <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
	         </li>
	         )
         })
        }
	render(){
		const top={
		  marginTop:10
		}
    const pad={
      paddingLeft:0
    }
    const backColor={
      background:'#fff291'
    }
    const color={
      color:'green',
      marginLeft:5
    }
    const inline={
      display:'inline-block',
      color:'green'
    }  
		return(
      
       <div className='panel panel-default'>
        <div style={backColor} className='panel-heading'>
          <h2 style={inline}>Answered!</h2>
          <span style={color} className="glyphicon glyphicon-ok" aria-hidden="true"></span>
         </div>
         <Link to='/'>
            <button style={top} className='btn btn-success pull-right' type='button' >back to search</button>
          </Link>
          <ul style={pad}>
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





