import React from 'react'
import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'



function TeacherItem() {

    return (
    <article className="teacher-item">
    <header>
        <img src="https://i.imgur.com/GS6yPEa.jpg" alt="Gabriela Salvo"/>
        <div><strong>Gabriela Salvo</strong>
        <span>Química</span></div>
    </header>
    <p>Entusiasta das melhores tecnologias de química avançada <br/>
        Apaixonada por explodir coisas
    </p>
    <footer>
        <p>Preço por hora
            <strong>R$90</strong>
        </p>
    <button type="button">
        <img  src={WhatsappIcon} alt="Whatsapp" />
        Entrar em contato
    </button>
    </footer>
</article>
    )
}
export default TeacherItem