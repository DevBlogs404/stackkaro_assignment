import React from "react";
import styles from "./services.module.css";
import Card from "../Card";
import { servicesData } from "@/app/data/services";

interface IServicesProps {
  title: string;
  description: string;
  data: serviceData[];
}

type serviceData = {
  id: number;
  image: any;
  title: string;
  description: string;
};

const Services = ({ title, description, data }: IServicesProps) => {
  return (
    <div className={styles.services}>
      {/* heading */}
      <h2 className={styles.servicesHeading}>{title}</h2>
      {/* sub heading  */}
      <p className={styles.servicesSubHeading}>{description}</p>
      {/* service card  */}
      <div className={styles.servicesCard}>
        {data?.map((data) => {
          return (
            <Card
              imageSrc={data.image}
              title={data.title}
              description={data.description}
              key={data.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
