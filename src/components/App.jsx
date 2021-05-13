import { useRef } from 'react';

import Header from './Header';
import Details from './Details';
import Footer from './Footer';

function App() {
	const myRef = useRef(null);

	const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' });

	return (
		<div className="App">
			<Header myRef={myRef} executeScroll={executeScroll} />
			<Details executeScroll={executeScroll} />
			<Footer />
		</div>
	);
}

export default App;
