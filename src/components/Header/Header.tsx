import { useLocation, useNavigate } from 'react-router-dom';
import './header.scss'
import { ChangeLanguage } from '../ChangeLanguage/ChangeLanguage';
import { clipboard_icon, default_profile_pic, grid_icon, heart_icon } from '../../data/img/img-data';

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navOptions = [
        { id: 1, content: 'Inicio', url: '/' },
        { id: 2, content: 'Ideas', url: '/Ideas' },
        { id: 3, content: 'Tips', url: '/Tips' },
        { id: 4, content: 'Blog', url: '/Blog' },
    ]
    return (
        <section className='header'>
            <div className='header__logo'>
            </div>
            <nav className='header__nav'>
                <ul className='header__list'>
                    {navOptions.map(option => {
                        const isActive = location.pathname === option.url;
                        return (
                            <li key={option.id} className={`header__option ${isActive ? 'header__option--active' : ''}`}>
                                <button className='header__button' onClick={() => navigate(option.url)}>
                                    {option.content}
                                </button>
                                <div className='header__line'></div>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className='header__account'>
                <div className='header__session'>
                    <div className='header__icons'>
                        <img className='header__icon' src={grid_icon.url} alt={grid_icon.alt} />
                        <img className='header__icon' src={clipboard_icon.url} alt={clipboard_icon.alt} />
                        <img className='header__icon' src={heart_icon.url} alt={heart_icon.alt} />
                    </div>
                        <ChangeLanguage />
                    <div className='header__profile-media'>
                        <img
                            className='header__profile-pic'
                            src={default_profile_pic.url}
                            alt="profile pic"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}