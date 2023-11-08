import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [toDos, setToDos] = useState([
    {
      id: uuid(),
      title: "제목1",
      content: "내용1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목2",
      content: "내용2",
      isDone: true,
    },
    {
      id: uuid(),
      title: "제목3",
      content: "내용3",
      isDone: false,
    },
    {
      id: uuid(),
      title: "제목4",
      content: "내용4",
      isDone: false,
    },
  ]);
  return (
    <div className="App">
      <header>
        <h1>NangKong TODOLIST</h1>
      </header>
      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newToDo = {
              id: uuid(),
              title: title,
              content: content,
              isDone: false,
            };
            setToDos([...toDos, newToDo]);
            setTitle("");
            setContent("");
          }}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2>제목 : &nbsp;</h2>
            <input
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            &nbsp; &nbsp; &nbsp; <h2> 내용 : &nbsp;</h2>
            <input
              value={content}
              onChange={(event) => {
                setContent(event.target.value);
              }}
            />
          </div>
          <button>🎀추가하기🎀</button>
        </form>
        <div>
          <h1>WORKING🔥</h1>
          <div className="todolist">
            {toDos
              .filter((fToDo) => {
                return fToDo.isDone === false;
              })
              .map((mToDo) => {
                return (
                  <div className="todolist-card">
                    <h3>{mToDo.title}</h3>
                    <p>{mToDo.content}</p>
                    <div>
                      <button
                        onClick={() => {
                          const deleteToDo = toDos.filter((e) => {
                            return mToDo.id !== e.id;
                          });
                          setToDos(deleteToDo);
                        }}
                      >
                        삭제
                      </button>
                      <button
                        onClick={() => {
                          const doneToDo = toDos.map((e) => {
                            if (mToDo.id === e.id) {
                              return { ...e, isDone: !e.isDone };
                            } else {
                              return e;
                            }
                          });
                          setToDos(doneToDo);
                        }}
                      >
                        완료
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div>
          <h1>DONE✔️</h1>
          <div className="todolist">
            {toDos
              .filter((fToDo) => {
                return fToDo.isDone === true;
              })
              .map((mToDo) => {
                return (
                  <div className="todolist-card">
                    <h3>{mToDo.title}</h3>
                    <p>{mToDo.content}</p>
                    <div>
                      <button
                        onClick={() => {
                          const deleteToDo = toDos.filter((e) => {
                            return mToDo.id !== e.id;
                          });
                          setToDos(deleteToDo);
                        }}
                      >
                        삭제
                      </button>
                      <button
                        onClick={() => {
                          const doneToDo = toDos.map((e) => {
                            if (mToDo.id === e.id) {
                              return { ...e, isDone: !e.isDone };
                            } else {
                              return e;
                            }
                          });
                          setToDos(doneToDo);
                        }}
                      >
                        취소
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
