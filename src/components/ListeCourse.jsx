import ProduitCarte from './ProduitCarte';

function ListeCourse() {
    const produits = ['Compote', 'Lait', 'Pampers'];
    
    return (
        <div>
        <h2>Liste de courses</h2>
        <ul>
        {produits.map((produit, index) => (
            <ProduitCarte key={index} nom={produit} />
        ))}
        </ul>
        </div>
    );
}

export default ListeCourse;