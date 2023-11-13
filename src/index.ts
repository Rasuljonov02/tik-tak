import "./mashina";




// class Water {
// 	constructor(public name: string) {}
// 	H2O() {}
// }
// class Energetic extends Water {
// 	energy() {}
// }
// class Fruit extends Water {
// 	native() {}
// }
// class Gazli extends Water {
// 	moreSugar() {}
// }

// class Flash extends Energetic {}
// class Adrenalin extends Energetic {}

// class Apple extends Fruit {}
// class Banana extends Fruit {}

// class Sprite extends Gazli {}
// class Cola extends Gazli {}

// class Milk {
// 	constructor(public name: string) {}
// }

// class Nestle extends Milk {}

// function barmen<T extends Water>(name: string, drink: T) {
// 	if (drink instanceof Energetic) {
// 		console.log(`[⚡️] ${drink.name} 🍺 + 🧊 ...`);
// 	} else if (drink instanceof Fruit) {
// 		console.log(`[🍇] ${drink.name} ☕️ + 🍫 ...`);
// 	} else if (drink instanceof Gazli) {
// 		console.log(`[🫁] ${drink.name} 🥤 + 🍔 ...`);
// 	}
// }

// barmen("", new Flash("Flash")); // Flash -> Energetic -> Water
// barmen("", new Adrenalin("Adrenalin")); // Adrenalin -> Energetic -> Water
// barmen("", new Sprite("Sprite")); // Sprite -> Gazli -> Water
// barmen("", new Cola("Cola")); // Cola -> Gazli -> Water
// barmen("", new Apple("Apple")); // Apple -> Fruit -> Water
// barmen("", new Banana("Banana")); // Banana -> Fruit -> Water

// // barmen('Kent', ); // Infer
