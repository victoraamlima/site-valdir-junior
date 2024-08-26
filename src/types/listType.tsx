interface ItemType {
  img: string;
  text: string;
  highlight: {
    words: Array<string>;
    type: string;
  };
}

interface ListType {
  id: number;
  item: ItemType;
  styleList: {
    li: string;
    img: string;
    p: string;
  };
}

interface fontType {
  id: number;
  family: string;
  url: string;
  weight: string;
  format: string;
  style: string;
}

export type { ItemType, ListType, fontType };
