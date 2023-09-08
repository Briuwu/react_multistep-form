const PersonalInfo = ({ register, errors }) => {
  return (
    <>
      <div className="form__info">
        <h1 className="form__info-title">Personal info</h1>
        <p className="form__info-desc">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          autoFocus
          {...register("name", { required: true })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <span role="alert">This field is required</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          {...register("email", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <span role="alert">This field is required</span>}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          {...register("phone", { required: true })}
          aria-invalid={errors.phone ? "true" : "false"}
        />
        {errors.phone && <span role="alert">This field is required</span>}
      </div>
    </>
  );
};

export default PersonalInfo;
