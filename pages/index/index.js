//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    formId: ""
  },
  onLoad: function () {
  },
  requestPermission(e) {
    console.log('tap')
    wx.requestSubscribeMessage({
      tmplIds: ['7vpdow8iyZ_m8py6-xNmPKbaGUoGDc5KmKbHKVD0myY'],
      success(res) {
        console.log(res);
      }
    })
  },
})
