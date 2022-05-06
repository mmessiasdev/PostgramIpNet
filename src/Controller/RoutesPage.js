import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import history from "../Model/History";

import Login from '../View/Login';
import HomePage from '../View/Components/HomePage'


// ---------- PARTE RESPONSÁVEL PELO GERENCIAMENTO DE PÁGINAS DO APP ---------- // 

function RoutesPage() {

    return (
        <Router history={history}>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/homepage" element={<HomePage />} />
            </Routes>

        </Router>

    )
}

export default RoutesPage;