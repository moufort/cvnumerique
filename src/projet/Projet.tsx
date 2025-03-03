import { MouseEvent, useState } from "react";
import { Projet } from "../types";
import ProjetDescription from "./ProjetDescription";
import { projetData } from "../data";

export default function ProjetRender() {
    const [projetActive, setProjetActive] = useState<Projet>(projetData[0]);

    function handleChangeProject(event: MouseEvent) {
        event.preventDefault();
        setProjetActive(projetData.find(element => element.name === event.currentTarget.getHTML())!);
	}

	return (
		<div id="Projet">
			<div className="TitreProjet">
                <h1>Projets</h1>
                <p>Bienvenue dans mes projets</p>
            </div>
            <div className="projets">
                <div className="ListeProjet">
                    {projetData.map(projet => (
                        <li onClick={handleChangeProject}>{projet.name}</li>
                    ))}
                </div>
                <ProjetDescription projet={projetActive}/>
            </div>
		</div>
	);
}
