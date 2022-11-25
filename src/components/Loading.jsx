function Loading({ title }) {
  return (
    <div className="loading">
      <h2>{title}</h2>
      <img
        src="https://res.cloudinary.com/hapiii/image/upload/v1648557059/loading%20img/nopoaypkfxx3meexthwc.gif"
        alt="loading img"
      />
    </div>
  );
}

export default Loading;
