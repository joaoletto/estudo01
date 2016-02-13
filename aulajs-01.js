/*
- JS possui 7 tipo de dados para variáveis: undefined, boolean, string, symbol, number e               object.
- escrever variaveis em camelCase
- var myStr = "I am a \"double quoted\" string inside \"double quotes\"";   //exibe " na tela

\'	single quote
\"	double quote
\\	backslash
\n	new line
\r	carriage return
\t	tab
\b	backspace
\f	form feed

- var ourStr = "I come first. " + "I come second."; //concatenação
*/
  
        // Example
        var firstName = "Ada";
        var secondLetterOfFirstName = firstName[1];

        // Setup
        var lastName = "Lovelace";

        // Only change code below this line.
        var thirdLetterOfLastName = lastName;
        thirdLetterOfLastName = lastName[2];



//Use Bracket Notation to Find the Last Character in a String
    // Example
    var firstName = "Ada";
    var lastLetterOfFirstName = firstName[firstName.length - 1];

    // Setup
    var lastName = "Lovelace";

    // Only change code below this line.
    var lastLetterOfLastName = lastName;
    lastLetterOfLastName = lastName[lastName.length -1];


/* ================================================================================= */
//Use Bracket Notation to Find the NthtoLast Character in a String
    // Example
    var firstName = "Ada";
    var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

    // Setup
    var lastName = "Lovelace";

    // Only change code below this line
    var secondToLastLetterOfLastName = lastName;
    secondToLastLetterOfLastName = lastName[lastName.length - 2];
/* ================================================================================= */



/* ================================================================================= */
//Word Blanks
    function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
        var result = "";
        // Your code below this line
    result = "AA " + myNoun + " BB " + myAdjective + " CC " + myVerb + " DD " + myAdverb + " EE ";

        // Your code above this line
        return result;
    }

    // Change the words here to test your function
    wordBlanks("dog", "big", "ran", "quickly");
/* ================================================================================= */



/* ================================================================================= */
//Store Multiple Values in one Variable using JavaScript Arrays
    var array = ["John", 23];
/* ================================================================================= */



/* ================================================================================= */
//Access Array Data with Indexes
    // Example
    var ourArray = [1,2,3];
    var ourData = ourArray[0]; // equals 1

    // Setup
    var myArray = [1,2,3];

    // Only change code below this line.
    var myData = myArray[0];
/* ================================================================================= */



/* ================================================================================= */
//Modify Array Data With Indexes
    // Example
    var ourArray = [1,2,3];
    ourArray[1] = 3; // ourArray now equals [1,3,3].

    // Setup
    var myArray = [1,2,3];

    // Only change code below this line.
    myArray[0] = 3;
/* ================================================================================= */



/* ================================================================================= */
//Access MultiDimensional Arrays With Indexes
    // Setup
    var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

    // Only change code below this line.
    var myData = myArray[2][1];

/* ================================================================================= */



/* ================================================================================= */
//Manipulate Arrays With push
    // Example
    var ourArray = ["Stimpson", "J", "cat"];
    ourArray.push(["happy", "joy"]); 
    // ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

    // Setup
    var myArray = [["John", 23], ["cat", 2]];

    // Only change code below this line.
    myArray.push(["dog", 3]); 


/* ================================================================================= */



/* ================================================================================= */
//Manipulate Arrays With pop
    // Example
    var ourArray = [1,2,3];
    var removedFromOurArray = ourArray.pop(); 
    // removedFromOurArray now equals 3, and ourArray now equals [1,2]

    // Setup
    var myArray = [["John", 23], ["cat", 2]];

    // Only change code below this line.
    var removedFromMyArray = myArray.pop();
/* ================================================================================= */



/* ================================================================================= */
//Manipulate Arrays With shift
    // Example
    var ourArray = ["Stimpson", "J", ["cat"]];
    removedFromOurArray = ourArray.shift();
    // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

    // Setup
    var myArray = [["John", 23], ["dog", 3]];

    // Only change code below this line.
    var removedFromMyArray = myArray.shift();
/* ================================================================================= */



/* ================================================================================= */
//Manipulate Arrays With unshift
    // Example
    var ourArray = ["Stimpson", "J", "cat"];
    ourArray.shift(); // ourArray now equals ["J", "cat"]
    ourArray.unshift("Happy"); 
    // ourArray now equals ["Happy", "J", "cat"]

    // Setup
    var myArray = [["John", 23], ["dog", 3]];
    myArray.shift();

    // Only change code below this line.
    myArray.unshift(["Paul", 35] ); 

/* ================================================================================= */



/* ================================================================================= */
//Write Reusable JavaScript with Functions
    // Example
    function ourFunction() {
        console.log("Heyya, World");
    }

    ourFunction();

    // Only change code below this line
    function myFunction(){
        console.log("Hi World");
    }


    myFunction();


/* ================================================================================= */



/* ================================================================================= */
//Passing Values to Functions with Arguments
    // Example
    function ourFunction(a, b) {
        console.log(a - b);
    }
    ourFunction(10, 5); // Outputs 5

    // Only change code below this line.
    function myFunction(a, b) {
        console.log(a + b);
    }
    myFunction(1, 2);


/* ================================================================================= */



/* ================================================================================= */
//Global Scope and Functions
    // Declare your variable here
    var myGlobal = 10;

    function fun1() {
        // Assign 5 to oopsGlobal Here
        oopsGlobal = 5;
    }

    // Only change code above this line
    function fun2() {
        var output = "";
        if (typeof myGlobal != "undefined") {
            output += "myGlobal: " + myGlobal;
        }
        if (typeof oopsGlobal != "undefined") {
            output += " oopsGlobal: " + oopsGlobal;
        }
        console.log(output);
    }


/* ================================================================================= */



/* ================================================================================= */
//Global vs Local Scope in Functions
    // Setup
    var outerWear = "T-Shirt";

    function myFunction() {
        // Only change code below this line
        var outerWear = "sweater";


        // Only change code above this line
        return outerWear;
    }

    myFunction();

/* ================================================================================= */



/* ================================================================================= */
//Assignment with a Returned Value
    // Example
    var changed = 0;

    function change(num) {
        return (num + 5) / 3;
    }

    changed = change(10);

    // Setup
    var processed = 0;

    function process(num) {
        return (num + 3) / 5;
    }

    // Only change code below this line
    processed = process(7);

/* ================================================================================= */



/* ================================================================================= */
//Stand in Line
/*
Write a function queue which takes an array (arr) and a number (item) as arguments. Add the number to the end of the array, then remove the first element of array. The queue function should then return the element that was removed.
*/
    function queue(arr, item) {
        arr.push(item);
        var removed = arr.shift();

        return removed; 

    }

    // Test Setup
    var testArr = [1,2,3,4,5];

    // Display Code
    console.log("Before: " + JSON.stringify(testArr));
    console.log(queue(testArr, 6)); // Modify this line to test
    console.log("After: " + JSON.stringify(testArr));


/* ================================================================================= */



/* ================================================================================= */
//

/* ================================================================================= */



/* ================================================================================= */
//

/* ================================================================================= */



/* ================================================================================= */
//

/* ================================================================================= */



/* ================================================================================= */
//

/* ================================================================================= */



/* ================================================================================= */
//

/* ================================================================================= */



/* ================================================================================= */
//

/* ================================================================================= */






