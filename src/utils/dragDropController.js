//  UI event
export const commonBorderAddRemoveInCurrentElem = (e, type) => {
  switch (type) {
    case "add":
      e.currentTarget.parentElement.classList.add("border-2");
      e.currentTarget.parentElement.classList.add("border-slate-400");
      e.currentTarget.parentElement.classList.add("border-dashed");
      e.currentTarget.parentElement.classList.add("opacity-30");
      break;
    default:
      e.currentTarget.parentElement.classList.remove("border-2");
      e.currentTarget.parentElement.classList.remove("border-slate-400");
      e.currentTarget.parentElement.classList.remove("border-dashed");
      e.currentTarget.parentElement.classList.remove("opacity-30");
      break;
  }
};

export const commonBorderAddRemoveInCurrentElemList = (e, type) => {
  switch (type) {
    case "add":
      e.currentTarget.classList.add("border-2");
      e.currentTarget.classList.add("border-slate-400");
      e.currentTarget.classList.add("border-dashed");
      e.currentTarget.classList.add("rounded");
      break;
    default:
      e.currentTarget.classList.remove("border-2");
      e.currentTarget.classList.remove("border-slate-400");
      e.currentTarget.classList.remove("border-dashed");
      e.currentTarget.classList.remove("rounded");
      break;
  }
};

// Drag start event
export const singleCardDragStart = (e, taskList, setSelectedCard) => {
  const index = e.target.attributes["data-index"].value;
  const nestedIndex = e.target.attributes["data-nestedindex"].value;
  commonBorderAddRemoveInCurrentElem(e, "add");

  // to store in selected card
  if (taskList[index].list[nestedIndex].draggable) {
    setSelectedCard({
      item: taskList[index].list[nestedIndex],
      prevLocation: { index, nestedIndex },
    });
  }
};

export const listDragStart = (e, item, index, setSelectedList) => {
  if (!item?.draggable) return;
  const nestedIndex = e.target.attributes["data-nestedindex"];
  setSelectedList({ item, prevLocation: { index } });
  if (!nestedIndex?.value) {
    e.currentTarget.classList.add("border-2");
    e.currentTarget.classList.add("border-slate-400");
    e.currentTarget.classList.add("border-dashed");
    e.currentTarget.classList.add("rounded");
  }
};

// Drag end event
export const singleCardDragEnd = (e) => {
  commonBorderAddRemoveInCurrentElem(e, "remove");
};

export const listDragEnd = (e, item) => {
  if (!item?.draggable) return;
  const nestedIndex = e.target.attributes["data-nestedindex"];
  if (!nestedIndex?.value) {
    e.currentTarget.classList.remove("border-2");
    e.currentTarget.classList.remove("border-slate-400");
    e.currentTarget.classList.remove("border-dashed");
    e.currentTarget.classList.remove("rounded");
  }
};

// Drag drop event
export const singleCardDrop = (
  e,
  setSelectedCard,
  tasklist,
  setTaskList,
  selectedCard
) => {
  if (!selectedCard) return;

  // value store
  const { prevLocation, item } = selectedCard;
  const index = e.target.attributes["data-index"].value;
  const nestedIndex = e.target.attributes["data-nestedindex"].value;

  if (index === prevLocation.index) {
    const modifyTaskList = [...tasklist];
    const arr = modifyTaskList[index].list?.filter(
      (_, i) => i !== +prevLocation?.nestedIndex
    );

    const right = arr.splice(nestedIndex, arr.length);
    const result = [...arr, item, ...right];
    modifyTaskList[index].list = result;
    setTaskList(modifyTaskList);
    setSelectedCard(null);
  } else {
    const modifyTaskList = [...tasklist];
    const arr = modifyTaskList[index].list;

    let right;
    let result;

    if (+nestedIndex === 0) {
      // Card insert at beggening
      arr.unshift(item);
      result = arr;
    } else if (+nestedIndex + 1 === arr.length) {
      // Card insert at end
      arr.push(item);
      result = arr;
    } else {
      // Card insert anywhere
      right = arr.splice(nestedIndex, arr.length);
      result = [...arr, item, ...right];
    }

    modifyTaskList[index].list = result;
    const filter = modifyTaskList[prevLocation.index].list.filter(
      (_, i) => i !== +prevLocation.nestedIndex
    );
    modifyTaskList[prevLocation.index].list = filter;

    setTaskList(modifyTaskList);
    setSelectedCard(null);
  }

  commonBorderAddRemoveInCurrentElem(e, "remove");
};

export const listAndCardDrop = (
  e,
  selectedList,
  selectedCard,
  dataset,
  setDataset,
  setSelectedList,
  setSelectedCard
) => {
  e.preventDefault();

  commonBorderAddRemoveInCurrentElemList(e, "remove");

  let dropIndex = e.target.attributes["data-index"] || null;

  if (selectedList?.prevLocation?.index >= 0 && !selectedCard?.item?.id) {
    /* 
        Single card drop functionality
      */
    let right;
    let result;
    dropIndex = dropIndex?.value;

    // Filtered without selected card
    let arr = [...dataset]?.filter(
      (_, i) => i !== +selectedList?.prevLocation?.index
    );

    if (+dropIndex === 0) {
      // Card insert at beggening
      arr.unshift(selectedList?.item);
      result = arr;
    } else if (+dropIndex === arr.length) {
      // Card insert at end
      arr.push(selectedList?.item);
      result = arr;
    } else {
      // Card insert anywhere
      right = arr.splice(dropIndex, arr.length);
      result = [...arr, selectedList?.item, ...right];
    }

    setDataset(result);
    setSelectedList(null);
  } else {
    /* 
        List Drop functionality 
      */
    if (selectedCard?.prevLocation?.index === dropIndex?.value) {
      setSelectedCard(null);
      return;
    }

    if (selectedCard?.item && e.target.attributes["data-index"]) {
      const itemAlreayInList = dataset[dropIndex.value].list.some(
        (item) => item?.id === selectedCard?.item?.id
      );

      if (itemAlreayInList) {
        return;
      }

      const index = e.target.attributes["data-index"].value;
      const copy = [...dataset];
      copy[index].list.push(selectedCard?.item);

      const filter = copy[selectedCard?.prevLocation.index].list.filter(
        (_, i) => i !== +selectedCard?.prevLocation.nestedIndex
      );
      copy[selectedCard?.prevLocation?.index].list = filter;

      setDataset(copy);
      setSelectedCard(null);
    }
  }
};

// Drag over event
export const singleCardDragOver = (e, selectedCard) => {
  if (selectedCard) {
    e.currentTarget.parentElement.classList.add("border-2");
    e.currentTarget.parentElement.classList.add("border-slate-400");
    e.currentTarget.parentElement.classList.add("border-dashed");
  }
};

export const listDragOver = (e, selectedCard) => {
  e.preventDefault();
  if (!selectedCard) {
    const item = e.target.attributes["data-item"].value;
    if (item?.draggable) {
      commonBorderAddRemoveInCurrentElemList(e, "add");
    }
  }
};

// Drag leave event
export const singleCardDragLeave = (e) => {
  e.currentTarget.parentElement.classList.remove("border-2");
  e.currentTarget.parentElement.classList.remove("border-slate-400");
  e.currentTarget.parentElement.classList.remove("border-dashed");
};

export const listDragLeave = (e, item) => {
  if (!item?.draggable) return;
  const nestedIndex = e.target.attributes["data-nestedindex"];
  if (!nestedIndex?.value) {
    e.currentTarget.classList.remove("border-2");
    e.currentTarget.classList.remove("border-slate-400");
    e.currentTarget.classList.remove("border-dashed");
    e.currentTarget.classList.remove("rounded");
  }
};
