import { useState, useEffect } from 'react';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import { Link, useParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	'https://lnuzzckynzfmxyxkfgbz.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxudXp6Y2t5bnpmbXh5eGtmZ2J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxMDIwNDMsImV4cCI6MjAyNTY3ODA0M30.19fLtRhfa-TBMMXX0BeTWGgTE60Ju2mYFvEpxvjnxbw'
);

export default function FullDescription() {
	const [countries, setCountries] = useState([]);

	async function getCountries(code) {
		const { data } = await supabase
			.from('countries')
			.select('name,alpha3Code,row_index')
			.eq('alpha3Code', code);
		setCountries((prevState) => [...prevState, data]);
		console.log(data);
	}
	function getCountry() {
		try {
			data.borders.map((item) => getCountries(item));
		} catch (e) {
			console.log('error');
		}
	}
	let { countryID } = useParams();
	const arrynum = Number(countryID) - 1;
	const [data, setData] = useState({
		name: '',
		nativeName: '',
		population: '',
		region: '',
		subregion: '',
		capital: '',
		topLevelDomain: '',
		currencies: [],
		languages: [],
		borders: [],
		flags: {
			png: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png',
		},
	});
	useEffect(() => {
		// If you're using Create React App and the file is in the public folder
		console.log(countryID);
		fetch('/data.json')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => setData(data[arrynum]))
			.catch((error) =>
				console.error(
					'There has been a problem with your fetch operation:',
					error
				)
			);
		getCountry();
	}, []);

	return (
		<>
			<div className='w-full h-fit sm:py-7 md:py-20 '>
				<Link to={`/`}>
					<div className='flex w-fit p-2 border-2 sm:ml-5 lg:ml-40 px-7 shadow-md cursor-pointer space-x-5 '>
						<ArrowLongLeftIcon className='h-6 w-6' />
						Back
					</div>
				</Link>

				<div className='contentBody grid w-full sm:grid-cols-1 lg:grid-cols-2  h-full items-center lg:p-20 sm:p-5'>
					<div className='leftSide w-full h-full grid items-center min-h-[250px]'>
						<div className=' h-full flex justify-center'>
							<img
								src={data.flags.png}
								alt={data.name}
								className='w-full self-center h-full max-w-[550px]'
							/>
						</div>
					</div>
					<div className='rightSide'>
						<div className='font-bold text-3xl pt-7'>{data.name}</div>
						<div className='grid sm:grid-cols-1 sm:gap-5 lg:grid-cols-2 w-full pt-5'>
							<div className='space-y-2 font-thin'>
								<div>
									<span className='font-semibold'>Native Name: </span>{' '}
									{data.nativeName}
								</div>
								<div>
									<span className='font-semibold'>Population: </span>{' '}
									{data.population}
								</div>
								<div>
									<span className='font-semibold'>Region: </span>
									{data.region}
								</div>
								<div>
									<span className='font-semibold'>Sub Region: </span>{' '}
									{data.subregion}
								</div>
								<div>
									<span className='font-semibold'>Capital: </span>{' '}
									{data.capital}
								</div>
							</div>
							<div className='space-y-1 font-thin'>
								<div>
									<span className='font-semibold'>Top Level Domain: </span>
									{data.topLevelDomain}
								</div>
								<div>
									<span className='font-semibold'>Currencies: </span>
									{data.currencies
										? data.currencies.map((item, index) => (
												<span key={index}>{item.name}, </span>
										  ))
										: null}
								</div>
								<div>
									<span className='font-semibold'>Languages: </span>
									{data.languages
										? data.languages.map((item, index) => (
												<span key={index}>{item.name}, </span>
										  ))
										: null}
								</div>
							</div>
						</div>
						<div className='py-10 lg:flex items-center sm:grid '>
							<span className='font-semibold text-xl'>Border Countries: </span>
							<div className='sm:grid sm:grid-cols-3 md:flex'>
								{countries
									? countries.map((item) => (
											<span
												key={item.row_index}
												className='border p-1 m-2 px-5 shadow-sm'
											>
												{item.name}
											</span>
									  ))
									: null}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
