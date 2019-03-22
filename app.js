//app.js
App({
  onLaunch: function () {
    const self = this;
    // Login
    wx.login({
      success: res => {
        console.log(res.code);
        wx.request({
          url: `http://192.168.1.102:3000/login?code=${res.code}`,
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            const { session_key, openid } = res.data;
            self.globalData.openid = openid;
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})