import Header from './components/components/Header'; // o './components/Header' según donde tengas App.jsx
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>¡Bienvenidos a nuestra tienda online!</h2>
        <p>Próximamente catálogo de productos disponible.</p>
      </main>
    </div>
  );
}

export default App; 