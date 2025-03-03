export default function Accueil() {
	return (
		<div className="Accueil">
			<div className="Presentation">
                <img src="res/image/Photo Profil.jpg" alt="" className="PP"/>
                <div className="textePresentation">
                    <h1>Salut, moi c'est Quentin</h1>
                    <p>Je m'appelle Quentin Moutté et je suis actuellement étudiant en deuxième année de BUT informatique.</p>
                </div>  
            </div>
            <div className="Stage">
                <div className="description">Je suis actuellement à la recherche d'un stage</div>
                <div className="CV"> <a href="res/CV Quentin Moutté.pdf" download="CV" target="_blank"><button>Obtenir mon CV</button></a> </div>
            </div>
		</div>
	);
}
