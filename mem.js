let buffer = [];

const MB = (bytes) => Math.round(bytes/1024/1024) + 'MB'

const memoryUsage = () => {
        const mem = process.memoryUsage();
        return MB(mem.rss) + '\t' + MB(mem.heapTotal) + '\t' + MB(mem.external);
}


setInterval(()=>{
    buffer.push(Buffer.alloc(1024 * 1024* 1024)); // Eat 1GB of RAM every second
    console.log(buffer.length + '\t' + memoryUsage());
}, 1000);
