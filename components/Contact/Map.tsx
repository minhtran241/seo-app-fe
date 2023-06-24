const Map = () => {
  return (
    <div className="block w-full shrink-0 grow-0 basis-auto">
      <div className="w-full" style={{ height: '500px' }}>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=TRUYỀN+THÔNG+VÀ+TIN+HỌC+PAMA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          className="left-0 top-0 h-full w-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
