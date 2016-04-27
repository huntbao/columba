//author @huntbao

/*global window */
'use strict'

class StorageArea {

  static get(keys, callback) {
    chrome.storage.local.get(keys, function (result) {
      callback(result)
    })
  }

  static set(data, callback) {
    chrome.storage.local.set(data, function () {
      callback && callback()
    })
  }

  static remove(keys, callback) {
    chrome.storage.local.remove(keys, () => {
      callback && callback()
    })
  }

  static clear(callback) {
    chrome.storage.local.clear(() => {
      callback && callback()
    })
  }

}

window.StorageArea = StorageArea