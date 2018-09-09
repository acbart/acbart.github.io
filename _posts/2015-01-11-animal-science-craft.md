---
layout: post
title: AnimalScienceCraft
author: Austin Cory Bart and Eleonor Cayford
tags: [games, projects, animalsciencecraft]
---

[!Ellie and Cory with Minecraft toys](images/posts-asc1.jpg)

By Austin Cory Bart and Eleonor Cayford

Special thanks to Dr. Eli Tilevich and Dr. Michael Evans

  

This past year, Ellie and I have been collaborating on an educational Minecraft mod to teach Animal Science. This blog post represents a summarization of the work that we've done, along with the future work we have planned. It should be appropriate for both researchers and non-researchers who are interested in this project.

### Minecraft

Minecraft is an exceptionally popular video game. Earlier this year, it became the best selling PC game of all time, beating out the Sims (despite being much younger) [\[1\]](https://minecraft.net/stats). The success of Minecraft lies partially in its novel core game mechanics; a fully interactive, infinitely generating, block based world [\[2\]](http://en.wikipedia.org/wiki/Minecraft). However, it has also developed perhaps the most sophisticated modding community in the history of gaming. Not only are the core game developers constantly engaging with players, but they are very permissive about people extending the game with new mechanics, blocks, and everything else under the sun [\[3\]](https://account.mojang.com/documents/minecraft_eula). 

  

One of the most interesting applications of Minecraft is to education, and there have been many interesting projects [\[8\]](http://dl.acm.org/citation.cfm?id=2207097) [\[4\]](http://www.ktoo.org/2014/04/24/minecraft-classroom-learning-looks-like-gaming/). For instance, several Computer Engineering classes have used the RedStone mechanic of vanilla  Minecraft as demonstrations or even for assignments in Digital Logic (building simple machines and even fully fledged CPUs) [\[5\]](http://i.imgur.com/CCQiVmj.jpg). Mods bring even more opportunities for education. The successful [Minecraft.edu](http://minecraftedu.com/) project support teachers with classroom management tools, lesson plans, and other useful utilities all baked into Minecraft [\[6\]](http://minecraftedu.com/about). Here at Virginia Tech, the [ICAT OperaCraft](http://www.icat.vt.edu/funding/operacraft) project enabled high schoolers to author, choreograph, and perform a digital opera [\[7\]](http://www.icat.vt.edu/funding/operacraft). And now Foster and Esper (the same amazing duo that made [CodeSpells](http://codespells.org/)) is working on a Blockly-based modding system for Minecraft ([LearnToMod](http://www.learntomod.com/)) to teach kids programming. There are many other projects, and the research applications are blossoming.

### Educational Game Development

It is exceptionally easy for people to misestimate the value of video games for education. On the one hand are the hopeful, who see software as the magic wand to fix education - automated assessment, just-in-time feedback, and rich motivating experiences. On the other hand are the bitter, who have seen games like Math Blaster and how little impact they really have on children's learning. Educational game development is difficult, requiring pedagogy, art, music, game mechanics and everything else to come together in a perfect mixture. Research is required to really know that any given educational game is successful. Still, the literature offers many starting points and lens to analyze games. For the Platipy project, I have previously written summaries of several research papers on [educational game design](http://platipy.readthedocs.org/en/latest/educgamedesign.html), and I'd like to suggest anyone interested in vanilla Minecraft for education read the [Charskey et al](http://platipy.readthedocs.org/en/latest/research/charsky2008.html) paper. 

  

More relevant to this discussion is a [second paper](http://platipy.readthedocs.org/en/latest/research/squire2006.html) by Squire, describing two different paradigms in educational game design: exogenous and endogenous. To quote: "In Exogenous games, the learning context is external to the gameplay, as opposed to internalized like in Endogenous games." In an endogenous game, understanding the material is key to succeeding in the situated game world at a very deep, integrated level. In an exogenous game, the educational material has been grafted on - consider a Mario game where every few minutes you are interrupted with a multiple choice quiz that you must pass before continuing the real game. To be successful, game designers should focus on developing endogenous games (unless drill-and-practice truly is all you need). When designing AnimalScienceCraft, Ellie and I constantly tried to keep things Endogenous.

### Animal Science and Minecraft

When I first got Ellie to play Minecraft, she was largely enjoying herself up until we started working with animals. The existing animal system is a giant facepalm for an animal scientist, with many things that are just plain silly. Why is [genetic inheritance so lame](http://imgur.com/a/iR7Cq)? What is in the wheat that [induces fertility](http://minecraft.gamepedia.com/Breeding#Mechanics)? Obviously, these don't make the game unplayable, and they are perfectly adequate game mechanics. However, there is a lot of untapped potential here to convey some interesting scientific topics through a really exciting 3D world. Raising animals in Minecraft is a useful activity - they give you food and resources that are otherwise rare. Ideally, optimizing the process should require students to understand how the true process works.

  

Animal Science is a very important field, but they're a little glossed over in most discussions of STEM. Like other science and engineering fields, it can be difficult to draw in students. We're hoping that an engaging game will improve visibility of the field and the value it provides to society. We're also hoping that the embodied nature of the learning experience will be more valuable than a comparative experience of reading a textbook. To that end, we decided to work on AnimalScienceCraft, a modification for Minecraft that introduces new mechanics intended to teach core concepts from Animal Science and that motivate students to learn more about Animal Science.

  

This work began under [Dr. Michael Evans](http://ced.ncsu.edu/user/michael_evans) when I took his Digitally Mediated Learning class. Dr. Evans organized his course around a semester project, and this led to the design document and initial research for AnimalScienceCraft. The following semester, I took an independent study with [Dr. Eli Tilevich](http://people.cs.vt.edu/~tilevich/) in order to develop an actual prototype.

### Learning Objectives

Before beginning work on educational games, it is critical to know what your learning objectives are. We used standards developed by the National Council for Agricultural Education National Council for Agricultural Education, designed for middle- and high- school aged students\[9\]. This list is actually fairly massive, and covers a lot of agricultural material outside of Animal Science. We only concerned ourselves with the subset of Animal Science objectives that we could transform into meaningful gameplay elements, to avoid cognitive overload. The relevant list of objectives are summarized in the table below:

%%% TODO %%%  

### Mechanics

In the following section, we'll describe the mechanics we've introduced. There are a lot of changes to the core game here!

  

![Gender in Pigs](images/posts-asc-gendered_pigs.png)

Gender  
_Objectives: Reproduction, Classification_  
Animals now have Gender, which results in visible differences in the animal (in the picture above, male pigs are darker than female pigs). In order to breed two pigs, they must be different genders. Further, gender affects the utility of the animal - male cows do not produce milk, for instance.

**

[!Estrous in Pigs](images/posts-asc-estrous.png)

  
**

Reproduction

_Objectives: Reproduction_

Female animals have an estrous cycle now - once they reach adulthood, they will periodically go into heat (indicated by hearts over their head). At this time, they will actively seek out a male to mate with. Two animals are needed to reproduce:

*   Pigs have large litters; the number of babies they produce is determined by their Potential for Production stat.
*   Cattle have single birth
*   Sheep are inclined to have twins
*   Chickens hatch from eggs. 

In all cases, differently gendered animals are involved (roosters, bulls, rams, and boars have to breed the female).

  

**Genetic Traits**

_Objectives: Classification, Inheritance, Trait Breeding_

When animals reproduce, their new genetic traits are based on their parents. There are four genetic traits:

*   Potential for Production
*   Meat Quantity
*   Domestication
*   Feed Efficiency

Unlike regular Minecraft animals, they tend to improve over multiple generations - however, animals need to be bred to specialization, e.g., breeding for a higher Meat Quantity leads to a lower Potential for Production. Every new generation of animals, you will expect some distribution of animals - you need to cull the lesser animals, and encourage the good ones. When you right-click an animal, a window pops up with information about them - eventually, you can choose to have a specific trait visible over all the herds (so you can eyeball your herd's current Meat Quantity for example).

  

**Hunger**

_Objectives: __Animal Handling_

Animals now eat to survive. If their hunger drops to zero, then they die. The amount of hunger they recover from their food source is determined by their Feed Efficiency stat.

  

**

[!Bacon from Pigs](images/posts-asc-bacon.png)

  
**

**Animal Products**

_Objectives: None_

Animals products dropped on death have better return on investment. This isn't meant to teach - it's an incentive to raise animals. Death drops are determined by the Meat Quantity stat, with a higher stat yielding more and possibly better meat:

*   Pigs: Pork at low levels, bacon at high levels
*   Cattle: Steak at low levels, filet at high levels, leather at all levels.
*   Sheep: Mutton at all levels (mutton is greatly nerfed in value - Americans don't usually eat sheep)
*   Chicken: Chicken Meat at all levels

  

**Animal Byproducts**

_Objectives: None_

Some animals have by-products that do not require killing the animal. These drops are determined by the Production Potential stat.

*   Milk is more useful (offers a health healing enchantment) and is variable - the higher the Production Potential stat, the more the milk will heal you. Milk also stacks now and don't require buckets.
*   Feathers are dropped passively, similar to eggs.
*   Wool is much the same as it was before

**

[!Varying Sizes in Pigs](images/posts-asc-sizes.png)

  
**

**Size and Age**

_Objectives: None_

Animals age and die - but on the plus side, they are now invincible to enemy mobs. As animals get older, they increase in size. This size is also determined by their hunger - hungrier animals are leaner and smaller. Finally, baby animals no longer have comically oversized head. We argue they look cuter this way.

  

**Incest**

_Objectives: Reproduction, Inheritance_

Breeding related animals in the real world (inbreeding) can lead to genetic problems because recessive problems tend to build up and lead to inferior offspring. Lineage is tracked for each animal, and they will not breed with another animal that has a common ancestor (to two generations).

  

**Classification**

_Objectives: Classification_

Animals are named based on their species and reproductive capabilities. The in-game system uses this taxonomy. This knowledge is situated in the lingo of the game, so ideally users should start picking it up naturally.

*   Cattle: Calf, Cow, Steer, Bull, Heifer
*   Pigs: Sow, Gilt, Barrow, Boar, Hog, Piglet
*   Sheep: Lamb, Ewe, Ram, Wether, Yearling
*   Chicken: Cockerel, Rooster, Capon, Hen, Pullet, Chick

**Domestication**

_Objectives: Domestication_

Wild animals are not easy to manage - they are skittish if you move too fast and they might even attack if you approach from the wrong side. Domesticate animals by breeding together more passive animals - most packs will have at least one chill animal in the group, and they are the ones you should pick. Once animals have been bred for domestication, they can be bred for Meat Quantity, Production Potential, and Feed Efficiency (this is why you will not see wild pigs with exceptionally high Production Potential).

  

**Stress**

_Objectives: Reproduction, Handling_

Stressed animals will not reproduce and will get antsy (make them move about more). They also act like they are less domesticated. One of the most complicated aspects of animals are their stress level, which is a combination of many factors. For instance: animals do not like to be too tightly packed, they do not like to be hungry, etc.

  

![Stats Screen](images/posts-asc-stats-screen.png)

### Technical Details

I am midway through a PhD in Computer Science and Ellie has taken an introductory course on Computer Science, so we have a large amount of programming expertise. However, Minecraft modding is pretty difficult - tutorials and reference materials are hard to find and are frequently out of date. The community has been extremely helpful in answering questions, but it can still be a little overwhelming at times. I'm sure that a number of our design decisions were bad, so feel free to criticize our architecture. Long term, I expect to throw this alpha version out and start fresh for version 1.

  

Our mod was created using Forge for Minecraft 1.7. A powerful tool, Forge provides a useful skeleton and a nice event system. Of course, there are limitations: most identifiers (the names of properties, methods) have been crowd-sourced, but coverage isn't 100%. There isn't exactly exhaustive documentation, either. At one point, I was trying to make a pig jump on demand (I can't recall why). I found methods with "jump" in their name, and a JumpHelper class, but after hours I couldn't seem to affect the pig - eventually, I discovered you had to change the y-velocity of the entity. Certainly makes sense in retrospect, and I wish I had simply asked someone on the Forge forums, but our work was replete with such hassles. I often felt like I was debugging before I even wrote any code!

  

In order to introduce our large changes, we extended EntityAnimal with a new abstract class named EntityScientific, which in turn was extended by each of our animals (currently, only EntityScientificPig is ready). We then deregister the regular animal spawns in favor of our own. This was a difficult decision to make, because this breaks compatibility with other mods that rely on the specific vanilla animals - EntityPig, EntityCow, etc. On the plus side, existing mechanics largely refer to EntityAnimal, so we still can use things like tethering, eggs, etc.

  

Minecraft has a client-server architecture, even in local singleplayer: the server is largely responsible for managing world state (and is the only place where persistence occurs), while the client is largely just handling rendering. However, except in specific circumstances, all code is run on both the client and server (reminiscent of what happens when you fork a process), requiring some checks to see who's running the code. Communication between the client and server is handled by either the networking system (which I was hesitant to dive into on my first attempt) and the DataWatcher (a reflected set of variables that are automatically synchronized between client and server). We didn't realize how crucial this communication was until we had already created a large number of instance variables to keep track of our animals' many properties, when we discovered that nothing was persisting between runs. The simplest solution was to store this information into the DataWatcher and let it handle everything. The DataWatcher is a strange beast, allowing only 32 variables and only of certain types: int, float, byte, char, a few special Minecraft types, and String (maximum 32767 characters). This last was a surreal discovery to me - you can fit 16k integers into one of those Strings! It was a quick slippery slope to create my own stringly-typed tuple to get past the 32 variable limit. I'm largely certain I'm wasting a lot of bandwidth with this approach, so it probably needs to be revisited.

  

### Current Status

All work for this project is freely available on [the LearnCraft github](https://github.com/LearnCraft/animal-science-craft). I would describe this mod as being roughly "pre-alpha". At the time of writing, only pigs and cows are included (and not all features described above are developed). However, many of the core features have been developed. Still, a lot more work is required before the system is ready for an intervention with real students.

### Conclusion

[!LearnCraft is an Educational Minecraft Textbook](images/posts-asc-learncraft.png)

Although a lot of practical and interesting Animal Science knowledge is situated in our Minecraft mod, something more is needed to solidify player's learning. Our AnimalScienceCraft mod is part of a larger project named "LearnCraft", and at the heart of that project is a powerful reference manual for Minecraft embedded within the game. This manual is tied into the event system of Minecraft so that players can get guided feedback on how to play the game in a just-in-time style. This system will get its own proper blog post sometime this semester, as we prepare it for beta release.

  

Will AnimalScienceCraft be successful? We won't pretend that ASC is something that everyone will add to their installation of Minecraft and then play in an informal setting - it introduces some changes that might make the game a little less fun at the cost of the educational value. However, I can easily imagine it being used in a formal (e.g., middle school science class) or non-formal setting (after school FFA club). People with a casual interest might play it a few times and pick up some knowledge that they didn't have before.

  

Our next big step is to get funding for this project, possibly through the ICAT center at Virginia Tech. Not only will we be able to scale up development, we can also conduct formalized research in order to find the real value of this system. We really need a dedicated undergraduate or graduate student who can develop on it full-time. Digitally Mediated Learning offers a lot of promise to teach people in innovative ways, but it rests on researchers to ensure that the tools really stick the landing.

### References

\[1\] Mojang. ["Minecraft Stats"](https://minecraft.net/stats). www.minecraft.net. Microsoft. Retrieved 20 September 2014  
\[2\] Wikipedia contributors. "Minecraft." Wikipedia, The Free Encyclopedia. Wikipedia, The Free Encyclopedia, 19 Dec. 2014. Web. 26 Dec. 2014.

\[3\] Mojang. "MINECRAFT END USER LICENCE AGREEMENT." Mojang. Web. 26 Dec. 2014.

\[4\] Phu, L. "Minecraft in the Classroom: When Learning Looks like Gaming." _KTOO_. 24 Apr. 2014. Web. 26 Dec. 2014. <http://www.ktoo.org/2014/04/24/minecraft-classroom-learning-looks-like-gaming/>.

\[5\] ThatWeirdPhysicist. "Learning logic gates in Electronics Class." Imgur. May 5, 2014. Web. 26 Dec 2014. <http://i.imgur.com/CCQiVmj.jpg>.

\[6\] "MinecraftEdu - About." MinecraftEdu - About. Web. 26 Dec. 2014. <http://minecraftedu.com/about>.\[7\] "OPERAcraft." OPERAcraft. Web. 26 Dec. 2014. <http://www.icat.vt.edu/funding/operacraft>.

\[7\] OPERAcraft. (n.d.). Retrieved January 12, 2015, <http://www.icat.vt.edu/funding/operacraft>  
\[8\] Short, Daniel. "Teaching Scientific Concepts Using a Virtual World--Minecraft."Teaching Science 58.3 (2012): 55-58.

\[9\] National Council for Agricultural Education. (2009). National agriculture, food and natural resources (afnr) career cluster content standards. Alexandria, VA: National FFA Foundation.

  

[!We stacked the toys on Klaus](images/posts-asc-stacked.jpg)