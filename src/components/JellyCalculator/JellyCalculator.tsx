import { Api } from "@/API/API";
import { getCalculationsList } from "@/API/calculationsSlice";
import { useAppDispatch } from "@/hooks";
import { Calculator } from "@/utils/calculator";
import { useState, useEffect, ChangeEvent } from "react";
import styles from "./JellyCalculator.module.scss";
export const JellyCalculator: React.VoidFunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [calc, setCalc] = useState<Calculator>(new Calculator());
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [sign, setSign] = useState<string>();
  const [value, setValue] = useState<number>(0);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const api = new Api();

  const setAHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const tempA = parseFloat(event.target.value.replace(/^0+/, ""));
    if (a !== tempA) {
      calc.a = tempA;
      setA(tempA);
      setIsLocked(false);
    }
  };

  const setBHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const tempB = parseFloat(event.target.value.replace(/^0+/, ""));
    if (b !== tempB) {
      setIsLocked(false);
      setB(tempB);
      calc.b = tempB;
    }
  };

  const sendCalculationsToAPI = async () => {
    if (!isLocked) {
      let tempValue = 0;
      switch (sign) {
        case "+":
          tempValue = calc.add();
          break;
        case "-":
          tempValue = calc.substract();
          break;
        case "/":
          tempValue = calc.divide();
          break;
        case "*":
          tempValue = calc.substract();
          break;
      }
      await setValue(tempValue);
      const date = new Date();
      await api.sendCalculation({
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`,
        value: `${a} ${sign} ${b} = ${tempValue}`,
      });
      dispatch(getCalculationsList());
      setIsLocked(true);
    }
  };

  const changeSignHandler = (newSign: string) => {
    if (newSign !== sign) {
      setIsLocked(false);
      setSign(newSign);
    }
  };

  const isActiveClassAdder = (currentSign: string) =>
    currentSign === sign ? styles.activeButton : "";

  return (
    <div className={styles.box}>
      <input
        type="number"
        id="input-a"
        value={a}
        onChange={(event) => {
          setAHandler(event);
        }}
      />
      <div className={styles.operationButoonsBox}>
        <button
          className={`${styles.operationButton}  ${isActiveClassAdder("+")}`}
          onClick={() => {
            changeSignHandler("+");
          }}
        >
          +
        </button>
        <button
          className={`${styles.operationButton}  ${isActiveClassAdder("-")}`}
          onClick={() => {
            changeSignHandler("-");
          }}
        >
          -
        </button>
        <button
          className={`${styles.operationButton}  ${isActiveClassAdder("/")}`}
          onClick={() => {
            changeSignHandler("/");
          }}
        >
          /
        </button>
        <button
          className={`${styles.operationButton}  ${isActiveClassAdder("*")}`}
          onClick={() => {
            changeSignHandler("*");
          }}
        >
          *
        </button>
      </div>
      <input
        type="number"
        id="input-b"
        value={b}
        onChange={(event) => {
          setBHandler(event);
        }}
      />
      <br />
      <button
        className={`${styles.operationButton} ${
          isLocked && styles.lockedButton
        }`}
        onClick={() => {
          sendCalculationsToAPI();
        }}
      >
        =
      </button>
      <h2>{value}</h2>
    </div>
  );
};
export default JellyCalculator;
