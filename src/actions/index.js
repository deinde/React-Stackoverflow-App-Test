import axios from 'axios';

const API_KEY ='&key=YfIHATcpDDCkHD8ACvxTgw(('
const API_KEY_2= '/answers?site=stackoverflow&filter=withbody&key=YfIHATcpDDCkHD8ACvxTgw(( '	

export const SEARCH_POSTS ='SEARCH_POSTS';
export const SHOW_POST = 'SHOW_POST';

export function searchPosts(intitle){
	const ROOT_URL = 'http://api.stackexchange.com/2.2/search?order=desc&sort=activity&tagged=rest&intitle='+intitle+'&site=stackoverflow&filter=withbody'; 
	const request = axios.get(`${ROOT_URL}${API_KEY}`);
	return{
		type:SEARCH_POSTS,
		payload:request
	}
}

 export function showPost(id){
	const ROOT_URL_SEARCH_QA ='http://api.stackexchange.com/2.2/questions/';
  const ID = id;
  const request = axios.get(`${ROOT_URL_SEARCH_QA}${ID}${API_KEY_2}`);
	console.log('show post is working!!!!!!!!!!',request);
	return{
		type:SHOW_POST,
		payload:request
	}
}



















