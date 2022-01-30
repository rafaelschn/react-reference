import { BrowserRouter, Route, Routes as R } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Erro from './pages/Erro';
import Publico from './pages/Publico';
import Filme from './pages/Filmes/filme';

const Routes = () => {
    return (
        <BrowserRouter>
            <R>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="filme/:id" element={<Filme />} />

                    <Route path="*" element={<Erro/>} />
                </Route>
                <Route path="publico" element={<Publico />} />
            </R>
        </BrowserRouter>
    );
}

export default Routes;
