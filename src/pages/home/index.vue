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
  <div class="fcc flex-col h-100vh">
    <div class="fcc">
      <image class="h-120rpx w-120rpx" src="/static/logo.png" />
      <div class="i-carbon:add-large mx text-60rpx text-blue-600" />
      <div class="i-carbon:sprout text-120rpx text-teal-600" />
    </div>
    <div class="mt-120rpx text-red-500 text-center fcc">
      <button @click="counterStore.decrease">-</button>
      <span class="mx-lg">{{ counterStore.count }}</span>
      <button @click="counterStore.increase">+</button>
    </div>
  </div>
</template>

<style>

</style>
