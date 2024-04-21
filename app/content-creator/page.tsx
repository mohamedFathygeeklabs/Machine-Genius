
import CustomSelectInput from "../_components/CustomSelectInput/CustomSelectInput";
import CustomBtn from "../_components/Button/CustomBtn";
import ArticlePreview from "../_components/ArticlePreview/ArticlePreview";
import TitleOfPage from "../_components/TitleOfPage/TitleOfPage";
import TopicColapse from "../_components/TopicCollapse/TopicCollapse";
import ArticleWithChecked from "../_components/ArticleWithCheck/ArticleWithCheck";

const ReloadIcon = (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M0.754732 6.49635C0.310457 6.55953 0.00154495 6.97089 0.0646763 7.41516C0.257889 8.77361 0.876039 10.0362 1.83056 11.0219C2.78517 12.0075 4.02716 12.6659 5.37876 12.9026C6.73034 13.1392 8.12216 12.9421 9.35487 12.3394C9.64191 12.1991 9.91688 12.0385 10.178 11.8593C10.622 11.5546 11.2322 11.5579 11.613 11.9387C12.1248 12.4506 13 12.088 13 11.3642V9.12498C13 8.57269 12.5523 8.12498 12 8.12498H9.76078C9.03693 8.12498 8.67441 9.00013 9.18626 9.51201C9.50975 9.83548 9.49955 10.3701 9.11337 10.6153C8.96152 10.7117 8.80392 10.8 8.64114 10.8796C7.71661 11.3316 6.67275 11.4794 5.65905 11.3019C4.64539 11.1244 3.71386 10.6307 2.99796 9.89137C2.28199 9.15207 1.81838 8.20527 1.67351 7.18636C1.61029 6.7421 1.19893 6.43317 0.754732 6.49635ZM3.64512 0.660543C3.35608 0.801857 3.07927 0.963766 2.81654 1.14447C2.37444 1.44855 1.76644 1.44537 1.38702 1.06594C0.875144 0.554093 0 0.916605 0 1.64047V3.875C0 4.42729 0.447716 4.875 1 4.875H3.23456C3.95842 4.875 4.32096 3.99983 3.80908 3.48799C3.48674 3.16564 3.49674 2.63303 3.88124 2.38813C4.03473 2.29037 4.19413 2.20093 4.35882 2.1204C5.2834 1.6684 6.32725 1.52056 7.34095 1.69807C8.35464 1.87558 9.28615 2.36934 10.0021 3.10861C10.718 3.84788 11.1816 4.79476 11.3265 5.81363C11.3897 6.25789 11.801 6.56681 12.2453 6.50363C12.6896 6.44045 12.9985 6.02909 12.9353 5.58483C12.7421 4.22635 12.124 2.96385 11.1694 1.97815C10.2148 0.992452 8.97283 0.334114 7.62124 0.0974319C6.26966 -0.139249 4.87784 0.0578646 3.64512 0.660543Z" />
  </svg>
);
const PenIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.15328 12.1742L0.0402878 15.1421C-0.00245068 15.2563 -0.0114093 15.3804 0.0144821 15.4996C0.0403735 15.6188 0.100021 15.728 0.186299 15.8142C0.272578 15.9004 0.381843 15.9599 0.501043 15.9857C0.620243 16.0114 0.744342 16.0023 0.858517 15.9595L3.82566 14.8465C4.16527 14.7193 4.47372 14.5209 4.73028 14.2646L13.3251 5.66993C13.3251 5.66993 13.0252 4.77125 12.1274 3.87256C11.2295 2.97472 10.33 2.67488 10.33 2.67488L1.73519 11.2696C1.47889 11.5261 1.28048 11.8346 1.15328 12.1742ZM11.5285 1.47635L12.7 0.30493C12.91 0.09487 13.1904 -0.0389586 13.4835 0.0101684C13.896 0.0779297 14.527 0.282907 15.1216 0.87836C15.7171 1.47381 15.9221 2.10399 15.9898 2.51649C16.039 2.80956 15.9051 3.08992 15.6951 3.29998L14.5228 4.4714C14.5228 4.4714 14.2238 3.57356 13.3251 2.67573C12.4272 1.7762 11.5285 1.47635 11.5285 1.47635Z"/>
</svg>
)

const PlusIcon = (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.58333 10.0833C4.58333 10.5896 4.99373 11 5.5 11C6.00628 11 6.41667 10.5896 6.41667 10.0833V6.41667H10.0833C10.5896 6.41667 11 6.00628 11 5.5C11 4.99373 10.5896 4.58333 10.0833 4.58333H6.41667V0.916667C6.41667 0.410401 6.00628 0 5.5 0C4.99373 0 4.58333 0.410401 4.58333 0.916667V4.58333H0.916667C0.41041 4.58333 0 4.99373 0 5.5C0 6.00628 0.41041 6.41667 0.916667 6.41667H4.58333V10.0833Z"/>
</svg>
)

const options = [
  "PST",
  "Street Politics",
  "Movie Myth",
  "Investorcracy",
  "Mega Projects",
  "PST Canada"
]



const contentCreator = () => {
  return (
    <div >
      <TitleOfPage title="Templates" />
      <CustomSelectInput label={''} options={[]} />
      <CustomBtn word='test' icon={PenIcon} btnColor='black'/>
      <ArticlePreview withSelect= {true}/>
    <div className="flex flex-col">

      <div className="flex flex-col justify-center items-center w-full h-full">
        <CustomSelectInput label="Select Content Type" options={options} />
      </div>


      <div className="flex justify-between items-center">
      <CustomBtn word="test" icon={ReloadIcon} btnColor="white" />
      </div>

      {/* <TopicColapse title="Canada Hates People" date="April 16th 2024">
        <div className="space-y-[1.5vw]">
          <ArticleWithChecked article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" />
          <ArticleWithChecked article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" />
          <ArticleWithChecked article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" />
          <ArticleWithChecked article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" />
        </div>
      </TopicColapse> */}
      <CustomBtn word="test" icon={ReloadIcon} btnColor="white" />

    </div>
    </div>
  );
};

export default contentCreator;
