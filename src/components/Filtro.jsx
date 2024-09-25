import styled from 'styled-components';
import PropTypes from 'prop-types';


const Filtro = ({ filtro, setFiltro }) => {
  const cambiarTipo = (tipo) => {
    setFiltro({ ...filtro, tipo });
  };

  const cambiarCandidato = (index) => {
    const nuevosSeleccionados = [...filtro.candidatosSeleccionados];
    nuevosSeleccionados[index] = !nuevosSeleccionados[index];
    setFiltro({ ...filtro, candidatosSeleccionados: nuevosSeleccionados });
  };

  const seleccionarTodos = () => {
    const todosSeleccionados = filtro.candidatosSeleccionados.every((seleccionado) => seleccionado);
    setFiltro({ ...filtro, candidatosSeleccionados: filtro.candidatosSeleccionados.map(() => !todosSeleccionados) });
  };

  return (
    <FiltroBox>
      <h3>¿Cómo ver los votos individuales?</h3>
      <Opciones>
        <div>
          <input
            type="radio"
            checked={filtro.tipo === 'porcentaje'}
            onChange={() => cambiarTipo('porcentaje')}
          /> % Porcentaje
        </div>
        <div>
          <input
            type="radio"
            checked={filtro.tipo === 'numerico'}
            onChange={() => cambiarTipo('numerico')}
          /> Cantidades
        </div>
      </Opciones>

      <h3>¿Qué candidatos?</h3>
      <div>
        <label>
          <input
            type="checkbox"
            checked={filtro.candidatosSeleccionados.every(seleccionado => seleccionado)}
            onChange={seleccionarTodos}
          /> Todos
        </label>
      </div>

      <Opciones>
        {filtro.candidatosSeleccionados.map((seleccionado, index) => (
          <div key={index}>
            <label>
              <input
                type="checkbox"
                checked={seleccionado}
                onChange={() => cambiarCandidato(index)}
              /> Candidato {index + 1}
            </label>
          </div>
        ))}
      </Opciones>
    </FiltroBox>
  );
};

export default Filtro;

const FiltroBox = styled.div`
  border: 2px solid red;
  padding: 5px;
  margin:5px;
  font-size: 14px;
`;

/* Aplica un estilo para que cada opción se muestre en su propia línea */
const Opciones = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

Filtro.propTypes = {
    filtro: PropTypes.shape({
      tipo: PropTypes.string.isRequired,
      candidatosSeleccionados: PropTypes.arrayOf(PropTypes.bool).isRequired,
    }).isRequired,
    setFiltro: PropTypes.func.isRequired,
  };
  