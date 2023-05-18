import "./form-input.styles.scss";

const FormInput = ({ label, ...otherInputAttr }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherInputAttr} />
      {label && (
        <label
          className={`${
            otherInputAttr.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
