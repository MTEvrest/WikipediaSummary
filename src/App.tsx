import React from 'react';
import MostViewed from './pages/MostViewed';
import './App.css';


export type ArticleType = {
  article: string;
  rank: number;
  views_ceil: number;
}

export type ContextType = {
  itemNumber: number,
  setItemNumber: (num: number) => void,
  date: Date,
  setDate: (date: Date) => void,
  articles: ArticleType[],
  setArticles: (articles: ArticleType[]) => void,
  country: string,
  setCountry: (country: string) => void,
  error: string,
  setError: (error: string) => void
}

// React context to pass down important information for rendering deeper child components
export const TableContext = React.createContext<ContextType>({
  itemNumber: 50,
  setItemNumber: (num: number) => {},
  date: new Date(),
  setDate: (date: Date) => {},
  articles: [],
  setArticles: (articles: ArticleType[]) => {},
  country: 'US',
  setCountry: (country: string) => {},
  error: "",
  setError: (error: string) => {},
});

function App() {
  const [itemNumber, setItemNumber] = React.useState(50);
  const yesterdayDate = new Date();
  //Set the default date to yesterday, as there isn't complete data for today
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const [date, setDate] = React.useState(yesterdayDate);
  const [articles, setArticles] = React.useState<ArticleType[]>([]);
  const [country, setCountry] = React.useState("US");
  const [error, setError] = React.useState("");
  const contextValue = {itemNumber, setItemNumber, date, setDate, articles, setArticles, country, setCountry, error, setError};

  return (
    <TableContext.Provider value={contextValue}>
      <div className="App">
        <div className="search">
          <MostViewed/>
        </div>
      </div>
    </TableContext.Provider>  
  );
}

export default App;
