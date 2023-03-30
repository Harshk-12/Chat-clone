import React, { useState } from 'react'
import './chat.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VideocamIcon from '@mui/icons-material/Videocam';
import CallIcon from '@mui/icons-material/Call';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';

function Chat() {
    let[value, setvalue]=useState('')
    const [messages, setMessages] = useState([]);
    function handlechange(e){
        setvalue(e.target.value)
        console.log(value)
    }
    function handleclick() {
        const newMessage = { text: value, position: messages.length % 2 === 0 ? 'left' : 'right' };
        setMessages([...messages, newMessage]);
        setvalue('');
      }




  return (
    <div className='container'>
        <div className='chat-box'>
         {/* header */}
         <header >

            <div className='left-content'>
           <ArrowBackIcon/>
           <div className='img'> <img src="dp.jpeg" alt="img" /></div>

           <div >
            <p className='name'>Harsh</p>
            <p className='time'>Online </p>
           </div>

            </div>
            {/*  */}

            <div className='right-content'>
              <VideocamIcon/>
              <CallIcon></CallIcon>
              <MoreVertIcon></MoreVertIcon>
            </div>

         </header>


         {/* <div className='msgbox'>
            <div className='msg'>
                <p>{value}</p>
            </div>
         </div> */}
           <div className='msgbox'>

          {messages.map((message, index) => (
            <div className={`msg ${message.position}`} key={index}>
            <p>{message.text}</p>
            </div>
          ))}
        </div>

         <div className='inputbox'>
            <div className='inputmsg'>
            <SentimentVerySatisfiedIcon></SentimentVerySatisfiedIcon>
            {/* input */}
            <input type="text" value={value} onChange={handlechange} />
            <div className='input-icons'>
            <AttachFileIcon></AttachFileIcon>
            <CurrencyRupeeIcon></CurrencyRupeeIcon>
            <CameraAltIcon></CameraAltIcon>
            </div>
            </div>
            <div className='mic' onClick={handleclick}><SendIcon/></div>
         </div>

        </div>







    </div> 
  )
}

export default Chat