import uFuzzy from "@leeoniya/ufuzzy";

console.log(uFuzzy);

let haystack = [
  'puzzle',
  'Super Awesome Thing (now with stuff!)',
  'FileName.js',
  '/feeding/the/catPic.jpg',
];

let needle = 'feed cat';

let opts = {};

let uf = new uFuzzy(opts);
let idxs = uf.filter(haystack, needle);
let info = uf.info(idxs, haystack, needle);

console.log(idxs, info);

// let a;
// a ??= 10;
// console.log(a);