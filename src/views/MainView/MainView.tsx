import JellyContainer from "@/components/JellyContainer/JellyContainer";
import { Calculator } from "@/utils/calculator";
import { useState, useEffect, useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getCalculationsList } from "@/API/calculationsSlice";
import { RootState } from "@/store";
import styles from "./MainView.module.scss";
export const MainView: React.VoidFunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { calculations } = useAppSelector((state: RootState) => ({
    ...state.calculations,
  }));

  useLayoutEffect(() => {
    if (calculations.length === 0) {
      dispatch(getCalculationsList());
    }
  }, []);

  const generateList = calculations.map((calculation) => (
    <tr>
      <td>{calculation.date}</td>
      <td>{calculation.value}</td>
    </tr>
  ));

  return (
    <JellyContainer>
      <div className={styles.box}>
        <h1>Ostatnie Obliczenia</h1>
        <table>
          <tr>
            <th>Data</th>
            <th>Obliczenia</th>
          </tr>
          {generateList}
        </table>
      </div>
    </JellyContainer>
  );
};
export default MainView;
