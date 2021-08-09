import classes from "./ErrorPage.module.scss";
// error image courtesy of Kapwing @ https://www.kapwing.com/404-illustrations?ref=producthunt

const ErrorPage = () => {
  return (
    <section className={classes.error}>
      <h1>Oops! Something went wrong!</h1>
      <div className={classes.errorImage}></div>
    </section>
  );
};

export default ErrorPage;
