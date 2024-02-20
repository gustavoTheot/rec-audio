import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  width: 70rem;
  height: 100vh;
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  gap: 0.875rem;

  button {
    border: none;
    border-radius: 8px;
    background-color: #ee4b2b;

    width: 4rem;
    padding: 0.475rem;

    display: flex;
    flex-direction: row;
    justify-content: center;

    cursor: pointer;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AudioView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.2rem;

  video {
    border-radius: 8px;
  }
`

export const PlayList = styled.div`
  ul {
    margin-top: 1rem;

    width: 30rem;
    height: 15.625rem;
    overflow-y: scroll;

    li {
      list-style: none;

      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;

      video {
        border: 1px solid #1b2631;
        border-radius: 8px;

        width: 12.5rem;
      }

      a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 0.75rem;

        text-decoration: none;
        color: #ecf0f1;
      }
    }
  }
`

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ecf0f1;

  h3 {
    margin-bottom: 1rem;
  }

  span:first-child {
    font-size: 0.875rem;
    font-weight: bold;
  }

  span:last-child {
    font-weight: bold;
    padding: 0.125rem 0.5rem;
    background-color: #283747;
    border-radius: 999px;
    text-align: center;
    font-size: 0.875rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ListZero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const Inform = styled.div`
  text-align: center;

  color: #ecf0f1;

  p {
    margin-top: 8px;
    color: #424949;
  }
`
