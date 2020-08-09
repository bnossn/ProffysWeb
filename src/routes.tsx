import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing' /* Não precisa colocar o index.tsx. Ele sempre importa o arquivo index da pasta por padrão*/
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm' 

function Routes() {
    return (
        <BrowserRouter>

            {/* On home call Landing */}
            {/* exact is needed otherwise it will add up components down the link tree */}
            <Route path='/' exact component={Landing} />

            {/* On /study call corresponding component */}
            <Route path='/study' component={TeacherList} />

            {/* On /give-classes call corresponding component */}
            <Route path='/give-classes' component={TeacherForm} />

        </BrowserRouter>
    )
}

export default Routes;