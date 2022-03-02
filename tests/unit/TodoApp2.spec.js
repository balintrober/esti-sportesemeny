import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp komponens tesztelése', () => {
    test('Küldendő objektum kap-e értéket?', async () => {
        const wrapper = mount(TodoApp)
        const input = wrapper.find('input[name="nev"]')
        await input.setValue('Tesztelő')
        expect(wrapper.vm.nev).toBe('Tesztelő')
    })
})