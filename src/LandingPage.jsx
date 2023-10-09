import React from 'react';
import modelo1 from './assets/modelo1.jpg';
import modelo2 from './assets/modelo2.jpg';
import pijama from './assets/pijama.jpg';
import trajeDeBaño from './assets/traje-de-baño.jpg';
import top from './assets/top.jpg';
import './LandingP.css'; // Importa los estilos CSS


function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Bienvenido a nuestra tienda, luce diva con Mika Fashion</h1>
        <p>Descubre las últimas tendencias en moda</p>
      </header>
      <section className="products">
        <div className="product">
        <img src={modelo1} alt="Modelo1"/>
          <h2>Modelo 1</h2>
          <p>Descripción del producto 1.</p>
          <button>Ver detalles</button>
        </div>
        <div className="product">
        <img src={trajeDeBaño} alt="TrajeDeBaño"/>
          <h2>Traje de Baño</h2>
          <p>Descripción del producto 4.</p>
          <button>Ver detalles</button>
        </div>
        <div className="product">
          <img src={modelo2} alt="Modelo2"/>
          <h2>Modelo 2</h2>
          <p>Descripción del producto 2.</p>
          <button>Ver detalles</button>
        </div>
        <div className="product">
          <img src={pijama} alt="Pijama"/>
          <h2>Pijama</h2>
          <p>Descripción del producto 3.</p>
          <button>Ver detalles</button>
        </div>
        {/* <div className="product">
          <img src={top} alt="Top Cereza" />
          <h2>Top Cereza</h2>
          <p>Descripción del producto 5.</p>
          <button>Ver detalles</button>
        </div> */}
      </section>
      <footer className="footer">
        <p>&copy; 2023 Mika Fashion</p>
        <div>
          <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
