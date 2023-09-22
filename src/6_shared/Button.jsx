import { Link } from "react-router-dom";
import styles from "./button.module.css";

export const Button = ({ button_text, link }) => {
    return (
        <Link to={link} className={styles["button-link"]}>
            <button className={styles["button"]}>{button_text}</button>
        </Link>
    );
};
