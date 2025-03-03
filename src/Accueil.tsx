export default function Accueil() {
	return (
		<div className="Accueil">
			<div className="Presentation">
                    <img src="/images/PP.jpg" alt="" className="PP"/>
                <div className="textePresentation">
                    {/* <h1>Salut, moi c'est Quentin</h1> */}
                    <h1>POUR MADMAE DE CONNINK : Bonjour madame, j'ai eu un petit probléme avec mon site et j'ai perdu beaucoup de temps, je ne l'ai donc pas fni dimanche soir. <br />Le probléme étant réglé, je finis tout ça pour lundi 3 mars au soir. <br />Pour le coup c'est ma faute.</h1>
                    <p>Je m'appelle Quentin Moutté et je suis actuellement étudiant en troisiéme année de BUT informatique parcours développement application et web.</p>
                </div>  
            </div>
            <div className="Stage">
                <div className="description">Je suis actuellement à la recherche d'un stage d'une durée de 4 mois a partir du 10 mars</div>
                <div className="CV"> <a href="/CV.pdf" download="CV" target="_blank"><button>Obtenir mon CV</button></a> </div>
            </div>
		</div>
	);
}
