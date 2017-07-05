// pages/classify/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: 650,
    curNav:1,
    curIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      windowHeight: wx.getStorageSync('windowHeight')
    })
      wx.request({
        url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
        method: 'GET',
        data: {},
        header: {
          'Accept': 'application/json'
        },
        success: function (res) {
          that.setData({
            navLeftItems: res.data,
            navRightItems: res.data
          })
        }
      })
    
  },
  switchRightTab(e){
    let id = e.target.dataset.id,
        index = e.target.dataset.index;
        this.setData({
          curNav:id,
          curIndex:index
        })

  }
})