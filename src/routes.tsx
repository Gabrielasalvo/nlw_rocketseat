import React from 'react'
import Landing from './pages/Landing'
import TeacherForm  from './pages/TeacherForm/'
import TeacherList from './pages/TeacherList'
import { BrowserRouter, Route } from 'react-router-dom'


function Routes () {

    return (
        <BrowserRouter>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/study" component={TeacherList}/>
        <Route exact path="/give-classes" component={TeacherForm}/>
        </BrowserRouter>
    )
}

export default Routes