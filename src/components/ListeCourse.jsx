import { useState } from 'react';
import ProduitCarte from './ProduitCarte';

function ListeCourse() {
    const [produits, setProduits] = useState(['Pain', 'Lait', 'Œufs']);
    const [texteInput, setTexteInput] = useState('');
    
    function ajouterProduit() {
        const valeur = texteInput.trim();
        
        if (valeur === '') {
            alert('Le champ est vide !');
            return;
        }
        
        if (produits.includes(valeur)) {
            alert('Ce produit est déjà dans la liste !');
            return;
        }
        
        setProduits([...produits, valeur]);
        setTexteInput('');
    }
    
    return (
        <div>
        <h2>Liste de courses</h2>
            <input
        type="text"
        value={texteInput}
        onChange={(e) => setTexteInput(e.target.value)}
        placeholder="Nom du produit"
    />
    <button onClick={ajouterProduit}>Ajouter</button>
        <ul>
        {produits.map((produit, index) => (
            <ProduitCarte key={index} nom={produit} />
        ))}
        </ul>
        </div>
    );
}

export default ListeCourse;