import { ButtonProps } from "./types";

const Button = ({ title, onClick, type, icon, isActive }: ButtonProps) => (
  <button
    className={`py-3 text-center text-white text-xl font-semibold leading-normal rounded-lg ${
      isActive ? "bg-primary" : "bg-gray-gray"
    } ${type}`}
    onClick={onClick}
  >
    <span
      className={`${
        icon
          ? `relative before:absolute before:${icon} before:w-[24px] before:h-[24px] before:-left-[30px] before:translate-y-1/2 before:bottom-1/2`
          : ""
      }`}
    >
      {title}
    </span>
  </button>
);

export default Button;
