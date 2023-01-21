import React from "react";

const Button = (props) => {
  const btnBg = props.bg ? props.bg : "bg-[#eae3dc]";
  const btnShadow = props.shadow ? props.shadow : "drop-shadow-button";

  return (
    <button
      // ${
      // !props.span ? "w-14" : "w-[7.2rem]"
      //   } h-14
      className={`p-2 h-full w-full text-2xl font-bold ${btnBg} ${btnShadow} rounded-[0.3rem] text-center flex items-center ${props.span} justify-center `}
      onClick={props.handleClick}
    >
      {props.value}
    </button>
  );
};

export default Button;
