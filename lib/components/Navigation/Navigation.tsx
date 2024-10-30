import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { Logo } from "./assets/Logo";
import styles from "./styles.module.css";

export function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <div>
          <a href="#">
            <Logo />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <span>Orders</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </li>
          <li>
            <span>Accounts</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
          <li>
            <span>Utilities</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </li>
          <div>
            <span>bstoica@rpmmoves.com</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </ul>
      </div>
    </nav>
  );
}
