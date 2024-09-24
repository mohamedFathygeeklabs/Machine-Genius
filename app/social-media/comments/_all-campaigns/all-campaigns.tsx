'use client'
import { AccountsData } from '@/app/_data/data';
import styles from './all-campaigns.module.css'
import { useState } from 'react';
import BasicModal from '@/app/_components/Modal/modal';


const AllCampaigns = ()=>{
    const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <path d="M20.2344 9.99538C20.2344 7.34444 19.1813 4.80208 17.3068 2.92758C15.4323 1.05309 12.8899 4.26716e-06 10.239 4.26716e-06C7.72208 -0.00232006 5.29694 0.944983 3.44799 2.65269C1.59905 4.36039 0.462414 6.70278 0.265142 9.21196C0.0678707 11.7211 0.824482 14.2124 2.38384 16.188C3.9432 18.1637 6.19051 19.4783 8.67687 19.8694V12.884H6.1409V9.99538H8.67829V7.79354C8.67829 5.28899 10.1705 3.90391 12.4537 3.90391C13.5475 3.90391 14.6912 4.09954 14.6912 4.09954V6.55983H13.4304C12.1881 6.55983 11.8026 7.3309 11.8026 8.12053V9.99538H14.5741L14.1315 12.884H11.8011V19.8694C14.1522 19.4971 16.2933 18.2981 17.8392 16.488C19.3851 14.678 20.2344 12.3757 20.2344 9.99538Z" fill="#1877F2" />
    <path d="M14.1298 12.8839L14.5724 9.99524H11.8009V8.12039C11.8009 7.33076 12.1864 6.55969 13.4287 6.55969H14.6895V4.09797C14.6895 4.09797 13.5458 3.90234 12.452 3.90234C10.1673 3.90234 8.67659 5.28742 8.67659 7.79197V9.99524H6.14062V12.8839H8.67802V19.8692C9.71308 20.0321 10.7672 20.0321 11.8023 19.8692V12.8839H14.1298Z" fill="white" />
  </svg> ;
  const telegramIcon = <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.2344 20C15.7572 20 20.2344 15.5228 20.2344 10C20.2344 4.47715 15.7572 0 10.2344 0C4.71153 0 0.234375 4.47715 0.234375 10C0.234375 15.5228 4.71153 20 10.2344 20Z" fill="url(#paint0_linear_957_5205)"/>
  <path d="M15.2237 5.86343C15.3127 5.28809 14.7657 4.83396 14.2541 5.05857L4.06527 9.532C3.69842 9.69307 3.72526 10.2488 4.10574 10.3699L6.2069 11.0391C6.60797 11.1668 7.04219 11.1007 7.3924 10.8588L12.1297 7.58593C12.2725 7.48721 12.4283 7.69036 12.3062 7.81614L8.89619 11.3319C8.5654 11.6729 8.63104 12.2509 9.02897 12.5004L12.8468 14.8945C13.275 15.163 13.8259 14.8933 13.906 14.3758L15.2237 5.86343Z" fill="white"/>
  <defs>
    <linearGradient id="paint0_linear_957_5205" x1="10.2344" y1="0" x2="10.2344" y2="20" gradientUnits="userSpaceOnUse">
      <stop stopColor="#37BBFE"/>
      <stop offset="1" stopColor="#007DBB"/>
    </linearGradient>
  </defs>
</svg>;
  const redditIcon = <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <path d="M10.2344 0C4.71875 0 0.234375 4.48437 0.234375 10C0.234375 15.5156 4.71875 20 10.2344 20C15.75 20 20.2344 15.5156 20.2344 10C20.2344 4.48437 15.75 0 10.2344 0Z" fill="#FC471E" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1042 4.93522C13.0951 4.9926 13.0904 5.05147 13.0904 5.11147C13.0904 5.71722 13.5701 6.20829 14.1618 6.20829C14.7535 6.20829 15.2333 5.71722 15.2333 5.11147C15.2333 4.50571 14.7535 4.01465 14.1618 4.01465C13.8982 4.01465 13.6568 4.11215 13.47 4.27385L10.6877 3.57129L9.68204 7.68922C8.34426 7.77936 7.14112 8.19408 6.23347 8.82022C5.97576 8.5615 5.62272 8.40193 5.23326 8.40193C4.44428 8.40193 3.80469 9.05672 3.80469 9.86436C3.80469 10.4265 4.11444 10.9145 4.56874 11.1593C4.53592 11.3337 4.51897 11.5117 4.51897 11.6924C4.51897 13.9136 7.07733 15.7141 10.2333 15.7141C13.3892 15.7141 15.9475 13.9136 15.9475 11.6924C15.9475 11.5117 15.9306 11.3337 15.8978 11.1593C16.352 10.9145 16.6618 10.4265 16.6618 9.86436C16.6618 9.05672 16.0223 8.40193 15.2333 8.40193C14.8438 8.40193 14.4908 8.5615 14.233 8.82022C13.2442 8.13807 11.9046 7.70679 10.4223 7.67293L11.2074 4.45802L13.1042 4.93522ZM7.73326 12.0581C8.32497 12.0581 8.80469 11.567 8.80469 10.9612C8.80469 10.3554 8.32497 9.86436 7.73326 9.86436C7.14154 9.86436 6.66183 10.3554 6.66183 10.9612C6.66183 11.567 7.14154 12.0581 7.73326 12.0581ZM12.7333 12.0581C13.325 12.0581 13.8047 11.567 13.8047 10.9612C13.8047 10.3554 13.325 9.86436 12.7333 9.86436C12.1415 9.86436 11.6618 10.3554 11.6618 10.9612C11.6618 11.567 12.1415 12.0581 12.7333 12.0581ZM7.93133 13.2163C7.76726 13.1043 7.54554 13.1496 7.43612 13.3176C7.32669 13.4857 7.37104 13.7127 7.53512 13.8247C8.31233 14.3551 9.27283 14.6203 10.2333 14.6203C11.1937 14.6203 12.1542 14.3551 12.9313 13.8247C13.0955 13.7127 13.1398 13.4857 13.0304 13.3176C12.921 13.1496 12.6993 13.1043 12.5351 13.2163C11.8779 13.6648 11.0556 13.8891 10.2333 13.8891C9.74562 13.8891 9.2579 13.8102 8.80469 13.6525C8.49369 13.5442 8.19883 13.3988 7.93133 13.2163Z" fill="white" />
  </svg> ;
  const finishedIcon = <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
  <path d="M5 0.5C3.67392 0.5 2.40215 1.02678 1.46447 1.96447C0.526784 2.90215 0 4.17392 0 5.5C0 6.82608 0.526784 8.09785 1.46447 9.03553C2.40215 9.97322 3.67392 10.5 5 10.5C6.32608 10.5 7.59785 9.97322 8.53553 9.03553C9.47322 8.09785 10 6.82608 10 5.5C10 4.17392 9.47322 2.90215 8.53553 1.96447C7.59785 1.02678 6.32608 0.5 5 0.5ZM7.11377 2.88021C7.36798 2.56239 7.84144 2.53459 8.1311 2.82048C8.38128 3.0674 8.40426 3.4635 8.18433 3.7377L4.62621 8.17381C4.24596 8.6479 3.53422 8.67599 3.11779 8.23335L1.1845 6.17838C0.923006 5.90043 0.93108 5.4646 1.20269 5.19652C1.47641 4.92636 1.91644 4.92636 2.19017 5.19652L3.11622 6.11054C3.53858 6.5274 4.22893 6.48687 4.59961 6.02345L7.11377 2.88021Z" fill="#2A2B2A"/>
</svg> ;
const pausedIcon = <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.5C10 6.82608 9.47322 8.09785 8.53553 9.03553C7.59785 9.97322 6.32608 10.5 5 10.5C3.67392 10.5 2.40215 9.97322 1.46447 9.03553C0.526784 8.09785 0 6.82608 0 5.5C0 4.17392 0.526784 2.90215 1.46447 1.96447C2.40215 1.02678 3.67392 0.5 5 0.5C6.32608 0.5 7.59785 1.02678 8.53553 1.96447C9.47322 2.90215 10 4.17392 10 5.5ZM2.5 3.41667C2.5 3.30616 2.5439 3.20018 2.62204 3.12204C2.70018 3.0439 2.80616 3 2.91667 3H3.75C3.86051 3 3.96649 3.0439 4.04463 3.12204C4.12277 3.20018 4.16667 3.30616 4.16667 3.41667V7.58333C4.16667 7.69384 4.12277 7.79982 4.04463 7.87796C3.96649 7.9561 3.86051 8 3.75 8H2.91667C2.80616 8 2.70018 7.9561 2.62204 7.87796C2.5439 7.79982 2.5 7.69384 2.5 7.58333V3.41667ZM6.25 3C6.13949 3 6.03351 3.0439 5.95537 3.12204C5.87723 3.20018 5.83333 3.30616 5.83333 3.41667V7.58333C5.83333 7.69384 5.87723 7.79982 5.95537 7.87796C6.03351 7.9561 6.13949 8 6.25 8H7.08333C7.19384 8 7.29982 7.9561 7.37796 7.87796C7.4561 7.79982 7.5 7.69384 7.5 7.58333V3.41667C7.5 3.30616 7.4561 3.20018 7.37796 3.12204C7.29982 3.0439 7.19384 3 7.08333 3H6.25Z" fill="#FFFFFB"/>
</svg> ;
const runningIcon = <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
<path d="M5 0.5C2.23 0.5 0 2.73 0 5.5C0 8.27 2.23 10.5 5 10.5C7.77 10.5 10 8.27 10 5.5C10 2.73 7.77 0.5 5 0.5ZM4.98923 1.20421C5.08479 1.20277 5.17966 1.22052 5.26823 1.2564C5.3568 1.29229 5.43728 1.34558 5.50488 1.41312C5.57249 1.48066 5.62586 1.56108 5.66183 1.64962C5.6978 1.73816 5.71563 1.83302 5.71429 1.92857V4.78571H7.14286C7.23751 4.78438 7.33148 4.80186 7.41932 4.83716C7.50715 4.87245 7.58709 4.92485 7.6545 4.99131C7.72191 5.05777 7.77543 5.13697 7.81197 5.2243C7.8485 5.31162 7.86732 5.40534 7.86732 5.5C7.86732 5.59466 7.8485 5.68838 7.81197 5.7757C7.77543 5.86303 7.72191 5.94223 7.6545 6.00869C7.58709 6.07515 7.50715 6.12755 7.41932 6.16284C7.33148 6.19814 7.23751 6.21562 7.14286 6.21429H5C4.81057 6.21427 4.6289 6.13901 4.49494 6.00506C4.36099 5.87111 4.28573 5.68943 4.28571 5.5V1.92857C4.28304 1.73925 4.35564 1.55661 4.48756 1.42079C4.61947 1.28497 4.79991 1.20707 4.98923 1.20421Z" fill="#2A2B2A"/>
</svg> ;


//   return data about account , number of comments and campaign type
  const renderAccounts = AccountsData.map((oneAccount, idx) => (
    <ul
      key={idx}
      className={`${styles.tableBody} borderBottom articleRow`}
    >
      <li className="w-[20%] flex justify-center text-center gap-[1vw]">
        <p>{oneAccount.account_name}</p>
        {oneAccount.account_type === 'facebook' ? facebookIcon : oneAccount.account_type === 'reddit' ? redditIcon : telegramIcon}
      </li>
      <li className={`w-[20%] `}>
        {oneAccount.user_name}
      </li>
      <li className='w-[20%] flex justify-center items-center'>
      <span className={`flex gap-[0.5vw] items-center w-fit ${oneAccount.status === 'Finished' ? 'bg-[#5FA85BB5]' : oneAccount.status === 'Running' ? 'bg-[#E9313EB2]': 'bg-[#E1C655B2]'}`}>
      {oneAccount.status === 'Finished' ? finishedIcon : oneAccount.status === 'Paused' ? pausedIcon : runningIcon}
          <p>{oneAccount.status}</p>
        </span>
      </li>
      <li className='w-[20%]'>{oneAccount.comments +" " + 'comments'}</li>
      
      <li className="w-[20%] flex justify-center">
        <span className={`flex gap-[0.5vw] items-center w-fit ${oneAccount.Campaign_type === 'Auto Comment' ? 'bg-[#5FA85BB5]' : 'bg-[#E1C655B2]'}`}>
          <p>{oneAccount.Campaign_type}</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
            <path className='svgPath' d="M17.0995 -1.0324e-06L0.898999 -2.44869e-06C0.734977 0.00034086 0.574202 0.0305532 0.433978 0.0873808C0.293753 0.144208 0.179391 0.225499 0.1032 0.322504C0.0270088 0.41951 -0.00812266 0.528557 0.00158192 0.637905C0.0112865 0.747255 0.0654628 0.852764 0.158278 0.94308L8.25851 8.75702C8.59422 9.08099 9.40244 9.08099 9.73905 8.75702L17.8393 0.943082C17.933 0.852955 17.988 0.747392 17.9983 0.63786C18.0085 0.52833 17.9736 0.419021 17.8973 0.32181C17.8211 0.224599 17.7064 0.143203 17.5657 0.0864677C17.425 0.0297327 17.2638 -0.000173633 17.0995 -1.0324e-06Z" fill='#2A2B2A' />
          </svg>
        </span>
      </li>
    </ul>
  ));

// for storing the order of subscribers and engagement (descending or ascending)
  const [subscriberOrder, setsubscriberOrder] = useState<boolean>(true);
  const [engagementOrder, setengagementOrder] = useState<boolean>(true);

  return(
    <div className={`${styles.postInReddit} w-full h-full pt-[0.5vw]`}>

      {/* filters options to filter and edit data in table */}
      <div className={`flex flex-col gap-[0.7vw] w-full pageHeader`}>
        <div className="flex justify-between">
          <div className={`${styles.redditPage} w-8/12 flex gap-[1vw]`}>
            <div className="flex flex-col w-1/3 gap-[0.3vw]">
              <h5>Account Name</h5>
              <div className={`${styles.changeOrder} `} >
                <p>Account Name</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M9.3793 11.8304H7.80262V0.332387C7.80265 0.14886 7.65379 0 7.47026 0H2.33924C2.15571 0 2.00688 0.14886 2.00688 0.332387V11.8304H0.430167C-0.0286343 11.8304 -0.137701 12.0934 0.186816 12.418L4.31725 16.5484C4.64177 16.8729 5.1677 16.8729 5.49224 16.5484L9.62265 12.418C9.9472 12.0934 9.83831 11.8304 9.3793 11.8304Z" fill="black" />
                  <path d="M14.1666 7.304C14.1389 7.23488 14.0718 7.18945 13.9973 7.18945H13.0255C12.9504 7.18945 12.8829 7.2356 12.8555 7.30564L11.0828 11.8571C11.0609 11.9133 11.0682 11.9766 11.1021 12.0262C11.136 12.076 11.1924 12.1058 11.2526 12.1058H12.2275C12.3043 12.1058 12.3727 12.0578 12.3989 11.9856L12.731 11.0718H14.2971L14.6495 11.9887C14.6765 12.0591 14.7444 12.1056 14.8197 12.1056H15.8194C15.8799 12.1056 15.9365 12.0755 15.9704 12.0253C16.0044 11.9752 16.0113 11.9115 15.9886 11.8553L14.1666 7.304ZM13.8653 9.9402H13.1464L13.5023 8.96239L13.8653 9.9402Z" fill="black" />
                  <path d="M11.5039 4.28387V5.1128C11.5039 5.21349 11.5856 5.29522 11.6863 5.29522H15.3841C15.4848 5.29522 15.5665 5.21349 15.5665 5.1128V4.34588C15.5665 4.24518 15.4848 4.16345 15.3841 4.16345H13.1778L15.4295 1.39022C15.4559 1.35776 15.4703 1.31708 15.4703 1.27532V0.56133C15.4703 0.460639 15.3886 0.378906 15.2879 0.378906H11.9565C11.8558 0.378906 11.7741 0.460639 11.7741 0.56133V1.33135C11.7741 1.43204 11.8558 1.51378 11.9565 1.51378H13.6947L11.5446 4.16914C11.5184 4.20161 11.5039 4.24211 11.5039 4.28387Z" fill="black" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col w-1/3 gap-[0.3vw]">
              <h5>Username</h5>
              <div className={`${styles.changeOrder} `} >
                <p>Username</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <path d="M9.3793 11.8304H7.80262V0.332387C7.80265 0.14886 7.65379 0 7.47026 0H2.33924C2.15571 0 2.00688 0.14886 2.00688 0.332387V11.8304H0.430167C-0.0286343 11.8304 -0.137701 12.0934 0.186816 12.418L4.31725 16.5484C4.64177 16.8729 5.1677 16.8729 5.49224 16.5484L9.62265 12.418C9.9472 12.0934 9.83831 11.8304 9.3793 11.8304Z" fill="black" />
                  <path d="M14.1666 7.304C14.1389 7.23488 14.0718 7.18945 13.9973 7.18945H13.0255C12.9504 7.18945 12.8829 7.2356 12.8555 7.30564L11.0828 11.8571C11.0609 11.9133 11.0682 11.9766 11.1021 12.0262C11.136 12.076 11.1924 12.1058 11.2526 12.1058H12.2275C12.3043 12.1058 12.3727 12.0578 12.3989 11.9856L12.731 11.0718H14.2971L14.6495 11.9887C14.6765 12.0591 14.7444 12.1056 14.8197 12.1056H15.8194C15.8799 12.1056 15.9365 12.0755 15.9704 12.0253C16.0044 11.9752 16.0113 11.9115 15.9886 11.8553L14.1666 7.304ZM13.8653 9.9402H13.1464L13.5023 8.96239L13.8653 9.9402Z" fill="black" />
                  <path d="M11.5039 4.28387V5.1128C11.5039 5.21349 11.5856 5.29522 11.6863 5.29522H15.3841C15.4848 5.29522 15.5665 5.21349 15.5665 5.1128V4.34588C15.5665 4.24518 15.4848 4.16345 15.3841 4.16345H13.1778L15.4295 1.39022C15.4559 1.35776 15.4703 1.31708 15.4703 1.27532V0.56133C15.4703 0.460639 15.3886 0.378906 15.2879 0.378906H11.9565C11.8558 0.378906 11.7741 0.460639 11.7741 0.56133V1.33135C11.7741 1.43204 11.8558 1.51378 11.9565 1.51378H13.6947L11.5446 4.16914C11.5184 4.20161 11.5039 4.24211 11.5039 4.28387Z" fill="black" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col w-[25%] gap-[0.3vw]">
              <h5>Followers</h5>
              <div className={`${styles.changeOrder} `} onClick={() => { setengagementOrder(!engagementOrder) }}>
                <p>{engagementOrder ? 'Ascend' : 'Descend'}</p>
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

            <div className={`flex flex-col w-[25%] gap-[0.3vw] `}>
              <h5>Engagement</h5>
              <div className={`${styles.changeOrder} `} onClick={() => { setsubscriberOrder(!subscriberOrder) }}>
                <p>{subscriberOrder ? 'Ascend' : 'Descend'}</p>
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

          <div className='flex gap-[0.5vw] items-end'>
            <BasicModal btnWord={'Add Account'} btnIcon={<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.58333 10.0833C4.58333 10.5896 4.99373 11 5.5 11C6.00628 11 6.41667 10.5896 6.41667 10.0833V6.41667H10.0833C10.5896 6.41667 11 6.00628 11 5.5C11 4.99373 10.5896 4.58333 10.0833 4.58333H6.41667V0.916667C6.41667 0.410401 6.00628 0 5.5 0C4.99373 0 4.58333 0.410401 4.58333 0.916667V4.58333H0.916667C0.41041 4.58333 0 4.99373 0 5.5C0 6.00628 0.41041 6.41667 0.916667 6.41667H4.58333V10.0833Z" fill="#FFFFFB" />
            </svg>} btnColor={'black'} modalTitle={'Add Account'} forWhat={'add_account'} />

            <BasicModal btnWord={'Remove Accounts'} btnColor={'white'} modalTitle={'Remove Accounts?'} forWhat={'remove_account'} />
          </div>

        </div>
      </div>

      {/* // table has all comments  */}
      <div className="flex w-full">
        <div className={`${styles.box} w-full px-[0.5vw] `}>
          <div className={`${styles.tableContent}`}>
            <ul
              className={`${styles.tableHeader} flex justify-center items-center py-[2vh]`}
            >

              <li className="w-[20%] flex justify-center">
                <div className="flex items-center gap-[0.7vw]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M10.032 0C11.3623 0 12.6382 0.526784 13.5788 1.46447C14.5195 2.40215 15.048 3.67392 15.048 5C15.048 6.32608 14.5195 7.59785 13.5788 8.53553C12.6382 9.47322 11.3623 10 10.032 10C8.70167 10 7.42584 9.47322 6.48515 8.53553C5.54447 7.59785 5.016 6.32608 5.016 5C5.016 3.67392 5.54447 2.40215 6.48515 1.46447C7.42584 0.526784 8.70167 0 10.032 0ZM10.032 12.5C15.5747 12.5 20.064 14.7375 20.064 17.5V20H0V17.5C0 14.7375 4.48932 12.5 10.032 12.5Z" fill="black" />
                  </svg>
                  <p>Account Name</p>
                </div>
              </li>

              <li className="w-[20%] flex justify-center"><div className="flex items-center gap-[0.7vw]">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <path d="M20.064 9.99695V10.1431C20.0312 11.5143 19.5209 13.0739 17.3631 13.0739C15.131 13.0739 14.6622 11.4008 14.6622 9.99695V6.1508C14.6624 6.04535 14.6409 5.94097 14.5989 5.84416C14.557 5.74735 14.4955 5.66017 14.4184 5.58803C14.3412 5.51589 14.25 5.46034 14.1504 5.42482C14.0508 5.3893 13.9449 5.37458 13.8393 5.38157C13.6406 5.39858 13.4557 5.49011 13.3219 5.63769C13.1882 5.78527 13.1156 5.97791 13.1188 6.17676V6.56138C12.4221 5.939 11.5527 5.54157 10.625 5.42144C9.69728 5.30131 8.75484 5.46412 7.92179 5.88841C7.08874 6.31271 6.40416 6.97859 5.95824 7.79834C5.51231 8.61809 5.32595 9.55327 5.42371 10.4807C5.52147 11.4081 5.89876 12.2842 6.50588 12.9937C7.113 13.7031 7.92147 14.2126 8.8248 14.4551C9.72813 14.6975 10.6839 14.6615 11.5663 14.3518C12.4487 14.042 13.2163 13.4732 13.768 12.72C13.8644 12.8882 13.9734 13.0489 14.094 13.2008C14.612 13.8431 15.5988 14.6123 17.3631 14.6123C17.661 14.6133 17.9586 14.5892 18.2525 14.5402C18.3251 14.5281 18.3997 14.5371 18.4675 14.5659C18.5352 14.5947 18.5932 14.6423 18.6347 14.703C18.6762 14.7636 18.6994 14.8349 18.7016 14.9083C18.7038 14.9817 18.6848 15.0541 18.647 15.1171C17.74 16.6336 16.4466 17.8839 14.8982 18.7409C13.3497 19.598 11.6012 20.0313 9.8304 19.997C4.54623 19.8912 0.212215 15.6566 0.00771685 10.3921C-0.0445894 9.06357 0.169421 7.73794 0.637228 6.4928C1.10504 5.24766 1.81725 4.10802 2.7322 3.14054C3.64714 2.17305 4.74646 1.39716 5.96583 0.858251C7.1852 0.31934 8.50015 0.0282305 9.83374 0.00195328C11.1673 -0.024324 12.4928 0.214759 13.7326 0.705214C14.9723 1.19567 16.1016 1.92765 17.0542 2.85833C18.0067 3.78902 18.7636 4.89972 19.2804 6.12546C19.7972 7.35119 20.0636 8.66736 20.064 9.99695ZM6.94523 9.99695C6.94523 10.6055 7.12627 11.2004 7.46545 11.7064C7.80462 12.2124 8.28671 12.6068 8.85074 12.8397C9.41478 13.0725 10.0354 13.1335 10.6342 13.0148C11.233 12.896 11.783 12.603 12.2147 12.1727C12.6464 11.7423 12.9404 11.1941 13.0595 10.5972C13.1786 10.0004 13.1174 9.3817 12.8838 8.81946C12.6502 8.25723 12.2545 7.77668 11.7469 7.43858C11.2393 7.10049 10.6425 6.92003 10.032 6.92003C9.21334 6.92003 8.42821 7.2442 7.84932 7.82124C7.27044 8.39827 6.94523 9.1809 6.94523 9.99695Z" fill="black" />
                </svg>
                <p>Username</p>
              </div></li>

              <li className="w-[20%] flex justify-center"><div className="flex items-center gap-[0.7vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM10 2.85714C10.4736 2.85714 10.9278 3.04528 11.2627 3.38017C11.5976 3.71505 11.7857 4.16926 11.7857 4.64286C11.7857 5.11646 11.5976 5.57066 11.2627 5.90555C10.9278 6.24043 10.4736 6.42857 10 6.42857C9.5264 6.42857 9.0722 6.24043 8.73731 5.90555C8.40242 5.57066 8.21429 5.11646 8.21429 4.64286C8.21429 4.16926 8.40242 3.71505 8.73731 3.38017C9.0722 3.04528 9.5264 2.85714 10 2.85714ZM8.57143 10C8.57143 9.21102 9.21102 8.57143 10 8.57143C10.789 8.57143 11.4286 9.21102 11.4286 10V15.7143C11.4286 16.5033 10.789 17.1429 10 17.1429C9.21102 17.1429 8.57143 16.5033 8.57143 15.7143V10Z" fill="black"/>
                </svg>
                <p>Status</p>
              </div></li>

              <li className="w-[20%] flex justify-center"><div className="flex items-center gap-[0.7vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M3.5 11V3C3.5 1.34315 2.15685 0 0.5 0C0.22386 0 0 0.22386 0 0.5V13.5C0 13.7761 0.22386 14 0.5 14C2.15685 14 3.5 12.6569 3.5 11Z" fill="#2A2B2A"/>
                <path d="M10.5 0C12.3856 0 13.3284 2.28882e-07 13.9142 0.58579C14.5 1.17157 14.5 2.11438 14.5 4V10C14.5 11.8856 14.5 12.8284 13.9142 13.4142C13.3284 14 12.3856 14 10.5 14H9.5C7.61438 14 6.67157 14 6.08579 13.4142C5.5 12.8284 5.5 11.8856 5.5 10V4C5.5 2.11438 5.5 1.17157 6.08579 0.58579C6.67157 2.28882e-07 7.61438 0 9.5 0H10.5Z" fill="#2A2B2A"/>
                <path d="M16.5 3V11C16.5 12.6569 17.8431 14 19.5 14C19.7761 14 20 13.7761 20 13.5V0.5C20 0.22386 19.7761 0 19.5 0C17.8431 0 16.5 1.34315 16.5 3Z" fill="#2A2B2A"/>
                </svg>
                <p>Comments</p>
              </div>
              </li>
              <li className="w-[20%] flex justify-center"><div className="flex items-center gap-[0.7vw]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 12.5H13.125V3.75H11.25V12.5ZM18.75 0L14.375 2.91687V13.3331L18.75 16.25C19.44 16.25 20 15.69 20 15V1.25C20 0.56 19.44 0 18.75 0ZM0 8.125C0 10.4581 1.60062 11.9675 3.76187 12.3812L3.75 12.5V17.5C3.75 18.19 4.31 18.75 5 18.75H6.875C7.565 18.75 8.125 18.19 8.125 17.5V12.5H10V3.75H5C2.23875 3.75 0 5.36375 0 8.125Z" fill="#2A2B2A" />
                </svg>
                <p>Campaign Type</p>
              </div>
              </li>

            </ul>
            <div className={styles.tableBodyWrapper}>
              {renderAccounts}
            </div>


          </div>
        </div>
        
      </div>
    </div>
  )
}

export default AllCampaigns