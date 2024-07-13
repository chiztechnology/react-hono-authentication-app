'use client'
import { RootState } from "@/context/store";
import { Button } from "antd";
import Image from "next/image"
import { useSelector } from "react-redux";
import { LockOutlined } from '@ant-design/icons';

const Header = () => {
    const user = useSelector<RootState, any>(state => state.user);
    return (
        <div className=" shadow-lg flex justify-between items-center">
            <Image src={'/images/hono-title.png'} width={100} height={23} alt="Hono Logo" />
            <div className="flex items-center gap-2">
                <Image src={'/images/user-avatar.png'} width={25} height={25} alt="user" />
                <div>
                    <h3>{user?.full_name}</h3>
                    <h3 className="text-[11px] ">@{user?.username}</h3>
                </div>
                <Button danger><LockOutlined color="white"/>Logout</Button>
            </div>

        </div>
    )
}

export default Header