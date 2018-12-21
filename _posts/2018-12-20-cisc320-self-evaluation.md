---
layout: post
title: CISC320 Self-Evaluation
author: Austin Cory Bart
tags: [computer science education, curriculum, professional development, evaluation]
---

Today I finished grading my last assignment for CISC320, "Introduction to Algorithms". This course is taken by Computer Science majors in their Junior or Senior year, and is probably one of the two most intensive theory courses in our core (alongside CISC303 "Automata Theory"). From what I have seen, most schools have an equivalent Algorithms course somewhere in their CS program, covering topics like:

* Time/Space Complexity
* Graph Theory
* NP-Completeness
* and my personal favorite, Dynamic Programming 

I was fortunate to have the curricular materials of James Atlas, the former instructor at the course (now at University of Canterbury). I couldn't imagine having to put together these materials from scratch.

As I did for 1064 last Spring, I wanted to reflect on my time teaching this course. I've never taught a course at this level, so it was certainly a new experience.

# Programming Assignments

The course has a number of daily algorithmic problems, but many of the course points came from 4 programming assignments. I innovated very little with these, taking them almost verbatim from James' material. In retrospect, I wish I had taken a closer look at them, so I could tie the lecture in more deeply with them. I was surprised by how many of the students felt they were the hardest course component - even though in practice, I don't think they were that much more challenging than many of the daily algorithmic problems in terms of difficulty. Still they demanded considerably more adaption of their ideas to code.

A potentially huge improvement I envision for the spring is autograding these programming assignments. Although we cannot effectively measure students' solutions' time complexity automatically, we can at least automatically verify the correctness of their algorithms. This practice is already done with Programming Team competitions, so it's hardly innovative. Still, it seems like it'd be helpful.

# New Material

The component of the course that I liked the best was a very rushed activity near the end where students conducted White Board Interviews with each other. This is a skill that I haven't heard taught in an Algorithms course, and I'm sure there are those who would find it misplaced - such mundane matters as "finding a job" has no place in the enlightened world of Algorithmic Theory.

Here is the general flow of the activity:

1. I began with a lecture on Interviewing (including content both on interviewing and being interviewed)
2. I grouped students using K-Means based on their grades, and then made cycles of assignments within those group. Each student was assigned as an Interviewer to one peer, and as an Applicant to another.
3. I had three interview questions that I sent out via email so that no student would have their interviewer give them their own question.
4. The Applicant had to email their Interviewer to arrange the interview. 
5. The Interviewer had to film and upload the interview
6. The Interviewer filled out a form asking questions about their applicant's body language, vocal clarity, attitude, use of data structures, and algorithmic communication (e.g., ability to talk about things like Big O).
7. Each student was also assigned to Review one of the uploaded videos and fill out the same rubric again.
8. I collected and averaged the grades from the form and sent them off to students.

Major headaches ensued when some students decided (without mentioning to anyone) not to complete the assignment. I also struggled to have Canvas elegantly assign reviewers anonymously and efficiently (ultimately, the reviewing was randomized). In the future, I plan to spread out the activity over two weeks, give students more opportunities to provide qualitative feedback, and have better contigency plans for students who decide not to participate.

# Popular Topics

I always thought that Dynamic Programming was the best topic in this course. Most of my students actually preferred Graph Algorithms, which I thought were tedious. They are, of course, objectively wrong. I believe I need more activities to highlight how awesome Dynamic Programming is.

In a more serious note, I do want to incorporate some more topics of my own into the assignments. I have been enjoying the [Advent of Code](https://adventofcode.com/2018) this year, and I am taken with the idea of embedded narratives in my assignments. I think there are some opportunities to draw deeper connections between the topics and the assignments, while still providing an interesting experience to the students.

# Student Feedback

I run two surveys in my courses: an non-anonymous survey asking questions about the course's design and an anonymous survey asking questions about the course staff. The university has its own survey too, so I imagine my students feel a little surveyed-out when all is said and done. Still, I find all three useful in their own way.

Most of my feedback was very positive. I think students appreciated my focus on class activities and I had some good feedback on my enthusiasm. It seems they found my lecture well-delivered and helpful to their learning. I do see room for improvements in terms of lecture interactivity and tying the lecture back to the assignments, but otherwise only two pieces of qualitative criticism stood out to me: 

* "A couple times Dr. Bart seemed unsure with the material"
* "The last third of the course didn't seem to have many activities or graded assignments, which made it more difficult to learn the material."

## Unsure with the material?

The last time I studied Algorithms seriously was 8 years ago when I took CISC320 myself. I got an A, and felt that I understood the material well enough. Even then, I felt that it was a little dry - I could not find much zeal in what I considered to be "Tricksy Word Problems". I think this speaks to an ongoing struggle I have with theoretical content. I'm always trying to find connections to realistic scenarios for students, and the more abstract material can be difficult to connect with.

My graduate advisor had recommended I take graduate Algorithms, and I refused because it would be too much work. I believe I even uttered the phrase, "When will I need that?" I am aware of the irony that I am now very out-of-practice. Obviously, I had to do a fair amount of studying - I spent quite a few nights rereading The Algorithm Design Manual. Even now, I still feel a little shakey on some of the details of the Cook-Levin Theorem and writing good Reduction proofs. 

The critical student was perceptive, I think, in observing that on at least two occasions during the course, I can remember staring at a slide and thinking, "Wait... What's that again?" It's easy to be complacent while slides in my office ("Oh yeah, this is just the mathy part where they calculate out the time complexity coefficient, I'll fill in the details during the lecture") compared to actually presenting that material ("What's the formula for that again?"). I think that I'll do much better in the Spring, now that I've had a chance to walk through the material.

## Fatigue?

Ultimately, the curricular materials I was using didn't have a whole lot of hands-on stuff for the last unit. Instead, I relied more heavily on lecture than I have ever done in my teaching. I have been told my lectures can are animated and amusing, but you can only jazz up 3SAT transformations so much. Skiena's Algorithm Design Manual (the course textbook, which only 6 students admitted to reading) has a War Story about Skiena challenging students to give him problems that were NP-Complete, and to demonstrate the proof live on the board. I am not Skiena, and live demos are not my special skill. I do not excel at improv, and my work benefits from quiet, singular contemplation. I am sure it is a skill I will develop, but I do not believe that I will ever enjoy the prospect of designing interactive lessons on the fly.

By the midway point of the semester, I had realized that maintaining the status quo in my other course was untenable, and I had to make some major revisions. I was also (re-)designing a number of Algorithms activites on the fly. At a certain point in late November, I realized that I would have to cut back on what I could provide my students in both sections. I am not one to cut corners; I've always struggled with perfectionism. Still, everyone has their limits. I am conscious of a recent article: [Does "High-Impact" Teaching Cause High-Impact Fatigue?](https://www.chronicle.com/article/Does-High-Impact-/245159). 

I think this has been easily the most difficult semester I've had since undergraduate. I feel mentally exhausted, to the point that I promised myself I wouldn't work the two weeks after the semester was over. Back in October, I was laid out for a half week with some kind of serious sickness. When I talked to my doctor earlier this week about why I still had a sore throat, she asked if I was possibly under some kind of stress. I think I need some time to recover physically too.

# Overall

I'll be teaching Algorithms again in the Spring. I have a lot of work to do in my other course at the same time, and I'm also excited to be teaching Field Experiences in Computing. I have a lot of potential improvements I can make, but little time to make them in. Even worse, the course is heavily over-enrolled at 60 students. I think I have my work cut out for me.
