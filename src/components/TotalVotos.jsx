import styled from 'styled-components';
import PropTypes from 'prop-types';

const TotalVotos = ({ total }) => {
  return (
    <TotalVotosBox>
      TOTAL VOTOS: {total}
    </TotalVotosBox>
  );
};

export default TotalVotos;

const TotalVotosBox = styled.div`
  border: 2px solid blue;
  padding: 20px;
  font-size: 50px;
`;

TotalVotos.propTypes = {
  total: PropTypes.number.isRequired,
};
