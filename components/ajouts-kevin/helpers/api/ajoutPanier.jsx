// Déclaration du composant principal
const ajoutPanier = async (idProduit) => {

    // Ajout au cart du produit concerné par appel API
    const ajoutParApi = (id, count) => {
        let retour = fetch(`https://jimmyslab.club:7295/produits/ajoutpanier?id=${id}`)
          .then((res) => res.json())
          .then((result) => {
            let message = result;
            console.log(message);
            return message;
          });
        return retour;
      };

    let valeurRetour = await ajoutParApi(idProduit);
    return valeurRetour;
}

export default ajoutPanier;