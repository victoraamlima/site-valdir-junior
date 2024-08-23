import UseHighlightedWords from "@/hooks/useHighlightedWords";
import { ListType } from "@/types/listType";
import Image from "next/image";

export default function List({ item, styleList }: ListType) {
  return (
    <li className={styleList.li}>
      {item.img && (
        <Image
          src={item.img}
          alt="icon"
          width={125}
          height={125}
          className={styleList.img}
        />
      )}

      <p className={styleList.p}>
        {item.highlight.words[0] === ""
          ? item.text
          : UseHighlightedWords(item)}
      </p>
    </li>
  );
}
