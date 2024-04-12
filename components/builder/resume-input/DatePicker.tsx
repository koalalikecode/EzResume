import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles/datepicker.css";
import CalendarIcon from "@/icon/CalendarIcon";
import { ReactElement } from "react";
import { updateResumeInput } from "@/atoms/actions";

const DatePickerInput = ({
  title,
  date,
  path,
  value,
  children,
  state,
  setState,
}: {
  title: string;
  date: Date;
  path: string;
  value?: string;
  children?: ReactElement;
  setState?: any;
  state?: any;
}) => {
  return (
    <div className="flex flex-col gap-2 flex-grow">
      <label htmlFor="">{title}</label>
      <div className="relative">
        <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2" />
        <DatePicker
          selected={date}
          showMonthYearPicker
          dateFormat="MM/yyyy"
          value={value}
          onChange={(date: Date) =>
            setState(updateResumeInput(state, date.toString(), path))
          }
        >
          {children}
        </DatePicker>
      </div>
    </div>
  );
};

export default DatePickerInput;
