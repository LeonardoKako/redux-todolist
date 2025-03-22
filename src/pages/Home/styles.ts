import styled from "styled-components";

type Props = {
  color: string;
};

export const Container = styled.section`
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
`;

export const Table = styled.div`
  width: 1024px;
  min-height: 400px;
  padding: 8px 16px;
`;

export const Inputs = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 16px;

  input {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    padding: 8px;
  }

  button {
    width: 80px;
    height: 80%;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export const Tasks = styled.ul`
  margin-top: 40px;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
export const Task = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 24px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 16px;
  padding: 8px;
  text-align: center;

  input {
    color: #000;
    border: none;
    text-align: center;
    height: 100%;
    padding: 4px;
    font-size: 18px;
    background-color: transparent;
  }

  img {
    width: 24px;
  }
`;

export const IMG = styled.div<Props>`
  background-color: ${({ color }) => color};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
