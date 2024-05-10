import React, { useEffect, useRef, useState } from "react";
import "./../styles/Bot.css";
import axios from "axios";
const Bot = () => {
  const [isChatVisible, setChatVisible] = useState(false);
  const [query, setQuery] = useState("");
  const chatContainerRef = useRef(null);
  const [isChatSessionEndVisible, setChatSessionEndVisible] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const toggleChat = () => {
    setChatVisible(!isChatVisible);
  };
  const [history, setHistory] = useState([
    {
      role: "bot",
      date: new Date(),
      content:
        "Hi there! 👋 I'm your virtual assistant. How can I assist you today? Whether you have questions about my portfolio, need information, or just want to chat, feel free to let me know!",
    }, 
  ]);
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const options = {
        weekday: 'long', // Full day name (e.g., Monday)
        hour: 'numeric', // 12-hour format
        minute: 'numeric', // Minutes
        hour12: true, // AM/PM format
      };

      const dateTimeString = new Date().toLocaleString('en-US', options);
      setCurrentDateTime(dateTimeString);
    };

    // Update the date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHistory([
      ...history,
      {
        role: "user",
        date: new Date(),
        content: query,
      },
    ]);
    setIsPending(true);
    const queryParams = new URLSearchParams({ query }).toString();
    axios
    .get(`https://beige-kitten-kit.cyclic.app/api/bot?${queryParams}`)
      .then((res) => {
        console.log(res.data);
        setHistory([
          ...history,
          {
            role: "user",
            date: new Date(),
            content: query,
          },
          {
            role: "bot",
            date: new Date(),
            content: res.data,
          },
        ]);
        setIsPending(false);
      })
      .catch(() =>{ setIsPending(false);
        setHistory([
          ...history,
          {
            role: "bot",
            date: new Date(),
            content: "Something went wrong.",
          }, 
        ]);
      }).finally(()=> scrollToBottom())
    setQuery("");
  };
  return (
    <>
      <div className={`chat-screen ${isChatVisible ? "show-chat" : ""}`}>
        <div className="chat-header">
          <div className="chat-header-title">Let’s chat? - Under Development</div>
          <div className="chat-header-option hide">
            <a className="dropdown-item end-chat" href="#/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#bc32ef"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-power"
              >
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                <line x1="12" y1="2" x2="12" y2="12"></line>
              </svg>
              End Chat
            </a>
          </div>
        </div>
        <div className={`chat-body `} ref={chatContainerRef}>
          <div className="chat-start">{currentDateTime}</div>
          {history.map((c,i) => (
            <div key={i} className={`chat-bubble ${c.role === "bot" ? "you" : "me"}`}>
              {c.content}
            </div>
          ))}

          {isPending && (
            <div className="chat-bubble you">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                  margin: "auto",
                  display: "block",
                  shapeRendering: "auto",
                  width: "43px",
                  height: "20px",
                }}
                viewBox="0 0 100 100"
              >
                <circle cx="0" cy="44.1678" r="15" fill="#ffffff">
                  <animate
                    attributeName="cy"
                    calcMode="spline"
                    keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                    repeatCount="indefinite"
                    values="57.5;42.5;57.5;57.5"
                    keyTimes="0;0.3;0.6;1"
                    dur="1s"
                    begin="-0.6s"
                  ></animate>
                </circle>{" "}
                <circle cx="45" cy="43.0965" r="15" fill="#ffffff">
                  <animate
                    attributeName="cy"
                    calcMode="spline"
                    keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                    repeatCount="indefinite"
                    values="57.5;42.5;57.5;57.5"
                    keyTimes="0;0.3;0.6;1"
                    dur="1s"
                    begin="-0.39999999999999997s"
                  ></animate>
                </circle>{" "}
                <circle cx="90" cy="52.0442" r="15" fill="#ffffff">
                  <animate
                    attributeName="cy"
                    calcMode="spline"
                    keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
                    repeatCount="indefinite"
                    values="57.5;42.5;57.5;57.5"
                    keyTimes="0;0.3;0.6;1"
                    dur="1s"
                    begin="-0.19999999999999998s"
                  ></animate>
                </circle>
              </svg>
            </div>
          )}
        </div>
        <form className={`chat-input }`} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a message..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="input-action-icon">
            {/* <a href="#/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-paperclip"
              >
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
              </svg>
            </a> */}
            <button disabled={isPending}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-send"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </form>
        <div
          className={`chat-session-end ${
            isChatSessionEndVisible ? "" : "hide"
          }`}
        >
          <h5>This chat session has ended</h5>
          <p>
            Thank you for chatting with us, If you can take a minute and rate
            this chat:
          </p>
          <div className="rate-me">
            <div className="rate-bubble great">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-thumbs-up"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </span>
              Great
            </div>
            <div className="rate-bubble bad">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-thumbs-down"
                >
                  <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                </svg>
              </span>
              Bad
            </div>
          </div>
          <a className="transcript-chat" href="#/">
            Need a Transcript?
          </a>
          <div className="powered-by">Powered by css3transition</div>
        </div>
      </div>
      <div className="chat-bot-icon" onClick={toggleChat}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-message-square animate"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x "
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </>
  );
};

export default Bot;
