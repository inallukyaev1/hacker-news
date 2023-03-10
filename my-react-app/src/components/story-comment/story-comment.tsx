import { useEffect, useState } from 'react';
import { getComments } from '../../getStories';
import { parserToHtml } from '../../parser';
import { Loader } from '../loader/loader';
import logo from '../../assets/img/logo.svg';
import { format } from 'date-fns';
import './story-comment.css';
import { PayloadInterface } from '../interfaces/interfaces';

export const CommentItem = (props: { id: number }) => {
  const [comment, setComment] = useState<PayloadInterface>();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    getComments(props.id).then((data) => setComment(data));
    setShowLoader(false);
  }, []);
  const textComment = parserToHtml(comment?.text || '');

  return (
    <div className={comment?.deleted === true ? 'display-none' : ''}>
      {comment && !showLoader ? (
        <div className="comment_all">
          <img src={logo} alt="" />
          <div className="comment-date">
            {format(new Date(comment.time), 'MM-dd-y k:m:s ')}
          </div>
          <div className="comment_author">{comment?.by}</div>
          <div className="comment_text">{textComment}</div>
        </div>
      ) : (
        <Loader convertClass={'wrapper-lds-rong-card'}></Loader>
      )}
    </div>
  );
};
