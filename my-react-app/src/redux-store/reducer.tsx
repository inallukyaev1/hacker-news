import { createStore } from 'redux';

export const reducer = (
  state = {},
  action: { type: string; payload: []; calculatedNumber: number }
) => {
  switch (action.type) {
    case 'addStoriesIds':
      return {
        ...state,
        storiesIds: action.payload,
      };
    case 'addStoryDescr':
      return {
        ...state,
        currentStory: { ...action.payload },
      };
    case 'addCurrentId':
      return {
        ...state,
        currentId: action.payload,
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);
