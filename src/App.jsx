import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>¡Bienvenidos a mi E-commerce!</h2>
        <p>Catálogo de productos próximamente disponible.</p>
      </main>
    </div>
  );
}

export default App;