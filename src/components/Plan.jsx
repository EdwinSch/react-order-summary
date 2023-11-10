import symbol from "../assets/icon-music.svg";

const Plan = () => {
  return (
    <article className="plan-wrapper">
      <div className="left-wrapper">
        <img src={symbol} alt="symbol" />
        <div className="price-wrapper">
          <h2>annual plan</h2>
          <p className="price">$59.99/year</p>
        </div>
      </div>

      <button className="change-btn">Change</button>
    </article>
  );
};

export default Plan;
