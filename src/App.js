import { useState } from "react";
import Input from "./component/Input";
import InputGroup from "./component/InputGroup";

import "./style/app.css"
import Content from "./component/Content";
import Description from "./component/Description";
import Button from "./component/Button";

function App() {

  // use state
  const [fullname, setFullname] = useState("");
  const [mssv, setMssv] = useState("");
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState();

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

  const handleInputPhone = (e) => {
    setPhone(getValueFromEventElement(e));
  }

  const handleInputFacebook = (e) => {
    setFacebook(getValueFromEventElement(e));
  }

  const onSubmit = (e) => {
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
          <Input onChange={handleInputName} value={fullname}
            name="Họ và tên" placeholder="Ví dụ: Nguyễn Văn A" />
          <Input onChange={handleInputMssv} value={mssv}
            name="Mssv " placeholder="Ví dụ: 2451010001" />
          <Input onChange={handleInputPhone} value={phone}
            name="Email" placeholder="Ví dụ: 2451010001A@ou.edu.vn" />
          <Input onChange={handleInputPhone} value={phone}
            name="Số điện thoại " placeholder="Ví dụ: 0912 *** ****" />
          <Input onChange={handleInputFacebook} value={facebook}
            name="Link Facebok " placeholder="Ví dụ: facebook.com/ouityouth" />
          <Button name="Xác nhận" onClick={onSubmit} />
        </InputGroup>
      </Content>
    </div>
  );
}

export default App;
