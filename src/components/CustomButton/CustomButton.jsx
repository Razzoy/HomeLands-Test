import style from "./CustomButton.module.scss";

export function CustomButton({ label, onClick, disabled = false, btnClass }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`${style.btn} ${style[btnClass]}`}
    >
      {label}
    </button>
  );
}
