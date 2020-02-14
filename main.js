// # Setup
// For this exercise, we don't need to run npm test. We will only use the command node main.js in the terminal to see the results of our functions.


// 0. Once again, write a function that accepts a number and prints out a banner with the words "Challenge" and the number in it. Use string interpolation if you want! **Call it before calling each function. Don't call it again if you need to print twice to test a function.**
function makeBanner(num){
    console.log(`$$$$$$ Challenge ${num} $$$$$`)
}
makeBanner('Best Banner')
// 1. Write a function that prints out only the vowels from a given string. Do not use regular expressions ("regex"). Now call it with "Regular expressions are for term 2.". You should see an "e" printed, followed by a "u", followed by an "a", and so on.

function vowelsOnly(str){
    for(i=0;i<=str.length;i++)
    if (str[i]==='a'|| str[i]==='e'|| str[i]==='i'||str[i]==='o'||str[i]==='u'){
    console.log(str[i])

    }
}
vowelsOnly('Regular expressions are for term 2')
makeBanner('2')
// 2. Write a function that prints out the first 5 vowels from the given string. Continue to not use regexes. Now call it with "Regular expressions are for term 2.". You should see an "e" printed, followed by a "u", followed by an "a", followed by an "e", followed by another "e", and then nothing else. Now call it again with "Hello!" You should see only an "e" and an "o" print.
function vowelsOnly5(str){
    let counter = 0
    for(i=0;i<=str.length;i++)
    if (counter<5 && str[i]==='a'|| 
        counter<5 && str[i]==='e'|| 
        counter<5 && str[i]==='i'||
        counter<5 && str[i]==='o'||
        counter<5 && str[i]==='u'){
        counter = counter + 1
        console.log(str[i])

    }
}
vowelsOnly5('Regular expressions are for term 2')
vowelsOnly5('Hello')
makeBanner(3)
// 3. Write a function that prints out every third character, _without_ examining every character. In other words, you may _not_ increment your index by one and decide whether to print based on the result of a modulus operation on that index. (A standard solution for this.). Now call it with "I am the alfalfa and the omelette." You should see "a", followed by "t", followed by a space, and so on. An "e" should be the last thing printed, with no `undefined` values showing up.
function thirdChar(str){
    let n = 2
    while(n<str.length){
    console.log(str[n])

    n = n+3}

}
thirdChar("I am the alfalfa and the omelette.")
makeBanner(4)
// 4. Write a function that prints out the first four characters after the given index in the given string, or, if there are fewer characters remaining from, prints only the remaining ones. Now call it with 'Oh hi, I didn't see you there. Welcome.' and `4` as your parameters. You should see 'i', followed by ',', followed by a space, followed by an 'I'. Now call it again with 'Oh hi, I didn't see you there. Welcome.' and `38` as your parameters. You should 'm', 'e', and '.' printed, and no fourth printing.
function counterCount(n,str){
    let counter = 0

    for(i=n;i<str.length;i++){
        if (counter <= 4){
            console.log(str[i])
            counter = counter + 1
        }
    }

}
// 
counterCount(4, "Oh hi, I didn't see you there. Welcome.")
counterCount(36,"Oh hi, I didn't see you there. Welcome.")
makeBanner(5)
// 5. Write a function that prints out the index of every `u` it finds in the given string. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'`. You should see `2`, `23`, and `29` printed out. 
function index(str){
for(i=0;i<str.length;i++){
    if (str[i]==='u')
    console.log(i)
}

}
index('You picked the wrong house, bub.')
makeBanner(6)
// //  6. Write a function that prints out the first index of the letter `u` in the given string. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'` You should see the number `2` printed, and only that.
function oneIndex(str){
    let counter = 1
    for(i=0;i<str.length;i++){
    if (str[i]==='u' && counter === 1){
    console.log(i)
    counter = counter + 1}

}
}
oneIndex('You picked the wrong house, bub.')
makeBanner(7)
// 7. Write a function that prints out the first index of the letter `u` in the given string, with a `-1` printed if it doesn't find it. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'` You should see the number `2` printed, and only that. Now call it with `"I'm Canadian."` You should see `-1` print out.
function twoIndex(str){
    let counter = 1

    for(i=0;i<=str.length;i++){
    if (str[i]==='u' && counter === 1){
    console.log(i)
    counter = counter +1}
    if (i===str.length && counter ===1)
    {console.log(-1)
    // if(str[i]!=='u' && counter ===1)console.log(-1)
    counter = counter + 1}  
    }
}  
    // twoIndex('You picked the wrong house, bub.')
    twoIndex("I'm Canadian.")