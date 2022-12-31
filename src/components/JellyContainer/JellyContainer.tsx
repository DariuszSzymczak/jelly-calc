import { Calculator } from "@/utils/calculator";
import { useState, useEffect } from "react";
import JellyCalculator from "../JellyCalculator/JellyCalculator";
import styles from "./JellyContainer.module.scss";
export const JellyContainer: React.VoidFunctionComponent = () => {
  return (
    <div className={styles.jellyContainer}>
      <img src="/assets/ukwiauL.svg" className={styles.ukwiauL} />
      <JellyCalculator />
      <img src="/assets/ukwiauR.svg" className={styles.ukwiauR} />
    </div>
  );
};
export default JellyContainer;
