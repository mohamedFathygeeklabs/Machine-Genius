"use client";
import styles from './telegram.module.css'
import CustomSelectInput from "@/app/_components/CustomSelectInput/CustomSelectInput";
import { useRouter } from "next/navigation";
import {
  ArticleNames,
  Brands,
  RedditPosts,
} from "@/app/_data/data";
import $ from 'jquery'
import CustomBtn from '@/app/_components/Button/CustomBtn';
import { Modal } from '@mui/material';
import BasicModal from '@/app/_components/Modal/modal';
import { useState } from 'react';

const Telegram = () => {
    const router = useRouter();
    const handleNavigate = ()=>{
        router.push('/social-media/share')
    }

// to apply effect in selected article when click on it
    const handleSelectedBg = (e: any)=>{
        $('.articleRow').removeClass('selected')
        $(e.target).parents('.articleRow').toggleClass('selected')
    }

  const renderTelegramPosts = RedditPosts.map((onePost , idx) => (
    <ul
    key={idx}
      className = { `${styles.tableBody} borderBottom articleRow ` } 
      onClick={(e)=>{handleSelectedBg(e)}}
    >
      <li className="w-2/12">{onePost.subReddit}</li>
      <li className="w-3/12 "><a href={onePost.link}>{onePost.link}</a></li>
      <li className={`w-2/12 `}>
          {onePost.subscribers}
      </li>
      <li className="w-1/12 ">
          {onePost.niche}
      </li>
      <li className="w-2/12  "> <span
          className={
            onePost.brand === "PST USA"
              ? "bg-[#31B2E9B2]"
              : onePost.brand === "Canada"
              ? "bg-[#E9313EB2]"
              : onePost.brand === "PST Asia"
              ? "bg-[#E1C655B2]"
              : onePost.brand === "Investocracy"
              ? "bg-[#5FA85BB5]"
              : "bg-[#F36F24B2]"
          }
        >
          {onePost.brand}
        </span></li>
      <li className="w-2/12 ">{onePost.engagement}</li>

    </ul>
  ));
  const [subscriberOrder,setsubscriberOrder] = useState<boolean>(true);
  const [engagementOrder,setengagementOrder] = useState<boolean>(true);

  return (
      <div className={`${styles.postInReddit} w-full h-full pt-[0.5vw]`}>

        {/* filters options to filter and edit data in table */}
          <div className={`flex flex-col gap-[0.7vw] w-full pageHeader`}>
            <div className={` flex items-center gap-[1vw]`}>
            <svg viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{handleNavigate()}} className={`cursor-pointer ${styles.backArrow}`}>
            <path d="M11 20.8993L11 1.09878C10.9996 0.898304 10.9627 0.701801 10.8932 0.530416C10.8237 0.359031 10.7244 0.219253 10.6058 0.126133C10.4873 0.03301 10.354 -0.00993011 10.2203 0.0019317C10.0867 0.0137935 9.95773 0.080009 9.84734 0.19345L0.296979 10.0937C-0.0989937 10.504 -0.0989937 11.4919 0.296979 11.9033L9.84734 21.8036C9.9575 21.9182 10.0865 21.9854 10.2204 21.9979C10.3543 22.0104 10.4879 21.9677 10.6067 21.8745C10.7255 21.7813 10.825 21.6411 10.8943 21.4692C10.9637 21.2973 11.0002 21.1002 11 20.8993Z" fill="#2A2B2A"/>
            </svg>
            <h3>Telegram</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="url(#paint0_linear_926_2480)"/>
            <path d="M22.4859 8.79514C22.6194 7.93213 21.7989 7.25094 21.0316 7.58786L5.7483 14.298C5.19802 14.5396 5.23828 15.3732 5.80899 15.5549L8.96074 16.5586C9.56235 16.7502 10.2137 16.6511 10.739 16.2882L17.8449 11.3789C18.0592 11.2308 18.2928 11.5355 18.1097 11.7242L12.9947 16.9978C12.4985 17.5094 12.597 18.3763 13.1938 18.7505L18.9206 22.3418C19.563 22.7445 20.3892 22.3399 20.5093 21.5637L22.4859 8.79514Z" fill="white"/>
            <defs>
              <linearGradient id="paint0_linear_926_2480" x1="15" y1="0" x2="15" y2="30" gradientUnits="userSpaceOnUse">
                <stop stop-color="#37BBFE"/>
                <stop offset="1" stop-color="#007DBB"/>
              </linearGradient>
            </defs>
          </svg>
            </div>

        <div className="flex justify-between items-end">
        <div className={`${styles.redditPage} w-8/12 flex gap-[1vw]`}>
            <div className="flex flex-col w-1/3 gap-[0.3vw]">
              <h5>Sub Reddit</h5>
              <CustomSelectInput label="All" options={ArticleNames} paddingVal='py-[0.2vw] px-[0.5vw]' />
            </div>
            <div className="flex flex-col w-1/3 gap-[0.3vw]">
              <h5>Niche</h5>
              <CustomSelectInput label="All" options={Brands} paddingVal='py-[0.2vw] px-[0.5vw]'/>
            </div>
            <div className="flex flex-col w-1/3 gap-[0.3vw]">
              <h5>Brand</h5>
              <CustomSelectInput label="All" options={Brands} paddingVal='py-[0.2vw] px-[0.5vw]' />
            </div>
            
            <div className={`flex flex-col w-[25%] gap-[0.3vw] `}>
              <h5>Subscribers</h5>
              <div className={`${styles.changeOrder} `} onClick={()=>{setsubscriberOrder(!subscriberOrder)}}>
                <p>{subscriberOrder ? 'Ascend' :'Decend'}</p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.80002 10.2959C8.7281 10.1444 8.61483 10.0164 8.47327 9.92664C8.33171 9.83684 8.16764 9.78889 8 9.78834H5.33327V0.889318C5.33327 0.653584 5.23961 0.427504 5.07291 0.260815C4.90621 0.0941257 4.68011 0.000481606 4.44436 0.000481606C4.2086 0.000481606 3.9825 0.0941257 3.8158 0.260815C3.6491 0.427504 3.55544 0.653584 3.55544 0.889318V9.78834H0.888709C0.721067 9.78889 0.556998 9.83684 0.41544 9.92664C0.273883 10.0164 0.160607 10.1444 0.0886892 10.2959C0.0155567 10.4455 -0.0132581 10.613 0.00564103 10.7785C0.0245402 10.944 0.0903656 11.1007 0.195359 11.23L3.751 15.6795C3.83646 15.78 3.94272 15.8607 4.06244 15.916C4.18215 15.9713 4.31247 16 4.44436 16C4.57624 16 4.70656 15.9713 4.82627 15.916C4.94599 15.8607 5.05225 15.78 5.13771 15.6795L8.69335 11.23C8.79834 11.1007 8.86417 10.944 8.88307 10.7785C8.90197 10.613 8.87315 10.4455 8.80002 10.2959ZM15.9113 5.70414C15.8394 5.85556 15.7261 5.98356 15.5846 6.07336C15.443 6.16316 15.2789 6.21111 15.1113 6.21166H12.4446V15.1107C12.4446 15.3464 12.3509 15.5725 12.1842 15.7392C12.0175 15.9059 11.7914 15.9995 11.5556 15.9995C11.3199 15.9995 11.0938 15.9059 10.9271 15.7392C10.7604 15.5725 10.6667 15.3464 10.6667 15.1107V6.21166H8C7.83236 6.21111 7.66829 6.16316 7.52673 6.07336C7.38517 5.98356 7.2719 5.85556 7.19998 5.70414C7.12685 5.55446 7.09803 5.387 7.11693 5.22148C7.13583 5.05597 7.20166 4.89931 7.30665 4.76997L10.8623 0.320463C10.9477 0.22001 11.054 0.139324 11.1737 0.083992C11.2934 0.0286589 11.4238 0 11.5556 0C11.6875 0 11.8178 0.0286589 11.9376 0.083992C12.0573 0.139324 12.1635 0.22001 12.249 0.320463L15.8046 4.76997C15.9096 4.89931 15.9755 5.05597 15.9944 5.22148C16.0133 5.387 15.9844 5.55446 15.9113 5.70414Z"
                    fill="#2A2B2A"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col w-[25%] gap-[0.3vw]">
              <h5>Engagement</h5>
              <div className={`${styles.changeOrder} `} onClick={()=>{setengagementOrder(!engagementOrder)}}>
                <p>{engagementOrder ? 'Ascend' :'Decend'}</p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.80002 10.2959C8.7281 10.1444 8.61483 10.0164 8.47327 9.92664C8.33171 9.83684 8.16764 9.78889 8 9.78834H5.33327V0.889318C5.33327 0.653584 5.23961 0.427504 5.07291 0.260815C4.90621 0.0941257 4.68011 0.000481606 4.44436 0.000481606C4.2086 0.000481606 3.9825 0.0941257 3.8158 0.260815C3.6491 0.427504 3.55544 0.653584 3.55544 0.889318V9.78834H0.888709C0.721067 9.78889 0.556998 9.83684 0.41544 9.92664C0.273883 10.0164 0.160607 10.1444 0.0886892 10.2959C0.0155567 10.4455 -0.0132581 10.613 0.00564103 10.7785C0.0245402 10.944 0.0903656 11.1007 0.195359 11.23L3.751 15.6795C3.83646 15.78 3.94272 15.8607 4.06244 15.916C4.18215 15.9713 4.31247 16 4.44436 16C4.57624 16 4.70656 15.9713 4.82627 15.916C4.94599 15.8607 5.05225 15.78 5.13771 15.6795L8.69335 11.23C8.79834 11.1007 8.86417 10.944 8.88307 10.7785C8.90197 10.613 8.87315 10.4455 8.80002 10.2959ZM15.9113 5.70414C15.8394 5.85556 15.7261 5.98356 15.5846 6.07336C15.443 6.16316 15.2789 6.21111 15.1113 6.21166H12.4446V15.1107C12.4446 15.3464 12.3509 15.5725 12.1842 15.7392C12.0175 15.9059 11.7914 15.9995 11.5556 15.9995C11.3199 15.9995 11.0938 15.9059 10.9271 15.7392C10.7604 15.5725 10.6667 15.3464 10.6667 15.1107V6.21166H8C7.83236 6.21111 7.66829 6.16316 7.52673 6.07336C7.38517 5.98356 7.2719 5.85556 7.19998 5.70414C7.12685 5.55446 7.09803 5.387 7.11693 5.22148C7.13583 5.05597 7.20166 4.89931 7.30665 4.76997L10.8623 0.320463C10.9477 0.22001 11.054 0.139324 11.1737 0.083992C11.2934 0.0286589 11.4238 0 11.5556 0C11.6875 0 11.8178 0.0286589 11.9376 0.083992C12.0573 0.139324 12.1635 0.22001 12.249 0.320463L15.8046 4.76997C15.9096 4.89931 15.9755 5.05597 15.9944 5.22148C16.0133 5.387 15.9844 5.55446 15.9113 5.70414Z"
                    fill="#2A2B2A"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
  
          <BasicModal btnWord='Add To List' btnIcon={<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.58333 10.0833C4.58333 10.5896 4.99373 11 5.5 11C6.00628 11 6.41667 10.5896 6.41667 10.0833V6.41667H10.0833C10.5896 6.41667 11 6.00628 11 5.5C11 4.99373 10.5896 4.58333 10.0833 4.58333H6.41667V0.916667C6.41667 0.410401 6.00628 0 5.5 0C4.99373 0 4.58333 0.410401 4.58333 0.916667V4.58333H0.916667C0.41041 4.58333 0 4.99373 0 5.5C0 6.00628 0.41041 6.41667 0.916667 6.41667H4.58333V10.0833Z" fill="#FFFFFB"/>
</svg>} btnColor={'black'} modalTitle='Add To List' forWhat={'add_post'}/>
          </div>
        </div>
          
        </div>
     
        {/* // table has all reddit posts and its data  */}
        <div className="flex w-full">
        <div className={`${styles.box} w-full px-[0.5vw] `}>
           <div className={`${styles.tableContent}`}>
           <ul
              className={`${styles.tableHeader} flex justify-center items-center py-[2vh]`}
            >
              <li className="w-2/12 flex justify-center">
              <div className="flex items-center gap-[0.7vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.34884 0.0361328C3.84654 0.0361328 2.48805 0.411602 1.50201 1.3272C0.506623 2.2515 0 3.62409 0 5.38497V11.8966C0 13.6575 0.506623 15.0301 1.50201 15.9544C2.48805 16.87 3.84654 17.2454 5.34884 17.2454H14.6512C16.1535 17.2454 17.512 16.87 18.498 15.9544C19.4934 15.0301 20 13.6575 20 11.8966V5.38497C20 3.62409 19.4934 2.2515 18.498 1.3272C17.512 0.411602 16.1535 0.0361328 14.6512 0.0361328H5.34884ZM16.7242 5.25688C17.029 5.02129 17.0852 4.58313 16.8496 4.27823C16.614 3.97333 16.1759 3.91716 15.871 4.15276L10.7109 8.13995C10.2922 8.46358 9.70772 8.46358 9.28893 8.13995L4.12893 4.15276C3.82403 3.91716 3.38588 3.97333 3.15028 4.27823C2.91468 4.58313 2.97086 5.02129 3.27576 5.25688L8.43581 9.24413C9.35712 9.95595 10.6428 9.95595 11.5641 9.24413L16.7242 5.25688Z" fill="#2A2B2A"/>
              </svg>
                <p>SubReddit</p>
              </div>
              </li>
              <li className="w-3/12 flex justify-center"><div className="flex items-center gap-[0.7vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.962 11.5961C12.035 11.6561 11.047 11.6861 10 11.6861C8.953 11.6861 7.965 11.6561 7.038 11.5961C7.305 16.5501 8.922 20.3361 10 20.3361C11.078 20.3361 12.694 16.5511 12.962 11.5961ZM5.026 11.4081C5.178 14.9791 5.987 17.9411 7.086 19.8501C2.983 18.5901 0 14.7401 0 10.1861V10.0961C1.329 10.7171 3.003 11.1521 5.026 11.4081ZM0.242 7.96813C1.369 8.63013 2.961 9.10813 5.011 9.38813C5.114 5.62813 5.944 2.50613 7.085 0.522133C3.67 1.57213 1.03 4.41613 0.242 7.96813ZM7.007 9.59013C7.129 4.24313 8.864 0.0361328 10 0.0361328C11.136 0.0361328 12.871 4.24313 12.993 9.59013C12.068 9.65413 11.07 9.68613 10 9.68613C9.00153 9.68836 8.00328 9.65634 7.007 9.59013ZM14.974 11.4081C16.997 11.1521 18.671 10.7181 20 10.0971V10.1861C20 14.7401 17.016 18.5901 12.915 19.8501C14.013 17.9401 14.821 14.9791 14.974 11.4081ZM19.758 7.96813C18.631 8.63013 17.039 9.10813 14.989 9.38813C14.886 5.62813 14.056 2.50613 12.915 0.522133C16.33 1.57213 18.97 4.41613 19.758 7.96813Z" fill="#2A2B2A"/>
            </svg>
                <p>Link</p>
              </div></li>
              <li className="w-2/12 flex justify-center"><div className="flex items-center gap-[0.7vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.17773 4.57952C8.17773 2.07028 10.2119 0.0361328 12.7211 0.0361328C15.2303 0.0361328 17.2645 2.07028 17.2645 4.57952C17.2645 7.08874 15.2303 9.12291 12.7211 9.12291C10.2119 9.12291 8.17773 7.08874 8.17773 4.57952ZM12.7211 1.85349C11.2155 1.85349 9.99509 3.07398 9.99509 4.57952C9.99509 6.08506 11.2155 7.30555 12.7211 7.30555C14.2267 7.30555 15.4472 6.08506 15.4472 4.57952C15.4472 3.07398 14.2267 1.85349 12.7211 1.85349Z" fill="#2A2B2A"/>
              <path d="M7.00328 6.73588C7.35814 7.09071 7.35814 7.66609 7.00328 8.02093L3.68983 11.3344C3.15754 11.8666 2.29453 11.8666 1.76224 11.3344L0.266143 9.83828C-0.0887144 9.48344 -0.0887144 8.90807 0.266143 8.55323C0.621009 8.19839 1.19635 8.19839 1.55121 8.55323L2.72603 9.72806L5.71821 6.73588C6.07308 6.38101 6.64841 6.38101 7.00328 6.73588Z" fill="#2A2B2A"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7304 10.1133C10.9186 10.1133 9.18234 10.3443 7.86386 10.9298C6.51969 11.5266 5.46094 12.5796 5.46094 14.2023C5.46094 14.6264 5.53839 15.109 5.82688 15.5693C6.11534 16.0293 6.55849 16.3776 7.13091 16.6366C8.22959 17.1336 9.9897 17.3827 12.7304 17.3827C15.471 17.3827 17.2311 17.1336 18.3298 16.6366C18.9022 16.3776 19.3454 16.0293 19.6339 15.5693C19.9224 15.109 19.9998 14.6264 19.9998 14.2023C19.9998 12.5796 18.941 11.5266 17.5969 10.9298C16.2784 10.3443 14.5421 10.1133 12.7304 10.1133ZM7.27829 14.2023C7.27829 13.5534 7.64344 13.0161 8.60142 12.5907C9.58506 12.154 11.0291 11.9306 12.7304 11.9306C14.4316 11.9306 15.8757 12.154 16.8593 12.5907C17.8173 13.0161 18.1824 13.5534 18.1824 14.2023C18.1824 14.4055 18.1463 14.5205 18.094 14.604C18.0418 14.6874 17.917 14.8287 17.5807 14.9808C16.862 15.3059 15.4418 15.5653 12.7304 15.5653C10.019 15.5653 8.59869 15.3059 7.88001 14.9808C7.54375 14.8287 7.41898 14.6874 7.36669 14.604C7.31442 14.5205 7.27829 14.4055 7.27829 14.2023Z" fill="#2A2B2A"/>
              <rect x="10" y="1.85449" width="5.45455" height="5.45455" fill="#2A2B2A"/>
              <ellipse cx="12.7269" cy="14.1272" rx="6.36364" ry="2.27273" fill="#2A2B2A"/>
            </svg>
                <p>Subscribers</p>
              </div></li>
              <li className="w-1/12 flex justify-center"><div className="flex items-center gap-[0.7vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25" fill="none">
              <path d="M9.4475 5.29022C9.57794 5.29022 9.6432 5.21453 9.67581 5.09561C10.0128 3.29019 9.9911 3.24697 11.8828 2.89019C12.0132 2.8686 12.0893 2.79291 12.0893 2.66315C12.0893 2.53345 12.0132 2.45775 11.8828 2.43612C10.002 2.05779 10.0563 2.01453 9.67581 0.230739C9.6432 0.111826 9.57794 0.0361328 9.4475 0.0361328C9.31702 0.0361328 9.2518 0.111826 9.21919 0.230739C8.83869 2.01453 8.90391 2.05779 7.01224 2.43612C6.89266 2.45775 6.80569 2.53345 6.80569 2.66315C6.80569 2.79291 6.89266 2.8686 7.01224 2.89019C8.90391 3.2686 8.88215 3.29019 9.21919 5.09561C9.2518 5.21453 9.31702 5.29022 9.4475 5.29022ZM4.18563 12.7281C4.39218 12.7281 4.53352 12.5983 4.55523 12.4037C4.94663 9.51721 5.04446 9.51721 8.04507 8.94428C8.24077 8.91181 8.38206 8.7821 8.38206 8.5767C8.38206 8.3821 8.24077 8.24155 8.04507 8.20912C5.04446 7.79832 4.93573 7.701 4.55523 4.76046C4.53352 4.5659 4.39218 4.42535 4.18563 4.42535C3.98993 4.42535 3.84859 4.5659 3.82683 4.7713C3.46809 7.66857 3.31585 7.65778 0.33704 8.20912C0.141338 8.25239 0 8.3821 0 8.5767C0 8.7929 0.141338 8.91181 0.380503 8.94428C3.3376 9.41993 3.46809 9.49563 3.82683 12.3821C3.84859 12.5983 3.98993 12.7281 4.18563 12.7281ZM11.5566 24.6956C11.8393 24.6956 12.0459 24.4902 12.1002 24.1983C12.8721 18.274 13.7092 17.3767 19.6016 16.728C19.9061 16.6956 20.1126 16.4686 20.1126 16.1875C20.1126 15.9064 19.9061 15.6902 19.6016 15.647C13.7092 14.9983 12.8721 14.101 12.1002 8.1767C12.0459 7.88481 11.8393 7.69021 11.5566 7.69021C11.2739 7.69021 11.0674 7.88481 11.0239 8.1767C10.252 14.101 9.40404 14.9983 3.5224 15.647C3.20716 15.6902 3.00061 15.9064 3.00061 16.1875C3.00061 16.4686 3.20716 16.6956 3.5224 16.728C9.39314 17.4956 10.2085 18.2848 11.0239 24.1983C11.0674 24.4902 11.2739 24.6956 11.5566 24.6956Z" fill="#2A2B2A"/>
            </svg>
                <p>Niche</p>
              </div></li>
              <li className="w-2/12 flex justify-center"><div className="flex items-center gap-[0.7vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M9.09889 11.3217L10.6333 20.0361H1.11111C0.497778 20.0361 0 19.5384 0 18.925V12.9272L9.09889 11.3217ZM18.8889 0.0361328C19.5022 0.0361328 20 0.533911 20 1.14724V18.925C20 19.5384 19.5022 20.0361 18.8889 20.0361H12.8911L9.36445 0.0361328H18.8889ZM7.10778 0.0361328L8.71222 9.13391L0 10.6695V1.14724C0 0.533911 0.497778 0.0361328 1.11111 0.0361328H7.10778Z" fill="#2A2B2A"/>
              </svg>
                <p>Brand</p>
              </div></li>
              <li className="w-2/12 flex justify-center"><div className="flex items-center gap-[0.7vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path d="M3.125 5.89551H0.78125C0.349766 5.89551 0 6.24527 0 6.67676V16.4424C0 16.8739 0.349766 17.2236 0.78125 17.2236H3.125C3.55648 17.2236 3.90625 16.8739 3.90625 16.4424V6.67676C3.90625 6.24527 3.55648 5.89551 3.125 5.89551Z" fill="#2A2B2A"/>
            <path d="M13.1694 5.89551C12.5679 5.89551 12.1832 5.25445 12.4663 4.72363L13.8895 2.05516C14.3772 1.14062 13.7145 0.0361328 12.6781 0.0361328C12.3139 0.0361328 11.9648 0.180781 11.7073 0.438242L7.16527 4.98023C6.57926 5.56629 6.25 6.36113 6.25 7.18992V14.0986C6.25 15.8245 7.6491 17.2236 9.375 17.2236H15.8455C16.912 17.2236 17.8441 16.5035 18.1133 15.4715L19.9327 8.49711C19.9774 8.3259 20 8.14969 20 7.97277C20 6.82555 19.07 5.89551 17.9227 5.89551H13.1694Z" fill="#2A2B2A"/>
          </svg>
                <p>Engagement</p>
              </div></li>
             
            </ul>
            <div className={styles.tableBodyWrapper}>
          {renderTelegramPosts}
          </div>
           </div>
        </div>  
           <div className=' flex items-end pb-[6vw]  w-[5%] justify-center'>
           <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
        <circle cx="21.5" cy="21.5" r="21.5" fill="#2A2B2A"/>
        <path d="M21.825 9.77246C24.8479 9.77587 27.7459 10.9782 29.8834 13.1157C32.0208 15.2531 33.2232 18.1512 33.2266 21.174V30.7893C33.226 31.2628 33.0376 31.7169 32.7028 32.0517C32.3679 32.3866 31.9139 32.575 31.4403 32.5755H21.825C18.8012 32.5755 15.9012 31.3743 13.763 29.2361C11.6248 27.0979 10.4235 24.1978 10.4235 21.174C10.4235 18.1501 11.6248 15.2501 13.763 13.1119C15.9012 10.9737 18.8012 9.77246 21.825 9.77246ZM18.6328 24.3664H25.4738C25.7157 24.3664 25.9477 24.2703 26.1187 24.0992C26.2898 23.9282 26.3859 23.6962 26.3859 23.4543C26.3859 23.2124 26.2898 22.9804 26.1187 22.8093C25.9477 22.6383 25.7157 22.5422 25.4738 22.5422H18.6328C18.3909 22.5422 18.1589 22.6383 17.9879 22.8093C17.8168 22.9804 17.7207 23.2124 17.7207 23.4543C17.7207 23.6962 17.8168 23.9282 17.9879 24.0992C18.1589 24.2703 18.3909 24.3664 18.6328 24.3664ZM18.6328 20.7179H25.4738C25.7157 20.7179 25.9477 20.6218 26.1187 20.4508C26.2898 20.2797 26.3859 20.0477 26.3859 19.8058C26.3859 19.5639 26.2898 19.3319 26.1187 19.1608C25.9477 18.9898 25.7157 18.8937 25.4738 18.8937H18.6328C18.3909 18.8937 18.1589 18.9898 17.9879 19.1608C17.8168 19.3319 17.7207 19.5639 17.7207 19.8058C17.7207 20.0477 17.8168 20.2797 17.9879 20.4508C18.1589 20.6218 18.3909 20.7179 18.6328 20.7179Z" fill="#FFFFFB"/>
      </svg>
           </div>
        </div>
   
      </div>
  
  );
};

export default Telegram;
