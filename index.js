var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("See server console!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080



// Code start from here - 


// Js Memorization 
const cache = new Map()
const heavyTask = (n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i + 1
  }
  return sum

}
const merorizeFn = (fn) => {

  return (size) => {

    if (cache.get(size)) {
      console.log(`${size} from cache`)
      return fn(size)
    }

    const res = heavyTask(size)
    cache.set(size, res)
    return fn(size)
  }
}


//Code 
const memo = merorizeFn((size) => {
  console.log("Memorization Run for size ", size)
})

console.time("Time 1")
memo(10000)
console.timeEnd("Time 1")

console.log("\n")

console.time("Time 2")
memo(10000)
console.timeEnd("Time 2")