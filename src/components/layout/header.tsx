import { Button, Image, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LockOutlined } from '@ant-design/icons';
import { clearUser, setUser } from "../../context/userSlice";
import { RootState } from "../../context/store";
import './header.css'
import { Link, useNavigate } from "react-router-dom";
import logo_app from '../../assets/logic-logo.png'
import user_avatar from '../../assets/user-avatar.png'

const Header = () => {
    const user = useSelector<RootState, any>(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout=()=>{
        dispatch(clearUser(user));
        notification.success({ message : 'Thanks for using our app !'});
        localStorage.removeItem('access_token');
        navigate('/signin')
        // router.push('/signin')

    }
    return (
        <div className="header-container">
            <Link to={'/profile'}>
            <Image src={logo_app} preview={false} width={155} height={50} alt="Logic Logo" />
            </Link>
            <div className="logout-container">
                <Image preview={false} src={user_avatar} width={25} height={25} alt="user" />
                    <h4 className="header-username-display">{user?.fullName}</h4>
                <Button danger className="ml-2" onClick={handleLogout}><LockOutlined color="white"/>Logout</Button>
            </div>

        </div>
    )
}

export default Header