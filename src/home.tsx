import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './header';
export default function Home() {
	return (
		<div className=' w-full h-screen'>
			<Header />
			<Outlet />
		</div>
	);
}
