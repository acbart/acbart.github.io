---
layout: post
title: Review of CS1 Lit Review
author: Austin Cory Bart
tags: [cs1, teaching, pedagogy, literature, review, research, paper]
---

Before the end of last year, I posted a blog asking, "What do we know about CS1?" The goal was to list some things that I felt we had good evidence for, based on research I'd read over the years. It wasn't a deep dive into the literature, just shooting from the hip on a subject I theoretically know a lot about. But when I posted about it on Twitter, I was surprised when Mark Guzdial recommended a very lengthy paper answering my question almost exactly! I was relieved to learn that it had only appeared in the past few days, so I wasn't a bad researcher for missing it. However, I was very surprised by some of the results identified in the paper. I think my main takeaway is that we know less than I thought.

The entire paper is worth a close read, and I've now done two passes. If you're interested in doing research at the CS1 level, I think it's worth a read yourself. However, I wanted to summarize the blog post from a teacher perspective, hopefully making the salient results accessible. Therefore, you should view this blog post as a focused summary, not a complete review or abstract of the paper. In other words, I might skip some good stuff if I can't find a connection to my teaching!


# 2/3/9. Introductory Programming: A Systematic Literature Review

The [paper in question](https://www.researchgate.net/publication/329544316_Introductory_Programming_A_Systematic_Literature_Review) is the report from a 2018 ITiCSE Working Group on research in CS1. The authorship list is impressive, with a lot of great folks from around the world (Andrew Luxton-Reilly, Brett Becker, Amruth Kumar, Judy Sheard, and many more). The citation count clocks in at an astounding 735 papers, and there's about 32 pages of content besides the references. In doing their literature review, the authors report that they read over 5056 papers. I was a little overwhelmed just skimming through.

The paper does a great job summarizing their workflow and how they synced up their qualitative analysis in sections 2 and 3. It seems like they cast a wide net over a large dataset. I am a little irked that they stuck with only CS1 research - which means that all my work (tagged for CS0) for the past few years didn't make the cut, even though it's relevant in a few places. Still, I can hardly blame them for needing to draw the line somewhere.

# 4. Little Research on Assessment

Very little assessment research has been done, compared to papers on Students, Teaching, and Curriculum. In fact, only about 192 of the final 1666 papers were about assessment (~12%). This mirrors the results from one of my favorite dissertations on Computational Thinking ([2013 Weinberg](http://people.cs.vt.edu/~kafura/CS6604/Papers/CT-Existing-Scholarship-Research-Dissertation.pdf)), which similarly found that only 17% papers in their corpus were about Assessment. I've always thought we talked too little about assessment, and that assessment was hard. I think we need to do better.

# 5.1.1 Visualization Tools Are Useful

As expected, the paper brings up the usefulness of using visualization tools to overcome a variety of misconceptions, e.g., issues with understanding program/memory interaction. Of course, "visualization tools" is a pretty wide category of software. I think the take-away is that such tools are powerful, but you should should check into each tool and see what it's used for. 

# 5.1.2. Code-reading Is Prerequisite to Problem-solving

> "The relationship between code reading and other skills, notably code writing, has also been widely studied, leading to the conclusion that code-reading skills are prerequisite for problem-solving activities including code writing."

Ever since I read Portnoff's somewhat-controversial ["The introductory computer programming course is first and foremost a language course"](https://dl.acm.org/citation.cfm?id=3152433) (2018), I have started believing in a connection between language-learning and learning to programming. I think there's a lot to the idea that instructors might want to try more things that let students read high-quality code and not just solve problems.

# 5.1.2. Learning to Program is Hard

Andrew Luxton-Reilly wrote one of my favorite CS Ed papers, called ["Learning to Program is Easy" (2016)](https://dl.acm.org/citation.cfm?id=2899432). That paper effectively argues that programming isn't hard, as long as you take plenty of time and have support. However, CS1 courses tend to have a lot of dense content, and therefore CS1 can be a challenging time. The authors identify several papers that highlight how, even after students complete a CS1 successfully, many of them struggle with "basic" programming tasks like the [Rainfall problem](https://dl.acm.org/citation.cfm?id=2632346). Instructors need to remember to set expectations appropriately.

# 5.1.2. We Aren't Sure About Debuggers

A lot of early environments (e.g., Dr. Racket, Thonny) have sophisticated built-in Debuggers. But for the most part, we don't really know if these help or not. 

# 5.1.3. We Aren't Sure about Enhanced Compiler Error Messages

A number of research projects have focused on improving the error messages generated by Compilers. Some projects have found successful results, some have found no significant improvement. The back-and-forth of ECEM mesages is referenced, and I think you can pick up that research thread from [this SIGCSE'17 paper](https://dl.acm.org/citation.cfm?id=3017768) most recently. My own research project with Luke Gusukuma and Dennis Kafura didn't make the cut, but I think we have [some promising data](https://dl.acm.org/citation.cfm?id=3231002) on the value of generating better messages for students.

# 5.1.3. A lot to Learn from Student Data

To be a little critical of this report, section 5.1.3. cites a lot of research without really making judgement calls on much of it or summarizing lessons. The paper briefly describes how various papers have analyzed a topic ("X studies Y"), but do not explain what the results were or how significant they are. I don't have the energy to dive into each one right now, but I think that's a job to be done in a future blog post (perhaps not written by me). For now, I'll repeat the paper's claim that there's a lot to learn from student data.

# 5.2.1. Student Attitudes Are Still Rough

Many students seem to develop negative attitudes in CS1. The paper mentions "a concerning decline in affective factors during the first programming course, a challenge that persists more than [ten years](https://dl.acm.org/citation.cfm?id=2677235)" after it was first tackled in a 2004 paper.

The paper does comment that most of the research conducted in this area is [WEIRD](https://www.apa.org/monitor/2010/05/weird.aspx) and has little replication. Take it all with a lot of salt.

# 5.2.1. Self-efficacy Is Tough to Fix

A lot of research projects have tried to improve students' self-efficacy, but stuff that worked in other domains doesn't always seem to work for CS1. There seem to be gender differences, and different subgroups have different reactions to self-efficacy interventions. Apparently, only the "most-engaged students are good at predicting their performance in a course." It's not clear to me that Self-efficacy is the only target, but it seems to be a tough one to make improvements on - focus on making first impressions good.

According to a later section, Self-efficacy can be a major factor for students who are at risk of dropping out. This is particularly true of women ("Multiple studies have found that females have lower self-efficacy when enrolled in an introductory programming course and that this can affect performance and persistence"). They list a few papers that had successful interventions: [cooperative learning exercises](https://dl.acm.org/citation.cfm?id=1047495) sounded like the most generalized one, although a [peer mentoring program](https://dl.acm.org/citation.cfm?id=2538923) also worked.

# 5.2.1. Growth Mindset Might Help

[Cutts et al.](https://dl.acm.org/citation.cfm?id=1734409) report some success by teaching students about the concept of mindset and using messages embedded in coursework feedback to reinforce a "Growth Mindset". They had three interventions:  

* Tutors taught mindset to students
* Growth mindset feedback messages were given to students on their work
* When stuck, students were encouraged to use a crib sheet with pathways to solve problems.

The end result was significant gains in test scores.

# 5.3.1. Spamming Hints is Bad

Students who spam hints from automated systems without developing and submitting code tend to not succed ([Etsey '17](https://dl.acm.org/citation.cfm?id=3017790)).

# 5.3.1. Pair Programming helps Confidence

> "[Wood et al.](https://dl.acm.org/citation.cfm?id=2667201) found that when students were matched in pair-programming teams based on their confidence levels, the matched pairs were more likely to successfully complete assignments. The effect was strongest for the least confident students."

# 5.3.1. Aim for Inexperienced Students

> "[Whittinghill et al.](http://asee-coed.org/index.php/coed/article/view/Whittinghil_Improving) found that when the course was directed at the inexperienced student, those with little interest in programming at the beginning of the semester had a similar level of interest to the rest of the class at the end of the semester"

# 5.3.1. Peer Mentoring Seems Limited

> "On the other hand, after encouraging students who performed poorly on an early exam to attend voluntary tutorial sessions conducted by undergraduates, [Punch et al.](https://peer.asee.org/measuring-the-effect-of-intervening-early-for-academically-at-risk-students-in-a-cs1-course) note that few students attended and the intervention had little effect on the final course outcomes. Similarly, [Hare](https://dl.acm.org/citation.cfm?id=2458618) reports that the use of peer mentors did not have the anticipated effect of increasing student success. Further investigation revealed that many of the students had competing time constraints, such as jobs, which prevented them from taking advantage of the peer mentoring opportunities."

# 5.3.2. Women Tend to Judge Themselves Too Harshely

> "Although women indicated a higher previous achievement in mathematics, female students rated their programming self-efficacy negatively while males rated theirs positively and predicted that they would perform better. Males did perform better at programming early in the course, but the final pass rate for females was significantly higher than that for males" ([Quille et al](https://dl.acm.org/citation.cfm?id=3059048)

# 5.3.2. Grade and Prior Experience within Genders Correlates to Advancement

> "A multi-year study at a single university found that of the students enrolled in CS1, a lower percentage of the women intended to major in computer science. Male students showed a significant correlation between grades and continuing to CS2, but there was no such correlation for female students. Among self-taught students and students with no prior background, males were more likely than females to persist to CS2." ([Babes-Vroman et al](https://dl.acm.org/citation.cfm?id=3017773))

# 6.2.1. Mastery Learning is Good

> "There is some evidence that mastery learning is of more benefit to weaker students than to stronger students because it helps to "level the playing field", and that those benefits continue into subsequent courses." ([McCane 2017](https://dl.acm.org/citation.cfm?id=3013501)).

> [Purao et al](https://ieeexplore.ieee.org/abstract/document/7553543/) writes that "... teaching using self-paced learning should attend to student motivation and ensure that students continue to study at the pace required to complete the course material. They also identify a trade-off between allowing students to work at their own pace and the benefits of working with peers." The solution was to offer scheduled lab times with instructors who can offer targetted help.

The lit review notes that there has been relatively little application of Mastery Learning. They mention that it's probably because of the difficulties inherent in setting such stuff up. I've had a lot of succes with mastery-based learning in my Python Sneks curriculum (Bart 2019, for SIGCSE), and I hope to push that further.

# 6.2.2. Problem-based Learning Is Mixed

> "Although several studies using problem-based learning have reported increased motivation and social interactivity, and asserted the success of the approach, there is little consistent evidence of improvement in learning of content knowledge. Some case studies report learning gains in problem decomposition and program-testing strategy and overall improvement in pass rates or in specific exam questions. In other cases no difference in learning was observed, students without clear guidance struggled to solve the problems effectively, and concerns were raised about the level of theoretical insight acquired compared to those experiencing traditional lectures."

Based on this, I think you can largely count me out on PBL for CS1.

# 6.2.2. Studio Learning is Understudied

Studio Learning only had a few studies - they suggest it might lead to higher self-efficacy and enjoyment, but that it wasn't leading to any improved content knowledge acquisition. But really it doesn't seem to be studied enough to be relied upon.

# 6.2.3. Costs of Inverting Are High but Probably Worth It

Unsurprisingly, it is time consuming to invert a classroom. I know this from experience, and they provide [a paper with statistics](https://dl.acm.org/citation.cfm?id=2538943). 

But they are still worth it when you can do it. "The high cost of course development may be worthwhile, with reports of high levels of engagement, a greater sense of community, improved retention, and improved performance in exams." As I said before, you can count me in for Flipped Classrooms!

But they're not completely perfect. "However, the additional work imposed on students may not always provide benefits. Quizzes used to determine whether students had completed the preparation before class meetings were reported to have no benefit, and well structured online courses may result in performance that is equivalent to the flipped approach."

# 6.2.3. Cognitive Apprenticeships May Work

CA includes "Demonstrations by experts", "worked examples", and "individualised feedback (coaching)". This apparently leads to "reduction in lecture and increased student agency." A specific kind of CA named "[Extreme Apprenticeship](https://dl.acm.org/citation.cfm?id=1953196)" reduced lectures while increasing hands-on labs and feedback, leading to "significant improvements in student understanding and higher performance in subsequent courses." There's some caution here that more research might be needed on the subject, but those ideas really resonate with me too.

# 6.2.3. Interactive Textbooks Can Help

"The completion of practice exercises in an online textbook has been highly correlated with improved exam performance." ([Seeling 2016](https://www.computer.org/csdl/proceedings/fie/2016/1790/00/07757620-abs.html))

# 6.2.4. Face-to-face Still Helps!

> "In a comparison between an online course and a flipped classroom using similar resources, completion of ungraded practice exercises was correlated with exam performance, but fewer students in the online course completed the exercises compared to those attending in person." ([Campbell 2016](https://dl.acm.org/citation.cfm?id=2899457))

> "Given the choice of enrolling in a face-to-face or an online version of an introductory programming course, more than 80% of students chose the face-to-face course, based primarily on a preference for attending lectures, rather than other reasons such as prior experience or perceived workload [271]." ([Horton 2016](https://dl.acm.org/citation.cfm?id=2844578)).

I was pleased about this one! It matches my own biases :)

# 6.3.1. Use a Variety of Course Contexts

Here's my first gripe - none of my research on course contexts was cited! They mention that there's been few formal studies in this area, but that's literally what I did my dissertation on. It even led to two SIGCSE papers, one of which got a Best Paper and was published in [ACM Inroads](https://dl.acm.org/citation.cfm?id=3017708). Of course, I was focused largely on CS0, and some of my earlier findings suggest that the population is (importantly) different from CS1's. So I suppose it makes sense that my work was excluded. I've been using some of my dissertation's questions in my other CS1-esque courses, and my personal takeaway is that different contexts appeals to different students. Finding a one-size fits all is silly, even if some contexts do seem to be more broadly popular than others. Find several popular contexts, collect high-quality material around them, and let students have some agency. Use all the [MUSIC letters](http://www.themusicmodel.com/).

# 6.3.2. Peer Review Helps

> "Regularly engaging in peer review of programming code reportedly helps to correct low-level syntax errors, and promotes discussion of higher-level design and implementation issues." [(Hundhausen 2009)](https://dl.acm.org/citation.cfm?id=1508972)

> "Students engaged in reviews appear to be more effective and more engaged when the reviews are conducted collaboratively rather than individually". [(Hundhausen 2011)](https://dl.acm.org/citation.cfm?id=1953201)

# 6.3.2. Peer Instruction Helps, Probably?

> "[Peer instruction](https://www.peerinstruction4cs.org/), which makes use of clickers as one component of a more structured pedagogy, has shown positive results. Students report that they like the approach, and it appears to improve their self-efficacy and retention. However, peer instruction is not uniformly successful; it relies on instructors to clearly communicate the purpose of the activities and to use grading policies that do not penalise incorrect answers during the peer instruction process; and it should be supported by other changes to course delivery, such as requiring students to spend additional time preparing before class. Despite several positive outcomes resulting from peer instruction, there appears to be little evidence that it improves performance in final exams."

It's interesting that this is the conclusion of the paper. I recalled reading research that suggested Peer Instruction was helpful for student learning, when I wrote my original blog post last week. For example, this paper by [Zingaro in ITiCSE'14](https://dl.acm.org/citation.cfm?id=2591711) seems fairly compelling, and I clearly recall seeing a [great presentation by Beth Simon at SIGCSE'13](https://dl.acm.org/citation.cfm?id=2445250) that convinced me I should use clickers. So... I think I disagree.

# 6.3.2. Pair Programming Helps... Sorta?

> "Students working in pairs produce work that is of higher quality than students working alone, but the improved performance does not extend to individually assessed work."

> "Pair programming may provide greater support for students with low academic performance, resulting in increased pass rates and improved retention, but provides little measurable benefit for more experienced students. Several studies have also reported that the benefits of pair programming are more pronounced for women."

These results surprised me. There's a lot of push for Paired Programming out there, but they found 4 papers that suggest it doesn't have impact on individually assessed work ([Mcdowell 2003](https://ieeexplore.ieee.org/abstract/document/1201243/), [Radermacher 2011](https://dl.acm.org/citation.cfm?id=1953346), [Williams 2003](https://ieeexplore.ieee.org/abstract/document/1237973), [Wood 2003](https://dl.acm.org/citation.cfm?id=2667201)). I see the benefits, but I guess they don't include cognitive ones. I feel like I'll be moving to an optional XP model for my courses past the first module, for any students who hate Paired Programming (as I did).

# 6.3.2. Think/Pair/Share Works

> "An experiment comparing the use of think-pair-share (TPS) with a traditional lecture format in a single class showed that students learning with TPS believed that it helped them to learn. On a subsequent quiz the TPS group scored significantly better than the control group." ([Kothiyal 2014](https://dl.acm.org/citation.cfm?id=2591739))

# 6.3.2. Group Learning is Good

> "Cooperative learning activities that assign specific roles to each student in a team are reported to improve motivation, confidence, problem-solving ability, individual performance on exams, and performance in subsequent courses. Although collaborative activities are easier to implement face to face, the benefits of working collaboratively with peers extend to distributed environments when supported by collaborative tools."

To me, this sounds like [POGIL](http://cspogil.org/Home). So I guess that's a model to follow. 

# 6.3.3. We Still Don't Know How to Order Topics

As I expected, they didn't find any modern papers with empirical evidence to suggest how you should order topics. Plenty of people arguing one way or the other, but nothing more concrete. A lot of people are proposing specific topics from upper-division areas (e.g., Cryptography, databases, concurrency), but not backing them up with anything tangible.

# 6.3.3. TDD's Effect is Unvalidated?

I have been heavily influenced by my interactions with Steve Edwards, who's one of the smartest researchers I know. Steve's written many papers about the benefits of TDD in CS1, and I think his research has more or less taken it as a given. I was therefore surprised that the Lit Review didn't provide any papers with evidence to support the value of TDD in CS1. I hope Steve or someone in this area gets a chance to talk about this; I'd like to hear what might know about justification in this space.

# 6.3.3. Many Exercises Are Good, I Guess?

The paper describes a number of research studies that incorporate many exercises, and describe the impact of various twists on that theme. I have always relied on programming exercises in my course, and I guess they're also taken as a given. In many ways, my exercises match my exams, so I think it's a reasonable expectation that completing them improves exam outcomes.

I want to reference a paper I read a while back, about the [Many-Small Programs approach](https://peer.asee.org/weekly-programs-in-a-cs1-class-experiences-with-auto-graded-many-small-programs-msp). It seems like they have some interesting evidence to suggest that you should keep exercises relatively small and disconnected.

# 6.3.3. Live Coding Helps

> "In an experiment, [Rubin](https://dl.acm.org/citation.cfm?id=2445388) found that students who were taught using live coding achieved higher grades on programming projects than students who were taught using static examples that are not modified live in front of the students."

# 6.3.3. Explicit Processes May Not Stick

I have a lot of opinions on "How to Design Programs", which I will write up at some point. I just spent the past semester teaching with their curriculum, which advocates for teaching students a "Design Recipe". They argue that giving students a series of concrete steps to guide their development can help them complete problems more effectively.

[Castro 2016](https://dl.acm.org/citation.cfm?id=2844574) did an experiment where HtDP students solved a new kind of problem. It sounds like they weren't really able to apply the design process, although the paper suggests they may need to do more to teach that skill.

I will note that the Lit Review paper does not seem to cite any evidence for HtDP being a superior approach. I have searched for such evidence myself. I have not found anything particularly compelling (although Kathi Fisler's progress on Rainfall has some merit). For a process that is 10+ years old, I am relatively unconvinced about the whole thing. Again, I think this merits a longer blog post (one that I am sure will get me in trouble with some folks), but from my reading of this paper, there's not much evidence to support trying to teach students some kind of clear process.

# 6.3.3. Metaphors Help Short-Term, Maybe Long-term?

The paper finds few studies that explicitly demonstrate evidence for the use of metaphors and analogies. They did find a study with short-term gains ([Cao 2016](https://dl.acm.org/citation.cfm?id=2960313)), but nothing long-term. However, I think this is one of those things that everyone is going to use no matter what, because it's just a basic pedagogical tool. I think, more likely, there are bigger open questions about SPECIFIC metaphors than whether they work in general.

# 6.4.11 Autograding Is Good

> "After careful consideration of the effects of automation and how it should be applied, [Wilcox] presents results from a highly automated introductory programming course, concluding that carefully managed automation can increase student performance while saving teaching resources." ([Wilcox 2015](https://dl.acm.org/citation.cfm?id=2677226))

# 6.5. Undergraduate TAs Are Good

> "Several studies focus on hiring undergraduates to participate as teaching assistants (TAs) in introductory programming courses, thus allowing upper-level students to contribute, take responsibility, and learn the content in greater depth. This approach provides several advantages, such as community building, participatory development of learning materials, high engagement and feedback, and increasing the sense of responsibility and interest." ([Decker 2006](https://dl.acm.org/citation.cfm?id=1121358), [Vihavainen 2013](https://dl.acm.org/citation.cfm?id=2462508))

# 7. Recursion or Iteration? Eh.

The paper references a citation for an [ICER'12 paper by Mirolo](https://dl.acm.org/citation.cfm?id=2361296) that tries to draw some conclusions about whether there's any difference in difficulty when teaching recursion (through Scheme) and iteration (through Java). They conclude that there doesn't seem to be much difference in difficulty. I don't know that we can really generalize that beyond the languages and teaching approaches they use. In general, I'm open to the idea that both paths lead to success and you should not choose based on an expectation that one is easier than the other - but clearly the question is still open.

# 7.1. Programming Languages. Oh lordy.

> "[The programming language wars](https://dl.acm.org/citation.cfm?id=2661156) have for decades played a major role in computing education publications, and were assured of a place in our search."

> "Given the perennial question of which language, if any, is best suited for the teaching of introductory programming, many papers describe empirical comparisons between languages, often finding no significant difference in learning outcomes, but sometimes finding differences in student satisfaction."

> "The choice of programming language is clearly a highly subjective one and is driven by many competing factors. It is clear that the literature will continue to host publications making the case for different programming language choices — and that no paper or series of papers will ever put an end to the debate, as no programming language will ever satisfy all of the conflicting requirements of an introductory programming course."

You want my take? Let's all stick to Python, Java, and maybe one other language for CS1 (maybe JavaScript?). I just want to share resources and tools with other people, and I need everyone using the same small set of languages. But hey, this is wishful thinking - I'm sure by the time I retire we'll have made no progress in shrinking the pool.

# 7.2. Programming Paradigms. Yeah, Nothing There Either.

> "As with programming languages, each paradigm has its proponents, and after full consideration of all the papers it is by no means clear that any paradigm is superior to any other for the teaching of introductory programming."

Again, let's pick a couple that we all stick to and make progress on. 

# 8.1. Students Make Fewer Mistakes on Computer Exams.

> "Students working on computers produce more accurate code than on paper." ([Lappalainen 2017](https://jyx.jyu.fi/handle/123456789/56306))

There was some interesting discussion in that paper - they mention there was a bigger impact on some of their data that they didn't have room to include. Basically, it does seem like computer based exams allow for better results from students.

# 8.1. Cheat-sheets Are Good.

> "Exploring the use of a "cheat sheet" of hand-written notes in a closed-book written exam, de Raadt found that thoughtfully prepared cheat sheets were found to improve student performance and support students without incurring the disadvantages of openbook exams." ([De Raadt 2012](https://dl.acm.org/citation.cfm?id=2483725))

# 8.1. Collaborative Exams Might Be Good

> "Sindre et al report the use of open-ended group assignments and the use of collaborative exams where students work in small groups to solve a set of problems. Collaborative exams were most beneficial to mid-performing students and worked best when group members had comparable levels of ability." ([Sindre 2003](https://dl.acm.org/citation.cfm?id=776900))

# 8.3. We Should Stop Testing Multiple Concepts At Once

> "Another analysis of exam papers from multiple institutions by [Petersen et al.](https://dl.acm.org/citation.cfm?id=1953340) finds that most questions focus on code writing and involve multiple concepts, making them challenging for novices. In a follow-up study, single-concept questions were trialled and were found to be predictors of overall performance on code-writing questions. A study by [Zingaro et al.](https://dl.acm.org/citation.cfm?id=2157215) found that these single-concept questions can simplify the marking process and provide more accurate feedback. A more recent study by [Luxton-Reilly and Petersen](https://dl.acm.org/citation.cfm?id=3013500) analyses exam questions to determine the syntax elements involved in each question, giving a detailed picture of what is assessed and confirming that questions typically involve multiple conceptual components."

# 8.4. Pop Quizzes Could Be Useful... But...

> "One mechanism proposed by [Cicirello](https://dl.acm.org/citation.cfm?id=1508971) for continuous feedback uses unannounced 'pop' quizzes, which were found to improve students' performance."

Yeah, but seriously students hate pop-quizzes. It's a costly move - the cited study mitigates it by making it relatively low-stakes. At that point, it's not unlike the clicker model. I think that you have to take this one with a grain of salt and a thorough understanding of the affordances and limitations.

# 8.6. We Don't Know Too Much about Academic Integrity

> "The [2016 ITiCSE Working Group of Simon et al.](https://dl.acm.org/citation.cfm?id=3024910) investigated academic integrity in relation to computing courses. A key finding of the study was that academics often take different approaches to prevent and deal with academic integrity violations depending on the level of the course. The small number of papers dealing with academic integrity in introductory programming courses is therefore a concern. Furthermore, the emphasis on detection rather than education indicates that this is an area in need of further research."

I don't feel like I walked away with much from this section. They offer some papers with strategies, and discuss instructor patterns, but I think we need more.

# 10.3. Go to SIGCSE

> "However, it also suggests that a very wide range of activities and approaches can make introductory programming courses interesting and engaging. This contrasts with broader benchmarks of levels of engagement in computing and reported high dropout rates. Given that almost anything we try appears to work, these conflicting results suggest that the broader computing education community might benefit from increased engagement with SIGCSE and computing education conferences."

# 10.3. Curriculum Packaging is a Problem

> "For future publications, we recommend that authors report much more detailed information about the context in which they are operating, and, where possible, publicly archive detailed information about their syllabus, learning outcomes, infrastructure, teaching approaches, and population demographics, for the reference of future researchers."

This almost feels like a hook for one of my new major research projects in the CSSPLICE initiative. I want to improve the way we package curricular materials. The impact on publishing is just one of the advantages if we can get a format together that makes it easier to document and share curricula. My collaborators and I will be running a Birds of a Feather at SIGCSE'19 - hope to see you there!

# Conclusion

Well, this ended up being the longest blog post I think I've ever written, even topping out my post on AnimalScienceCraft. I know that a lot of it is just copied text from the paper, but I think the authors did a good job with their summaries in a lot of places. I hope you learned something, because I certainly had some thoughtful takeaways. If you find anything you want to add, discuss, or debate, please do comment about it! I think this paper should lead to some very interesting discussions in the community.
