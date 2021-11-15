const sentence = "hello there from lighthouse labs";
let count = 0;

for (const char of sentence) {
  count++;
  setTimeout(() => {
    process.stdout.write(char);
  }, count * 50)
}
setTimeout(() => {
  console.log("");
}, count * 50)