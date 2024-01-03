import { useEffect, useState } from "react";
import Ve from "./Ve";
import { v4 as uuidv4 } from "uuid";
import "../style/listve.css";

export default function ListVe({handleClose, show}) {
  const [listVe, setListVe] = useState([]);

  const showHideClassName = show ? "block" : "block_none";

  // only run first
  useEffect(() => {
    setListVe(Array.from(new Array(300)));
  }, []);

  

  return (
    <div className={showHideClassName + " list_ve_container"}>
      <button onClick={handleClose}
        className="color_black border_radius background-yellow-linear"
      >
        Đóng
      </button>
      <div className="list_ve_color">
        <div>
          <span className="block_red border_radius"></span>
          <p className="color_black block_inline">Vé đã được mua</p>
        </div>
        <div>
          <span className="block_white border_radius"></span>
          <p className="color_black block_inline">Vé chưa được mua</p>
        </div>
        <div>
          <span className="block_yellow_linear border_radius"></span>
          <p className="color_black block_inline">Vé đã chọn</p>
        </div>
      </div>
      <div className="list_ve">
        {listVe.map((ve, num) => {
          return <Ve key={uuidv4()} value={num} />;
        })}
      </div>
    </div>
  );
}
