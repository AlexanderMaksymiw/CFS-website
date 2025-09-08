import ReactPlayer from "react-player";

export default function Video({ url, controls = true }) {
  return (
    <div className="w-full h-full">
      <ReactPlayer url={url} controls={controls} width="60%" height="100%" />
    </div>
  );
}
