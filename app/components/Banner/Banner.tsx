import Image from "next/image";
import styles from "./banner.module.css";
import banner from "@/app/assets/banner.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      {/* image */}
      <Image src={banner} alt="banner" className={styles.bannerImage} />
      {/* heading */}
      <h1 className={styles.bannerHeading}>Experience seamless hiring</h1>
      {/* sub-heading */}
      <h2 className={styles.bannerSubHeading}>
        Connecting global companies with the best indian talent
      </h2>
      {/* para  */}
      <p className={styles.bannerParagraph}>
        STACKKAROO is a hiring platform that picks the best of IT & Non-IT
        fields as well as web development, digital marketing, data science,
        business development, human resource, content writing, advertising and
        much more in India. Their communication skills, fit for culture, and
        ability to be ethical for global work will be assessed.
      </p>
      {/* button  */}
      <button className={styles.bannerButton}>Job Opening</button>
    </div>
  );
};

export default Banner;
