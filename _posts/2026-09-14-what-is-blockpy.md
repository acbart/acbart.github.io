---
layout: post
title: "What is BlockPy"
author: Austin Cory Bart
tags:
    [
        blockpy,
        cs1,
        programming environments,
        pedal,
        computational thinking
    ]
---
BlockPy is a very weird thing. I created it in graduate school to fulfill a specific purpose in our Computational Thinking class - to help non-computing students who were just getting started. In the very beginning, we had [Blockly ](https://www.blockly.com/)generating Python code, and I realized they could execute it using [Skulpt ](https://skulpt.org/)right there in the browser. Then I figured, hey, we have the parse tree from Skulpt, I could make it round trip the python code back into blocks. So we did that and it mostly worked. We called it "BlockPy" cause blocks and python.

But then we started using it in class, and we realized that the syntax was only a small part of the problem - students would slap together blocks that made absolutely no sense. We were running around answering the same questions about their code over and over again. So then we made the thing that eventually became [Pedal](https://pedal-edu.github.io/pedal/), which could check more than just their output but also look at the program structure and give feedback. And that worked pretty well.

Once we had automatic grading, we needed a place to put the grades. Initially we tried to put the tool into Runestone, but the infrastructure was a bit messy back then. I ended up just rewriting the backend completely in Flask, because that felt easier than using web2py. This meant we now had BlockPy the client, and BlockPy the server ("blockpy-server"). We were able to embed this into Canvas using LTI, so now our grades could be automatically transmitted to Canvas.

So students completed coding problems in BlockPy-through-Canvas, but we had kept the Readings and the Quizzes in Canvas too. Given the structure of our textbook, that meant that there would be so many items in each Canvas module, the Gradebook was a real nightmare. So we figured, hey, MCQs aren't complicated, let's just make our own quizzing engine and Markdown-based reading renderer. And that way we could keep everything in BlockPy.

I kept getting asked to teach more Python courses, first a non-majors CS1 and then a majors CS1. So I started creating more and more resources, until it turned into the Python Sneks curriculum, which we later renamed "The Python Bakery". We added more integrations and features to support Pygame, and now also [Drafter](https://drafter-edu.github.io/drafter/), and we always kind of supported MatPlotLib. At some point, we added TypeScript support so we could use it for exams in our second semester CS course. It's a hodgepodge Frankenstein of cobbled together parts, incorporating whatever I need in order to teach. It actually has this whole "Code Explanation" mechanism where a student uploads a file, it picks out key lines, and then asks them to write paragraphs of explanation. There's also a whole mechanism for human review and line-by-line feedback. There's an async task queue that does background checks for similarity detection, red flags, and fancy reports on quizzes. We're building out a sophisticated dashboard pipeline so we can give better long-term feedback.

And then this summer... I asked Fable to rewrite the whole frontend in TypeScript, React, and Pyodide. One weekend later, we have the [Studio ](https://blockpy.cis.udel.edu/blockpy/load?use_studio=true)release. Honestly, the whole thing was disturbing to watch. The first thing the AI did was find the original BlockPy directories, and build up a Golden Set of tests. That way it could perfectly replicate all the weird backend decisions I made, and get the CSS and everything just right. It managed to do in 3 days what it took me almost 10 years to create 🙃

Anyway, the whole thing runs on hopes, dreams, and ducktape. We have more analytics than I can process even with my research group. At some point it'll explode or be replaced by something better. But for now it's load bearing in far more courses than it should be. 
