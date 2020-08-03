import { mount } from '@vue/test-utils'
import HButton from '@/components/HButton'
const wrapper = mount(HButton, {
  propsData: {
    type: 'primary'
  }
});

describe('HButton', () => {
  it('props type', () => {
    expect(wrapper.props().type).equal('primary')
  })
});
