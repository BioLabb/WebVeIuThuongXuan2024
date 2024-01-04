import { useEffect, useState } from "react";
import Input from "./component/Input";
import InputGroup from "./component/InputGroup";

import "./style/app.css"
import Content from "./component/Content";
import Description from "./component/Description";
import Button from "./component/Button";

import { readVeXuanRealTime, wirteVeXuan } from "./api/veXuan";

import { ref, onValue } from "firebase/database";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { database, store } from "./utils/database";
import { setVeXuanWithId } from "./api/storeVeXuan";
import Ve from "./component/Ve";
import ListVe from "./component/ListVe";
import ParentComponent from "./component/Pranent";



function App() {

  // use state
  const [fullname, setFullname] = useState("");
  const [mssv, setMssv] = useState("");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [listVe, setListVe] = useState(new Set());
  const [isHiddentVe, setIsHiddentVe] = useState(false);

  const [validateFullName, setValidateFullName] = useState("");
  const [validateMssv, setValidateMssv] = useState("");
  const [validateEmail, setValidateEmail] = useState("")
  const [validatePhone, setValidatePhone] = useState("");
  const [validateFacebook, setValidateFacebook] = useState("");

  let ves;
  // only run first
  useEffect(() => {

  }, []);


  // lấy giá trị từ các event
  const getValueFromEventElement = (e) => {
    return e.target.value;
  }
  const handleInputName = (e) => {
    setFullname(getValueFromEventElement(e));
  }
  const handleInputMssv = (e) => {
    setMssv(getValueFromEventElement(e));
  }
  const handleEmail = (e) => {
    setEmail(getValueFromEventElement(e));
  }
  const handleInputPhone = (e) => {
    setPhone(getValueFromEventElement(e));
  }
  const handleInputFacebook = (e) => {
    setFacebook(getValueFromEventElement(e));
  }


  //============ check vaildate ===========
  // check chuỗi rông
  const isEmpty = (string) => {
    return string.trim() ? false : true;
  }

  // chứa đối tượng thông báo các lỗi validate
  const validateAlert = {
    empty: "Không được bỏ trống"
  }

  // xử lý validate của các input
  // return boolean
  const handleValidateInput = () => {
    let isValidate;
    // kiểm tra input elemement có bị rỗng hay không
    if (isEmpty(fullname) || isEmpty(mssv) || isEmpty(email)
      || isEmpty(phone) || isEmpty(facebook)) {
      if (isEmpty(fullname)) {
        setValidateFullName(validateAlert.empty);
      }
      if (isEmpty(mssv)) {
        setValidateMssv(validateAlert.empty);
      }
      if (isEmpty(email)) {
        setValidateEmail(validateAlert.empty);
      }
      if (isEmpty(phone)) {
        setValidatePhone(validateAlert.empty)
      }
      if (isEmpty(facebook)) {
        setValidateFacebook(validateAlert.empty)
      }

      return false;
    }

    return true;
  }


  // khi người dùng nhấn nút mua vé
  const onSubmit = (e) => {
    // nếu validate không đúng thì dừng
    // if (!handleValidateInput()) {
    //   return;
    // }

    const infoUser = {
      fullname: "tien",
      mssv: "mssv",
      email: "email",
      phone: "phone",
      facebook: "facebooke"
    }

    // đưa thông tin vé lên database
    listVe.forEach((numVe)=>{

     if( setVeXuanWithId(numVe,infoUser)){
      console.log("Đăng ký vé thành công")
     }else{
      console.log("vé bị trùng");
     }
    })

    

    setFullname("");
    setMssv("");
    setPhone("");
    setFacebook("");
  };

  const handleToggleVe = (e) => {
    setIsHiddentVe(!isHiddentVe);
    setListVe(ves);
  }

  useEffect(() => {
    // console.log(listVe)
  }, [listVe])

  const handleListVe = (arrVe) => {
    ves = arrVe

  }

  return (
    <div className="App">
      <Content>
        <Description />
        <ListVe handleClose={handleToggleVe} show={isHiddentVe} arrVe={handleListVe} />
        {/* <ParentComponent/> */}
        <InputGroup>
          <Input onChange={handleInputName} value={fullname} validate={validateFullName}
            name="Họ và tên" placeholder="Ví dụ: Nguyễn Văn A" />
          <Input onChange={handleInputMssv} value={mssv} validate={validateMssv}
            name="Mssv " placeholder="Ví dụ: 2451010001" />
          <Input onChange={handleEmail} value={email} validate={validateEmail}
            name="Email" placeholder="Ví dụ: 2451010001A@ou.edu.vn" />
          <Input onChange={handleInputPhone} value={phone} validate={validatePhone} maxLength={10}
            name="Số điện thoại " placeholder="Ví dụ: 0912 *** ****" />
          <Input onChange={handleInputFacebook} value={facebook} validate={validateFacebook}
            name="Link Facebok " placeholder="Ví dụ: facebook.com/ouityouth" />
          <Button name="Click vào để chọn vé" onClick={handleToggleVe}></Button>
          <Button name="Xác nhận mua" onClick={onSubmit} />
        </InputGroup>
      </Content>
    </div>
  );
}

export default App;
