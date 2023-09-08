import { pricing } from "../../data";

const FinishUp = ({ data, checked, setPage }) => {
  const { plan, email, name, phone, ...addons } = data;

  console.log(email, name, phone);

  const addonsArray = Object.keys(addons).filter((k) => addons[k]);
  const chosenPlan = pricing.plans.filter((p) => p.name === plan);

  const chosenAddons = pricing.addons.filter((p) =>
    addonsArray.includes(p.name)
  );

  const addonsPriceMonthly = chosenAddons.reduce(
    (acc, curr) => acc + curr.price.monthly,
    0
  );
  const addonsPriceYearly = chosenAddons.reduce(
    (acc, curr) => acc + curr.price.yearly,
    0
  );

  const planPriceMonthly = chosenPlan[0].price.monthly;
  const planPriceYearly = chosenPlan[0].price.yearly;

  const totalMonthly = addonsPriceMonthly + planPriceMonthly;
  const totalYearly = addonsPriceYearly + planPriceYearly;

  const displayDate = checked ? "yr" : "mo";

  return (
    <>
      <div className="form__info">
        <h2 className="form__info-title">Finishing up</h2>
        <p className="form__info-desc">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="finish">
        <div className="finish-plan">
          <div className="finish-plan_main">
            <p>
              {chosenPlan[0]?.name} ({checked ? "Yearly" : "Monthly"})
            </p>
            <button onClick={() => setPage(1)}>Change</button>
          </div>
          <p>
            ${checked ? planPriceYearly : planPriceMonthly}/{displayDate}
          </p>
        </div>
        {chosenAddons.length > 0 && (
          <div className="finish-addons">
            {chosenAddons.map((el) => (
              <div key={el.id} className="finish-addons_each">
                <p>{el.name}</p>
                <p className="finish-addons_price">
                  +${checked ? el.price.yearly : el.price.monthly}/{displayDate}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="total">
        <p>Total (per month)</p>
        <p className="total_price">
          +${checked ? totalYearly : totalMonthly}/{displayDate}
        </p>
      </div>
    </>
  );
};
export default FinishUp;
