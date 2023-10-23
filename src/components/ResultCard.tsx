import * as React from "react";
import resultCardStrings from "../strings/components/ResultCardStrings";
import "../styles/ResultCard.css";

type CardProps = {
    rank: string;
    name: string;
    views: string;
}

/** Card component that displays all an article title, its rank, and its number of views.*/

const ResultCard: React.FC<CardProps> = ({rank, name, views}) => {
    const articleName = name.replaceAll("_"," ");
    return (
        <div className="resultCard" tabIndex={0} aria-label={`${resultCardStrings.rank} ${rank}, ${articleName}, ${views} ${resultCardStrings.views}`}>
            <div className="rankText">
                {rank}
            </div>
            <div className="nameText">
                {articleName}
            </div>
            <div className="viewsText">
                {`${views} ${resultCardStrings.views}`}
            </div>
        </div>
    );
}

export default ResultCard;