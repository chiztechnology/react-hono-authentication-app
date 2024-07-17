import { notification, Skeleton, Tag } from "antd";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import './profile.css'
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";
import { RootState } from "../../context/store";

const ProfilePage = () => {
    const [loading, setLoading] = useState(true);
    const [profileDetails, setProfileDetails] = useState({});
    const navigate = useNavigate();
    const user = useSelector<RootState, any>(state => state.user);

    useEffect(() => {
        const access_token = localStorage.getItem('access_token');
        if (access_token) {
            setProfileDetails(decodeJWT(access_token));
        } else {
            localStorage.removeItem('access_token');
            notification.error({ message: 'You have been signed out !' });
            navigate('/signin');
        }
        setLoading(false);
    }, [])

    const decodeJWT = (token: string) => {
        const decoded = jwtDecode(`${token}`);
        return decoded;
    }

    return (
        <div className="profile-sub-container">
            {/* card profile details */}
            {loading ?
                <div>
                    <Skeleton active />
                    <Skeleton active />
                    <Skeleton active />
                </div> :
                <article className="profile-sub-header-container">
                    <div className="profile-name-container">
                        <h3>{user?.username}</h3>
                        <Tag color="green">Active</Tag>
                    </div>
                    <div className="profile-content-container">
                        {/* {profileDetails && renderCard(profileDetails)} */}
                        {Object.keys(profileDetails).map((key, value) => (
                            <p>{key} : <span className="text-highlight">{value}</span></p>
                        ))}
                    </div>

                </article>
            }
        </div>
    )
}

export default ProfilePage