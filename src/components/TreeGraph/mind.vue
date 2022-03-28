<template>
  <div
    class="mind-container"
    id="container"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { renderGraph, resize } from './logic';

export default defineComponent({
  name: 'MindMap',
  components: {
  },
  setup() {
    const initChart = () => {
      const graphResult = renderGraph();
      graphResult && resize(graphResult.graph, graphResult.container)
    }
    onMounted(() => {
      initChart();
    })
  }
})
</script>

<style scoped lang="scss">
.mind-container{

}
</style>
