'use client'
import { useState } from 'react';
import CustomBtn from '../_components/Button/CustomBtn';
import styles from './sign-in.module.css';

const SignIn = ()=>{
    const [show,setShow] = useState(false)
    return(
        <div className={`${styles.fullPage}`} onClick={()=>{setShow(true)}}>
            <div className={show ? `${styles.animatedSec} relative` :'relative'}>
            <h1>Welcome To </h1>
        {/* <div className={show ? `visible ${styles.animatedContent} ` : `hidden ${styles.animatedContent}`}> */}
          {/* <svg viewBox="0 0 362 188" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect fill="url(#pattern0_504_8554)" fill-opacity="0.5"/>
            <defs>
            <pattern id="pattern0_504_8554" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#image0_504_8554" transform="matrix(0.00176645 0 0 0.00340136 -0.00343894 0)"/>
            </pattern>
            <image id="image0_504_8554" width="570" height="294" href="data:image/png;base64,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"/>
            </defs>
            </svg>  */}
        {/* </div> */}
        <div className=' flex justify-center'>
           <CustomBtn word='Sign In' btnColor='white' href='#'/>
           </div>
            </div>
        </div>
    )
}

export default SignIn 