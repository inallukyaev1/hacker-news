import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getStoriesIds } from '../../getStories';
import { Loader } from '../loader/loader';
import { StoryCard } from '../story-card/story-card';
import './story-list.css';

const defaultTime = 500;
const oneMinites = 60000;

export const StoryList = () => {
  const storiesIdList = useSelector(
    (state: { storiesIds: number[] }) => state.storiesIds
  );
  const dispatch = useDispatch();
  const [time, setTime] = useState(defaultTime);

  const updateStoriesHandler = (): void => {
    setTime(defaultTime);
    dispatch({ type: 'addStoriesIds', payload: null });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getStoriesIds()
        .then(
          (data) => data && dispatch({ type: 'addStoriesIds', payload: data })
        )
        .then(() => setTime(oneMinites));
    }, time);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="container wrapper-stories">
      <button
        className={time === oneMinites ? 'home-btn' : 'display-none'}
        onClick={updateStoriesHandler}
      >
        Update News
      </button>
      <ul className="listFilms-wrapper">
        {storiesIdList ? (
          storiesIdList.map((id) => {
            return <StoryCard key={id} id={id}></StoryCard>;
          })
        ) : (
          <Loader convertClass=""></Loader>
        )}
      </ul>
    </div>
  );
};
