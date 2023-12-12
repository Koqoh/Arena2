

let currentRow = 0;
let currentColumn = 1;

let arenaGrid = [[], [], [], []];
for (let i = 0; i < arenaGrid.length; i++){
  arenaGrid[i] = ['~', '~', '~', '~', '~'];
}
arenaGrid[currentRow][currentColumn] = '@';

const DRAGON_SPRITE_BEEG = [
  " ^                       ^",
  "       |\\   \\        /        /|",
  "      /  \\  |\\__  __/|       /  \\",
  "     / /\\ \\ \\ _ \\/ _ /      /    \\",
  "    / / /\\ \\ {*}\\/{*}      /  / \\ \\",
  "    | | | \\ \\( (00) )     /  // |\\ \\",
  "    | | | |\\ \\(V\"\"V)\\    /  / | || \\|",
  "    | | | | \\ |^--^| \\  /  / || || ||",
  "   / / /  | |( WWWW__ \\/  /| || || ||",
  "  | | | | | |  \\______\\  / / || || ||",
  "  | | | / | | )|______\\ ) | / | || ||",
  "  / / /  / /  /______/   /| \\ \\ || ||",
  " / / /  / /  /\\_____/  |/ /__\\ \\ \\ \\ \\",
  " | | | / /  /\\______/    \\   \\__| \\ \\ \\",
  " | | | | | |\\______ __    \\_    \\__|_| \\",
  " | | ,___ /\\______ _  _     \\_       \\  |",
  " | |/    /\\_____  /    \\      \\__     \\ |    /\\",
  " |/ |   |\\______ |      |        \\___  \\ |__/  \\",
  " v  |   |\\______ |      |            \\___/     |",
  "    |   |\\______ |      |                    __/",
  "     \\   \\________\\_    _\\               ____/",
  "   __/   /\\_____ __/   /   )\\_,      _____/",
  "  /  ___/  \\uuuu/  ___/___)    \\______/",
  "  VVV  V        VVV  V" ];
console.log(arenaGrid);
let textDisplay = "WELCOME TO THE ARENA, CHAMPION! CAN YOU SURVIVE THE BLOODBATH?";
document.getElementById("monsterSpan").innerHTML = AsciiToHTMLSprite(DRAGON_SPRITE_BEEG);
console.log("new page?")
document.getElementById("textSpan").innerHTML = textDisplay;
console.log(AsciiToHTMLSprite(DRAGON_SPRITE_BEEG));

function AsciiToHTMLSprite(Arr){
  let sprite = "";

  for (let i =0; i < Arr.length; i++){
    sprite += Arr[i] +"<br>";
  }
  return sprite;
}
