'use client'
import Header from "@/component/layout/header";
import { Tag } from "antd";
import { useEffect, useState } from "react"

const ProfilePage = (props: any)=>{
    const [loading, setLoading] = useState(true);
    const [profileDetails, setProfileDetails] = useState({});

    useEffect(()=>{

    }, [])

    return(
        <div className="w-full">
        <Header/>
            {/* content */}
            <div className="w-full p-8">
                {/* card profile details */}
                <article className="p-2">
                    <div className="flex items-center gap-2">
                        <h1>CARLODA</h1>
                        <Tag color="green">Active</Tag>
                    </div>
                    <div className="text-[#666768]">
                        <p>cd_identityUsuario : <span className="text-black">245</span></p>
                    </div>

                </article>
            </div>
        </div>
    )
}

export default ProfilePage