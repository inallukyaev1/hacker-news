import { useEffect, useState } from 'react';
import { DispatchingInterface } from '../interfaces/interfaces';

export const StoryBtn = (props: DispatchingInterface) => {
  const [isShowComments, setIsShowComments] = useState(false);

  const showCommentsHandler = () => {
    setIsShowComments(!isShowComments);
  };

  useEffect(
    () => props.isCommentsViewHandler(isShowComments),
    [isShowComments]
  );
  return (
    <div className="story-comments_btn">
      <div className="story-comments_update">
        <button
          className="home-btn"
          onClick={() => props.updateCommentHandler(!false)}
        >
          Update Comments
        </button>
      </div>
      <button
        onClick={showCommentsHandler}
        className={
          props.currentStory?.kids?.length ? 'home-btn' : 'home-btn disabled'
        }
        disabled={props.currentStory?.kids?.length ? false : true}
      >
        {isShowComments
          ? `Hide`
          : `Show all comments (${
              props.currentStory?.kids?.length
                ? props.currentStory?.kids?.length
                : 0
            })`}{' '}
      </button>
    </div>
  );
};
