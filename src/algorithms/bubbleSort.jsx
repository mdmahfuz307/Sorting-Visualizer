import { swap } from "../utils/swap";

const bubbleSort = (blocks) => {
  const dupBlocks = blocks.slice();
  const order = [];
  let i, j;

  for (i = 0; i < dupBlocks.length; i++) {
    for (j = 0; j < dupBlocks.length - i - 1; j++) {
      order.push([j, j + 1, null, null]);
      if (dupBlocks[j] > dupBlocks[j + 1]) {
        swap(dupBlocks, j, j + 1);
        order.push([j, j + 1, dupBlocks.slice(), null]);
      }
    }
    order.push([null, null, null, j]);
  }
  return order;
};

export default bubbleSort;
