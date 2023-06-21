const avgWordsPerMin = 250;

export const getReadingTime = (content: string) => {
  const count = getWordCount(content);
  const time = Math.ceil(count / avgWordsPerMin);
  return time;
};

function getWordCount(content: string) {
  return content ? content.match(/\w+/g)?.length : 0;
}
