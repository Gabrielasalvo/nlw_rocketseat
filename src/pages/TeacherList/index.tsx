import React from 'react'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
function TeacherList() {

    return (
        <div id="page-teacher-list" className="container"> 
        <PageHeader  title="Estes são os proffys disponíveis.">
            <form action="" id="search-teachers">
                <div className="input-block">
                    <label htmlFor="subjects">Matéria</label>
                    <input type="text" id="subject"/>
                </div>
                <div className="input-block">
                    <label htmlFor="week-day">Dia da semana</label>
                    <input type="text" id="subject"/>

                </div>

                <div className="input-block">
                    <label htmlFor="time">Horário</label>
                    <input type="text" id="subject"/>
                </div>
            </form>
            </PageHeader>
            
            <main>
            <TeacherItem/>
            </main>
              
            
        </div>
    )
}

export default TeacherList