import './style.scss';

export const Background = ({ style }) => {
    
    return (
        <div className='Background-Component' style={style || null} >
            <img src="/images/bela-usina-de-energia-alternativa-com-paineis-solares.webp" alt="" />
        </div>
    )
}