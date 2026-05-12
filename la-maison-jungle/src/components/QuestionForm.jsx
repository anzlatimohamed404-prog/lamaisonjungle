// J'importe useState depuis React pour gerer l'etat du champ question.
import { useState } from "react";

// Je declare le composant QuestionForm.
function QuestionForm() {
  // Je cree une variable d'etat question, vide au depart.
  const [question, setQuestion] = useState("");

  // Je declare la fonction appelee quand l'utilisateur ecrit dans le textarea.
  const handleChange = (e) => {
    // Je mets a jour question avec la valeur tapee dans le textarea.
    setQuestion(e.target.value);
  };

  // Je declare une fonction qui verifie la valeur du textarea.
  const checkValue = (value) => {
    // Si le textarea est vide, j'affiche une alerte.
    if (value.trim() === "") {
      alert("Veuillez taper un texte avant d'envoyer.");
      return false;
    }

    // Si le textarea n'est pas vide, je valide la valeur.
    return true;
  };

  // Je declare la fonction appelee quand le formulaire est envoye.
  const handleSubmit = (e) => {
    // J'empeche le rechargement automatique de la page.
    e.preventDefault();

    // Si checkValue retourne false, j'arrete la fonction.
    if (!checkValue(question)) {
      return;
    }

    // J'affiche la question dans une alerte.
    alert(`Votre question : ${question}`);
  };

  return (
    // Je retourne le formulaire qui contient le textarea.
    <form onSubmit={handleSubmit}>
      {/* Je cree une zone de texte controlee par React. */}
      <textarea
        id="question"
        name="question"
        value={question}
        onChange={handleChange}
        placeholder="tapez le texte"
      />

      {/* Je cree le bouton pour envoyer le formulaire. */}
      <button type="submit">Cliquez</button>
    </form>
  );
}

// J'exporte le composant pour pouvoir l'utiliser ailleurs.
export default QuestionForm;
