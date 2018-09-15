---
layout: post
title: How Many Hours Should Students Work?
author: Austin Cory Bart
tags: [computer science education, curriculum design]
---

I'm teaching the "Introduction to Computer Science" (CS1) course at the University of Delaware this semester, which is taught using the "How to Design Programs" curriculum (Dr. Racket). I'm forcing myself to not change things up my first semester, which includes reusing the existing labs (the major weekly deliverable).

Yesterday, a student approached me after class and asked "How long should I be spending on these labs?" I told him I had no idea, but that it was a great question. I've been thinking a lot about this ever since, because I feel like we should have this data. Obviously, the answer is not a number but a distribution: some students will spend more than others. I would suspect this is a normal, long-tail distribution with a small number of students taking significantly longer than their peers. 

I asked one of the previous course instructors, and got some answers. No numbers, but he did think it should probably be shorter than it is. He described how labs became shorter and shorter over time. Still, I think we need to start collecting this data. I do have this data for my Introduction to Python course at Virginia Tech. This was a terminal introductory computing course for STEM non-computing majors, so the work expectations are different. I also could only collect time spent working on programming problems in BlockPy. That means I couldn't capture time spent on quizzes, or reading the textbook, or watching my videos, or working on projects. But at the very least, we can look at the distribution and hope it'll be similar.

![Average Hours per Week per Student](/images/python_average_hours_per_week.png)

Another way of approaching this problem is by credit hours. The U.S. Department of Education defines a credit hour as being one hour of classroom and a minimum of two hours of out-of-class student work. The CS1 at Delaware has a lab, with the total number of "required" hours totaling 4 in-class. So we're probably looking at expecting students to contribute around 5-6 hours outside of class. This is a class for majors, so it's probably not unreasonable to expect the upper end. Perhaps we should say that 6 hours should be spent each week outside of class time. Let's adjust that distribution from before accordingly:

![Average Hours per Week per Student](/images/python_average_hours_per_week_shifted.png)

Just thinking about how LONG students should spend is probably pointless if they aren't doing the right things. My colleague noted that many students don't follow the Paired Programming model or use the Design Recipes we give them. They waste a lot of time on things that don't help them as much as they think they should ("I just wanted to try this first!" sounds good, but the reality is that a lot of effort is wasted because they didn't set up the right problem).

Of course, there's more to be done to support them. Without autograding and immediate feedback mechanisms, it's almost natural for students to spend long periods of time on wasted effort. They could complete an entire lab without doing a single thing correct, and they might not know until they get the lab back two weeks later. Unit tests help, sure, but who said students are writing good unit tests? Students are also notoriously bad at seeking help when they need it - either because of busy schedules, introversion, laziness, or a lack of awareness of the support structures, many students don't get help when they need it.

On a personal note, I will admit: 6 hours of work for 4-5 classes each week seems wrong to me. It feels like we're setting up the student population for burning out. If we develop better technical support structures and gain time back, I'm not sure we should require students to reinvest it. After reading ["Learning to Program Is Easy"](https://dl.acm.org/citation.cfm?id=2899432) by Andrew Luxton-Reilly, I have started to believe that less is more when it comes to introductory computing courses. Slower paces, less material - I think the long-term outcomes will be the same, just happier students.