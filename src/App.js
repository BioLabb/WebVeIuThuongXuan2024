import { useEffect, useState } from "react";
import Input from "./component/Input";
import InputGroup from "./component/InputGroup";

import Button from "./component/Button";
import Content from "./component/Content";
import Description from "./component/Description";
import "./style/app.css";


import { setVeXuanWithId } from "./api/storeVeXuan";
import ListVe from "./component/ListVe";

import { v4 as uuidv4 } from "uuid";
import ImageUpload from "./component/ImageUpload";
import { uploadImg } from "./api/image";
import { writeVeXuan } from "./api/veXuanRealTime";


function App() {

  // use state
  const [fullname, setFullname] = useState("");
  const [mssv, setMssv] = useState("");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [listVe, setListVe] = useState([]);
  const [isHiddentVe, setIsHiddentVe] = useState(false);

  const [img, setImg] = useState(null);
  const [imgDownloadUrl, setImgDownLoadUrl] = useState("");

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

  const isEmail = (string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10,}$/; // Điện thoại gồm ít nhất 10 chữ số
    return phoneRegex.test(phoneNumber);
  }
  // chứa đối tượng thông báo các lỗi validate
  const validateAlert = {
    empty: "Không được bỏ trống",
    notEmail: "Email không hợp lệ",
    notPhone: "Số điện thoại không hợp lệ"
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
      } else {
      }
      if (isEmpty(mssv)) {
        setValidateMssv(validateAlert.empty);
      } else {
      }
      if (isEmpty(email)) {
        setValidateEmail(validateAlert.empty);
      } else {
      }
      if (isEmpty(phone)) {
        setValidatePhone(validateAlert.empty)
      } else {
      }
      if (isEmpty(facebook)) {
        setValidateFacebook(validateAlert.empty)
      } else {
      }

      return false;
    }
    setValidateFullName("");
    setValidatePhone("");
    setValidateEmail("");
    setValidateFacebook("");
    setValidateMssv("");

    if (!isEmail(email) || !isPhoneNumber(phone)) {
      // validte email
      if (!isEmail(email)) {
        setValidateEmail(validateAlert.notEmail);
      } else {
      }
      // validate phone
      if (!isPhoneNumber(phone)) {
        setValidatePhone(validateAlert.notPhone)
      } else {
      }
      return false;
    }
    setValidatePhone("");
    setValidateEmail("");
    return true;
  }

  const handleValidateVe = () => {
    if (!listVe || listVe.length == 0) {
      alert("Chưa chọn vé")
      return false;
    }
    return true;
  }

  const handleUploadImg = () => {
    if (!img) {
      alert("Chưa tải ảnh minh chứng");
      return false;
    }
    return true;
  }

  // khi người dùng nhấn nút mua vé
  const onSubmit = (e) => {
    // nếu validate không đúng thì dừng
    if (!handleValidateInput() || !handleValidateVe() || !handleUploadImg()) {
      return;
    }

    console.log(img)
    uploadImg(img)
      .then(url => {
        setImgDownLoadUrl(url);
      })

    const infoUser = {
      date: new Date(),
      fullname: fullname,
      mssv: mssv,
      email: email,
      phone: phone,
      facebook: facebook,
      img: imgDownloadUrl
    }

    // đưa thông tin vé lên database
    listVe.forEach((numVe) => {
      if (setVeXuanWithId(numVe, infoUser)) {
        writeVeXuan(numVe);
        console.log("Đăng ký vé thành công")
      } else {
        console.log("vé bị trùng");
      }
    })

    setFullname("");
    setMssv("");
    setPhone("");
    setFacebook("");
    setEmail("");
  };

  const handleToggleVe = (e) => {
    setIsHiddentVe(!isHiddentVe);
    setListVe(ves);
  }


  const handleListVe = (arrVe) => {
    ves = arrVe

  }

  const handleImageUpload = (image) => {
    setImg(image);
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
          <div className="flex">
            <Button styles={{ padding: "5px", width: "85px", margin: "0" }} name="Chọn vé" onClick={handleToggleVe}></Button>
            <div style={{ whiteSpace: "nowrap", scrollbarHeight: "none", height: "30px", marginTop: "auto", marginBottom: "auto", marginLeft: "5px", overflowX: "scroll" }}>
              {
                listVe &&
                listVe.map((numVe) => {
                  return (
                    <span key={uuidv4()} style={{ marginLeft: "5px", width: "30px", height: "30px", lineHeight: "30px", marginTop: "auto", marginBottom: "auto" }} className="block_yellow_linear  border_radius margin-auto">{numVe}</span>
                  );
                })
              }
            </div>
          </div>
          <ImageUpload imageUpload={handleImageUpload} />
          <Button name="Xác nhận mua" onClick={onSubmit} />
        </InputGroup>
      </Content>
    </div>
  );
}

export default App;
