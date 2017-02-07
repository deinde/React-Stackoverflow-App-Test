import {renderComponent, expect} from "../test_helper";
import PopShow from "../../src/containers/popup";


describe('Pop',() => {
  let component;
  beforeEach(()=>{
  	//this is the stub(fake simulated array to inject into the test)called props!!
  	const props ={comments:['New Comment', 'Other New Comment']};
  	component = renderComponent(PopShow,null,props);
  });

  it('it exist',() => {
 	// const component = renderComponent(PopShow);
 	expect(component).to.have.class('list-group')
 });

});

