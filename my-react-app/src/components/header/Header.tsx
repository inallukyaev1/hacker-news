import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <ul className="menu-list">
          <li className="menu-list__item">
            <button className="home-btn">
              <a href="/" className="menu-list__link">
                Home
              </a>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
