import {expect} from '../test_helper';
import {searchPosts} from '../../src/actions/index';
import {SEARCH_POSTS} from '../../src/actions/index';


describe('actions',()=>{
	
	describe('searchPosts',()=>{
	
   it('has the correct type',()=>{
   	//first make a variable and call the action!!! saveComment()!!!!
		const action = searchPosts();
		//then access the type it returns then expect it to equal the
		//payload that is imported from types!!!!
     expect(action.type).to.equal(SEARCH_POSTS);
   });
   
   it('promised payload is returning', ()=>{
   	const action = searchPosts('new comment');
    let myFunction= () => {
    setTimeout(() => { 
    console.log('promise is returning search object',action.payload);
  }, 3000);
}
    myFunction();

   });

	});
});