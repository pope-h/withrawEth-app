const blockHash =
  "0xf6024cc3f5fc6c259030c080f826bef746f8fa7eba2a2ddfc9d02e9718326d1a";
const FACTOR = BigInt(
  "57896044618658097711785492504343953926634992332820282019728792003956564819968"
);

// Convert the block hash to a number
const blockValue = BigInt(`0x${blockHash.slice(2)}`);

// Perform the reverse calculation
const coinFlip = blockValue / FACTOR;

// Determine the boolean value
const side = coinFlip == BigInt(1) ? true : false;

console.log("Expected boolean value:", side);