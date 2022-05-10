import { DetailedHTMLProps, FC, SelectHTMLAttributes, useState } from "react";
import s from "./select.module.scss";
import Arrow from "assets/svg/arrow.svg";
import Dropdown from "../dropDown";
interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: {
    value: string;
    label: string;
  }[];
}
const Select: FC<SelectProps> = (props) => {
  function handleClick(label: string) {
    setValue(label);
    setVisible(false);

    // if (props.onChange) {
    //   props.onChange({ target: { value: label } } as any);
    // }
  }
  const [visible, setVisible] = useState(false);

  const [value, setValue] = useState(() => {
    if (props.value) {
      return props.options.find((option) => option.value === props.value)
        ?.label;
    }
    return props.options[0].label;
  });
  return (
    <div className={s.container}>
      <div onClick={() => setVisible(!visible)} className={s.select}>
        <Arrow className={s.icon} />
        <div className={s.selectBox}>{value}</div>
      </div>
      <Dropdown
        style={{
          top: 5,
          right: 0,
        }}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        {props.options.map((item, index) => {
          return (
            <div
              className={s.dropDown}
              key={index}
              onClick={() => handleClick(item.label)}
            >
              {item.label}
            </div>
          );
        })}
      </Dropdown>
    </div>
  );
};

export default Select;
