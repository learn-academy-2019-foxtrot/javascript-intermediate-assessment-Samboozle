# ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What are the HTTP verbs? Which CRUD action corresponds to each verb?

  Your answer: Get -> C(Read)UD; Post -> (Create)RUD; Patch/Put -> CR(Update)D; Delete -> CRU(Destroy!!!!!!!)

  Researched answer: Same, though wikipedia offers even more verbs!


2. Why would you use object destructuring?

  Your answer: Within the scope of a method, referring to an object or class property (including another method) by its shorthand name rather than its full nesting path can make code easier to write and read, especially if said property is referenced more than once.

  Researched answer: Above, but also, in some cases (e.g., array destructuring), values can be replaced with placeholders/variables for easier logic manipulation.


3. Why is testing important?

  Your answer: If each function is built to the specifications of an input and expected output (especially if it doesn't mutate any data), it can be guaranteed to produce expected outcomes. This modular approach to programming (likely) results in low-bug code.

  Researched answer: A testing framework(usage?) (like Jest) can make it easier to isolate functions from a program, ensuring that the outcomes can't be influenced by an unkempt global state.


4. What is the difference between a class and an object?

  Your answer: A class acts as a model for objects, whereas objects act as instances of classes.

  Researched answer: Classes can be thought of as templates for objects, often containing boilerplate properties and methods. (objects generally inherit properties from some kind of prototypical class definition.)


5. What did you learn during the group project this week? Please include any additional feedback you may have.

  Your answer: We may need to review vocabulary! Words like "props" and "component" are still prohibitively arcane to some students who don't understand what they mean.



### HTML/CSS Review questions: First, try to answer each question on your own then Google the answer to further your knowledge.

1. How do you link a CSS file to your HTML page?

  Your answer: <link something stylesheet something filepath>

  Researched answer: <link rel="stylesheet" type="text/css" href="stylesheet.css">


2. What is the difference between a div and a span?

  Your answer: never used span!

  Researched answer: div is block, span is inline. div is better equipped for wrapping sections of a page, whereas span is better for containing short segments of text.


3. What is a CSS class? When should you use an id instead of a class?

  Your answer: A class can refer to multiple instances of the same kind of element. Classes are great if you want to reuse styling across a page, whereas ids are better for single instances of an element.

  Researched answer: Not much else ~~


4. Name 4 semantic HTML tags.

  Your answer: I'm not sure what makes an html tag semantic rather than un-semantic.

  Researched answer: same, but also: ids are specifically unique, and id properties specifically override class properties.


5. What are three options for creating responsive design?

  Your answer: CSS event styling (:hover, :active, :focus...); render speed; engaging copy returned based on input (e.g., name given = "Samuel"; copy returned = "Samuel? What a lovely name!")

  Researched answer: Relative scaling, sizing/format breakpoints (via media queries, I assume?), vector images


### STRETCH: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

  Your answer: Front-end developers are responsible for creating the code that users most closely interface with. As such, they should be (more) concerned (than back-end developers) with the user experience. Such consideration should involve responsiveness (speed, feedback), misuse (invalid field entries), etc...

  Researched answer: This, plus: some front-end positions don't make any considerations as to the back-end; database work is left to the back-end nerds.


2. What is block scope in JavaScript?

  Your answer: I don't recall what the various scopes are offhand!

  Researched answer: Everything between { curlies }! Var and let keywords define variables for everything that lives in that scope.


3. How would you explain the idea of "inheritance" in object oriented programming?

  Your answer: In both the standard library's selection of prototypical objects and in the objects created by the programmer, there is a chain of inheritance determining what features those objects can be defined with and that they have natively.

  Researched answer: from wikipedia:
  
  'In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object (prototype-based inheritance) or class (class-based inheritance), retaining similar implementation. Also defined as deriving new classes (sub classes) from existing ones (super class or base class) and forming them into a hierarchy of classes. In most class-based object-oriented languages, an object created through inheritance (a "child object") acquires all the properties and behaviors of the parent object (except: constructors, destructor, overloaded operators and friend functions of the base class).'
