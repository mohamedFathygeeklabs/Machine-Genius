'use client'
import CustomBtn from '@/app/_components/Button/CustomBtn'
import styles from './ChooseBrand.module.css'
import CustomSelectInput from '../../../_components/CustomSelectInput/CustomSelectInput'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const ChooseBrand = () => {

  const [SelectedValue, setSelectedValue] = useState<string | number>()

  // const handleBrandName = (value:string|number)=>{
  //   setSelectedValue(value)
  // }
  
  const router = useRouter()

  const options = [
    "PST",
    "Street Politics",
    "Movie Myth",
    "Investorcracy",
    "Mega Projects",
    "PST Canada"
  ]



  // useEffect(() => {

  //   console.log(SelectedValue);

  //   if (SelectedValue === 'Movie Myth') {
  //     router.push('/content-creator/create/movie-myth/uploud-movie')
  //   }

  // }, [SelectedValue])





  return (
    <div className="flex flex-col h-full">

      <div className="flex flex-col justify-center items-center w-[30vw] min-w-[20rem] py-[2vw] m-auto h-full ">
        <label className={styles.select_label}>For This Brand</label>
        <CustomSelectInput label="Select Content Type" options={options}  />
      </div>


      <div className="flex justify-between items-center">
        <CustomBtn word="Back" btnColor="white" href="/content-creator/create" />
        <CustomBtn word="Next" btnColor="black" href="/content-creator/create/choose-content" />
      </div>

    </div>
  )
}

export default ChooseBrand