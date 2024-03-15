<script setup lang="ts">
import useConfigStore from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
</script>

<template>
  <main class="bg-white p-3 flex flex-col">
    <div class="flex gap-2">
      <el-select v-model="config.size">
        <el-option v-for="(item, index) in config.sizes" :key="index" :label="item" :value="item">
        </el-option>
      </el-select>

      <el-select v-model="config.frame">
        <el-option v-for="(item, index) in config.frames" :key="index" :label="item" :value="item">
        </el-option>
      </el-select>
    </div>
    <div class="mt-2 text-slate-600">码率</div>
    <el-slider v-model="config.bitrate" placement="bottom" :min="500" :max="5000" class="nodrag" />
  </main>
</template>

<style lang="scss"></style>
