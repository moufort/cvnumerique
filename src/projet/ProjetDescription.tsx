import { Projet } from "../types";

interface Props {
	projet: Projet;
}

export default function ProjetDescription({
	projet: { name, description, imgUrl, projectUrl}, // nested destructuring !
}: Props) {
	return (
        <div className="DescriptionProjet">
            <div className="content">
                <h1>{name}</h1>
                <p>{description}</p>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                    <button>Accéder au projet</button>
                </a>
            </div>
            <img src={imgUrl} alt={name} />
        </div>
	);
}
