import { shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'

describe('TodoList.vue', () => {
  it('shows an error message if input is empty and focused', () => {
    const wrapper = shallowMount(TodoList)
    //1
    wrapper.setData({ newItemName: " "})
    expect(wrapper.find(".error-msg").exists()).toBe(false)

    //2
    wrapper.setData({ newItemName: "test" })
    expect(wrapper.find('.error-msg').exists()).toBe(false)
  })

  it('shows a button to add new item', () => {
    const wrapper = shallowMount(TodoList)
    //1
    expect(wrapper.find("#add-new-item-btn").exists()).toBe(true)
  })

  it('renders a list of todo with at least 1 todo sample element', () => {
    const wrapper = shallowMount(TodoList)
    //1
    expect(wrapper.find(".todo-list-item").exists()).toBe(true)
  })
})