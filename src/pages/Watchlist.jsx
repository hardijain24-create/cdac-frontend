import { Search, Settings, Bell } from 'lucide-react';

function Watchlist() {
  const watchlistItems = [
    {
      id: 1,
      title: 'C++',
      subtitle: 'Templates and Generic Programming',
      thumbnail: 'https://images.pexels.com/photos/18477121/pexels-photo-18477121.jpeg?auto=compress&cs=tinysrgb&h=350',
    },
    {
      id: 2,
      title: 'C++',
      subtitle: 'Modern C++ Features',
      thumbnail: 'https://images.pexels.com/photos/18477127/pexels-photo-18477127.jpeg?auto=compress&cs=tinysrgb&h=350',
    },
    {
      id: 3,
      title: 'C++',
      subtitle: 'Design Patterns',
      thumbnail: 'https://images.pexels.com/photos/18464992/pexels-photo-18464992.jpeg?auto=compress&cs=tinysrgb&h=350',
    },
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <h2 className="page-title">Watchlist</h2>
        <div className="watchlist-grid">
          {watchlistItems.map((item) => (
            <div key={item.id} className="watchlist-card">
              <div className="watchlist-thumbnail">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className="watchlist-info">
                <h3 className="watchlist-title">{item.title}</h3>
                <p className="watchlist-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
