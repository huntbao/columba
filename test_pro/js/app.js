/*global app, $on */
(function () {
    'use strict';

    /**
     * Sets up a brand new Todo list.
     *
     * @param {string} name The name of your new to do list.
     */
    function Todo(name) {
        this.storage = new app.Store(name);
        this.model = new app.Model(this.storage);
        this.template = new app.Template();
        this.view = new app.View(this.template);
        this.controller = new app.Controller(this.model, this.view);
    }

    var todo = new Todo('todos-vanillajs');

    function setView() {
        todo.controller.setView(document.location.hash);
        //var todoLis = qsa('.todo-list > li')
        //var num = todoLis.length;
        //var toggleBtn = qsa('.toggle', todoLis[num-1])[0];
        //console.log(toggleBtn)
        //var event = new MouseEvent('click', {
        //    "bubbles": true
        //})
        //toggleBtn.dispatchEvent(event)
    }

    $on(window, 'load', setView);
    $on(window, 'hashchange', setView);
})();
