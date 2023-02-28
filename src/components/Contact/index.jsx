import { Form, Formik } from 'formik';
import { useState } from 'react';
import { InputField } from './InputField';
import {ReactComponent as FolderIcon} from '../../images/folder.svg'
import {ReactComponent as MapIcon} from '../../images/map.svg'
import {ReactComponent as WhatsappIcon} from '../../images/whatsapp.svg'
import './style.scss';

export const Contact = () => {

    const [showForm, setShowForm] = useState(false)

    const wrapper_style = {
        height: showForm ? '15vw' : null
    }

    const initial_inputs = {
        name: '',
        phone: '',
        email: '',
        message: ''
    }

    const sendForm = (values) => {
        setShowForm(false)
    }
    
    return (
        <div className='Contact-Component' style={wrapper_style} >
            { !showForm ? 
            <div className="title">
                <h4>Ficou com mais alguma dúvida? Fale com um dos nossos assessores</h4>
                <button onClick={() => setShowForm(true)}>Entrar em contato</button>
            </div> : 
            <div className="contact-form">
                <Formik initialValues={initial_inputs} onSubmit={(values) => sendForm(values)}>
                    {({handleChange}) => (
                        <Form>
                            <InputField id='name' title={'Nome'} handleChange={handleChange} />
                            <InputField id='phone' title={'Telefone'} handleChange={handleChange} />
                            <InputField id='email' title={'Email'} handleChange={handleChange} />
                            <InputField id='message' title={'Mensagem'} handleChange={handleChange} />
                            <button type='submit'>Enviar</button>
                        </Form>
                    )}
                </Formik>
                <div className="info">
                    <h1>Entre em contato</h1>
                    <div className="info-item">
                        <FolderIcon />
                        <input type="text" readOnly value={'comercial@sionenergia.com.br'} />
                    </div>
                    <div className="info-item">
                        <MapIcon />
                        <input type="text" readOnly value={'Rua Dr. Manoel Pedro, 365, 21º andar. Curitiba - PR'} />
                    </div>
                    <div className="info-item">
                        <WhatsappIcon />
                        <input type="text" readOnly value={'(41) 3533-5910'} />
                    </div>
                </div>
            </div>
            }

        </div>
    )
}