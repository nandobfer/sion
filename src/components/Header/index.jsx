import { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useHeaderMenus } from '../../hooks/useHeaderMenus';
import {ReactComponent as Logo} from '../../images/logo.svg';
import './style.scss';
import COLORS from '../../sass/_colors.scss'
import { HeaderButton } from './HeaderButton';

export const Header = ({ alternative, setAlternative }) => {

    const menus = useHeaderMenus()

    const alternative_style = {
        backgroundColor: COLORS.primary,
        position: 'fixed',
        top: 0,
        width: '100vw',
        justifyContent: 'center',
    }

    useEffect(() => {
        const onScroll = () => {
            setAlternative(window.scrollY > 50 ? true : false)
        }

        window.addEventListener('scroll', onScroll, { passive: true });


        const script = document.createElement('script');
      
        script.innerHTML = `
        (function (d, s, u) {
          let h = d.getElementsByTagName(s)[0], k = d.createElement(s);
          k.onload = function () {
            let l = d.createElement(s); l.src = u; l.async = true;
            h.parentNode.insertBefore(l, k.nextSibling);
          };
          k.async = true; k.src = 'https://storage.googleapis.com/push-webchat/wwc-latest.js';
          h.parentNode.insertBefore(k, h);
        })(document, 'script', 'https://weni-sp-integrations-production.s3.amazonaws.com/apptypes/wwc/7a3f1cad-3671-45a4-a1ea-9d33ac1883e2/script.js');
      `
        script.async = true;
      
        document.body.appendChild(script);

        return () => {
            window.removeEventListener('scroll', onScroll)
            document.body.removeChild(script);
        };
    }, [])

    
    return (
        <div className='Header-Component'>
            <div className="menus-container" style={alternative ? alternative_style : null} >
                {alternative ? <Logo /> : null}
                {menus.map(menu => {
                    return (
                        <section key={menu.id}>
                            <HeaderButton menu={menu} alternative={alternative} />
                            {menus.indexOf(menu) == (menus.length - 1) ? null : <p>/</p>}
                        </section>
                    )
                })}
            </div>
            <Logo style={alternative ? {visibility: 'hidden'} : null} />
        </div>
    )
}