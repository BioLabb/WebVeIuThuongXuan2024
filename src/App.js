import { useEffect, useState } from "react";
import Input from "./component/Input";
import InputGroup from "./component/InputGroup";

import "./style/app.css"
import Content from "./component/Content";
import Description from "./component/Description";
import Button from "./component/Button";

import { readVeXuanRealTime, wirteVeXuan } from "./api/veXuan";
import { ref, onValue } from "firebase/database";
import { database } from "./utils/database";



function App() {

  // use state
  const [fullname, setFullname] = useState("");
  const [mssv, setMssv] = useState("");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [listVe, setListVe] = useState({});

  const [validateFullName, setValidateFullName] = useState("");
  const [validateMssv, setValidateMssv] = useState("");
  const [validateEmail, setValidateEmail] = useState("")
  const [validatePhone,setValidatePhone] = useState("");
  const [validateFacebook, setValidateFacebook] = useState("");

  // only run first
  useEffect(() => {
    const db = database;
    const starCountRef = ref(db, `vexuan/`);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setListVe(data);
    }, (error) => {
      console.log(error)
    });
  }, []);

  useEffect(() => {
    console.log(listVe);
  }, [listVe])

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
  const isEmpty = (string)=>{
    return string.trim() ? true : false;
  }

  // chứa đối tượng thông báo các lỗi validate
  const validateAlert = {
      empty: "Trống"
  }

  const handleValidateInput = () => {
    let isValidate = false;
    if(!isEmpty(fullname)){
        setValidateFullName(validateAlert.empty);
    }
    if(!isEmpty(mssv)){
      setValidateMssv(validateAlert.empty);
    }
    if(!isEmpty(email)){
      setValidateEmail(validateAlert.empty);
    }
    if(!isEmpty(phone)){
      setValidatePhone(validateAlert.empty)
    }
    if(!isEmpty(facebook)){
      setValidateFacebook(validateAlert.empty)
    }


  }

  const onSubmit = (e) => {
    const veXuan = {
      name: fullname,
      mssv: mssv,
      email: email,
      phone: phone,
      facebook: facebook,
      ve: 3
    }

    handleValidateInput();

    wirteVeXuan(veXuan);
    setFullname("");
    setMssv("");
    setPhone("");
    setFacebook("");
  }


  return (
    <div className="App">
      <Content>
        <Description />
        <InputGroup>
          <Input onChange={handleInputName} value={fullname} validate={validateFullName}
            name="Họ và tên" placeholder="Ví dụ: Nguyễn Văn A" />
          <Input onChange={handleInputMssv} value={mssv} validate={validateMssv}
            name="Mssv " placeholder="Ví dụ: 2451010001" />
          <Input onChange={handleEmail} value={email} validate={validateEmail}
            name="Email" placeholder="Ví dụ: 2451010001A@ou.edu.vn" />
          <Input onChange={handleInputPhone} value={phone} validate={validatePhone}
            name="Số điện thoại " placeholder="Ví dụ: 0912 *** ****" />
          <Input onChange={handleInputFacebook} value={facebook} validate={validateFacebook}
            name="Link Facebok " placeholder="Ví dụ: facebook.com/ouityouth" />
          <Button name="Xác nhận" onClick={onSubmit} />
        </InputGroup>
      </Content>
    </div>
  );
}

export default App;
