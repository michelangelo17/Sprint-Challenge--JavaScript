# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.

>.forEach works pretty much the same as a regular for loop would, it iterates over each item in the area, has an index etc. .map on the other hand actually creates a new array and returns it. If you want to make changes to an existing array, .forEach is a good choice. If you want to use data from one array to make another array, .map is a little nicer for that. 

2. What is the difference between a function and a method?

>This is kind of a odd one, since we call a function inside an object a method in JavaScript, but since technically everything in JavaScript is an object, including functions and the global scope it's a bit of a game of pretend I think. Basically, a method is any function which is attached to an object or its prototype and has to be called using dot notation. A function can simply be called by its name or the variable name that points to it. 

3. What is closure?
>I think of closure as an "enclosure" that holds data out in a seperate place in memory from the rest. It's used when a function is passed to another function or returned from another function and it holds all of the variables that were in scope when the function was declared. The scope is the current lexical enviroment and anything outside of it, it goes up, one level at a time until it reaches global. So you can reach out, but not in. Scope and closure are kind of two pieces of the same concept. Closure is what makes scope work properly with variables outside the current lexical enviroment. (But not inside the next one down/in, one way street.)

4. Describe the four rules of the 'this' keyword.

>a) Global Binding: "this" refers to either the window or console object. Can use "strict mode" to prevent this from happening. Recommended to do so.

>b) Implicit Binding: Most common binding. "this" is bound to the next scope up/out or whatever comes left of the dot when invoked. In anObject.aMethod(); If aMethod prints out "this" it will print the anObject object. 

>c) New Binding: Used with constructors, binds "this" to the specific instance of the new object being created. In let bill = new Person({name: bill}), the this keyword you used in the Person constructor would be pointing to the Person object contained in the bill variable.

>d) Explicit Binding: Probably the most straightforward to explain but easiest to screw up using, this is where you directly set what "this" means. There are three ways to do this, call, apply and bind. Call and apply are nearly identically, assigns and invokes immediately. Apply can take an array as an argument. Bind works a bit differently, creates a whole new function with "this" assigned, but doesn't invoke it, allowing you to do it manually at a different point.

5. Why do we need super() in an extended class?

>super is a keyword that essentially just abstracts away our explict call binding to the parent prototype. It does the same thing, but in one word. Much nicer. So no more Parent.call(this, childAttributes), just a single super(); It is required in any extended class, if you try to use 'this' before invoking super you will get an error because classes use 'strict mode'.

## Project Set up

Follow these steps to set up and work on your project:

- [X] Create a forked copy of this project.
- [X] Add TL as collaborator on Github.
- [X] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [X] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [X] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [X] You are now ready to build this project with your preferred IDE
- [X] Implement the project on your Branch, committing changes regularly.
- [X] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [X] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [X] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [X] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [X] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
