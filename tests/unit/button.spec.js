import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Button from '../../src/button/button'
chai.use(sinonChai)

describe('Button.vue', () => {
    it('存在.', () => {
        expect(Button).to.exist
    })
    it('可以设置icon.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'setting'
            }
        })
        const useElement = wrapper.find('use')
        expect(useElement.attributes()['href']).to.equal('#i-setting')
    })
    it('可以设置loading.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'setting',
                loading: true
            }
        })
        const vm = wrapper.vm
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    })

    it('icon 默认的 order 是 1', () => {
        const wrapper = mount(Button, {
            attachToDocument: true,
            propsData: {
                icon: 'setting',
            }
        })
        const vm = wrapper.vm
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('1')
    })

    it('设置 iconPosition 可以改变 order', () => {
        const wrapper = mount(Button, {
            attachToDocument: true,
            propsData: {
                icon: 'setting',
                iconPosition: 'right'
            }
        })
        const vm = wrapper.vm
        const icon = vm.$el.querySelector('svg')
        console.log(getComputedStyle(icon),777)
        expect(getComputedStyle(icon).order).to.eq('2')
    })
    it('点击 button 触发 click 事件', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'setting',
            }
        })
        const vm = wrapper.vm


        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called

    })
})