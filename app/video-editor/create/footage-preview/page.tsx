"use client";
import CustomBtn from "@/app/_components/Button/CustomBtn";
import styles from "./footage.module.css";
import ArticlePreview from "@/app/_components/ArticlePreview/ArticlePreview";
import CustomCheckBox from "@/app/_components/CustomCheckBox/CustomCheckBox";
import { SimplePagination } from "@/app/_components/Pagination/pagination";
import { useEffect, useState } from "react";
import VideoPlayer from "@/app/_components/VideoPlayer/VideoPlayer";

const FootagePreview = () => {
  const [video, setVideo] = useState<string>("");

  const renderVideo = () => {
    return (
      <div>
        <VideoPlayer video={video} autoplay={true} videoUrl={video} />
      </div>
    );
  };
  useEffect(() => {
    renderVideo;
  }, [video]);

  return (
    <div
      className={`w-full h-full flex flex-col py-[4vh] ${styles.footagePreview}`}
    >
      <div className="flex gap-[2vw] h-[77vh] ">
        <div className="w-1/2">
          <ArticlePreview
            height="h-[75vh]"
            withEdit={false}
            yourNewArticle={false}
          />
        </div>

        <div className="w-1/2 flex flex-col gap-[1vw]">
          <div className="flex justify-between">
            <h3>Footage Found</h3>
            <SimplePagination />
          </div>
          <div className="flex gap-[0.6vw]">
            <div className={`${styles.box} h-[12vh] w-1/3 `}>
              <div className={`${styles.movedCheckbox}`}>
                <CustomCheckBox value="" type="radio" name="choose-footage"/>
              </div>
              <VideoPlayer
                video={video}
                setVideo={setVideo}
                autoplay={false}
                videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              />
            </div>
            <div className={`${styles.box} h-[12vh] w-1/3 `}>
              <div className={`${styles.movedCheckbox}`}>
                <CustomCheckBox value="" type="radio" name="choose-footage" />
              </div>
              <VideoPlayer
                video={video}
                setVideo={setVideo}
                autoplay={false}
                videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
              />
            </div>
            <div className={`${styles.box} h-[12vh] w-1/3 `}>
              <div className={`${styles.movedCheckbox}`}>
                <CustomCheckBox value="" type="radio" name="choose-footage" />
              </div>
              <VideoPlayer
                video={video}
                setVideo={setVideo}
                autoplay={false}
                videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              />
            </div>
          </div>
          <h3>Footage Preview</h3>
          <div className={styles.videoPreview}>{renderVideo()}</div>

          <div className="flex flex-col gap-[0.3vw]">
            <h5>PM is Racist?</h5>
            <div className="flex justify-between">
              <div className="flex flex-col gap-[0.3vw]">
                <div className="flex gap-[0.4vw]">
                  <h5>Source:</h5>
                  <p>Justin Trudeau is Racist | Youtube Clip</p>
                </div>
                <div className={`flex gap-[0.4vw] ${styles.urlStyle}`}>
                  <h5>URL:</h5>
                  <a href="https://www.youtube.com/watch?v=jfKfPfyJRdk">
                    https://www.youtube.com/watch?v=jfKfPfyJRdk
                  </a>
                </div>
              </div>
              <CustomBtn word="Add Footage" btnColor={"black"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <CustomBtn word="Back" btnColor={"white"}  href='/video-editor/create/video-templates' />
        <CustomBtn word="Next" btnColor={"black"}  href='/video-editor/create/video-preview'/>
      </div>
    </div>
  );
};

export default FootagePreview;
