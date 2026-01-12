---
layout: post
title: "Balanced Computing Literacy: A Cautionary Tale"
author: Austin Cory Bart
tags: [ai, llm, literacy, programming, computer science education]
---

**TL;DR:** Computer Science Education should pay attention to the lesson learned in K-12 English Education about Balanced Literacy, and move cautiously while trying to integrate Large Language Models into the curriculum. Specifically, we should not throw out "programming" in favor of "prompting" the way that Balanced Literacy threw out "phonics" in favor of "whole language". The fundamentals aren't going to change as much as some advocates seem to believe...

It's been 4 years since I last wrote a blog post, but this morning I finally had a crystallizing moment about something that has been bothering me for a while now, and I felt compelled to write.

The inciting incident was a blog post shared by a senior colleague titled ["Teaching Computer Science In The Age Of AI"](https://medium.com/@sweaty.phd/teaching-computer-science-in-the-age-of-ai-344f98aafda8). The post is well-written, and the author speaks with experience in the field of Software Engineering, as a teacher in the CS classroom, and as a user of LLMs. The post is a call to action for Computer Science educators to adapt their curriculum to the new reality of AI, and to embrace the use of LLMs as a tool for teaching and learning. The author argues that we should move away from traditional programming exercises and instead focus on teaching students "theory" and "prompting" skills.

> The key to unlocking this option is deceptively simple in concept; teach strict theory and industry practice, while also requiring the use of AI to produce work which conforms to strict theory and practice. In other words, we jump start the students to the end, to where people like me are now. i.e., Students must now be able to guide AI properly with strict theory and practice from day one. In this way, AI becomes not simply a coding tool, it becomes a teaching tool. A simple example to illustrate.

The author points out that this is not the first time our field has changed, and they say their intent generalizes to other fields as well. This was when I realized that this _does_ sound just like another educational movement I've heard about before: Balanced Literacy.

## Sold a Story

[Balanced Literacy](https://en.wikipedia.org/wiki/Balanced_literacy) was a movement in K-12 English education that emerged in America during the 1990s as a response to the ["reading wars"](https://en.wikipedia.org/wiki/Reading_wars) between "Phonics" and "Whole Language" approaches. The idea was to combine the best of both worlds, and to provide students with a balanced approach to reading instruction. However, in practice, Balanced Literacy often ended up being more of a whole language approach, with a heavy emphasis on "authentic" reading and writing activities, and a de-emphasis on phonics instruction. For those not familiar with these two approaches:

-   **[Phonics](https://en.wikipedia.org/wiki/Phonics)**: A method of teaching reading that emphasizes the relationship between letters and sounds. Students learn to decode words by sounding them out, and they learn to encode words by spelling them out.
-   **[Whole Language](https://en.wikipedia.org/wiki/Whole_language)**: A method of teaching reading that emphasizes meaning and strategy instruction. Students learn to recognize words as whole pieces of language, and they learn to use context and prior knowledge to understand text.

To put it bluntly, the evidence shows that the Whole Language approach is a disaster. [Large-scale meta-analyses](https://www.researchgate.net/publication/387497935_Structured_Literacy_Compared_to_Balanced_Literacy_A_meta-analysis) have shown it to be significantly less effective than Systematic Phonics instruction. Even worse, these gaps exacerbated existing inequalities in education. Students who were already struggling to read tend to do even worse than the ones who find reading more natural. It gets worse over the long term for kids, with a mean difference in effect size of `.28`. The kids who were taught with Balanced Literacy were significantly less likely to be able to read and write at grade level, and they were more likely to struggle with reading and writing throughout their lives.

**It turns out that beginning/struggling readers do not become accurate, fluent readers by guessing from context.** They need systematic support in learning the relationships between letters and sounds, and they need lots of practice with decoding and encoding words. The idea that you can just throw kids into a "rich literacy environment" and they will magically learn to read is a myth. It doesn't work. And it has been shown to be harmful to students, especially those who are already struggling.

If you have never heard of this, I strongly endorse the ["Sold a Story: How Teaching Kids to Read Went So Wrong"](https://features.apmreports.org/sold-a-story/) podcast by Emily Hanford for more details. Their detailed investigation into this debacle is eye-opening. There are transcripts if, like me, you don't want to sit around and listen to a podcast for hours.

As a concrete example, one state that moved away from Whole Language back to Phonics saw amazing results. Dubbed the [Mississippi Miracle](https://en.wikipedia.org/wiki/Mississippi_Miracle), Mississippi was ranked 50th in the nation for reading proficiency in 2013, but after implementing a new literacy program that emphasized phonics instruction, they rose to 28th in the nation by 2019. There were a lot of other factors as well (treating teachers like humans, for example), but when they got rid of ["Vibes-based Literacy"](https://www.newyorker.com/news/annals-of-education/the-rise-and-fall-of-vibes-based-literacy) and moved back to a more systematic approach, they saw significant improvements in reading proficiency among their students.

Can we stop for a second and appreciate that that "Vibes-based Literacy" article was published _in 2022_? The term ["Vibe Coding"](https://en.wikipedia.org/wiki/Vibe_coding) arrived in February 2025 (less than one year ago), with a Tweet. Heck, even a Tweet in 2025 tells you something about _that_ movement.

## Vibes-based Coding Literacy

I think you can probably see the connection I am trying to make. A "Whole Language" straw man approach to Computer Science education would:

-   Prioritize authentic, end-to-end artifact production (apps, websites, games, data products) from day one,
-   Treat low-level mechanics (syntax, control flow, variable state tracing, debugging discipline) as learnable incidentally rather than through deliberate practice,
-   Encourage students to rely on AI to fill in the code details while they focus on intent and meaning,
-   Use "in-context mini-lessons" when something breaks rather than a deliberate sequence and scoped material.

Those principles would then lead to the following bad pedagogical decisions:

-   **Less Coding**: Few to none programming exercises and heavy emphasis on prompting exercises,
-   **Less Skills**: De-emphasis on explicitly teaching skills related to coding fundamentals (syntax, state, control flow, etc.),
-   **More Vibes**: Emphasis on accepting the output of LLMs as "good enough" without understanding how it works.

Now, the author of the original article doesn't spell it out like this, so I want to be careful about putting words in their mouth. But I have now seen many variations of the same idea, and now I've even seen senior colleagues seriously promote "Vibe Coding". That's the most dangerous version of this, and it is going to get people killed when someone vibe codes a [Therac-25](https://en.wikipedia.org/wiki/Therac-25). And that's assuming they can even make something functional. As Computer Science Educators, we should be encouraging _less_ vibes and more control. This means making sure that students do more to emphasize testing, validation, debugging, etc.

**But I don't think you can get those skills without writing code yourself.** They simply don't make sense without the context. This is the lesson that the Balanced Literacy movement taught us. You can't just eyeball a word or a program and hope that your brain will magically understand it. You have to systematically engage with the details, and you have to practice doing it yourself.

I don't want to make too strong a claim, but if my straw man is what you want to do, then you should be aware that when K-12 schools tried the comparable idea in English class, it didn't work. Maybe it will work in Computer Science Education, but the analogy is against you.

## Good Vibes

I do think there are some good ideas in the original article, and I like some of the things being advocated for:

-   **No Vibes**: Some advocates say the opposite of "More Vibes" and promote more testing. I'm not opposed to this, and the past year we've worked hard to integrate more of this material. For instance, our exams now have questions where students write test cases based on a problem spec, and we run their tests against correct and incorrect reference implementations. However much testing we have in my course, we could probably always stand to put more in.
-   **More Reading**: Seeing larger programs is probably helpful. We have multiple hundred-line programs that students read around the same time as our projects, and that might help them see how the concepts they are learning are used in practice. We ask them conceptual and code questions about these programs on the exams. This is probably a necessary step in their progression, and we should give them more of these.
-   **More Authenticity**: Having more realistic projects is motivationally impactful. Our final project is a web application in Python, using a pedagogical library I've been developing ([Drafter](https://drafter-edu.github.io/drafter/)). They can make a real program with a real GUI. Some would probably prefer to be learning Flask or Django, but the pedagogical library lets us stay focused on the concepts and not get bogged down in the details of a large framework. The story on non-global state, testability, and functional decomposition comes through much more clearly since the library is designed to support those things.

## Are LLMs Bad?

I use LLMs a lot now. I have them in my coding environments, and I've been developing software with them. It's crazy how much I can get done when they work correctly. A massive refactoring happens quickly, and I can just step through and validate the results. When I'm writing and brainstorming, they pop up with ideas and I can generate big lists. Parts of this blog post were suggested by AI, and sometimes I even accepted its suggestions. They do help!

But they help because I had a world-class education from one of the best Computer Science undergraduate programs in the world. I'll always remember the pain and stress of writing my first Self-balancing Binary Search Tree, and how confused I was by the recursive rotations in the AVL. It finally made sense after office hours, and then I understood recursion in a way that I didn't before. I remember the hassle of writing my own simple `LinkedList` struct in C for my Operating System Shell project, where I really had to organize my code and basically re-implemented classes. I remember so many little moments when I was down in the weeds fighting with some stupid bug and struggling to understand a language concept.

I'm not interested in passing along my suffering. I hate hazing. If I can make my students' lives better than mine, I want to do that. I make autograders and pedagogical web libraries and free textbooks because I want my students to have a better experience than I did. If I thought that LLMs could help with that, I would be all for it. But I don't think LLMs can get rid of that. In my experience they are a tool that can help you get things done faster when you already know what you're doing, but they don't let you short-circuit the learning process.

The gap will get bigger as students progress, until you have juniors and seniors who don't know how to put together larger projects. And the LLMs don't seem to be scaling well to larger projects, so they won't be able to help them with that. The students will be in a very bad position when they get to the real world, where they will need to be able to write code and understand how it works in order to be effective.

That said, there is increasingly excellent evidence that they _can_ help, when they are used _correctly_. There are great projects that make Socratic intelligent tutors, adaptive learning systems, etc. The most [successful systems seem to require human oversight](https://arxiv.org/html/2510.03719v1). [Folks who rely more on prompting](https://library.apsce.net/index.php/ICCE/article/download/5679/5611/6851) and less on coding don't seem to develop the intellectual skills to the same extent, compared to students who do not. [Some usage can actually be helpful, if used correctly](https://arxiv.org/abs/2409.09047). [But if you offshore your thinking](https://www.mdpi.com/2076-3417/14/10/4115), you're likely to be less good at thinking.

## Assessment is Key

So if not embracing AI, what can be done? The author originally proposed three options:

1. Restrict AI
2. Change nothing, hope it all goes away (Ostrich)
3. Embrace AI, and change the curriculum to focus on theory and prompting

They rejected option 1 because they said it would be impossible. In my view they're wrong. Assessment has become _more important_ and _harder_. It has not become impossible. We still need to assess their understanding of state, control flow, validation, etc.

The biggest thing is in-person proctored exams. Without in-person proctored exams, it becomes virtually impossible to claim that learning outcomes are being measured reliably. They can be on the computer, they can be on paper, they could be oral, or any number of different formats. In my intro curriculum, we use computer exams, where they get a coding environment (BlockPy) with full Python execution, but no access to the internet.

Those exams will be high stakes. You can reduce their stakes by having more of them, and by making them more frequent. In our course, we have made them 70-80% of the course grade, and there are 5 of them spaced out over the semester.

You also need to make sure that the exam is specifically assessing skills that students practiced via projects and homeworks. It must be made clear to learners that, yes, we can't stop them from using an LLM to complete their homework, but they will not be able to use an LLM on the exam. If they want to do well on the exam, they need to practice doing the work without an LLM. And in an ideal world, LLMs could help us create better exams that are adapted specifically to their project-level work.

I believe my curriculum is already focused on a good set of fundamentals and theory. I do think there's some room for AI to improve the curriculum, but the fundamental topics don't need to change as much as some advocates seem to believe. If you'd like to see my curriculum, please do check it out: [The Python Bakery](https://python-bakery.github.io/). I'm happy to hear from folks who think it could be improved.

## Back to the Article

I really like the article as written, because the author proposes a testable hypothesis. They say that using their new approach, students "will learn theory and practice better and faster". And I think the Balanced Literacy movement helps us understand that we need to assess these claims at multiple levels and time points:

1. Practice: What happens if we give the [Rainfall Problem](https://dl.acm.org/doi/abs/10.1145/2828959.2828970) to students who have been taught with the new approach vs. the old approach? Most students fail at Rainfall still, so if the new approach is better, we should see a significant improvement in the number of students who can solve Rainfall after being taught with the new approach.
2. Theory: What happens if we administer the [BDSI](https://dl.acm.org/doi/full/10.1145/3470654) to students who have been taught with the new approach vs. the old approach? What about other theoretical measures of CS understanding?
3. Long-term retention: What happens when we have novices in their first "serious" software engineering class try to work on a larger-scale project? The kind you would complete in an upper-division course? As an example, I had my Advanced Web Technologies students develop a full-stack CRUD web application using React, Tanstack, NestJS, and PostgreSQL. They needed to have it deployed with user authentication, CORS, etc. Can students who use this new approach complete such a project?

I'm looking forward to seeing what research is done in the CS Ed community in the next five years to test this hypothesis. It's possible that I am completely wrong and my connection to Balanced Literacy was unfounded. If so, then I will probably need to buy a lot of folks a beer, and scramble to catch up with this new paradigm.

But I don't think so. From everything I've seen with the evidence so far, the students who get taught this new approach are in just as much danger as all those poor kids who were held back by Balanced Literacy. I hope I'm wrong, but I fear I'm not.
