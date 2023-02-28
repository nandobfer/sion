import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { BackgroundContainer } from '../../components/BackgroundContainer';
import { Progress } from './Progress';
import {ReactComponent as ChoseIcon} from '../../images/check.svg'
import './style.scss';
import { NotFound } from '../NotFound';


export const Cadastro = () => {
    const PessoaComponent = () => {
        const Pessoa = ({ name, value, description }) => {
            const [clicked, setClicked] = useState(false)
    
            const nextStage = () => {
                setClicked(true)
                setTimeout(() => {
                    navigate('/cadastro/formulario')
                }, 1000)
            }
    
            return (
                <div className="pessoa-container" onClick={() => nextStage()}>
                    <div className="text-container">
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                    <div className="chose-container" style={{opacity: clicked ? 1 : 0.7}}>
                        {clicked ? <ChoseIcon /> : <div className="circle"></div> }
                    </div>
                </div>
            )
        }
    
        return (
            <div className="pessoa-wrapper">
                <Pessoa name='Pessoa Física' value='fisica' description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} />
                <Pessoa name='Pessoa Jurídica' value='juridica' description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} />
            </div>
        )
    }

    const navigate = useNavigate()

    const [stage, setStage] = useState(0)
    const [progressBarStage, setProgressBarStage] = useState(31)

    return (
        <div className='Cadastro-Page' >
            <BackgroundContainer>
                <div className="main-container">
                    <Progress stage={stage} progressBarStage={progressBarStage} />
                    <div className="content">
                    <Routes>
                            <Route index element={<PessoaComponent />} />
                            <Route path='/formulario' element={<NotFound />} />
                    </Routes>
                    </div>
                </div>
            </BackgroundContainer>
        </div>
    )
}