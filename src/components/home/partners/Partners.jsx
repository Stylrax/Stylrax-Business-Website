import styles from "../partners/Partners.module.css";
// import icon1 from "../../../assets/image/icon1.png";
// import icon2 from "../../../assets/image/icon2.png";
// import icon3 from "../../../assets/image/icon3.png";
// import icon4 from "../../../assets/image/icon4.png";
// import icon5 from "../../../assets/image/icon5.png";
// import icon6 from "../../../assets/image/icon6.png";
import placeholder from "../../../assets/image/placeholder-img.webp";

export default function Partners() {
    return (
        <div className={styles.bgImg}>
            <div className={styles.bgColor}>
                <img src={placeholder} className={styles.common}/>
                {/* <img src={icon2} />
                <img src={icon3} />
                <img src={icon4} />
                <img src={icon5} /> */}
                {/* <img src={icon6} /> */}
                <img src={placeholder} />
                <img src={placeholder} />
                <img src={placeholder} />
                <img src={placeholder} />
                <img src={placeholder} />
            </div>

        </div>
    )
}

