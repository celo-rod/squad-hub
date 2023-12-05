import style from "./Input.module.css";
function Input({ type, placeholder, onChange }) {
  return (
    <div className={style.formsContainer}>
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}

export default Input;
