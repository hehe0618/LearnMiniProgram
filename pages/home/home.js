// pages/home/home.js
// getApp()获取App()产生的示例对象
const app = getApp()
console.log(app.globaData.name);
console.log(app.globaData.age);

Page({
  data: {
    name: 'Coderwhy',
    age: 18,
    students: [
      {id: 110, name: 'kobe', age: 30},
      {id: 110, name: 'james', age: 30},
      {id: 110, name: 'curry', age: 30},
      {id: 110, name: 'why', age: 30}
    ],
    coundet: 0
  },
  addClick() {
    // 1.错误方法 和vue不一样
    // this.data.coundet += 1;
    // console.log(this.data.coundet);
    // 2.正确方法使用 setData()
    this.setData({
      coundet: this.data.coundet + 1
    })
  },
  reClick() {
    this.setData({
      coundet: this.data.coundet - 1
    })
  },
  // 获取用户信息
  GetUserInfoClick(event) {
    console.log(event);
  }
})