function myFunc() {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

for (let i = 0; i < 5; i++) {
  myFunc();
}