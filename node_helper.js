/* Magic Mirror
 * Module: MMM-Shom
 *
 * By @bugsounet -- Dupont Cédric <bugsounet@bugsounet.fr>
 * MIT Licensed.
 */

const NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
  start: function () {
    var interval = null
    console.log("[SHOM] MMM-Shom Version:", require('./package.json').version)
  },

  socketNotificationReceived: function (notification, payload) {
    switch (notification) {
      case "CONFIG":
        this.config = payload
        if (this.config.debug) log = (...args) => { console.log("[SHOM]", ...args) }
        log("Config:" , this.config)
        if (!this.config.scriptURL) console.error("[SHOM] config.scriptURL missing")
        else this.initialize()
        break
    }
  },

  initialize: function () {
    console.log("[SHOM] MMM-Shom est now initialized!")
    this.sendSocketNotification("INITIALIZED")
    setInterval(() => {
      this.sendSocketNotification("UPDATE")
      log("Update Time !")
    }, this.config.update)
  }
});
