import React from "react";
import {keyframes} from "styled-components";
import styled from 'styled-components';

export const CircleAnimation = React.memo((props) => {
    const formulaAnim = Math.floor(472 - 472 * (props.number / 100))

    const animFillStyles = keyframes`
      from {
        stroke-dashoffset: 472;
      }

      to {
        stroke-dashoffset: ${formulaAnim};
      }
    `
    const CircleStyles = styled.circle
        `fill: none;
      stroke: #ffb400;
      stroke-width: 10px;
      stroke-dasharray: 472;
      stroke-dashoffset: 0;
      animation: ${animFillStyles} 2s linear forwards;
    `
return <CircleStyles cx="80" cy="80" r="70" strokeLinecap="round"/>
})
