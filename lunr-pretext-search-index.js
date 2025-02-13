var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This book was written by undergraduate students at Wright College who were enrolled in my Math 299 class, Writing in the Sciences.  For many years, I have been teaching Discrete Math using the open source mathematical software SageMath. Despite the fabulous capabilities of this software, students were often frustrated by the lack of specific documentation geared towards beginning undergrad students in Discrete Math.  This book was born out of this frustration and the desire to make our own contribution to the Open Education movement, from which we have benefitted greatly. In the context of Open Pedagogy, my students and I ventured into a challenging learning experience based on the principles of freedom and responsibility. Each week, students wrote a chapter of this book. They found the topics and found their voice. We critically analyzed their writing, and they edited and edited again and again. They wrote code, tested it and polished it. In the process, we all learned so much about Sage, and we found some bugs in the software that are now in the process of being fixed thanks to its very active community of developers.  The result is the book we dreamed of having when we first attempted Discrete Math with Sage.  Our book is intended to provide concise and complete instructions on how to use different Sage functions to solve problems in Discrete Math. Our goal is to streamline the learning process, helping students focus more on mathematics and reducing the friction of learning how to code. Our textbook is interactive and designed for all math students, regardless of programming experience. Rooted in the open education philosophy, our textbook is, and always will be, free for all.  I am very proud of the work of my students and hope that this book will serve as inspiration for other students to take ownership of a commons-based education. Towards a future where higher education is equally accessible to all.   Hellen Colman  Chicago, May 2024   "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " We would like to acknowledge the following peer-reviewers:   Moty Katzman, University of Sheffield    Ken Levasseur, University of Massachusetts Lowell    Vartuyi Manoyan, Wright College     We would like to acknowledge the following proof-readers:   Ted Jankowski, Wright College    Justin Lowry, Wright College    Yolanda Nieves, Wright College    Fabio Re, Rosalind Franklin University    Tineka Scalzo, Wright College     The making of this book is supported in part by the Wright College Open Educational Resource Expansion grant from the Secretary of State\/Illinois State Library.  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "From the Student Authors",
  "body": " From the Student Authors  This textbook is a testament to our collaborative spirit and the Open Education movement, aiming to make higher education accessible to all by providing approachable resources for students to learn open-source mathematics software.  The creation of this textbook was a joint effort by a dedicated and inspirational team. The quality of our work reflects our collective contributions and enthusiasm.  We would like to acknowledge Hellen Colman, Professor of Mathematics at Wright College, our co-author, and our guiding star. Her mathematical expertise ensured the accuracy and relevance of our material. Inspired by her teaching and Discrete Math lectures at the City Colleges of Chicago-Wilbur Wright College, this project owes much to her mentorship and support. Her encouragement and trust have been invaluable, shaping our perspectives and approaches from our Discrete Math course to this OER development.  We extend our heartfelt gratitude to Ken Levasseur for his invaluable guidance and expertise in creating open-source textbooks. His contributions have significantly enhanced the quality and accessibility of our work.  A special thanks is due to Tineka Scalzo, Wright College librarian, for her valuable advice on publishing and copyright issues. Her insights have been instrumental in helping us navigate the complexities of academic publishing.  We also express our gratitude to the many talented developers and mathematicians within the open-source communities. The PreTeXt community played an essential role in our authoring process, while the SageMath community provided crucial subject matter expertise. We are very grateful to everyone who has worked to develop Sage and to the creators of PreTeXt.  We would also like to thank our peer reviewers and proofreaders, whose meticulous attention to detail ensured the clarity and quality of this textbook. Your contributions have been instrumental in bringing this project to fruition.  Finally, we express our deepest gratitude to all the contributors who made this project possible. Your dedication and collaborative spirit have made a lasting impact on this work and the field of open education.   Zunaid Ahmed and Samuel Lubliner   "
},
{
  "id": "authors",
  "level": "1",
  "url": "authors.html",
  "type": "Preface",
  "number": "",
  "title": "Authors and Contributors",
  "body": " Authors and Contributors   Zunaid Ahmed Computer Engineering Truman College zunaid.ahmed@hotmail.com  Hellen Colman Math Department Wright College hcolman@ccc.edu  Samuel Lubliner Computer Science Wright College sage.oer@gmail.com  Allaoua Boughrira (Contrib.) Mathematics Wright College a.boughrira@gmail.com   "
},
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "about-sage",
  "level": "1",
  "url": "about-sage.html",
  "type": "Section",
  "number": "1.1",
  "title": "Intro to Sage",
  "body": " Intro to Sage   You can execute and modify Sage code directly within the SageMathCells embedded on this webpage. Cells on the same page share a common memory space. To ensure accurate results, run the cells in the sequence in which they appear. Running them out of order may cause unexpected outcomes due to dependencies between the cells.    Sage as a Calculator  Before we get started with discrete math, let's see how we can use Sage as a calculator. Here are the basic arithmetic operators:  arithmetic operators    Addition: +     Subtraction: -     Multiplication: *     Exponentiation: ** , or ^     Division: \/     Integer division: \/\/     Modulo: %     There are two ways to run the code within the cells:   Click the Evaluate (Sage) button located under the cell.    Use the keyboard shortcut Shift + Enter if your cursor is active in the cell.                Variables and Names  We can assign the value of an expression to a variable. A variable is a name that refers to a value in the computer's memory. Use the assignment operator = to assign a value to a variable. The variable name is on the left side of the assignment operator, and the value is on the right side. Unlike the expressions above, the assignment statement does not display anything. To view the value of a variable, type the variable name and run the cell.   When choosing variable names, use valid identifiers.  identifiers     Identifiers cannot start with a digit.    Identifiers are case-sensitive.    Identifiers can include:   letters ( a - z , A - Z )    digits ( 0 - 9 )    underscore character _        Do not use spaces, hyphens, punctuation, or special characters when naming identifiers.    Do not use keywords as identifiers.     Below are some reserved keywords that you cannot use as variable names:   False , None , True , and , as , assert , async , await , break , class , continue , def , del , elif , else , except , finally , for , from , global , if , import , in , is , lambda , nonlocal , not , or , pass , raise , return , try , while , with , yield .  Use the Python keyword module to check if a name is a keyword.   The output is True because if is a keyword. Try checking other names.   "
},
{
  "id": "displaying",
  "level": "1",
  "url": "displaying.html",
  "type": "Section",
  "number": "1.2",
  "title": "Display Values",
  "body": " Display Values  Sage offers various ways to display values on the screen. The simplest way is to type the value into a cell, and Sage will display it. Sage also has functions that display values in different formats.      print() displays the value of the expression inside the parentheses on the screen.     pretty_print() displays rich text.     show() is an alias for pretty_print() .     latex() produces the raw latex code for the expression inside the parentheses. You can paste this code into a latex document to display the expression.     %display latex renders the output of commands as latex automatically.    While Python string formatting is available, the output is unreliable for rendering rich text and latex due to compatibility issues.     Sage will display the value of the last line of code in a cell.    print() outputs a similar result without the quotes.   View mathematical notation with rich text.   If we want to display values from multiple lines of code, we can use multiple functions to display the values.   Obtain raw latex code for an expression.   If you are working in a Jupyter notebook or SageMathCell, %display latex sets the display mode.   The expressions will continue to render as latex until you change the display mode. The display mode is still set from the previous cell.   Revert to the default output with %display plain .    "
},
{
  "id": "OOP",
  "level": "1",
  "url": "OOP.html",
  "type": "Section",
  "number": "1.3",
  "title": "Object-Oriented Programming",
  "body": " Object-Oriented Programming   Object-Oriented Programming (OOP) is a programming paradigm that models the world as a collection of interacting objects . More specifically, an object is an instance of a class . A class can represent almost anything.   Classes are like blueprints that define the structure and behavior of objects. A class defines the attributes and methods of an object. An attribute is a variable that stores information about the object. A method is a function that can interact with or modify the object. Although you can create custom classes, the open-source community has already defined classes for us. For example, there are specialized classes for working with integers, lists, strings, graphs, and more.  In Python and Sage, almost everything is an object. When assigning a value to a variable, the variable references an object. In this case, the object is a list of strings.    The type() function confirms that 'a' is an instance of the string class and vowels is an instance of the list class. We create a list object named vowels by assigning a series of characters within square brackets to a variable. This object, vowels , now represents a list of string elements, and we can interact with it using various methods.   Dot notation is a syntax used to access an object's attributes and call an object's methods. For example, the list class has an append method, allowing us to add elements to the list.   A parameter is a variable passed to a method. In this case, the parameter is the string 'y' . The append method adds the string 'y' to the end of the list. The list class has many more methods that we can use to interact with the list object. While list is a built-in Python class, Sage offers many more classes specialized for mathematical applications. For example, we will learn about the Sage Set class in the next chapter. Objects instantiated from the Set class have methods and attributes useful for working with sets.   While OOP might seem abstract at first, it will become clearer as we dive deeper into Sage. We will see how Sage utilizes OOP principles and built-in classes to offer a structured way to represent data and perform powerful mathematical operations.  "
},
{
  "id": "OOP-2",
  "level": "2",
  "url": "OOP.html#OOP-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Object-Oriented Programming objects instance class "
},
{
  "id": "OOP-3",
  "level": "2",
  "url": "OOP.html#OOP-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Classes attributes methods "
},
{
  "id": "OOP-8",
  "level": "2",
  "url": "OOP.html#OOP-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dot notation "
},
{
  "id": "OOP-10",
  "level": "2",
  "url": "OOP.html#OOP-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parameter "
},
{
  "id": "data-types",
  "level": "1",
  "url": "data-types.html",
  "type": "Section",
  "number": "1.4",
  "title": "Data Types",
  "body": " Data Types  In computer science, Data types represent data based on properties of the data. Python and Sage use data types to implement these classes. Since Sage builds upon Python, it inherits all the built-in Python data types. Sage also provides classes that are well-suited for mathematical computations.  Let's ask Sage what type of object this is.  data types integer   The type() function reveals that 2 is an instance of the Integer class. Sage includes numerous classes for different types of mathematical objects.  data types symbolic  In the following example, Sage does not evaluate an approximation of sqrt(2) * log(3) . Sage will retain the symbolic value.   data types string   String : a str is a sequence of characters used for text. You can use single or double quotes.   data types boolean   Boolean : The type bool can be one of two values, True or False .   data types list   List : A mutable collection of items within a pair of square brackets [] . If an object is mutable, you can change its value after creating it.   Lists are indexed starting at 0 . Here, we access the first element of a list by asking for the value at index zero.   Lists have many helpful methods.   data types tuple   Tuple : An immutable collection within a pair of parenthesis () . If an object is immutable, you cannot change the value after creating it.   data types set (Python)   set : A collection of items within a pair of curly braces {} . set() with lowercase s is built into Python. The items in a set are unique and unordered. After printing the set, we see there are no duplicate values.    Set is a built-in Sage class. Set with a capital S has added functionality for mathematical operations.   We start by defining a list within square brackets [] . Then, the Set() function creates the Sage set object.   data types dictionary   Dictionary : A collection of key-value pairs.   Use the pprint module to print the dictionary in a more readable format.   "
},
{
  "id": "data-types-2",
  "level": "2",
  "url": "data-types.html#data-types-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data types "
},
{
  "id": "data-types-6",
  "level": "2",
  "url": "data-types.html#data-types-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Integer "
},
{
  "id": "data-types-8",
  "level": "2",
  "url": "data-types.html#data-types-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symbolic "
},
{
  "id": "data-types-11",
  "level": "2",
  "url": "data-types.html#data-types-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "String "
},
{
  "id": "data-types-14",
  "level": "2",
  "url": "data-types.html#data-types-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Boolean "
},
{
  "id": "data-types-17",
  "level": "2",
  "url": "data-types.html#data-types-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "List "
},
{
  "id": "data-types-24",
  "level": "2",
  "url": "data-types.html#data-types-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Tuple "
},
{
  "id": "data-types-27",
  "level": "2",
  "url": "data-types.html#data-types-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set "
},
{
  "id": "data-types-29",
  "level": "2",
  "url": "data-types.html#data-types-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Set "
},
{
  "id": "data-types-34",
  "level": "2",
  "url": "data-types.html#data-types-34",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dictionary "
},
{
  "id": "iteration",
  "level": "1",
  "url": "iteration.html",
  "type": "Section",
  "number": "1.5",
  "title": "Iteration",
  "body": " Iteration iteration for loop  Iteration is a programming technique that allows us to efficiently write code by repeating instructions with minimal syntax. The for loop assigns a value from a sequence to the loop variable and executes the loop body once for each value.     iteration list comprehension  Here is an example of list comprehension, a concise way to create lists. Unlike Python's range() , the Sage range syntax for list comprehension includes the ending value.   We can also specify a condition in list comprehension. Let's create a list that only contains even numbers.   "
},
{
  "id": "debugging",
  "level": "1",
  "url": "debugging.html",
  "type": "Section",
  "number": "1.6",
  "title": "Debugging",
  "body": " Debugging  error message  Error messages are an inevitable part of programming. When you make a syntax error and see a message, read it carefully for clues about the cause of the error. While some messages are helpful and descriptive, others may seem cryptic or confusing. With practice, you will develop valuable skills for debugging your code and resolving errors. Not all errors will produce an error message. Logical errors occur when the syntax is correct, but the program does not produce the expected output. Remember, mistakes are learning opportunities, and everyone makes them. Here are some tips for debugging your code:   Read the error message carefully for information to help you identify and fix the problem.    Study the documentation.    Google the error message. Someone else has likely encountered the same issue.    Search for previous posts on Sage forums.    Take a break and return with a fresh perspective.    If you are still stuck after trying these steps, ask the Sage community.     Let's dive in and make some mistakes together!   Why didn't this print Hello, World! on the screen? The error message informed us of a SyntaxError . While the phrase invalid decimal literal may seem confusing, the key issue here is the invalid variable name. Valid identifiers must start with a letter or underscore. They cannot begin with a number or use any special characters. Let's correct the variable name by using a valid identifier.   Here is another error:   In this case, we encounter a NameError because Hi is not defined. Sage assumes that Hi is a variable because there are no quotes. We can make Hi a string by enclosing it in quotes.   Alternatively, if we intended Hi to be a variable, we can assign a value to it before printing.   Reading the documentation is essential to understanding how to use methods correctly. If we incorrectly use a method, we will likely get a NameError , AttributeError , TypeError , or ValueError , depending on the mistake.  Here is an example of a NameError :   The sort() method must be called on the list object using dot notation.   Here is an example of an AttributeError :   Here is the correct way to use the len() method:   Here is an example of a TypeError :   The append() method only takes one argument. To add multiple elements to a list, use the extend() method.   Here is an example of a ValueError :   Although the resulting error message is lengthy, the last line informs us that the argument must be a non-negative integer.   Finally, we will consider a logical error. If your task is to print the numbers from to , you may mistakenly write the following code:   The output will be the numbers from to . To include , we need to adjust the range because the start is inclusive and the stop is exclusive.   For more information, read the CoCalc article about the top mathematical syntax errors in Sage   "
},
{
  "id": "defining-functions",
  "level": "1",
  "url": "defining-functions.html",
  "type": "Section",
  "number": "1.7",
  "title": "Defining Functions",
  "body": " Defining Functions functions (programming)  Sage comes with many built-in functions. Math terminology is not always standard, so be sure to read the documentation to learn what these functions do and how to use them. You can also define custom functions yourself. You are welcome to use the custom functions we define in this book. However, since these custom functions are not part of the Sage source code, you will need to copy and paste the functions into your Sage environment. If you try to use a custom function without defining it, you will get a NameError .  To define a custom function in Sage, use the def keyword followed by the function name and the function's arguments. The function's body is indented. When you call the function, the return keyword returns a value from the function. The function definition is only stored in memory after you run the cell. You will not see any output when you run the cell that defines the function. You will see output only when you call the function. A green box under the cell indicates the successful execution of the cell. If the box is not green, you must run the cell to define the function.  You may have heard of Pascal's Triangle, a triangular array of numbers in which each number is the sum of the two numbers directly above it. Here is an example function that returns the (0-indexed) row of Pascal's Triangle:   Try calling the function for yourself. First, run the Sage cell with the function definition to define the function. If you try to call a function without defining it, you will get a NameError . After defining the function, you can use it in other cells. You won't see any output when you run the cell that defines the function. The Sage cells store the function definition memory. You will see output only when you call the function. After running the above cell, you can call the pascal_row() function.   Input validation makes functions more robust. We may get some validation out of the box. For example, if we try to call the function using a string or decimal value as input, we will get a TypeError :   However, if we try to call the function with a negative integer, the function will return an empty list without raising an error.   This lack of error handling is risky because it can go undetected and cause unexpected behavior. Let's add a ValueError to handle negative input:   Running the above cell redefines the function. Try calling the function with a negative integer to see the input validation.   Functions can also include a docstring to provide documentation for the function. The docstring is a string that appears as the first statement in the function body. It describes what the function does and how to use it.   After redefining the function and running the above cell, view the docstring by calling the help() function on the function name. You can also access the docstring with the ? operator.   For more information on code style conventions and writing documentation strings, refer to the General Conventions article from the Sage Developer's Guide.  "
},
{
  "id": "documentation",
  "level": "1",
  "url": "documentation.html",
  "type": "Section",
  "number": "1.8",
  "title": "Documentation",
  "body": " Documentation  Sage can do many more mathematical operations. If you want an idea of what Sage can do, check out the Quick Reference Card and the Reference Manual .  The tutorial is an overview to become familiar with Sage.  The Sage documentation can be found at this link. Right now, reading the documentation is optional. We will do our best to get you up and running with Sage with this text.  You can quickly reference Sage documentation with the ? operator. You may also view the source code with the ?? operator.      "
},
{
  "id": "sage-browser",
  "level": "1",
  "url": "sage-browser.html",
  "type": "Section",
  "number": "1.9",
  "title": "Run Sage in the browser",
  "body": " Run Sage in the browser  The easiest way to get started is by running SageMath online. However, if you do not have reliable internet, you can also install the software locally on your own computer. Begin your journey with SageMath by following these steps:  run code CoCalc  run code SageMath worksheets  run code Jupyter Notebook  run code local    Navigate to the SageMath website   Click on Sage on CoCalc    Create a CoCalc account   Go to Your Projects on CoCalc and create a new project.  Start your new project and create a new worksheet. Choose the SageMath Worksheet option.   Enter SageMath code into the worksheet. Try to evaluate a simple expression and use the worksheet like a calculator. Execute the code by clicking Run or using the shortcut Shift + Enter . We will learn more ways to run code in the next section.   Save your worksheet as a PDF for your records.  To learn more about SageMath worksheets, refer to the documentation   Alternatively, you can run Sage code in a Jupyter Notebook for some additional features.  If you are feeling adventurous, you can install Sage and run it locally on your own computer. Keep in mind that a local install will be the most involved way to run Sage code.    "
},
{
  "id": "creating-sets",
  "level": "1",
  "url": "creating-sets.html",
  "type": "Section",
  "number": "2.1",
  "title": "Creating Sets",
  "body": " Creating Sets   Set Definitions  data types Set (Sage)  To construct a set, encase the elements within square brackets [] . Then, pass this list as an argument to the Set() function. It's important to note that the S in Set() should be uppercase to define a Sage set. In a set, each element is unique.   Notice that the months in set do not appear in the same order as when you created the set. Sets are unordered collections of elements.  We can ask Sage to compare two sets to see whether or not they are equal. We can use the == operator to compare two values. A single equal sign = and double equal sign == have different meanings.  equality operator  The equality operator  == is used to ask Sage if two values are equal. Sage compares the values on each side of the operator and returns the Boolean value. The == operator returns True if the sets are equal and False if they are not equal.  assignment operator  The assignment operator  = assigns the value on the right side to the variable on the left side.   If you have experience with Python, you may have used a Python set . Notice how the Python set begins with a lowercase s . Even though Sage supports Python sets, we will use Sage Set for the added features. Be sure to define Set() with an upper case S .    Set Builder Notation  Instead of explicitly listing the elements of a set, we can use a set builder notation to define a set. The set builder notation is a way to define a set by describing the properties of its elements. Here, we use the Sage srange instead of the Python range function for increased flexibility and functionality.   Iteration is a way to repeat a block of code multiple times and can be used to automate repetitive tasks. We could have created the same set by typing A = Set([2, 4, 6, 8, 10]) . Imagine if we wanted to create a set of even numbers between 1 and 100. It would be much easier to use iteration.     Subsets  To list all the subsets included in a set, we can use the Subsets() function and then use a for loop to display each subset.     Set Membership Check  Sage allows you to check whether an element belongs to a set. You can use the in operator to check membership, which returns True if the element is in the set and False otherwise.   We can check if is a subset of by using the issubset method.   When we evaluate W.issubset(Severe) , Sage returns False because is not a subset of .    "
},
{
  "id": "subsec-Ways-to-create-a-set-8",
  "level": "2",
  "url": "creating-sets.html#subsec-Ways-to-create-a-set-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equality operator "
},
{
  "id": "subsec-Ways-to-create-a-set-10",
  "level": "2",
  "url": "creating-sets.html#subsec-Ways-to-create-a-set-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "assignment operator "
},
{
  "id": "cardinality",
  "level": "1",
  "url": "cardinality.html",
  "type": "Section",
  "number": "2.2",
  "title": "Cardinality",
  "body": " Cardinality cardinality  To find the cardinality of a set, we use the cardinality() function.   Alternatively, we can use the Python len() function. Instead of returning a Sage Integer , the len() function returns a Python int .   In many cases, using Sage classes and functions will provide more functionality. In the following example, cardinality() gives us a valid output while len() does not.    "
},
{
  "id": "sec-operation-on-sets",
  "level": "1",
  "url": "sec-operation-on-sets.html",
  "type": "Section",
  "number": "2.3",
  "title": "Operations on Sets",
  "body": " Operations on Sets   Union of Sets  set operations union  There are two distinct methods available in Sage for calculating unions.  Suppose and . We can use the union() function to calculate .   Notes  The union operation is relevant in real-world scenarios, such as merging two distinct music playlists into one. In this case, any song that appears in both playlists will only be listed once in the merged playlist.    Alternatively, we can use the | operator to perform the union operation.     Intersection of Sets  set operations intersection  Similar to union, there are two methods of using the intersection function in Sage.  Suppose and . We can use the intersection() function to calculate .   Alternatively, we can use the & operator to perform the intersection operation.     Difference of Sets  set operations difference  Suppose and . We can use the difference() function to calculate the difference between sets.   Alternatively, we can use the - operator to perform the difference operation.     Multiple Sets  When performing operations involving multiple sets, we can repeat the operations to get our results. Here is an example:  Suppose , and . To find the union of all three sets, we repeat the union() function.   Alternatively, we can repeat the | operator to perform the union operation.   The intersection() and difference() functions can perform similar chained operations on multiple sets.    Complement of Sets  set operations compliment  Let be the universal set. Given the set . We can use the difference() function to find the complement of .   Alternatively, we can use the - operator.     Cartesian Product of Sets  set operations Cartesian product  Suppose and . We can use the cartesian_product() and Set() functions to display the Cartesian product .   Alternatively, we can use the . notation to find the Cartesian product.     Power Sets  set operations power set  The power set of the set is the set of all subsets, including the empty set and the set itself. Sage offers several ways to create a power set, including the Subsets() and powerset() functions. First, we will explore the Subsets() function. The Subsets() function is more user-friendly due to the built-in Set methods. Next, we will examine some limitations of the Subsets() function. We introduce the powerset() function as an alternative for working with advanced sets not supported by Subsets() .  The Subsets() function returns all subsets of a finite set in no particular order. Here, we find the power set of the set of vowels and view the subsets as a list where each element is a Set .   We can confirm that the power set includes the empty set.   We can also confirm that the power set includes the original set.   The cardinality() method returns the total number of subsets.   There are limitations to the Subsets() function. For example, the Subsets() function does not support non-hashable objects.  About hashable objects:   A hashable object has a hash value that never changes during its lifetime.    A hashable object can be compared to other objects.    Most of Python’s immutable built-in objects are hashable.    Mutable containers (lists or dictionaries) are not hashable.    Immutable containers (tuples) are only hashable if their elements are hashable.     You will see an unhashable type error message when trying to create Subsets of a list containing a list. The powerset() function returns an iterator over the list of all subsets in no particular order. The powerset() function is ideal when working with non-hashable objects.   The powerset() function supports infinite sets. Let's generate the first 7 subsets from the power set of integers.   While the Subsets() function can represent infinite sets symbolically, it is not practical.   Observe the TypeError message when trying to retrieve a random element from Subsets(ZZ)    Pay close attention to the capitalization of function names. There is a difference between the functions Subsets() and subsets() . Notice the lowercase s in subsets() , which is an alias for powerset() .    Viewing Power Sets  Power sets can contain many elements. The powerset of the set contains elements elements.   If we only want to view part of the power set, we can specify a range of elements with a technique called slicing. For example, here are the first 5 elements of the power set.   Now, let's retrieve the following 5 elements of the power set.    "
},
{
  "id": "sec-combinatorics",
  "level": "1",
  "url": "sec-combinatorics.html",
  "type": "Section",
  "number": "3.1",
  "title": "Combinatorics",
  "body": " Combinatorics   Factorial Function factorial  The factorial of a non-negative integer , denoted by , is the product of all positive integers less than or equal to .  Compute the factorial of :     Combinations combination  The combination is an unordered selection of objects from a set of objects.   Notes  Use combinations when order does not matter, such as determining possible Poker hands. The order in which a player holds cards does not affect the kind of hand. For example, the following hand is a royal flush: , , , , . The following hand is also a royal flush: , , , , .   Calculate the number of ways to choose elements from a set of :   List the combinations:   binomial  The binomial() function provides an alternative method to compute the number of combinations.     Permutations permutation  A permutation is an ordered selection of objects from a set of objects.   Notes  Use permutations in situations where order does matter, such as when creating passwords. Longer passwords have more permutations, making them more challenging to guess by brute force.   To calculate the number of ways to choose elements from a set of when the order matters, use the Permutations() method.   List the permutations:   When , we can calculate permutations of elements.  Calculate the number of permutations of a set with elements:   List the permutations:   The following is an example of permutations of specified elements:   Choose :    "
},
{
  "id": "sec-logical-operation",
  "level": "1",
  "url": "sec-logical-operation.html",
  "type": "Section",
  "number": "4.1",
  "title": "Logical Operators",
  "body": " Logical Operators  logical operators and  logical operators or  logical operators not  logical operators conditional  logical operators biconditional   In Sage, the logical operators are AND & , OR | , NOT ~ , conditional -> , and biconditional <-> .    Name  Sage Operator  Mathematical Notation    AND  &     OR  |     NOT  ~     Conditional  ->     Biconditional  <->       Boolean Formula  Sage's propcalc.formula() function allows for the creation of Boolean formulas using variables and logical operators. We can then use show function to display the mathematical notations.    "
},
{
  "id": "sec-truth-table",
  "level": "1",
  "url": "sec-truth-table.html",
  "type": "Section",
  "number": "4.2",
  "title": "Truth Tables",
  "body": " Truth Tables truth table  The truthtable() function in Sage generates the truth table for a given logical expression.   Notes  Truth tables aid in the design of digital circuits.    An alternative way to display the table with better separation and visuals would be to use SymbolicLogic() , statement() , truthtable() and the print_table() functions.    SymbolicLogic() creates an instance for handling symbolic logic operations, while statement() defines the given statement. The truthtable() method generates a truth table for this statement, and print_table() displays it.  Expanding on the concept of truth tables, we can analyze logical expressions involving three variables. This provides a deeper understanding of the interplay between multiple conditions. The truthtable() function supports expressions with a number of variables that is practical for computational purposes, if the list of variables becomes too lengthy (such as extending beyond the width of a LaTeX page), the truth table's columns may run off the screen. Additionally, the function's performance may degrade with a very large number of variables, potentially increasing the computation time.   "
},
{
  "id": "sec-tautology",
  "level": "1",
  "url": "sec-tautology.html",
  "type": "Section",
  "number": "4.3",
  "title": "Analyzing Logical Equivalences",
  "body": " Analyzing Logical Equivalences   Equivalent Statements  When working with Sage symbolic logic, the == operator compares semantic equivalence.   Do not attempt to compare equivalence of truth tables.   However, we can compare equivalence of truth table lists .     Tautologies tautology  A tautology is a logical statement that is always true. The is_tautology() function checks whether a given logical expression is a tautology.   Notes  Tautologies are relevant in the field of cybersecurity. Attackers exploit vulnerabilities by injecting SQL code that turns a WHERE clause into a tautology, granting unintended access to the system.      Contradictions contradiction  In contrast to tautologies, contradictions are statements that are always false.    "
},
{
  "id": "intro-relations",
  "level": "1",
  "url": "intro-relations.html",
  "type": "Section",
  "number": "5.1",
  "title": "Introduction to Relations",
  "body": " Introduction to Relations relation  A relation  from set to set is any subset of the Cartesian product , indicating that . We can ask Sage to decide if is a relation from to . First, construct the Cartesian product . Then, build the set of all subsets of . Finally, ask if is a subset of .  Recall the Cartesian product consists of all possible ordered pairs , where and . Each pair combines an element from set with an element from set .  In this example, an element in the set relates to an element in if the element from is twice the element from .   Let's use relations to explore matching items of clothes. Let's define two sets, jackets and shirts, as examples:      The Cartesian product of jackets and shirts includes all possible combinations of jackets with shirts.   Since the Cartesian product returns all the possible combinations, some jackets and shirts will clash. Let's create a relation from jackets to shirts based on matching the items of clothing.   "
},
{
  "id": "intro-relations-3",
  "level": "2",
  "url": "intro-relations.html#intro-relations-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relation "
},
{
  "id": "relations-on-a-set",
  "level": "1",
  "url": "relations-on-a-set.html",
  "type": "Section",
  "number": "5.2",
  "title": "Relations on a set",
  "body": " Relations on a set  When we refer to the relation as a relation on  .  Consider the set . Let's define a relation on such that iff ( divides ). The relation can be represented by the set of ordered pairs where the first element divides the second:   "
},
{
  "id": "relations-on-a-set-2",
  "level": "2",
  "url": "relations-on-a-set.html#relations-on-a-set-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "on "
},
{
  "id": "digraphs",
  "level": "1",
  "url": "digraphs.html",
  "type": "Section",
  "number": "5.3",
  "title": "Digraphs",
  "body": " Digraphs digraph  A digraph, or directed graph, is a visual representation of a relation on the set . Every element in set is shown as a node (vertex). An arrow from the node to the node represents the pair on the relation .   We can add a title to the digraph with the name parameter.   Notes  Digraphs come in handy when relationships have a clear direction, like who follows who on social media or how academic papers cite one another.    If the digraph does not contain a relation from a node to itself, we can omit the loops=true parameter. If we happen to forgot to include the parameter when we need to, Sage will give us a descriptive error message.   We can also define the digraph using pair notion for relations.   Alternatively, we can define the digraph directly. The element on the left of the : is a node. The node relates to the elements in the list on the right of the : .   "
},
{
  "id": "properties",
  "level": "1",
  "url": "properties.html",
  "type": "Section",
  "number": "5.4",
  "title": "Properties",
  "body": " Properties   A relation on may satisfy certain properties:    Reflexive :      Symmetric :      Antisymmetric :      Transitive :      So far, we have learned about some of the built-in Sage methods that come out of the box, ready for us to use. Sometimes, we may need to define custom functions to meet specific requirements or check for particular properties. We define custom functions with the def keyword. If you want to reuse the custom functions defined in this book, copy and paste the function definitions into your own Sage worksheet and then call the function to use it.    Reflexive reflexive  A relation is reflexive if relates to for all elements in the set . This means all the elements relate to themselves.   Let's define a function to check if the relation on set is reflexive. We will create a set of pairs for each element in and check if this set is a subset of . This will return True if the relation is reflexive and False otherwise.   If we are working with DiGraphs , we can use the method has_edge to check if the graph has a loop for each vertex.     Symmetric symmetric  A relation is symmetric if relates to , then relates to .   We can check if a DiGraph is symmetric by comparing the edges of the graph with the reverse edges. In our definition of symmetry, we are only interested in the relation of nodes, so we set edge labels=False .     Antisymmetric antisymmetric  When a relation is antisymmetric, the only case that relates to and relates to is when and are equal.   While Sage offers a built-in antisymmetric() method for Graphs , it checks for a more restricted property than the standard definition of antisymmetry. Specifically, it checks if the existence of a path from a vertex to a vertex implies that there is no path from to unless . Observe that while the standard antisymmetric property forbids the edges to be bidirectional, the Sage antisymmetric property forbids cycles.   Let's define a function to check for the standard definition of antisymmetry in a DiGraph .     Transitive transitive  A relation is transitive if relates to and relates to , then relates to .  Let's define a function to check for the transitive property in a Set :   You may be tempted to write a function with a nested loop because the logic is easy to follow. However, when working with larger sets, the time complexity of the function will not be efficient. This is because we are iterating through the set three times. We can improve the time complexity by using a dictionary to store the relation . Alternatively, we can use built-in Sage DiGraph methods.    "
},
{
  "id": "properties-2-1",
  "level": "2",
  "url": "properties.html#properties-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reflexive Symmetric Antisymmetric Transitive "
},
{
  "id": "equivalence",
  "level": "1",
  "url": "equivalence.html",
  "type": "Section",
  "number": "5.5",
  "title": "Equivalence",
  "body": " Equivalence equivalence  A relation on a set is called an equivalence relation if it is reflexive, symmetric, and transitive. The equivalence class of an element in a set is the set of all elements in that are related to by this relation, denoted by:   Here, represents the equivalence class of , comprising all elements in that are related to through the relation . This illustrates the grouping of elements into equivalence classes.  Consider a set defined as:    Create sets for the people living on each floor of the building:   Let be the relation on described as follows:    This relation demonstrates the properties of an equivalence relation:   Reflexive : A person lives in the same floor as themselves.    Symmetric : If person lives in the same floor as person , then person lives in the same floor as person .    Transitive : If person lives in the same floor as person and person lives in the same floor as person , then person lives in the same floor as person .   "
},
{
  "id": "equivalence-3",
  "level": "2",
  "url": "equivalence.html#equivalence-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalence relation equivalence class "
},
{
  "id": "equivalence-15",
  "level": "2",
  "url": "equivalence.html#equivalence-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reflexive "
},
{
  "id": "equivalence-17",
  "level": "2",
  "url": "equivalence.html#equivalence-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Symmetric "
},
{
  "id": "equivalence-19",
  "level": "2",
  "url": "equivalence.html#equivalence-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Transitive "
},
{
  "id": "partial-order",
  "level": "1",
  "url": "partial-order.html",
  "type": "Section",
  "number": "5.6",
  "title": "Partial Order",
  "body": " Partial Order  partial order  poset  A relation on a set is a Partial Order (PO) if it satisfies the reflexive, antisymmetric, and transitive properties. A poset is a set with a partial order relation. For example, the following set of numbers with a relation given by divisibility is a poset.   Hasse diagram  A Hasse diagram is a simplified visual representation of a poset. Unlike a digraph, the relative position of vertices has meaning: if relates to , then the vertex appears lower in the drawing than the vertex . Self-loops are assumed and not shown. Similarly, the diagram assumes the transitive property and does not explicitly display the edges that are implied by the transitive property.   Notes  Partial orders and Hasse diagrams help analyze task dependencies in scheduling applications.   If is a partial order relation on , then the function Poset((A, R)) computes the Hasse diagram associated to .   Moreover, the cover_relations() function shows the pairs depicted in the Hasse diagram after the previous simplifications.   "
},
{
  "id": "sec-functions",
  "level": "1",
  "url": "sec-functions.html",
  "type": "Section",
  "number": "6.1",
  "title": "Functions",
  "body": " Functions functions (math)   A function from a set into a set is a relation from into such that each element of is related to exactly one element of the set . The set is called the domain of the function, and the set is called the co-domain. Functions are fundamental in both mathematics and computer science for describing mathematical relationships and implementing computational logic.  In Sage, functions can be defined using direct definition.  For example, defining a function to calculate the cube of a number, such as 3:     Graphical Representations  Sage provides powerful tools for visualizing functions, enabling you to explore the graphical representations of mathematical relationships.  For example, to plot the function over the interval :    "
},
{
  "id": "sec-recursion",
  "level": "1",
  "url": "sec-recursion.html",
  "type": "Section",
  "number": "6.2",
  "title": "Recursion",
  "body": " Recursion recursion   Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem. This approach is extensively used in mathematics and computer science, especially in the computation of binomial coefficients, the evaluation of polynomials, and the generation of sequences.    Recursion in Sequences sequence  A recursive sequence is defined by one or more base cases and a recursive step that relates each term to its predecessors.   Notes  Use recursion to solve problems by breaking them down into similar steps. In programming, recursively defined functions often improve code readability.   Given a sequence defined by a recursive formula, we can ask Sage to find its closed form. Here, s is a function representing the sequence defined by recursion. The equation eqn defines the recursive relation . The rsolve() function is then used to find a closed-form solution to this recurrence, given the initial conditions and . At last, we use the SR() function to convert from Python notation to mathematical notation.   We can use the show() function to make the output visually more pleasing; you can try removing it and see how the output looks.  Fibonacci  Similarly, the Fibonacci sequence is another example of a recursive sequence, defined by the base cases and , and the recursive relation for . This sequence is a cornerstone example in the study of recursion.   The show() function is again used here to present the solution in a more accessible mathematical notation, illustrating the power of recursive functions to describe complex sequences with simple rules.  We can also write a function fib() to compute the th Fibonacci number by iterating and updating the values of two consecutive Fibonacci numbers in the sequence. Let's calculate the third Fibonacci number.   We go back to the previous method where we calculated the closed form fib_sol and evaluate it now at .   As we can see, we obtain the same number either by evaluating the closed form at or by finding the third Fibonacci number directly by iteration.    Recursion with Binomial Coefficients binomial coefficients  Binomial coefficients, denoted as , count the number of ways to choose elements from an -element set. They can be defined recursively. Sage can compute binomial coefficients using the binomial(n, k) function.   We can also explore the recursive nature of binomial coefficients by defining a function ourselves recursively.   This function implements the recursive formula , with base cases .   "
},
{
  "id": "sec-basics",
  "level": "1",
  "url": "sec-basics.html",
  "type": "Section",
  "number": "7.1",
  "title": "Basics",
  "body": " Basics   Graph Definition  graphs graph definition  graphs nodes  graphs links  graphs arcs  A graph  consists of a set of vertices and a set of edges, where The set of edges is a set whose elements are subsets of two vertices.  Terminology:   Vertices are synonymous with nodes .    Edges are synonymous with links or arcs .    In an undirected graph edges are unordered pairs of vertices.    In a directed graph edges are ordered pairs of vertices.     There are several ways to define a graph in Sage. We can define a graph by listing the vertices and edges:   We can define a graph with an edge list. Each edge is a pair of vertices:   We can define a graph with an edge dictionary like so: {edge: [neighbor, neighbor, etc], edge: [ neighbor, etc], etc: [etc]} Each dictionary key is a vertex. The dictionary values are the vertex neighbors.   You can improve the readability of a dictionary by placing each item of the collection on a new line:   Sage offers a collection of predefined graphs. Here are some examples:    Notes  Concepts from graph theory have practical applications related to social networks, computer networks, transportation, biology, chemistry, and more.     Weighted Graphs  graphs weighted  A weighted graph has a weight, or number, associated with each edge. These weights can model anything including distances, costs, or other relevant quantities.  To create a weighted graph, add a third element to each pair of vertices.     Graph Characteristics  Sage offers many built-in functions for analyzing graphs. Let's examine the following graph:   graphs vertices  The vertices() method returns a list of the graph's vertices.   graphs edges  The G.edges() method returns triples representing the graph's vertices and edge labels.   Return the edges as a tuple without the label by setting labels=false .   The order of is the number of vertices .  graphs order   graphs size  The size of is the number of edges .   graphs degree  The degree of the vertex , is the number of edges incident with .   The degree sequence of is the list of degrees of its vertices.     Graphs and Matrices  graphs adjacency matrix  The adjacency matrix of a graph is a square matrix used to represent which vertices of the graph are adjacent to which other vertices. Each entry in the matrix is equal to 1 if there is an edge from vertex i to vertex j , and is equal to 0 otherwise.   We can also define a graph with an adjacency matrix:   graphs incidence matrix  The incidence matrix is an alternative matrix representation of a graph, which describes the relationship between vertices and edges. In this matrix, rows correspond to vertices, and columns correspond to edges, with entries indicating whether a vertex is incident to an edge.     Manipulating Graphs in Sage  graphs add vertex  Add a vertex to a graph:   Add a list of vertices:   graphs remove vertex  Remove a vertex from a graph:   Remove a list of vertices from a graph:   graphs add edge  Add an edge between two vertices:   graphs delete vertex  Delete an edge from a graph:   Deleting a nonexistent vertex returns an error. Deleting a nonexistent edge leaves the graph unchanged. Adding a vertex or edge already in the graph, leaves the graph unchanged.   "
},
{
  "id": "sec-basics-2-6",
  "level": "2",
  "url": "sec-basics.html#sec-basics-2-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "graph "
},
{
  "id": "sec-basics-2-7",
  "level": "2",
  "url": "sec-basics.html#sec-basics-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nodes links arcs undirected graph unordered directed graph ordered "
},
{
  "id": "sec-basics-3-3",
  "level": "2",
  "url": "sec-basics.html#sec-basics-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "weighted graph "
},
{
  "id": "sec-basics-4-12",
  "level": "2",
  "url": "sec-basics.html#sec-basics-4-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order "
},
{
  "id": "sec-plot-options",
  "level": "1",
  "url": "sec-plot-options.html",
  "type": "Section",
  "number": "7.2",
  "title": "Plot Options",
  "body": " Plot Options   The show() method displays the graphics object immediately with default settings. The plot() method accepts options for customizing the presentation of the graphics object. You can import more features from Matplotlib or latex for fine-tuned customization options. Let's examine how the plotting options improve the presentation and help us discover insights into the structure and properties of a graph. The presentation of a Sage graphics object may differ depending on your environment.    Size  Here is a graph that models the primary colors of the RGB color wheel:   graph plotting vertex size  Let's increase the vertex_size :   graph plotting figsize  Resolve the cropping by increasing the figsize . Specify a single number or a (width, height) tuple.   graph plotting figsize  Increasing the figsize works well in a notebook environment. However, in a SageCell, a large figsize introduces scrolling. Setting graph_border=True is an alternate way to resolve the cropping while maintaining the size of the graph.     Edge Labels  Let's add some edge labels. Within the list of edge tuples , the first two values are vertices, and the third value is the edge label.     Color  graph plotting Color  There are various ways to specify vertex_colors , including hexadecimal, RGB, and color name. Hexadecimal and RGB offer greater flexibility because Sage does not have a name for every color. The color is the dictionary key, and the vertex is the dictionary value.  The following example specifies the color with RGB values. The values can range anywhere from 0 to 1 . Color the vertex r red by setting the first element in the RGB tuple to full intensity with a value of 1 . Next, ensure vertex r contains no green or blue light by setting the remaining tuple elements to 0 . Notice vertex g is darker because the green RGB value is .65 instead of 1 .   The following example specifies the color by name instead of RGB value. Sage will return an error if you use an undefined color name.   graph plotting edge color  Let's specify the edge_colors with RGB values. The edge from vertex r to vertex g is yellow because the RGB tuple sets red and green light to full intensity with no blue light. For darker shades, use values less than 1 .   This alternate method specifies the color by name instead:   Consider accessibility when choosing colors on a graph. For example, the red and green on the above graph look indistinguishable to people with color blindness. Blue and red are usually a safe bet for contrasting two colors.  Here is a Sage Interact to help identify hexadecimal color values.   First, click Evaluate (Sage) to define and load the interact. You are welcome to modify the interact definition to suit your needs.    You may define a new edge list, vertex size, and graph border within an input box.    After entering new values, press Enter on your keyboard to load the new graph.    Click on the color selector square to change the color. The hexadecimal value appears to the right of the color square.    After selecting a new color, the graph will update when you click outside the color selector.        Layout  Let's define and examine the following graph. Evaluate this cell multiple times and notice the vertex positions are not consistent.   graph plotting layout  Layout options include: “acyclic” , “circular” , “ranked” , “graphviz” , “planar” , “spring” , or “tree” .  A planar graph can be drawn without any crossing edges. The default graph layout does not ensure the planar layout of a planar graph. Sage will return an error if you try to plot a non-planar graph with the planar layout.   Sage's planar algorithm sets the vertex positions. Alternatively, we can specify the positions in a dictionary. Let's position the G node in the center.   The following graph modeling the intervals in the C major scale is challenging to read. Let's think about how we can improve the presentation.   In this case, the graph is not planar. The circular layout organizes the vertices for improved readability.     View in a New Tab  Increasing the figsize improves the definition of the arrows. For an even better view of the Graph, right-click the image and view it in a new tab.     Edge Style  graph plotting edge style  The options for edge_style include “solid” , “dashed” , “dotted” , or \"dashdot” .   Improve the definition between the edges by using a different color for each edge. The color_by_label method automatically maps the colors to edges.     3-Dimensional  View a 3D representation of graph with show3d() . Click and drag the image to change the perspective. Zoom in on the image by pinching your computer's touchpad.        "
},
{
  "id": "paths",
  "level": "1",
  "url": "paths.html",
  "type": "Section",
  "number": "7.3",
  "title": "Paths",
  "body": " Paths path  A path between two vertices and is a sequence of consecutive edges starting at and ending at .  To get all paths between two vertices:   The length of a path is defined as the number of edges that make up the path.  Finding the shortest path between two vertices can be achieved using the shortest_path() function:   connected  A graph is said to be connected if there is a path between any two vertices in the graph.  To determine if a graph is connected, we can use the is_connected() function:   A connected component of a graph is a maximal connected subgraph of . If the graph is connected, then it has only one connected component.  For example, the following graph is not connected:   To identify all connected components of a graph, the connected_components() function can be utilized:   We can visualize the graph as a disjoint union of its connected components, by plotting it.   diameter  The diameter of a graph is the length of the longest shortest path between any two vertices.   bipartite  A graph is bipartite if its set of vertices can be divided into two disjoint sets such that every edge connects a vertex in one set to a vertex in the other set:   "
},
{
  "id": "isomorphism",
  "level": "1",
  "url": "isomorphism.html",
  "type": "Section",
  "number": "7.4",
  "title": "Isomorphism",
  "body": " Isomorphism isomorphism  Informally, we can say that an isomorphism is a relation of sameness between graphs. Let's say that the graphs and are isomorphic if there exists a bijection such that .  This means there is a bijection between the set of vertices such that every time two vertices determine an edge in the first graph, the image of these vertices by the bijection also determines an edge in the second graph, and vice versa. Essentially, the two graphs have the same structure, but the vertices are labeled differently.   Notes  Graph isomorphism identifies structures relevant to chemistry, biology, machine learning, and neural networks.    The sage is_isomorphic() method can be used to check if two graphs are isomorphic. The method returns True if the graphs are isomorphic and False if the graphs are not isomorphic.   The invariants under isomorphism are conditions that can be checked to determine if two graphs are not isomorphic. If one of these fails then the graphs are not isomorphic. If all of these are true then the graph may or may not be isomorphic. The three conditions for invariants under isomorphism are:     To summarize, if one graph is connected and the other is not, then the graphs are not isomorphic. If the number of vertices and edges are different, then the graphs are not isomorphic. If the degree sequences are different, then the graphs are not isomorphic. If all three invariants are satisfied, then the graphs may or may not be isomorphic.  Let's define a function to check if two graphs satisfy the invariants under isomorphism. Make sure you run the next cell to define the function before using the function.   If we use invariant_under_isomorphism on the and , the output will let's know that the graphs may or may not be isomorphic. We can use the is_isomorphic() method to check if the graphs are definitively isomorphic.   Let's construct a different pair of graphs and defined as follow   This time, if we apply invariant_under_isomorphism function on and , the output will show us that they are not isomorphic.   "
},
{
  "id": "isomorphism-3",
  "level": "2",
  "url": "isomorphism.html#isomorphism-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isomorphism "
},
{
  "id": "isomorphism-9",
  "level": "2",
  "url": "isomorphism.html#isomorphism-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "invariants under isomorphism "
},
{
  "id": "euler-and-hamilton",
  "level": "1",
  "url": "euler-and-hamilton.html",
  "type": "Section",
  "number": "7.5",
  "title": "Euler and Hamilton",
  "body": " Euler and Hamilton   Euler  Euler path  Euler circuit  An Euler path is a path that uses every edge of a graph exactly once. An Euler path that is a circuit is called an Euler circuit .  The idea of an Euler path emerged from the study of the Königsberg bridges problem. Leonhard Euler wanted to know if it was possible to walk through the city of Königsberg, crossing each of its seven bridges exactly once. This problem can be modeled as a graph, with the land masses as vertices and the bridges as edges.    Notes  Eulerian circuits and paths have practical applications for reducing travel and costs in logistics, waste management, the airline industry, and postal service.   While exploring this problem, Euler discovered the following:   A connected graph has an Euler circuit iff every vertex has an even degree.    A connected graph has an Euler path iff there are at most two vertices with an odd degree.   We say that a graph is Eulerian if contains an Euler circuit.  We can use Sage to determine if a graph is Eulerian.   Since this returns False , we know that the graph is not Eulerian. Therefore, it is not possible to walk through the city of Königsberg, crossing each of its seven bridges exactly once.  We can use path=True to determine if a graph contains an Euler path. Sage will return the beginning and the end of the path.   If the graph is Eulerian, we can ask Sage to find an Euler circuit with the eulerian_circuit function. Let's take a look at the following graph.   If we are not interested in the edge labels, we can set labels=False . We can also set return_vertices=True to get a list of vertices for the path     Hamilton  Hamilton path  Hamilton circuit  A Hamilton path is a path that uses every vertex of a graph exactly once. A Hamilton path that is a circuit is called a Hamilton circuit . If a graph contains a Hamilton circuit, we say that the graph is Hamiltonian .  dodecahedron  Hamilton created the \"Around the World\" puzzle. The object of the puzzle was to start at a city and travel along the edges of the dodecahedron, visiting all of the other cities exactly once, and returning back to the starting city.  We can represent the dodecahedron as a graph and use Sage to determine if it is Hamiltonian. See for yourself if the dodecahedron is Hamiltonian.   We can ask Sage to determine if the dodecahedron is Hamiltonian.   By running Graph.is_hamiltonian?? we see that Sage uses the traveling_salesman_problem() function to determine if a graph is Hamiltonian.  traveling salesperson  NP-hard  The traveling salesperson problem is a classic optimization problem. Given a list of cities and the lengths between each pair of cities, what is the shortest possible route that visits each city and returns to the original city? This is one of the most difficult problems in computer science. It is NP-hard , meaning that no efficient algorithm is known to solve it. The complexity of the problem increases with the number of nodes. When working with many nodes, the algorithm can take a long time to run.  Let's explore the following graph:   Hamiltonian cycle  We can ask Sage if the graph contains a Hamiltonian cycle.   The function hamiltonian_cycle returns True and lists an example of a Hamiltonian cycle as the list of vertices [1, 2, 3, 4, 5] . This is just one of the many Hamiltonian cycles that exist in the graph. Now lets find the minimum Hamiltonian cycle.   Now we have the plot of the minimum Hamiltonian cycle. The minimum Hamiltonian cycle is the shortest possible route that visits each city and returns to the original city. The minimum Hamiltonian cycle is the solution to the traveling salesperson problem. We can ask Sage for the sum of the weights of the edges in the minimum Hamiltonian cycle.   If there is no Hamiltonian cycle, Sage will return False . If we use the backtrack algorithm, Sage will return a list that represents the longest path found.    "
},
{
  "id": "subsec-Euler-4",
  "level": "2",
  "url": "euler-and-hamilton.html#subsec-Euler-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euler path Euler circuit "
},
{
  "id": "subsec-Euler-5",
  "level": "2",
  "url": "euler-and-hamilton.html#subsec-Euler-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Königsberg bridges "
},
{
  "id": "subsec-Euler-8",
  "level": "2",
  "url": "euler-and-hamilton.html#subsec-Euler-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euler circuit Euler path Eulerian "
},
{
  "id": "subsec-Hamilton-4",
  "level": "2",
  "url": "euler-and-hamilton.html#subsec-Hamilton-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hamilton path Hamilton circuit Hamiltonian "
},
{
  "id": "subsec-Hamilton-14",
  "level": "2",
  "url": "euler-and-hamilton.html#subsec-Hamilton-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "NP-hard "
},
{
  "id": "sec-graphs-in-action",
  "level": "1",
  "url": "sec-graphs-in-action.html",
  "type": "Section",
  "number": "7.6",
  "title": "Graphs in Action",
  "body": " Graphs in Action   Imagine you are a bike courier tasked with making deliveries to each City Colleges of Chicago (CCC) campus location. Per your contract, you get paid per delivery, not per hour. Therefore, finding the most efficient delivery route is in your best interest. We assume the bike delivery routes are the same distance in each direction.    Bike Courier Delivery Route Problem  Let's make a plan to solve our delivery route problem.   Find the distances in miles between each CCC location.    Make a graph of the CCC locations. Each location is a node. Each edge is a bike route. The weight of the edges represents the distance of the bike route between locations.    Use the traveling salesperson algorithm to calculate the optimal delivery route.       Locations   CCC Addresses    Name  Address    Harold Washington College  30 E. Lake Street, Chicago, IL 60601    Harry Truman College  1145 West Wilson Ave, Chicago, IL 60640    Kennedy-King College  6301 South Halsted St, Chicago, IL 60621    Malcolm X College  1900 W. Jackson, Chicago, IL 60612    Olive-Harvey College  10001 South Woodlawn Ave, Chicago, IL 60628    Richard J. Daley College  7500 South Pulaski Rd, Chicago, IL 60652    Wilbur Wright College  4300 N. Narragansett Ave, Chicago, IL 60634         City Colleges of Chicago     Graph  We will represent each College as a node with the initials of the College name. The weight of the edge will represent the miles in between the locations. Since we are using bike routes, we are assuming each direction between two locations has the same distance. For example, express the route between Harold Washington College and Harry Truman College as (\"HW\", \"HT\", 6.5) .   Create a Graph from the edge list :   The trailing zeros of the floating point values are hard to read. Let's loop through the edge list and display the numbers with points of precision.   Since this graph is not planar, improve the layout with the \"circular\" parameter. We can also improve the readability by increasing the vertex_size and figsize .   Now that we have a clearer idea of the routes, let's find the most efficient delivery route using the traveling salesperson algorithm.   We can set the vertex positions to resemble their positions on the map. We can use the latitude and longitude values of the locations and then reverse them when we supply the values to the position dictionary .    "
},
{
  "id": "subsec-locations-2",
  "level": "2",
  "url": "sec-graphs-in-action.html#subsec-locations-2",
  "type": "Table",
  "number": "7.6.1",
  "title": "CCC Addresses",
  "body": " CCC Addresses    Name  Address    Harold Washington College  30 E. Lake Street, Chicago, IL 60601    Harry Truman College  1145 West Wilson Ave, Chicago, IL 60640    Kennedy-King College  6301 South Halsted St, Chicago, IL 60621    Malcolm X College  1900 W. Jackson, Chicago, IL 60612    Olive-Harvey College  10001 South Woodlawn Ave, Chicago, IL 60628    Richard J. Daley College  7500 South Pulaski Rd, Chicago, IL 60652    Wilbur Wright College  4300 N. Narragansett Ave, Chicago, IL 60634    "
},
{
  "id": "subsec-locations-3",
  "level": "2",
  "url": "sec-graphs-in-action.html#subsec-locations-3",
  "type": "Figure",
  "number": "7.6.2",
  "title": "",
  "body": "    City Colleges of Chicago  "
},
{
  "id": "definitions-and-theorems",
  "level": "1",
  "url": "definitions-and-theorems.html",
  "type": "Section",
  "number": "8.1",
  "title": "Definitions and Theorems",
  "body": " Definitions and Theorems  cycle  tree  forest  Given a graph, a cycle is a circuit with no repeated edges. A tree is a connected graph with no cycles. A graph with no cycles and not necessarily connected is called a forest .  Let be a graph. The following are all equivalent:    is a tree.    For each pair of distinct vertices, there exists a unique path between them.     is connected, and if then the graph is disconnected.     contains no cycles, but by adding one edge, you create a cycle.     is connected and .     Let's explore the following graph:    Notes  Trees are a common data structure used in file explorers, parsers, and decision making.   Let's ask Sage if this graph is a tree.   If we remove an edge, we can see that the graph is no longer a tree.   However, we can see that the graph is still a forest.   If we add an edge, we can see that the graph contains a cycle and is no longer a tree.   "
},
{
  "id": "definitions-and-theorems-5",
  "level": "2",
  "url": "definitions-and-theorems.html#definitions-and-theorems-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cycle tree forest "
},
{
  "id": "search-algorithms",
  "level": "1",
  "url": "search-algorithms.html",
  "type": "Section",
  "number": "8.2",
  "title": "Search Algorithms",
  "body": " Search Algorithms search algorithms  The graph is a subgraph of if and .  subgraph  spanning subgraph  spanning tree  The subgraph is a spanning subgraph of if .  A spanning tree for the graph is a spanning subgraph of that is a tree.  Given a graph, various algorithms can calculate a spanning tree, including depth-first search and breadth-first search.  Breadth-first search   Breadth-first search algorithm    Choose a vertex of the graph (root) arbitrarily.    Travel all the edges incident with the root vertex.    Give an order to this set of new vertices added.    Consider each of these vertices as a root, in order, and add all the unvisited incident edges that do not produce a cycle.    Repeat the method with the new set of vertices.    Follow the same procedure until all the vertices are visited.   The output of this algorithm is a spanning tree.  The breadth_first_search() function provides a flexible method for traversing both directed and undirected graphs. Let's consider the following graph:   In the example above, the start parameter begins the traversal at vertex a . The report_distance=True , parameter reports pairs in the format (vertex, distance) . Distance is the length of the path from the start vertex. From the output above, we see:   The distance from vertex a to vertex a is 0 .    The distance from vertex a to vertex d is 1 .    The distance from vertex a to vertex e is 1 .    The distance from vertex a to vertex c is 1 .    The distance from vertex a to vertex b is 2 .     We can also set the parameter edges=True to return the edges of the BFS tree. Sage will raise an error if you use the edges and report_distance parameters simultaneously.   The above graph is a spanning tree, but not necessarily a minimum spanning tree. Let's check how many spanning trees exist.   Iterate over all the spanning trees of a graph with spanning_trees() .   minimal spanning tree  Given a weighted graph of all possible spanning trees we can calculate, we may be interested in the minimal one. A minimal spanning tree is a spanning tree whose sum of weights is minimal. Prim's Algorithm calculates a minimal spanning tree.  Prim's algorithm   Prim's Algorithm : Keep two disjoint sets of vertices. One contains vertices that are in the growing spanning tree, and the other that are not in the growing spanning tree.   Choose a vertex arbitrarily. At this step, and .    In , select the cheapest vertex connected to the growing spanning tree and add it to     Follow the same procedure until all the vertices are in    The output of this algorithm is a minimal spanning tree.   We can ask Sage for the minimal spanning tree of this graph. By running Graph.min_spanning_tree?? We can see that min_spanning_tree() uses a variation of Prim's Algorithm by default. We can also use other algorithms such as Kruskal, Boruvka, or NetworkX.   Notes  Minimal spanning trees influence the efficient design of networks and roads.    From the output of min_spanning_tree(by_weight=True) , we see an edge list of the minimal spanning tree. Each element of the edge lis is a tuple where the first two values are vertices, and the third value is the edge weight or label.  Let's visualize the minimal spanning tree.   Let's define a function to view the minimal spanning tree in the context of the original graph. The function parameters include:    graph : A SageMath Graph object.     mst_color : Color for edges part of the MST (default: 'darkred' ).     non_mst_color : Color for edges not part of the MST (default: 'lightblue' ).     figsize : Dimensions for the graph image.      Let's generate a random graph and view the minimal spanning tree.   The following graph contains 9 vertices.   The following graph contains 15 vertices.   "
},
{
  "id": "search-algorithms-3",
  "level": "2",
  "url": "search-algorithms.html#search-algorithms-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subgraph "
},
{
  "id": "search-algorithms-7",
  "level": "2",
  "url": "search-algorithms.html#search-algorithms-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spanning subgraph "
},
{
  "id": "search-algorithms-8",
  "level": "2",
  "url": "search-algorithms.html#search-algorithms-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spanning tree "
},
{
  "id": "search-algorithms-11",
  "level": "2",
  "url": "search-algorithms.html#search-algorithms-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Breadth-first search algorithm "
},
{
  "id": "search-algorithms-22",
  "level": "2",
  "url": "search-algorithms.html#search-algorithms-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minimal spanning tree "
},
{
  "id": "search-algorithms-24",
  "level": "2",
  "url": "search-algorithms.html#search-algorithms-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Prim's Algorithm "
},
{
  "id": "sec-trees-in-action",
  "level": "1",
  "url": "sec-trees-in-action.html",
  "type": "Section",
  "number": "8.3",
  "title": "Trees in Action",
  "body": " Trees in Action   Imagine your task is to create a railway between all the City Colleges of Chicago (CCC) campus locations. The contract requests that you use minimal track material to save construction costs. For simplicity's sake, assume each railway is a straight line between campuses.    Railway Problem  Let's make a plan to solve our railway construction optimization problem.   Find the latitude and longitude of each CCC campus location.    Use the Haversine formula to calculate the distances between the locations. The Haversine formula requires latitude and longitude for inputs and computes the shortest path between two points on a sphere.    Make a graph of the CCC campuses. Each location is a node. Each railway path is an edge. Each railway path is the shortest path between locations. The weight of the edges represents the distance between locations.    Find the minimum spanning tree (MST) of the CCC graph.       Location Distances   City Colleges of Chicago Locations    Name  (Latitude, Longitude)    Harold Washington College  (41.88609733324964, -87.62682604591349)    Harry Truman College  (41.9646769664519, -87.65901943241516)    Kennedy-King College  (41.77847328856264, -87.6435785385309)    Malcolm X College  (41.87800548491064, -87.67453475017268)    Olive-Harvey College  (41.71006715754713, -87.5886722734757)    Richard J. Daley College  (41.75677704810169, -87.72315805813204)    Wilbur Wright College  (41.95836512405638, -87.78738482318016)         City Colleges of Chicago   Now, let's calculate the distances between campus locations. We will first create a dictionary to store the campus name, latitude, and longitude values.   Since the Earth is curved, we cannot use the Euclidean distance. We will use the Haversine formula instead. Note that the Haversine formula still produces an approximation because the Earth is not a perfect sphere. Here is a function to compute the Haversine formula.   Now we can make an edge list . We will represent each campus as a node with the initials of the college name. The weight of the edge will represent the Haversine value between the locations. For example, express the route between Harold Washington College and Harry Truman College as (\"HW\", \"HT\", Haversine) .     Graph  Swap coordinates for plotting with coordinates.   Create a Graph from the edge list :     Railway  So far, we have encountered various concepts for connecting a graph's vertices, including the Hamilton path and the MST. Let's consider what technique is best suited for solving the problem of constructing a railway that optimizes material costs.  The previous chapter used the traveling salesperson algorithm to optimize a delivery route. Since we aim to optimize material costs, you might think of following a similar approach: apply the traveling salesperson algorithm, eliminate the greatest edge from the Hamilton circuit, and design the railway with the minimum Hamilton path. If we take a Hamilton circuit and eliminate one edge, we obtain a spanning tree. While the Hamilton path optimizes graph traversal by visiting each vertex exactly once in a single path, it does not guarantee that all vertices are connected with the minimal total weight.  In a Hamilton path, the requirement to visit each vertex in a single path can force the inclusion of high-weight edges. Alternatively, the MST is not restricted by the requirement of connecting vertices with a path. The MST can avoid high-weight edges by connecting vertices without regard to forming a path as long as the graph remains connected and acyclic. Although the minimum Hamilton path is one of many possible spanning trees, it is not an MST. Prim's Algorithm ensures the weight of the spanning tree is minimal because, at each iteration, it selects the smallest-weight edge.  Let's find the MST edge list of the campus locations with the min_spanning_tree(by_weight=True) function.   Visualize the MST with the vertex positions mapped to the geographical coordinates of each campus location.     Conclusion  In this exercise, we only optimized construction material costs. In a real-world scenario, we may want to create a railway that optimizes both travel time and material costs. In the case of the Chicago L train system, the railway resembles a tree when ignoring the downtown Loop. The L receives criticism for its lack of interconnectivity. For example, finding an efficient route connecting the end of the Blue Line with the end of the Red Line is challenging because a traveler may need to commute all the way downtown from one end of the railway to reach another end. As an interesting challenge, you can optimize both travel time and construction costs.   "
},
{
  "id": "subsec-location-distances-2",
  "level": "2",
  "url": "sec-trees-in-action.html#subsec-location-distances-2",
  "type": "Table",
  "number": "8.3.1",
  "title": "City Colleges of Chicago Locations",
  "body": " City Colleges of Chicago Locations    Name  (Latitude, Longitude)    Harold Washington College  (41.88609733324964, -87.62682604591349)    Harry Truman College  (41.9646769664519, -87.65901943241516)    Kennedy-King College  (41.77847328856264, -87.6435785385309)    Malcolm X College  (41.87800548491064, -87.67453475017268)    Olive-Harvey College  (41.71006715754713, -87.5886722734757)    Richard J. Daley College  (41.75677704810169, -87.72315805813204)    Wilbur Wright College  (41.95836512405638, -87.78738482318016)    "
},
{
  "id": "subsec-location-distances-3",
  "level": "2",
  "url": "sec-trees-in-action.html#subsec-location-distances-3",
  "type": "Figure",
  "number": "8.3.2",
  "title": "",
  "body": "    City Colleges of Chicago  "
},
{
  "id": "sec-definition",
  "level": "1",
  "url": "sec-definition.html",
  "type": "Section",
  "number": "9.1",
  "title": "Lattices",
  "body": " Lattices lattice   Definition  A lattice is a partially ordered set ( poset ) in which any two elements have a least upper bound (also known as join) and greatest lower bound (also known as meet).  In Sage, a lattice can be represented as a poset using the Poset() function. This function takes a tuple as its argument, where the first element is the set of elements in the poset, and the second element is a list of ordered pairs representing the partial order relations between those elements.  First, let's define the lists of elements and relations we will use for the following examples:   Create a poset from a tuple of elements and relations.   The function is_lattice() determines whether the poset is a lattice.    Notes  Lattices have practical applications in computer science, such as static program analysis and distributed programming.   We can also use LatticePoset() function to plot the lattice. The function Poset() can be used with any poset, even when the poset is not a lattice. The LatticePoset() function will raise an error if the poset is not a lattice.     Join join  The join of two elements in a lattice is the least upper bound of those elements.  To check if a poset is a join semi-lattice (every pair of elements has a least upper bound), we use is_join_semilattice() function.   We can also find the join for individual pairs using the join() function.     Meet meet  The meet of two elements in a lattice is their greatest lower bound.  To check if a poset is a meet semi-lattice (every pair of elements has a greatest lower bound), we use is_meet_semilattice() function.   We can also find the meet for individual pairs using the meet() function.     Divisor Lattice  The Sage DivisorLattice() function returns the divisor lattice of an integer.  The elements of the lattice are divisors of and in the lattice if divides .    "
},
{
  "id": "definition-2",
  "level": "2",
  "url": "sec-definition.html#definition-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lattice poset "
},
{
  "id": "sec-tables-of-operations",
  "level": "1",
  "url": "sec-tables-of-operations.html",
  "type": "Section",
  "number": "9.2",
  "title": "Tables of Operations",
  "body": " Tables of Operations   This section examines the representation of meet and join operations within lattices using operation tables.    Meet Operation Table meet matrix  The meet operation table illustrates the greatest lower bound, or meet, for every pair of elements in the lattice.  To output the table as a matrix, we need to specify that the poset is indeed a lattice, thus requiring us to use the function LatticePoset() . Then, we can use the function meet_matrix() to process the table.   From the output matrix, we can see that each entry is not the actual value of the meet of the elements and but just its position in the lattice. Let's show the values:   Show the output as a table:     Join Operation Table join matrix  Conversely, the join operation table presents the least upper bound, or join, for each pair of lattice elements.   Output the elements of the poset:   Show the output as a table instead of a matrix.    "
},
{
  "id": "sec-boolean-algebra",
  "level": "1",
  "url": "sec-boolean-algebra.html",
  "type": "Section",
  "number": "10.1",
  "title": "Boolean Algebra",
  "body": " Boolean Algebra Boolean Algebra  A Boolean algebra is a bounded lattice that is both complemented and distributive. Let's define the is_boolean_algebra() function to determine whether a given poset is a Boolean algebra. The function accepts a finite partially ordered set as input and returns a tuple containing a boolean value and a message explaining the result. Run the following cell to define the function and call it in other cells.   Let's check if the following poset is a Boolean algebra.    When we pass P to the is_boolean_algebra() function, LatticePoset() raises an error because P is not a lattice. The ValueError provides more information about the absence of a top element. Therefore, P is not a Boolean algebra.    Let's examine the divisor lattice of 30:   Now for the divisor lattice of 20:   Here is a classic example in the field of computer science:   "
},
{
  "id": "sec-boolean-functions",
  "level": "1",
  "url": "sec-boolean-functions.html",
  "type": "Section",
  "number": "10.2",
  "title": "Boolean functions",
  "body": " Boolean functions Boolean functions  A Boolean function is a function that takes only values 0 or 1 and whose domain is the Cartesian product .   Notes  Boolean algebra influences the design of digital circuits. For example, simplifying a digital circuit can minimize the number of gates used and reduce the manufacturing cost.   A minterm of the Boolean variables is the Boolean product where each or .  A sum of minterms is called a sum-of-products expansion. In this section, we will examine various methods for finding the sum-of-products expansion of a Boolean function.  To find the sum-of-products expansion using a truth table, we first convert the truthtable() into a form that is iterable with get_table_list() . For every row where the output value is True , we construct a minterm:     Include the variable as is if its value is True     Include the negation of the variable if its value is False     The zip function pairs each variable with its corresponding value, allowing us to create minterms efficiently.    We add each minterm to the sop_expansion  list using the & operator.    Finally, we join all minterms with the | operator to form the sum-of-products expansion.    The function returns the sum-of-products expansion as a sage.logic.boolformula.BooleanFormula instance.      For your convenience, our truth_table_sop function converts String input with propcalc.formula . Therefore, the input accepts String representations of Boolean expressions. Alternatively, you may pass an instance of sage.logic.boolformula.BooleanFormula directly to the function.   Let's verify that the sum-of-products expansion we found with the truth table is equivalent to the original expression.   Our sop_expansion function mimics the manual process of finding the sum-of-products expansion of a Boolean function. This process does not guarantee the minimal form of the Boolean expression.  If we dig around in the Sage source code, we can find a commented-out Simplify() function that relied on the Boolopt package and the Quine-McCluskey algorithm. The Quine-McCluskey algorithm guarantees the minimal form of the Boolean expression, but the exponential complexity of the algorithm makes it impractical for large expressions. Moreover, in the Sage documentation, we see a placeholder function called Simplify() that returns a NotImplementedError message. The Sage community is waiting for someone to implement this function with the Espresso algorithm. While the Espresso algorithm does not guarantee the minimal form of the Boolean expression, it is more efficient than the Quine-McCluskey algorithm.  Sage integrates well with Python libraries like SymPy, which have built-in functions for Boolean simplification. The SymPy SOPform function takes the variables as the first argument and the minterms as the second argument. The function returns the sum-of-products expansion of the Boolean function in the smallest sum-of-products form. To use the SymPy SOPform function in Sage, first extract the variables and minterms of an expression.  We extract the variables from the first row of the truth table.   We make the variables compatible with the SymPy SOPform function by converting them to SymPy symbols.   We extract the minterms from the rows where the output is True .   Now that we have the variables and minterms, we can use the SymPy SOPform function to find the sum-of-products expansion of the Boolean function.    Let's verify that the sum-of-products expansion we found with SymPy is equivalent to the original expression.   Now, we present a manual method for finding the sum of products by applying the Boolean identities. Let's find the sum-of-products expansion of the Boolean function . We can apply the Boolean identities and use Sage to verify our work. Currently, we have a sum of two terms but no products. We can apply the identity law to introduce the product terms. Now, we have the equivalent expression .  Warning: Do not attempt to apply the identity law or null law within the formula function. If you try to directly apply the identity law within the formula function like so, propcalc.formula(\"x & 1 | 1 ~y\") , Sage will raise an error because propcalc.formula interprets 1 as a variable. Variables cannot start with a number.  The formula function only supports variables and the following operators:    &       |       ~       ^       ->       <->        Apply the complement law and verify that our transformed expression is equivalent to the original expression.   Apply the distributive law and verify that our transformed expression is equivalent to the original expression.   Apply the idempotent law and verify that our transformed expression is equivalent to the original expression.   We started with the expression,   After applying the identity, complement, and distributive laws, we transformed the Boolean function into the sum-of-products expansion .  "
},
{
  "id": "sec-boolean-functions-3",
  "level": "2",
  "url": "sec-boolean-functions.html#sec-boolean-functions-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Boolean function "
},
{
  "id": "sec-boolean-functions-5",
  "level": "2",
  "url": "sec-boolean-functions.html#sec-boolean-functions-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minterm "
},
{
  "id": "sec-boolean-functions-6",
  "level": "2",
  "url": "sec-boolean-functions.html#sec-boolean-functions-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sum-of-products "
},
{
  "id": "sec-intro-logic-gates",
  "level": "1",
  "url": "sec-intro-logic-gates.html",
  "type": "Section",
  "number": "11.1",
  "title": "Logic Gates",
  "body": " Logic Gates   logic gates  AND  OR  NOT  NAND  NOR  XOR  XNOR    Logic gates are the foundation of digital circuits. They process binary inputs to produce specific outputs. The basic logic gates are , , and . Derived gates include , , , and . Each gate has its own symbol and behavior defined by a truth table.    Notes  Logic gates combine to form complex systems such as CPUs and memory circuits.    AND Gate  The AND gate produces a 1 only when both inputs are 1 .   AND Gate       Truth table for the AND gate:     OR GATE  The OR gate produces a 1 if at least one input is 1 .   OR Gate       Truth table for the OR gate:     NOT Gate  The NOT gate inverts the input: 1 becomes 0 , and 0 becomes 1 .   NOT Gate       Truth table for the NOT gate:     NAND Gate  NAND : Produces 0 only when both inputs are 1 .   NAND Gate        NOR Gate  NOR : Produces 1 only when both inputs are 0 .   NOR Gate        XOR Gate  XOR : Produces 1 when inputs differ.   XOR Gate        XNOR Gate  XNOR : Produces 1 when inputs are the same.   XNOR Gate        "
},
{
  "id": "fig-AND-Gate",
  "level": "2",
  "url": "sec-intro-logic-gates.html#fig-AND-Gate",
  "type": "Figure",
  "number": "11.1.1",
  "title": "",
  "body": " AND Gate     "
},
{
  "id": "fig-OR-Gate",
  "level": "2",
  "url": "sec-intro-logic-gates.html#fig-OR-Gate",
  "type": "Figure",
  "number": "11.1.2",
  "title": "",
  "body": " OR Gate     "
},
{
  "id": "fig-NOT-Gate",
  "level": "2",
  "url": "sec-intro-logic-gates.html#fig-NOT-Gate",
  "type": "Figure",
  "number": "11.1.3",
  "title": "",
  "body": " NOT Gate     "
},
{
  "id": "fig-NAND-Gate",
  "level": "2",
  "url": "sec-intro-logic-gates.html#fig-NAND-Gate",
  "type": "Figure",
  "number": "11.1.4",
  "title": "",
  "body": " NAND Gate     "
},
{
  "id": "fig-NOR-Gate",
  "level": "2",
  "url": "sec-intro-logic-gates.html#fig-NOR-Gate",
  "type": "Figure",
  "number": "11.1.5",
  "title": "",
  "body": " NOR Gate     "
},
{
  "id": "fig-XOR-Gate",
  "level": "2",
  "url": "sec-intro-logic-gates.html#fig-XOR-Gate",
  "type": "Figure",
  "number": "11.1.6",
  "title": "",
  "body": " XOR Gate     "
},
{
  "id": "fig-XNOR-Gate",
  "level": "2",
  "url": "sec-intro-logic-gates.html#fig-XNOR-Gate",
  "type": "Figure",
  "number": "11.1.7",
  "title": "",
  "body": " XNOR Gate     "
},
{
  "id": "sec-combined-logic-gates",
  "level": "1",
  "url": "sec-combined-logic-gates.html",
  "type": "Section",
  "number": "11.2",
  "title": "Combinations of Logic Gates",
  "body": " Combinations of Logic Gates  Logic gates can be combined to create more complex circuits that perform specific tasks. By linking gates together, we can create circuits that process multiple inputs to produce a desired output. For example, combining an AND gate and a NOT gate results in a NAND gate, which inverts the output of the AND gate. More complex circuits, such as half-adders and multiplexers, are built by combining basic gates in strategic ways.  Let's look at a circuit. We evaluate this circuit by setting True for , , and False for below using Sage.   Boolean algebra provides a way to simplify complex logic circuits. By using Boolean algebra rules, you can take a complicated circuit and reduce it to a simpler form without changing its functionality.  Here's a practical example. Consider the following Boolean expression, which combines several gates:    Truth tables are a visual way to represent how inputs to a logic circuit map to its outputs. For each possible combination of inputs, the table shows the corresponding outputs, making it easier to analyze and understand the behavior of the circuit.  Let’s create a truth table for the simplified circuit.     Here, we will show the intermediary steps to find the final output of the function.   "
},
{
  "id": "sec-practical-applications",
  "level": "1",
  "url": "sec-practical-applications.html",
  "type": "Section",
  "number": "11.3",
  "title": "Logic Gates in Action",
  "body": " Logic Gates in Action   Voting systems are fundamental in decision-making processes like national elections. In this section, we use logic gates to build a simple digital voting machine. The machine will count binary votes and determine the majority outcome. We break the system into smaller functions, each implemented using logic gates, and then combine them to form the complete voting machine.    Vote Encoder  The first step in our voting machine is to encode individual votes. Each voter casts a binary vote:  1 : Indicates a \"Yes\" vote.  0 : Indicates a \"No\" vote.  In this system, the votes are inputs to our logic circuit. These inputs will later be processed to determine the majority outcome.    Vote Counter  To determine the majority, we need to count how many votes are \"Yes.\" We can use basic logic gates to add up the binary votes. Here’s how we calculate the sum of three votes:   The result of this operation gives us the total number of \"Yes\" votes and helps determine the majority.    Majority Decider  The majority decider uses logic gates to determine whether \"Yes\" votes are greater than \"No\" votes. For three votes, the logic can be expressed as: This formula ensures that if at least two out of three votes are \"Yes,\" the output will indicate a majority.   This logic circuit outputs 1 if the majority of votes are \"Yes,\" and 0 otherwise.    Combining Everything: The Complete Voting Machine  Now that we have the individual components—a vote encoder, a vote counter, and a majority decider—we can combine them to create the complete voting machine. The final logic circuit will take three binary inputs (the votes) and output:  Total Yes Votes : The total number of \"Yes\" votes.  Majority : Indicates whether \"Yes\" votes form the majority.     This combined system demonstrates how logic gates can be used to implement decision-making processes in a voting system. It highlights the versatility of logic circuits in solving real-world problems.    The voting machine is just one example of how logic gates can be applied in everyday scenarios. By breaking down the system into smaller components and combining them, we created a simple yet powerful system for decision-making. This example highlights the foundational role of logic gates in modern technology, bridging the gap between theoretical understanding and practical applications.   "
},
{
  "id": "sec-complete-voting-machine-2",
  "level": "2",
  "url": "sec-practical-applications.html#sec-complete-voting-machine-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Total Yes Votes Majority "
},
{
  "id": "sec-state-machine-definition",
  "level": "1",
  "url": "sec-state-machine-definition.html",
  "type": "Section",
  "number": "12.1",
  "title": "Definitions and Components",
  "body": " Definitions and Components   The defining feature of any abstract machine is its memory structure, ranging from a finite set of states in the case of finite-state machines to more complex memory systems (e.g., Turing machines and Petri nets ).  A Finite-State Machine (FSM) is a computational model that has a finite set of possible states , a finite set of possible input symbols (the input alphabet) , and a finite set of possible output symbols (the output alphabet) . The machine can exist in one of the states at any time, and based on the machine's input and its current state, it can transition to any other state and produce an output. The functions that take in the machine's current state and its input and map them to the machine's future state and its output are referred to as the state transition function and the output function, respectively. The default state of an FSM is referred to as the initial state .    Mealy State Machine   state machines  definition   A Mealy finite-state machine is defined by the tuple where:    is the state set, a finite set that corresponds to the set of all memory configurations that the machine can have at any time.    The state is called the initial state .     is the input alphabet.     is the output alphabet.     is the output function, which specifies which output symbol is written onto the output device when the machine is in state and the input symbol is read.     is the next-state (or transition) function, which specifies which state the machine should move to when it is currently in state and it reads the input symbol .       Other Types of Finite State Machines   Moore Machine  In a Moore Machine , the output depends solely on the current state. Unlike Mealy state machine, this machine must enter a new state for the output to change.  A Moore machine is also represented by the 6-tuple where:    is the state set, and is the initial state.    The state is called the initial state .     is the input alphabet.     is the output alphabet.     is the output function, which specifies which output symbol associated with the machine current state .     is the transition function, which specifies which next state the machine should move to when its current state is and it has the input symbol .       Finite-State Automaton  A final state (also known as the accepted state) is defined as a special predefined state that indicates whether an input sequence is valid or accepted by the finite-state machine. The set of all final states is a subset of the states set .  A Finite-State Automaton is a finite-state machine with no output , and it is represented by the 5-tuple where:    is the state set, is the initial state, and is the set of final states.    The state is called the initial state .    The subset is the set of all final states of the machine.    is the input alphabet.    is the transition function, which specifies which next state the machine should move to when its current state is and it has the input symbol .     When the state machine processes a finite input sequence, it transitions through various states based on each input in the sequence and the current state of the machine. If, after processing the entire sequence, the machine lands in any of the final states , then the input sequence is considered valid (or recognized according to the machine's rules). Otherwise, the input sequence is rejected as invalid.    Deterministic Finite Automaton (DFA)  A Deterministic Finite Automaton (DFA) is a simplified automaton in which each state has exactly one transition for each input. DFAs are typically used for lexical analysis, language recognition, and pattern matching.   Note  A text parser or a string-matching application that recognizes a specific language or regular expressions are real-world examples of DFA use.     Nondeterministic Finite Automaton (NFA)  Unlike a DFA, an NFA allows multiple transitions for the same input or even transitions without consuming input ( -transitions).    Turing Machine  A Turing Machine is an expansion of an FSM, which includes infinite tape memory representing both the input and output streams (shared stream). Unlike all other FSMs, a Turing machine can alter the input\/output stream, and as such, it is capable of simulating any algorithm. Turing machines are the theoretical foundation for modern computation (any general-purpose computer executing any algorithm can be modeled as a Turing Machine).     Finite state machines are a foundational concept in computer science, often associated with tasks related to system designs (circuits and digital computers, algorithms, etc.). However, the vast and rich domain of applications of state machines extends far beyond simple simulations to the full control logic of complex industrial processes and workflows. These tasks can vary in complexity, ranging from a simple parity check to managing traffic patterns, a programming language compiler, or natural language recognition and processing.  State machines offer a structured way to model systems with discrete states and transitions. Different variants, such as the Mealy machine and Moore machine, have distinct characteristics and, as such, can adapt to various applications.   "
},
{
  "id": "sm-definition-and-components-2",
  "level": "2",
  "url": "sec-state-machine-definition.html#sm-definition-and-components-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Finite-State Machine (FSM) "
},
{
  "id": "sec-state-machine-definition-4-2-2",
  "level": "2",
  "url": "sec-state-machine-definition.html#sec-state-machine-definition-4-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Moore Machine "
},
{
  "id": "sec-state-machine-definition-4-3-3",
  "level": "2",
  "url": "sec-state-machine-definition.html#sec-state-machine-definition-4-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Finite-State Automaton "
},
{
  "id": "sec-state-machine-definition-4-4-2",
  "level": "2",
  "url": "sec-state-machine-definition.html#sec-state-machine-definition-4-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Deterministic Finite Automaton (DFA) "
},
{
  "id": "sec-state-machine-definition-4-5-2",
  "level": "2",
  "url": "sec-state-machine-definition.html#sec-state-machine-definition-4-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "NFA "
},
{
  "id": "sec-state-machine-definition-4-6-2",
  "level": "2",
  "url": "sec-state-machine-definition.html#sec-state-machine-definition-4-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Turing Machine "
},
{
  "id": "sec-modeling-finite-state-machines",
  "level": "1",
  "url": "sec-modeling-finite-state-machines.html",
  "type": "Section",
  "number": "12.2",
  "title": "Finite State Machines in Sage",
  "body": " Finite State Machines in Sage   state machines  model    Although Sage includes a dedicated built-in rich module to handle various types of state machines, it may not always be sufficient to address certain use cases or implement specific custom behaviors of the machine. Additionally, the built-in module allows state machines to be defined and constructed in different ways, providing greater flexibility and making it more suitable from a programmer's perspective. However, it may not fully conform to the precise definition given earlier. This highlights that it is still possible to model, construct, display, and run relatively simple state machines by utilizing general-purpose tools, such as graphs and transition matrices, to represent and operate on state machines.   Notes  While Sage provides basic tools to represent and simulate state machines, it may not natively support more complex state machine features such as parallel states or hierarchical transitions.     The Elevator State Machine  Let's design a basic controller to an elevator to show the process of defining states, creating a state transition graph, visualizing the state machine, and simulating its execution in Sage.  Consider a 3-level elevator (floors 1 through 3). The elevator has 3 buttons for users to select the destination floor (only one can be selected at a time). Depending on the current position and the selected floor, the elevator can go up, go down, or remain on the same floor.   Description of the Elevator FSM  This elevator system can be modeled and simulated using a finite-state machine with states representing each floor, the user inputs set (where represents the button for floor), and the outputs set for 'going up', 'going down', or 'going nowhere'.  The components of this FSM are transcribed in the following table.    The Elevator State Machine Definition      next    output     current                                       The following steps outline the approach to build and test the elevator controller system:   Define the elements of the Finite State Machine: States, Inputs, Transitions, and Outputs.    Construct the State Machine.    Run the machine using a sample input set.       Elements of the Elevator FSM  The first step is to define the states and transitions in the state machine, which can be represented using lists and dictionaries.     Graph Model of the Elevator FSM  An FSM can be modeled as a graph where vertices represent the states, and the directed edge between vertices is the relationship between two states (the transition from one state to the other). The weight of a directed edge between two vertices represents the pair of input and output associated with the transition between the two states.  In Sage, the DiGraph class can be used to represent the states, transitions, and outputs of the state machine as a directed graph, leveraging the graph structure to visualize the state machine representation.   The show() method renders a graphical representation of the state machine. Each vertex in the graph represents a state, and each directed edge represents a transition, labeled as (input, output).    Run the Elevator State Machine  Next, the state machine's behavior can be simulated by defining a function that processes a list of inputs and transitions through the states accordingly.   The run_state_machine() function simulates the state machine by processing a list of inputs starting from an initial state.     The Traffic Light State Machine  Let's design a simple traffic light controller to illustrate alternative methods for defining, visualizing, and executing finite state machines in Sage.  Consider a simplified traffic light system controlled by preset timers. This system operates through three phases that represent the flow of road traffic: Free-flowing, Slowing-down, and Halted. These phases correspond to the traffic light signals: green, yellow, and red, controlling the flow of traffic. The system uses three timer settings: 30 seconds, 20 seconds, and 5 seconds. When a timer expires, it triggers the transition to the next phase. Initially, the light is green, the traffic is flowing, and:   When the 30-second timer expires, the traffic light changes from green to yellow, and traffic begins to slow down.    When the 5-second timer expires, the traffic light changes from yellow to red, bringing traffic to a complete stop.    When the 20-second timer expires, the traffic light changes from red to green, allowing traffic to start moving again.      Description of the Traffic Light FSM  In this traffic light system, the three phases representing the flow of road traffic: Free-flowing (F) , Slowing-down (S) , and Halted (H) are the states of the FSM. These phases correspond to the traffic light signals: green (G), yellow (Y), and red (R), which are the outputs set of the system. The timers driving the transitions are the inputs set of this traffic light system.  The following table summarize the elements of the traffic light FSM.    The Traffic Light State Machine Definition      next    output     current                                       By applying the same steps and approach as in the previous section, the traffic light controller system will be built and tested, this time utilizing the Sage built-in module and functions.    Using `FiniteStateMachine' Module  Sage FiniteStateMachine built-in library provides a powerful tool to model, construct as well as simulate state machines of various systems. This module will be leveraged to showcase its capabilities on the given example, and demonstrating how it can be used to construct and display the FSM, manage its state transitions and outputs.  The command FiniteStateMachine() constructs an empty state machine (no states, no transitions).   The function FSMState() defines a state for a given label. The is_initial flag can be set to true to set the current state as the initial state of the finite state machine. The method add_state() appends the created state to an existing state machine.   To check whether or not a finite state machine has a state defined, has_state() method can be used by passing in the state label (case-sensitive).   The function states() enumerates the list of all defined states of the state machine.   The method initial_states() lists the defined initial state(s) of the state machine.   To define a new transition between two states (as well as the input triggering the transition, and the output associated with the state transition), the method FSMTransition() can be used. The method add_transition() attaches the defined transition to the state machine, and the function transitions() enumerates the list of all defined transitions of the state machine.   An alternative method for defining state transitions in an FSM is by using the add_transitions_from_function() method. This approach accepts a callable function that takes two states as arguments: the source state and the target state. The following code demonstrates how this can be implemented.   Once the states and transitions are defined, the state machine can be run using process() method, which then returns the intermediary outputs during the state machine run.   The graph() command displays the graph representation of the state machine.   The FiniteStateMachine class also offers latex representation of the state machine using the latex_options() method.   Note that the latex printout may not have all elements displayed. However, it can still be customized further. The following figure shows a rendering of the above latex commands.      FSM graph output.     Using `Transducer' Module  Sage Transducer is a specialization of the generic FiniteStateMachine class. The Transducer class creates a finite state machine that support optional final states, and whose transitions have input and output labels.  Let's see how to create another state machine using Transducer and for the same traffic light example.   The member variable input_alphabet lists the set of the transducer inputs set.   The member variable output_alphabet lists the set of the transducer outputs set.   Since a Transducer is also a FiniteStateMachine , the method has_state() can still be used to check whether or not a given state exists in the defined transducer (by passing in the case-sensitive state label).   The function states() enumerates the list of all defined states of the state machine.   The method initial_states() lists the defined initial state(s) of the state machine.   After defining the states and transitions, the transducer can be executed using the process() method from the parent FiniteStateMachine class. This method returns the intermediate outputs generated during the execution of the state machine.   The graph() command displays the graph representation of the transducer-based state machine.   Notes  The latex_options() method of the base class FiniteStateMachine also is inherited and can also be used with Transducer state machine to output latex representation.       The above are basic commands with a typical workflow of defining and running of simple finite state machines. The general structure of the state machine can be adapted to fit different use cases. The examples shown can be customized and fine-tuned to reflect more complex scenarios (more states, different input sequences, etc.)   "
},
{
  "id": "sec-modeling-finite-state-machines-4-4-4-1",
  "level": "2",
  "url": "sec-modeling-finite-state-machines.html#sec-modeling-finite-state-machines-4-4-4-1",
  "type": "Table",
  "number": "12.2.1",
  "title": "The Elevator State Machine Definition",
  "body": " The Elevator State Machine Definition      next    output     current                                     "
},
{
  "id": "sec-modeling-finite-state-machines-5-4-4-1",
  "level": "2",
  "url": "sec-modeling-finite-state-machines.html#sec-modeling-finite-state-machines-5-4-4-1",
  "type": "Table",
  "number": "12.2.2",
  "title": "The Traffic Light State Machine Definition",
  "body": " The Traffic Light State Machine Definition      next    output     current                                     "
},
{
  "id": "sec-modeling-finite-state-machines-5-5-24",
  "level": "2",
  "url": "sec-modeling-finite-state-machines.html#sec-modeling-finite-state-machines-5-5-24",
  "type": "Figure",
  "number": "12.2.3",
  "title": "",
  "body": "    FSM graph output.  "
},
{
  "id": "sec-fsm-in-action",
  "level": "1",
  "url": "sec-fsm-in-action.html",
  "type": "Section",
  "number": "12.3",
  "title": "State Machine in Action",
  "body": " State Machine in Action   state machines  application    Traffic light systems are crucial for regulating traffic. These systems use carefully coordinated signals to ensure safety for both vehicles and pedestrians. In the previous section, the traffic light system was modeled in an overly simplistic way. This section adds complexity to account for pedestrian presence, ensuring safe crossings while maintaining smooth traffic flow.    Traffic Light Controller: Problem Overview  Let’s design a traffic light system for a two-way road with pedestrian crossings. This system coordinates the movement of vehicles and pedestrians using lights to indicate when vehicles can proceed, slow down, or stop, and when pedestrians can cross safely. Vehicle traffic lights include three signals: Red, Yellow, and Green. For simplicity, the pedestrian lights also use three signals: red, yellow, and green. Signal transitions are governed by timers, as described in the previous section, with each timer triggering a transition event after a predefined duration.      Simple Traffic Light   The system must ensure safety and smooth traffic flow by coordinating appropriate traffic and pedestrian light configurations. Initially, vehicle traffic proceeds with a traffic green light, while pedestrian crossing is prohibited with a pedestrian red light.    Elements of the FSM Model  The goal here is to define a state machine model that can control this traffic light system, construct it, then put it under test. This system has different configurations of lights: Red ( R ), Yellow ( Y ), and Green ( G ) for traffic, and red ( r ), yellow ( y ), and green ( g ) for pedestrians. Note that not all possible combinations makes sense.  For inputs, the system leverage four independent timers with different preset durations and triggering different use cases as follows:  30sec timer : drives the traffic light transition from G to Y . The pedestrian light remains r and unchanged.  5sec timer : drives the traffic light transition from Y to R , and the pedestrian light transition from r to g .  20sec timer : drives the pedestrian light transition from g to y , while the traffic light remains R and unchanged.  10sec timer : drives the pedestrian light transition from y to r , and the traffic light transition from R back to G .    From the above timers and lights configurations, the following set of 4 distinct states emerges:  State Yr : Where the traffic light is Yellow, pedestrian light is red.  State Rg : Where the traffic light is Red, pedestrian light is green.  State Ry : Where the traffic light is Red, pedestrian light is yellow.  State Gr : Where the traffic light is Green, pedestrian light is red.    Finally, the system's outputs corresponding to each of the above are the light configurations and would be similar to the states:   (Y,r) : Traffic light turning Yellow and the pedestrian light remains red.   (R,g) : Traffic light turning Red and the pedestrian light turning green.   (R,y) : Traffic light remains Red and the pedestrian light turning yellow.   (G,r) : Traffic light turning Green and the pedestrian light turning red.    The following table summarize the elements of the new traffic light FSM.    The Traffic Light State Machine Definition      next    output     current                                                           The symbol indicates no state change, and no output change.     Construct the FSM     Display the State Transition Graph  The FSM is visualized as before (a directed graph with nodes representing states and edges showing transitions).     Simulate a Full Cycle Run of the FSM  The simulation starts in the initial state ( Gr ) and transitions through all states.     It is worth noting that using Sage built-in modules could produce an error when handling transitions that were not defined in the FSM. For instance, in the previous example, if the timer durations _pattern_ for the input does not match the defined transitions, the output will be a None value. Similarly, an exception would be thrown if attempting to run the FSM starting at state that is not part of the FSM definition.   "
},
{
  "id": "sec-fsm-in-action-4-3",
  "level": "2",
  "url": "sec-fsm-in-action.html#sec-fsm-in-action-4-3",
  "type": "Figure",
  "number": "12.3.1",
  "title": "",
  "body": "    Simple Traffic Light  "
},
{
  "id": "sec-fsm-in-action-5-7-1",
  "level": "2",
  "url": "sec-fsm-in-action.html#sec-fsm-in-action-5-7-1",
  "type": "Table",
  "number": "12.3.2",
  "title": "The Traffic Light State Machine Definition",
  "body": " The Traffic Light State Machine Definition      next    output     current                                                        "
},
{
  "id": "refs",
  "level": "1",
  "url": "refs.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": "  We based most of this text on the Discrete Math lectures at Wilbur Wright College, taught by Professor Hellen Colman. We focused our efforts on creating original work, and we drew inspiration from the following sources:   Doerr, Al, and Ken Levasseur. ADS Applied Discrete Structures. , 21 May 2023.  SageMath, the Sage Mathematics Software System (Version 10.2), The Sage Developers, 2024,   Beezer, Robert A., et al. The PreTeXt Guide. Pretextbook.org, 2024, .  Zimmermann, Paul. Computational Mathematics with SageMath. Society For Industrial And Applied Mathematics, 2019.  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
