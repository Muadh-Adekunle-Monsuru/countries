import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	'https://lnuzzckynzfmxyxkfgbz.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxudXp6Y2t5bnpmbXh5eGtmZ2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxMDIwNDMsImV4cCI6MjAyNTY3ODA0M30.19fLtRhfa-TBMMXX0BeTWGgTE60Ju2mYFvEpxvjnxbw'
);

export default function Body() {
	const [data, setData] = useState([]);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		getCountries();
	}, []);

	async function getCountries() {
		const { data } = await supabase.from('countries').select();
		setCountries(data);
	}
	useEffect(() => {
		// If you're using Create React App and the file is in the public folder
		fetch('../public/data.json')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => setData(data))
			.catch((error) =>
				console.error(
					'There has been a problem with your fetch operation:',
					error
				)
			);
		console.log(data);
	}, []);

	return (
		<div className='my-10 px-10 md:px-20 h-full w-full items-center mx-auto '>
			<div className='flex flex-col md:flex-row justify-between items-center  md:space-y-0 gap-10'>
				<div className='w-auto flex justify-center'>
					<div className='relative pointer-events-none inset-y-0 left-2 flex items-center pl-3'>
						<span className='text-gray-500 sm:text-sm absolute'>
							<MagnifyingGlassIcon className='h-6 w-6 text-gray-500 dark:text-white' />
						</span>
					</div>
					<input
						type='text'
						name='price'
						id='price'
						className='block w-1/4 md:w-auto rounded-md border-0 py-3 pl-10 pr-52  text-gray-900 dark:text-white  ring-1 ring-inset dark:ring-0 ring-gray-300 placeholder:text-gray-900 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:bg-veryDarkBlue shadow-md'
						placeholder='Search for a country....'
					/>
				</div>
				<div className='flex '>
					<label className='sr-only'>Filter by Region</label>
					<select
						id='filter'
						name='filter'
						className='h-full rounded-md border-0 bg-transparent py-3 pl-2 pr-7 ring-1 dark:text-white dark:bg-darkBlue dark:ring-0 shadow-md text-gray-500 focus:ring-2 ring-gray-300 focus:ring-inset  sm:text-sm'
					>
						<option className='py-2'>Filter by Region</option>
						<option>Africa</option>
						<option>America</option>
						<option>Asia</option>
						<option>Europe</option>
						<option>Oceania</option>
					</select>
				</div>
			</div>

			{/* content */}

			<div className='h-screen w-full grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20 pt-20  justify-items-center md:justify-items-stretch'>
				{data.map((item, index) => (
					<div
						key={index}
						className='h-80  rounded-md max-w-[350px] shadow-md overflow-hidden pb-8 dark:bg-darkBlue bg-White dark:text-White cursor-pointer'
					>
						<Link to={`country/${index}`}>
							<img src={item.flags.png} className='w-full h-1/2' />
							<div className='p-5'>
								<p className='font-bold text-lg'>{item.name}</p>
								<div className='py-3 font-thin'>
									<p className='text-md'>
										<span className='font-medium'>Popluation:</span>{' '}
										{item.population}
									</p>
									<p className=' text-md'>
										<span className='font-medium'>Region:</span> {item.region}
									</p>
									<p className=' text-md'>
										<span className='font-medium'>Capital: </span>
										{item.capital}
									</p>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
