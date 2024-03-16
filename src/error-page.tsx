import { useRouteError } from 'react-router-dom';
export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className='error-page flex flex-col w-full h-screen justify-center items-center font-bold text-2xl'>
			<h1>Oops!</h1>
			<p>Sorry, country not found.</p>
		</div>
	);
}
