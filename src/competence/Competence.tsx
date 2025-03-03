import { Competence } from "../types";
import { competenceData } from "../data";
import { useState } from "react";

export default function CompetenceRender() {
	const [projetActive, setProjetActive] = useState<Competence>(competenceData[0]);
	
	function handleChangeProject(compName:string) {
		// event.preventDefault();
		setProjetActive(competenceData.find(element => element.name ===  compName)!);
	}

	return (
		<div  className="Competence">
			<div className="listeCompetence">
				{competenceData.map(competence => (
					<div className="competence" onClick={() => handleChangeProject(competence.name)}>
						<img src={competence.imgurl} alt=""/>
						<h4>{competence.name}</h4>
					</div>
				))}
			</div>
			<DetailCompetence projet={projetActive}/>
		</div>
	);
}

interface Props {
	projet: Competence;
}

function DetailCompetence({
	projet: { name, description, imgurl}, // nested destructuring !
}: Props) {
	return (
		<div className="DetailCompetence">
			<img src={imgurl} alt=""/>
			<div className="texte">
				<h2>{name}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
}