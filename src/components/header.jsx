import React, { useEffect, useRef, useState } from "react";

export const Header = (props) => {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener("loadeddata", () => {
        console.log("Video loaded successfully");
        setIsLoading(false);
      });

      video.addEventListener("error", (e) => {
        console.error("Error loading video:", e);
        setIsLoading(false);
      });
    }

    return () => {
      if (video) {
        video.removeEventListener("loadeddata", () => {});
        video.removeEventListener("error", () => {});
      }
    };
  }, []);

  return (
    <header id="header">
      <div
        className="intro"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {isLoading && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              zIndex: 3,
            }}
          >
            Loading...
          </div>
        )}
        <div
          className="video-container"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={() => {
              console.log("Video can play");
              setIsLoading(false);
            }}
            onError={(e) => {
              console.error("Video error:", e);
              setIsLoading(false);
            }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="/vid/mill-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div
            className="intro-text"
            style={{
              position: "relative",
              zIndex: 2,
              color: "white",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <h1>{props.data ? props.data.title : "Loading"}</h1>
            <p>{props.data ? props.data.paragraph : "Loading"}</p>
            <a href="#features" className="btn btn-custom btn-lg page-scroll">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
