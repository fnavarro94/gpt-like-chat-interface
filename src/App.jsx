import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowUpFromBracket, faAngleDown } from '@fortawesome/free-solid-svg-icons'; 
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import './App.css'









function App() {
  const [tentativePhone, setTentativePhone] = useState("");
  const [phone, setPhone] = useState("");
  const [conversationHistory, setConversationHistory] = useState([]);
  const [textInputContent, setTextInputContent] = useState();
  const chatContainerRef = useRef(null);

  useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [conversationHistory]);

    const handleKeyPress = (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault(); // Prevents a new line in textarea
          sendMessage();
      }
  };
  
  function handleTentativePhoneChange(event) {
     
     setTentativePhone(event.target.value);   

  }

  function handleTextInputChange(event){
       
       setTextInputContent(event.target.value)
       console.log(textInputContent)
  }
  
  async function getChatHistory(phone) {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/chat-history/${phone}`);
  
      console.log("Response:", response.data);
      return response
    } catch (error) {
      console.error("Error sending request:", error);
    }
       

  }

  const sendMessage = async () => {
    try {
      
      setTextInputContent("")
      setConversationHistory(prevHistory => [
        ...prevHistory, 
        {key: prevHistory.length, role: "user", text: textInputContent }
    ]);
      const response = await axios.post("http://127.0.0.1:8000/chat", {
        message: textInputContent ,
        phone_number: phone
      });
  
      console.log("Response:", response.data);
      setConversationHistory(prevHistory => [
        ...prevHistory, 
        { key: prevHistory.length, role: "assistant", text: response.data.answer }])
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };
  

  async function handlePhoneChangeClick() {
      
        var tempChatHistory = await getChatHistory(tentativePhone)
        setPhone(tentativePhone);
        setConversationHistory(tempChatHistory.data.data);
        console.log("This is tempChatHistory")
        console.log(tempChatHistory)
        console.log("this is tempChatHistory.data.data")
        console.log(tempChatHistory.data.data)
        console.log("This is conversationHistory")
        console.log(conversationHistory)
  }
  
  function makeConversationElement(obj, index) {

       return (
          
           <ChatElement  
               key={index}
               type={obj.role === "user" ? "user-message": "bot-response" }
               content={obj.text}
               />
       )
  }

  function ChatElement(props) {
      
      return(
        <div className={props.type}>{props.content}</div>
      );
  }

  return (
   // a main div

    <div className='frame'>

    
 
    <div className='left-frame'> 

    <div id='phone-number-container'>
      <p> <b>Number being used </b></p>
      <div id='current-number-container'>
           <div id='current-number'> {phone}</div>
      </div>
      <input id='phone-number-input' 
             placeholder='Enter phone' 
             type="text" 
             value={tentativePhone} 
             onChange={handleTentativePhoneChange}/>
      <button id='phone-button' onClick={handlePhoneChangeClick}>Change Number</button>
    </div>

    
     </div>
    
    
    <div className='right-frame'>

      <div className='right-frame-top-bar'>  
         
        <div className='model-drop-down-container'>
        <div className='select-model-drop-down'> ChatGPT 4o  </div>
        <FontAwesomeIcon id='model-drop-down-icon' icon={faAngleDown} /> 
        </div>
        <div className='user-icon-n-share'>
        <div className='share-button-container'><button id='share-button'><FontAwesomeIcon className='share-icon' icon={faArrowUpFromBracket} /> Share</button></div>
        <div className='user-icon'>FE</div>
        </div>
        
        
         </div>
      
      <div className='chat-container-wrapper' ref={chatContainerRef}>
      <div className='chat-container'>
        
        {conversationHistory.map((obj, index) => makeConversationElement(obj, index))}
        {/* <ChatElement type="bot-response" content="This is a bot response"/>
        <ChatElement type="user-message" content="asdfja;sdlfkja;lskdf
          ;alskdfj;alsdkfj;alsdkfjas;dlfka;dslkfj;alskdfj;alsdkfj;alskdjfa;sldkjf;alsdkfjas
          ;alsdkfj;alsdkfjkfjdkaj;lkjdf;laksdjf;laksdfj;aljkf;kdj;dlkjf;alksdjf;laksdjf;laksdjf
          ;aslkdfj;dlkjf;alskdjf;alskdjf;lkjfdka;kfjdk;fja;lksdf;lkasdjf;lsdkj" /> */}
      
      <div></div>
      </div>
      </div>
      
      <div className='input-text-container'>
      <textarea className="input-field" 
                rows="1" 
                placeholder='Ask Kora anything'
                value={textInputContent}
                onChange={handleTextInputChange}
                onKeyDown={handleKeyPress}></textarea>

      <div id='send-button-container'>
      <button id='send-button' onClick={sendMessage}>  <FontAwesomeIcon icon={faArrowUp} /> </button>
  
      </div></div>
      <div></div>

    </div>

    </div>
   // a div for the chat

   // a div for the chat window
  )
}

export default App
