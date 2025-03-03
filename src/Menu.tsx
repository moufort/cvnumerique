import { NavLink } from 'react-router';

export default function Menu() {
	return (
		<header>
			<nav>
				<NavLink to="/"><img src="res/image/home.png" alt="" /></NavLink>
				<div>
					<NavLink to="/Competence">Compétences et Qualités</NavLink>
					<NavLink to="/Experience">Experiences</NavLink>
					<NavLink to="/Projet">Projets</NavLink>
					<NavLink to="/Contact">Contact</NavLink>
				</div>
			</nav>
		</header>
	);
}
