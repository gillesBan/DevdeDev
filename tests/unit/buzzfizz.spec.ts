import {shallowMount} from '@vue/test-utils'
import {mount} from '@vue/test-utils'
import Timer from '@/components/Timer.vue'


describe('getbuzzfizz',()=>{
    it('print buzz, fizz, buzzfizz',() =>{
        const wrapper = shallowMount(Timer)
        expect(typeof wrapper.vm.$mount).toBe('function')
    })

    it('return fizz',()=>{
        const msg = 'FizzBuzz'
        const wrapper = shallowMount(Timer,{
            propsData : {
                fizz : 'Fizz'
            }
        })
        console.log(wrapper.props().fizz)
        expect(wrapper.props().buzzFizz).toBe(msg)
    })

    it('return fizz if modulo timer equal 3',()=>{
        const msg = 3
        const wrappermount = shallowMount(Timer,{
            data() {
                return {
                    timer:3
                }
            }
        })
        console.log(wrappermount.find('.timer'))
        expect(wrappermount.find('.timer')).toBe(3)
    })
})