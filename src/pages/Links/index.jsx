import { useNavigate } from 'react-router-dom';
import { BackgroundContainer } from '../../components/BackgroundContainer';
import { ReactComponent as InstagramIcon } from '../../images/socials/instagram.svg'
import { ReactComponent as FacebookIcon } from '../../images/socials/facebook.svg'
import { ReactComponent as WhatsappIcon } from '../../images/socials/whatsapp.svg'

import './style.scss';

export const Links = () => {

    const navigate = useNavigate()

    const openUrl = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }
    
    return (
        <div className='Links-Page' >
            <BackgroundContainer>
                <div className="main-container">
                    <button onClick={() => navigate('/')}>Site</button>
                    <button onClick={() => navigate('/')}>Simulador de Economia</button>
                    <button onClick={() => navigate('/cadastro')}>Quero Economizar</button>
                    <div className="socials-icons">
                        <InstagramIcon onClick={() => openUrl('https://instagram.com')} />
                        <FacebookIcon onClick={() => openUrl('https://facebook.com')} />
                        <WhatsappIcon onClick={() => openUrl('https://whatsapp.com')} />
                    </div>
                </div>
            </BackgroundContainer>
        </div>
    )
}