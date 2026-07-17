function TacheCarte({ tache, onSupprimer, onToggle }) {
    // Couleurs douces selon la priorité
    const couleursPriorite = {
        haute: 'bg-[#F4D9D9] text-[#A66B6B] border-[#EABEBE]',
        moyenne: 'bg-[#F6E9D0] text-[#A9884F] border-[#EEDBB0]',
        normal: 'bg-[#E6EEE1] text-[#7C9770] border-[#D6E4CC]',
    };

    const stylePriorite = couleursPriorite[tache.priorite] || couleursPriorite.normal;

    return (
        <div
            className={`bg-white border ${
                tache.estTerminee ? 'border-[#EADFD9] opacity-60' : 'border-[#E3D5CE]'
            } rounded-xl p-4 shadow-sm transition`}
        >
            <div className="flex items-center justify-between mb-2">
                <h4
                    className={`font-semibold text-[#6B5B54] ${
                        tache.estTerminee ? 'line-through text-[#C4B3AA]' : ''
                    }`}
                >
                    {tache.nom}
                </h4>
                <span
                    className={`text-xs font-medium px-3 py-1 rounded-full border ${stylePriorite}`}
                >
                    {tache.priorite}
                </span>
            </div>

            {tache.description && (
                <p className="text-sm text-[#A38F87] mb-3">{tache.description}</p>
            )}

            <div className="flex gap-2">
                <button
                    onClick={onToggle}
                    className="text-sm px-3 py-1.5 rounded-lg bg-[#F3EAE6] text-[#8B7873] hover:bg-[#EADFD9] transition"
                >
                    {tache.estTerminee ? '↺ Marquer à faire' : '✓ Marquer terminée'}
                </button>
                <button
                    onClick={onSupprimer}
                    className="text-sm px-3 py-1.5 rounded-lg bg-[#F4D9D9] text-[#A66B6B] hover:bg-[#EABEBE] transition"
                >
                    ✕ Supprimer
                </button>
            </div>
        </div>
    );
}

export default TacheCarte;