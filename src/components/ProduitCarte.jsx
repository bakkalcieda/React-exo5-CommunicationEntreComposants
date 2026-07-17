function ProduitCarte({ nom , onSupprimer}) {
    return (
    <li>
    {nom}
    <button onClick={onSupprimer}>Supprimer</button>
    </li>
    );
}

export default ProduitCarte;