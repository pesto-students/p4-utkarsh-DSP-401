const user = {
    firstName: "darshan",
    lastName: "pipaliya",
    email: "darshanpipaliya@gmail.com",
  };
  
  function greeting(text, text2) {
    console.log(`${text}, ${text2} ${this.firstName} ${this.lastName}`);
  }
  
  // Call
  greeting.call(user, "Hi", "Good morning"); // Hi, Good morning darshan pipaliya
  
  // Bind
  
  let hellodarshan = greeting.bind(user);
  
  hellodarshan("Hello", "Good afternoon"); // Hello, Good afternoon darshan pipaliya
  
  //Apply
  
  greeting.apply(user, ["Hello", "Good evening"]); // Hello, Good evening darshan pipaliya