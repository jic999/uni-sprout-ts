<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()

const demoApi = uniCloud.importObject('sp-demo')

async function getData() {
  const res = await demoApi.hello('Sprout')
  // eslint-disable-next-line no-console
  console.log(res)
}

onLoad(() => {
  getData()
})
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area text-red-500 text-center fcc">
      <div i-carbon:subtract-large @click="counterStore.decrease" />
      <span>{{ counterStore.count }}</span>
      <div i-carbon:add-large @click="counterStore.increase" />
    </view>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}
</style>
