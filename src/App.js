import React, { useState, useEffect } from 'react';
import CardContainer from './components/CardContainer';
import ErrorPage from './components/ErrorPage';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [error,SetError] = useState(false)
  const [page,SetPage] = useState(1)

  const pages = (e) => {
    const number = e.target.value
    SetPage(number)
    let page_buttons_container = document.getElementById("pages-buttons-container-steps")
    let childs = page_buttons_container.childNodes
    let last_element = page_buttons_container.lastElementChild
    if (number === last_element.value){
      let count = 0
      for(let i = number;i < parseInt(number) + 5;i++){
        childs[count].value = i
        childs[count].innerText = i
        count++;
      }
    }
    if (number === '1'){
      let count = 0
      for(let i = 2;i < 7;i++){
        childs[count].value = i
        childs[count].innerText = i
        count++;
      }
    }
  }
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(response => {
        console.log(response)
        SetError(false); 
        return response.json()
      }
      )
      .then(data => setCharacters(data.results))
      .catch(error => {
        console.log(error)
        SetError(true)}
      );
  }, [page]);

  return (
    <div className="App">
      {console.log(error)}
      {error ? <ErrorPage/> : <CardContainer characters={characters} pages={pages}/>}
    </div>
  );
};


export default App;
