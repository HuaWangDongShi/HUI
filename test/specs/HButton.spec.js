import { mount } from '@vue/test-utils'
import HButton from '@/components/HButton'

function componentWrapper(component,props){
  let wrapper = mount(component);
  wrapper.setProps(props.propsData);
  return wrapper;
}

describe('HButton', () => {
  it('props type', () => {
    expect(componentWrapper(HButton,{
      propsData: {
        type: 'success'
      }
    }).vm.type).equal('success')
  })
  it('props size', () => {
    expect(componentWrapper(HButton,{
      propsData: {
        size: 'small'
      }
    }).vm.size).equal('small')
  })
});
