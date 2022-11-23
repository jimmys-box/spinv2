// Déclaration du composant principal
const voirPanier = async () => {

    // Récupération du panier par appel API
    const recupPanierParApi = () => {
        let panierApi = fetch(`https://jimmyslab.club:7295/produits/voirpanier`)
            .then((panierBrut) => panierBrut.json())
            .then((panierNet) => {
                let retour = panierNet;
                // console.log(retour);
                return retour;
            });
        return panierApi;
    }

    let panier = await recupPanierParApi();
    return panier;
}

export default voirPanier;