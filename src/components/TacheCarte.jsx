function TacheCarte({ tache, onSupprimer, onToggle }) {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '5px' }}>
            <h4 style={{ textDecoration: tache.estTerminee ? 'line-through' : 'none' }}>
                {tache.nom} - Priorité : {tache.priorite}
            </h4>
            {tache.description && <p>{tache.description}</p>}
            <button onClick={onToggle}>
                {tache.estTerminee ? 'Marquer à faire' : 'Marquer terminée'}
            </button>
            <button onClick={onSupprimer}>Supprimer</button>
        </div>
    );
}

export default TacheCarte;