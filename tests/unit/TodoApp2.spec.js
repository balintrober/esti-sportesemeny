import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp komponens tesztelése', () => {
    test('Küldendő objektum kap-e értéket?', async () => {
        const wrapper = mount(TodoApp)
        const input = wrapper.find('input[name="nev"]')
        await input.setValue('Tesztelő')
        expect(wrapper.vm.nev).toBe('Tesztelő')
    })

    test('Feltételek elfogadásának tesztje', async () => {
        const wrapper = mount(TodoApp)
        const inputCheck = wrapper.find('input[type="checkbox"]')

        await inputCheck.setChecked()
        expect(inputCheck.element.checked).toBeTruthy()
        // expect(inputCheck.element.checked).toBe(true)
    })
})