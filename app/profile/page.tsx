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
                    <div className="text-[#666768] text-wrap">
                        <p>cd_identityUsuario : <span className="text-black">425</span></p>
                        <p>nb_nombreUsuario : <span className="text-black">CARLOS MARQUEZ</span></p>
                        <p>idioma : <span className="text-black">EnUs</span></p>
                        <p>cd_identityPaisUsuario : <span className="text-black">56</span></p>
                        <p>nb_paidUsuario : <span className="text-black">GERMANY</span></p>
                        <p>tx_acronimoPais : <span className="text-black">DE</span></p>
                        <p>cd_identitySucursalUsuario : <span className="text-black">20</span></p>
                        <p>nb_sucursalUsuario_sucursal : <span className="text-black">HAMBURG</span></p>
                        <p>Cultura_usuario : <span className="text-black">en-US</span></p>
                        <p>ZonaHorariaUsuario : <span className="text-black">W. Europe Standard Time</span></p>
                        <p>st_estatus : <span className="text-black">5</span></p>
                        <p>url_soporte : <span className="text-black">https://master.d175pxy0e5rn7y.amplifyapp.com/en/docs-tutorials</span></p>
                        <p>cliente : <span className="text-black">SchryverPruebas</span></p>
                        <p>exp : <span className="text-black">1720470193</span></p>
                        <p>iss : <span className="text-black">https://logicapp.io</span></p>
                        <p>aud : <span className="text-black">https://logicapp.io</span></p>
                    </div>

                </article>
            </div>
        </div>
    )
}

export default ProfilePage