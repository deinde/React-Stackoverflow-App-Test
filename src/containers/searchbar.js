import React,{Component} from 'react';
import {connect} from 'react-redux';
import Pop from './popup';
import {Link} from 'react-redux';
import {searchPosts} from '../actions/index';
import {fetchPosts} from '../actions/index';




class SearchBar extends Component{
	constructor(props){
		super(props)
		this.state={
			term:''
		}
	}


	onSearch(e){
   this.setState({term:e.target.value})
	}

  onFormSubmit(event){
		event.preventDefault();
		//event.target.value is being passed in fetch. this was set in onInputChange function
		//as this.setState({term:event.target.value})
		this.props.searchPosts(this.state.term);
		this.setState({term:''})
	}


   render(){
    const headerStyle ={
   	textAlign:"center",
   	marginTop:50,
   	marginBottom:30,
   	fontSize:2.8+'em',
   	fontWeight:'100'
   }
   const inputStyle={
   	textAlign:"center",
    height:50,
    marginBottom:50
   }
   const searchBtn={
   	height:50,
   	marginBottom:50
   }
   const center={
   	marginLeft:'25%',
   	color:'red'
   };
  
    return(
			<div className='search-bar'>
			 <h2 style={headerStyle}>stack<strong>overflow</strong></h2>
         <form onSubmit={this.onFormSubmit.bind(this)} className='input-group'>
	        <input style={inputStyle} className='form-control'placeholder='Enter Search Term' value={this.state.term} onChange={this.onSearch.bind(this)}/>
	        <span className='input-group-btn'><button type='submit' style={searchBtn} className='btn btn-primary'>Search</button></span>
	      </form>
	      <p className='center' >BUILT BY DEINDE DAWODU USING REACT.JS & REDUX</p>
        <Pop/>
        </div>  
		   ) 
	   }
   }

  function mapStateToProps(state){
    return {posts:state.posts.all}
  }



 export default connect(mapStateToProps,{searchPosts})(SearchBar);
