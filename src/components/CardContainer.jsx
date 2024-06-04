import React from 'react';
import Card from './Card';
import "../style-sheets/CardContainer.css"

const CardContainer = ({ characters,pages }) => {
    const filter = (e) => {
        let elements = document.getElementsByClassName("card-title ")
        for(let i = 0;i< elements.length;i++){
            if(elements[i].innerText.toLowerCase().indexOf(e.target.value.toLowerCase()) === -1){
                elements[i].parentNode.parentNode.parentNode.style.display = "none"
            }else{
                elements[i].parentNode.parentNode.parentNode.style.display = "grid"
            }
        }
    }

    
  return (
    <div className='container'>
        <form className='search-bar'>
            <input onInput={filter} className="input-search-bar" type="text" placeholder='Buscar...'/>
        </form>
        
        <div className="card-list">
        
        {characters.map((character) => (
            <Card key={character.id}
                imageUrl={character.image}
                title={character.name}
                status={`${character.status} - ${character.species}`}
                location={character.location.name}
                FirstSeen={character.origin.name}
            />
        ))}
        </div>
        <div id='pages-buttons-container'>
            <button onClick={pages} className='page-button-container' value="1">1</button>
            <div id='pages-buttons-container-steps'>
                <button onClick={pages} className='page-button-container' value="2">2</button>
                <button onClick={pages} className='page-button-container' value="3">3</button>
                <button onClick={pages} className='page-button-container' value="4">4</button>
                <button onClick={pages} className='page-button-container' value="5">5</button>
                <button onClick={pages} className='page-button-container' value="6">6</button>
            </div>
        </div>
    </div>
  );
};

export default CardContainer;
