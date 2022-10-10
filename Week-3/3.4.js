function createStack() {
    const items = [];
    return {
      push(item) {
            items.push(item);
        },
        pop() {
        return items.pop();
      },
    };
  }
  
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); // 5 items
  console.log(stack.items); // undefined