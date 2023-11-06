import subscriptions from "../data/data";
import SinglePlan from "./SinglePlan";

const Plans = () => {
  return (
    <section className="plans-container">
      {subscriptions.map((subscription) => {
        return <SinglePlan key={subscription.id} {...subscription} />;
      })}
    </section>
  );
};

export default Plans;
