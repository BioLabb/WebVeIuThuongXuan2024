import { useEffect, useState } from "react";
import "../style/buttonVe.css";

export default function Ve({ isBuy, isPick, value, handlePick }) {
  const [isSelect, setIsSelect] = useState(false);
  let clasNameBuy = isBuy ? "background-red" : "background-white color_yellow";

  let classNamePick = isPick ? "background-yellow-linear" : "background-white";

  const handleSelect = async (e) => {
    await setIsSelect(!isSelect);
    console.log(e.target.value)
    // truyền giá trị vào prop để componet cha có thể lấy và sử dụng
    handlePick(e.target.value);
  };

  let className = "background-white color_red";
  if (isSelect) {
    className = "background-yellow-linear color_white";
  }

  return (
    <input
      className={`button_ve border_radius ${className}`}
      type="button"
      value={value}
      onClick={handleSelect}
    />
  );
}
