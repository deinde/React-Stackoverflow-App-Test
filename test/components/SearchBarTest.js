import {expect,renderComponent} from '../test_helper';
import SearchBar from '../../src/containers/searchbar';


describe('SearchBar',()=>{
	let component;
		beforeEach(()=>{
		component = renderComponent(SearchBar);
  });
;
  it('search bar is rendering', () => {
  	expect(component).to.have.class('search-bar')
	});
	describe('entering some text',()=>{
		beforeEach(()=>{
    component.find('input').simulate('change','term');
   });
		it('shows text in the the search bar',() =>{
   	expect(component.find('input')).to.have.value('term');
   });
		it('when submitted it clears',()=>{
		component.simulate('submit');	
		expect(component.find('form')).to.have.value('');
		});
  })
});



