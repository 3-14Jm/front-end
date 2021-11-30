import styled from "styled-components";

export const WrapperAboutUs = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 50px;
  flex-wrap: wrap;
  background: linear-gradient(to bottom, #ffffff, #ddffdb);;
`

export const Image = styled.img`
  width: 330px;
  height: 388px;
  border-radius: 15px;
  margin: 5px;
  &:hover {
    filter: blur(2px);
    transition: 0.3s;
    cursor: pointer;
  }
`

export const InfoText = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  font-size: 24px;
  text-align: center; `