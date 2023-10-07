function sum(...numbers) {   //อย่าลืม ...   เพราะ numbers ไม่ใช่ array  เป็นแค่ list
  // Start coding here !
  return numbers.reduce((acc, number) => acc = acc+number,0);
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
