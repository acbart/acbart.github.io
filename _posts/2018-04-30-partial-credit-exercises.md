---
layout: post
title: Partial Credit on Programming Exercises
author: Austin Cory Bart
tags: [curriculum, blockpy, programming exercises, feedback]
---

A new feature in BlockPy from last semester is the idea of partial credit on programming problems. For my final exam in CS-1064 (Introduction to Programming in Python), I give students a series of 8 questions in BlockPy that the must complete. An abridged example of such a question is below:

_Use the input function to consume a plus-separated string of numbers from the user (e.g., 10+2+3). Add up all these numbers and print their sum (15, in the case shown before)._  

These questions do not give feedback besides syntax, runtime, and "no" errors. However, they also attempt to give students partial credit based using the same mechanisms we use when giving enhanced feedback:

*   Passing unit tests
*   Passing output checks
*   Detection of particular code constructs (e.g., "Has a for loop")
*   Static analysis of things like def/use, performing an action after a return
*   State of the memory at the end of the program (e.g., "Has closed all the files")
*   And so on

I really like the idea that these programming questions are not all-or-nothing, because that's more accurate to what happens in the real-world. Yes, success is usually measured pass/fail in industry, but the reality is that you can escalate for help. You can go to a senior colleague, you can go on help forums, you can go to your boss, etc. Help is often around the corner, when we consider these small practice problems. However, your colleague/boss/forumite will be more or less happy depending on how much you've completed, and with how much scaffolding you'll need. Partial credit reflects this particular reality.

Something I am not happy about, however, is the ad-hoc style I have used for determining how partial credit is awarded. Currently, I am using very vague heuristics without reference to a particular rubric. For the example given before, we might say something like:

*   10% for using the input function
*   20% for incorporating some kind of loop or higher-order function
*   10% for using the split method
*   20% for handling a few simple test cases
*   20% for handling more complicated test cases
*   10% for remembering to print the result
*   10% for completing all of the above and therefore getting the question correct

But this is just one way of splitting it up. How did I determine those were the necessary elements? What about solutions outside of the ones I imagine that should be equally valid? Why those particular weights?

Students have not pushed back on this, so it's possible that it's fair (or overly generous). However, I think that means very little. I want a more principled way of approaching this in the future, based on my learning objectives, the code's complexity, known solutions... something!