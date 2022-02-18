import styled from "styled-components";

type StyledBackdropProps = {
  blur: number;
};

export const StyledBackdrop = styled.div<StyledBackdropProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${(props) => props.theme.colors.disabled.dark};
  backdrop-filter: blur(${(props) => props.blur}px);

  display: flex;
  justify-content: center;
  align-items: center;

  /* mount & unmount animations */
  animation: mount 0.5s forwards;

  @keyframes mount {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes unmount {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
