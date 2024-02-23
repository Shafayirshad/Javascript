// 1. Alerts
        alert("Welcome to the JavaScript Assignment!");

 // 2. Variables for Strings
        var favoriteFood = "Biryani"; // Yahan "Biryani" apna pasandida khana hai, aap apna pasandida khana yahan likh sakte hain.
        console.log(favoriteFood); // Isse "Biryani" console par print hoga.

// 3. Variables for Numbers
        var num1 = 10;
        var num2 = 5;
         
        //for addition

        var sum = num1 + num2;
        console.log("Addition: " + sum);

        //for substraction

        var substraction = num1 - num2;
        console.log("Substraction: " + (substraction));

        //for multiplication

        var multiplication = num1 * num2;
        console.log("Multiplication: " + multiplication);

        //for division

        var division = num1 / num2;
        console.log("division: " + division)

// 4. Variable Names Legal and Illegal

         //Legal Variables Names;

        //Legal Variable Name (camelCase:) This follows the convention of starting each word with a capital letter except for the first word, without using any spaces or underscores.
        var myVariable = "Legal Variable";

        //Legal Variable Name (snake_case:) This follows the convention of using lowercase letters and underscores to separate words in a variable name.
        var my_variable = "Legal Variable";

        //Legal Varibale Name (variable1) This is a simple and straightforward variable name that includes a number at the end, which is allowed in variable names.
        var myvariable1 = "legal variable";


        //Illegal Variable Name:
        
        //Ilegal Variable Name (123variable:) Variable names cannot start with a number, so this is an illegal variable name.
        //var 123variable = "Illegal variable";

        //Ilegal Variable Name (variable-name:) Variable names cannot contain special characters like hyphens, so this is an illegal variable name.
        //var variable-name = "Illegal variable"; 

        //Ilegal Variable Name (Special Characters:) Variable names cannot start special characters like hyphens, so this is an illegal variable name.
        //var $variable = "Illegal variable"; 

// 5. Math Expressions: Familiar Operators 'BODMAS(Brackets Order, Divide, Multiply, Addition, Substraction)';

        var result = 20 + (40 - 10) * 10 / 2;
        console.log(result)

// 6. Math Expressions: Unfamiliar Operators: %(Modulus Operator);

        // The modulus operator (%) in JavaScript is used to find the remainder of a division operation.
  
        //Here is an example demonstrating the usage of the modulus operator:
        
        var num1 = 10;
        var num2 = 3;
        var remainder = num1 % num2;

        console.log(remainder); // Output should be 1
        
        //Post-increment;
        var counter = 121;
        counter++ // Output will be 122

        console.log(counter);

        //Post-decrement;
        var counter = 100;
        counter-- // Output will be 99

        console.log(counter);

        //Pre-increment;
        var variable1 = 10;
        var variable2 = ++variable1; // pre-increment, b will be assigned the value of a after increment
        console.log(variable1); // Output will be 11
        console.log(variable2); // Output will be 11

// 7.Concatenating Text Strings:

        var firstName = "Shafay";
        var lastName = "Irshad";

        var fullName = firstName + " " + lastName;

        console.log(fullName); // Output will be "Shafay Irshad"

// 8. Prompts:

        var userAge = prompt('What is your Age');

        console.log(userAge);

// 9. if statements:        

        var number = prompt("give me any number i will tell you your is odd or even");
        var reminder = number % 2;
        
        if (reminder == 0) {
          message = "your number is Even";
        } else {
          message = "your number is Odd";
        }

        alert(message);

// 10. if...else and else if statements:

        var userInput = prompt("Enter your numerical grade:");
        var grade = (userInput);

        if (grade >= 90) {  

        console.log("Your grade is A.");
        alert("your grade is A");
        } else if (grade >= 80) {

        console.log("Your grade is B.");
        alert("your grade is B");
        } else if (grade >= 70) {

        console.log("Your grade is C.");
        alert("your grade is C");
        } else if (grade >= 60) {

        console.log("Your grade is D.");
        alert("your grade is D");
        } else if (grade <=50) { 
        console.log("Your grade is F.");
        alert("your grade is F");
        }






