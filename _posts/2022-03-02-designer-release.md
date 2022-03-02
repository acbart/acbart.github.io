---
layout: post
title: Designing Designer at SIGCSE22
author: Austin Cory Bart
tags: [sigcse, research, student, kristina holsapple, sigcse22]
---

It's been over a year since my last blog post, even though I have tons to write about. Amidst the global pandemic we are all grappling with big questions about our career, and I am no different. Still, with SIGCSE tomorrow, I wanted to write up a little bit about an exciting project that my student Kristina Holsapple is presenting.

The TL;DR: Kristina is presenting our SIGCSE'22 paper about our approach to designing a new interactive graphics and game library for Python, aptly named [Designer](https://designer-edu.github.io/research). The paper is less about the library itself and more about our nascent research to determine the best vocabulary for Designer's API. Attendees can find the latest details of our talk [here on the Pathable site](https://sigcse2022.us2.pathable.com/meetings/virtual/nHTf4KPSaabPvR68t).

# Background

In Fall 2019, I taught Delaware's Introduction to Computer Science (CISC108), our CS1 for Computer Science majors. The class went fairly well overall, modeled roughly off my [Python Sneks](https://acbart.github.io/python-sneks) curriculum. We covered `for` loops, `if` statements, lists and dictionaries, and eventually reached the Final Project. I wanted to mix things up, so I decided to have them use the recently released [Arcade](https://arcade.academy/) library.

Although I was pleased with the library's power and relative simplicity compared to [Pygame](https://www.pygame.org/), the other major Python game/graphics library, my students had a lot of trouble. I blame a lot of my own pedagogical decisions, but fundamentally there were big issues with what we could do with Arcade. There was still a fair amount of boilerplate my students needed, the library required them to understand numerous things I wasn't hoping to cover (e.g., classes, tuples), there was already some technical debt and leaky abstractions showing up, and logistical headaches with installation. I'm sure many of these have been resolved since then, but the biggest issue we encountered was just explaining terms and mental models to students.

I don't think this was Arcade's fault per se, and I don't want to make it sound like it's not an impressive library with a huge amount of excellent resources. I see Arcade as being much better than Pygame. But exploring the library, I found it wasn't hitting the right sweet spot of power and flexibility for my students. But even more critically, it helped me realize that these libraries are not scientifically designed with User Experience in mind.

# HCI of Programming Languages

One of my favorite research papers is Andreas Stefik's work with [Randomo](https://dl.acm.org/doi/abs/10.1145/2089155.2089159), where an intentionally obtuse language was found to be about as easy to write in as Perl. It's easy to pick on Perl, but Andreas' work has exposed a large number of flaws in allegedly well-designed languages like Python and Java. One particularly striking result he's seen is that `for` loops had a terrible name choice. What part of the preposition makes people think about looping through a collection? Yet the idea is present in many modern languages.

Andreas has been working on an awesome project called [Quorum](https://quorumlanguage.com/), the first Evidence-based Programming Language. His direct applications are for accessibility and broadening participation in computing for folks who use assistive technologies. However, I believe the project has wider applications and in fact represents a fundamental research area that is regrettably under-explored: how can we design programming languages and APIs to maximize User Experience?

I am not a tenure-track research faculty, nor do I have a deep background in HCI or Programming Languages (although I have taken graduate courses on both subjects). Still, I cannot for the life of me understand why no one else is looking at our modern languages and saying, "Why aren't we doing things better?" I know it's a tall order to expect languages to change, and this research should really have been done decades ago. But the second best time to plant a tree is right now, and I'd love to see a future where these languages are built for humans, and align with novices' natural ways of thinking.

And so, this is what led to my collaboration with Kristina, who also shared this belief that we could find a better interface for a game library.

# Kristina

Kristina was a Freshman the Honors section of my Fall 2019 course, so she had a very different experience with Arcade. I basically speed-ran through the material for those students and then set them loose on Arcade, asking them to just make something cool. Despite coming into my class a true novice, Kristina excelled with the material and distinguished herself as a remarkable student and coder. When she approached me about research after the semester ended, I was delighted.

**Sidebar:** Kristina Holsapple is applying to graduate schools this Fall. If you see her name in the pile, I recommend you move it to the top. You'd be lucky to have her in your program. I wish all my students had her gumption, talent, and vision! 

With my supervision, Kristina began doing a review of the existing game and graphic libraries for Python, and then a wider search on evidence-based design of game libraries. Although there were many Python libraries, we found little to no research on existing efforts to find what vocabulary and concepts that novices had preconceptions of when they first started, nor any research on what kinds of designs worked optimally for those learners. We had some work to do, and that work led us to Designer.

# Designer

We were not really interested in making Yet Another Game Library for Python, but we figured eventually that's where we would end up. But our true *research* goal was to determine how such library's APIs can be optimally designed to maximize the user experience, especially for novices programmers. Our main audience is students taking an introductory Computer Science class, not an Introduction to Game Development. I think we have a lot of folks in the upper K-12 levels and in the lower Higher Education settings who could benefit from having these questions answered, even outside of the Python community.

To avoid the pitfall of focusing on technology instead of people, we decided to begin not by building a prototype, but by conducting a survey to see what we could learn. Although we have since built up a working version of Designer, the research itself is what we are focused on presenting at SIGCSE as a paper talk (first-authored, I am proud to say, by Kristina!).

# SIGCSE Paper

Our SIGCSE paper describes our three-phase study that we conducted over the past year:

1. Phase 1 was to do a pilot survey asking students about their preconceptions of vocabulary for a game library
2. Phase 2 was a second iteration of that survey 
3. Phase 3 was to analyze our survey results and draw some preliminary conclusions for our library's design

In both versions of the survey, we used a mixture of Free Response and Multiple Choice Questions, along with a lot of visuals, to query what students (especially the ones without prior game or programming experience) called different aspects of the game. Experienced developers may know terms like "Sprite", but what do novices think of them as? We asked quite a few questions, and learned some interesting things.

As an example, one of the more consistent results across the surveys was what to name the function that drew a shape on the screen. We had considered a lot of options like `draw_rectangle`, `create_rectangle`, `make_rectangle`, etc. But ultimately novices favored just `rectangle` on its own. We were concerned at first, since we emphasize how good functions have verbs - but then we realized that this was essentially the classic example of a Constructor function, which is just the noun with no verb. Keep in mind that we were looking at the true novices completing the survey, so these students have ZERO experience with Object-Oriented programming at this point in time. It would be interesting to see how this result applies more generally to naming conventions in programming languages for things like constructors.

Of course, not all of our conclusions were clear-cut. At one point, we showed students a visualization of a wizard moving across a screen, and asked them what they would call this. There were many popular choices: "animation", "movement", "gliding"... I don't think we could definitively claim a winner.

And of course, even if we did have a clear winner, we have not proven that that word would be the best choice for Designer's API. There are many factors that must be balanced for User Experience in Programming Languages and in a classroom. We do not attempt to be definitive, but to start on a long process of gathering more evidence about preconceptions as a starting point.

One of the best parts of Kristina's work is that she did all of her analysis in a Jupyter Notebook, meaning that our results AND methodology can be publicly released. You can find her [Notebook here](https://designer-edu.github.io/research/sigcse22-notebook.html).

# Future

Right now, Designer is essentially in Alpha or Beta. We've used it in the classroom, but we have BARELY begun to scratch the surface of our research questions. Our vision of a truly novice-friendly API is dependent on answering many more research questions, including but not limited to:

* What code constructs (e.g., function calls, attribute lookups, dictionary accesses) are most suited for novices in game development context?
* How do we design Designer to simplify complex ideas related to game state, interactivity, and event handling?
* How do novices interact with Designer when they start tinkering and solving tasks?
* How do we balance novice needs with instructor's pedagogical objectives?

Many of these will require think-alouds and more advanced qualitative interview techniques. We haven't got any funding yet, and Kristina is graduating next year, so I'm not sure what our exact next steps are. Still, I hope the conversations we have at SIGCSE about the paper will help guide in deciding how to proceed.

I have some hopes that Designer might be more broadly useful than as just a research experiment. Deploying it in the classroom last Fall, we found that students were fairly successful and seemed generally positive. For sure, things seemed to go no worse than when we used Arcade. This is not evidence of anything, but it is encouraging.

One area I am particularly excited about is the recent integration of Designer into [BlockPy](https://blockpy.cis.udel.edu/assignments/load?course_id=1&assignment_group_id=138), my web-based Python library. This dovetails with other efforts in the works to build the next generation version of BlockPy - more details on that to come, since we have only just started the efforts.

# SIGCSE'22

If you're at SIGCSE'22, I hope you'll drop by our presentation. You might also want to check out my other presentation about the [weirdest algorithms course I ever taught](http://algotutorbot.com). That is a more involved story for another day, although I think that site covers all the important parts. But that's unrelated to Designer, which I hope you also want to talk about at SIGCSE.

Otherwise, if you are interested in Designer, you can engage more with us about the work on our GitHub Discussion forum! For convenience, here's [a link to a page](https://designer-edu.github.io/research/) with most of the Designer related links on this page.
