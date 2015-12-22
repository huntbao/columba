//author @huntbao
/*global describe, it, expect */
describe('Todo test', function () {
    it('Add todo', function () {
        var newTodo = 'New todo test'
        var todo = $('.new-todo')[0]
        todo.value = newTodo
        var event = new Event('change')
        todo.dispatchEvent(event)
        var addResult = $('.todo-list > li label')[0]
        expect(addResult.textContent).toBe(newTodo)
    })

    it('Delete todo', function() {
        var todoLis = $('.todo-list > li')
        var num = todoLis.length;
        var destroyBtn = $('.destroy', todoLis[0])[0];
        var event = new Event('click')
        destroyBtn.dispatchEvent(event)
        expect($('.todo-list > li').length).toBe(num-1)
    })
})
