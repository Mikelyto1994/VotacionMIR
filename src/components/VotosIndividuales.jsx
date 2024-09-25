import styled from 'styled-components';
import PropTypes from 'prop-types';


const VotosIndividuales = ({ candidatos, totalVotos, filtro }) => {
  const mostrarVotos = (votos) => {
    if (filtro.tipo === 'porcentaje') {
      return `${((votos / totalVotos) * 100).toFixed(2)}%`;
    }
    return `${votos} votos`;
  };

  const hayCandidatosSeleccionados = filtro.candidatosSeleccionados.some(seleccionado => seleccionado);

  return (
    <VotosBox>
      {/* Encabezado inicial */}
      <h3>Votos individuales:</h3>

      {/* Si no hay ningún candidato seleccionado */}
      {!hayCandidatosSeleccionados ? (
        <MensajeError>Favor de marcar algún candidato</MensajeError>
      ) : (
        // Mostrar los votos de los candidatos seleccionados
        candidatos.map((votos, index) => (
          filtro.candidatosSeleccionados[index] && (
            <div key={index}>
              Candidato {index + 1} &rarr; {mostrarVotos(votos)}
            </div>
          )
        ))
      )}
    </VotosBox>
  );
};

export default VotosIndividuales;

const VotosBox = styled.div`
  border: 2px solid purple;
  padding: 5px;
  font-size: 22px;
`;

const MensajeError = styled.div`
  color: red;
  font-size: 18px;
  margin-top: 10px;
`;

VotosIndividuales.propTypes = {
  candidatos: PropTypes.arrayOf(PropTypes.number).isRequired,
  totalVotos: PropTypes.number.isRequired,
  filtro: PropTypes.shape({
    tipo: PropTypes.string.isRequired,
    candidatosSeleccionados: PropTypes.arrayOf(PropTypes.bool).isRequired,
  }).isRequired,
};
