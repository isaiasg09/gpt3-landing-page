import React from "react";
import "./styles.css";

const Article = ({ imgUrl, date, title, linkUrl }) => {
  return (
    <div className='gpt3__article'>
      <img src={imgUrl} alt='image' />

      <div className='gpt3__article-content'>
        <div>
          <p>{date}</p>
          <h1 onClick={() => window.open(linkUrl)}>{title}</h1>
        </div>

        <a href={linkUrl} target='_blank'>
          Read the full article
        </a>
      </div>
    </div>
  );
};

export default Article;
