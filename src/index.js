import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// const array1 = [1, 2, 3, 4];

// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

// function f1(arg) {
//   console.log("f1", arg);
//   return arg;
// }
// function f2(arg) {
//   console.log("f2", arg);
//   return arg;
// }
// function f3(arg) {
//   console.log("f3", arg);
//   return arg;
// }

// // todo
// // 依次执行f123函数,并且每一个函数接受上一个函数的返回值
// // 1. 直接知悉
// f1("omg");
// f2("omg");
// f3("omg");

// // 2.实现一个链式  嵌套地狱 洋葱模型
// f3(f2(f1("omg")));

// //3.实现compose
// let res = compose(f1)("omg");
// console.log("res", res); //sy-log

// function compose(...funcs) {
//   if (funcs.length === 0) {
//     return (arg) => arg;
//   }
//   if (funcs.length === 1) {
//     return funcs[0];
//   }
//   return funcs.reduce((a, b) => (...args) => a(b(...args)));
// }
