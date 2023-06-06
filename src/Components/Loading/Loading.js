import React from "react";
import style from "./loading.module.css";
import loadingLogo from "../../Assets/loading.png";
import { ClipLoader } from "react-spinners";
function Loading() {
  return (
    <div
      className={style.loadingwrap}
      style={{
        backgroundImage: `url(${loadingLogo})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundCover: "cover",
      }}
    >   
    <div style={{marginTop:'40rem'}}>
    <ClipLoader color={'#fff'} size={70} />

    </div>
    </div>
  );
}

export default Loading;
