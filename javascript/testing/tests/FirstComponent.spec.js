import FirstComponent from '@/components/FirstComponent'
import 'regenerator-runtime/runtime'
import { mount } from '@vue/test-utils'


const componentWrapper = mount(FirstComponent, {
  mocks: {
    window: {}
  }
})

describe('FirstComponent', () => {
  it('test to contain message', () => {
    expect(componentWrapper.text()).toContain('hello')
  })

  it('check button visibility', () => {
    const button = componentWrapper.find('#my-button')
    expect(button.exists()).toBeTruthy()
    expect(button.element.innerHTML).toContain('click')
  })

  it('button must be triggered and change global var', async () => {
    const button = componentWrapper.find('#my-button')
    await button.trigger('click')
    expect(window.biba).toBeTruthy()
  })

  it('check changeSomeText method', () => {
    expect(componentWrapper.vm.someText).toEqual('default')
    componentWrapper.vm.changeSomeText()
    expect(componentWrapper.vm.someText).toEqual('hey')
  })
})