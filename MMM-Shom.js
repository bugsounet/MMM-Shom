/* Magic Mirror
 * Module: MMM-Shom
 *
 * By @bugsounet -- Dupont Cédric <bugsounet@bugsounet.fr>
 * MIT Licensed.
 */

Module.register("MMM-Shom", {
  requiresVersion: "2.14.0",
  defaults: {
    debug: false,
    scriptURL: "https://services.data.shom.fr/hdm/vignette/petite/BREST?locale=fr",
    update: 1000 * 60 * 60
  },

  start: function () {
    console.log("[SHOM] Starting MMM-Shom")
  },

  notificationReceived: function (notification, payload, sender) {
    switch (notification) {
      case "DOM_OBJECTS_CREATED":
        this.sendSocketNotification("CONFIG", this.config)
        break
    }
  },

  socketNotificationReceived: function (notification, payload) {
    switch (notification) {
      case "INITIALIZED":
        postscribe("#SHOM", "<script src=" + this.config.scriptURL + "></script>")
        break
      case "UPDATE":
        this.shom()
        break
    }
  },

  shom: function() {
    var shom = document.getElementById("SHOM")
    shom.innerHTML = ""
    postscribe("#SHOM", "<script src=" + this.config.scriptURL + "></script>")
  },

  getScripts: function () {
    return [ this.file("node_modules/postscribe/dist/postscribe.js") ]
  },

  getDom: function () {
    var wrapper= document.createElement("div")

    var contener= document.createElement("div")
    contener.id = "SHOM"

    wrapper.appendChild(contener)
    return wrapper
  }
});
