import { swap } from "../utils/swap";

const selectionSort = (blocks) => {
  const dupBlocks = blocks.slice();
  const order = [];
  let i, j;

  for (i = 0; i < dupBlocks.length; i++) {
    for (j = i + 1; j < dupBlocks.length; j++) {
      order.push([i, j, null, null]);
      if (dupBlocks[i] > dupBlocks[j]) {
        swap(dupBlocks, i, j);
        order.push([i, j, dupBlocks.slice(), null]);
      }
    }
    order.push([null, null, null, i]);
  }
  return order;
};

export default selectionSort;
