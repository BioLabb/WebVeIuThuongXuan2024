
import { doc, setDoc,addDoc } from "firebase/firestore";
import { store } from "../utils/database";

// thêm data với id được chỉ định sẵn
export async function setVeXuanWithId(id, infoUser) {
    try {
        const docRef = doc(store, 'vexuan', String(id));
        const data = {
            fullname: infoUser.fullname,
            mssv: infoUser.mssv,
            email: infoUser.email,
            phone: infoUser.phone,
            facebook: infoUser.facebook
        };
        await setDoc(docRef, data);
        return true;
    } catch (err) {
        console.log(err);
        return false; 
    }

}