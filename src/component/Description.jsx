import Line from "./Line";
import "../style/Description.css"
export default function Description(){

    return(
        <>
        <div className="description-container">
            <img className="logo_ctr" src={process.env.PUBLIC_URL +"/XTNwhite.png"}/>
            <h4 className="color_yellow_linear">CHIẾN DỊCH XUÂN TÌNH NGUYỆN 2024</h4>
            <img className="logo_day" src={process.env.PUBLIC_URL + "/logo.png"}/>
            <p><span className="color_red">*</span> Không được bỏ trống</p>
        </div>
        </>
    )
}