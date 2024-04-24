import CustomBtn from '@/app/_components/Button/CustomBtn'
import styles from './working-on-article.module.css'
import LogoAndTitle from '@/app/_components/LogoAndTitle/LogoAndTitle'

// loading page for final article page while collecting all wanted parts together to form the article
const WorkingOnArticle = () => {
    return (
        <div className="flex flex-col h-full">

            <div className="flex flex-col justify-center items-center w-[40vw] min-w-[24rem] py-[2vw] m-auto h-full">
                <LogoAndTitle needTxt={true} textNeeded='Hold on tight.' title='Genius is working on your article..'/>
            </div>


            <div className="flex justify-between items-center">
                <CustomBtn word="Back" btnColor="white" href="/content-creator/choose-content" />
                <CustomBtn word="Next" btnColor="black" href="/content-creator/choose-articles" />
            </div>

        </div>
    )
}

export default WorkingOnArticle