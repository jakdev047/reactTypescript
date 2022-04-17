import React, { useState, useEffect } from "react";
import { TaskList } from "../../type";
import "./style.css";

export default function DragAndDrop() {
  const [taskList, setTaskList] = useState<TaskList | null>(null);

  useEffect(() => {
    setTaskList({
      taskList: [
        {
          id: 1,
          title: "Todo",
          list: [
            { id: 1, name: "Bangladesh", draggable: true },
            { id: 2, name: "Pakistan", draggable: true },
            { id: 3, name: "India", draggable: true },
          ],
        },
        {
          id: 2,
          title: "Todo two",
          list: [],
        },
        {
          id: 3,
          title: "Todo three",
          list: [],
        },
      ],
    });
  }, []);

  return (
    <>
      <div className="section">
        {taskList?.taskList?.map((item, index) => {
          return (
            <div key={index} className="choice">
              {item?.list?.map((itm, i) => {
                return (
                  <div
                    key={i}
                    className="drag-item"
                    draggable={itm?.draggable}
                    onDragStart={() => {}}
                    onDragEnd={() => {}}
                    onDrop={() => {}}
                    onDragOver={() => {}}
                    onDragLeave={() => {}}
                  >
                    {itm?.name}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
