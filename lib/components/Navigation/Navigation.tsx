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
            <ul className={styles.submenu}>
              <li>
                <a href="#">Workspace</a>
              </li>
              <li>
                <a href="#">Action Log</a>
              </li>
              <li>
                <a href="#">Auto Build Log</a>
              </li>
            </ul>
          </li>
          <li>
            <span>Accounts</span>
            <FontAwesomeIcon icon={faChevronDown} />
            <ul className={styles.submenu}>
              <li>
                <a href="#">Carriers</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
            </ul>
          </li>
          <li>
            <span>Utilities</span>
            <FontAwesomeIcon icon={faChevronDown} />
            <ul className={styles.submenu}>
              <li>
                <a href="#">Users</a>
              </li>
              <li>
                <a href="#">Map</a>
              </li>
              <li>
                <a href="#">Routing Guide</a>
              </li>
              <li>
                <a href="#">Coverage Plans</a>
              </li>
              <li>
                <a href="#">Marketplace Carriers</a>
              </li>
            </ul>
          </li>
          <li>
            <span>bstoica@rpmmoves.com</span>
            <FontAwesomeIcon icon={faChevronDown} />
            <ul className={styles.submenu}>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
