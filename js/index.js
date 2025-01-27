let modal_1 = document.getElementById("modal1");
let modal_2 = document.getElementById("modal2");
let modal_3 = document.getElementById("modal3");
let modal_4 = document.getElementById("modal4");
let close = document.getElementById("button_close");

function modal_0_Func1(){
    modal_3.style.display = "block";
}

function modal_1_Func1(){
    modal_1.style.display = "block";
}

function modal_2_Func1(){
    modal_2.style.display = "block";
}

function modal_3_Func1(){
    modal_4.style.display = "block";
}

function Func2(){
    modal_1.style.display = "none";
    modal_2.style.display = "none";
    modal_3.style.display = "none";
    modal_4.style.display = "none";
}

// если нет имени в localstorage, то ...
let name_from_localstorage = localStorage.getItem("name_user");
document.addEventListener("DOMContentLoaded", function () {

    if (!name_from_localstorage) {
        window.location.href = 'login.html';
    }
});

// создание заметки
var notes = getAllNotes();

function great_note(){
    let input_h2 = document.getElementById("h1_note").value;
    let input_p = document.getElementById("p_note").value;
    let spisok_notes = document.getElementById("spisok")

    if (!input_h2 && !input_p || !input_p || !input_h2){
        return;
    } else {
        var h2_note = document.createElement("h2");
        let p_note = document.createElement("p");
        let div_note = document.createElement("div");
        div_note.className = "note";

        h2_note.innerHTML = input_h2
        p_note.innerHTML = input_p

        div_note.appendChild(h2_note)
        div_note.appendChild(p_note)
        spisok_notes.appendChild(div_note)

        modal_3.style.display = "none";

        notes.push({ title: input_h2, content: input_p });
        localStorage.setItem("notes", JSON.stringify(notes));
        
        alert("Заметка создана");
    }
}

function getAllNotes() {
    let notes = localStorage.getItem("notes");
    if (!notes) {
        notes = [];
    } else {
        notes = JSON.parse(notes);
    }
    return notes;
}

window.onload = function() {
    let spisok_notes = document.getElementById("spisok");
    spisok_notes.innerHTML = "";

    notes.forEach(note => {
        let h2_note = document.createElement("h2");
        h2_note.textContent = note.title;
        let p_note = document.createElement("p");
        p_note.textContent = note.content;
        let div_note = document.createElement("div");
        div_note.className = "note";
        div_note.appendChild(h2_note);
        div_note.appendChild(p_note);
        spisok_notes.appendChild(div_note);
    });
};

// удаление заметок
function del_note(){
    let id_note = parseInt(document.getElementById("id_note").value)
    let del_note_true_or_false = false
    
    for (let i = 0; i < notes.length; i++) {
        if (id_note === i){
            notes.splice(i, 1);
            del_note_true_or_false = true;
            break;
        }
    }
    if (del_note_true_or_false){
        localStorage.setItem("notes", JSON.stringify(notes));
        modal_4.style.display = "none";
        alert("Заметка удалена")
        location.reload(); 
        return false;
    } else {
        alert("Заметка не найдена")
    }
}

// сохранение заметки
function search_notes_for_save(){
    let h2_save = document.getElementById("h2_save");
    let p_save = document.getElementById("p_save");
    let id_note_save = parseInt(document.getElementById("id_note_save").value);

    h2_save.innerHTML = notes[id_note_save].title;
    p_save.innerHTML = notes[id_note_save].content;
}

function save_note(){
    let h2_save = document.getElementById("h2_save");
    let p_save = document.getElementById("p_save");
    let id_note_save = parseInt(document.getElementById("id_note_save").value);


    notes[id_note_save].title = h2_save.textContent;
    notes[id_note_save].content = p_save.textContent;

    localStorage.setItem("notes", JSON.stringify(notes));
    modal_1.style.display = "none";
    alert("заметка обновлена")
    location.reload(); 
    return false;
}

// поиск заметок
function search_note(){
    let search_input = document.getElementById("search_input").value;
    if (!search_input){
        return;
    } 


    notes_for_search = [];
    for (let i = 0; i < notes.length; i++){
        notes_for_search.push(notes[i].title)
    }  

    if (notes_for_search.includes(search_input)) {
        alert("найдено")
    } else {
        alert("не найдено")
    }
}

// добавление заметки в файл (не доступна)
function addnoteinfile(){
    alert("!Пока-что это функция не доступна, приносим свои извинения!")
    modal_2.style.display = "none";
}
