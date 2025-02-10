import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; 
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './App.css'

//const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />


function App() {
  const [count, setCount] = useState(0)

  return (
   // a main div

    <div className='frame'>

    
 
    <div className='left-frame'> 
    <div id='phone-number-container'>
      <input type="text" />
      <button>Set phone</button>
    </div>

      <div className="sidebar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
       </div>
     </div>
    

    <div className='right-frame'>

      <div className='chat-container'>
        
        <div className='bot-response'>This is the bot response</div>
        <div className='user-message'> This is a user message</div>
        <div className='bot-response'> this is a longer message from the bot this is a longer
          message from the bot this is a longer message from the bot this is a 
          this is along er message from the both this is a longer mes
          sage from the bot
           this is a longer message from the bot longer message from the bot this is a longerme
        </div>
        <div className='user-message'> asdfja;sdlfkja;lskdf
          ;alskdfj;alsdkfj;alsdkfjas;dlfka;dslkfj;alskdfj;alsdkfj;alskdjfa;sldkjf;alsdkfjas
          ;alsdkfj;alsdkfjkfjdkaj;lkjdf;laksdjf;laksdfj;aljkf;kdj;dlkjf;alksdjf;laksdjf;laksdjf
          ;aslkdfj;dlkjf;alskdjf;alskdjf;lkjfdka;kfjdk;fja;lksdf;lkasdjf;lsdkj
        </div>
        <div className='bot-response'> again a shoddddddddd
          ddddddfasdkjalkj dkdkdks s ksks ks sk kss
        
          ot</div>
        <div className='user-message'> another short message from the user</div>
        <div className='bot-response'> this
                  is 
                   a 
                   message \n
                   with  \n
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
