"use client";
import React, { useEffect, useState } from "react";
import styles from "./categories.module.css";
import Image from "next/image";
import desktopImage from "@/app/assets/desktop.png";
import mobileImage from "@/app/assets/mobile.png";

const Categories = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    function setDeviceType() {
      setIsMobile(window.innerWidth <= 700);
    }
    setDeviceType();

    window.addEventListener("resize", setDeviceType);

    return () => {
      window.removeEventListener("resize", setDeviceType);
    };
  }, []);

  return (
    <div className={styles.categories}>
      {/* heading */}
      <h2 className={styles.categoriesHeading}>Talent Categories</h2>
      {/* sub heading  */}
      <p className={styles.categoriesSubHeading}>
        Categorizing Talents based on IT, Non-IT, Experience and Expertise
      </p>

      {!isMobile && (
        <Image
          src={desktopImage}
          alt="categories"
          className="backgroundDesktop"
        />
      )}
      {isMobile && (
        <Image
          src={mobileImage}
          alt="categories"
          className="backgroundMobile"
        />
      )}
    </div>
  );
};

export default Categories;
