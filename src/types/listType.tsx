interface ItemType {
  img: string;
  text: string;
  highlight: {
    words: Array<string>;
    type: string;
  };
}

interface ListType {
  key: number;
  item: ItemType;
  styleList: {
    li: string;
    img: string;
    p: string;
  };
}

export type { ItemType, ListType };
