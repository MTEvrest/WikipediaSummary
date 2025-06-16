import * as React from "react";
import Icon from "@cloudscape-design/components/icon";
import { TableContext } from "../App";
import resultPickerStrings from "../strings/components/ResultPickerStrings";
import "../styles/ResultPicker.css";

/** ResultPicker component that displays the current max number of items to include in the table
 *  and contains a dropdown with a list of other max numbers.*/

const ResultPicker: React.FC = () => {
    const [resOpen, setResOpen] = React.useState(false);
    const {itemNumber, setItemNumber} = React.useContext(TableContext);

    return (
        <div>
            <div 
                className="resultPicker" 
                onClick={() => setResOpen(!resOpen)} 
                tabIndex={0} 
                onKeyDown={(e) => {e.key ==="Enter" && setResOpen(!resOpen)}}
            >
                <div className="resultIcon">
                    <Icon name="menu" size="medium"/>
                </div>
                <div className="currentResult">
                    <div className="resultLabel">
                        <div className="resultText">
                            {resultPickerStrings.title}
                        </div>
                        <Icon name={resOpen ? "angle-up" : "angle-down"} size="small"/>
                    </div>
                    <div aria-label={`${itemNumber} ${resultPickerStrings.displayLabel}`}>
                        {itemNumber}
                    </div>
                </div>
            </div>
            {
                resOpen ?
                <div className="resultDropdown" onClick={() => setResOpen(false)} onKeyDown={(e) => {e.key ==="Enter" && setResOpen(false)}}>
                    <p className="resultNumber" onClick={() => setItemNumber(25)} tabIndex={0} onKeyDown={(e) => {e.key ==="Enter" && setItemNumber(25)}}>25</p>
                    <p className="resultNumber" onClick={() => setItemNumber(50)} tabIndex={0} onKeyDown={(e) => {e.key ==="Enter" && setItemNumber(50)}}>50</p>
                    <p className="resultNumber" onClick={() => setItemNumber(75)} tabIndex={0} onKeyDown={(e) => {e.key ==="Enter" && setItemNumber(75)}}>75</p>
                    <p className="resultNumber" onClick={() => setItemNumber(100)} tabIndex={0} onKeyDown={(e) => {e.key ==="Enter" && setItemNumber(100)}}>100</p>
                    <p className="resultNumber" onClick={() => setItemNumber(200)} tabIndex={0} onKeyDown={(e) => {e.key ==="Enter" && setItemNumber(200)}}>200</p>
                </div>
                :
                null
            }
        </div>
    );
}

export default ResultPicker;