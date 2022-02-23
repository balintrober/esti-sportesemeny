import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp tesztje', () => {
   //it / test 
   test('Létezik-e "regisztráció" szó?', () => {
       const wrapper = mount(TodoApp)
        const text = wrapper.find('[class="title"]').text()
    //expect(wrapper.text()).toEqual('Regisztráció')   //egyezőség
    //expect(wrapper.text()).toContain('Regisztráció')  //tartalmazza
    expect(text).toBe('Regisztráció eseményre')
   })
})