import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 20px;
  border: 2px solid #0c6900;
  text-align: center;
  box-shadow: 0 0 8px #0c5700;
  margin-bottom: 40px;
`

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`

export const Image = styled.img`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  padding: 10px;
`

export const Label = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  margin: 10px;
  
`
export const SmallText = styled.h3`
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  align-self: center;
`

export const Button = styled.button`
  margin-bottom: -2px;
  padding: 15px 6px;
  background-color: #049d00;
  border: solid #074100 1px;
  border-radius: 0px 0px 20px 20px;
  width: 100%;
  cursor: pointer;
  color: white;
  font-size: 20px;

  &:hover {
    transition: 0.7s;
    background-color: #caffc3;
    color: #074100;
  }
`