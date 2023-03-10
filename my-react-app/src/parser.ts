export function parserToHtml(string: string) {
  const dom = new DOMParser();
  const parsedString = dom.parseFromString(string, 'text/html');
  const textComment = parsedString?.body?.textContent;
  return textComment;
}
