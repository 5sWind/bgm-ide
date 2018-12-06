var TreeView = require('./TreeView')
var bgmJSUtil = require('bgmchainjs-util')
var BN = bgmJSUtil.BN
var remixLib = require('remix-lib')
var txFormat = remixLib.execution.txFormat

module.exports = {
  decodeResponseToTreeView: function (response, fnabi) {
    var treeView = new TreeView({
      extractData: (item, parent, key) => {
        var ret = {}
        if (BN.isBN(item)) {
          ret.self = item.toString(10)
          ret.children = []
        } else {
          ret = treeView.extractDataDefault(item, parent, key)
        }
        return ret
      }
    })
    return treeView.render(txFormat.decodeResponse(response, fnabi))
  }
}
