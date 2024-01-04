import { useEffect, useState } from "react";
import Ve from "./Ve";
import { v4 as uuidv4 } from "uuid";
import "../style/listve.css";

export default function ListVe({ handleClose, show, arrVe }) {
  const [listVe, setListVe] = useState([]);

  const [listVePicked, setListVePicked] = useState(new Set());

  const showHideClassName = show ? "block" : "block_none";

  // only run first
  useEffect(() => {
    setListVe(Array.from(new Array(300)));
  }, []);

  // xử lý vé được chọn ở component ve
  const handlePickVe = async (numVe) => {
    // nếu sô vé chưa có trong danh sách tức người dùng click lần đầu
    // -> thêm vào danh sách
    // nếu số vé có trong danh sách tức người dùng hủy vé
    //-> xóa vé khỏi danh sách
    if (listVePicked.size > 0 && listVePicked.has(numVe)) {
      listVePicked.delete(numVe);
      await setListVePicked(listVePicked);
    } else {
      listVePicked.add(numVe);
      await setListVePicked(listVePicked);
    }
    console.log(listVePicked)
    arrVe(listVePicked);
  };

  return (
    <div className={showHideClassName + " list_ve_container border_radius"}>
      <button
        onClick={handleClose}
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
          return <Ve handlePick={handlePickVe} key={uuidv4()} value={num} />;
        })}
      </div>
    </div>
  );
}
