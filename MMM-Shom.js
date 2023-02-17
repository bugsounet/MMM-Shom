Module.register("MMM-Shom", {
    notificationReceived: function (notification, payload) {
      switch(notification) {
        case "DOM_OBJECTS_CREATED":
          this.sendSocketNotification("INIT")
          this.sendNotification("SHOW_ALERT", {
            type: "notification",
            message: "[ERROR] This module is now in End Of Life.",
            title: "MMM-Shom",
            timer: 24*60*60*1000
          })
          break
      }
    },

  getDom: function() {
    var dom = document.createElement("div")
    dom.style.display = 'none'
    return dom
  }
});
