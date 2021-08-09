import classes from "./Spinner.module.scss";
const Spinner = () => {
  return (
    <div className={classes.spinnerOverlay}>
      <div className={classes.spinnerContainer}></div>
    </div>
  );
};

export default Spinner;
