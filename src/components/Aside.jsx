import './Aside.css';

function Aside() {
  const menuItems = [
    { title: 'Новости', link: '/news', description: 'Последние новости компании' },
    { title: 'Об авторе', link: '/about', description: 'Информация о создателе проекта' },
    { title: 'Обратная связь', link: '/contact', description: 'Напишите нам' },
    { title: 'Продукты и услуги', link: '/products', description: 'Каталог наших предложений' }
  ];

  return (
    <div className="aside-container centered">
      <h3>Разделы сайта</h3>
      <table className="styled-aside-table">
        <thead>
          <tr>
            <th>Раздел</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr key={index}>
              <td>
                <a href={item.link} className="section-link">
                  {item.title}
                </a>
              </td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Aside;
