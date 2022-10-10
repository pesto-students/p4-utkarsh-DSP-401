// Best exmple Asyncronus and Syncronus
// https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/


async function add(x, y) {
    return await x + y;
}

async function multiplication(x, y) {
    return await x * y;
}

async function* generator() {
    const multi = await multiplication(10, 20);
    yield await add(20, multi );
}

const g = generator();
g.next()
    .then(({ value }) => console.log('Using Generator =>', value))
    .catch((error) => console.log(error));

// SIMPLE ASYNC AWAIT USE IN THIS EXMPLE
const simpleAsyncAwait = async () => {
    try {
        const multiplicationVar = await multiplication(10, 20);
        const addVar = await add(20, multiplicationVar);
        return { add: addVar };
    } catch (ex) {
        console.error(ex);
    }
};

simpleAsyncAwait().then((value) => {
    console.log('SIMPLE ASYNC AWAIT =>', value);
});    