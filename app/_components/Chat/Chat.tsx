"use client";
import CheckBox from "@/app/_components/CheckBox/CheckBox";
import CustomCheckBox from "@/app/_components/CustomCheckBox/CustomCheckBox";
import OptionsDropdown from "@/app/_components/OptionsDropdown/OptionsDropdown";
import { truncateText } from "@/app/_utils/text";
import styles from "@/app/_components/Chat/Chat.module.css";
import { TextareaAutosize } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { globalContext } from "@/app/_context/store";
import useChat from "@/app/_hooks/useChat";

const files = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 10.7777V13.2C22 17.3483 22 19.4226 20.7112 20.7112C19.4226 22 17.3484 22 13.2 22H8.8C4.65166 22 2.57747 22 1.28873 20.7112C0.216975 19.6395 0.036531 18.0245 0.00614896 15.1251H9.56307L7.07731 16.9329C6.70882 17.2008 6.62736 17.7168 6.89534 18.0853C7.16333 18.4538 7.6793 18.5352 8.04779 18.2673L12.5853 14.9673C12.7987 14.8121 12.925 14.564 12.925 14.3001C12.925 14.0361 12.7987 13.7881 12.5853 13.6329L8.04779 10.3329C7.6793 10.0649 7.16333 10.1463 6.89534 10.5148C6.62736 10.8833 6.70882 11.3993 7.07731 11.6673L9.56307 13.4751H1.10149e-05L0 13.2L3.30448e-05 5.44473C3.30448e-05 4.47398 3.30527e-05 3.98853 0.0763181 3.58423C0.412137 1.80434 1.80436 0.412104 3.58425 0.076285C3.98857 7.86781e-09 4.47396 0 5.44475 0C5.87008 0 6.08276 0 6.28715 0.019118C7.16834 0.101519 8.00419 0.447744 8.68556 1.01256C8.84356 1.14357 8.99393 1.29396 9.29478 1.59473L9.9 2.2C10.7974 3.09736 11.2461 3.54604 11.7833 3.84497C12.0786 4.00918 12.3916 4.13886 12.7164 4.23146C13.3077 4.4 13.9423 4.4 15.2112 4.4H15.6223C18.518 4.4 19.9658 4.4 20.9068 5.24641C20.9934 5.32426 21.0758 5.40665 21.1537 5.49321C22 6.43429 22 7.88209 22 10.7777Z"
      fill="#2A2B2A"
    />
  </svg>
);

interface ProfileImageFrameProps {
  reversed?: boolean;
}

function ProfileImageFrame({ reversed }: ProfileImageFrameProps) {
  return reversed ? (
    <div
      className={`[background-color:var(--dark)] flex items-center justify-center ${styles.chat__chat__aside__menu__profile} group-hover:[background-color:var(--white)] shrink-0`}
    >
      {/* <img src="/images/profile.png" alt="profile" /> */}
    </div>
  ) : (
    <div
      className={`[background-color:var(--dark)] flex items-center justify-center ${styles.chat__chat__aside__menu__profile_reversed} group-hover:[background-color:var(--white)] shrink-0`}
    >
      {/* <img src="/images/profile.png" alt="profile" /> */}
    </div>
  );
}

interface ChatProps {
  children: React.ReactNode;
}

interface Message {
  text: string;
  sender: {
    _id: string;
  };
}

function Chat() {
  const { authState } = useContext(globalContext);
  // const messagesApi = [
  //   {
  //     name: "John Doe",
  //     message: "Hello, how can I help you today?",
  //     time: "12:00 PM",
  //   },
  //   {
  //     name: "John Doe",
  //     message:
  //       "Hello, how can I help you today? lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     time: "12:00 PM",
  //   },
  //   {
  //     name: "John Doe",
  //     message: "Hello, how can I help you today?",
  //     time: "12:00 PM",
  //   },
  //   {
  //     name: "John Doe",
  //     message: "Hello, how can I help you today?",
  //     time: "12:00 PM",
  //   },
  //   {
  //     name: "John Doe",
  //     message:
  //       "Hello, how can I help you today? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     time: "12:00 PM",
  //   },
  //   {
  //     name: "John Doe",
  //     message: "Hello, how can I help you today?",
  //     time: "12:00 PM",
  //   },
  //   {
  //     name: "John Doe",
  //     message: "Hello, how can I help you today?",
  //     time: "12:00 PM",
  //   },
  //   {
  //     name: "John Doe",
  //     message: "Hello, how can I help you today?",
  //     time: "12:00 PM",
  //   },
  // ];
  const ref = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  // const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [toggleCreateGroup, setToggleCreateGroup] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // const [currentConversation, setCurrentConversation] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userId, setUserId] = useState(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("decodedToken");
      return token ? JSON.parse(token)._id : null;
    } else {
      return authState?.decodedToken?._id || null;
    }
  });

  const initialRef = useRef(true);

  const {
    messages,
    sendMessage,
    setMessages,
    currentConversation,
    setCurrentConversation,
    conversation,
    setConversation,
    handleUserSeenMessage,
  } = useChat();
  // const { sendMessage } = useChat();
  const AddMessage = (message: string) => {
    setMessages((prev) => [...prev, message]);
  };
  useEffect(() => {
    console.log(userId);
  }, [userId]);

  useEffect(() => {
    setIsLoaded(false);
    if (textareaRef.current) {
      textareaRef.current.value = "";
    }
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight || 0;
    }
    // if (window.localStorage.getItem("decodedToken")) {
    //   setUserId(window.localStorage.getItem("decodedToken")?._id);
    // }

    /*
      fetch messages
    */
    async function fetchMessages() {
      const response = await fetch(
        `https://api.machinegenius.io/user/conversation/all-messages/${currentConversation?._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        console.log(data.messages);
        setMessages(data.messages.reverse());
      } else {
        console.log(data.message);
      }
    }

    try {
      if (currentConversation._id) fetchMessages();
    } catch (error) {
      console.log(error);
    }
  }, [currentConversation]);

  useEffect(() => {
    console.log(messages);
    setIsLoaded(true);
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight || 0;
    }
  }, [messages]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight || 0;
    }
    const handleScroll = () => {
      if (ref.current) {
        var limit = Math.max(
          ref.current.scrollHeight - ref.current.clientHeight || 0,
          0
        );

        if (ref.current.scrollTop < limit - 11) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    /*
      fetch conversation
    */
    async function fetchConversation() {
      const response = await fetch(
        "https://api.machinegenius.io/user/conversation/all",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        setConversation(data.result);
      } else {
        console.log(data.message);
      }
    }

    try {
      fetchConversation();
    } catch (error) {
      console.log(error);
    }

    ref.current?.addEventListener("scroll", handleScroll);

    return () => {
      ref.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(
      `----------------------/n/n/n/n/n/n/n/n------------------------------------`
    );
    console.log(conversation);

    console.log(
      `----------------------/n/n/n/n/n/n/n/n------------------------------------`
    );
    if (conversation.length > 0 && initialRef.current) {
      setCurrentConversation(conversation[0]);
      initialRef.current = false;
    }
  }, [conversation]);

  useEffect(() => {
    const uncheckOnGroupChange = () => {
      document.querySelectorAll("#chat-list input").forEach((checkbox) => {
        (checkbox as HTMLInputElement).checked = false;
      });
    };
    if (toggleCreateGroup) {
      uncheckOnGroupChange();
    }
  }, [toggleCreateGroup]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (ref.current) {
  //       ref.current.scrollTop = ref.current.scrollHeight || 0;
  //     }
  //   }, 200);
  // }, [isLoaded]);

  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.scrollTop = ref.current.scrollHeight || 0;
  //   }
  // });

  useEffect(() => {
    if (messages.length > 0) {
      handleUserSeenMessage();
    }
  }, [messages, handleUserSeenMessage]);

  return (
    <div className="flex gap-[22px] h-[85vh] py-[1.5vw]">
      {/* 
        chat aside menu 
      */}
      <div
        className={`flex flex-col h-full ${styles.chat__chat__aside} ${
          toggleCreateGroup ? styles.chat__chat__aside__create_group : ""
        }`}
      >
        {/* <div>
          <h2 className="mb-5 text-2xl font-semibold">Chats</h2>
          <Dropdown title="Brand" items={["All", "Unread", "Read"]} />
        </div> */}
        <div
          className={`flex flex-col border-2 [border-color:#DBDBD7] rounded-[20px] h-[50vh] overflow-hidden shrink-0 grow py-[--21px] ${styles.chat__chat__aside__menu}`}
        >
          <div className="flex justify-between items-center mx-5">
            <h2 className="text-[--24px] font-semibold">Chats</h2>
            <button
              className="flex flex-col gap-1 items-center"
              onClick={() => setToggleCreateGroup(!toggleCreateGroup)}
            >
              {toggleCreateGroup ? (
                <>
                  <svg
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[--26px] h-[--26px]"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26.5 13C26.5 20.1796 20.6796 26 13.5 26C6.32029 26 0.5 20.1796 0.5 13C0.5 5.82029 6.32029 0 13.5 0C20.6796 0 26.5 5.82029 26.5 13ZM18.7394 9.06057C19.1202 9.44133 19.1202 10.0587 18.7394 10.4394L12.2394 16.9394C11.8586 17.3202 11.2414 17.3202 10.8606 16.9394L8.26057 14.3394C7.87981 13.9586 7.87981 13.3414 8.26057 12.9606C8.64133 12.5798 9.25867 12.5798 9.63943 12.9606L11.55 14.8711L14.4552 11.9658L17.3606 9.06057C17.7414 8.67981 18.3586 8.67981 18.7394 9.06057Z"
                      fill="#5FA85B"
                    />
                  </svg>
                  <span className="text-[#5FA85B] font-semibold text-[--9px]">
                    Create Group
                  </span>
                </>
              ) : (
                <>
                  <svg
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[--27px] h-[--26px]"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.97848 4.5221C12.9149 4.5221 15.3063 6.912 15.3063 9.8499V11.3721C15.3063 13.0131 14.5452 14.4638 13.3746 15.4426C14.6411 15.6298 15.8954 15.9129 17.1193 16.3118C18.7663 16.8476 19.873 18.4064 19.873 20.1889V22.8848L19.5122 23.1085C17.5151 24.3507 14.2377 25.8333 9.97848 25.8333C7.62664 25.8333 4.06158 25.3599 0.443229 23.1085L0.0839844 22.8848V20.3366C0.0839844 18.4444 1.28502 16.7974 3.0706 16.2357C4.21989 15.8764 5.392 15.61 6.57326 15.435C5.40874 14.4562 4.65068 13.0085 4.65068 11.3721V9.8499C4.65068 6.912 7.04058 4.5221 9.97848 4.5221ZM16.0065 0C18.9429 0 21.3343 2.3899 21.3343 5.32781V6.85004C21.3343 8.491 20.5732 9.94322 19.4026 10.9205C20.6691 11.1077 21.9219 11.3924 23.1473 11.7897C24.7944 12.3285 25.901 13.8858 25.901 15.6683V18.3642L25.5418 18.588C24.4975 19.238 23.0956 19.9473 21.3952 20.4816V20.1893C21.3952 17.7447 19.8669 15.6044 17.5912 14.8646C17.0959 14.7031 16.5953 14.5584 16.0902 14.4307C16.5713 13.4915 16.8285 12.4473 16.8285 11.3726V9.85035C16.8285 6.48014 14.3793 3.68837 11.1719 3.12057C12.0152 1.28476 13.8571 0 16.0065 0Z"
                      fill="#2A2B2A"
                    />
                  </svg>
                  <span className="text-[#2A2B2A] font-semibold text-[--9px]">
                    New Group
                  </span>
                </>
              )}
            </button>
          </div>
          <div className="h-min flex items-center justify-between border mx-5 my-[--17px] [border-color:var(--dark)] rounded-[--7px] text-sm placeholder:[color:var(--dark)] py-[--8px] px-[--15px]">
            <input
              type="text"
              placeholder="Search"
              className="outline-none grow"
            />
            <svg
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[--20px] h-[--20px] ml-[--5px]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.246094 10.377C0.246094 4.92206 4.66815 0.5 10.123 0.5C15.5779 0.5 20 4.92206 20 10.377C20 15.8318 15.5779 20.2539 10.123 20.2539C4.66815 20.2539 0.246094 15.8318 0.246094 10.377ZM7.15996 9.88311C7.15996 8.51939 8.26549 7.41387 9.6292 7.41387C10.9929 7.41387 12.0984 8.51939 12.0984 9.88311C12.0984 11.2468 10.9929 12.3523 9.6292 12.3523C8.26549 12.3523 7.15996 11.2468 7.15996 9.88311ZM9.6292 5.43848C7.1745 5.43848 5.18457 7.42841 5.18457 9.88311C5.18457 12.3378 7.1745 14.3277 9.6292 14.3277C10.4989 14.3277 11.3103 14.0779 11.9954 13.6462L13.3754 15.0261C13.7611 15.4118 14.3865 15.4118 14.7722 15.0261C15.1579 14.6404 15.1579 14.015 14.7722 13.6293L13.3923 12.2493C13.824 11.5642 14.0738 10.7528 14.0738 9.88311C14.0738 7.42841 12.0839 5.43848 9.6292 5.43848Z"
                fill="#323232"
              />
            </svg>
          </div>

          <div className="h-[1px] bg-[#DBDBD7] mx-5"></div>
          <ul
            className="flex flex-col relative max-h-[90%] overflow-y-auto [border-color:#DBDBD7] w-full"
            id="chat-list"
          >
            {conversation.map((message, index) => (
              <li
                className={`cursor-pointer ${styles.chat__chat__aside__menu__item} group transition-colors duration-300 ease-in-out hover:[background-color:var(--dark)]`}
                key={index}
                onClick={() => setCurrentConversation(message)}
              >
                <div className="flex items-center relative mx-5 gap-5 py-[23px] group-hover:border-transparent">
                  <CustomCheckBox />
                  <ProfileImageFrame />
                  <div className="flex flex-col justify-center gap-1 w-[80%]">
                    <h3 className="font-bold text-xl transition-colors duration-100">
                      {message.type === "group"
                        ? message.groupName
                        : message.members[
                            userId === message.members[0]?._id ? 1 : 0
                          ].firstName +
                          " " +
                          message.members[
                            userId === message.members[0]?._id ? 1 : 0
                          ].lastName}
                    </h3>
                    <p className="text-base [color:#828282] overflow-hidden whitespace-nowrap text-ellipsis">
                      {truncateText(message.lastMessage || "Message", 60)}
                    </p>
                  </div>
                  <div className="absolute flex justify-center items-center right-4 top-0 bottom-0">
                    {message.lastSeen < message.updatedAt &&
                    message?._id !== currentConversation?._id ? (
                      <div className="w-3 h-3 rounded-full bg-[#E9313E]"></div>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="h-[1px] bg-[#DBDBD7] mx-5"></div>
        </div>
      </div>

      {/*
        chat main section / chat Box
      */}
      <div className={`flex flex-col h-full ${styles.chat__box__container}`}>
        <div
          className={`flex justify-between items-center ${styles.chat__box__header}`}
        >
          <div className="flex w-full items-center gap-5">
            <ProfileImageFrame />
            <div>
              <h3 className="font-bold text-2xl">
                {currentConversation?.type === "group"
                  ? currentConversation?.groupName
                  : currentConversation?.members[
                      userId === currentConversation?.members[0]?._id ? 1 : 0
                    ].firstName +
                    " " +
                    currentConversation?.members[
                      userId === currentConversation?.members[0]?._id ? 1 : 0
                    ].lastName}
              </h3>
            </div>
          </div>
          <OptionsDropdown
            icon={files}
            options={["Send To Sales Team", "Escalate To Manager"]}
            openIndecator
          />
        </div>
        <div
          className="flex-1 overflow-y-auto"
          ref={ref}
          onScroll={() => {
            console.log(scrolled);
          }}
        >
          {isLoaded ? (
            <div className="flex flex-col gap-8 p-5">
              {messages?.map((message, index: number) => (
                <div key={message._id || index}>
                  {message.createdAt > currentConversation?.lastSeen ? (
                    <div className="text-center text-[#FFFFFB] font-bold  text-[--16px] bg-[--dark] p-[--10px] my-[--10px]">
                      1 New Message
                    </div>
                  ) : null}
                  <div className="text-center text-[#828282] text-sm p-[--10px]">
                    1 New Message
                  </div>
                  <div
                    className={`flex gap-5 ${
                      message.sender._id == userId
                        ? "items-end flex-row-reverse"
                        : ""
                    }`}
                  >
                    {message.sender._id == userId ? (
                      <ProfileImageFrame reversed />
                    ) : (
                      <ProfileImageFrame />
                    )}
                    <div
                      className={`p-3 rounded-[20px] max-w-[60%] ${
                        message.sender._id == userId
                          ? "bg-[#CEEAE9] self-end"
                          : "self-start"
                      } ${styles.chat__box__message__container}`}
                    >
                      <p>{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center">
              {/* Add a sspinner loading animation */}
              <div className="w-10 h-10 border-4 border-t-transparent border-[#DBDBD7] rounded-full animate-spin"></div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-[--38px] px-[--18px] py-[--21px] border-t border-[var(--dark)]">
          {/* <textarea
            placeholder="Type a message"
            className="flex-1 resize-none border md:max-w-[90%] lg:max-w-[85%] text-3xl:max-w-[80%] [border-color:var(--dark)] rounded-[12px] py-2 px-4 placeholder:[color:var(--dark)] bg-[#DBDBD73D]"
            rows={1}
          /> */}
          <TextareaAutosize
            className="flex-1 resize-none border [border-color:var(--dark)] rounded-[12px] py-2 px-4 placeholder:[color:var(--dark)] bg-[#DBDBD73D]"
            placeholder="Type your reply here..."
            maxRows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage({
                  conversationId: currentConversation._id,
                  text: message,
                });
                AddMessage({ text: message, sender: { _id: userId } });
                setMessage("");
              }
            }}
            ref={textareaRef}
          />
          <button>
            <svg
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[--27px] h-[--28px]"
            >
              <path
                d="M8.5526 19.8417C8.88102 20.1708 9.37365 20.116 9.70208 19.8417L15.1757 14.3566C15.5589 13.9727 16.2157 13.9178 16.7084 14.3566C17.201 14.7954 17.1463 15.5633 16.7084 16.0021L9.97576 22.6391C8.49787 24.1201 6.03472 24.1201 4.55683 22.6391L4.50209 22.5842C3.0242 21.1033 3.0242 18.635 4.50209 17.154L16.3799 5.25139C17.8578 3.77042 20.321 3.77042 21.7989 5.25139L21.8536 5.30624C23.3315 6.78721 23.3315 9.2555 21.8536 10.7365L21.7989 10.7913C21.5252 11.0656 21.4705 11.4495 21.6894 11.7786C22.0178 12.382 22.2915 13.0402 22.4557 13.6984C22.5652 14.1372 23.0578 14.2469 23.3862 13.9727C23.4744 13.8843 23.5603 13.796 23.6413 13.7113C24.0268 13.3081 24.4175 12.9073 24.7631 12.4696C26.9735 9.66985 26.8011 5.58616 24.246 2.98673C24.2214 2.96174 24.1876 2.94765 24.1526 2.94765C24.1175 2.94765 24.0838 2.93348 24.0588 2.90886C21.2641 0.150322 16.7501 0.163251 13.9715 2.94765L2.09368 14.7954C-0.697893 17.5928 -0.697893 22.1454 2.09368 24.9428L2.20315 25.0525C4.99472 27.8499 9.48313 27.8499 12.2747 25.0525L19.062 18.3059C20.8136 16.5507 20.7589 13.6984 18.9526 11.9432C17.201 10.2428 14.3547 10.3525 12.6579 12.1077L7.29366 17.4831C6.96524 17.8122 6.96524 18.3607 7.29366 18.6898L8.5526 19.8417Z"
                fill="#2A2B2A"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              sendMessage({
                conversationId: currentConversation._id,
                text: message,
              });
              AddMessage({ text: message, sender: { _id: userId } });
              setMessage("");
            }}
          >
            <svg
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[--25px] h-[--24px]"
            >
              <path
                d="M24.7668 11.9598C24.7679 12.4633 24.6279 12.9567 24.3633 13.3828C24.0986 13.8088 23.7201 14.1499 23.2718 14.3664L4.05915 23.5942C3.70751 23.7886 3.31797 23.9021 2.9182 23.9266C2.48072 23.9257 2.05042 23.8139 1.66647 23.6013C1.28252 23.3886 0.957122 23.0821 0.719894 22.7094C0.482667 22.3367 0.341148 21.9098 0.308221 21.4675C0.275295 21.0252 0.352007 20.5816 0.531374 20.177L3.52146 13.2894H10.7868C11.1347 13.2894 11.4682 13.1493 11.7142 12.9C11.9601 12.6506 12.0983 12.3124 12.0983 11.9598C12.0983 11.6071 11.9601 11.2689 11.7142 11.0196C11.4682 10.7702 11.1347 10.6301 10.7868 10.6301H3.52146L0.531374 3.80902C0.314713 3.31333 0.252663 2.76235 0.353541 2.22991C0.454419 1.69746 0.713404 1.20901 1.09579 0.829993C1.47817 0.450981 1.96568 0.199525 2.49298 0.109327C3.02028 0.019128 3.56217 0.0944963 4.04603 0.325331L23.2586 9.55311C23.7094 9.7677 24.0907 10.108 24.3577 10.5342C24.6248 10.9604 24.7667 11.4548 24.7668 11.9598Z"
                fill="#2A2B2A"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
