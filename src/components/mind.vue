<template>
  <div
    class="mind-container"
    id="container"
  />
</template>

<script lang="ts">
import G6 from '@antv/g6';
import { defineComponent, onMounted } from 'vue'
import MockData from '@/config/local/mock.json'

export default defineComponent({
  name: 'MindMap',
  components: {
  },
  setup() {
    const initChart = () => {
      const container = document.getElementById('container');
      if (!container) {
        return;
      }
      const width = container.scrollWidth;
      const height = container.scrollHeight || 500;
      const graph = new G6.TreeGraph({
        container: 'container',
        width,
        height,
        modes: {
          default: [
            {
              type: 'collapse-expand',
              onChange: function onChange(item, collapsed) {
                const data = item.get('model');
                data.collapsed = collapsed;
                return true;
              }
            },
            'drag-canvas',
            'zoom-canvas'
          ]
        },
        defaultNode: {
          size: 26,
          anchorPoints: [
            [0, 0.5],
            [1, 0.5]
          ]
        },
        defaultEdge: {
          type: 'cubic-horizontal'
        },
        layout: {
          type: 'mindmap',
          direction: 'H',
          getHeight: () => {
            return 16;
          },
          getWidth: () => {
            return 16;
          },
          getVGap: () => {
            return 10;
          },
          getHGap: () => {
            return 50;
          }
        }
      });

      let centerX = 0;
      graph.node(function(node) {
        if (node.id === 'Modeling Methods') {
          centerX = node.x;
        }

        return {
          label: node.id,
          labelCfg: {
            position:
            node.children && node.children.length > 0
              ? 'left'
              : node.x > centerX
                ? 'right'
                : 'left',
            offset: 5
          }
        };
      });

      graph.data(MockData);
      graph.render();
      graph.fitView();

      if (typeof window !== 'undefined') {
        window.onresize = () => {
          if (!graph || graph.get('destroyed')) return;
          if (!container || !container.scrollWidth || !container.scrollHeight) return;
          graph.changeSize(container.scrollWidth, container.scrollHeight);
        };
      }
    }
    onMounted(() => {
      initChart();
    })
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
