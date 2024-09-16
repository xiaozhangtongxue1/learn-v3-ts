import { sub, add } from "./utils/math";
import axios from "axios";
import lodash from "lodash";

console.log(sub(30, 20));
console.log(add(20, 30));


// axios.get("http://123.207.32.32:8000/home/mutidata").then(res => {
//   console.log(res);
// }).catch(() => {

// })

console.log(lodash.join(['abc', 'cba']));