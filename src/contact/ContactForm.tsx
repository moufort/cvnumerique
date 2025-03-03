// import { FormEvent, useRef } from "react";

// export default function ContactForm() {
//     const mailInput = useRef<HTMLInputElement>(null),
// 		descriptionInput = useRef<HTMLTextAreaElement>(null),
// 		titleInput = useRef<HTMLInputElement>(null);
    
//     const handleSubmit = (event: FormEvent) => {
//         event.preventDefault();
//         if (!mailInput.current || !descriptionInput.current || !titleInput.current) {
//             return;
//         }
//         window.location.href = `mailto:quentin.moutte.etu@univ-lille.fr?subject=${encodeURIComponent(titleInput.current.value)}&body=${encodeURIComponent(descriptionInput.current.value)}`;
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="email">Email :</label>
//             <input type="email" id="email" name="email" ref={mailInput} required />
            
//             <label htmlFor="objet">Objet :</label>
//             <input type="text" id="objet" name="objet" ref={titleInput} required />
            
//             <label htmlFor="message">Message :</label>
//             <textarea id="message" name="message" rows={5} ref={descriptionInput} required></textarea>
            
//             <button type="submit">Envoyer</button>
//         </form>
//     );
// }


import { FormEvent, useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
    const mailInput = useRef<HTMLInputElement>(null),
        titleInput = useRef<HTMLInputElement>(null),
        descriptionInput = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (!mailInput.current || !titleInput.current || !descriptionInput.current) {
            return;
        }

        const templateParams = {
            user_email: mailInput.current.value,
            subject: titleInput.current.value,
            message: descriptionInput.current.value,
        };

        emailjs
            .send("your_service_id", "your_template_id", templateParams, "your_user_id")
            .then(
                (_response) => {
                    alert("Email envoyé avec succès !");
                },
                (error) => {
                    console.log(error);
                    alert(error);
                }
            );
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" ref={mailInput} required />

            <label htmlFor="objet">Objet :</label>
            <input type="text" id="objet" name="objet" ref={titleInput} required />

            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" rows={5} ref={descriptionInput} required></textarea>

            <button type="submit">Envoyer</button>
        </form>
    );
}
