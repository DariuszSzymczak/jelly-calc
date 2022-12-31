import { Calculator } from "@/utils/calculator";
import { useState, useEffect } from "react";
import styles from "./JellyCalculator.module.scss";
export const JellyCalculator: React.VoidFunctionComponent = () => {
  const [calc] = useState<Calculator>(new Calculator());
  return (
    <div className={styles.box}>
      <input type="text" id="input-a" value={calc.a} />
      <div className={styles.operationButoonsBox}>
        <button className={styles.operationButton} onClick={calc.add}>
          +
        </button>
        <button className={styles.operationButton} onClick={calc.substract}>
          -
        </button>
        <button className={styles.operationButton} onClick={calc.divide}>
          /
        </button>
        <button
          className={styles.operationButton}
          onClick={calc.multiplication}
        >
          *
        </button>
      </div>
      <input type="text" id="input-b" value={calc.b} />

      <h1>=</h1>
      <h2>{calc.result}</h2>
    </div>
  );
};
export default JellyCalculator;
