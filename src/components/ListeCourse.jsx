import { useState } from 'react';
import ProduitCarte from './ProduitCarte';

function ListeCourse() {
    const [produits, setProduits] = useState(['Pain', 'Lait', 'Œufs']);
    const [texteInput, setTexteInput] = useState('');

function ajouterProduit() {
    const valeur = texteInput.trim();

    if (valeur === "") {
        return;
    }

    if (produits.includes(valeur)) {
        alert('Ce produit est déjà dans la liste !');
        return;
    }

    setProduits([...produits, valeur]);
    setTexteInput('');
}

    function supprimerProduit(index) {
    const nouvelleListe = produits.filter((_, i) => i !== index);
    setProduits(nouvelleListe);
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold text-green-800 mb-4">Liste de courses</h2>
            <div className="flex gap-2 mb-4">
            <input
        type="text"
        value={texteInput}
        onChange={(e) => setTexteInput(e.target.value)}
        onKeyDown={(e) => {
    if (e.key === 'Enter') {
    ajouterProduit();
    }
}}
        placeholder="Nom du produit"
        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
    />
    <button
        onClick={ajouterProduit}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
    >
        Ajouter
    </button>
    </div>
    <p className="text-sm text-gray-500 mb-3">Nombre de produits : {produits.length}</p>
<ul className="space-y-2">
        {produits.map((produit, index) => (
        <ProduitCarte
            key={index}
            nom={produit}
            onSupprimer={() => supprimerProduit(index)}
    />
        ))}
    </ul>
        </div>
    );
}

export default ListeCourse;