import React, { useState } from 'react';
import ToDoLists from "./ToDoLists";

const App = () =>{

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event)=>{
    setInputList(event.target.value);
  };

  const listOfItems =()=>{
    setItems((prevItem)=>{
      return [...prevItem,inputList]
    });
    setInputList("");
  };

  const deleteItems = (id) =>{
    console.log("deleted");
    setItems((prevItem)=>{
      return prevItem.filter((arrElem, index)=>{
        return index !==id; 
      })
    })

}

  return <>
   <div className="main_div">
    <div className="center_div">
      <br />
      <h1>ToDo List</h1>
      <br />
      <input type="text" placeholder="Add a items" value={inputList} onChange={itemEvent}/>
      <button onClick={listOfItems}> + </button>

      <ol>
        {items.map((itemValue, index)=>{
         return <ToDoLists  
          key={index} 
          id={index}
          text={itemValue} 
          onSelect={deleteItems}  />;
        })}
      </ol>
    </div>
   </div>
  </>;
}
export default App;
