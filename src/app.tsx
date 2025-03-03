import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import Navigator from './Navigator';
import Menu from './Menu';

const root = createRoot(document.querySelector('.appContainer')!);
root.render(
	<>
		<BrowserRouter>
			<Menu />
			<Navigator />
		</BrowserRouter>
	</>
);
