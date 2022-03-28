import G6, { TreeGraph } from '@antv/g6';
import CONFIG from '../../../docs/config.json';

const renderGraph = () => {
  const container: HTMLElement | null = document.getElementById('container');
  if (!container) {
    return;
  }
  const width = container.scrollWidth;
  const height = container.scrollHeight || 500;
  const graph: TreeGraph = new G6.TreeGraph({
    container: 'container',
    width,
    height,
    modes: {
      default: [
        {
          type: 'collapse-expand',
          onChange: function onChange(item, collapsed) {
            if (!item) {
              return;
            }
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
      direction: 'H'
    }
  });

  let centerX: Number = 0;
  graph.node((node) => {
    if (!node.x) {
      return {};
    }
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

  graph.data(CONFIG);
  graph.render();
  graph.fitView();

  return {
    graph,
    container
  }
}

const resize = (graph: any, container: any) => {
  if (typeof window !== 'undefined') {
    window.onresize = () => {
      if (!graph || graph.get('destroyed')) return;
      if (!container || !container.scrollWidth || !container.scrollHeight) return;
      graph.changeSize(container.scrollWidth, container.scrollHeight);
    };
  }
}

export {
  renderGraph,
  resize
}
