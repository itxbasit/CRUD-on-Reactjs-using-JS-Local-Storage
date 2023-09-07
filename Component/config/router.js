import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from '../register'
import View from '../CRUD/crud';

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/view" element={<View />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;