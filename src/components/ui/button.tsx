import { buttonProps } from "@/types";

const Button = ({
  type,
  text,
  onClick,
  actionButton,
  bgColor,
}: buttonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`${bgColor} font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ${
          actionButton ? 'text-white hover:bg-blue-800 focus:ring-4' : ''
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;