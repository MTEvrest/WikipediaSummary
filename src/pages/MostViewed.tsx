import * as React from "react";
import ReactPaginate from "react-paginate";
import Icon from "@cloudscape-design/components/icon"; 
import SearchBar from "../components/SearchBar";
import ResultCard from "../components/ResultCard";
import { ArticleType, TableContext } from "../App";
import mostViewedStrings from "../strings/pages/MostViewedStrings";
import "../styles/MostViewed.css"; 


const MostViewed: React.FC = () => {

  const {articles, itemNumber, error} = React.useContext(TableContext);

  const itemsPerPage = 10;
  const toDisplay = React.useMemo(() => {
    return articles.slice(0,200).map((item: ArticleType, index: number) => <ResultCard rank={(index+1).toString()} name={item.article} views={item.views_ceil.toLocaleString()}/>);
  }, [articles]);

  const [itemOffset, setItemOffset] = React.useState(0);
  const [currentItems, setCurrentItems] = React.useState<JSX.Element[]>([]);

  const pageCount = Math.ceil(Math.min(itemNumber, toDisplay.length)/ 10);

  // Logic for handling what pages to show in the pagination component and how to handle clicks
  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(toDisplay.slice(itemOffset, Math.min(endOffset, itemNumber)));
  }, [itemOffset, toDisplay]);

  React.useEffect(() => {
    if(itemOffset > itemNumber){
      const newOffset = ((pageCount-1) * itemsPerPage) % itemNumber;
      setItemOffset(newOffset);
    }
  }, [itemNumber])

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % itemNumber;
    setItemOffset(newOffset);
  };

    return (
      <div className="mostViewed">
        <h1 tabIndex={0}>{mostViewedStrings.title}</h1>
        <SearchBar/>
        {
          error
          ?
            <div className="errorText" tabIndex={0}>
              <p>{error}</p>
            </div>
          :
            null
        }
        <div className="cardTable">
            {currentItems}
        </div>
        <div>
          <ReactPaginate
              className="react-paginate"
              breakLabel="..."
              nextLabel={<Icon name="angle-right"/>}
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel={<Icon name="angle-left"/>}
              renderOnZeroPageCount={null}
          />
        </div>
      </div>
    );
}

export default MostViewed;