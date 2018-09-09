---
layout: post
title: Context in Cognition - Functions and Objects
author: Austin Cory Bart
tags: [opinion, teaching, programming paradigms]
---

You should not start by teaching your students how to create functions and objects. Functions and objects are programming techniques for organizing code that has grown: functions reduce code repetition, and objects clump related data structure with the operations on that data. There are few <8-line program that provide a truly useful context to justify this. According to Situated Learning Theory, your students will not be cognitively convinced about them and will not learn as well.

  

You might think that "context" just means "frame story", but that's limiting. A good context provides justification. This is distinct from the Usefulness aspect of the [MUSIC model](https://sites.google.com/a/vt.edu/acbart-eportfolio/blog/musicoverloadtoomuchmotivation) - that is a motivational concern, and context is a cognitive. ![Grandmother is bringing an apple to Thanksgiving dinner. She needs to buy 9 apples, 2 bags of sugar, 3 bags of four, and 2 jars of honey. How much money did Grandmother spend at the grocery store?](http://www.uniqueteachingresources.com/image-files/thanksgivingmathwordproblemspowerpoint.jpg)

  

Take a look at the attached image. We can analyze the frame story about a grandmother according to our motivational theory:

*   Most people are familiar with shopping and need to know how to sum up our purchases (usefulness)
*   Most people like to think about grandma (caring)
*   There are bright colorful graphics (situational interest)
*   etc.

However, there is also a cognitive element here - the context provides a situation where we need a skill (Summing Multiplications). If you have just listened to a decontextualized (_inert_) lecture on Summing Multiplications, you would see this scenario and think, "Oh! That's why that's useful! I can calculate how much I spend when I shop" This problem is a convincing context for the tool being taught to you, because none of your other tools work better for it (addition and multiplication on their own are inadequate). According to Situated Learning Theory, you will learn better by having this scenario compared to just an inert lecture.

  

### But what about Computer Science Education?

  

In the context of CS Education, you need to teach functions in a situation where they are useful. Restructuring a 5 line program into 4 isn't terribly helpful. When you start looking at 20 line programs, and you can teach the students to restructure them into 4, that's helpful. That's when students should look at the technique and say, "Oh! That's why that's useful!"

  

The useful context for refactoring techniques like functions comes from maintenance, not development. In the former, you are approaching a new program from scratch, and in the latter you should be able to keep most of your current work in your head. Therefore, a motivating context is to give them a long program (without functions) that they've never seen before and told to fix its bugs. I would introduce a few typos in some of the repeated code blocks. I would try and make this experience painful for them - the program would be cryptic and poorly written (And I'd motivate it to them that "most code in the wild is like this", and that "your first programming job will be maintenance, not development"). Then I'd let them repeat the exercise on a program with functions - this experience would be much nicer. The followup lecture would have them compare the experiences. Ideally, then they would see the value in using functions.

  

Two big takeaways:

1.  **Functions and Objects should be taught as refactoring techniques to help students organize their programs as they grow.**
2.  **Contexts are important from both a motivation and a cognitive perspective.**

**\[Update 9/9/14\]**

Dr. Phil Conrad responded on Facebook about my blog post. At some point, I want to rewrite it taking his criticism into account - I have indeed unfairly misjudged functions, in my haste. He writes:

_I totally agree with you about objects. I could not disagree with you more about functions. Functions are the fundamental unit of computing---NOT assignment statments, NOT input/output statements. A function that takes parameters and returns a result is ABSOLUTELY the fundamental unit of CS just as a "cell" is the fundamental unit of biology, and atoms and molecules are the fundamental units of Chemistry. The statement "Functions and objects are programming techniques for organizing code that has grown" reflects a bias about how CS has traditionally been taught, where functions show up in Chapter 5 of the textbook instead of Chapter 1. If you want to teach "expressions" with hard coded values before functions, fine, and then you can show a 5 line program than be usefully reduced with a function. But the longer you delay functions, the more you are carving in stone a pathway of thinking about computing that leads to bad habits that have to be unlearned, slowly, painfully. In the extreme, you get seniors that still approach every problem as "prompt for input, compute value with assignment statements, print result", write mononlitic mains and only factor code into functions that "divisions" of the monolithic main that refer to global variables. The useful context for functions is NOT NOT NOT NOT NOT just maintenance. Totally with you on OOP---that is a technique for managing LARGE code. But functions are fundamental, and confusing the two is a dangerous misconception._