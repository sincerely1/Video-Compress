<script setup lang="ts">
const quitWindow = () => {
  window.api.stop()
  window.api.quitWindow()
}
</script>

<template>
  <main class="text-slate-600 border-b bg-gray-50 text-xs flex justify-between px-3 py-3 drag">
    <section class="opacity-80">快捷压缩</section>
    <section class="flex justify-between gap-2">
      <router-link :to="{ name: 'home' }" class="nodrag">转码</router-link>
      <router-link :to="{ name: 'setting' }" class="nodrag">配置</router-link>
      <button class="nodrag" @click="quitWindow">关闭</button>
    </section>
  </main>
</template>

<style lang="scss"></style>
