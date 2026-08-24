---
layout: post
title: "Proctoring and Grades"
author: Austin Cory Bart
tags:
    [
        ai,
        llm,
        grading,
        computer science education,
        grade scale,
        assessment,
        testing,
    ]
---

Let us say that you were developing a new course, and needed to decide on the grading scheme. Generally, we can divide your assignments into two categories: those that are proctored in-person (exams, classwork, etc.), and those that are not (homework, projects, etc.).

Let us say that you cannot trust the unproctored grades, for whatever reason. Perhaps students are using AI tools to complete their homework, or they are sharing answers with each other, or they found people willing to complete the work for money, or the answers are on Cheggs, or your arch-nemesis in the department is sabotaging your course by giving out answers, or whatever. The point is that you believe that students who do not understand the material are getting perfect scores on the unproctored assignments.

Let us say further, for the sake of argument, that you can trust the proctored grades. We'll take for granted that you have created good exams (following proper instructional design methodology, conducted cognitive task analyses, etc.), that you have a high-quality testing center that provides a secure environment for students to take exams, and you were actively engaged with your students during lecture activities with a good team of TAs. So you have some confidence that the proctored grades are a valid measure of your students' learning.

Next, let us say that your academic program has a grade scale much like mine:

| Letter Grade | Percentage Range |
| ------------ | ---------------- |
| A            | 90-100%          |
| B            | 80-89%           |
| C            | 70-79%           |
| D            | 60-69%           |
| F            | 0-59%            |

Depending on the nature of your course, the letter grade might signify different things. In my academic program:

- You need at least a C- (>=70%) to pass certain major courses (e.g., the CS1, the Data Structures course)
- You need at least a D- (>=60%) to pass other courses

So given all of the above, what weight would you assign to your proctored vs unproctored grades? If we're assuming that they get a perfect score on the unproctored assignments, then their final grade is a function of their proctored grades (`y`) and the weight of the proctored grades (`x`):

```
final_grade = (100 - x) + x * y / 100
```

The following graph models this relationship, with the x-axis representing the weight of the proctored grades, and the y-axis representing the proctored grade score. The color of the graph represents the final letter grade, with the banded regions indicating different grade ranges.

![A Graph Depicting the Relationship Between Proctored Grade Weights and Scores in Terms of Final Grades](/images/proctored-grades-graph.png)

[You can find the source code for my graph in this Colab (Jupyter) Notebook](https://colab.research.google.com/drive/1ELswc-COgy36DallKgPh-5WoxA6tUlOP?usp=sharing)

If you look at the rightmost side of the graph, this shows the grade distribution if you only used the proctored assignments to determine the final grade; the leftmost side shows if you only used the unproctored assignments (in which case you always get an A, because we assumed they get a perfect score _somehow_). The middle of the graph is where it gets interesting.

- If you assign a weight of 40% to the proctored grades, then students only need to get a 25% on the proctored assignments to get a C- and a can tank a 0 on the proctored assignments and still get a D-.
- If you assign a weight of 50% to the proctored grades, then students only need to get a 40% on the proctored assignments to get a C- and a 20% on the proctored assignments to get a D-.
- If you assign a weight of 80% to the proctored grades, then students still only need to get a 62.5% on the proctored assignments to get a C- and a 50% on the proctored assignments to get a D-.

I want to draw attention to this: **For courses that allow a D-, unless you set your weights to greater than 40% on the proctored assignments, your students can literally skip your final exam and still pass your course.** But that's not even the worst part.

Let's say that the only proctored assignment in your course is a final exam composed of multiple choice questions with four possible answers each time. That means we're assuming _all_ of the proctored points are coming from just this final exam. No classwork graded for participation, no milestone quizzes graded lightly, no "gimme" questions on the final exam meant to bolster self-efficacy. Just one final exam, full of multiple choice questions, worth 100% of the proctored grade.

If our student with perfect unproctored grades was to be guessing completely randomly on all the questions, you would expect that they would earn at least 25% of the points. The graph below is the same as before, but with a dashed line at the 25% mark. In this model, the proctored grade weight would have to be at least 53.33% for such students to have to even think about taking the final exam, if their only goal was to earn a D-.

![The Same Graph as Before But with a Dashed Line at the 25% Mark](/images/proctored-grades-graph-dashed.png)

It's much worse if you were doing only true/false questions, where the expected score from random guessing is 50%. At that point, the average student who got perfect unproctored grades would be getting at least a C, just from guessing randomly.

Obviously, most folks don't make entire exams of multiple choice and true/false questions. But... a lot of folks often provide partial credit for longer free-response questions. Rubrics often reward partial understanding for obvious things - the kinds of half knowledge that someone who at least saw the right answer momentarily would have. It's not often that a student takes an exam and earns a perfect zero.

Usually, on my exams, I see failing students earn grades in the region of 30-50%. If I want to fail a student who earned a 50% on my final exam, I would need to set the weight of my exams to be at least 60% for a class that requires a C- to pass, and at least 80% for a class that requires a D-.

Note that there are alternative grading schemes too:

- "You must earn at least a C- on the proctored assignments to pass the course, regardless of your unproctored grades."
- "Your final grade is the minimum of your proctored and unproctored grades."
- "As long as you pass the proctored assignments, you get an A for the course."

But most LMSes don't support these, and they are not as intuitive to students. You will need to make sure that you clearly communicate about this in your syllabus, and you will need to be prepared to justify it to your students and your department.

Instead of adjusting the proctored weight, you could also build an exam where the grading is harsh and failing students earn 0-30% instead of ~60%. But this also defies students' expectations, so they will complain en masse (as if there was some actual idealized average that exam grades should fall into). Again, you will need to be prepared to justify this to your students and your department.

I am not here in this part of the blog post to tell you what thresholds to use or how you should run your course. I just wanted to highlight that the math here may be a bit surprising: if you want to fail students who are getting perfect unproctored grades, you need to set the weight of the proctored assignments to be pretty high.

# Up on the Soapbox

Okay so in _this part_ of the blog post, I'm telling you to set higher thresholds. If you're using 50% or lower, you are basically passing students who haven't actually learned the material. Stop passing students who haven't learned the material. Then they show up to my class and I have to fail them for not having the prerequisite knowledge, and they complain to me and my department about how unfair it is that they failed my class when they got a passing grade in the previous class.

I think that in the age of LLMs, and probably back in the olden days too, we need at least 80% of the grade determined by strongly proctored assignments. If you want to have loosely graded classwork, or exam questions that are basically "gimme" questions, that's fine, but then you need to make the weight even higher. Or you need to adopt one of the alternative policies. And then you also need to _fail the students who don't pass those thresholds_. Which sounds obvious, but it's so tempting to look at those borderline "59.95%" and say "oh, they were so close, they did all the homework, let's just give them a D-". Don't do it. If you want to be a good teacher, you need to be a good grader, and that means being willing to fail students who don't meet the thresholds you set.
