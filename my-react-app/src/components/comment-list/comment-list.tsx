import { PayloadInterface } from '../interfaces/interfaces';
import { CommentItem } from '../story-comment/story-comment';

export const CommentList = (props: {
  currentCommentList: PayloadInterface;
  isShowComments: boolean;
}) => {
  return (
    <>
      {props.currentCommentList.kids && props.isShowComments
        ? props.currentCommentList.kids.map((item: number) => (
            <CommentItem key={item} id={item}></CommentItem>
          ))
        : null}
    </>
  );
};
