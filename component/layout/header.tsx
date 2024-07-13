'use client'
import { RootState } from "@/context/store";
import { Button, notification } from "antd";
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux";
import { LockOutlined } from '@ant-design/icons';
import { clearUser, setUser } from "@/context/userSlice";
import { useRouter } from "next/navigation";

const Header = () => {
    const user = useSelector<RootState, any>(state => state.user);
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogout=()=>{
        dispatch(clearUser(user));
        notification.success({ message : 'Thanks for using our app!'});
        router.push('/signin')

    }
    return (
        <div className="shadow-lg flex items-center p-4 navigationHeader">
            <Image src={'/images/hono-title.png'} width={100} height={23} alt="Hono Logo" />
            <div className="flex items-center gap-2">
                <Image src={'/images/user-avatar.png'} width={25} height={25} alt="user" />
                <div>
                    <h3 className="font-bold">{user?.fullName}</h3>
                    {/* <h3 className="text-[8px]">@{user?.username}</h3> */}
                </div>
                <Button danger className="ml-2" onClick={handleLogout}><LockOutlined color="white"/>Logout</Button>
            </div>

        </div>
    )
}

export default Header