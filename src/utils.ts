export function getNumbers(from: number, to: number): number[] {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

export function getInitialPages(maxQuantOfItems: number, initPerPage: number) {
  return Math.ceil(maxQuantOfItems / initPerPage);
}

// export function getInfoOfItems(
//   ItemsInPage: number,
//   nameOfPage: number,
//   allItems: number[],
// ) {
//   const initPage: number = nameOfPage;
//   const endIndex = ItemsInPage * nameOfPage;
//   const startIndex = endIndex - ItemsInPage;
//   const itemsInThePage = [...allItems].slice(startIndex, endIndex);

//   const info = {
//     itemsInThePage: itemsInThePage,
//     initPage: initPage,
//   };

//   return info;
// }
