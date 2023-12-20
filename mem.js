const targetMemoryUsageGB = 5;
const targetMemoryUsageBytes = targetMemoryUsageGB * 1024 * 1024 * 1024;
var buffer = Buffer.alloc(targetMemoryUsageBytes, 'a');
console.log("Done")
