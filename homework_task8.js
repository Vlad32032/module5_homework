let berries = new Map([
    ["blackberry", "black"],
    ["blueberry", "blue"],
    ["strawberry", "red"],
    ["raspberry", "pink"],
    ["wildberries", "purple"],    
  ]);
  
  for (let elem of berries) {
    console.log(`Ключ — ${elem[0]}, значение — ${elem[1]}`);       
  };