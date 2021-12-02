let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  process.stdin.on("data", handleUserInput)
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003'){
    process.exit();
  }
  if (key === 'w'){
    connection.write("Move: up");
  }
  if (key === 's'){
    connection.write('Move: down');
  }
  if (key === 'a'){
    connection.write('Move: left');
  }
  if (key === 'd'){
    connection.write('Move: right');
  }
  if (key === '1'){
    connection.write('Say: >:)');
    console.log("It also works");
  }
  if (key === '2'){
    connection.write(`Say: I'm gunnnnaaaa crasssshhhh`);
  }
  if (key === '3'){
    connection.write('Say: Can anybody here me anymore?');
  }
  if (key === '4'){
    connection.write(`Say: right... of course you can't`);
  }
}

console.log("Connecting ...");

module.exports = { setupInput };