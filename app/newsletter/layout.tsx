"use client";

// Import React and useState from React library
import React, { useState } from "react";

// Import components
import dynamic from "next/dynamic";
const SideNav = dynamic(() => import("../_components/SideNav/SideNav"), {
  ssr: false,
});
import TitleOfPage from "../_components/TitleOfPage/TitleOfPage";
// import { usePathname } from 'next/navigation';

// import { usePathname } from 'next/navigation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array of side nav links
const sideNavLinks = [
  {
    name: "Dashboard",
    path: "/newsletter/dashboard",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
        <path d="M12.9595 19.9992C14.2241 19.9992 15.3092 19.9328 16.2158 19.7313C17.134 19.5273 17.9299 19.1716 18.5507 18.5507C19.1716 17.9299 19.5273 17.134 19.7313 16.2158C19.9328 15.3092 19.9992 14.2241 19.9992 12.9595V9.90791C19.9992 8.79323 19.0957 7.88965 17.981 7.88965H9.90791C8.79323 7.88965 7.88965 8.79323 7.88965 9.90791V17.981C7.88965 19.0957 8.79323 19.9992 9.90791 19.9992H12.9595Z" />
        <path d="M0 12.9594C0 14.224 0.0664414 15.3091 0.267945 16.2157C0.471992 17.1339 0.827701 17.9298 1.44854 18.5506C2.06938 19.1714 2.86526 19.5271 3.78339 19.7312C3.87132 19.7507 3.95969 19.769 4.04842 19.7862C5.14283 19.9976 6.0548 19.0713 6.0548 17.9566V9.90779C6.0548 8.7931 5.15119 7.88953 4.03653 7.88953H2.01827C0.903608 7.88953 0 8.7931 0 9.90779V12.9594Z" />
        <path d="M7.03965 0C5.77507 0 4.69 0.0664414 3.78333 0.267945C2.8652 0.471992 2.06932 0.827701 1.44848 1.44854C0.827639 2.06938 0.47193 2.86526 0.267883 3.78339C0.251132 3.85878 0.235369 3.93442 0.220565 4.01027C0.00422724 5.119 0.947443 6.0548 2.07707 6.0548H18.1401C19.2548 6.0548 20.1811 5.14283 19.9697 4.04842C19.9525 3.95969 19.9342 3.87132 19.9147 3.78339C19.7106 2.86526 19.3549 2.06938 18.734 1.44854C18.1132 0.827701 17.3173 0.471992 16.3992 0.267945C15.4925 0.0664414 14.4075 0 13.1429 0H7.03965Z" />
      </svg>
    ),
  },
  {
    name: "Create",
    path: "/newsletter/create",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          d="M19.6337 5.3651L14.6337 0.365116C14.1456 -0.123007 13.3543 -0.123007 12.8662 0.365116C12.3781 0.853239 12.3781 1.64449 12.8662 2.13261L17.8662 7.13259C18.1103 7.37665 18.4303 7.49884 18.7499 7.49884C19.0696 7.49884 19.3896 7.37665 19.6337 7.13259C20.1221 6.64447 20.1221 5.85322 19.6337 5.3651Z"
          fill="#FFFFFB"
        />
        <path
          d="M10.8837 3.46879C10.6493 3.23441 10.3318 3.10254 9.99996 3.10254H3.74999C3.13843 3.10254 2.61718 3.54441 2.51718 4.14754L0 18.7275L6.34279 12.4922C6.28904 12.2872 6.24998 12.0747 6.24998 11.8525C6.24998 10.4744 7.37185 9.35252 8.74997 9.35252C10.1281 9.35252 11.25 10.4744 11.25 11.8525C11.25 13.2306 10.1281 14.3525 8.74997 14.3525C8.52778 14.3525 8.31653 14.3134 8.11028 14.2597L1.87499 20.6025L16.4549 18.0853C17.0581 17.9853 17.4999 17.4641 17.4999 16.8525V10.6025C17.4999 10.2706 17.3681 9.95314 17.1337 9.71877L10.8837 3.46879Z"
          fill="#FFFFFB"
        />
      </svg>
    ),
  },
  {
    name: "Analytics",
    path: "/newsletter/analytics",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 3.93587C0 3.05182 0.35119 2.20397 0.976311 1.57885C1.60143 0.953729 2.44928 0.602539 3.33333 0.602539H16.6667C17.5507 0.602539 18.3986 0.953729 19.0237 1.57885C19.6488 2.20397 20 3.05182 20 3.93587V17.2692C20 18.1533 19.6488 19.0011 19.0237 19.6262C18.3986 20.2514 17.5507 20.6025 16.6667 20.6025H3.33333C2.44928 20.6025 1.60143 20.2514 0.976311 19.6262C0.35119 19.0011 0 18.1533 0 17.2692V3.93587ZM11.1111 6.15809C11.1111 5.86341 10.994 5.58079 10.7857 5.37242C10.5773 5.16405 10.2947 5.04698 10 5.04698C9.70532 5.04698 9.4227 5.16405 9.21433 5.37242C9.00595 5.58079 8.88889 5.86341 8.88889 6.15809V15.047C8.88889 15.3417 9.00595 15.6243 9.21433 15.8327C9.4227 16.041 9.70532 16.1581 10 16.1581C10.2947 16.1581 10.5773 16.041 10.7857 15.8327C10.994 15.6243 11.1111 15.3417 11.1111 15.047V6.15809ZM6.66667 9.49143C6.66667 9.19674 6.5496 8.91413 6.34123 8.70575C6.13286 8.49738 5.85024 8.38032 5.55556 8.38032C5.26087 8.38032 4.97826 8.49738 4.76988 8.70575C4.56151 8.91413 4.44444 9.19674 4.44444 9.49143V15.047C4.44444 15.3417 4.56151 15.6243 4.76988 15.8327C4.97826 16.041 5.26087 16.1581 5.55556 16.1581C5.85024 16.1581 6.13286 16.041 6.34123 15.8327C6.5496 15.6243 6.66667 15.3417 6.66667 15.047V9.49143ZM15.5556 12.8248C15.5556 12.5301 15.4385 12.2475 15.2301 12.0391C15.0217 11.8307 14.7391 11.7137 14.4444 11.7137C14.1498 11.7137 13.8671 11.8307 13.6588 12.0391C13.4504 12.2475 13.3333 12.5301 13.3333 12.8248V15.047C13.3333 15.3417 13.4504 15.6243 13.6588 15.8327C13.8671 16.041 14.1498 16.1581 14.4444 16.1581C14.7391 16.1581 15.0217 16.041 15.2301 15.8327C15.4385 15.6243 15.5556 15.3417 15.5556 15.047V12.8248Z"
          fill="#FFFFFB"
        />
      </svg>
    ),
  },
  {
    name: "Email List",
    path: "/newsletter/email-list",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
      >
        <path
          d="M17.2233 0.602539H2.77668C1.24324 0.602539 0 1.84578 0 3.37922V12.5192C0 14.0527 1.24324 15.2959 2.77668 15.2959H17.2233C18.7567 15.2959 20 14.0527 20 12.5192V3.37922C20 1.84578 18.7567 0.602539 17.2233 0.602539ZM6.95961 10.5164L3.07133 13.8336C2.79707 14.0677 2.38477 14.0351 2.15074 13.7606C1.91668 13.4863 1.94922 13.074 2.22379 12.84L6.11207 9.52281C6.38629 9.28875 6.79855 9.32129 7.03262 9.59586C7.26668 9.87008 7.23414 10.2824 6.95961 10.5164ZM10 9.25531C9.47992 9.25402 8.97578 9.08121 8.58164 8.74035L8.58195 8.74066L8.5807 8.73973C8.58102 8.74004 8.58137 8.74004 8.58164 8.74035L2.6157 3.56227C2.34305 3.32563 2.31402 2.91336 2.55031 2.64105C2.78691 2.3684 3.19922 2.33937 3.47148 2.57566L9.4391 7.75504C9.56664 7.86856 9.7768 7.95051 10 7.94922C10.2229 7.94988 10.4295 7.87016 10.5641 7.75281L10.567 7.75027L16.5285 2.5757C16.8008 2.33941 17.2131 2.36844 17.4497 2.64109C17.6859 2.91336 17.657 3.32566 17.3843 3.56231L11.4167 8.74195C11.0239 9.07926 10.5204 9.25465 10 9.25531ZM17.8495 13.7606C17.6155 14.0351 17.2032 14.0677 16.929 13.8336L13.0407 10.5164C12.7662 10.2823 12.7336 9.87008 12.9677 9.59586C13.2017 9.32129 13.614 9.28879 13.8882 9.52281L17.7765 12.84C18.0511 13.074 18.0836 13.4863 17.8495 13.7606Z"
          fill="#FFFFFB"
        />
      </svg>
    ),
  },
  {
    name: "Settings",
    path: "/newsletter/settings",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          d="M1.57871 12.0389L0.526217 12.6179C0.284488 12.7505 0.108103 12.9689 0.035862 13.2251C-0.0363788 13.4813 0.0014421 13.7542 0.141005 13.9839L1.70711 16.5619C1.84669 16.7916 2.07657 16.9592 2.34619 17.0278C2.61581 17.0964 2.90308 17.0605 3.14482 16.9279L4.20994 16.3459C4.52773 16.1717 4.88817 16.08 5.25507 16.08C5.62196 16.08 5.9824 16.1717 6.30019 16.3459L6.32124 16.3569C6.64078 16.5309 6.90636 16.7819 7.09115 17.0846C7.27595 17.3873 7.37342 17.731 7.37373 18.0809V19.2959C7.37373 19.5611 7.48462 19.8155 7.682 20.003C7.87938 20.1905 8.14709 20.2959 8.42622 20.2959H11.5837C11.8628 20.2959 12.1305 20.1905 12.3279 20.003C12.5253 19.8155 12.6362 19.5611 12.6362 19.2959V18.0779C12.6361 17.7289 12.7329 17.386 12.9167 17.0839C13.1006 16.7817 13.365 16.531 13.6834 16.3569L13.7055 16.3449C14.0233 16.1707 14.3838 16.079 14.7507 16.079C15.1175 16.079 15.478 16.1707 15.7958 16.3449L16.8567 16.9269C17.0984 17.0595 17.3857 17.0954 17.6553 17.0268C17.9249 16.9582 18.1548 16.7906 18.2944 16.5609L19.8605 13.9829C19.9293 13.869 19.9737 13.7433 19.9914 13.6131C20.009 13.4828 19.9995 13.3505 19.9633 13.2238C19.9272 13.097 19.8651 12.9783 19.7806 12.8743C19.6962 12.7704 19.591 12.6832 19.4711 12.6179L18.4186 12.0389C18.098 11.8637 17.8318 11.6112 17.647 11.3069C17.4622 11.0026 17.3653 10.6573 17.3661 10.3059V10.2849C17.3651 9.93365 17.462 9.58842 17.6468 9.28423C17.8317 8.98004 18.0979 8.72773 18.4186 8.5529L19.4711 7.9739C19.7128 7.84129 19.8892 7.62287 19.9614 7.3667C20.0337 7.11052 19.9959 6.83758 19.8563 6.6079L18.2881 4.0299C18.1485 3.80023 17.9186 3.63264 17.649 3.564C17.3794 3.49536 17.0921 3.5313 16.8504 3.6639L15.7874 4.2459C15.4696 4.42011 15.1091 4.51182 14.7422 4.51182C14.3753 4.51182 14.0149 4.42011 13.6971 4.2459L13.6824 4.2359C13.3628 4.0619 13.0973 3.81088 12.9125 3.50819C12.7277 3.20549 12.6302 2.86183 12.6299 2.5119V1.2959C12.6299 1.03068 12.519 0.776328 12.3216 0.588792C12.1242 0.401255 11.8565 0.295898 11.5774 0.295898H8.41991C8.14077 0.295898 7.87307 0.401255 7.67569 0.588792C7.4783 0.776328 7.36742 1.03068 7.36742 1.2959V2.5899C7.36696 2.91566 7.27626 3.23557 7.10444 3.51748C6.93263 3.79939 6.68574 4.03337 6.3886 4.1959L6.22757 4.2839C5.93102 4.44634 5.59474 4.53184 5.25243 4.53184C4.91013 4.53184 4.57385 4.44634 4.2773 4.2839L3.14692 3.6639C2.90519 3.5313 2.61791 3.49536 2.34829 3.564C2.07867 3.63264 1.84879 3.80023 1.70922 4.0299L0.14311 6.6079C0.00337158 6.83734 -0.03477 7.1101 0.037068 7.36624C0.108906 7.62239 0.284845 7.84095 0.526217 7.9739L1.57871 8.5529C1.89929 8.72805 2.16546 8.98057 2.35029 9.28489C2.53511 9.58922 2.63202 9.93454 2.6312 10.2859V10.3069C2.63216 10.6581 2.5353 11.0034 2.35045 11.3076C2.1656 11.6118 1.89935 11.8641 1.57871 12.0389ZM9.99865 7.2959C10.6231 7.2959 11.2336 7.47185 11.7528 7.80149C12.2721 8.13113 12.6768 8.59967 12.9158 9.14785C13.1548 9.69603 13.2173 10.2992 13.0955 10.8812C12.9736 11.4631 12.6729 11.9977 12.2313 12.4172C11.7897 12.8368 11.2271 13.1225 10.6146 13.2383C10.0022 13.354 9.36729 13.2946 8.79033 13.0675C8.21338 12.8405 7.72025 12.456 7.3733 11.9626C7.02635 11.4693 6.84117 10.8892 6.84117 10.2959C6.84117 9.50025 7.17383 8.73719 7.76597 8.17458C8.35812 7.61197 9.16123 7.2959 9.99865 7.2959Z"
          fill="#FFFFFB"
        />
      </svg>
    ),
  },
];

// Define the layout component
const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  // State variables to manage side nav and current page
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const [CurrentPage, setCurrentPage] = useState<string>("Customer Service");

  // Return the layout component
  return (
    <div className="module-layout">
      {/* Side nav wrapper */}
      <div className={`Side_Nav_Wrapper ${isSideNavOpen ? "" : "close"}`}>
        <SideNav
          isSideNavOpen={isSideNavOpen}
          setIsSideNavOpen={setIsSideNavOpen}
          setCurrentPage={setCurrentPage}
          sideNavLinks={sideNavLinks}
        />
      </div>
      {/* Main page wrapper */}
      <div className="Page_Wrapper">
        {/* Title of the current page */}
        <TitleOfPage title={CurrentPage} />
        {/* Children components */}
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
};

// Export the layout component
export default layout;
