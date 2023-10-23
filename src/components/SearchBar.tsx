import * as React from "react";
import DatePicker from "./DatePicker";
import ResultPicker from "./ResultPicker";
import CountryPicker from "./CountryPicker";
import { TableContext } from "../App";
import useGetMostViewed from "../hooks/useGetMostViewed";
import searchBarStrings from "../strings/components/SearchBarStrings";
import "../styles/SearchBar.css";

/** Search component that displays all the search parameters and a search button.*/

const SearchBar: React.FC = () => {
    const {date, setArticles, country, setError} = React.useContext(TableContext);
    const [makeCall, setMakeCall] = React.useState(true);

    const {data, loading, error} = useGetMostViewed(date, country, makeCall, setMakeCall);
    
    // Update the displayed articles when new data is recieved
    React.useEffect(() => {
        if(data){
            setArticles(data)
        }
    },[data])

    // Update the error message if an error is recieved from the api call
    React.useEffect(() => {
        setError(error);
    }, [error])

    return (
        <div className="searchBar">
            <div className="searchParameters">
                <div className="datePickerComponent">
                    <DatePicker/>
                </div>
                <div className="vl"></div>
                <div className="resultPickerComponent">
                    <ResultPicker/>
                </div>
                <div className="vl"></div>
                <div className="countryPickerComponent">
                    <CountryPicker/>
                </div>
            </div>
            <button className="searchButton" onClick={() => setMakeCall(true)}>
                {searchBarStrings.search}
            </button>
        </div>
    );
}

export default SearchBar;