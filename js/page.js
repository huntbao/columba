(function () {
    'use strict'
    let $ = (selector) => {
        return document.querySelectorAll(selector)
    }

    class Page {
        constructor() {
            let todo = $('.new-todo')[0]
            todo.value = 'test text'
            var event = new KeyboardEvent('keydown', {
                'view': window
            })
            todo.dispatchEvent(event)
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        new Page()
    });
})()