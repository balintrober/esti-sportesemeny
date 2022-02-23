import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp tesztelése', async () => {
    test('Küldendő objektum kap-e értéket?', () => {
        const wrapper = mount(TodoApp)
        const input = wrapper.find('[name="nev"]')
        await input.setValue('Tesztelő')
        expect(input.value).toBe('Tesztelő')
    })
})