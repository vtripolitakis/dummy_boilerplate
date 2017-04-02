ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

class Dummy{
    constructor(){
    }
  
    sayHello(name){
        console.log("hello "+name)
    }
}

let dummyObject = new Dummy()
dummyObject.sayHello("Bender")
