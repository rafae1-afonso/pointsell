import React from 'react';
import styled from 'styled-components';

// O container principal que funciona como uma <label>
// Isso garante que clicar no texto também marque a checkbox
const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none; /* Impede a seleção do texto do label */
  gap: 0.5rem; /* Espaço entre a caixinha e o texto */
  font-family: sans-serif;
`;

// A checkbox nativa, que ficará escondida, mas funcional
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /* A técnica abaixo esconde o elemento visualmente, mas o mantém acessível para leitores de tela */
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

// Ícone de "check" (✓)
// Usamos SVG para que ele seja nítido em qualquer tamanho
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`;

// A caixa estilizada que o usuário verá
const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${props => (props.checked ? '#F26B38' : '#f0f0f0')};
  border: 2px solid ${props => (props.checked ? '#F26B38' : '#1D1B20')};
  border-radius: 4px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }

  /* Estilo para quando a checkbox escondida recebe foco (navegação via teclado) */
  ${HiddenCheckbox}:focus-visible + & {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  }
`;

const Checkbox = ({ className, checked, label, ...props }) => {
    return (
        <CheckboxContainer className={className}>
            <HiddenCheckbox checked={checked} {...props} />
            <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
            <span>{label}</span>
        </CheckboxContainer>
    );
};

export default Checkbox;