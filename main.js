// 1:Convert each sentence into words and save all words in a single array.

// let sentences = ["I love JS", "JS is fun"];
// let words = sentences.map(n => n.split(" "));
// // console.log(words);
// console.log(words.flat());



// 2. Print each word with last letter + join words

// let words = ["Hello", "World", "JS"];
// words.forEach (words => {
//     let lasstChar = words[words.length-1];
//     console.log(words + " " + lasstChar);
// })





//  3. Reverse array and take first 4 elements

// let nums = [10, 20, 30, 40, 50, 60];
// console.log(nums.reverse());
// let nums2 = nums.slice(0,4);
// console.log(nums2);




// 4:Remove "Banana" and replace it with two new words, Add a word at the end of the array, Remove the last 
// element from the array.

// let fruits = ["Apple", "Banana", "Orange", "Mango"];
// fruits.splice(1,1,"Melon" , "peenapple");
// console.log(fruits);
// fruits.push("fru");
// console.log(fruits);
// fruits.pop("Mango")
// console.log(fruits);





// 5:Add a word at the beginning of the array, Remove the first element, Check if a specific word exists
//  in the array.

// let colors = ["red", "green", "blue"];
// colors.unshift("yellow");
// console.log(colors);
// colors.shift();
// console.log(colors);
// console.log(colors.includes("yellow"));





// 6:-Sort the cities alphabetically. 
// -Print the index of a specific city after sorting (Damascus).

// let cities = ["Damascus", "Aleppo", "Homs", "Latakia"];
// cities.sort();
// console.log(cities);
// console.log(cities.indexOf("Damascus"));






// 7: 1. Split the text into words. 
//    2. Remove very short words. 
//    3. Take a specific number of first words. 
//    4. Reverse the order of the words. 
//    5. Add a word at the beginning and another at the end. 
//    6. Check if a specific word exists. 
//    7. Print each word on a separate line. 
//    8. Join the words into a single string separated by -. 
//    9. Sort the words alphabetically. 
//    10. Print the index of a specific word after sorting.


// let text = "JavaScript is fun but challenging when you want to master it quickly";
// let text2 = text.split(" ")
// console.log(text2);

// let t = 3;
// let filtered = text2.filter(word => {
//     return word.length > t;
// })
//  console.log(filtered);

// console.log(filtered.indexOf("challenging"));

// console.log(filtered.reverse());

// filtered.unshift("HTML");
// console.log(filtered);

// console.log(filtered.includes("CSS"));

// filtered.forEach(word => {
//     console.log(word);
// });


// console.log(filtered.join(","));

// filtered.sort((a,b) => a.localeCompare (b));
// console.log(filtered);