map = new Map();
map.set(1, true);
map.set("h", "H");
map.set("car", "jeep");
map.set("5", 5);
map.set(false, "bool");
//console.log(map.entries());
for (let index of map.keys()) {
    console.log(index+" - "+map.get(index));
  }