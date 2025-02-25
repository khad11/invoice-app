import React from "react";

export default function Status({ status = "pending" }) {
  let baseStyle = "";
  let dotColor = "";
  switch (status) {
    case "pending":
      baseStyle = "bg-[rbga(255,143,0,0.05)] text-[#FF8F00]";
      dotColor = "bg-[#FF8F00]";
      break;
    case "paid":
      baseStyle = "bg-[rbga(51,214,159,0.05)] text-[#33D69F]";
      dotColor = "bg-[#33D69F]";
    default:
      baseStyle = "bg-[rbga(55,59,83,0.05)] text-[#373B53]";
      dotColor = "bg-[#373B53]";
  }
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md px-7 py-3 ${baseStyle}`}
    >
      <span className={`inline-block h-2 w-2 rounded-full ${dotColor}`}></span>
      <span className="leading-4-tracking-tight text-xs font-medium capitalize">
        {status}
      </span>
    </span>
  );
}
