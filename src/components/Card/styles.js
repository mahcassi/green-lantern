import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  height: 360px;
  background: #000;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover .info-card {
    opacity: 1;
    visibility: visible;
    transition: all 1s;
  }

  &:hover .img-wrapper {
    opacity: 0.5;
  }

  .img-wrapper {
    width: 100%;
    height: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover
    }
  }

  .info-card {
    opacity: 0;
    visibility: hidden;
    width: 200px;
    height: 110px;
    position: absolute;
    padding: 30px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 50px;
    line-height: 25px;
    box-shadow: 1px 5px 8px rgba(0, 0, 0, 0.5);

    h1 {
      font-size: 22px;
      margin-bottom: 7px;
    }

    p {
      font-size: 17px;
    }

    .p-weight {
      font-weight: 700;
    }
  }

`;