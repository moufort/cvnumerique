
import { Route, Routes } from 'react-router';
import Contact from './contact/Contact';
import Accueil from './Accueil';
import Projet from './projet/Projet';
import Competence from './competence/Competence';
import Experience from './experience/Experience';

export default function Navigator() {
	return (
		<Routes>
			<Route path="/" element={<Accueil />} />
			<Route path="/contact" element={<Contact />}/>
			<Route path="/Competence" element={<Competence />}/>
			<Route path="/Experience" element={<Experience />}/>
			<Route path="/Projet" element={<Projet />}/>
		</Routes>
	);
}
