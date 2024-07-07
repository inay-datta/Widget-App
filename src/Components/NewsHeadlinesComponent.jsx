import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsHeadlinesComponent.css";

const NewsHeadlinesComponent = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHeadlines = async () => {
    const apiKey = "lKPiFHNE9T5OK7ujkr3OdMmkF6BwUrQ3kQMxkJh9";
    const country = "in"; // Country code should be in lower case
    const url = `https://api.thenewsapi.com/v1/news/top?api_token=${apiKey}&locale=${country}&limit=10`;

    try {
      const response = await axios.get(url);
      setHeadlines(response.data.data);
    } catch (error) {
      console.error("Error fetching headlines:", error);
      alert("Error fetching headlines. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeadlines();
  }, []);

  return (
    <div className="news-widget">
      <h2>Top Headlines</h2>
      {loading ? (
        <p>Loading headlines...</p>
      ) : (
        <ul>
          {headlines.length > 0 ? (
            headlines.map((headline, index) => (
              <li key={index}>
                
                  <h3>{headline.title}</h3>
                  <p>{headline.source}</p>
                  <p>{new Date(headline.published_at).toLocaleString()}</p>
                <div className="openLink">
                  <a
                  href={headline.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Read more
                <img className="linkIcon" src="../assets/link-open-icon.png" width="20px" height="20px" margin="5px"></img>
                </a>
                </div>
              </li>
            ))
          ) : (
            <p>No headlines available.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default NewsHeadlinesComponent;
