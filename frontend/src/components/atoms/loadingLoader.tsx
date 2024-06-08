import './processLoader.css';
export const LoadingLoader = (props: any) => {
  return (
    <>
      <div className="loader">{props.content}</div>
    </>
  );
};
