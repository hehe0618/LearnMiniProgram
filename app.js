App({
  // 生命周期函数：后台存活2个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // console.log("小程序初始化完成了：onLaunch");
    // 异步调用 -> 
    // wx.getUserInfo({
    //   // 数据拿到后，再进行回调的
    //   success: function(res) {
    //     console.log(res);
    //   }
    // })

    // setTimeout(() => {
    //   const err = new Error()

    //   throw err
    // }, 3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // console.log("小程序启动了：soShow");
    // console.log(options);
    // 1.判断小程序的进入场景
    switch(options.scene) {
      case 1001:
      console.log("状态码为：",options.scene);
      break;
      case 1005:
        console.log("状态码为：",options.scene);
        break;
    }
    // 2.获取用户的信息，并且获取到用户信息之后，将用户的信息传递给服务器
    wx.getUserInfo({
      success: (res) => {
        console.log(res);
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("小程序进入前台或者后台了：onHide");
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("小程序发生了一些错误");
  },
  // 定义全局变量
  globaData: {
    name: 'coderlkr',
    age: 18
  }
})
