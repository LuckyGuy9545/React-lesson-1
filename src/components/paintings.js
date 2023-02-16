import PropTypes from 'prop-types';
//== это как сделать вывод дефолтного изображения
import defaultImage from '../components/default-image.jpg';

//== делаем компонент Painting
export default function Painting(props) {
  //== деструктуризация, чтобы не было постоянно
  //== props.imageUrl, props.tittle, props.author
  const {
    imageUrl = defaultImage,
    tittle,
    profileUrl,
    author = 'это дефолтное значение',
    price,
    quantity,
  } = props;
  //==или тоже сделать сферху Painting({imageUrl, tittle ...})
  return (
    <div>
      <img src={imageUrl} alt={tittle} width="480" height="300" />
      <h2>{tittle}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p> Цена: {price} кредитов </p>
      {/* //== РЕНДЕР ПРИ УСЛОВИИ*/}
      {/* //-- если кол-во < 10 то "заканчивается" else "есть в наличии" */}
      <p> Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'} </p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

//== prop-types, обязательно для всех пропсов
//-- в случае если пропс будет не соответсвовать, данный метод выведет ошибку в консоль
Painting.propTypes = {
  imageUrl: PropTypes.string,
  tittle: PropTypes.string,
  profileUrl: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

//* пропсы лучше всего прописывать в файле рендера, в данном случае в App.js

//* дефолтное значение прийдет тогда когда мы не получим значения по этому пропсу,
//* в даном случае author = 'это дефолтное значение' - это дефол-е значение
