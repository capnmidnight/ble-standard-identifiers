# ble-standard-identifiers
The current, publicly published Service, Declarations, Characteristic, and Descriptor IDs.

# Usage

Step 1: Look up the description of the ID you want.

* [Services](https://www.bluetooth.com/specifications/gatt/services)
* [Declarations](https://www.bluetooth.com/specifications/gatt/declarations)
* [Characteristics](https://www.bluetooth.com/specifications/gatt/characteristics)
* [Descriptors](https://www.bluetooth.com/specifications/gatt/descriptors)

Step 2: Perform a lookup.

````javascript
import { Services, Characteristics, Declarations } from "ble-standard-identifiers";

console.log(Services.id("Generic Access")); // 00001800
console.log(Characteristics.description("00002A06")); // Alert Level
console.log(Declarations.all); // [0x2803, 0x2802, 0x2800, 0x2801]
````
