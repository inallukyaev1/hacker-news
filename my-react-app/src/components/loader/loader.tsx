import './loader.css';
import { LoaderInterface } from '../interfaces/interfaces';
export const Loader = (props: LoaderInterface) => {
  const classes = `wrapper-lds-rong ${
    props.convertClass ? props.convertClass : ''
  }`;

  return (
    <div className={classes}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
