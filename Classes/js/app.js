class NotesStore {
    //add your code here
    constructor(){
        this.notes = [];
    }
    
    addNote(state,name) {
        if(name.trim()==='') {
            throw new Error('Name cannot be empty');
        }
        else if (state !== 'completed' && state !== 'active' && state !== 'others') {
            throw new Error(`Invalid state ${state}`)
        }
		else {
			this.notes.push({ state, name });
		}
    }
    
    getNotes(state) {

		let notes = [];

		if (state !== 'completed' && state !== 'active' && state !== 'others') {
			throw new Error('Invalid state');
		}
		
		notes = this.notes.filter((n) => n.state === state ? n : null);
        return notes.map(n => n.name );
    }
    
}

let note = new NotesStore();
note.addNote('others','Note1');
note.addNote('active', 'Note2');
note.addNote('completed', 'Note3');
note.addNote('active', 'Note4');
console.log(note.getNotes('active'));