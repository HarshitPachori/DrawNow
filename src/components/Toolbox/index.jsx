import React from "react";
import styles from "@/components/Toolbox/style.module.css";
import { COLORS, MENU_ITEMS } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeBrushSize, changeColor } from "@/slice/toolboxSlice";
import cx from "classnames";

const ToolBar = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);

  const showToolbox = activeMenuItem === MENU_ITEMS.PENCIL;

  const showBrushStroke =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASOR;

  const handleBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
  };
  const handleChangeColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
  };
  return (
    <div className={styles.toolboxContainer}>
      {showToolbox && (
        <div className={styles.toolboxItem}>
          <h1 className={styles.toolItemText}>Stroke Color</h1>
          <div className={styles.colorContainer}>
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.WHITE,
              })}
              style={{ backgroundColor: COLORS.WHITE }}
              onClick={() => handleChangeColor(COLORS.WHITE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLACK,
              })}
              style={{ backgroundColor: COLORS.BLACK }}
              onClick={() => handleChangeColor(COLORS.BLACK)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.RED,
              })}
              style={{ backgroundColor: COLORS.RED }}
              onClick={() => handleChangeColor(COLORS.RED)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.ORANGE,
              })}
              style={{ backgroundColor: COLORS.ORANGE }}
              onClick={() => handleChangeColor(COLORS.ORANGE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.GREEN,
              })}
              style={{ backgroundColor: COLORS.GREEN }}
              onClick={() => handleChangeColor(COLORS.GREEN)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLUE,
              })}
              style={{ backgroundColor: COLORS.BLUE }}
              onClick={() => handleChangeColor(COLORS.BLUE)}
            />
            <div
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.YELLOW,
              })}
              style={{ backgroundColor: COLORS.YELLOW }}
              onClick={() => handleChangeColor(COLORS.YELLOW)}
            />
          </div>
        </div>
      )}
      {showBrushStroke && (
        <div className={styles.toolboxItem}>
          <h1 className={styles.toolItemText}>Brush Size</h1>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            onChange={handleBrushSize}
            value={size}
          />
        </div>
      )}
    </div>
  );
};

export default ToolBar;
