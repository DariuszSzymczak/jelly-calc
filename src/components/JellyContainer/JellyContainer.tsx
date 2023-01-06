import Header from "../Header/Header";
import styles from "./JellyContainer.module.scss";

type Props = {
  children: JSX.Element;
};

export const JellyContainer: React.VoidFunctionComponent<Props> = ({
  children,
}) => {
  return (
    <div className={styles.outerBox}>
      <Header />
      <div className={styles.jellyContainer}>
        <img src="/assets/plantL.svg" className={styles.plantL} />
        {children}
        <img src="/assets/plantR.svg" className={styles.plantR} />
      </div>
    </div>
  );
};
export default JellyContainer;
