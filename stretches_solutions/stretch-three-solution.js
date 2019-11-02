const createCounter = () => {
    let count = 0;

    return function() {
        count++
        return count;
    }
};

const firstCounter = createCounter();
const secondCounter = createCounter();

firstCounter(); // => 1
firstCounter(); // => 2
firstCounter(); // => 3

secondCounter(); // => 1
secondCounter(); // => 2

// Importantly...
firstCounter(); // => 4

// // this is a problem about closure

// use closure to create a local memory space within the function
// by initializing count inside createCounter, we are creating a memory and the function that createCounter returns has access to that memory space
// the returned function knows how to interact with count
// When seconcCounter is created, a SECOND memory space is created and secondCounter has access to that; first does not and vice versa with firstCounter’s shared memory
// We say that the function returned closes over the variable ‘count’ by keeping that data alive - createCounter is creating a function that needs ‘count’ so JS cannot delete it