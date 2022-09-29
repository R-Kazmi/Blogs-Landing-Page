import React from "react";
import { overviewDiv, overviewDiv2, overviewDiv3, overviewH1, overviewP } from "../styles";

// overview component conatains the persons overview
function Overview() {
  return (
    <div className={overviewDiv}>
      <div className={overviewDiv2}>
        <div></div>
        <div className={overviewDiv3}>
          <h1 className={overviewH1}>
            Overview
          </h1>
          <p className={overviewP}>
            A professional wordsmith skilled in SEO writing with a knack for
            digital marketing. He writes to enlighten customers and knows how to
            tickle readers’ imaginations while connecting stories with sales.
            <br />
            <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
