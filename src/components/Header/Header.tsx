import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
export const Header: React.VoidFunctionComponent = () => {
  return (
    <div className={styles.box}>
      <h1>Jelly Calc</h1>
      <menu>
        <Link to="/">Ostatnie Obliczenia</Link>
        <Link to="/calculator">Kalkulator</Link>
      </menu>
    </div>
  );
};
export default Header;
