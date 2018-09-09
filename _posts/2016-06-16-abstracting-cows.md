---
layout: post
title: Abstract Variables and Abstracting Cows
author: Austin Cory Bart
tags: [computational thinking, abstraction]
---

In the Computational Thinking course, we talk about "Abstraction" as the concrete representation of real-world things using computational tools (although there are other definitions, this is what we focus on). Variables are one way to represent things, but there are others. Lately, I have been considering how different variables have different levels of abstraction, and the implications for pedagogy.

  

Let's walk through an example. Imagine we have a herd of cows in a field.

  

![Cows Grazing](/images/cow-grazing-grass-clipart-1.jpg)


This herd could be represented quantitatively using the following table.

|||
|--- |--- |
|Name|Weight|
|Bessie|600|
|Pancake|750|
|Abigail|800|
|Average|716|  

At the bottom row of this table, we see an "average" cow. There is no "average cow" in our herd with a weight of 716 pounds. But we understand this idea of an "average cow" as an abstraction.

  

![Abstract Average Cow](/images/abstract-cow.png)

Now, how would we represent this herd in a BlockPy program?

![Assignment of List to my_cows](/images/abstract-cow-my_cows.png)  

We now have a variable that abstracts our herd of cows into a list of numbers, which can be easily manipulated. By abstracting our cows, we reduce unnecessary information (their height, their name, their genetic code, how many times they've mooed today, etc.).

  

We can create a variable that represents our imaginary average cow.

  

![Simple Calculation of Average Cow](/images/abstract-cow-average_cow.png)

  

We cannot see the value of the "average\_cow" from this perspective, although we could print out its value. It is a more abstract variable, dependent on the order of execution and pre-existing variables.

  

We used built-in Python functions to quickly compute that average, but in the CT course, we don't allow students to do so. Instead, they have to use a for-each loop. The necessary code to calculate the average cow weight would be:

  

![Calculation of Average Cow with For-Each Loop](/images/abstract-cow-foreach_cow.png)

  

  

This code has 5 variables:

1.  my\_cows
2.  average\_cow
3.  total\_weight
4.  total\_cows
5.  a\_cow

  

The variables `total\_weight` and "total\_cows" are similar to the "average\_cow" variable, but they are at a higher level of abstraction than "my\_cows" since they do not represent real physical entities.

*   How did we know to create "total\_weight" and "total\_cows"?
*   How did we know what to initialize them to?
*   How did we know to place them inside the loop to manipulate them?

And what about that "a\_cow" variable? It represents each cow, but only over the entire course of the loop. It is not a specific cow until a specific time. To me, this represents an even higher level of abstraction than the other variables.

*   What is the relationship between "a\_cow" and "my\_cows"?
*   How do I mentally model this abstract cow?
*   How do I keep track of the cow over "time", when "time" is not immediately present in the program as written?

Looking at a completed program, I think many students are not able to recognize the varying levels of abstraction of these variables, and they struggle with writing this all from scratch.