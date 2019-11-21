//app.js
App({
  onLaunch: function () {
    const self = this;
    // Login
    wx.login({
      success: res => {
        wx.request({
          url: `http://localhost:3000/login?code=${res.code}`,
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            const { session_key, openid } = res.data;
            console.log(openid);
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