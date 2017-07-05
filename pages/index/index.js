// pages/index/index.js
Page({
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    duration:1000,
    loadingHidden:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //sliderList
   this.getImages();
   //venuesList
   this.getVenList();
   //choose
   this.getChoiceItems();
  },
  getImages(){
    var _self = this;
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        _self.setData({
          images: res.data
        })
      }
    })
  },
  getVenList(){
    //venuesList
    var _self = this;
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        _self.setData({
          venuesItems: res.data.data
        })
        setTimeout(function () {
          _self.setData({
            loadingHidden: true
          })
        }, 1500)
      }
    })
  },
  getChoiceItems(){
    var _self = this;
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        _self.setData({
          choiceItems: res.data.data.dataList
        })
        setTimeout(function () {
          _self.setData({
            loadingHidden: true
          })
        }, 1500)
      }
    })
  }
})