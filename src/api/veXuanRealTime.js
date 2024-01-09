import { ref, child, get, onValue,set , update } from "firebase/database";
import { database } from "../utils/database";
import { readAllRealTime } from "./api";

const db = database;
const urlVe = "vexuan";

// nếu không truyền id vào thì mặc định lấy tất cả data
export async function readVeXuanRealTime(id = "") {
    return readAllRealTime(urlVe, id);
}

export function updateVeXuan(objVeXuan) {
    const db = database;
    // set(ref(db, `${urlVe}/${objVeXuan.ve}`), {
    //     name: objVeXuan.name,
    //     mssv: objVeXuan.mssv,
    //     email: objVeXuan.email,
    //     facebook: objVeXuan.facebook,
    //     ve:objVeXuan.ve
    // });


//   // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['vexuan/'+ objVeXuan.ve] = objVeXuan;
  updates['vexuan/4'] = objVeXuan;

  return update(ref(db), updates);
}

export function writeVeXuan(numVe) {
  const db = database;
  set(ref(db, urlVe + "/" + numVe), {
    id:numVe
  });
}