import React from 'react';
import '../styles/style.css';// Импортируем CSS для страницы Home

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h2>Добро пожаловать в наш интернет-магазин!</h2>
        <p>Широкий выбор платьев, аксессуаров и обуви для вашего стиля и комфорта.</p>
        <button className="shop-now-btn">Начать покупки</button>
      </div>

      <div className="categories">
        <h3>Популярные категории</h3>
        <div className="category-cards">
          <div className="category-card">
            <img src="https://via.placeholder.com/300x200?text=Д Dresses" alt="Dresses" />
            <h4>Платья</h4>
            <p>От элегантных вечерних до повседневных моделей.</p>
          </div>
          <div className="category-card">
            <img src="https://via.placeholder.com/300x200?text=Accessories" alt="Accessories" />
            <h4>Аксессуары</h4>
            <p>Сумки, украшения и многое другое для завершения образа.</p>
          </div>
          <div className="category-card">
            <img src="https://via.placeholder.com/300x200?text=Shoes" alt="Shoes" />
            <h4>Обувь</h4>
            <p>Стильная и удобная обувь на любой случай.</p>
          </div>
        </div>
      </div>

      <div className="featured-products">
        <h3>Наши новинки</h3>
        <div className="product-list">
          <div className="product-card">
            <img src="https://via.placeholder.com/200x300?text=Product+1" alt="Product 1" />
            <h4>Летнее платье</h4>
            <p>Цена: $29.99</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200x300?text=Product+2" alt="Product 2" />
            <h4>Кожаная сумка</h4>
            <p>Цена: $49.99</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/200x300?text=Product+3" alt="Product 3" />
            <h4>Ботинки на каблуке</h4>
            <p>Цена: $39.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
