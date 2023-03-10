import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { PayloadInterface } from '../interfaces/interfaces';
import { StoryFooter } from '../story-footer/story-footer';
import './story-item.css';

export const StoryItem = () => {
  const currentStory = useSelector(
    (state: { currentStory: PayloadInterface }) => state.currentStory
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="story-block">
        <div className="story-block-wrapper">
          <div className="story_body">
            <span className="tag tag-blue">{currentStory?.type}</span>
            <h4>{currentStory?.title}</h4>
          </div>
          <StoryFooter></StoryFooter>
        </div>
      </div>
    </div>
  );
};
