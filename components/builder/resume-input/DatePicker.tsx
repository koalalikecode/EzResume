import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppDispatch } from "redux/hooks";
import { resumeInputUpdated } from "redux/resumesSlice";
import "./styles/datepicker.css";
import CalendarIcon from "icon/CalendarIcon";

const DatePickerInput = ({
  title,
  date,
  path,
  value,
  children,
}: {
  title: string;
  date: Date;
  path: string;
  value?: string;
  children?;
}) => {
  const dispatch = useAppDispatch();
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
          onChange={(date) =>
            dispatch(resumeInputUpdated({ value: date.toString(), path: path }))
          }
        >
          {children}
        </DatePicker>
      </div>
    </div>
  );
};

export default DatePickerInput;
