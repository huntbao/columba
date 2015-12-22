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

    it('Toggle todo', function() {
        var todoCountEl = $('.todo-count strong')[0]
        var todoCount = parseInt(todoCountEl.textContent)
        var todoLis = $('.todo-list > li')
        var num = todoLis.length;
        var toggleBtns = $('.toggle', todoLis);
        var toggleBtn = toggleBtns[toggleBtns.length-1]
        var event = new MouseEvent('click', {
            "bubbles": true
        })
        toggleBtn.dispatchEvent(event)
        expect(toggleBtn.parentNode.parentNode.classList.toString()).toContain('completed')
        expect(parseInt($('.todo-count strong')[0].textContent)).toBe(todoCount-1)
    })

    it('Toggle all todo', function() {
        var todoAllEl = $('.toggle-all')[0]
        var todosNum = $('.todo-list > li').length
        var activeTodosNum = parseInt($('.todo-count strong')[0].textContent)
        var event = new MouseEvent('click', {
            "bubbles": true
        })
        todoAllEl.dispatchEvent(event)
        expect(parseInt($('.todo-count strong')[0].textContent)).toBe(activeTodosNum===0 ? todosNum : 0)
        activeTodosNum = parseInt($('.todo-count strong')[0].textContent)
        event = new MouseEvent('click', {
            "bubbles": true
        })
        todoAllEl.dispatchEvent(event)
        expect(parseInt($('.todo-count strong')[0].textContent)).toBe(activeTodosNum===0 ? todosNum : 0)
    })

    it('Delete todo', function() {
        var todoLis = $('.todo-list > li')
        var num = todoLis.length;
        var destroyBtns = $('.destroy', todoLis);
        var destroyBtn = destroyBtns[destroyBtns.length-1]
        var event = new MouseEvent('click', {
            "bubbles": true
        })
        destroyBtn.dispatchEvent(event)
        expect($('.todo-list > li').length).toBe(num-1)
    })
})




