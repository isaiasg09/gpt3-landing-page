import React from "react";
import "./styles.css";

import { atlassian, dropbox, slack, shopify, google } from "./imports";

const Brands = () => {
  return (
    <div className='gpt3__brands'>
      <div>
        <img src={google} />
      </div>
      <div>
        <img src={slack} />
      </div>
      <div>
        <img src={atlassian} />
      </div>
      <div>
        <img src={dropbox} />
      </div>
      <div>
        <img src={shopify} />
      </div>
    </div>
  );
};

export default Brands;
