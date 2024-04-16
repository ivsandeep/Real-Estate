import React, { useState } from 'react'
import "./chat.scss"
const Chat = () => {
    const [chat, setChat]=useState(true)
  return (
    <div className='chat'>
        <div className='messages'>
            <h1>Messages</h1>
            <div className='message'>
                <img src='/image.png' alt=''/>
                <span>John Doe</span>
                <p>Lorem epsum lorem epsun lorem sumpus...</p>
            </div>
            <div className='message'>
                <img src='/image.png' alt=''/>
                <span>John Doe</span>
                <p>Lorem epsum lorem epsun lorem sumpus...</p>
            </div>
            <div className='message'>
                <img src='/image.png' alt=''/>
                <span>John Doe</span>
                <p>Lorem epsum lorem epsun lorem sumpus...</p>
            </div>
            <div className='message'>
                <img src='/image.png' alt=''/>
                <span>John Doe</span>
                <p>Lorem epsum lorem epsun lorem sumpus...</p>
            </div>
            <div className='message'>
                <img src='/image.png' alt=''/>
                <span>John Doe</span>
                <p>Lorem epsum lorem epsun lorem sumpus...</p>
            </div>
            <div className='message'>
                <img src='/image.png' alt=''/>
                <span>John Doe</span>
                <p>Lorem epsum lorem epsun lorem sumpus...</p>
            </div>
            <div className='message'>
                <img src='/image.png' alt=''/>
                <span>John Doe</span>
                <p>Lorem epsum lorem epsun lorem sumpus...</p>
            </div>
            <div className='message'>
                <img src='/image.png' alt=''/>
                <span>John Doe</span>
                <p>Lorem epsum lorem epsun lorem sumpus...</p>
            </div>
            <div className='message'>
                <img src='/image.png' alt=''/>
                <span>John Doe</span>
                <p>Lorem epsum lorem epsun lorem sumpus...</p>
            </div>
        </div>
        { chat && <div className='chatBox'>
            <div className='top'>
                <div className='user'>
                    <img src='/image.png' alt=''/>
                    John Doe
                </div>
                <span className='close' onClick={()=>setChat(null)}>x</span>
            </div>
            <div className='center'>
                <div className='chatMessage'>
                    <p>lorem repusm lorem sepfsf lorem srepms lorems epjs.</p>
                    <span >1 hour ago</span>
                </div>
                <div className='chatMessage own' >
                    <p>lorem repusm lorem sepfsf lorem srepms lorems epjs.</p>
                    <span >1 hour ago</span>
                </div>
                <div className='chatMessage'>
                    <p>lorem repusm lorem sepfsf lorem srepms lorems epjs.</p>
                    <span >1 hour ago</span>
                </div>
                <div className='chatMessage own'>
                    <p>lorem repusm lorem sepfsf lorem srepms lorems epjs.</p>
                    <span >1 hour ago</span>
                </div>
                <div className='chatMessage'>
                    <p>lorem repusm lorem sepfsf lorem srepms lorems epjs.</p>
                    <span >1 hour ago</span>
                </div>
                <div className='chatMessage own'>
                    <p>lorem repusm lorem sepfsf lorem srepms lorems epjs.</p>
                    <span >1 hour ago</span>
                </div>
                <div className='chatMessage '>
                    <p>lorem repusm lorem sepfsf lorem srepms lorems epjs.</p>
                    <span >1 hour ago</span>
                </div>
                <div className='chatMessage own'>
                    <p>lorem repusm lorem sepfsf lorem srepms lorems epjs.</p>
                    <span >1 hour ago</span>
                </div>
            </div>
            <div className='bottom'>
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>}
    </div>
  )
}

export default Chat