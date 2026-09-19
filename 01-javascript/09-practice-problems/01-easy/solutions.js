function reverseString(value) {
  let result = "";
  for (const character of value) result = character + result;
  return result;
}

function countVowels(value) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (const character of value.toLowerCase()) {
    if (vowels.has(character)) count++;
  }
  return count;
}

function findMaximum(numbers) {
  if (numbers.length === 0) return undefined;
  let maximum = numbers[0];
  for (const number of numbers) if (number > maximum) maximum = number;
  return maximum;
}

function removeDuplicates(values) {
  return [...new Set(values)];
}

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word)
    .join(" ");
}

function sumEvenNumbers(numbers) {
  return numbers
    .filter(number => number % 2 === 0)
    .reduce((total, number) => total + number, 0);
}

function countOccurrences(values) {
  return values.reduce((counts, value) => {
    counts[value] = (counts[value] ?? 0) + 1;
    return counts;
  }, {});
}

function isPalindrome(value) {
  const normalized = value.toLowerCase();
  return normalized === reverseString(normalized);
}

console.log(reverseString("mern"));
console.log(countVowels("JavaScript"));
console.log(findMaximum([4, 9, 2, 15, 6]));
console.log(removeDuplicates([1, 2, 2, 3, 1]));
console.log(capitalizeWords("mern stack developer"));
console.log(sumEvenNumbers([1, 2, 3, 4, 6]));
console.log(countOccurrences(["a", "b", "a", "c", "b", "a"]));
console.log(isPalindrome("Madam"));

