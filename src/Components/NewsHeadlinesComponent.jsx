import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsHeadlinesComponent.css";

const NewsHeadlinesComponent = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHeadlines = async () => {
    const apiKey = "d92dc64482ad416fa44f8972657d0719";
    const country = "in"; // Country code should be in lower case
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&pageSize=5`;

    try {
      const response = await axios.get(url);
      setHeadlines(response.data.articles);
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
                  <p>{headline.source.name}</p>
                  <p>{new Date(headline.publishedAt).toLocaleString()}</p>
                  <a
                  href={headline.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                {headline.url}
                </a>
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
