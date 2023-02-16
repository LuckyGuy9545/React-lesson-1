//* колекция компонентов
import Painting from './paintings';
import PropTypes from 'prop-types';

function PaintingsList({ items }) {
  return (
    <ul>
      {/* //== делаем динамический рендер(вне зависимости от кол-ва компонентов) */}
      {items.map(item => (
        //* ключ должен быть в самом первом елементе ".map"
        <li key={item.id}>
          <Painting
            imageUrl={item.url}
            tittle={item.tittle}
            author={item.author.tag}
            profileUrl={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

//== и тут проверка пропов нужна
PaintingsList.propTypes = {
  //* items это масив чего?
  items: PropTypes.arrayOf(
    //* масив обьектов (так как paintings.json - масив обьектов
    //* могут быть у другие масивы(чисел, строк и т.д.))
    PropTypes.shape({
      //* id в json-файле - это строка, поэтому проверка идет на наличие строки
      id: PropTypes.string.isRequired,
    })
  ),
};

export default PaintingsList;
