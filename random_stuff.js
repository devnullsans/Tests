function dodo({ si, gb, num }) {
  return (2 ** si * gb) / num;
}
function bodo({ si, gb, num }) {
  return num / (2 ** si * gb);
}

const arr = [
  { si: 30, gb: 66.1, num: 2077448, ratio: 0 },
  { si: 30, gb: 52.5, num: 1841436, ratio: 0 },
  { si: 30, gb: 7.6, num: 220745, ratio: 0 },
  { si: 30, gb: 3.1, num: 12576, ratio: 0 },
  { si: 20, gb: 13.2, num: 2254, ratio: 0 },
  { si: 20, gb: 117.9, num: 291, ratio: 0 },
  { si: 20, gb: 661.3, num: 115, ratio: 0 },
  { si: 10, gb: 94.2, num: 22, ratio: 0 },
  { si: 10, gb: 8.2, num: 2, ratio: 0 },
  { si: 10, gb: 4.1, num: 1, ratio: 0 },
];

console.log(arr);

arr.sort((a, s) => s.ratio - a.ratio);

arr.forEach((a, i) => (arr[i].ratio = dodo(a)));
