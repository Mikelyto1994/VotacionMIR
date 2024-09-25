import styled from 'styled-components';
import PropTypes from 'prop-types';


const Candidato = ({ nombre, votar }) => {
  return (
    <CandidatoBox onClick={votar}>
      {nombre}
    </CandidatoBox>
  );
};

export default Candidato;

const CandidatoBox = styled.div`
  border: 2px solid green;
  padding: 10px;
  cursor: pointer;
  width: 100px;
  text-align: center;
  &:hover {
    background-color: lightgreen;
  }
`;

Candidato.propTypes = {
  nombre: PropTypes.string.isRequired,
  votar: PropTypes.func.isRequired,
};
