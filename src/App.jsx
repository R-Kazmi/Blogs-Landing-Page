import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Post from "./components/Post";

//image imports
import Rectangle203 from "./assets/Rectangle203.png";
import Rectangle2031 from "./assets/Rectangle2031.png";
import Rectangle2032 from "./assets/Rectangle2032.png";
import Rectangle2033 from "./assets/Rectangle2033.png";
import Rectangle2034 from "./assets/Rectangle2034.png";
import Rectangle2035 from "./assets/Rectangle2035.png";

//style imports
import { section2, section2H1, section2Div } from "./styles";

//data stored to pass to post component
const data = [
  {
    img: Rectangle203,
    title: "Everything You Need to Know About Online Coupons",
  },
  {
    img: Rectangle2031,
    title: "What Are Promotional Codes And How Do They Work?",
  },
  {
    img: Rectangle2032,
    title: "10 pieces of pet furniture you should buy right now.",
  },
  {
    img: Rectangle2033,
    title: "Why NOW is the Time To Find Patio Furniture.",
  },
  {
    img: Rectangle2034,
    title: "Free Extended Warranty on Automatic Litterbox",
  },
  {
    img: Rectangle2035,
    title: "The Best Early Amazon Prime Day Deals for 2022",
  },
];

function App() {
  return (
  //main div with two sections
    <main className="w-screen">

      {/* section with intro and overview */}
      <section className="w-full">
        <Header />
        <Overview />
      </section>

      {/* blog section */}
      <section className={section2}>
        <h1 className={section2H1}>
          Jessica’s Blog
        </h1>

        {/* post div, data is passed using map */}
        <div className={section2Div}>
          {data.map((item) => {
            return <Post img={item.img} title={item.title} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
