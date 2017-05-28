// Generate a v1 UUID (time-based)
const uuidV1 = require('uuid/v1');
let uuid1Str = uuidV1(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'
console.info(`uuid1Str : ${uuid1Str}`) ;

// Generate a v4 UUID (random)
const uuidV4 = require('uuid/v4');
let uuid4Str = uuidV4(); // -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1'
console.info(`uuid4Str : ${uuid4Str}`) ;

