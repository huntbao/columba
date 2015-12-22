//author @huntbao
/*global document, ace, StorageArea */

'use strict'

const SAVED_TESTS_STR = 'saved_tests'

class OptionPage {

    constructor() {
        this.initEditor()
        this.loadBtnEvent()
    }

    initEditor() {
        let editor = ace.edit('ace-editor')
        editor.session.setMode('ace/mode/javascript')
        let commands = editor.commands
        commands.addCommand({
            name: 'save',
            bindKey: {win: 'Ctrl-S', mac: 'Command-S'},
            exec(arg) {
                let session = editor.session
                let content = {}
                content[SAVED_TESTS_STR] = session.getValue()
                StorageArea.set(content)
            }
        })
        StorageArea.get(SAVED_TESTS_STR, (result) => {
            editor.setValue(result[SAVED_TESTS_STR] || '', -1)
        })
    }

    loadBtnEvent() {
        let loadBtn = document.querySelector('#load-btn')
        let fileInp = document.querySelector('#test-file')
        let loadFile = () => {
            var reader = new FileReader()
            reader.onload = function (e) {
                let text = e.target.result
                if (text) {
                    let editor = ace.edit('ace-editor')
                    let value = editor.getValue() + '\r\n' + text
                    editor.setValue(value, -1)
                }
            }
            let file = fileInp.files[0]
            if (file && file.size > 0) {
                reader.readAsText(file, 'UTF-8')
            }
        }
        loadBtn.addEventListener('click', loadFile)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new OptionPage()
})