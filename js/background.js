//author @huntbao
/*global chrome */
// see https://developer.chrome.com/extensions/content_scripts

'use strict'

const SAVED_TESTS_STR = 'saved_tests'

class BGPage {

  constructor() {
    this.addEvent()
  }

  addEvent() {
    chrome.browserAction.onClicked.addListener(function (tab) {
      StorageArea.get(SAVED_TESTS_STR, (result) => {
        let code = result[SAVED_TESTS_STR]
        chrome.tabs.executeScript({
          code: code
        })
        chrome.tabs.executeScript({
          code: 'jasmineRun()'
        })
      })
    })
  }
}

new BGPage()