import CustomBtn from "@/app/_components/Button/CustomBtn"
import VideoPlayer from "@/app/_components/VideoPlayer/VideoPlayer"
import styles from './video-ready.module.css'
const VideoReady = ()=>{
    return(
        <div className={`w-full h-full py-[1vw] pageHeader `}>
        <h3 className='pb-[0.8vw]'>What’s Next?</h3>
          <div className='flex pb-[0.9vw h-[72vh] '>
              <div className={`w-2/3 flex flex-col gap-[1vw] ${styles.videoPreview}`}>
                  <h5 className='w-4/5'>Make sure to watch the video carefully before uploading, if there are any errors in your video, you can quick edit them from the options below </h5>
                  <div className={`${styles.borderRight} flex flex-col gap-[1vw]`}>
                  <h4>Video Preview:</h4> 
                  <div className={`${styles.videoHolder} flex justify-center items-center `}>
                  <VideoPlayer autoplay={false} videoUrl='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' />
                  </div>
                  </div>
                  </div>

                  <div className={`${styles.access} w-1/3 ps-[2vw] flex flex-col gap-[1vw]`}>
                      <div className={`${styles.box}`}>
                          <h5>Upload</h5>
                          <p>Make sure to watch the video carefully before uploading, if there are any errors in your video, you can quick edit them from the options below </p>
                          <CustomBtn width='w-full' word='Upload' btnColor='black'/>

                      </div>
                      <div className={`${styles.box}`}>
                          <h5>Schedule</h5>
                          <p>Make sure to watch the video carefully before uploading, if there are any errors in your video, you can quick edit them from the options below </p>
                          <CustomBtn width='w-full' word='Schedule' btnColor='black'/>

                      </div>
                      <div className={`${styles.box}`}>
                          <h5>Request Appoval</h5>
                          <p>Make sure to watch the video carefully before uploading, if there are any errors in your video, you can quick edit them from the options below </p>
                          <CustomBtn width='w-full' word='Request Appoval' btnColor='black'/>

                      </div>
                  </div>
                
      </div>
      <div className='flex justify-between'>
              <CustomBtn word='Back' btnColor='white'/>
              <CustomBtn word='Next' btnColor='black'/>

                  </div>

  </div>
    )
}

export default VideoReady