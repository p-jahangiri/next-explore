import cn from "clsx";
import React, { CSSProperties, ReactNode } from "react";
import s from "./dropDown.module.scss";
export interface DropdownProps {
  heightClassName?: string;
  children?: ReactNode;
  visible: boolean;
  className?: string;
  style?: CSSProperties;
  onClose: VoidFunction;
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  visible,
  style,
  onClose,
  className,
  heightClassName = s.defaultHeight,
}) => {
  return (
    <>
      {visible && (
        <div onClick={() => onClose()} className={s.dropDownBackdrop} />
      )}
      <div style={style} className={s.dropDownWrapper}>
        <div
          className={cn(
            s.dropDown,
            visible
              ? ` ${s.dropDownActive} ${heightClassName}`
              : s.dropDownInactive,
            className
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
