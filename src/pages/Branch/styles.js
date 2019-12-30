import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: rgba(250, 250, 250, 0.1);;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 30px auto;
`;

export const Card = styled.div`
  width: 200px;
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: 80px auto;

`;

export const CardTop = styled.div`
  background: #d88d3c;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid #eee;
  padding: 30px;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

  }
`;

export const CardCotent = styled.ul`
  background: #FFF;
  border-radius: 0 0  4px 4px;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  li {
    display: flex;
    flex-direction: row;
  }

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 18px;
  }
`;
