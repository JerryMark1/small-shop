// pages/brand/index.js
Page({
  data: {
  
  },
  onLoad: function (options) {
    this.getDetail(options);
  },
  getDetail(options){
    var that = this
    wx.request({
      url: 'http://www.huanqiuxiaozhen.com/wemall/venues/getBrandAndType?id=' + options.id,
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log( res );
        that.setData({
          brandList: res.data.data
        });
        console.log( that.brandList );
      }
    })
  }
})