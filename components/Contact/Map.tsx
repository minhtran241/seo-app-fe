const Map = () => {
  return (
    <div className="block w-full shrink-0 grow-0 basis-auto">
      <div className="w-full" style={{ height: '500px' }}>
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=T%C3%B2a%20nh%C3%A0%20Anh%20Minh,%20T%C3%B2a%20nh%C3%A0%20Geleximco,%20P.%20Ho%C3%A0ng%20C%E1%BA%A7u,%20Ch%E1%BB%A3%20D%E1%BB%ABa,%20%C4%90%E1%BB%91ng%20%C4%90a,%20H%C3%A0%20N%E1%BB%99i+(C%C3%B4ng%20Ty%20TNHH%20Truy%E1%BB%81n%20Th%C3%B4ng%20&amp;%20Tin%20H%E1%BB%8Dc%20Pama)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="left-0 top-0 h-full w-full"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
