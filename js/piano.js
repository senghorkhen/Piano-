const KEYS = new Map(
    [
        //white key
        ['z', 'C'], ['x', 'G'], ['c', 'E'], ['b', 'D'], ['n', 'A'], ['m', 'B'],

        // black key
        ['s', 'Gb'], ['d', 'Eb'], ['f', 'Bb'], ['j', 'Db'], ['h', 'Ab'],
    ]
);

const NOTES = new Map(
    [
        ['C', 'notes/C.mp3'], ['Gb', 'notes/Gb.mp3'], ['G', 'notes/G.mp3'], ['Eb', 'notes/Eb.mp3'],
        ['E', 'notes/E.mp3'], ['F', 'notes/F.mp3'], ['Bb', 'notes/Bb.mp3'], ['B', 'notes/B.mp3'],
        ['Db', 'notes/Db.mp3'], ['D', 'notes/D.mp3'], ['Ab', 'notes/Ab.mp3'], ['A', 'notes/A.mp3'],
    ]
);

// get all div
const keyElements = document.querySelectorAll('.key');
// console.log(keyElements);
keyElements.forEach(key => {
    key.addEventListener('click', () => {
        const divElemt = key.dataset.note;
        // console.log(key);
        onPlaySound(divElemt);
    });
});

// click on each div
document.addEventListener('keydown',c => { // chab yk keyboard
    // console.log(KEYS.get("x"));
    
    if(!c.repeat) {
        const noteId = KEYS.get(c.key)
        if(noteId != null) {
            onPlaySound(noteId);
        }  
    }
});

// play sound
function onPlaySound(key) {
    const audio = NOTES.get(key);
    var sound = new Audio(audio);
    sound.play();
}