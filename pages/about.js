import Head from "next/head";
import Image from "next/image";

// import chrisImgPath from "../public/images/Chris.jpg";
// import chrisImgPath from "./Chris.jpg";

export default function about() {
  return (
    <>
      <Head>
        <title>Chris Complete - About</title>
      </Head>
      <div className="container my-5">
        <div className="row">
          <div className="col-6 text-center">
            <Image  src={"/images/Chris.jpg"} width={381} height={708} alt=""/>
          </div>
          <div className="col-6 fs-4">
            <u>關於<b>克里斯</b></u><br/>
            其實就是個技術宅，<br/>
            覺得生命就是陽光、空氣、水還有音樂。<br/>
            <br/>
            摩羯座A型，有點完美主義加一點極簡主義，人生課題大概就是學會放開自己⋯⋯<br/>
            有時候嘰嘰喳喳說個不停，不講話的時候可能冷的像台機器。<br/>
            <br/>
            靠軟體開發維生，希望世界和平人人有飯吃。<br/>
            <br/>
            <br/>
            <u>關於<b>Chris Complete</b></u><br/> 
            向Steve McConnell先生的著作-"Code Complete"致敬，<br/>
            不過本站的內容沒那麼厲害，就只是一些筆記跟隨筆，<br/>
            頂多加上一些<b>克里斯</b>的嘰嘰喳喳。<br/>
            <br/>
            聯絡我：<a href="mailto:SuoChenHua@gmail.com" style={{color:'#666666'}}>SuoChenHua@gmail.com</a>
            
          </div>
        </div>
        {/* <Image  src={chrisImgPath} width={200} height={200} alt=""/> */}
        
        {/* <Image  src={chrisImgPath} width="100%" height="100%" alt=""/> */}
      </div>
    </>
  );
}
