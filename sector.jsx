function Sector(props) {
  let img;
  if (props.num === 1) {
    img =
      "https://friendlystock.com/wp-content/uploads/2022/11/5-cartoon-treasure-chest-with-gold-coins-vector-clipart.jpg";
  } else if (props.num === 2) {
    img =
      "https://static.vecteezy.com/system/resources/previews/009/354/734/original/bomb-clipart-design-illustraiton-free-png.png";
  } else {
    img =
      "https://t3.ftcdn.net/jpg/02/08/62/40/360_F_208624030_LoxBAlme8aO6L9rxYm4jUcujQKwNfIHq.jpg";
  }
  return <img src={img} width="6%" />;
}
