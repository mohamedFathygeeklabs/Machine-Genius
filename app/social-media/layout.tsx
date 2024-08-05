'use client'

// Importing necessary libraries and components
import React, { useState } from 'react';
import styles from './socialMedia.module.css';
import TitleOfPage from '../_components/TitleOfPage/TitleOfPage';
import dynamic from 'next/dynamic';
const SideNav = dynamic(() => import('../_components/SideNav/SideNav'), { ssr: false })

// import { usePathname } from 'next/navigation';

// Functional component for layout
const layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {

  // get path from usePathname hook from next/navigation
  // const path = usePathname();

  // State variables to manage side nav and current page
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const [CurrentPage, setCurrentPage] = useState<string>('Social Media');
  // path.split('/')[2].charAt(0).toUpperCase() + path.split('/')[2].slice(1)

  // Array of side navigation links with their corresponding icons
  const sideNavLinks = [
    // Each object contains the name, path, and icon for a navigation link
    // Dashboard link
    {
      name: "Dashboard",
      path: "/social-media/dashboard",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
        <path d="M12.9605 19.9992C14.2251 19.9992 15.3102 19.9328 16.2168 19.7313C17.135 19.5273 17.9309 19.1716 18.5517 18.5507C19.1725 17.9299 19.5282 17.134 19.7323 16.2158C19.9338 15.3092 20.0002 14.2241 20.0002 12.9595V9.90791C20.0002 8.79323 19.0966 7.88965 17.982 7.88965H9.90889C8.7942 7.88965 7.89062 8.79323 7.89062 9.90791V17.981C7.89062 19.0957 8.7942 19.9992 9.90889 19.9992H12.9605Z" fill="#FFFFFB" />
        <path d="M0 12.9595C0 14.2241 0.0664414 15.3092 0.267945 16.2158C0.471992 17.134 0.827701 17.9299 1.44854 18.5507C2.06938 19.1715 2.86526 19.5273 3.78339 19.7313C3.87132 19.7508 3.95969 19.7692 4.04842 19.7863C5.14283 19.9977 6.0548 19.0714 6.0548 17.9568V9.90791C6.0548 8.79323 5.15119 7.88965 4.03653 7.88965H2.01827C0.903608 7.88965 0 8.79323 0 9.90791V12.9595Z" fill="#FFFFFB" />
        <path d="M7.0416 0C5.77703 0 4.69196 0.0664414 3.78528 0.267945C2.86715 0.471992 2.07127 0.827701 1.45043 1.44854C0.829592 2.06938 0.473883 2.86526 0.269836 3.78339C0.253085 3.85878 0.237322 3.93442 0.222518 4.01027C0.00618036 5.119 0.949396 6.0548 2.07902 6.0548H18.1421C19.2568 6.0548 20.1831 5.14283 19.9716 4.04842C19.9545 3.95969 19.9361 3.87132 19.9167 3.78339C19.7125 2.86526 19.3569 2.06938 18.736 1.44854C18.1151 0.827701 17.3192 0.471992 16.4011 0.267945C15.4944 0.0664414 14.4094 0 13.1449 0H7.0416Z" fill="#FFFFFB" />
      </svg>
    },
    // Post link
    {
      name: "Post",
      path: "/social-media/post",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="none">
        <path d="M19.6336 5.3651L14.6336 0.365116C14.1455 -0.123007 13.3542 -0.123007 12.8661 0.365116C12.378 0.853239 12.378 1.64449 12.8661 2.13261L17.8661 7.13259C18.1101 7.37665 18.4301 7.49884 18.7498 7.49884C19.0695 7.49884 19.3895 7.37665 19.6336 7.13259C20.122 6.64447 20.122 5.85322 19.6336 5.3651Z" fill="#2A2B2A" />
        <path d="M10.8837 3.46879C10.6493 3.23441 10.3318 3.10254 9.99996 3.10254H3.74999C3.13843 3.10254 2.61718 3.54441 2.51718 4.14754L0 18.7275L6.34279 12.4922C6.28904 12.2872 6.24998 12.0747 6.24998 11.8525C6.24998 10.4744 7.37185 9.35252 8.74997 9.35252C10.1281 9.35252 11.25 10.4744 11.25 11.8525C11.25 13.2306 10.1281 14.3525 8.74997 14.3525C8.52778 14.3525 8.31653 14.3134 8.11028 14.2597L1.87499 20.6025L16.4549 18.0853C17.0581 17.9853 17.4999 17.4641 17.4999 16.8525V10.6025C17.4999 10.2706 17.3681 9.95314 17.1337 9.71877L10.8837 3.46879Z" fill="#2A2B2A" />
      </svg>
    },
    // Share link
    {
      name: "Share",
      path: "/social-media/share",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4167 14.6667C15.7942 14.6667 14.3779 15.5146 13.563 16.786L8.65426 13.981C8.97143 13.3577 9.16667 12.6628 9.16667 11.9167C9.16667 11.4556 9.07776 11.0192 8.95126 10.5994L14.058 7.68167C14.8949 8.58917 16.0848 9.16667 17.4167 9.16667C19.9485 9.16667 22 7.11517 22 4.58333C22 2.0515 19.9485 0 17.4167 0C14.8848 0 12.8333 2.0515 12.8333 4.58333C12.8333 5.04442 12.9222 5.48074 13.0487 5.90149L7.942 8.81833C7.10508 7.91175 5.91525 7.33333 4.58333 7.33333C2.0515 7.33333 0 9.38483 0 11.9167C0 14.4485 2.0515 16.5 4.58333 16.5C5.62833 16.5 6.58074 16.137 7.35166 15.5485L12.8837 18.755C12.8654 18.92 12.8333 19.0795 12.8333 19.25C12.8333 21.7818 14.8848 23.8333 17.4167 23.8333C19.9485 23.8333 22 21.7818 22 19.25C22 16.7182 19.9485 14.6667 17.4167 14.6667Z" fill="#FFFFFB" />
      </svg>
    },
    // Comments link
    {
      name: "Comments",
      path: "/social-media/comments",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 23" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6129 7.09677C5.20123 7.09677 5.67742 7.57368 5.67742 8.16129C5.67742 8.74961 5.20123 9.22581 4.6129 9.22581C4.02458 9.22581 3.54839 8.74961 3.54839 8.16129C3.54839 7.57368 4.02458 7.09677 4.6129 7.09677ZM8.87097 7.09677C9.45929 7.09677 9.93548 7.57368 9.93548 8.16129C9.93548 8.74961 9.45929 9.22581 8.87097 9.22581C8.28265 9.22581 7.80645 8.74961 7.80645 8.16129C7.80645 7.57368 8.28265 7.09677 8.87097 7.09677ZM13.129 7.09677C13.7174 7.09677 14.1935 7.57368 14.1935 8.16129C14.1935 8.74961 13.7174 9.22581 13.129 9.22581C12.5407 9.22581 12.0645 8.74961 12.0645 8.16129C12.0645 7.57368 12.5407 7.09677 13.129 7.09677ZM6.83916 16.1352C7.39058 16.2253 8.64458 16.3226 9.22581 16.3226C14.3213 16.3226 17.7419 12.5308 17.7419 8.07258C17.7419 3.61439 13.4675 0 9.22581 0C4.12394 0 0 3.61439 0 8.07258C0 10.6558 0.984323 12.848 2.83871 14.427V18.4516L6.83916 16.1352ZM19.1251 6.48575L19.1613 7.09677C19.167 7.67658 19.1613 7.62335 19.1613 8.16129C19.1613 13.821 14.7017 17.7419 8.51613 17.7419H6.3871C8.07613 19.3941 10.0412 20.4032 12.7742 20.4032C13.3554 20.4032 13.9224 20.3507 14.4739 20.2606L18.4516 22.7097V18.6851C20.609 17.2068 22 14.9139 22 12.3306C22 10.0285 20.8922 7.9562 19.1251 6.48575Z" fill="#FFFFFB" />
      </svg>
    },
    // Campaigns link
    {
      name: "Campaigns",
      path: "/social-media/campaigns",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.375 13.75H14.4375V4.125H12.375V13.75ZM20.625 0L15.8125 3.20856V14.6664L20.625 17.875C21.384 17.875 22 17.259 22 16.5V1.375C22 0.616 21.384 0 20.625 0ZM0 8.9375C0 11.5039 1.76069 13.1642 4.13806 13.6194L4.125 13.75V19.25C4.125 20.009 4.741 20.625 5.5 20.625H7.5625C8.3215 20.625 8.9375 20.009 8.9375 19.25V13.75H11V4.125H5.5C2.46262 4.125 0 5.90013 0 8.9375Z" fill="#FFFFFB" />
    </svg>
    },
    // Database link
    {
      name: "Database",
      path: "/social-media/database",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19" fill="none">
      <path d="M0 0.770508H20V3.02051H0V0.770508ZM1.36364 3.92051V18.7705H18.6364V3.92051H1.36364ZM13.1818 7.97051H6.36364V6.62051H13.1818V7.97051Z" fill="#FFFFFB" />
    </svg>
    },
    // Settings link
    {
      name: "Settings",
      path: "/social-media/settings",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <path d="M1.57871 12.5135L0.526217 13.0925C0.284488 13.2251 0.108103 13.4435 0.035862 13.6997C-0.0363788 13.9559 0.0014421 14.2288 0.141005 14.4585L1.70711 17.0365C1.84669 17.2662 2.07657 17.4338 2.34619 17.5024C2.61581 17.571 2.90308 17.5351 3.14482 17.4025L4.20994 16.8205C4.52773 16.6463 4.88817 16.5546 5.25507 16.5546C5.62196 16.5546 5.9824 16.6463 6.30019 16.8205L6.32124 16.8315C6.64078 17.0055 6.90636 17.2565 7.09115 17.5592C7.27595 17.8619 7.37342 18.2056 7.37373 18.5555V19.7705C7.37373 20.0357 7.48462 20.2901 7.682 20.4776C7.87938 20.6652 8.14709 20.7705 8.42622 20.7705H11.5837C11.8628 20.7705 12.1305 20.6652 12.3279 20.4776C12.5253 20.2901 12.6362 20.0357 12.6362 19.7705V18.5525C12.6361 18.2035 12.7329 17.8606 12.9167 17.5585C13.1006 17.2563 13.365 17.0056 13.6834 16.8315L13.7055 16.8195C14.0233 16.6453 14.3838 16.5536 14.7507 16.5536C15.1175 16.5536 15.478 16.6453 15.7958 16.8195L16.8567 17.4015C17.0984 17.5341 17.3857 17.57 17.6553 17.5014C17.9249 17.4328 18.1548 17.2652 18.2944 17.0355L19.8605 14.4575C19.9293 14.3436 19.9737 14.2179 19.9914 14.0877C20.009 13.9574 19.9995 13.8251 19.9633 13.6984C19.9272 13.5716 19.8651 13.4529 19.7806 13.3489C19.6962 13.245 19.591 13.1578 19.4711 13.0925L18.4186 12.5135C18.098 12.3384 17.8318 12.0858 17.647 11.7815C17.4622 11.4772 17.3653 11.1319 17.3661 10.7805V10.7595C17.3651 10.4083 17.462 10.063 17.6468 9.75884C17.8317 9.45465 18.0979 9.20234 18.4186 9.02751L19.4711 8.44851C19.7128 8.3159 19.8892 8.09748 19.9614 7.84131C20.0337 7.58513 19.9959 7.31219 19.8563 7.08251L18.2881 4.50451C18.1485 4.27484 17.9186 4.10725 17.649 4.03861C17.3794 3.96997 17.0921 4.00591 16.8504 4.13851L15.7874 4.72051C15.4696 4.89472 15.1091 4.98643 14.7422 4.98643C14.3753 4.98643 14.0149 4.89472 13.6971 4.72051L13.6824 4.71051C13.3628 4.53651 13.0973 4.28549 12.9125 3.9828C12.7277 3.6801 12.6302 3.33644 12.6299 2.98651V1.77051C12.6299 1.50529 12.519 1.25094 12.3216 1.0634C12.1242 0.875865 11.8565 0.770508 11.5774 0.770508H8.41991C8.14077 0.770508 7.87307 0.875865 7.67569 1.0634C7.4783 1.25094 7.36742 1.50529 7.36742 1.77051V3.06451C7.36696 3.39027 7.27626 3.71018 7.10444 3.99209C6.93263 4.274 6.68574 4.50798 6.3886 4.67051L6.22757 4.75851C5.93102 4.92095 5.59474 5.00645 5.25243 5.00645C4.91013 5.00645 4.57385 4.92095 4.2773 4.75851L3.14692 4.13851C2.90519 4.00591 2.61791 3.96997 2.34829 4.03861C2.07867 4.10725 1.84879 4.27484 1.70922 4.50451L0.14311 7.08251C0.00337158 7.31194 -0.03477 7.58471 0.037068 7.84085C0.108906 8.097 0.284845 8.31556 0.526217 8.44851L1.57871 9.02751C1.89929 9.20266 2.16546 9.45518 2.35029 9.7595C2.53511 10.0638 2.63202 10.4092 2.6312 10.7605V10.7815C2.63216 11.1328 2.5353 11.478 2.35045 11.7822C2.1656 12.0864 1.89935 12.3387 1.57871 12.5135ZM9.99865 7.77051C10.6231 7.77051 11.2336 7.94646 11.7528 8.2761C12.2721 8.60574 12.6768 9.07428 12.9158 9.62246C13.1548 10.1706 13.2173 10.7738 13.0955 11.3558C12.9736 11.9377 12.6729 12.4723 12.2313 12.8918C11.7897 13.3114 11.2271 13.5971 10.6146 13.7129C10.0022 13.8286 9.36729 13.7692 8.79033 13.5421C8.21338 13.3151 7.72025 12.9306 7.3733 12.4372C7.02635 11.9439 6.84117 11.3639 6.84117 10.7705C6.84117 9.97486 7.17383 9.2118 7.76597 8.64919C8.35812 8.08658 9.16123 7.77051 9.99865 7.77051Z" fill="#2A2B2A" />
    </svg>
    }
  ];

  // Return the layout structure
  return (
    <>
      {/* Side navigation component */}
      <div className={`${styles.Side_Nav_Wrapper} ${isSideNavOpen ? '' : styles.close}`}>
        <SideNav isSideNavOpen={isSideNavOpen} setIsSideNavOpen={setIsSideNavOpen} setCurrentPage={setCurrentPage} sideNavLinks={sideNavLinks} />
      </div>
      {/* Main page content */}
      <div className={styles.Page_Wrapper}>
        <TitleOfPage title={CurrentPage} />
        <div className='h-full'>
          {/* Render children components */}
          {children}
        </div>
      </div>
    </>
  );
}

// Export the layout component
export default layout;