import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import './index.scss';
import { publicRouters } from './Router';
function App() {
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => console.log(json));
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouters.map((route, index) => {
                        const Comp = route.component;
                        return <Route key={index} path={route.path} Component={route.component} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
