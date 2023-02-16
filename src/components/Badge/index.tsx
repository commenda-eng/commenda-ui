import React from "react";

export interface BadgePropsType extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  variant: "pink" | "purple" | "green" | "yellow" | "blue";
}

const Badge = ({ variant, text }: BadgePropsType) => {
  let className =
    "px-[10px] py-[2px] rounded-md text-xs font-medium leading-normal ";

  switch (variant) {
    case "pink":
      className += "text-[#9d3838] bg-[#ffe5e5]";
      break;
    case "yellow":
      className += "text-[#9d7538] bg-[#fff8e5]";
      break;
    case "purple":
      className += "text-[#7d389d] bg-[#f4e5ff]";
      break;
    case "green":
      className += "text-[#03543f] bg-[#def7ec]";
      break;
    case "blue":
      className += "text-[#42389d] bg-[#e5edff]";
      break;
    default:
      className += "text-[#03543f] bg-[#def7ec]";
      break;
  }

  return <span className={className}>{text}</span>;
};

export default Badge;
