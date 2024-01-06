import Banner from "./components/Banner";
import BenchMark from "./components/BenchMark";
import Categories from "./components/Categories";
import HiringBenfits from "./components/HiringBenfits";
import HiringProcess from "./components/HiringProcess";
import HiringSteps from "./components/HiringSteps";
import InfoStrip from "./components/InfoStrip";
import Services from "./components/Services";
import styles from "./page.module.css";
import { servicesData } from "@/app/data/services";
import { pricingData } from "@/app/data/services";

export default function Home() {
  return (
    <main className={styles.home}>
      <Banner />
      <section className={styles.services}>
        <Services
          title={"We are Best Because"}
          description={"Affordable Web Development Company in India"}
          data={servicesData}
        />
        <InfoStrip />
        <HiringProcess />
        <HiringSteps />
        <HiringBenfits />
        <BenchMark />
        <Categories />
        <Services
          title={"Pricing"}
          description={"Best Services at the Most Affordable Cost"}
          data={pricingData}
        />
      </section>
    </main>
  );
}
