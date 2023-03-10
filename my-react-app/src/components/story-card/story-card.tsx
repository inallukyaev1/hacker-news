import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { getStory } from '../../getStories';

import { PayloadInterface, PropsInterface } from '../interfaces/interfaces';
import commentsLogo from '../../assets/img/commentsLogo.svg';
import userAuthor from '../../assets/img/userAuthor.svg';
import './story-card.css';

export const StoryCard = (props: PropsInterface) => {
  const [storiesDescription, setStoriesDescription] =
    useState<PayloadInterface>();

  const dispatch = useDispatch();
  useEffect(() => {
    getStory(props.id).then((data) => {
      setStoriesDescription(data);
    });
  }, []);

  function addCurrentStoryHandler() {
    dispatch({ type: 'addStoryDescr', payload: storiesDescription });
  }

  return storiesDescription ? (
    <li>
      <div className="story_post">
        <div className="story-score"> Rate : {storiesDescription?.score}</div>
        <div className="story_wrapper">
          <h3>
            {format(new Date(storiesDescription.time), 'MM/dd/yyyy k:m:s ')}
          </h3>

          <h4>{storiesDescription.title}</h4>
          <div className="story_descr">
            <Link
              onClick={addCurrentStoryHandler}
              className="btn_primary"
              to="/story-description"
            >
              {'Read More'}
            </Link>
            <div className="story_author">
              <div className="story_author-wrapper">
                <img src={userAuthor} alt="" />{' '}
                <span>{storiesDescription.by}</span>
              </div>

              <div className="story_amount-comment">
                <img src={commentsLogo} alt="" />
                {storiesDescription?.kids?.length
                  ? storiesDescription?.kids?.length
                  : 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  ) : null;
};
