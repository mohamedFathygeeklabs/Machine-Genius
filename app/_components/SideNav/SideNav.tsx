
import React from 'react'
import styles from './SideNav.module.css'
import logo_image from '../../../public/assets/logo.svg'
import logo_white_image from '../../../public/assets/logo white.svg'
import logo_text_image from '../../../public/assets/logo text.svg'
import Image from 'next/image'
import Link from 'next/link'
import CustomSelectInput from '../CustomSelectInput/CustomSelectInput'


const rolsIcon = <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
<path d="M20.5001 9.28571H11.2144V0H9.7858V9.28571H0.500084V10.7143H9.7858V20H11.2144V10.7143H20.5001V9.28571Z" fill="#FFFFFB"/>
<path d="M6.92865 20H1.21437C1.0926 20 0.972851 19.9689 0.866493 19.9096C0.760135 19.8503 0.6707 19.7648 0.606682 19.6612C0.542664 19.5577 0.506189 19.4394 0.500721 19.3178C0.495253 19.1961 0.520974 19.0751 0.57544 18.9662L3.43258 13.2519C3.49852 13.1412 3.59207 13.0496 3.70407 12.9859C3.81607 12.9223 3.94269 12.8888 4.07151 12.8888C4.20034 12.8888 4.32695 12.9223 4.43896 12.9859C4.55096 13.0496 4.64451 13.1412 4.71044 13.2519L7.56758 18.9662C7.62205 19.0751 7.64777 19.1961 7.6423 19.3178C7.63684 19.4394 7.60036 19.5577 7.53634 19.6612C7.47232 19.7648 7.38289 19.8503 7.27653 19.9096C7.17017 19.9689 7.05042 20 6.92865 20ZM2.37023 18.5714H5.7728L4.07151 15.1688L2.37023 18.5714Z" fill="#FFFFFB"/>
<path d="M19.0715 7.14286H14.7858C14.4071 7.14242 14.0439 6.99177 13.7761 6.72396C13.5083 6.45614 13.3577 6.09303 13.3572 5.71429V1.42857C13.3577 1.04982 13.5083 0.686714 13.7761 0.418899C14.0439 0.151084 14.4071 0.00043481 14.7858 0H19.0715C19.4503 0.00043481 19.8134 0.151084 20.0812 0.418899C20.349 0.686714 20.4996 1.04982 20.5001 1.42857V5.71429C20.4996 6.09303 20.349 6.45614 20.0812 6.72396C19.8134 6.99177 19.4503 7.14242 19.0715 7.14286ZM14.7858 1.42857V5.71429H19.0722L19.0715 1.42857H14.7858Z" fill="#FFFFFB"/>
<path d="M4.07151 7.14286C3.36515 7.14286 2.67465 6.9334 2.08733 6.54096C1.50002 6.14853 1.04226 5.59075 0.771944 4.93816C0.501631 4.28556 0.430905 3.56747 0.568709 2.87468C0.706514 2.18189 1.04666 1.54552 1.54613 1.04605C2.04561 0.546576 2.68197 0.20643 3.37476 0.0686256C4.06755 -0.0691788 4.78565 0.00154743 5.43824 0.27186C6.09083 0.542173 6.64861 0.999932 7.04105 1.58725C7.43348 2.17457 7.64294 2.86507 7.64294 3.57143C7.64183 4.51829 7.26519 5.42605 6.59566 6.09558C5.92613 6.76511 5.01837 7.14174 4.07151 7.14286ZM4.07151 1.42857C3.6477 1.42857 3.2334 1.55425 2.88101 1.78971C2.52861 2.02517 2.25396 2.35984 2.09177 2.75139C1.92958 3.14295 1.88715 3.57381 1.96983 3.98948C2.05251 4.40515 2.2566 4.78698 2.55629 5.08666C2.85597 5.38634 3.23779 5.59043 3.65346 5.67311C4.06914 5.7558 4.49999 5.71336 4.89155 5.55117C5.28311 5.38898 5.61777 5.11433 5.85323 4.76194C6.08869 4.40955 6.21437 3.99525 6.21437 3.57143C6.21375 3.0033 5.98778 2.45862 5.58605 2.05689C5.18433 1.65516 4.63964 1.4292 4.07151 1.42857Z" fill="#FFFFFB"/>
<path d="M4 15L6.16506 18.75H1.83494L4 15Z" fill="#FFFFFB"/>
<path d="M6.5 3.5C6.5 4.88071 5.38071 6 4 6C2.61929 6 1.5 4.88071 1.5 3.5C1.5 2.11929 2.61929 1 4 1C5.38071 1 6.5 2.11929 6.5 3.5Z" fill="#FFFFFB"/>
<path d="M14.5 1H19.5V6H14.5V1Z" fill="#FFFFFB"/>
<path d="M13.9894 17.2489C13.3369 16.9004 13.3369 16.0996 13.9894 15.7511L18.8793 13.1397C19.5817 12.7646 20.5 13.1889 20.5 13.8886V19.1114C20.5 19.8111 19.5817 20.2354 18.8793 19.8603L13.9894 17.2489Z" fill="#FFFFFB"/>
</svg>


const rols = [
    'SEO',
    'Vedio'
]
const sideNavLinks = [
    {
        name: "Dashboard", path: "/content-creator/dashboard", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
            <path d="M12.9595 19.9992C14.2241 19.9992 15.3092 19.9328 16.2158 19.7313C17.134 19.5273 17.9299 19.1716 18.5507 18.5507C19.1716 17.9299 19.5273 17.134 19.7313 16.2158C19.9328 15.3092 19.9992 14.2241 19.9992 12.9595V9.90791C19.9992 8.79323 19.0957 7.88965 17.981 7.88965H9.90791C8.79323 7.88965 7.88965 8.79323 7.88965 9.90791V17.981C7.88965 19.0957 8.79323 19.9992 9.90791 19.9992H12.9595Z" />
            <path d="M0 12.9594C0 14.224 0.0664414 15.3091 0.267945 16.2157C0.471992 17.1339 0.827701 17.9298 1.44854 18.5506C2.06938 19.1714 2.86526 19.5271 3.78339 19.7312C3.87132 19.7507 3.95969 19.769 4.04842 19.7862C5.14283 19.9976 6.0548 19.0713 6.0548 17.9566V9.90779C6.0548 8.7931 5.15119 7.88953 4.03653 7.88953H2.01827C0.903608 7.88953 0 8.7931 0 9.90779V12.9594Z" />
            <path d="M7.03965 0C5.77507 0 4.69 0.0664414 3.78333 0.267945C2.8652 0.471992 2.06932 0.827701 1.44848 1.44854C0.827639 2.06938 0.47193 2.86526 0.267883 3.78339C0.251132 3.85878 0.235369 3.93442 0.220565 4.01027C0.00422724 5.119 0.947443 6.0548 2.07707 6.0548H18.1401C19.2548 6.0548 20.1811 5.14283 19.9697 4.04842C19.9525 3.95969 19.9342 3.87132 19.9147 3.78339C19.7106 2.86526 19.3549 2.06938 18.734 1.44854C18.1132 0.827701 17.3173 0.471992 16.3992 0.267945C15.4925 0.0664414 14.4075 0 13.1429 0H7.03965Z" />
        </svg>
    },
    {
        name: "Create", path: "/content-creator/create", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="none">
            <path d="M19.6338 5.36608L14.6338 0.366092C14.1457 -0.122031 13.3545 -0.122031 12.8663 0.366092C12.3782 0.854216 12.3782 1.64546 12.8663 2.13359L17.8663 7.13357C18.1104 7.37763 18.4304 7.49982 18.7501 7.49982C19.0698 7.49982 19.3898 7.37763 19.6338 7.13357C20.1222 6.64545 20.1222 5.8542 19.6338 5.36608Z" fill="#2A2B2A" />
            <path d="M10.8837 3.46964C10.6493 3.23527 10.3318 3.10339 9.99996 3.10339H3.74999C3.13843 3.10339 2.61718 3.54527 2.51718 4.14839L0 18.7283L6.34279 12.493C6.28904 12.2881 6.24998 12.0756 6.24998 11.8534C6.24998 10.4752 7.37185 9.35337 8.74997 9.35337C10.1281 9.35337 11.25 10.4752 11.25 11.8534C11.25 13.2315 10.1281 14.3534 8.74997 14.3534C8.52778 14.3534 8.31653 14.3143 8.11028 14.2605L1.87499 20.6033L16.4549 18.0862C17.0581 17.9862 17.4999 17.4649 17.4999 16.8533V10.6034C17.4999 10.2715 17.3681 9.954 17.1337 9.71962L10.8837 3.46964Z" fill="#2A2B2A" />
        </svg>
    },
    {
        name: "Calendar", path: "/content-creator/calender", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 23" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.33333 12.9165H10.6667V11.5832H9.33333V12.9165ZM9.33333 18.2498H10.6667V16.9165H9.33333V18.2498ZM14.6667 12.9165H16V11.5832H14.6667V12.9165ZM14.6667 18.2498H16V16.9165H14.6667V18.2498ZM4 18.2498H5.33333V16.9165H4V18.2498ZM18.6667 6.24984H1.33333V4.9165C1.33333 4.1805 1.93067 3.58317 2.66667 3.58317H5.33333V4.24984C5.33333 4.6185 5.63133 4.9165 6 4.9165C6.36867 4.9165 6.66667 4.6185 6.66667 4.24984V3.58317H13.3333V4.24984C13.3333 4.6185 13.6313 4.9165 14 4.9165C14.3687 4.9165 14.6667 4.6185 14.6667 4.24984V3.58317H17.3333C18.0693 3.58317 18.6667 4.1805 18.6667 4.9165V6.24984ZM17.3333 12.9165C17.3333 13.6525 16.736 14.2498 16 14.2498H14.6667C13.9307 14.2498 13.3333 13.6525 13.3333 12.9165V11.5832C13.3333 10.8472 13.9307 10.2498 14.6667 10.2498H16C16.736 10.2498 17.3333 10.8472 17.3333 11.5832V12.9165ZM17.3333 18.2498C17.3333 18.9858 16.736 19.5832 16 19.5832H14.6667C13.9307 19.5832 13.3333 18.9858 13.3333 18.2498V16.9165C13.3333 16.1805 13.9307 15.5832 14.6667 15.5832H16C16.736 15.5832 17.3333 16.1805 17.3333 16.9165V18.2498ZM12 12.9165C12 13.6525 11.4027 14.2498 10.6667 14.2498H9.33333C8.59733 14.2498 8 13.6525 8 12.9165V11.5832C8 10.8472 8.59733 10.2498 9.33333 10.2498H10.6667C11.4027 10.2498 12 10.8472 12 11.5832V12.9165ZM12 18.2498C12 18.9858 11.4027 19.5832 10.6667 19.5832H9.33333C8.59733 19.5832 8 18.9858 8 18.2498V16.9165C8 16.1805 8.59733 15.5832 9.33333 15.5832H10.6667C11.4027 15.5832 12 16.1805 12 16.9165V18.2498ZM6.66667 12.9165C6.66667 13.6525 6.06933 14.2498 5.33333 14.2498H4C3.264 14.2498 2.66667 13.6525 2.66667 12.9165V11.5832C2.66667 10.8472 3.264 10.2498 4 10.2498H5.33333C6.06933 10.2498 6.66667 10.8472 6.66667 11.5832V12.9165ZM6.66667 18.2498C6.66667 18.9858 6.06933 19.5832 5.33333 19.5832H4C3.264 19.5832 2.66667 18.9858 2.66667 18.2498V16.9165C2.66667 16.1805 3.264 15.5832 4 15.5832H5.33333C6.06933 15.5832 6.66667 16.1805 6.66667 16.9165V18.2498ZM17.3333 2.24984H14.6667V1.58317C14.6667 1.21517 14.3687 0.916504 14 0.916504C13.6313 0.916504 13.3333 1.21517 13.3333 1.58317V2.24984H6.66667V1.58317C6.66667 1.21517 6.36867 0.916504 6 0.916504C5.63133 0.916504 5.33333 1.21517 5.33333 1.58317V2.24984H2.66667C1.194 2.24984 0 3.44384 0 4.9165V19.5832C0 21.0558 1.194 22.2498 2.66667 22.2498H17.3333C18.806 22.2498 20 21.0558 20 19.5832V4.9165C20 3.44384 18.806 2.24984 17.3333 2.24984ZM4 12.9165H5.33333V11.5832H4V12.9165Z" />
        </svg>
    },
    {
        name: "Article Database", path: "/content-creator/article-database", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19" fill="none">
            <path d="M0 0.583252H20V2.83325H0V0.583252ZM1.36364 3.73325V18.5833H18.6364V3.73325H1.36364ZM13.1818 7.78325H6.36364V6.43325H13.1818V7.78325Z" />
        </svg>
    },
    {
        name: "Settings", path: "/content-creator/settings", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="none">
            <path d="M1.57871 12.3263L0.526217 12.9053C0.284488 13.0379 0.108103 13.2563 0.035862 13.5125C-0.0363788 13.7686 0.0014421 14.0416 0.141005 14.2713L1.70711 16.8493C1.84669 17.0789 2.07657 17.2465 2.34619 17.3152C2.61581 17.3838 2.90308 17.3479 3.14482 17.2153L4.20994 16.6333C4.52773 16.459 4.88817 16.3673 5.25507 16.3673C5.62196 16.3673 5.9824 16.459 6.30019 16.6333L6.32124 16.6443C6.64078 16.8183 6.90636 17.0693 7.09115 17.372C7.27595 17.6747 7.37342 18.0183 7.37373 18.3683V19.5833C7.37373 19.8485 7.48462 20.1028 7.682 20.2904C7.87938 20.4779 8.14709 20.5833 8.42622 20.5833H11.5837C11.8628 20.5833 12.1305 20.4779 12.3279 20.2904C12.5253 20.1028 12.6362 19.8485 12.6362 19.5833V18.3653C12.6361 18.0162 12.7329 17.6734 12.9167 17.3712C13.1006 17.0691 13.365 16.8183 13.6834 16.6443L13.7055 16.6323C14.0233 16.458 14.3838 16.3663 14.7507 16.3663C15.1175 16.3663 15.478 16.458 15.7958 16.6323L16.8567 17.2143C17.0984 17.3469 17.3857 17.3828 17.6553 17.3142C17.9249 17.2455 18.1548 17.0779 18.2944 16.8483L19.8605 14.2703C19.9293 14.1563 19.9737 14.0307 19.9914 13.9004C20.009 13.7702 19.9995 13.6379 19.9633 13.5111C19.9272 13.3844 19.8651 13.2656 19.7806 13.1617C19.6962 13.0577 19.591 12.9706 19.4711 12.9053L18.4186 12.3263C18.098 12.1511 17.8318 11.8986 17.647 11.5943C17.4622 11.2899 17.3653 10.9446 17.3661 10.5933V10.5723C17.3651 10.221 17.462 9.87577 17.6468 9.57158C17.8317 9.26739 18.0979 9.01508 18.4186 8.84025L19.4711 8.26125C19.7128 8.12864 19.8892 7.91022 19.9614 7.65405C20.0337 7.39788 19.9959 7.12493 19.8563 6.89525L18.2881 4.31725C18.1485 4.08758 17.9186 3.91999 17.649 3.85135C17.3794 3.78271 17.0921 3.81865 16.8504 3.95125L15.7874 4.53325C15.4696 4.70746 15.1091 4.79917 14.7422 4.79917C14.3753 4.79917 14.0149 4.70746 13.6971 4.53325L13.6824 4.52325C13.3628 4.34925 13.0973 4.09824 12.9125 3.79554C12.7277 3.49284 12.6302 3.14918 12.6299 2.79925V1.58325C12.6299 1.31804 12.519 1.06368 12.3216 0.876145C12.1242 0.688609 11.8565 0.583252 11.5774 0.583252H8.41991C8.14077 0.583252 7.87307 0.688609 7.67569 0.876145C7.4783 1.06368 7.36742 1.31804 7.36742 1.58325V2.87725C7.36696 3.20302 7.27626 3.52293 7.10444 3.80484C6.93263 4.08674 6.68574 4.32072 6.3886 4.48325L6.22757 4.57125C5.93102 4.73369 5.59474 4.8192 5.25243 4.8192C4.91013 4.8192 4.57385 4.73369 4.2773 4.57125L3.14692 3.95125C2.90519 3.81865 2.61791 3.78271 2.34829 3.85135C2.07867 3.91999 1.84879 4.08758 1.70922 4.31725L0.14311 6.89525C0.00337158 7.12469 -0.03477 7.39745 0.037068 7.6536C0.108906 7.90974 0.284845 8.12831 0.526217 8.26125L1.57871 8.84025C1.89929 9.0154 2.16546 9.26792 2.35029 9.57225C2.53511 9.87657 2.63202 10.2219 2.6312 10.5733V10.5943C2.63216 10.9455 2.5353 11.2907 2.35045 11.5949C2.1656 11.8991 1.89935 12.1514 1.57871 12.3263ZM9.99865 7.58325C10.6231 7.58325 11.2336 7.7592 11.7528 8.08884C12.2721 8.41849 12.6768 8.88702 12.9158 9.4352C13.1548 9.98338 13.2173 10.5866 13.0955 11.1685C12.9736 11.7505 12.6729 12.285 12.2313 12.7046C11.7897 13.1241 11.2271 13.4099 10.6146 13.5256C10.0022 13.6414 9.36729 13.582 8.79033 13.3549C8.21338 13.1278 7.72025 12.7433 7.3733 12.25C7.02635 11.7566 6.84117 11.1766 6.84117 10.5833C6.84117 9.7876 7.17383 9.02454 7.76597 8.46193C8.35812 7.89932 9.16123 7.58325 9.99865 7.58325Z" />
        </svg>
    }
]

const SideNav = ({ isSideNavOpen, setIsSideNavOpen }: { isSideNavOpen: boolean, setIsSideNavOpen: any }) => {


    return (
        <div className={`${styles.side_Nav} ${isSideNavOpen ? '' : styles.close}`} onMouseEnter={() => setIsSideNavOpen(!isSideNavOpen)} onMouseLeave={() => setIsSideNavOpen(!isSideNavOpen)} >
            <div>
                <div className={styles.user_info + " flex items-center justify-between"}>
                    <div className={`${styles.avatar_logo} flex items-center gap-[0.6vw]`}>
                        <div className={styles.avatar + " " + styles.active}>

                        </div>
                        <div className="flex flex-col">
                            <h6>John Doe</h6>
                            <p>Content Writer</p>
                        </div>
                    </div>
                    <div className={styles.logo}>
                        <Image src={logo_image} alt='logo' />
                        <Image src={logo_white_image} alt='logo' />
                    </div>
                </div>
                <div className={styles.line}></div>

                <CustomSelectInput options={rols} icon={rolsIcon} theme="dark" whenSideNavClosed={!isSideNavOpen}/>

                <div className={styles.line}></div>
                <ul className={styles.side_nav_links + " space-y-[0.5vw]"}>
                    {sideNavLinks.map(ele => (
                        <li key={ele.name}>
                            <Link href={ele.path} >
                                {ele.icon}
                                <p>{ele.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.logo_toggle_side_nav}>
                <Image src={logo_text_image} alt='logo' />
                {/* <button onClick={() => setIsSideNavOpen(!isSideNavOpen)}>
                    <svg viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-0.000110561 1.39996C-0.000110629 0.626759 0.62665 -1.71737e-06 1.39985 -1.78496e-06C2.17304 -1.85256e-06 2.7998 0.626759 2.7998 1.39996L2.7998 23.7993C2.7998 24.5724 2.17304 25.1992 1.39985 25.1992C0.626652 25.1992 -0.000108535 24.5724 -0.000108603 23.7993L-0.000110561 1.39996Z" fill="#FFFFFB" />
                        <path d="M16.3893 4.60971C16.936 5.1564 16.936 6.04285 16.3893 6.58953L11.7794 11.1995L26.5991 11.1994C27.3722 11.1994 27.999 11.8262 27.999 12.5994C27.999 13.3726 27.3722 13.9994 26.5991 13.9994L11.7794 13.9994L16.3893 18.6093C16.936 19.156 16.936 20.0424 16.3893 20.5891C15.8426 21.1358 14.9562 21.1358 14.4095 20.5891L7.40972 13.5893C6.86304 13.0426 6.86304 12.1562 7.40972 11.6095L14.4095 4.60971C14.9562 4.06303 15.8426 4.06303 16.3893 4.60971Z" fill="#FFFFFB" />
                    </svg>
                </button> */}
            </div>
        </div>
    )
}

export default SideNav
