// NewsList.tsx
import React, { useState, useEffect } from 'react';
import './NewsList.css';

interface News {
  title: string;
  info: string;
  reporter: string;
}

const NewsList: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // Simulación de datos JSON directamente en el componente
    const jsonData: News[] = [
      { title: 'Noticia1', info: 'Información de la noticia 1', reporter: 'Reportero1' },
      { title: 'Noticia2', info: 'Información de la noticia 2', reporter: 'Reportero2' },
      { title: 'Noticia3', info: 'Información de la noticia 3', reporter: 'Reportero3' },
      { title: 'Noticia4', info: 'Información de la noticia 4', reporter: 'Reportero4' },
      { title: 'Noticia5', info: 'Información de la noticia 5', reporter: 'Reportero5' },
      { title: 'Noticia6', info: 'Información de la noticia 6', reporter: 'Reportero6' },
      { title: 'Noticia7', info: 'Información de la noticia 7', reporter: 'Reportero7' },
      { title: 'Noticia8', info: 'Información de la noticia 8', reporter: 'Reportero8' },
      { title: 'Noticia9', info: 'Información de la noticia 9', reporter: 'Reportero9' },
      { title: 'Noticia10', info: 'Información de la noticia 10', reporter: 'Reportero10' },
    ];

    setNews(jsonData);
  }, []);

  const filteredNews = news
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className='container'>
      <input
        type='text'
        placeholder='Search by title'
        className='box box1'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredNews.map((item, index) => (
          <li key={index} className='list-box box1'>
            <strong>{item.title}</strong>
            <br />
            {item.info}
            <br />
            {'- '}{item.reporter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
