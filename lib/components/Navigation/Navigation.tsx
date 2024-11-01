import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { Logo } from "./assets/Logo";
import styles from "./styles.module.css";
import { User } from "../../Models/User";

type NavigationProps = {
  user: User;
};

type Path = {
  name: string;
  subMenus?: string[];
};

export function Navigation(props: NavigationProps) {
  const roles = props.user.profile.roles.split(",");

  const [paths] = useState<Path[]>([
    { name: "Dashboard" },
    { name: "Orders", subMenus: ["Workspace", "Action Log", "Auto Build Log"] },
    { name: "Accounts", subMenus: ["Carriers", "Customers"] },
    {
      name: "Utilities",
      subMenus: [
        "Users",
        "Map",
        "Routing Guide",
        roles.includes("Pricing:User") ? "Coverage Plans" : null,
        "Marketplace Carriers",
      ].filter(Boolean) as string[],
    },
  ]);

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <div>
          <a href="#">
            <Logo />
          </a>
        </div>
        <ul>
          {paths.map((path) => (
            <li key={path.name}>
              <span>{path.name}</span>
              {path.subMenus && <FontAwesomeIcon icon={faChevronDown} />}
              {path.subMenus && (
                <ul className={styles.submenu}>
                  {path.subMenus.map((subMenu) => (
                    <li key={subMenu}>
                      <a href="#">{subMenu}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <span>{props.user.profile.name}</span>
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
