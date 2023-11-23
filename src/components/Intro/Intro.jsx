import "./Intro.css";

export default function Mainpage() {
  return (
    <>
      <div className="profileWrapper">
        <div>Emir,</div>
        <div>Web Developer,</div>
        <div>Electrical Engineer,</div>
        <div>Electronics Engineer</div>
      </div>
      <div className="profileDescription">
        <p>
          Emir Al Hafidz, a seventh-semester student, is enthusiastic about
          technology, specializing in web development, PLC, IoT, and Electrical
          Engineering.
        </p>
      </div>
      <marquee direction="down" scrolldelay="500" className="scrollTextWrapper">
        <div>Scroll Down</div>
        <div>スクロールダウン</div>
        <div>قم بالتمرير لأسفل</div>
      </marquee>
    </>
  );
}
