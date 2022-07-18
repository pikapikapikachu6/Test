<script setup>
import srpc from '../component/srpc.js'
srpc('http://localhost:11111/')
let jwt = 'eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InJUR0FiU0tVZnVwZERlUmEifQ.eyJpZCI6InJvb3QiLCJuYW1lIjoi54Gv54Gr6JGz6JWkIiwiaXNzIjoiYWF1dGgiLCJpYXQiOjE2NTc0NTYxMzI4MTgsImF1ZCI6Inh5enNhcyJ9.tKL9-tMvsfJqPLKrlqXW1D-g6GGjQWkxKf8sBEBSOQk6zOld0U8-lSXA4wNzTmbX0sCMaeZrSBNmZ63sLfrulaK9QJTm7KKr2Is-SdRrOQlr1KcjdmjxHZMq_GkGRnwnWJkHp6DFKG5d-YewhOjR44nLk69dm8DJA3nmP4WKYre-ZqyHHzYS0e-qKq3g48b5RCQmW3KpZ6_uqA83VeQ7Dgsf9M9bgJgj8Xe8FPbqLEiRA5ChTfnT_RuLBr_7jF0qLgXxqA4xBMIJyRiDUIYkPQlgMMixCgpEPt0GEU1IQ1Ex7zj2pDBKMbuu7gCSin-AUiTWu6RdqHaEcGGwBugsiQ'

async function test_get_all() {
  await test_get_1_0()
  await test_get_1_1()
  await test_get_1_2()
  await test_get_0()
  await test_get_1()
  await test_get_2()
}
async function test_get_1_0() {
  console.log('test_get_1_0')
  const result = await srpc.Z.get(jwt, 'test', { '': 0 })
  console.log(result)
  console.log('finish')
}

async function test_get_1_1() {
  console.log('test_get_1_1')
  const result = await srpc.Z.get(jwt, 'test', { '': 1 })
  console.log(result)
  console.log('finish')
}

async function test_get_1_2() {
  console.log('test_get_1_2')
  const result = await srpc.Z.get(jwt, 'test', { '': 2 })
  console.log(result)
  console.log('finish')
}

async function test_get_0() {
  console.log('test_get_0')
  const result = await srpc.Z.get(jwt, 'test2', { '': 0 })
  console.log(result)
  console.log('finish')
}

async function test_get_1() {
  console.log('test_get_1')
  const result = await srpc.Z.get(jwt, 'test2', { '': 1 })
  console.log(result)
  console.log('finish')
}

async function test_get_2() {
  console.log('test_get_2')
  const result = await srpc.Z.get(jwt, 'test2', { '': 2 })
  console.log(result)
  console.log('finish')
}

async function test_get_part_base() {
  // await test_get_base_0()
  await test_get_base_1()
  // await test_get_base_2()
}

async function test_get_base_0() {
  console.log('test_get_base_0')
  const result = await srpc.Z.get(jwt, 'test2', { '基础信息': 0 })
  console.log(result)
  console.log('finish')
}

async function test_get_base_1() {
  console.log('test_get_base_1')
  const result = await srpc.Z.get(jwt, 'test', { '基础信息': 1 })
  console.log(result)
  console.log('finish')
}

async function test_get_base_2() {
  console.log('test_get_base_2')
  const result = await srpc.Z.get(jwt, 'test2', { '基础信息': 2 })
  console.log(result)
  console.log('finish')
}

async function test_get_part_other() {
  await test_get_other_0()
  await test_get_other_1()
  await test_get_other_2()
}

async function test_get_other_0() {
  console.log('test_get_other_0')
  const result = await srpc.Z.get(jwt, 'test2', { '其他': 0 })
  console.log(result)
  console.log('finish')
}

async function test_get_other_1() {
  console.log('test_get_other_1')
  const result = await srpc.Z.get(jwt, 'test2', { '其他': 1 })
  console.log(result)
  console.log('finish')
}

async function test_get_other_2() {
  console.log('test_get_other_2')
  const result = await srpc.Z.get(jwt, 'test', { '其他': 2 })
  console.log(result)
  console.log('finish')
}

async function test_get_part_uid() {
  await test_get_uid_0()
  await test_get_uid_1()
  await test_get_uid_2()
}

async function test_get_uid_0() {
  console.log('test_get_uid_2')
  const result = await srpc.Z.get(jwt, 'test2', { '基础信息.uid': 2 })
  console.log(result)
  console.log('finish')
}

async function test_get_uid_1() {
  console.log('test_get_uid_2')
  const result = await srpc.Z.get(jwt, 'test2', { '基础信息': { 'uid': 2 } })
  console.log(result)
  console.log('finish')
}

async function test_get_uid_2() {
  console.log('test_get_uid_2')
  const result = await srpc.Z.get(jwt, 'test', { 'uid': 2 })
  console.log(result)
  console.log('finish')
}

async function test_getPermission() {
  console.log('test_getPermission')
  const result = await srpc.Z.getPermission(jwt,'root')
  console.log(result)
  console.log('finish')
}



</script>

<template>
  <h1> Test v3-local </h1>
  <P> </P>
  <button @click="test_get_all()">test get all</button>
  <br>
  <button @click="test_get_part_base()">test get base</button>
  <br>
  <button @click="test_get_part_other()">test get 其他</button>
  <br>
  <button @click="test_get_part_uid()">test get uid</button>
  <br>
  <button @click="test_getPermission()">test getPermission</button>
</template>
