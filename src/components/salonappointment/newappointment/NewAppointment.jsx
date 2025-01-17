import { useState } from "react";
import { Container, } from "react-bootstrap";
import styles from "./NewAppointment.module.css";
import PastAppointment from "../pastappointment/PastAppointment";
import UpComingAppointment from "../upcomingappointment/UpComingAppointment";
import Ongoing from "../ongoingappointment/Ongoing";
import Navbar from "../../saloondashboard/navbar/Navbar";
import { navItems } from "../../../data/navdata/Data";
import TodayAppointment from "../todayappointment/TodayAppointment";
import { useSelector } from "react-redux";
import Footer from "../../home/footer/Footer";
const NewAppointment = () => {
  const [activeButton, setActiveButton] = useState("button4");
  const { salonName, salonImage } = useSelector((state) => state.auth);
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

 
  return (
    <>
    <main>
        <Navbar data={navItems} redirect='/salon/dashboard'/>
      <Container>
        <div className={styles.mainDiv}>
          <img src={salonImage} alt="Salon Img"  />
          <p className={styles.hairClinic}>
          {salonName}
            {/* <span className={styles.info}>
              Convenient and personalized hair grooming and styling solutions, just for you.
            </span> */}
          </p>
        </div>
        <div className={styles.btnDiv}>
          <p>Appointments</p>
          <button
            onClick={() => handleButtonClick("button1")}
            className={activeButton === "button1" ? styles.active : ""}
          >
            Today
          </button>
          <button
            onClick={() => handleButtonClick("button2")}
            className={activeButton === "button2" ? styles.active : ""}
          >
            Cancelled
          </button>
          <button
            onClick={() => handleButtonClick("button3")}
            className={activeButton === "button3" ? styles.active : ""}
          >
            Pending
          </button>
          <button
            onClick={() => handleButtonClick("button4")}
            className={activeButton === "button4" ? styles.active : ""}
          >
            Completed
          </button>
         
        </div>
        {activeButton === "button1" && <div><TodayAppointment/></div>}
        {activeButton === "button2" && <div><Ongoing/></div>}
        {activeButton === "button3" && <div><UpComingAppointment/></div>}
        {activeButton === "button4" && (
         <PastAppointment/>
        )}
      </Container>
    </main>
          <Footer redirect="/salon/dashboard"/>
          </>

  );
};

export default NewAppointment;