import {expect} from "../test_helper";
import commentReducer from "../../src/reducers/reducer_posts";
import {SEARCH_POSTS} from "../../src/actions/index";





describe('Comments Reducer', () => {

it('handles action with unkown type', () => {
		expect(commentReducer(undefined, {})).to.be.instanceOf(Object);
		// expect(commentReducer(SHOW_POSTS, {})).to.eql([]);
	});

	it('handles the correct type', () =>{
    const action = {type:{SEARCH_POSTS},payload:['New Comment']}
    console.log('The payload',action.payload)
    
 	});
});
