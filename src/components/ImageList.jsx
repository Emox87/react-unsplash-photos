const ImageList = (props) => {
  const images = props.images.map(({ id, urls, alt_description }) => (
    <div key={id}>
      <img src={urls.regular} alt={alt_description} />
    </div>
  ));
  return <div>{images}</div>;
};

export default ImageList;
