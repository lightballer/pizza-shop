import './App.css';
import logo from './images/logo.fw.png';
import margarita from './images/margarita.jpg';

function App() {
  return (
    <div>
      <header>
        <div className='header-content'>
          <img src={logo} alt='54 pizza logo' />
          <nav>
            <div>
              <p>Главная</p>
            </div>
            <div>
              <p>Меню</p>
            </div>
            <div>
              <p>О нас</p>
            </div>
          </nav>
          <div className='contacts'>
            <div className='phone-numbers'>
              <a href='tel:+380443840470'>+380443840470</a>
              <a href='tel:+380633815496'>+380633815496</a>
              <a href='tel:+380675454646'>+380675454646</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className='search-cart-container'>
          <div className='stub'></div>
          <div className='search-container'>
            <input className='search' type='text' placeholder='Поиск...' />
            <button className='search-button' type='submit'></button>
          </div>
          <div className='cart-container'>
            <div className='cart-price'>104 грн.</div>
            <div className='cart-icon'>
              <i className='fas fa-shopping-cart'></i>
            </div>
          </div>
        </section>

        <section className='pizza-cards-container'>
          <div className='pizza-card'>
            <div className='pizza-photo-container'>
              <img src={margarita} alt='margarita' className='pizza-photo' />
            </div>

            <div className='pizza-description-content'>
              <div className='pizza-name'>
                <h1>Margarita</h1>
              </div>

              <div className='pizza-composition'>
                Томатный соус, моцарелла, базилик
              </div>

              <div className='buttons-block'>
                <button className='button active'>Маленькая</button>
                <button className='button'>Средняя</button>
                <button className='button'>Большая</button>
              </div>

              <div className='pizza-card-footer'>
                <div className='pizza-price'>129.99 грн.</div>
                <button className='pizza-add-to-cart'>В корзину</button>
              </div>
            </div>
          </div>
          <div className='pizza-card'>
            <div className='pizza-photo-container'>
              <img src={margarita} alt='margarita' className='pizza-photo' />
            </div>

            <div className='pizza-description-content'>
              <div className='pizza-name'>
                <h1>Margarita</h1>
              </div>

              <div className='pizza-composition'>
                Томатный соус, моцарелла, базилик
              </div>

              <div className='buttons-block'>
                <button className='button active'>Маленькая</button>
                <button className='button'>Средняя</button>
                <button className='button'>Большая</button>
              </div>

              <div className='pizza-card-footer'>
                <div className='pizza-price'>129.99 грн.</div>
                <button className='pizza-add-to-cart'>В корзину</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
