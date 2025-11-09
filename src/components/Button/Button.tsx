const Button = ({ type, className, text }: any) => {
  return (
    <button type={type} className={className}>
      {text}
    </button> 
  );
};

export default Button;
