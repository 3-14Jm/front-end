import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px;
  background-color: #edffed;
  border: 1px solid #035200;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 8px #0c5700;
`

export const Image = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 15px;
  border: 1px solid black;
  box-shadow: 0 0 8px #000000;
`

export const Label = styled.h2`
  font-weight: 500;
  font-size: 68px;
  margin: 0;
  align-self: center;
`

export const Text = styled.h4`
  font-weight: 300;
  font-size: 32px;
  align-self: center;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
`
export const Price = styled.h4`
  font-weight: 400;
  font-size: 32px;
  align-self: center;
`
export const Button = styled.button`
  margin-top: 30px;
  padding: 18px 32px;
  background-color: #175200;
  border: 1px solid #0b7500;
  border-radius: 10px;
  width: 200px;
  align-self: center;
  color: white;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    transition: 0.7s;
    background-color: #caffc3;
    color: #074100;
  }
`