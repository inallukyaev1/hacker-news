import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';

import { PayloadInterface } from '../interfaces/interfaces';
import { parserToHtml } from '../../parser';
import { getStory } from '../../getStories';
import { CommentList } from '../comment-list/comment-list';
import { StoryBtn } from '../story-btns/story-btns';
import logo from '../../assets/img/logo.svg';
import './story-footer.css';

export const StoryFooter = () => {
  const currentStory = useSelector(
    (state: { currentStory: PayloadInterface }) => state.currentStory
  );
  const dispatch = useDispatch();
  const [isCommentsView, setIsCommentsView] = useState(false);
  const [IsupdateStore, SetIsupdateStore] = useState(false);
  const timeOfPublication = new Date(currentStory.time);
  const textComment = parserToHtml(currentStory?.text || '');

  const updateCommentHandler = () => {
    SetIsupdateStore(!IsupdateStore);
  };

  useEffect(() => {
    getStory(currentStory.id).then((data) => {
      dispatch({ type: 'addStoryDescr', payload: data });
    });
  }, [IsupdateStore]);

  return (
    <div className="story_footer">
      <div className="user">
        <div className="story-block_wrapper">
          <a
            href={currentStory.url}
            className="story-block_link"
            target={'_blank'}
          >
            Link to news
          </a>
        </div>
      </div>
      <div className="story-comments_list">
        <img src={logo} alt="" />
        <div className="story-block_author">
          <h5>{currentStory.by}</h5>
          <small className="story-block_date">
            {format(timeOfPublication, 'MM/dd/yyyy k:m ')}
          </small>
        </div>
        <p className={!!textComment ? 'story-comments_root' : 'display-none'}>
          {textComment}
        </p>
        <StoryBtn
          currentStory={currentStory}
          isCommentsViewHandler={setIsCommentsView}
          updateCommentHandler={updateCommentHandler}
        ></StoryBtn>
        <CommentList
          currentCommentList={currentStory}
          isShowComments={isCommentsView}
        ></CommentList>
      </div>
    </div>
  );
};
