class Sorter {
  constructor() {
    this.comparator = (a, b) => a - b;
    this.array = [];
  }

  add(element) {
    this.array.push(element)
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let sortedArr = [];
    indices = indices.sort((a, b) => a - b);
    for (let i = 0, length = indices.length; i < length; i++) {
      sortedArr.push(this.array[indices[i]]);
    }
    sortedArr.sort(this.comparator);
    for (let i = 0, length = indices.length; i < length; i++) {
      this.array[indices[i]] = sortedArr.shift();
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;