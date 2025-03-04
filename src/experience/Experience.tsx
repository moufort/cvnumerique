export default function Experience() {
	return (
        <div className="experience">
            <h1>Formations :</h1>
            <div className="stageContainer">
                <h1>BUT</h1>
                <div className="infoRow">
                    <p>IUT Lille</p>
                    <p>2022-aujourd'hui</p>
                </div>
                <p className="description">J'ai effectue mon BUT informatique a l'IUT de Lille</p>
                <img src="./images/formation/logo-iut.png" alt="Logo" className="LOGO"/>
            </div>
            <div className="stageContainer">
                <h1>BAC</h1>
                <div className="infoRow">
                    <p>Bohain-en-vermandois</p>
                    <p>2022</p>
                </div>
                <p className="description">J'ai passé mon BAC général au lycée Saint-Sophie de bohain en vermandois avec mention bien.</p>
                <img src="./images/formation/stSo.webp" alt="Logo" className="LOGO"/>
            </div>
            <h1>Expérience professionnels :</h1>
            <div className="stageContainer">
                <h1>Stage en développement Pharo</h1>
                <div className="infoRow">
                    <p>INRIA</p>
                    <p>mai-juin 2024</p>
                </div>
                <p className="description">J'ai effectué un stage dans l'équipe EVREF de l'inria de Villeneuve d'Ascq. <br />
                    J'ai appris a utiliser le pharo, un langage orienté objet crée par l'équipe de recherche, basé sur smalltalk. <br />
                    J'ai crée un générateur de blog basé sur des fichiers markdown. Le principe est que l'utilisateur donne un dossier avec des
                </p>
                <img src="./images/formation/evref.png" alt="Logo" className="LOGO"/>
            </div>
        </div>
        
	);
}
