import React from "react";

const Button = (props) => {
  const btnBg = props.bg ? props.bg : "bg-[#eae3dc]";
  const btnShadow = props.shadow ? props.shadow : "drop-shadow-button";

  return (
    <button
      className={`p-2 h-full w-full text-2xl font-bold ${btnBg} ${btnShadow} rounded-[0.3rem] text-center flex items-center ${props.span} justify-center hover:bg-[#f0efee] active:drop-shadow-none active:translate-y-[.3rem]`}
      onClick={props.handleClick}
    >
      {props.value}
    </button>
  );
};

export default Button;
