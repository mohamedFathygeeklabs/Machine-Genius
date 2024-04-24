import ArticlePreview from "@/app/_components/ArticlePreview/ArticlePreview";
import styles from "./commentsOnArticle.module.css";
import CustomBtn from "@/app/_components/Button/CustomBtn";
import TopicColapse from "@/app/_components/TopicCollapse/TopicCollapse";

const CommentsOnArticle = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center m-auto h-[80vh] py-[1.4vw] w-full gap-[2vw]">
        <div className="w-7/12 flex flex-col gap-[1vw]">
          <div className={`${styles.yourArticle}`}>
            <h3>Articles</h3>
          </div>
          {/* display your article  */}
          <ArticlePreview
            yourNewArticle={false}
            height="h-[65vh]"
            withEdit={false}
          />
        </div>
        {/* comments part */}
        <div className={`w-5/12`}>
          <div className="flex flex-col gap-[1vw]">
            <div className={` ${styles.commentsHeader}`}>
              <h2>Comments</h2>
            </div>
            {/* return comments on article */}
            <div className={`${styles.commentsParent}`}>
              <TopicColapse forComments={true}
                replyTxt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"
                date="April 16th 2024"
                svgBtn={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_623_12236)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM16.4485 8.75147C16.9171 9.2201 16.9171 9.97992 16.4485 10.4485L12.0292 14.8679C11.3503 15.5467 10.2497 15.5467 9.57082 14.8679L7.55147 12.8485C7.08284 12.3799 7.08284 11.6201 7.55147 11.1515C8.0201 10.6829 8.7799 10.6829 9.24853 11.1515L10.8 12.703L14.7515 8.75147C15.2201 8.28284 15.9799 8.28284 16.4485 8.75147Z"
                        fill="#FFFFFB"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_623_12236"
                        x="0"
                        y="0"
                        width="24"
                        height="28"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_623_12236"
                        />
                      </filter>
                    </defs>
                  </svg>
                }
                children={
                  <div className="flex flex-col gap-[0.2vw]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore...Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore...
                    </p>
                    <div className="flex justify-end">
                      <p>April 16th 2024</p>
                    </div>
                  </div>
                }
                replyDate="April 16th 2024"
                ownerName="John"
                ownerStatus="online"
                title={"Emily"}
              />
                            <TopicColapse forComments={true}
                date="April 16th 2024"
                svgBtn={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_623_12236)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM16.4485 8.75147C16.9171 9.2201 16.9171 9.97992 16.4485 10.4485L12.0292 14.8679C11.3503 15.5467 10.2497 15.5467 9.57082 14.8679L7.55147 12.8485C7.08284 12.3799 7.08284 11.6201 7.55147 11.1515C8.0201 10.6829 8.7799 10.6829 9.24853 11.1515L10.8 12.703L14.7515 8.75147C15.2201 8.28284 15.9799 8.28284 16.4485 8.75147Z"
                        fill="#FFFFFB"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_623_12236"
                        x="0"
                        y="0"
                        width="24"
                        height="28"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_623_12236"
                        />
                      </filter>
                    </defs>
                  </svg>
                }
                children={
                  <div className="flex flex-col gap-[0.2vw]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore...Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore...
                    </p>
                    <div className="flex justify-end">
                      <p>April 16th 2024</p>
                    </div>
                  </div>
                }

                title={"Manar"}
              />
              <TopicColapse forComments={true}
                date="April 16th 2024"
                svgBtn={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_i_623_12236)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM16.4485 8.75147C16.9171 9.2201 16.9171 9.97992 16.4485 10.4485L12.0292 14.8679C11.3503 15.5467 10.2497 15.5467 9.57082 14.8679L7.55147 12.8485C7.08284 12.3799 7.08284 11.6201 7.55147 11.1515C8.0201 10.6829 8.7799 10.6829 9.24853 11.1515L10.8 12.703L14.7515 8.75147C15.2201 8.28284 15.9799 8.28284 16.4485 8.75147Z"
                        fill="#FFFFFB"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_i_623_12236"
                        x="0"
                        y="0"
                        width="24"
                        height="28"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect1_innerShadow_623_12236"
                        />
                      </filter>
                    </defs>
                  </svg>
                }
                children={
                  <div className="flex flex-col gap-[0.2vw]">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore...Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore...
                    </p>
                    <div className="flex justify-end">
                      <p>April 16th 2024</p>
                    </div>
                  </div>
                }

                title={"Ash"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* buttons to move to last or next page */}
      <div className="flex justify-between items-center">
        <CustomBtn
          word={"Back"}
          btnColor="white"
          href={"/content-creator/choose-articles"}
        />
        <CustomBtn
          word={"Next"}
          btnColor="black"
          href={"/content-creator/working-on-article-after-create"}
        />
      </div>
    </div>
  );
};

export default CommentsOnArticle;
