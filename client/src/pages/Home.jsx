import { useEffect, useRef, useState } from "react";
import { PiHandHeartDuotone } from "react-icons/pi";
import { TbDeviceDesktopHeart } from "react-icons/tb";
import styles from "../styles/Home.module.css";
import image from "../assets/javi2.jfif";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const homeRef = useRef(null);

  const handleIntersection = (entries) => {
    const isVisibleElement = entries[0].isIntersecting;
    setIsVisible(isVisibleElement); 
    setTextVisible(isVisibleElement);
  };

  useEffect(() => {
    const options = {
      threshold: 0.5,
      rootMargin: "0px",
      root: null // Define el porcentaje de visibilidad necesario para activar la animación
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(homeRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.home} ref={homeRef}>
      <div className={styles.image}>
        <img src={image} alt="javi" />
      </div>

      <p
        className={`${styles.welcome} ${styles.animatedText} ${
          isVisible ? styles.animate : "" } ${!textVisible ? styles.hidden : ""}`}
      >
        ¡Hi! welcome to my space <PiHandHeartDuotone color="rgb(42, 94, 94)" />
        
      </p>
      <p className={`${styles.name} ${styles.animatedText} ${
          isVisible ? styles.animate : ""
        } ${!textVisible ? styles.hidden : ""}`}>I'm Javier Plata</p>
      <h1
        className={`${styles.h1} ${styles.animatedText} ${
          isVisible ? styles.animate : ""
        } ${!textVisible ? styles.hidden : ""}`}
      >
        FULL STACK WEB DEVELOPER{" "}
        <TbDeviceDesktopHeart color="rgb(42, 94, 94)" />
      </h1>

      <div className={styles.cv}>
        <a href=""></a>
      </div>
    </div>
  );
};

export default Home;
