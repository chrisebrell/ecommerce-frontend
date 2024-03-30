const inputStyle = {
  fontSize: "0.8rem",
  height: "24px",
  border: "1px solid #e5e7eb",
  paddingLeft: "3px",
  borderRadius: "0.125rem",
  width: "100%",
  backgroundColor: "#f9fafb",
  marginBottom: "0.5rem",
  boxSizing: "border-box",
};

const Form = (props) => {
  return <input style={inputStyle} {...props} />;
};

export default Form;
