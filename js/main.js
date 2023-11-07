

let currentRow = 0;
let currentColumn = 1;

let arenaGrid = [[], [], [], []];
for (let i = 0; i < arenaGrid.length; i++){
  arenaGrid[i] = ['~', '~', '~', '~', '~'];
}
arenaGrid[currentRow][currentColumn] = '@';
console.log(arenaGrid);
