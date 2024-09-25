import{ useReducer, useState } from 'react';
import styled from 'styled-components';
import Candidato from './Candidato';
import TotalVotos from './TotalVotos';
import VotosIndividuales from './VotosIndividuales';
import Filtro from './Filtro';

const initialState = {
  candidatos: [0, 0, 0, 0],
  totalVotos: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'VOTAR': {
      const nuevosCandidatos = [...state.candidatos];
      nuevosCandidatos[action.index]++;
      return {
        candidatos: nuevosCandidatos,
        totalVotos: state.totalVotos + 1,
      };
    }
    default:
      return state;
  }
}

const SistemaVotacion = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filtro, setFiltro] = useState({
    tipo: 'numerico',
    candidatosSeleccionados: [true, true, true, true],
  });

  return (
    <Contenedor>
      <Header>Votación de candidatos</Header>

      {/* Candidatos en la parte superior */}
      <CandidatosLayout>
        {state.candidatos.map((votos, index) => (
          <Candidato
            key={index}
            nombre={`Candidato ${index + 1}`}
            votar={() => dispatch({ type: 'VOTAR', index })}
          />
        ))}
      </CandidatosLayout>

      {/* Sección de filtro a la izquierda y resultados a la derecha */}
      <MainLayout>
        <FiltroContainer>
          <Filtro filtro={filtro} setFiltro={setFiltro} />
        </FiltroContainer>
        <ResultadosContainer>
          <TotalVotosContainer>
            <TotalVotos total={state.totalVotos} />
          </TotalVotosContainer>
          <VotosIndividualesContainer>
            <VotosIndividuales
              candidatos={state.candidatos}
              totalVotos={state.totalVotos}
              filtro={filtro}
            />
          </VotosIndividualesContainer>
        </ResultadosContainer>
      </MainLayout>
    </Contenedor>
  );
};

export default SistemaVotacion;

const Contenedor = styled.div`
  border: 2px solid orange;
  padding: 20px;
`;

const Header = styled.h1`
  color: orange;
  text-align: center;
`;

/* Layout para los candidatos en la parte superior */
const CandidatosLayout = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

/* Layout principal: Filtro a la izquierda y Resultados a la derecha */
const MainLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

/* Filtro con ancho de 30% */
const FiltroContainer = styled.div`
  width: 30%;
`;

/* Resultados (TotalVotos y VotosIndividuales) con ancho de 70% */
const ResultadosContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

/* Contenedor para TotalVotos con 40% de la altura */
const TotalVotosContainer = styled.div`
  
  border: 1px solid blue;
  margin-bottom: 10px;
`;

/* Contenedor para VotosIndividuales con 60% de la altura */
const VotosIndividualesContainer = styled.div`
  
  border: 1px solid purple;
`;
