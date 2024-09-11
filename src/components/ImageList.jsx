import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => (
    <img src={image.urls.regular} key={image.urls.regular} />
  ));
  return <div>{images}</div>;
};

export default ImageList;
