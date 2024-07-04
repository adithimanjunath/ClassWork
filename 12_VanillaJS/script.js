document.addEventListener("DOMContentLoaded", () => {
    const changeTextBtn = document.getElementById("changeTextBtn");
    const textContent = document.getElementById("textContent");
   
    //JS Variables
    let isTextChanged = false;
   
    //change the text
    changeTextBtn.addEventListener("click", () => {
      if (isTextChanged) {
        textContent.textContent = "This is some text";
      } else {
        textContent.textContent = "The text has been changed";
      }
      isTextChanged = !isTextChanged;
    });
   
    //Show Hide Element
    const toggleBtn = document.getElementById("toggleBtn");
    const toggleContent = document.getElementById("toggleContent");
   
    toggleBtn.addEventListener("click", () => {
      if (toggleContent.classList.contains("hidden")) {
        toggleContent.classList.remove("hidden");
      } else {
        toggleContent.classList.add("hidden");
      }
    });
   
    // Change Style
    const changeStyleBtn = document.getElementById("changeStyleBtn");
    const styleContent = document.getElementById("styleContent");
   
    changeStyleBtn.addEventListener("click", () => {
      styleContent.style.backgroundColor = "blue";
      styleContent.style.color = "white";
      styleContent.style.border = "2px solid black";
      styleContent.style.paddinf = "20px";
    });
   
    // Mouse Event
    const mouseEventBox = document.getElementById("mouseEventBox");
    const mouseEventText = document.getElementById("mouseEventText");
   
    mouseEventBox.addEventListener("mouseover", () => {
      mouseEventText.textContent = "Mouse is Over the box";
    });
    mouseEventBox.addEventListener("mouseout", () => {
      mouseEventText.textContent = "Mouse has left the box";
    });
   
    //Keyboard Events
    const keyboardInput = document.getElementById("keyboardInput");
    const keyboardEventText = document.getElementById("keyboardEventText");
    let typedString = "";
   
    keyboardInput.addEventListener("keyup", (event) => {
      typedString += event.key;
      keyboardEventText.textContent = `You Pressed ${typedString}`;
    });
   
    //Form handling
    const sampleForm = document.getElementById("sampleForm");
    const formResponse = document.getElementById("formResponse");
    
    sampleForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const nameInputValue = document.getElementById("nameInput").value;
      formResponse.textContent = nameInputValue;
    })

    //add element
    const newElementInput = document.getElementById("newElementInput");
    const addElementBtn = document.getElementById("addElementBtn");
    const elementList = document.getElementById("elementList");

    // addElementBtn.addEventListener("click", () => {
    //   const newElement = document.createElement("p");
    //   newElement.textContent = newElementInput.value;
    //   elementList.appendChild(newElement);
    // });
    addElementBtn.addEventListener("click", () => { 
        const newText=newElementInput.value;
        if(newText.trim()!==""){
            const newElement = document.createElement("p");
            newElement.textContent = newText;
            elementList.appendChild(newElement);
            newElementInput.value = "";
        }});

    //add and remove elements
    const parentElement = document.getElementById("parentElement");
    const childElement = document.getElementById("childElement");
    const addChildBtn = document.getElementById("addChildBtn");
    const removeChildBtn = document.getElementById("removeChildBtn");

    addChildBtn.addEventListener("click", () => {
        const newChild= document.createElement("p");
        newChild.textContent = "New Child Added dynamically";
        parentElement.appendChild(newChild);
    });

    removeChildBtn.addEventListener("click", () => {
        const lastChild= parentElement.lastElementChild;
        if(lastChild){
            parentElement.removeChild(lastChild);
        }
    });



    


  });
   
   