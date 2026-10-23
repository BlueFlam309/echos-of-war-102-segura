import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import './app-layout.scss'

export const AppLayout = () => {
    return (
        <div className='app__layout'>
            <header className='app__header'>
                <Header />
            </header>
            <div className='app__content'>
                <div className='app__ad'>
                    <h2>AD</h2>
                </div>
                <main className="app__main">
                    <Outlet />
                </main>
                <div className='app__ad'>
                    <h2>AD</h2>
                </div>
            </div>
        </div>
    );
}