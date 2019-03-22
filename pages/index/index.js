//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    formId: ""
  },
  onLoad: function () {
  },
  formSubmit(e) {
    const { formId } = e.detail;
    console.log(formId);
    console.log(app.globalData);
    wx.request({
      url: `http://192.168.1.102:3000/send-message`,
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        form_id: formId,
        touser: app.globalData.openid
      },
      success(res) {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }
    });
  },
})
