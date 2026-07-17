import { useState } from 'react';
import TacheCarte from './TacheCarte';

function GestionTaches() {
    const [taches, setTaches] = useState([]);

    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [priorite, setPriorite] = useState('normal');

    const [filtre, setFiltre] = useState('toutes');

    function ajouterTache() {
        const nomNettoye = nom.trim();

        if (nomNettoye === "") {
            alert("Le nom de la tâche est requis !");
            return;
        }

        const nouvelleTache = {
            nom: nomNettoye,
            description: description.trim(),
            priorite: priorite,
            estTerminee: false
        };

        setTaches([...taches, nouvelleTache]);

        setNom('');
        setDescription('');
        setPriorite('normal');
    }

    function supprimerTache(index) {
        const nouvellesTaches = taches.filter((tache, i) => i !== index);
        setTaches(nouvellesTaches);
    }

    function toggleTerminee(index) {
        const nouvellesTaches = taches.map((tache, i) => {
            if (i === index) {
                return { ...tache, estTerminee: !tache.estTerminee };
            }
            return tache;
        });
        setTaches(nouvellesTaches);
    }

    function getTachesFiltrees() {
        if (filtre === 'urgentes') {
            return taches.filter(t => t.priorite === 'haute');
        }
        if (filtre === 'terminees') {
            return taches.filter(t => t.estTerminee === true);
        }
        if (filtre === 'aFaire') {
            return taches.filter(t => t.estTerminee === false);
        }
        return taches;
    }

    const tachesAffichees = getTachesFiltrees();

    return (
        <div className="bg-[#FBF6F2] rounded-2xl shadow-sm p-8 max-w-xl mx-auto border border-[#EADFD9]">
            <h2 className="text-2xl font-semibold text-[#8B7873] mb-6 tracking-wide">
                🌸 Gestion de tâches
            </h2>

            <div className="flex flex-col gap-3 mb-6">
                <input
                    type="text"
                    placeholder="Nom de la tâche (requis)"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    className="border border-[#E3D5CE] bg-white rounded-xl px-4 py-2 text-[#6B5B54] placeholder-[#C4B3AA] focus:outline-none focus:ring-2 focus:ring-[#E8C9A8] transition"
                />
                <input
                    type="text"
                    placeholder="Description (optionnel)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border border-[#E3D5CE] bg-white rounded-xl px-4 py-2 text-[#6B5B54] placeholder-[#C4B3AA] focus:outline-none focus:ring-2 focus:ring-[#E8C9A8] transition"
                />
                <select
                    value={priorite}
                    onChange={(e) => setPriorite(e.target.value)}
                    className="border border-[#E3D5CE] bg-white rounded-xl px-4 py-2 text-[#6B5B54] focus:outline-none focus:ring-2 focus:ring-[#E8C9A8] transition"
                >
                    <option value="normal">Normale</option>
                    <option value="moyenne">Moyenne</option>
                    <option value="haute">Haute</option>
                </select>
                <button
                    onClick={ajouterTache}
                    className="bg-[#D9B6A3] text-white font-medium px-4 py-2 rounded-xl hover:bg-[#CBA491] transition shadow-sm"
                >
                    Ajouter la tâche
                </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {[
                    { key: 'toutes', label: 'Toutes' },
                    { key: 'urgentes', label: 'Urgentes' },
                    { key: 'terminees', label: 'Terminées' },
                    { key: 'aFaire', label: 'À faire' },
                ].map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => setFiltre(key)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                            filtre === key
                                ? 'bg-[#C9A9DC] text-white shadow-sm'
                                : 'bg-[#F3EAE6] text-[#8B7873] hover:bg-[#EADFD9]'
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="space-y-3">
                {tachesAffichees.length === 0 && (
                    <p className="text-[#C4B3AA] italic text-center py-4">
                        Aucune tâche à afficher.
                    </p>
                )}

                {tachesAffichees.map((tache, index) => (
                    <TacheCarte
                        key={index}
                        tache={tache}
                        onSupprimer={() => supprimerTache(index)}
                        onToggle={() => toggleTerminee(index)}
                    />
                ))}
            </div>

            <p className="text-sm text-[#A38F87] mt-6 font-medium text-right">
                Total : {taches.length} tâche(s)
            </p>
        </div>
    );
}

export default GestionTaches;