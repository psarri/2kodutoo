class Entry {

    constructor(category, title, description, date){
        this.category = category;
        this.title = title;
        this.description = description;
        this.date = date;

    }
}

class Todo {

    constructor(){

        this.entries = JSON.parse(window.localStorage.getItem('entries')) || [];

        document.querySelector('#todo_add').addEventListener('click', ()=>{this.addEntry()});

        document.querySelector('#todo_sort').addEventListener('click', ()=>{this.sortByTitle()});

        this.render(this.entries);

    }

    addEntry() {
        const categoryValue = document.querySelector("#todo_category").value;
        const titleValue = document.querySelector("#todo_title").value;
        const descriptionValue = document.querySelector("#todo_description").value;
        const dateValue = document.querySelector("#todo_date").value;

        this.entries.push(new Entry(categoryValue, titleValue, descriptionValue, dateValue));

        this.saveLocal(this.entries);

        this.render(this.entries);

    }

    sortByTitle() {

        const sortedResults = this.entries.sort((a, b) => a.title.localeCompare(b.title));

        this.render(sortedResults);

    }

    render(items) {
        if (document.querySelector('.todo-list')) {
            document.body.removeChild(document.querySelector('.todo-list'));
        }

        const ul = document.createElement('ul');
        ul.className = 'todo.list';

        items.forEach((entryValue, entryIndex) => {
            const li = document.createElement('li');
            const removeBtn = document.createElement('div');
            const removeIcon = document.createTextNode('X');
            li.classList.add('entry');

            removeBtn.addEventListener('click', () => {
                ul.removeChild(li);
                this.entries.splice(entryIndex, 1);
                this.saveLocal(this.entries);
                this.render(this.entries);
            });

            li.innerHTML = `${entryValue.category} <br> ${entryValue.title} <br> ${entryValue.description} <br> ${entryValue.date}`;
            removeBtn.appendChild(removeIcon);
            li.appendChild(removeBtn);
            ul.appendChild(li);
        });

        document.body.appendChild(ul);

    }

    saveLocal() {
        window.localStorage.setItem('entries', JSON.stringify(this.entries));

    }

}

const todo = new Todo();