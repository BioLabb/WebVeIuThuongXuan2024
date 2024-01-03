import { useEffect, useState } from "react";
import "../style/buttonVe.css";

export default function Ve({ isBuy, value }) {
  let clasName = isBuy
    ? "background-red"
    : "background-white color_yellow";

  return (
    <input
      className={`button_ve border_radius ${clasName}`}
      type="button"                                                  
      value={value}
    />
  );
}
