import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

class Pop extends Component{

constructor(props){
	super(props)
	this.convertDate = this.convertDate.bind(this);
  this.state={post:''}
}

convertDate(myDate){
let dateString=new Date(myDate).toUTCString();
dateString=dateString.split(' ').slice(0, 4).join(' ');
console.log(dateString)   
return dateString;

}

  renderList(){
    return this.props.posts.map((post)=>{
    
    const style={
      border:'2px solid yellow'
     }
   
      const margin={
      position:'relative',  
      marginLeft:10,
      textWeight:'bold'
     }
      const nudge={
       marginLeft:10,
      }
      const blox={
        display:'block'
      }
       const listStyle={
        listStyle:'none'
      }
     return(
      <div>
   	  { post.is_answered ?
      <div><h2>Answered</h2>
      
       <li key={ post.title }>
         <Link to={'popup/'+post.question_id}>
           <img style={style} src={post.owner.profile_image}/> 
           <h3 dangerouslySetInnerHTML={{ __html: post.title }}></h3>
         </Link>  
         <span ><strong>Score:</strong><span style={nudge}>{post.score}</span></span>
         <span style={margin} ><strong>View Count :</strong><span style={nudge}>{post.view_count}</span></span>
         <span style={margin}><strong>Asked on:</strong><span style={nudge}>{this.convertDate(post.creation_date)}</span></span>
         <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
        
      <div>
      
      {post.tags.length > 1 ?
      <span className=''>  <strong>Tags:</strong> 
        {
          post.tags.map((post)=>{
          return(
            <span style={margin}>{post}</span>
                )
              }
            )
          }
       
        </span>

        : 
       <div>
        {
          post.tags.map((post)=>{
            return(
              <span style={margin}> less tags ={post}</span>
              )
          })
        }
      </div>
       } 


       </div>
     
      </li> 
      </div>
      :
      <div>
      <h2>Not Answered</h2>
      <li key={ post.title }>
        <img  src={post.owner.profile_image}/> 
        <h3>{post.title}</h3>
        <span ><strong>Score:</strong><span style={nudge}>{post.score}</span></span>
        <span style={margin} ><strong>View Count :</strong><span style={nudge}>{post.view_count}</span></span>
        <span style={margin}><strong>Asked on:</strong><span style={nudge}>{this.convertDate(post.creation_date)}</span></span>
        <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
      </li>
      <div>
      <span ><strong>Tags:</strong></span>
        {
          post.tags.map((post)=>{
            return(
              <span style={margin}>{post}</span>
              )
          })
        }
      </div>
     
      </div>

    }
    </div>
   	)
  });
}
render(){
   const listStyle={
   listStyle:'none'
   }
    return(
      <ul className='list-group' style={listStyle}>
        {this.renderList()}
      </ul>
    )
	}
}
function mapStateToProps(state){
	return {posts:state.posts.all}
}


export default connect(mapStateToProps,null)(Pop);


