import singletonCounter from "./counter.js";

export default function blue() {
  singletonCounter.increament();
  console.log(singletonCounter.getCounter());
}
