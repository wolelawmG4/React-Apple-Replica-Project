import { useState, useEffect } from "react";
import "./YoutubeVideos.css";

function YoutubeVideos() {
  const [youtubeVideos, setVideo] = useState([]);

  useEffect(() => {
    fetch(
      // "https://www.googleapis.com/youtube/v3/search?key=AIzaSyD6wufieqxGAFQ-Qr5erEcg4k8d0nWX6QQ&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(data.items);
      });
  }, []);

  return (
    <section className="Video-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-wrapper">
              <br />
              <h1>Latest Videos</h1> <br />
            </div>
          </div>

          {youtubeVideos?.map((singleVideo, i) => {
            const vidId = singleVideo.id.videoId;
            const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            const thumbnail = singleVideo.snippet.thumbnails.high.url;
            const title = singleVideo.snippet.title;
            const description = singleVideo.snippet.description;
            const publishedDate = new Date(
              singleVideo.snippet.publishedAt
            ).toLocaleDateString();

            return (
              <div className="col-sm-12 col-md-6 singleVideo" key={i}>
                <div className="videoThumbnail">
                  <a href={vidLink} target="_blank" rel="noopener noreferrer">
                    <img className="img" src={thumbnail} alt={title} />
                  </a>
                </div>
                <div className="videoInfoWrapper">
                  <div className="videoTitle">
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
                  </div>
                  <div className="videoDescription">{description}</div>
                  <div className="videoPublishedDate">
                    Published on: {publishedDate}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default YoutubeVideos;
