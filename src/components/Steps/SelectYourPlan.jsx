import { pricing } from "../../data";

const SelectYourPlan = ({ register, checked, setChecked }) => {
  return (
    <>
      <div className="form__info">
        <h2 className="form__info-title">Select your plan</h2>
        <p className="form__info-desc">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="plan">
        {pricing.plans.map((el) => (
          <Radio
            key={el.id}
            name={el.name}
            price={el.price}
            icon={el.icon}
            register={register}
            checked={checked}
          />
        ))}
      </div>
      <div className="toggle">
        <span className={checked ? "" : "active"}>Monthly</span>
        <label htmlFor="switch" className="switch">
          <input
            type="checkbox"
            name="switch"
            id="switch"
            checked={checked}
            onChange={() => {
              setChecked(!checked);
            }}
          />
          <span className="slider round"></span>
        </label>
        <span className={checked ? "active" : ""}>Yearly</span>
      </div>
    </>
  );
};

const Radio = ({ name, icon, price, register, checked }) => (
  <label htmlFor={name} className="plan__each">
    <input
      type="radio"
      value={name}
      name={name}
      id={name}
      {...register("plan", { required: true })}
    />
    <img src={icon} alt="" />
    <div className="plan__each-info">
      <h3>{name}</h3>
      <p>
        ${checked ? price.yearly : price.monthly}/{checked ? "yr" : "mo"}
      </p>
      {checked && <span>2 months free</span>}
    </div>
    <span className="select"></span>
  </label>
);

export default SelectYourPlan;
