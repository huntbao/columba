//author @huntbao
(function () {
    /*global chrome */
    // see https://developer.chrome.com/extensions/content_scripts
    'use strict'
    let code = "" +
        "describe('Todo test', function () {" +
        "it('Add todo', function () {" +
        "var newTodo = 'New todo test';" +
        "var todo = $('.new-todo')[0];" +
        "todo.value = newTodo;" +
        "var event = new Event('change');" +
        "todo.dispatchEvent(event);" +
        "var addResult = $('.todo-list > li label')[0];" +
        "expect(addResult.textContent).toBe(newTodo);" +
        "})" +
        "});"
    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.executeScript({
            code: code
        })
        chrome.tabs.executeScript({
            code: 'jasmineRun()'
        })
    })
})()