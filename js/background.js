(function () {
    /*global chrome */
    // see https://developer.chrome.com/extensions/content_scripts
    'use strict'
    let code = "alert(1)"

    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.executeScript({
            code: code
        })
    })
})()