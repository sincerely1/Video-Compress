<script setup lang="ts">
import VideoItem from './VideoItem.vue'
import useConfigStore from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
</script>

<template>
  <main class="overflow-y-auto h-75">
    <div v-if="config.files.length">
      <video-item
        v-for="(video, index) of config.files"
        :key="index"
        :video="video"
        :index="index"
      />
    </div>
    <div v-else class="text-xs opacity-80 text-slate-600 text-center">暂无压缩视频</div>
  </main>
</template>
