---
layout: post
title: "Limited Environments"
author: Austin Cory Bart
tags:
    [
        ai,
        llm,
        grading,
        computer science education,
        limited environments,
        imagineering,
        motivation,
        education,
        klik-n-play,
        game maker,
        mud,
        broadway,
        mobile cannon,
    ]
---

This article about came up on Hacker News yesterday about [Canon](https://tau.dev/2026/08/07/canon), a simple MUD that the developer created to let his daughter make video games. Specifically, [Multi-User Dungeon](https://en.wikipedia.org/wiki/Multi-user_dungeon) games.

Although I'm just old enough to have played MUDs as a child, they weren't a part of my youth. That said, I completely understand their appeal. There's something really beautiful about limited environments and the creativity they inspire within those constraints.

This post is going to review some experiences I had as a kid, and then reflect on what that might mean in 2026.

# Klik-N-Play

The very first experience I had developing games was in an old windows 95 game development program named Klik-n-Play. It was a visual programming environment that allowed users to create games by dragging and dropping objects and defining their behaviors through simple event-based logic.

It was so awesome. It was so terrible.

First of all, credit where credit is due. The system had a massive library of fun animated graphics and sound effects. Want a dinosaur? They had those. Want Frankenstein's monster? They had that too. Aliens? Cats? Hedgehogs? Weird demon alien skulls? They had all of that and more.

![Klik-n-Play library of graphics and sound effects courtesy of https://www.macintoshrepository.org/5213-klik-play](/images/kliknplay_graphics.jpg)

There wasn't a programming language, or even blocks in the style of Scratch. Instead, it had this bizarre menu-based system where you gave objects behavior, triggered events, and then explained what you wanted to have happen. The [official tutorial](https://www.youtube.com/watch?v=GYvoBc1qW8Y) does a good job demonstrating this.

![Klik-n-Play interface, courtesy of https://clickfusion.academy/clickteams-klik-play-revisited/](/images/kliknplayeditor.png)

Obviously, this was extremely tedious. But if you were a small child who wanted to make games, it was incredibly powerful. And I made a number of games, all of which I'm sure were quite terrible. By the end, I was starting to figure some cool things out, though.

A particular noteworthy project for me was a Megaman game that never saw completion. I think I finished two levels. But it was when I was working on the second level that I realized I had a problem. You see, KnP only allowed you to store 8 integer variables between "frames" (rooms/screens). But everyone knows that Megaman games have 8 robot master weapons, each with their own energy bar, plus Megaman's health itself. How could I possibly fit 9 numbers into 8 variables?

The solution came when I realized that I didn't need the full range of numbers. Each weapon had a maximum of 20 energy points. I could store each weapon's energy in a single digit by using a base-20 system. Now, at the time I had _absolutely no idea that was what I was doing_. I'm pretty sure I didn't actually know what modulo was, just that I could do some horrifying things with math to make it work. No one had ever explained the idea of Bit Packing to me, and I didn't even really know what a bit was back then. But I had a problem, and I found a solution that worked.

![Example of base-20 number storage in Klik-n-Play, courtesy of ChatGPT](/images/knp_bit_packing.png)

It was around this time that my brother asked me, "Why are you jumping through all these hoops to make a game, when you could just use a different game development program?" This had not occurred to me, so he helped me find some alternatives. That brought me to Game Maker.

# Game Maker

Game Maker was an incredible step up from Klik-n-Play. It had a real programming language (both text-based and a sort of simplistic block-based version). It had way more sophisticated support for building rooms of any size, managing resources, and handling complex game logic.

![Game Maker interface, courtesy of the Game Maker wiki: https://gamemaker.fandom.com/wiki/Version_5](/images/gml_5.png)

I got into [Game Maker](https://en.wikipedia.org/wiki/GameMaker) around version 5, and by the time I left it was on version 7. Apparently, this tool was created by a Dutch Computer Science faculty ([Mark Overmars](https://en.wikipedia.org/wiki/Mark_Overmars)) specializing in Computer Graphics Education. He eventually sold the platform to a company, and my impression is that it got more powerful and also less accessible after that. Still, some note-worthy games have been made in Game Maker:

- [Undertale](https://en.wikipedia.org/wiki/Undertale)
- [Chicory: A Colorful Tale](https://en.wikipedia.org/wiki/Chicory:_A_Colorful_Tale)
- [Hyper Light Drifter](https://en.wikipedia.org/wiki/Hyper_Light_Drifter)
- [Arzette: The Jewel of Faramore](https://en.wikipedia.org/wiki/Arzette:_The_Jewel_of_Faramore)

I can assure you that I was not building any of these. I spent a long time working on my own game ([Mobile Cannon](https://www.youtube.com/watch?v=WY9VLzrSZLI)), but again never finished it.

However, the relevant experience while developing that game was when I was trying to start passing around more complicated data in the game. Game Maker had an Object-Oriented programming language, but the objects were all very heavy - they were meant for representing complex entities on the screen with behavior, collision-detection, etc. By the time I was finishing my time with GML, they had also introduced some clunky data structures that you could manipulate using functions, such as stacks, queues, maps, and priority queues. But otherwise the only native composite types were arrays - they didn't have anything like structs (although apparently they do now).

But they did have strings. And you could put strings in arrays.

If you're wondering, I did indeed then create my own horrifying string-based data structure system to simulate more complex types. As I recall, I was separating important data with pipes (`|`) within the strings, and then parsing them back into arrays whenever I needed to manipulate the data. These could be passed around... conveniently, after a fashion. So I created my own objects with properties stored as strings in arrays, and functions that would parse and manipulate these strings to simulate more complex behavior.

About that time, I was starting college, so inevitably I stopped working on Mobile Cannon.

# Operating Systems and the Shell

Back when I was a student, Operating Systems was a required course. I don't remember too much of the lecture of the course (I think we spent most of the time memorizing unix commands), but the projects were extremely valuable. It was probably the most C code I have ever or ever will write in my entire life. I found it incredibly tedious and yet very satisfying.

I suspect most readers already know that the big difference between C and C++ is that the latter has objects. In C, you have to manually manage memory and structure your data using structs and pointers, whereas C++ allows you to encapsulate data and behavior within classes, making it easier to model complex systems. I had gotten used to classes from my previous classes (which were mostly in C++ and Java up until that point). So suddenly, losing classes was painful.

But... had I really lost anything? I realized that most of the benefit of classes was in organizing and encapsulating data and behavior. I could do the same thing in C, if I was patient and disciplined about naming my functions. For instance, the prototype for a linked list class:

```c
typedef struct Node {
    int data;
    struct Node* next;
} Node;

typedef struct LinkedList {
    Node* head;
} LinkedList;

LinkedList* ll_create();
void ll_delete(LinkedList* list);
void ll_append(LinkedList* list, int value);
void ll_remove(LinkedList* list, int value);
Node* ll_find(LinkedList* list, int value);
```

This is hardly ground-breaking, and ignores all the benefits of true OO like inheritance, polymorphism, and encapsulation enforced by the language itself. But at the time, it was a lightbulb going off in my head realizing that _this_ is why they invented classes. So I wouldn't have to do all this organization myself!

# Pygame and the XO Laptop

The last experience to share here, I will be a little more brief. Of the [XO Laptop](https://www.theverge.com/2018/4/16/17233946/olpcs-100-laptop-education-where-is-it-now), I have little to say right now. It was what it was.

But back in 2011, when I was starting my Senior Thesis, I was totally in love with the idea of a $100 laptop that would fully democratize education across the world. I thought it had so much potential! It just needed more software. If kids had access to the kinds of experiences I had as a kid, what would they be able to make?

With solutions in search of questions to ask, I settled on creating an educational game for the XO Laptop. Since Scratch already did a good job providing a game development environment, I thought about a different game that I loved as a child: [Hollywood by Theatrix Software](<https://en.wikipedia.org/wiki/Hollywood_(video_game)>).

![Hollywood game screenshot courtesy of https://www.macintoshrepository.org/4089-hollywood](/images/theatrix_hollywood.jpg)

Hollywood was an incredible, cutting-edge writing game. You could write scripts for beautifully rendered 2D characters, direct them to move around and animate, and even _hear them talk using text-to-speech software_! I spent so many hours writing very silly stories.

And wouldn't you know it, but the XO Laptop had text-to-speech capabilities as well! This meant that I could recreate a similar experience to Hollywood, allowing kids to write and hear their own stories come to life. All I needed to do was provide them an environment where they could write scripts, hire an artist to create the visuals, and... somehow they would become better at creative writing?

![My first mock-up of Broadway, with art by yours truly](/images/BroadwayMockup.png)

I didn't really have a firm plan of what they would learn, so I focused on motivating them instead. I learned enough about Intrinsic Motivation theory to make a survey, found an artist, and made my game. I named it Broadway, in honor of Hollywood.

![Broadway game interface, art courtesy of Margaret Spagnolo](/images/bw-ss.png)

We're going to move firmly past whether _any of this was a good idea_ and focus entirely on my experience developing the software. The most notable issue I had (besides finding an artist) was developing the user interface.

![I actually made real human children play my game, and then answer survey questions about it. Goodness.](/images/broadway_photo.jpg)

You see, the XO Laptop only allowed you to use Pygame xor OpenGL for user interfaces. I needed animation capabilities, so I chose Pygame. But that meant that I had to implement all of the menuing systems, buttons, and other interface elements using a clunky framework named PGU (with a ton of my own customizations). Most critically, this included the central feature of any creative writing game: the input textbox.

![The Broadway input textbox in action](/images/bw-write.png)

I had so many performance issues with the input textbox, and I spent a long time optimizing this system. But I recall the biggest problem was that the more you moved between tabs, the slower it would get. I had a terrible memory leak. This meant I had to learn how to use a memory profiler and locating lingering references. Then I had to learn about weak references, and how to properly manage object lifetimes. I spent more time managing memory in Python than I did back when I was writing in C.

![Example Memory Diagram from debugging lingering references](/images/broadway_memory_diagram.png)

# Reflection on Limited Environments

One of the papers that had the biggest influence on me back in graduate school was Mark Guzdial's ["Imagineering Inauthentic Legitimate Peripheral Participation."](https://dl.acm.org/doi/10.1145/1151588.1151597). Here is the abstract:

> Since its publication, Lave and Wenger's concept of legitimate peripheral participation (LPP) [18] has become an important concept for understanding situated learning. LPP states that learning only occurs when students perceive that what's being taught is aligned with their goals (in LPP terms, with the students' perceived community of practice). This has implications for our traditional CS courses (e.g., are we teaching what the students perceive as being relevant for their future careers?), but even greater implications for courses for non-CS majors. When computer science educators are asked to teach non-CS majors, we are often placed in the position of teaching in alignment with a community of practice that does not, or does not yet, exist. In that sense, our teaching is inauthentic---not aligned with a community of practice. However, there is the possibility that we can generate a perception of authenticity or alignment. We use the example of two classes at Georgia Tech that seem successful by several measures, yet suffer this inauthenticity. We propose that a useful tool for understanding how these classes work is the Disney Corporation's Imagineering---their process of story-telling in three-dimensions as used in their theme parks. However, in the end, we find that what students actually learn is not necessarily the story that we are telling them, which points toward future research.

As I recall, I found the paper quite offensive. I believe I interpreted it as saying, "What if we lied to students about reality, in hopes that they will be more motivated?" It's an open research question how many times I have misinterpreted Mark Guzdial's work over the years. But this was probably one of the earliest instances.

Anyway, I find myself returning to this paper as I reflect on my own experiences, and what students are seeing nowadays. Guzdial was trying to share an imagined slice of the world with students, much the same way that Disney Imagineers created immersive experiences in their parks. I personally think about my favorite escape rooms, where I felt fully immersed in whatever the experience was meant to be.

Guzdial had students removing red-eye from photographs using Python functions. Even back in 2006, no one was doing that (I remember the functionality existed in regular photo editors just fine). But still, it's a cool way to learn about a topic. Guzidal talked about students' "willing suspension of disbelief". None of them believed the story, but many seemed to enjoy playing along.

# What's My Point?

AI is making it easier to make software - whatever else is happening with AI, that seems to be true. It has never been easier to make things, although that does not mean that it is any easier to _learn_ how to make things. I believe quite earnestly that you need friction in order to learn, and AI removes some of that friction.

Correspondingly, environments have never been less limited. I have so much RAM and memory on my computer, that I can afford to be wasteful. This is a stark contrast to the constraints I faced on the XO Laptop, where every byte mattered and inefficiencies were painfully obvious. I had to fight and squeeze out every single optimization, because it really mattered to me to make these games.

Constraints are a beautiful thing. They make you more creative, and I think they can be powerful motivators for learning. I worry about a future where everything is so easy that you don't have to think as much.

I have spent a lot of this summer working on the second version of our [Drafter](https://drafter-edu.github.io) web library. It's a simple Python framework for making frontend client-side websites. We've spent a lot of time thinking about how powerful that environment should be. We've added a lot of new compelling features. And the final project in our CS1 course this fall is going to allow (perhaps even encourage) students to use AI tools to assist them in building their projects.

But at the same time, the framework itself imposes certain limitations. We don't allow all of the things that we could: direct DOM manipulation is inconvenient, you can only pass primitive through forms, and there's no backend at all. There are ways for motivated students to overcome these limitations, but they're hidden from them. Is that fair to the students? Is it beneficial for their learning? How do students feel about inauthentically limited learning environments?

A part of me is very excited about the power of all these modern tools, and I wonder what learners become when exposed to their full power. But another part of me wonders if the optimal learning experience isn't something simpler. Walled gardens, carefully designed constraints, and inauthentically limited environments might actually foster deeper learning and creativity than unrestricted access to all the tools at once.

Or maybe I'm just getting old. Who can say? I guess time will tell. For now, I'm not quite ready for the curtain to fall on limited environments for learning.

![The cast of Broadway](/images/bw-actor-models.png)
