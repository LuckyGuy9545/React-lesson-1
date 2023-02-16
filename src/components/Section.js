import PropTypes from 'prop-types';

function Section({ tittle, children }) {
  return (
    <div>
      {/* //* если есть tittle то рендер названия */}
      {tittle && <h2>{tittle}</h2>}
      {children}
    </div>
  );
}

//== проверка будет ли название строкой, "не строгое"
Section.propTypes = {
  tittle: PropTypes.string,
};

export default Section;
