import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 72px;
    padding: 0 24px;
    border: 0;
    background: #ffffff;
    border-radius: 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70.8px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #ffffff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      height: 64px;
      width: 64px;
      border-radius: 50%;
    }

    div {
      margin: 22px 16px;
      flex: 1;

      strong {
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #3d3d4d;
      }

      p {
        margin-top: 4px;
        font-size: 18px;
        line-height: 21px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;
