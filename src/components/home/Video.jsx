const Video = () => {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        loop
        muted
        src="/background_play.mp4"
        className="w-full h-full object-cover"
      ></video>
    </div>
  );
};

export default Video;
