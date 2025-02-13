import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowUpFromBracket, faAngleDown } from '@fortawesome/free-solid-svg-icons'; 
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './App.css'

//const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />


function App() {
  const [tentativePhone, setTentativePhone] = useState("")
  const [phone, setPhone] = useState("")


  function handleTentativePhoneChange(event) {
     
     setTentativePhone(event.target.value);   

  }

  function handlePhoneChangeClick() {
        setPhone(tentativePhone);
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

      <div className="sidebar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
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
        <div className='user-icon'>FN</div>
        </div>
        
        
         </div>
      
      <div className='chat-container-wrapper'>
      <div className='chat-container'>
        
        <ChatElement type="bot-response" content="This is a bot response"/>
        <ChatElement type="user-message" content="asdfja;sdlfkja;lskdf
          ;alskdfj;alsdkfj;alsdkfjas;dlfka;dslkfj;alskdfj;alsdkfj;alskdjfa;sldkjf;alsdkfjas
          ;alsdkfj;alsdkfjkfjdkaj;lkjdf;laksdjf;laksdfj;aljkf;kdj;dlkjf;alksdjf;laksdjf;laksdjf
          ;aslkdfj;dlkjf;alskdjf;alskdjf;lkjfdka;kfjdk;fja;lksdf;lkasdjf;lsdkj" />
      

      </div>
      </div>
      
      <div className='input-text-container'>
      <textarea className="input-field" rows="1" placeholder='Ask Kora anything'></textarea>

      <div id='send-button-container'>
      <button id='send-button'>  <FontAwesomeIcon icon={faArrowUp} /> </button>
  
      </div>

      </div>

    </div>

    </div>
   // a div for the chat

   // a div for the chat window
  )
}

export default App
