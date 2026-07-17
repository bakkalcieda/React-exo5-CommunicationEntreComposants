function ProduitCarte({ nom, onSupprimer }) {
    return (
        <li className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded px-3 py-2">
            <span className="text-gray-800">{nom}</span>
            <button
                onClick={onSupprimer}
                className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600 transition"
            >
                Supprimer
            </button>
        </li>
    );
}

export default ProduitCarte;