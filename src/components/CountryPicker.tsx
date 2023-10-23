import * as React from "react";
import Icon from "@cloudscape-design/components/icon";
import "../styles/CountryPicker.css";
import { TableContext } from "../App";
import countryPickerStrings from "../strings/components/CountryPickerStrings";
const {getNames, getName, getCode} = require("country-list");

/** CountryPicker component that displays the current country and contains a dropdown with a list of other countries to choose from.*/

const CountryPicker: React.FC = () => {
    const [conOpen, setConOpen] = React.useState(false);
    const {country, setCountry} = React.useContext(TableContext);

    const countryDropdown = getNames().map((name: string) => 
        <p 
            className="countryOption" 
            onClick={() => setCountry(getCode(name))} 
            tabIndex={0} 
            onKeyDown={(e) => {e.key ==="Enter" && setCountry(getCode(name))}} 
            aria-label={name}
        >
            {name}
        </p>
    );

    return (
        <div>
            <div className="countryPicker" onClick={() => setConOpen(!conOpen)} tabIndex={0} onKeyDown={(e) => {e.key ==="Enter" && setConOpen(!conOpen)}}>
                <div className="countryIcon">
                    <Icon 
                        svg = {
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </g>
                            </svg>
                        }
                        size="medium"
                    />
                </div>
                <div className="currentCountry">
                    <div className="countryLabel">
                        <div className="countryText">
                            {countryPickerStrings.title}
                        </div>
                        <Icon name={conOpen ? "angle-up" : "angle-down"} size="small"/>
                    </div>
                    <div>
                        {getName(country)}
                    </div>
                </div>
            </div>
            {
                conOpen ?
                <div className="countryDropdown" onClick={() => setConOpen(false)} onKeyDown={(e) => {e.key ==="Enter" && setConOpen(false)}}>
                    {countryDropdown}
                </div>
                :
                null
            }
        </div>
    );
}

export default CountryPicker;