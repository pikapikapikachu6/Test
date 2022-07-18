const model = require('./model.js')
setTimeout(async () => {
  await model('permission').put({ _id: 'root'}, { expire: Date.now() * 2, user: 'root', control: { 权限管理: 2 }, data: { 基础信息: 2 } })
  await model('permission').put({ _id: 'root1'}, { expire: Date.now() * 2, user: 'root', target: { uid: [123] }, control: { 权限管理: 2 }, data: { 其他: 2 } })
  await model('permission').put({ _id: 'root2'}, { expire: Date.now() * 2, user: 'root', target: { uid: [1234] }, control: { 权限管理: 1 }, data: { 基础信息: 1, 其他: 1 } })
  await model('data').put({ _id: 'test'}, { 基础信息: { 姓名: '测试', uid: 123}, 其他: '您好！'})
  await model('data').put({ _id: 'test2'}, { 基础信息: { 姓名: '测试2', uid: 1234}, 其他: '您好2！'})
  console.log('complete')
}, 3e3)