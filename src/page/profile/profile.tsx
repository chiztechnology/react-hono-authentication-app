import { notification, Skeleton, Tag } from "antd";
import { useEffect, useState } from "react"
import './profile.css'
import { useNavigate } from "react-router-dom";

const ProfilePage = (props: any) => {
    const [loading, setLoading] = useState(true);
    const [profileDetails, setProfileDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
       const access_token = localStorage.getItem('access_token');
       if(access_token){

       }else{
        localStorage.removeItem('access_token');
        notification.error({ message : 'You have been signed out !'});
        navigate('/signin');
       }
    }, [])

    return (
        <div className="">
            {/* content */}
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
                            <h3>CARLODA</h3>
                            <Tag color="green">Active</Tag>
                        </div>
                        <div className="profile-content-container">
                            <p>cd_identityUsuario : <span className="text-highlight">425</span></p>
                            <p>nb_nombreUsuario : <span className="text-highlight">CARLOS MARQUEZ</span></p>
                            <p>idioma : <span className="text-highlight">EnUs</span></p>
                            <p>cd_identityPaisUsuario : <span className="text-highlight">56</span></p>
                            <p>nb_paidUsuario : <span className="text-highlight">GERMANY</span></p>
                            <p>tx_acronimoPais : <span className="text-highlight">DE</span></p>
                            <p>cd_identitySucursalUsuario : <span className="text-highlight">20</span></p>
                            <p>nb_sucursalUsuario_sucursal : <span className="text-highlight">HAMBURG</span></p>
                            <p>Cultura_usuario : <span className="text-highlight">en-US</span></p>
                            <p>ZonaHorariaUsuario : <span className="text-highlight">W. Europe Standard Time</span></p>
                            <p>st_estatus : <span className="text-highlight">5</span></p>
                            <p>url_soporte : <span className="text-highlight">https://master.d175pxy0e5rn7y.amplifyapp.com/en/docs-tutorials</span></p>
                            <p>cliente : <span className="text-highlight">SchryverPruebas</span></p>
                            <p>exp : <span className="text-highlight">1720470193</span></p>
                            <p>iss : <span className="text-highlight">https://logicapp.io</span></p>
                            <p>aud : <span className="text-highlight">https://logicapp.io</span></p>
                        </div>

                    </article>
                }
            </div>
        </div>
    )
}

export default ProfilePage