const init = () => {
    const inputForm = document.querySelector('form') //grabbing the DOM Element before adding an eventListener to it
  
    inputForm.addEventListener('submit', (event) => {    //our eventListener in form of a callback fucnction
      event.preventDefault(); //Calling this inside our callback will stop the page from refreshing and allow us to do something else instead.
      const input = document.querySelector('input#searchByID');
  
      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
  
        title.innerText = data.title;
        summary.innerText = data.summary;
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', init); 


  //Event listeners require two arguments: the type of event, a string, and the listener, a callback function. In our case, we'll want to pass in 'submit' as the type. For the listener, we need to provide a callback function that will be called to 'handle' the event.