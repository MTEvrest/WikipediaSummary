import { useEffect, useState } from "react";
import { ArticleType } from "../App";

type ReturnedArticleType = ArticleType & {project: string};

/** Custom hook for calling the wikimedi endpoint. Takes the following parameters
 * date: date for endpoint
 * country: country for endpoint
 * makeCall: boolean for whether or not to make another api call
 * setMakeCall: toggle makeCall, primarily after making an api call to set back to false
 * 
 * returns
 * data: list of articles returned by the api
 * loading: boolean if the call is still loading
 * error: error string if any are provided
*/

const useGetMostViewed = (date:Date, country:string, makeCall:boolean, setMakeCall:(call: boolean) => void): {data: ArticleType[], loading: boolean, error: string} => {
    const [data, setdata] = useState<ArticleType[]>([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState("");
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + (date.getDate())).slice(-2)
    const url = `https://wikimedia.org/api/rest_v1/metrics/pageviews/top-per-country/${country}/all-access/${date.getFullYear()}/${month}/${day}`;

    useEffect(() => {
        if (makeCall) {
            setloading(true);
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                seterror(data.error);
                //Filter out all other project other than the english wikipedia
                setdata(data.items[0].articles.filter((article: ReturnedArticleType) => article.project === "en.wikipedia"))
                setloading(false)
            }).catch((error) => {
                seterror(error.toString());
            })
            setMakeCall(false);
        }  
      }, [makeCall]);
     
      return { data, loading, error };
}

export default useGetMostViewed;