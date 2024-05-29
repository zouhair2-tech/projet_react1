// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import MyComponent from './MyComponent'; // Supposez que ce composant a déjà été créé

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Bienvenue dans mon premier projet React !</h1>
        <MyComponent />
        <p>Voici un exemple d'application React avec une barre de navigation et un pied de page.</p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
