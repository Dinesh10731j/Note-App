const userNotes = document.querySelector(".user-notes");

const Notes = document.querySelector(".note");

const addNotes = document.querySelector(".addNotes");

const textArea = document.querySelector(".textArea");


addNotes.addEventListener("click",()=>{

    const createNotes = document.createElement("div");

   createDiv.classList.add("note");

createDiv.innerHTML =`<div class="tools">
<i class="fa-solid fa-trash"></i>
<i class="fa-solid fa-floppy-disk"></i>
</div>
<textarea class="textArea">

</textarea>`

userNotes.appendChild(createDiv);

//Remove the Element which are created by using createElement;

createDiv.querySelector(".fa-trash").addEventListener("click",()=>{
    createDiv.remove();
});

//Svae the value of text are in localStorage
createDiv.querySelector(".fa-floppy-disk").addEventListener("click",()=>{

   const textareaValue = textArea.value;

   localStorage.setItem(["note",JSON.stringify(textareaValue)]);
})

})
