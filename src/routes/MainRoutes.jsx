import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import About from '../About.jsx'
import App from '../App.jsx'
import Nopage from '../screens/Nopage.jsx';
import Passwordgen from '../../apps/PasswordGen/Passwordgen.jsx';
import Counter from '../customHooks/Counter.jsx';
import Todo from '../../apps/Todo/todo.jsx';
import Ecommerce from '../../apps/Ecommerce/Ecommerce.jsx';

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/password" element={<Passwordgen />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="*" element={<Nopage />} />
            </Routes>
        </BrowserRouter>



    )
}

export default MainRoutes