import singletonCounter from "./counter.js";

export default function red() {
  singletonCounter.increament();
  console.log(singletonCounter.getCounter());
}
