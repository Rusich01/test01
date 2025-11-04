const Input = ({ type, className, id, name, label, onChange, value }: any) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        className={className}
        name={name}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default Input;
