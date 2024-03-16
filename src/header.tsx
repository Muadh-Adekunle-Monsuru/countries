import { useState } from 'react';
import './App.css';
import { MoonIcon } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/outline';
{
	/* ; */
}
function LightText() {
	return (
		<div className='flex flex-row space-x-2 text-white'>
			<SunIcon className='h-6 w-6 ' />
			<p>Light Mode</p>
		</div>
	);
}
function DarkText() {
	return (
		<div className='flex flex-row space-x-2    items-center '>
			<MoonIcon className='h-6 w-6 text-black' />
			<p>Dark Mode</p>
		</div>
	);
}
export default function Header() {
	const [theme, setTheme] = useState(<DarkText />);

	function handleClick() {
		if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
			//add class=dark in html element
			document.documentElement.classList.add('dark');
		} else {
			//remove class=dark in html element
			document.documentElement.classList.remove('dark');
		}

		if (localStorage.theme === 'dark') {
			localStorage.theme = 'light';
			setTheme(<LightText />);
		} else {
			localStorage.theme = 'dark';
			setTheme(<DarkText />);
		}
	}
	return (
		<>
			<div className='bg-white dark:bg-darkBlue w-full p-2 shadow-md'>
				<div className='w-full'>
					<div className='flex flex-row w-full justify-between items-center md:px-20 '>
						<h1 className='text-xl font-bold  dark:text-white'>
							Where in the world?
						</h1>
						<div onClick={handleClick} className='p-3 cursor-pointer'>
							<a href='#'>{theme}</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
