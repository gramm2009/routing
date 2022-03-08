import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import './topbar.scss'

const Topbar = () => {

    return <div className="topbar">
        <ul className='topbar__nav'>
            <li><Link to="/">Главная</Link></li>
            <li><Link to ="/info">О нас</Link></li>
            <li><Link to="/contacts">Контакты</Link></li>

        </ul>
    </div>
}

export default Topbar