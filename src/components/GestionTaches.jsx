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
        <div>
            <h2>Gestion de tâches</h2>

            <div>
                <input
                    type="text"
                    placeholder="Nom de la tâche (requis)"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description (optionnel)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <select
                    value={priorite}
                    onChange={(e) => setPriorite(e.target.value)}
                >
                    <option value="normal">Normale</option>
                    <option value="moyenne">Moyenne</option>
                    <option value="haute">Haute</option>
                </select>
                <button onClick={ajouterTache}>Ajouter la tâche</button>
            </div>

            <div style={{ marginTop: '15px' }}>
                <button onClick={() => setFiltre('toutes')}>Toutes</button>
                <button onClick={() => setFiltre('urgentes')}>Urgentes</button>
                <button onClick={() => setFiltre('terminees')}>Terminées</button>
                <button onClick={() => setFiltre('aFaire')}>À faire</button>
            </div>

            <div style={{ marginTop: '15px' }}>
                {tachesAffichees.length === 0 && <p>Aucune tâche à afficher.</p>}

                {tachesAffichees.map((tache, index) => (
                    <TacheCarte
                        key={index}
                        tache={tache}
                        onSupprimer={() => supprimerTache(index)}
                        onToggle={() => toggleTerminee(index)}
                    />
                ))}
            </div>

            <p>Total : {taches.length} tâche(s)</p>
        </div>
    );
}

export default GestionTaches;