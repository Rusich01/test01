const Loader = ({ size = 36, thickness = 3, color = "black" }) => {
  return (
    <span
      className="inline-block animate-spin rounded-full border-[3px] border-black/20 border-t-black"
      style={{
        width: size,
        height: size,
        borderWidth: thickness,
        borderTopColor: color,
      }}
    />
  );
};

export default Loader;
