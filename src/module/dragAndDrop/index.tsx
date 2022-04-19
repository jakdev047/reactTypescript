import React, { useState, useEffect } from "react";
// import { TaskList } from "../../type";
import {
  singleCardDragStart,
  singleCardDragEnd,
  singleCardDrop,
  singleCardDragOver,
  singleCardDragLeave,
  listDragStart,
  listDragEnd,
  listAndCardDrop,
  listDragOver,
  listDragLeave,
} from "../../utils/dragDropController";
import "./style.css";

export default function DragAndDrop() {
  const [taskList, setTaskList] = useState<any | null>(null);

  const [selectedCard, setSelectedCard] = useState<any | null>(null);
  const [selectedList, setSelectedList] = useState<any | null>(null);

  useEffect(() => {
    setTaskList([
      {
        id: 1,
        title: "Todo",
        draggable: true,
        list: [
          { id: 1, name: "Bangladesh", draggable: true },
          { id: 2, name: "Pakistan", draggable: true },
          { id: 3, name: "India", draggable: true },
        ],
      },
      {
        id: 2,
        title: "Todo two",
        draggable: true,
        list: [],
      },
      {
        id: 3,
        title: "Todo three",
        draggable: true,
        list: [],
      },
    ]);
  }, []);

  console.log("taskList", taskList);

  return (
    <>
      <div className="section">
        {taskList?.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="choice"
              data-index={index}
              data-item={item}
              draggable={item?.draggable}
              onDragStart={(e) => {
                e.stopPropagation();
                listDragStart(e, item, index, setSelectedList);
              }}
              onDragEnd={(e) => {
                e.stopPropagation();
                listDragEnd(e, item);
              }}
              onDrop={(e) => {
                e.stopPropagation();
                listAndCardDrop(
                  e,
                  selectedList,
                  selectedCard,
                  taskList,
                  setTaskList,
                  setSelectedList,
                  setSelectedCard
                );
              }}
              onDragOver={(e) => listDragOver(e, selectedCard)}
              onDragLeave={(e) => {
                listDragLeave(e, item);
              }}
            >
              {item?.list?.map((itm: any, i: number) => {
                return (
                  <div
                    key={i}
                    className="drag-item"
                    data-index={index}
                    data-nestedindex={i}
                    draggable={itm?.draggable}
                    onDragStart={(e) => {
                      e.stopPropagation();
                      singleCardDragStart(e, taskList, setSelectedCard);
                    }}
                    onDragEnd={(e) => {
                      e.stopPropagation();
                      singleCardDragEnd(e);
                    }}
                    onDrop={(e) =>
                      singleCardDrop(
                        e,
                        setSelectedCard,
                        taskList,
                        setSelectedCard,
                        selectedCard
                      )
                    }
                    onDragOver={(e) => singleCardDragOver(e, selectedCard)}
                    onDragLeave={singleCardDragLeave}
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
