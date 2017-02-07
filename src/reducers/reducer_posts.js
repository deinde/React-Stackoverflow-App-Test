import {SEARCH_POSTS,SHOW_POST } from '../actions/index';

const INITIAL_STATE ={all:[],post:null};
export default function(state=INITIAL_STATE,action){
	switch(action.type){
		case SHOW_POST:
		 return {...state,all:action.payload.data.items}
		case SEARCH_POSTS:
		 return {...state,all:action.payload.data.items} 
	
	
	}
		return state; 
}