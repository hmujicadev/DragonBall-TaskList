import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false)
  const [loading,setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
        if (!localStorageItem) { 
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }

    }, 200);
  },[])
  
  const saveItem = (newItem) => {
    try {
      const stringifyTodos = JSON.stringify(newItem)
      localStorage.setItem(itemName,stringifyTodos)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }
  return {
    item,
    saveItem,
    setLoading,
    loading,
    error
  }
}
export {useLocalStorage}