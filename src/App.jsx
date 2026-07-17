import ListeCourse from './components/ListeCourse';
import GestionTaches from './components/GestionTaches';

function App() {
  return (
    <div className="min-h-screen bg-green-100 p-6 space-y-8">
      <ListeCourse />
      <GestionTaches />
    </div>
  );
}

export default App;