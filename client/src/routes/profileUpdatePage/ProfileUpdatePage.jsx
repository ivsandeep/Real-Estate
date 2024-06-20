import React, { useContext, useState } from 'react'
import "./ProfileUpdatePage.scss"
import { AuthContext } from '../../context/AuthContext'
import ApiRequest from '../login/ApiRequest'
import { useNavigate } from 'react-router-dom'
import UploadWidget from '../../components/uploadWidget/UploadWidget'


const ProfileUpdatePage = () => {
    const { currentUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState("")
    const [avatar,setAvatar]=useState([]);
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const { username, email, password } = Object.fromEntries(formData);
        try {
            const res = await ApiRequest.put(`/users/${currentUser.id}`, {
                username,
                email,
                password,
                avatar:avatar[0],
            })
            // console.log(res.data);
            updateUser(res.data);
            navigate("/profile");
        }
        catch (err) {
            console.log(err.response.data.message);
        }
    }
    return (
        <div className='profileUpdatePage'>
            <div className='formContainer'>
                <form onSubmit={handleSubmit}>
                    <h1>Update Profile</h1>
                    <div className='item'>
                        <label htmlFor='username'>Username</label>
                        <input id='username' name='username' type='text' defaultValue={currentUser.username} />
                    </div>
                    <div className='item'>
                        <label htmlFor='email'>Email</label>
                        <input id='email' name='email' type='text' defaultValue={currentUser.email} />
                    </div>
                    <div className='item'>
                        <label htmlFor='password'>Password</label>
                        <input id='password' name='password' type='text' />
                    </div>
                    <button>Update</button>
                    {error && <span>{error}</span>}
                </form>
            </div>
            <div className='sideContainer'>
                <img src={avatar[0] || currentUser.avatar || "/noavatar.jpeg"
                } alt='' className='avatar' />
                <UploadWidget uwConfig={
                    {cloudName:"sandy-dev",
                    uploadPreset:"estate",
                    multiple:false,
                    maxImageFileSize:2000000,
                    folder:"avatars",}
                } 
                    setState={setAvatar}
                />
            </div>
        </div>
    )
}

export default ProfileUpdatePage