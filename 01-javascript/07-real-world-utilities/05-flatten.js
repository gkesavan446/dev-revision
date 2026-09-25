/* TOPIC: FLATTENING NESTED DATA */

const nestedNumbers = [1, [2, [3, 4]], 5];
console.log(nestedNumbers.flat());         // one level
console.log(nestedNumbers.flat(Infinity)); // every level

function flattenArray(values) {
  const result = [];

  for (const value of values) {
    if (Array.isArray(value)) {
      result.push(...flattenArray(value));
    } else {
      result.push(value);
    }
  }

  return result;
}

console.log(flattenArray(nestedNumbers));

// Flatten a category tree into display rows.
const categoryTree = {
  name: "All",
  children: [
    { name: "Frontend", children: [{ name: "React", children: [] }] },
    { name: "Backend", children: [{ name: "Node", children: [] }] }
  ]
};

function flattenTree(node, parent = null, result = []) {
  result.push({ name: node.name, parent });

  for (const child of node.children ?? []) {
    flattenTree(child, node.name, result);
  }

  return result;
}

console.log(flattenTree(categoryTree));

/*
INTERVIEW ANSWER
Array.flat handles nested arrays to a chosen depth. Recursive traversal is more
flexible for unknown depth or structured trees because it can preserve metadata.

// falttern array with and without inbuilt function

PRACTICE
Flatten a nested comments tree into objects containing id, text, parentId, and depth.
*/

