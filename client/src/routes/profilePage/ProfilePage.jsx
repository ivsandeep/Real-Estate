import React, { useContext, useEffect } from 'react'
import "./profilePage.scss"
import List from "../../components/list/List"
import Chat from '../../components/chat/Chat'
import ApiRequest from '../login/ApiRequest'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
const ProfilePage = () => {
    const navigate=useNavigate();
    
    const {updateUser, currentUser}=useContext(AuthContext)

    const handleLogout=async()=>{
        try{
            await ApiRequest.post("/auth/logout");
            updateUser(null);
            navigate("/")
        } catch(err){
            console.log(err)
        }
    }

    return (
         <div className='profilePage'>
            <div className='details'>
                <div className='wrapper'>
                    <div className='title'>
                        <h1>User Information</h1>
                        <Link to="/profile/update"
                        >
                            <button>Update Profile</button>
                        </Link>
                    </div>
                    <div className='info'>
                        <span> Avatar: <img src={currentUser.avatar || "noavatar.jpeg"} alt=''/></span>
                        <span> Username: <b>{currentUser.username}</b></span>
                        <span> E-mail: <b>{currentUser.email}</b></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className='title'>
                        <h1>My list</h1>
                        <Link to="/add">
                        <button >Create New Post</button>
                        </Link>
                    </div>
                    <List/>
                    <div className='title'>
                        <h1>Saved List</h1>
                        
                    </div>
                    <List/>
                </div>
            </div>
            <div className='chatContainer'>
                <div className='wrapper'>
                    <Chat/>
                </div>
            </div>

        </div>
    )
}

export default ProfilePage