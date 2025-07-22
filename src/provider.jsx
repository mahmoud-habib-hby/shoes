import React, {createContext, useState} from "react";

export const Text = createContext();

export function TextProvider({ children }) {
  const d=JSON.parse(localStorage.getItem("data"))
  const data=JSON.parse(localStorage.getItem("d"))
  const [vall,setVal]=useState(d?d:[]);
 const [person,setperson]=useState(data?data:{});
 function Person(name,email){
      let data={
        name:name,
        email:email
      }
      setperson(data)
      localStorage.setItem("d",JSON.stringify(data))
 }


  function add(name ,price){
    let va={
      name:name,
      price:price,
      id:Date.now()
    };
    const va2=[...vall,va];
    setVal(va2)
    localStorage.setItem("data",JSON.stringify(va2));
  }
  function delet(ide){
    const data=vall.filter((e)=>e.id!==ide);
    setVal(data)
    localStorage.setItem("data",JSON.stringify(data));
  }
  function buy(){
  let data=[]
    setVal(data)
    localStorage.setItem("data",JSON.stringify(data));
    
  }
  return (
    <Text.Provider value={{add,vall,setVal ,delet ,person,Person,buy}}>
      {children}
    </Text.Provider>
  ); 
}
