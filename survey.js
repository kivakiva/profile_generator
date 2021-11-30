const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const store = [
  ["",`What's your name? Nicknames are also acceptable ::) `],
  ["", `What's an activity you like doing?:  `],
["",`What do you listen to while doing that?:  `],
["",`Which meal is your favourite (eg: dinner, brunch, etc.):  `],
["",`What's your favourite thing to eat for that meal?:  `],
["",`Which sport is your absolute favourite?:  `],
  ["",`What is your superpower? In a few words, tell us what you are amazing at!:  `]
]
let i = 0;


const recursiveFunc = () => {
  if (i < store.length) {
    rl.question(store[i][1], (answer) => {
      store[i][0] = answer;
      i++;
      recursiveFunc();
    })
  } else {
    console.log(`${store[0][0]} loves listening to ${store[2][0]} while ${store[1][0]},
    devouring ${store[4][0]} for ${store[3][0]},
    prefers ${store[5][0]} over any other sport,
    and is amazing at ${store[6][0]}. `)
    rl.close();
  }
}
recursiveFunc();


