function myFunc() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}

myFunc();