import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import { postA, postDateDiv, postDateP, postDiv, postH1, postShoppingP } from "../styles";

// recieving data from calling component to render
function Post({ img, title }) {
  return (
    <div className={postDiv}>
      <img src={img} alt="" />
      <div className={postDateDiv}>
        <p className={postShoppingP}>Shopping</p>
        <p className={postDateP}>April 29, 2022</p>
      </div>
      <h1 className={postH1}>
        {title}
      </h1>
      <a
        className={postA}
        href="#"
      >
        Read More
        <span className="pl-[10px]">
          <TbArrowNarrowRight size={25} />
        </span>
      </a>
    </div>
  );
}

export default Post;
