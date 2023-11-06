import symbol from "../assets/icon-music.svg";

const SinglePlan = ({ title, period, price }) => {
  return (
    <article>
      <img src={symbol} alt="symbol" />
      <div className="price-wrapper">
        <h2>{title}</h2>
        <p className="price">
          ${price}/{period}
        </p>
      </div>
    </article>
  );
};

export default SinglePlan;
