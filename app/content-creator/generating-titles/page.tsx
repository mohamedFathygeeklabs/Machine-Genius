import CustomBtn from '@/app/_components/Button/CustomBtn'
import LogoAndTitle from '@/app/_components/LogoAndTitle/LogoAndTitle'
import React from 'react'

const GeneratingTitles = () => {
    return (
        <div className="flex flex-col h-full">

            <div className="flex flex-col justify-center items-center min-w-[24rem] py-[2vw] m-auto h-full">
                <LogoAndTitle needTxt={false} title='Generating Titles..' />
                <CustomBtn word="Generated Titles" btnColor="white" href="/content-creator/generated-titles" />
            </div>

        </div>
    )
}

export default GeneratingTitles
