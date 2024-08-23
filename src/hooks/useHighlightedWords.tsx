import { ItemType } from "@/types/listType";

export default function UseHighlightedWords(textInfo: ItemType) {
  let localText = textInfo.text;
  let plainText: Array<string> = [];
  let words: Array<string> = [];
  let arr: Array<string> = [];

  textInfo.highlight.words.map((word: string) => {
    if (localText.includes(word)) {
      arr = localText.split(word);

      plainText.push(arr[0]);
      localText = arr[1];

      word.endsWith("*")
        ? words.push((word = word.slice(0, -1)))
        : words.push(word);
    }
  });

  plainText.push(arr[1]);

  return (
    <>
      {plainText.map((text, index) => (
        <>
          {text}
          <span className={textInfo.highlight.type}>{words[index]}</span>
        </>
      ))}
    </>
  );
}
