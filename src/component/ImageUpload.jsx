import React, { useEffect, useState } from "react";
import { uploadImg } from "../api/image";
const metadata = {
  contentType: "image/jpeg",
};
const ImageUpload = ({imageUpload}) => {
  const [image, setImage] = useState(null); // state lưu ảnh sau khi chọn
  const [progress, setProgress] = useState(0); // state hiển thị phần trăm tải ảnh lên store
  const handleChange = async (e) => {
    if (e.target.files[0]) {
      await setImage(e.target.files[0]);
    }
  };

  useEffect(()=>{
      imageUpload(image);
  },[image])
  // xử lý chọn ảnh
  // const handleUpload = () => {
  //   const storageRef = ref(storage, `images/${image.name}`); // tạo 1 địa chỉ để chứa ảnh chuẩn bị tải lên store
  //   const uploadTask = uploadBytesResumable(storageRef, image, metadata); // hàm tải ảnh lên store
  //   // Đoạn code này để tạo tính năng lắng nghe quá trình tải ảnh, trả về tiến trình để làm tính năng phần trăm tải ảnh
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       // Observe state change events such as progress, pause, and resume
  //       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       setProgress(progress);
  //       console.log("Upload is " + progress + "% done");
  //       switch (snapshot.state) {
  //         case "paused":
  //           console.log("Upload is paused");
  //           break;
  //         case "running":
  //           console.log("Upload is running");
  //           break;
  //       }
  //     },
  //     (error) => {
  //       // Xử lý trường hợp tải ảnh thất bại
  //     },
  //     () => {
  //       // Xử lý trường hợp tải ảnh thành công
  //       //  Lấy về đường link của ảnh vừa tải thành công
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         alert("Upload image successfully, download URL: " + downloadURL);
  //         // reset các trạng thái sau khi tải ảnh thành công
  //         setImage(null);
  //         setProgress(0);
  //         console.log("File available at", downloadURL);
  //       });
  //     }
  //   );
  // };

  // const handleUpload = ()=>{
  //   uploadImg(image);
  // }

  return (
    <div className="py-10">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="file"
            onChange={handleChange}
            className="hidden"
            id="imageInput"
          />
          <label
            htmlFor="imageInput"
            className="block bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
          >
            Select Image
          </label>
          {image && <p className="mt-2">Selected: {image.name}</p>}
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="mt-2 rounded-lg shadow-md"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          )}
        </div>
        {progress > 0 && (
          <progress value={progress} max="100" className="w-full" />
        )}
        {/* {image && (
          <button
            onClick={handleUpload}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Upload
          </button>
        )} */}
      </div>
    </div>
  );
};
export default ImageUpload;
