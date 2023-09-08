import useFormHook from "../hooks/useFormHook";
import PersonalInfo from "./Steps/PersonalInfo";
import SelectYourPlan from "./Steps/SelectYourPlan";
import PickAddons from "./Steps/PickAddons";
import FinishUp from "./Steps/FinishUp";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { trackerTitles } from "../data";
import Thankyou from "./Steps/Thankyou";

const Form = () => {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    steps,
    handleBack,
    handleNext,
    isLastStep,
    isFirstStep,
    page,
    setPage,
    handleThanks,
  } = useFormHook();

  const onSubmit = (data) => {
    if (!isLastStep) {
      setData(data);
      return handleNext();
    }

    return handleThanks();
  };

  return (
    <div className="layout">
      <div className="tracker__container">
        <img
          src="./assets/images/bg-sidebar-desktop.svg"
          alt=""
          className="tracker__img"
        />
        <div className="tracker">
          {trackerTitles.map((el) => (
            <TrackerGroup
              key={el.key}
              step={el.step}
              title={el.title}
              currStep={page}
            />
          ))}
        </div>
      </div>
      {steps !== 4 ? (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {steps === 0 && <PersonalInfo register={register} errors={errors} />}
          {steps === 1 && (
            <SelectYourPlan
              register={register}
              checked={checked}
              setChecked={setChecked}
            />
          )}
          {steps === 2 && <PickAddons checked={checked} register={register} />}
          {steps === 3 && (
            <FinishUp data={data} checked={checked} setPage={setPage} />
          )}
          <div className="button-group">
            {!isFirstStep && (
              <button onClick={handleBack} type="button" className="btn">
                Go back
              </button>
            )}
            <button
              className={`submit ${isLastStep ? "confirm" : ""}`}
              type="submit"
            >
              {isLastStep ? "Confirm" : "Next Step"}
            </button>
          </div>
        </form>
      ) : (
        <Thankyou />
      )}
    </div>
  );
};

const TrackerGroup = ({ step, title, currStep }) => (
  <div className="tracker__each">
    <span className={`${step === currStep + 1 ? "active" : ""}`}>{step}</span>
    <div className="tracker__each-order">
      <p>Step {step}</p>
      <p>{title}</p>
    </div>
  </div>
);

export default Form;
