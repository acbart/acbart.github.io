---
layout: post
title: Distance in Assignments for Transfer
author: Austin Cory Bart
tags: [computer science education, curriculum design, distance, skills]
---

Transfer of Learning is a term in Educational Theory that describes how one learns in a context and then applies it to another. Transfer can be used to describe many levels of contexts: moving from the classroom to the real world, moving from one lesson to another, moving from one part of a lesson to a broader idea, etc. I am particularly interested in how students transfer knowledge to solve problems, and how we should design problems in accordance with the transfer students can bring to bear.

Example
-------

Let's consider a lesson on Conditional statements. There are several levels of explanation I could give, and problems that are then directly based on the explanation given.

* I could give a quick overview of the idea of a conditional ("They allow you to do different things depending on a question"). Then I could ask a Multiple-Choice question where students demonstrate recall.
* I could give a quick template of what a conditional looks like in a given programming language ("if ____: ____ else ____"). Then I could ask them to write out the template.
* I could give them an abstract example of a conditional ("if a < b: print(a) else print(b)"). Then I could have them write a conditional of their own.
* I could give them a more situated example of a conditional (a conditional where evaluate if a temperature and determine if it falls within a range, printing a different string). Then I could have them write a function that solves a similar problem, like evaluating a book price and determining if it falls within a range (varying only the conditional's question part).
* I could give them several situated examples of a conditional, each one varying a different component (e.g., many different conditional expressions, many different bodies, optionally using or not using the else part). Then I could give them problems for many of the different combinations.
* I could give them a range of situated examples for using conditionals in a wide range of circumstances (e.g., how to use IF statements inside of function definitions, how to use them with FOR loops, how to use them with the Input function, how to use them with integer variables, or string variables, or objects, and so on). Then I could ask problems that combine IF statements with many other concepts in more and more unusual circumstances.

There's a level of problems beyond my explanations that tasks students with true problem solving and invention, where they have to solve some problem that is not at all obvious in how conditionals apply. For example, I could give them a problem that expects them to discover recursion using conditionals, without ever mentioning that the concept exists.

If I only gave them a quick overview of conditionals, it would be a truly exceptional student who could arrive at recursion, or even the more complicated range of situated problems. I would be suspicious that they had prior experience. There seems to be some sense of the match between the instruction and the problems I assign.

Problem Distance
----------------

I propose that a problem's Distance is a measure of how removed the problem is from the original explanation. I suspect that there might be a better term than Distance (perhaps Transfer is already appropriate), but I couldn't find anything after a casual skim through some education research.

Distance is distinct from a problem's <a href='http://www.proftesting.com/test_topics/steps_9.php' target=_blank>Difficulty</a>, which is a measure divorced from the instructional content (typically calculated as ratio of students who got it right vs. wrong). I could easily make a problem less Difficult by telling my students the answer before hand, but that would dramatically affect the problem's Distance. Of course, under normal circumstances I would expect Difficulty and Distance to be correlated.

It is probably not possible to measure Distance concretely, the way we measure Difficulty. Even the examples I posited before are highly subjective (perhaps someone may come along and argue that recursion falls so naturally out of conditionals, no further explanation is required). There might be ways to more rigorously assess Distance by having multiple experts review and discuss problems using high-quality rubric. But I can't think of more coarse, automatic ways. If I ever do some analysis myself, I'd probably just make up a coarse ordinal scale based on the example I created above:

* "The answer to this question is directly given in the presentation, so it's a 1 on the Distance Scale."
* "Ah, this question only varies from the examples with the type of the expression: it's a 3 on the Distance Scale").
* "This question demands they understand nesting IF statements repeatedly, it seems to be a 5 on the Distance Scale."

Research Questions
------------------

So how much distance is suitable for a given problem? I imagine the answer is dependent on the learners and the topic. Some might need more explanation, and some might need less. We could probably model learners as a distribution of how much presentation they need before they can solve a problem of a given distance.

One hypothesis is that every problem should have almost no distance from the presentation of material. Students should never be assessed on things they haven't learned. But how does this affect their long-term problem-solving ability? If I explain everything all the time, does this remove their ability to learn on their own? What happens when they get to harder material where we CAN'T explain everything? What happens when they get out of the classroom and have to teach themselves?

Perhaps we need to gradually increase distance over time. Does *each topic* need to gradually increase distance (starting back from zero for each new lesson), as opposed to gradually increasing distance over the length of the course? Should the rate of change accelerate, decelerate, or remain unchanged?

Problems with greater distance are more likely to stump students, but also take more time. How do we assign points to students in a fair way? How much should we expect students to be able to solve far problems, knowing they require more intellectual work? What standard are we holding students to? Is this only extra credit, or is it core material in a Computer Science class?

I want more specific answers to these questions. I don't want a generic answer or platitude, I want to know specifically how many near and far questions I should have at each phase of my course, and how many points to assign each question.