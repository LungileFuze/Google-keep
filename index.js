// class Note {
//     constructor(id, title, text) {
//         this.id = id;
//         this.title = title;
//         this.text = text;
//     }
// }

// class App {
//     constructor() {
//         this.notes = []
//     }

//     addNotes(id, {title,text}) {
//         const newNote = new Note(id, title, text)
//         this.notes = [...this.notes, newNote]
//     }

//     editNote(id, {title, text}){
//        this.notes =  this.notes.map(note => {
//             if(note.id == id) {
//                 note.title = title;
//                 note.text = text;
//             }
//             return note;
//         })
//     }

//     deleteNote(id) {
//        this.notes =  this.notes.filter(note => note.id != id)
//     }

//     displayNotes() {
//         this.notes.map(note => console.log(`
//             ID: ${note.id}
//             Title: ${note.title}
//             Text: ${note.text}
//         `))
//     }
// }

// const note1 = {
//     title: "Test 1 Notes",
//     text: "Testing"
// }

// const updateNote = {
//     title: "Test 1 Notes updated",
//     text: "Testing updated"
// }

// const app = new App()
// app.addNotes(0, note1)
// app.addNotes(1, note1)
// app.addNotes(2, note1)
// app.addNotes(3, note1)
// console.log("After adding notes", app.notes)

// setTimeout(() => {
//     app.editNote(2, updateNote)
// console.log("edit", app.notes)
// },1000)


// setTimeout(() => {
//     app.deleteNote(2)
// console.log("delete", app.notes)
// },5000)

// app.displayNotes()

//create a paragraph element, set some text, add to document
const p = document.createElement("p")
p.innerHTML = "I am a Paragraph from Javascript"
document.body.append(p)

//change background of document, and color of paragraph created
document.body.style.background = "black"
p.style.color = "white"
p.style.cursor = "pointer"

//add eventlister to paragraph click
p.addEventListener("click", () => {
    alert("How is Javascript course dear?")
})