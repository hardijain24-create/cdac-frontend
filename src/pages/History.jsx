import { Search, Settings, Bell } from 'lucide-react';

function History() {
  const historyItems = [
    {
      id: 1,
      title: 'C++',
      subtitle: 'Object Oriented Programming',
      thumbnail: 'https://images.pexels.com/photos/20432872/pexels-photo-20432872.jpeg?auto=compress&cs=tinysrgb&h=350',
      watchedDate: 'Today',
    },
    {
      id: 2,
      title: 'C++',
      subtitle: 'Data Structures',
      thumbnail: 'https://images.pexels.com/photos/34803988/pexels-photo-34803988.jpeg?auto=compress&cs=tinysrgb&h=350',
      watchedDate: 'Yesterday',
    },
    {
      id: 3,
      title: 'C++',
      subtitle: 'Advanced Programming',
      thumbnail: 'https://images.pexels.com/photos/18485544/pexels-photo-18485544.jpeg?auto=compress&cs=tinysrgb&h=350',
      watchedDate: 'Yesterday',
    },
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <h2 className="page-title">Watch History</h2>
        <div className="history-sections">
          <div className="history-group">
            <h3 className="history-date-title">Today</h3>
            <div className="history-list">
              {historyItems
                .filter((item) => item.watchedDate === 'Today')
                .map((item) => (
                  <div key={item.id} className="history-card">
                    <div className="history-thumbnail">
                      <img src={item.thumbnail} alt={item.title} />
                    </div>
                    <div className="history-info">
                      <h3 className="history-title">{item.title}</h3>
                      <p className="history-subtitle">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="history-group">
            <h3 className="history-date-title">Yesterday</h3>
            <div className="history-list">
              {historyItems
                .filter((item) => item.watchedDate === 'Yesterday')
                .map((item) => (
                  <div key={item.id} className="history-card">
                    <div className="history-thumbnail">
                      <img src={item.thumbnail} alt={item.title} />
                    </div>
                    <div className="history-info">
                      <h3 className="history-title">{item.title}</h3>
                      <p className="history-subtitle">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
