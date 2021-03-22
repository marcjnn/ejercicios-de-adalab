const CityImage = (props) => {
  const destinyPhoto = {
    Praga:
      "https://cdn.pixabay.com/photo/2020/09/13/13/00/charles-bridge-5568178_1280.jpg",
    Boston:
      "https://cdn.pixabay.com/photo/2018/09/20/13/22/boston-3690818_1280.jpg",
    Sydney:
      "https://cdn.pixabay.com/photo/2014/06/06/09/36/building-363244_1280.jpg",
    BuenosAires:
      "https://cdn.pixabay.com/photo/2017/06/21/20/47/puerto-madero-2428501_1280.jpg",
    Tokyo:
      "https://cdn.pixabay.com/photo/2015/09/04/23/04/shibuya-crossing-923000_1280.jpg",
  };

  const src = props.city.replace(" ", "");

  return (
    <>
      <h2>{props.city}</h2>
      <img src={destinyPhoto[src]} alt="" />
    </>
  );
};

export default CityImage;
