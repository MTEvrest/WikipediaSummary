import * as React from "react";
import Icon from "@cloudscape-design/components/icon";
import Calendar from "@cloudscape-design/components/calendar";
import "../styles/DatePicker.css";
import { TableContext } from "../App";
import datePickerStrings from "../strings/components/DatePickerStrings";
var moment = require("moment");     

/** DatePicker component that displays the current date and contains a dropdown with a calander to change the date.*/
const DatePicker: React.FC = () => {
    const [calOpen, setCalOpen] = React.useState(false);
    const {date, setDate} = React.useContext(TableContext);

    return (
        <div>
            <div 
                className="datePicker" 
                onClick={() => setCalOpen(!calOpen)} 
                tabIndex={0} 
                onKeyDown={(e) => {e.key ==="Enter" && setCalOpen(!calOpen)}}
                aria-label={`${datePickerStrings.selectorAriaLabel} ${moment(date).format("MMMM D, Y")}`}
            >
                <div className="calendarIcon">
                    <Icon name="calendar" size="medium"/>
                </div>
                <div className="currentDate">
                    <div className="dateLabel">
                        <div className="dateText">
                            {datePickerStrings.title}
                        </div>
                        <Icon name={calOpen ? "angle-up" : "angle-down"} size="small"/>
                    </div>
                    <div>
                        {moment(date).format("MMMM D, Y")}
                    </div>
                </div>
            </div>
            {
                calOpen ?
                <div className="calendar">
                    <Calendar 
                        onChange={({ detail }) => 
                            {
                                setCalOpen(false);
                                var newDate: string[] = detail.value.split("-");
                                setDate(new Date(Number(newDate[0]), Number(newDate[1]) - 1, Number(newDate[2])));
                            }
                            
                        }
                        value={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
                        previousMonthAriaLabel={datePickerStrings.previousMonth}
                        nextMonthAriaLabel={datePickerStrings.nextMonth}
                        ariaLabel={datePickerStrings.calendar}/>
                </div>
                :
                null
            }
        </div>
    );
}

export default DatePicker;