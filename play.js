const net = require("net");
const play = require('./client')

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};

const handleUserInput = (key) => {
  if (key === 'o'){
    process.exit()
  }
  if (key === 'w'){
    play.write("Move: up")
  }
  if (key === 's'){
    play.write('Move: down')
  }
  if (key === 'a'){
    play.write('Move: left')
  }
  if (key === 'd'){
    play.write('Move: right')
  }
}
setupInput()
play.connect()