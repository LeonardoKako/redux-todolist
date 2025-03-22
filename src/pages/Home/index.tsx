import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootReducer } from "../../store";
import { addTask, deleteTask, updateTask } from "../../store/reducers/tasks";
import { Container, IMG, Inputs, Table, Task, Tasks } from "./styles";

import trash from "../../assets/images/trash.svg";
import edit from "../../assets/images/edit.svg";
import save from "../../assets/images/save.svg";
import { TypeTask } from "../../App";

const Home = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootReducer) => state.tasks ?? []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");

  const createTask = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTask({ name, email, phone }));
    setName("");
    setEmail("");
    setPhone("");
  };

  const startEditing = (index: number) => {
    const task = tasks[index];
    setEditIndex(index);
    setEditName(task.name);
    setEditEmail(task.email);
    setEditPhone(task.phone);
  };

  const saveTask = () => {
    if (editIndex !== null) {
      dispatch(
        updateTask({
          index: editIndex,
          task: { name: editName, email: editEmail, phone: editPhone },
        })
      );
      setEditIndex(null);
    }
  };

  return (
    <Container>
      <Table>
        <Inputs onSubmit={createTask}>
          <input
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="string"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit">Adicionar</button>
        </Inputs>
        <Tasks>
          {tasks.map((task: TypeTask, index: number) => (
            <Task key={index}>
              {editIndex === index ? (
                <>
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <strong>|</strong>
                  <input
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                  />
                  <strong>|</strong>
                  <input
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value)}
                  />
                  <strong>|</strong>
                  <IMG onClick={saveTask} color="green">
                    <img src={save} alt="Save Simbol" />
                  </IMG>
                </>
              ) : (
                <>
                  <input disabled value={task.name} />
                  <strong>|</strong>
                  <input disabled value={task.email} />
                  <strong>|</strong>
                  <input disabled value={task.phone} />
                  <strong>|</strong>
                  <IMG onClick={() => startEditing(index)} color="#3498db">
                    <img src={edit} alt="Edit Simbol" />
                  </IMG>
                </>
              )}
              <IMG onClick={() => dispatch(deleteTask(index))} color="red">
                <img src={trash} alt="Trash Simbol" />
              </IMG>
            </Task>
          ))}
        </Tasks>
      </Table>
    </Container>
  );
};

export default Home;
