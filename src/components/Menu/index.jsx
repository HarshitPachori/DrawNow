import React from "react";
import styles from "@/components/Menu/style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEraser,
  faPencil,
  faRedo,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEMS } from "@/constants";
import { actionItemClick, menuItemClick } from "@/slice/menuSlice";
import cx from "classnames";

const Menu = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const handleMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };
  const handleActionMenuItemClick = (itemName) => {
    dispatch(actionItemClick(itemName));
  };
  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.toolContainer, {
          [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
      >
        <FontAwesomeIcon icon={faPencil} className={styles.toolIcon} />
        <span className={styles.toolText}>Pencil</span>
      </div>
      <div
        className={cx(styles.toolContainer, {
          [styles.active]: activeMenuItem === MENU_ITEMS.ERASOR,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.ERASOR)}
      >
        <FontAwesomeIcon icon={faEraser} className={styles.toolIcon} />
        <span className={styles.toolText}>Eraser</span>
      </div>
      <div
        className={styles.toolContainer}
        onClick={() => handleActionMenuItemClick(MENU_ITEMS.UNDO)}
      >
        <FontAwesomeIcon icon={faUndo} className={styles.toolIcon} />
        <span className={styles.toolText}>Undo</span>
      </div>
      <div
        className={styles.toolContainer}
        onClick={() => handleActionMenuItemClick(MENU_ITEMS.REDO)}
      >
        <FontAwesomeIcon icon={faRedo} className={styles.toolIcon} />
        <span className={styles.toolText}>Redo</span>
      </div>
      <div
        className={styles.toolContainer}
        onClick={() => handleActionMenuItemClick(MENU_ITEMS.DOWNLOAD)}
      >
        <FontAwesomeIcon icon={faDownload} className={styles.toolIcon} />
        <span className={styles.toolText}>Download</span>
      </div>
    </div>
  );
};

export default Menu;
