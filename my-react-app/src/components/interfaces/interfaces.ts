export interface PayloadInterface {
  by: string;
  descendants: number | null;
  id: number;
  score: number;
  kids: number[];
  time: number;
  type: string;
  url: string;
  title: string;
  text: string | undefined;
  deleted: boolean;
  key: number;
}

export interface LoaderInterface {
  convertClass: string;
}
export interface PropsInterface {
  id: number;
}
export interface DispatchingInterface {
  isCommentsViewHandler: React.Dispatch<React.SetStateAction<boolean>>;
  updateCommentHandler: React.Dispatch<React.SetStateAction<boolean>>;
  currentStory: PayloadInterface;
}
