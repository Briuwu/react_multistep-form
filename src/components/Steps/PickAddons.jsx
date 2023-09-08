import { pricing } from "../../data";

const PickAddons = ({ checked, register }) => {
  return (
    <>
      <div className="form__info">
        <h2 className="form__info-title">Pick add-ons</h2>
        <p className="form__info-desc">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="addons">
        {pricing.addons.map((el) => (
          <Addons
            key={el.id}
            name={el.name}
            desc={el.desc}
            price={el.price}
            checked={checked}
            register={register}
          />
        ))}
      </div>
    </>
  );
};

const Addons = ({ name, desc, price, checked, register }) => {
  const { monthly, yearly } = price;
  return (
    <label className="addons__each">
      <input type="checkbox" name={name} id="addons" {...register(name)} />
      <div className="addons__each-info">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
      <p className="addons__each-price">
        +${checked ? yearly : monthly}/{checked ? "yr" : "mo"}
      </p>
      <span className="select"></span>
    </label>
  );
};

export default PickAddons;
