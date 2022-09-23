import axios from "axios";
import { useEffect, useState } from "react";
import "./Newsfeed.css";

import NavInshort from "./NavInshort";
import NewsContent from "./NewsContent/NewsContent";

function Newsfeed() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(2);
  const [category, setCategory] = useState("general");

 const key="9ce5b9d9a42a4d1ab4f927d18b3514d7";

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";

      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}&pageSize=${loadMore}&category=${category}`
      );
      // console.log(news);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, loadMore, category]);

  // console.log(newsArray);
  return (
    <div className="App" id="#home">
    
      <NavInshort setCategory="general" />
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
     
    </div>
  );
}

export default Newsfeed;