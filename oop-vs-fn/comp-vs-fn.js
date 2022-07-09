/*
inheritance is a super class that is extended to smaller pieces
that add or overwrite things (properties)
> make sure to generalize , but as you go deeper down the inheritance chain, it could get complicating

composition is smaller pieces to create something bigger
> compose / pipe 

INHERITANCE
- what is? 
- we structure based on what things * are * 

possible problems:
- [ tightly coupled ]
  >> can keep code DRY but also can have problem, 
  >> make sure subclasses dont break if parent is changed
  can lead to [fragile base class problem]

- [ hierarchy problem ]
  >> with inheritance, we can make code based on what it is
  User
    Watcher
      Character
        Elf
          Jr. Elf (inherits from all super classes, and also methods it doesnt need)
        Ogre
  

COMPOSITION
- focus nd structure code on what it * has *
- what abilities are 
*/

//composition is about what it HAS, Elf can attack
function getAttack(character) {
  return Object.assign({}, character, {attackFn: ()=>{}});
}
function Elf(name, weapon, type) {
  //constructor without inheritance model
  let elf = {
    name,
    weapon,
    type,
  }
 return getAttack(elf);
}

/* Idea
Elf = attack() + sleep();
Ogre = attack() + makeFort() + Sleep()
*/

/*
PROGRAMMING PARADIGM = WRITING CODE COMPLIANT WITH SPECIFIC RULES


ORGANIZE INTO UNITS = OOP
ORGANIZE INTO FUNCTIONS = FUNCTIONAL PROGRAMMING

OOP
- box containing info, regrouping it as object
- operations that happen on state = "methods"
- common in C#, python, Java
- few operations on common data
- stateful, we modify state
- this and self , modify
- functions have side-effects
- more imperative (howe we are doing it)
- best for many things, but less operations
- bring method and data together 

Functional
- code is combination of functions
- data is IMMUTABLE 
- pure functions - shouldnt change outside world
- have control over program flow
- compose functions to act on data
- manipulate data structures, compositions are used more than loops, else-if statements
- performing many diff operations for which the data is fixed
- "stateless", state is immutable
- functions are pure, less side-effects
- more declarative (what we are doing)
- good for large data, high performance etc
- data and behavior are distinct, keep separate for clarity

> All are good in their own way
> Modeling of algorithm and data structure = whatever makes more sense 


*/




