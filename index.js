const { exec } = require("child_process");

const cFile = process.argv[2]
const outputFile = process.argv[3];

if(!cFile || !outputFile){
    console.error("argv is require");
    return 
}

// compile the C file
exec(`gcc ${cFile} -o ${outputFile}`, (err, stdout, stderr) => {
  if (err) {
    console.error(stderr);
    return;
  }
  console.log("✅ Compilation successful!");

  // run the compiled program
  exec(`./${outputFile}`, (err, stdout, stderr) => {
    if (err) {
      console.error(stderr);
      return;
    }
    console.log(stdout);
  });
});
