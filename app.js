let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = ['.com', '.net', '.us', '.io'];

let len = pronoun.length * adj.length * noun.length * ext.length;

//console.log(`${len}`);

for (i = 0; i <= len; i++) {
    let randomPronoun = Math.floor(Math.random() * pronoun.length);
    let randomAdj = Math.floor(Math.random() * adj.length);
    let randomNoun = Math.floor(Math.random() * noun.length);
    let randomExt = Math.floor(Math.random() * ext.length);
    
    //console.log(`${i}`);
    console.log(`${pronoun[randomPronoun]}${adj[randomAdj]}${noun[randomNoun]}${ext[randomExt]}`);
}

