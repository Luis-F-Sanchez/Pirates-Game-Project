import React, { useState } from "react";

function Sector(props) {
  //count usestate var is used to change the img after a click
  let [count, setCount] = useState(0);
  //declare img var to be defined later
  let img;
  function setVals() {
    //increase count var by 1 to indecate that the img should be changed
    setCount((count += 1));

    //use passed on props to increase the Points counter in App
    if (props.num === 1) {
      //only increases if the treasure img is clicked
      props.setPts((props.pts += 1));
    }
    if (props.num === 2) {
      props.setHit((props.hit += 1));
    }
  }
  //if statements determine which img to show from the matrix
  if (props.num === 1) {
    //treasure
    img =
      "https://i.gifer.com/origin/ce/cef2ce655eb9740cb8d7c126cf0d5992_w200.gif";
  } else if (props.num === 2) {
    //kraken
    img = "https://media.tenor.com/0F9DpHoJyzEAAAAC/kraken-kraken-cartoon.gif";
  } else {
    //ocean
    img =
      "https://thumbs.gfycat.com/KeenUnsightlyFlyingfish-size_restricted.gif";
  }
  //if the count is 0, then set the img to a starting img
  if (count === 0) {
    img =
      "https://cdn.vox-cdn.com/thumbor/yti7UrAkQQuAjmusqpg_mboD8v8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23406204/GettyImages_1346022120.jpg";
  }
  //when the img is clicked, it calls the setVals function defined above
  return <img onClick={() => setVals()} src={img} />;
}

export default Sector;
