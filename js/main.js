function AsciiToHTMLSprite(Arr){
  let sprite = "";

  for (let i =0; i < Arr.length; i++){
    sprite += Arr[i] + "<br>";
  }
  return sprite;
}
function updateHealth() {
  let display = "&nbsp;  ";
  for (let i = 0; i < game.player.currentHealth; i++){
    display += "♥ ";
  }
  document.getElementById("lives").innerHTML = display;
  console.log("health updated");
}
function setUpArena() {
  for (let i = 0; i < game.arenaGrid.length; i++){
    game.arenaGrid[i] = ['~', '~', '~', '~', '~'];
  }
  game.arenaGrid[game.player.currentPosition[0]][game.player.currentPosition[1]] = '@';
}
function printText(text) {
  // document.getElementById("textDiv").innerHTML += "<br />" + "<br />" + text;
  console.log("printing text")
}

let game = {
  "intro": "WELCOME TO THE ARENA, CHAMPION! CAN YOU SURVIVE THE BLOODBATH?",
  "player": {
    "currentPosition": [0,1],
    "currentHealth": 3,
    "maxHealth": 3
  },
  "monsters": {
    "intro": "",
    "health": 20,
    "sprites": {
      "dragonBabi": [
        "<>=======()                         ",
        "(/\\___   /|\\\\          ()==========<>_",
        "       \\_/ | \\\\        //|\\   ______/ \\)",
        "\\_|  \\\\      // | \\_/ ",
        "\\|\\/|\\_   //  /\\/ ",
        "(oo)\\ \\_//  /   ",
        " //_/\\_\\/ /  |     ",
        "@@/  |=\\  \\  |     ",
        "     \\_=\\_ \\ |     ",
        "       \\==\\ \\|\\_   ",
        "    __(\\===\\(  )\\    ",
        "  (((~) __(_/   | ",
        "        (((~) \\  /   ",
        "        ______/ /    ",
        "        '------'    ", ],//by Shanaka Dias, modified
      "dragonBig": [
        "^                       ^",
        "|\\   \\        /        /|",
        "/  \\  |\\__  __/|       /  \\",
        "/ /\\ \\ \\ _ \\/ _ /      /    \\",
        "/ / /\\ \\ {*}\\/{*}      /  / \\ \\",
        " | | | \\ \\( (00) )     /  // |\\ \\",
        "  | | | |\\ \\(V\"\"V)\\    /  / | || \\|",
        "  | | | | \\ |^--^| \\  /  / || || ||",
        " / / /  | |( WWWW__ \\/  /| || || ||",
        "| | | | | |  \\______\\  / / || || ||",
        "| | | / | | )|______\\ ) | / | || ||",
        "/ / /  / /  /______/   /| \\ \\ || ||",
        " / / /  / /  /\\_____/  |/ /__\\ \\ \\ \\ \\ ",
        "| | |  / /  /\\______/    \\   \\__| \\ \\ \\",
        " | | | | | |\\______ __    \\_    \\__|_| \\ ",
        " | | ,___ /\\______ _  _     \\_       \\  |",
        "       | |/    /\\_____  /    \\      \\__     \\ |    /\\",
        "        |/ |   |\\______ |      |        \\___  \\ |__/  \\",
        "        v  |   |\\______ |      |            \\___/     |",
        "           |   |\\______ |      |                    __/",
        "         \\   \\________\\_    _\\               ____/",
        "    __/   /\\_____ __/   /   )\\_,      _____/",
        "/  ___/  \\uuuu/  ___/___)    \\______/ ",
        "VVV  V        VVV  V                  "], /*unknown artist's ascii from the internet, modified*/
    }
  },
  "gameState": "Playing",
  "arenaGrid": [[], [], [], []]
}

setUpArena();

/*const DRAGON_SPRITE_BEEG = [
"__                  __",
"( _)                ( _)",
"/ / \\\\              / /\\_\\_",
"/ /   \\\\            / / | \\ \\",
"/ /     \\\\          / /  |\\ \\ \\",
"/  /   ,  \\ ,       / /   /|  \\ \\",
"/  /    |\\_ /|      / /   / \\   \\_\\",
"/  /  |\\/ _ '_| \\   / /   /   \\    \\\\",
"|  /   |/  0 \\0\\    / |    |    \\    \\\\",
" |    |\\|      \\_\\_ /  /    |     \\    \\\\",
"  |  | |/    \\.\\ o\\o)  /      \\     |    \\\\",
"   \\    |     /\\\\`v-v  /        |    |     \\\\",
"    | \\/    /_| \\\\_|  /         |    | \\    \\\\",
"     | |    /__/_ `-` /   _____  |    |  \\    \\\\",
"      \\|    [__]  \\_/  |_________  \\   |   \\    ()",
"/    [___] (    \\         \\  |\\ |   |   //",
"|    [___]                  |\\| \\|   /  |/",
"/|    [____]                  \\  |/\\ / / ||",
" (  \\   [____ /     ) _\\      \\  \\    \\| | ||",
"\\  \\  [_____|    / /     __/    \\   / / //",
"|   \\ [_____/   / /        \\    |   \\/ //",
"|   /  '----|   /=\\____   _/    |   / //",
"__ /  /        |  /   ___/  _/\\    \\  | ||",
"(/-(/-\\)       /   \\  (/\\/\\)/  |    /  | /",
"(/\\/\\)           /   /   //",
"                      _________/   /    /",
"                     \\____________/    ("
] // ascii BY Shanaka Dias, modified */
//console.log(arenaGrid);

document.getElementById("monsterDiv").innerHTML = "<strong>" + AsciiToHTMLSprite(game.monsters.sprites.dragonBabi) + "</strong>";
console.log("new page?")
updateHealth();
printText(game.intro);

