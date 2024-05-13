'use client'

import React, { useState } from 'react'
import styles from './socialMedia.module.css'
import SideNav from '../_components/SideNav/SideNav';
import TitleOfPage from '../_components/TitleOfPage/TitleOfPage';


const layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {

  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(false);
  const [CurrentPage, setCurrentPage] = useState<string>('Social Media');

  const sideNavLinks = [
    {
        name: "Dashboard", path: "/social-media/dashboard", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
        <path d="M12.9605 19.9992C14.2251 19.9992 15.3102 19.9328 16.2168 19.7313C17.135 19.5273 17.9309 19.1716 18.5517 18.5507C19.1725 17.9299 19.5282 17.134 19.7323 16.2158C19.9338 15.3092 20.0002 14.2241 20.0002 12.9595V9.90791C20.0002 8.79323 19.0966 7.88965 17.982 7.88965H9.90889C8.7942 7.88965 7.89062 8.79323 7.89062 9.90791V17.981C7.89062 19.0957 8.7942 19.9992 9.90889 19.9992H12.9605Z" fill="#FFFFFB"/>
        <path d="M0 12.9595C0 14.2241 0.0664414 15.3092 0.267945 16.2158C0.471992 17.134 0.827701 17.9299 1.44854 18.5507C2.06938 19.1715 2.86526 19.5273 3.78339 19.7313C3.87132 19.7508 3.95969 19.7692 4.04842 19.7863C5.14283 19.9977 6.0548 19.0714 6.0548 17.9568V9.90791C6.0548 8.79323 5.15119 7.88965 4.03653 7.88965H2.01827C0.903608 7.88965 0 8.79323 0 9.90791V12.9595Z" fill="#FFFFFB"/>
        <path d="M7.0416 0C5.77703 0 4.69196 0.0664414 3.78528 0.267945C2.86715 0.471992 2.07127 0.827701 1.45043 1.44854C0.829592 2.06938 0.473883 2.86526 0.269836 3.78339C0.253085 3.85878 0.237322 3.93442 0.222518 4.01027C0.00618036 5.119 0.949396 6.0548 2.07902 6.0548H18.1421C19.2568 6.0548 20.1831 5.14283 19.9716 4.04842C19.9545 3.95969 19.9361 3.87132 19.9167 3.78339C19.7125 2.86526 19.3569 2.06938 18.736 1.44854C18.1151 0.827701 17.3192 0.471992 16.4011 0.267945C15.4944 0.0664414 14.4094 0 13.1449 0H7.0416Z" fill="#FFFFFB"/>
      </svg>
    },
    {
        name: "Post", path: "/social-media/post", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="none">
        <path d="M19.6336 5.3651L14.6336 0.365116C14.1455 -0.123007 13.3542 -0.123007 12.8661 0.365116C12.378 0.853239 12.378 1.64449 12.8661 2.13261L17.8661 7.13259C18.1101 7.37665 18.4301 7.49884 18.7498 7.49884C19.0695 7.49884 19.3895 7.37665 19.6336 7.13259C20.122 6.64447 20.122 5.85322 19.6336 5.3651Z" fill="#2A2B2A"/>
        <path d="M10.8837 3.46879C10.6493 3.23441 10.3318 3.10254 9.99996 3.10254H3.74999C3.13843 3.10254 2.61718 3.54441 2.51718 4.14754L0 18.7275L6.34279 12.4922C6.28904 12.2872 6.24998 12.0747 6.24998 11.8525C6.24998 10.4744 7.37185 9.35252 8.74997 9.35252C10.1281 9.35252 11.25 10.4744 11.25 11.8525C11.25 13.2306 10.1281 14.3525 8.74997 14.3525C8.52778 14.3525 8.31653 14.3134 8.11028 14.2597L1.87499 20.6025L16.4549 18.0853C17.0581 17.9853 17.4999 17.4641 17.4999 16.8525V10.6025C17.4999 10.2706 17.3681 9.95314 17.1337 9.71877L10.8837 3.46879Z" fill="#2A2B2A"/>
      </svg>
    },
    {
      name: "Share", path: "/social-media/share", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4167 14.6667C15.7942 14.6667 14.3779 15.5146 13.563 16.786L8.65426 13.981C8.97143 13.3577 9.16667 12.6628 9.16667 11.9167C9.16667 11.4556 9.07776 11.0192 8.95126 10.5994L14.058 7.68167C14.8949 8.58917 16.0848 9.16667 17.4167 9.16667C19.9485 9.16667 22 7.11517 22 4.58333C22 2.0515 19.9485 0 17.4167 0C14.8848 0 12.8333 2.0515 12.8333 4.58333C12.8333 5.04442 12.9222 5.48074 13.0487 5.90149L7.942 8.81833C7.10508 7.91175 5.91525 7.33333 4.58333 7.33333C2.0515 7.33333 0 9.38483 0 11.9167C0 14.4485 2.0515 16.5 4.58333 16.5C5.62833 16.5 6.58074 16.137 7.35166 15.5485L12.8837 18.755C12.8654 18.92 12.8333 19.0795 12.8333 19.25C12.8333 21.7818 14.8848 23.8333 17.4167 23.8333C19.9485 23.8333 22 21.7818 22 19.25C22 16.7182 19.9485 14.6667 17.4167 14.6667Z" fill="#FFFFFB"/>
    </svg>
  },
    {
        name: "Comments", path: "/social-media/comments", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 23" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6129 7.09677C5.20123 7.09677 5.67742 7.57368 5.67742 8.16129C5.67742 8.74961 5.20123 9.22581 4.6129 9.22581C4.02458 9.22581 3.54839 8.74961 3.54839 8.16129C3.54839 7.57368 4.02458 7.09677 4.6129 7.09677ZM8.87097 7.09677C9.45929 7.09677 9.93548 7.57368 9.93548 8.16129C9.93548 8.74961 9.45929 9.22581 8.87097 9.22581C8.28265 9.22581 7.80645 8.74961 7.80645 8.16129C7.80645 7.57368 8.28265 7.09677 8.87097 7.09677ZM13.129 7.09677C13.7174 7.09677 14.1935 7.57368 14.1935 8.16129C14.1935 8.74961 13.7174 9.22581 13.129 9.22581C12.5407 9.22581 12.0645 8.74961 12.0645 8.16129C12.0645 7.57368 12.5407 7.09677 13.129 7.09677ZM6.83916 16.1352C7.39058 16.2253 8.64458 16.3226 9.22581 16.3226C14.3213 16.3226 17.7419 12.5308 17.7419 8.07258C17.7419 3.61439 13.4675 0 9.22581 0C4.12394 0 0 3.61439 0 8.07258C0 10.6558 0.984323 12.848 2.83871 14.427V18.4516L6.83916 16.1352ZM19.1251 6.48575L19.1613 7.09677C19.167 7.67658 19.1613 7.62335 19.1613 8.16129C19.1613 13.821 14.7017 17.7419 8.51613 17.7419H6.3871C8.07613 19.3941 10.0412 20.4032 12.7742 20.4032C13.3554 20.4032 13.9224 20.3507 14.4739 20.2606L18.4516 22.7097V18.6851C20.609 17.2068 22 14.9139 22 12.3306C22 10.0285 20.8922 7.9562 19.1251 6.48575Z" fill="#FFFFFB"/>
      </svg>
    },
    {
        name: "Campaigns", path: "/social-media/campaigns", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.375 13.75H14.4375V4.125H12.375V13.75ZM20.625 0L15.8125 3.20856V14.6664L20.625 17.875C21.384 17.875 22 17.259 22 16.5V1.375C22 0.616 21.384 0 20.625 0ZM0 8.9375C0 11.5039 1.76069 13.1642 4.13806 13.6194L4.125 13.75V19.25C4.125 20.009 4.741 20.625 5.5 20.625H7.5625C8.3215 20.625 8.9375 20.009 8.9375 19.25V13.75H11V4.125H5.5C2.46262 4.125 0 5.90013 0 8.9375Z" fill="#FFFFFB"/>
      </svg>
    },
    {
      name: "Database", path: "/social-media/database", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19" fill="none">
      <path d="M0 0.770508H20V3.02051H0V0.770508ZM1.36364 3.92051V18.7705H18.6364V3.92051H1.36364ZM13.1818 7.97051H6.36364V6.62051H13.1818V7.97051Z" fill="#FFFFFB"/>
    </svg>
  }

]

  return (
    <>
      <div className={`${styles.Side_Nav_Wrapper} ${isSideNavOpen ? '' : styles.close}`}>
        <SideNav isSideNavOpen={isSideNavOpen} setIsSideNavOpen={setIsSideNavOpen} setCurrentPage={setCurrentPage} sideNavLinks={sideNavLinks}/>
      </div>
      <div className={styles.Page_Wrapper}>
        <TitleOfPage title={CurrentPage} />
        <div className='h-full'>
          {children}
        </div>
      </div>
    </>
  )
}

export default layout
