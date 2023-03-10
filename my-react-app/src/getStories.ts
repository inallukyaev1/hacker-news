const URL = 'https://hacker-news.firebaseio.com/v0/';
const newStoriesIds = 'newstories';

export const getStory = async (id: number) => {
  try {
    const responseId = await fetch(`${URL}/item/${id}.json`);
    const data = await responseId.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getStoriesIds = async () => {
  try {
    const responseId = await fetch(`${URL}${newStoriesIds}.json`);
    const data = await responseId.json();
    return data.slice(0, 100);
  } catch (error) {
    console.error(error);
  }
};

export const getComments = async (id: number) => {
  try {
    const responseId = await fetch(`${URL}/item/${id}.json`);
    const data = await responseId.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
