const _ = require('./utils')

Component({
  properties: {
  },
  data: {
    flag: false,
  },
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: () => {
          this.setData({
            flag: _.getFlag(),
          })
        }
      })
    }
  },
  methods: {
    goButton(){
      // wx.navigateTo({
      //   url: './button/button'
      // })
    }
  }
})
