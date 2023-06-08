const Map = () => {
  return (
    <div className="block w-full shrink-0 grow-0 basis-auto">
      <div className="w-full" style={{ height: '500px' }}>
        <iframe
          src="https://maps.google.com/maps?q=Tin Học Pama&t=&z=10&ie=UTF8&iwloc=&output=embed"
          className="left-0 top-0 h-full w-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
