---
layout: post
title: Blocks Came Through - An Anecdote from the Final
author: Austin Cory Bart
tags: [blockpy, functional programming]
---

I teach two programming courses using Python, that cater to two different audiences. One is for non-STEM ("Introduction to Computational Thinking") and the other is for STEM ("Introduction to Progrmaming in Python"). Both courses use BlockPy, but only the Computational Thinking course relies heavily on the Block interface. I'm used to the STEM majors being uninterested in the blocks (relevant quote from office hours, "Well, that's not real programming is it?").

However, yesterday during the final exam's programming section (which uses BlockPy), I observed something interesting. A student was struggling with getting a graph to appear using MatPlotLib. Most of his code was correct:

  
```python
import matplotlib.pyplot as plt
...
# This obviously did something more sophisticated
the_list_of_data = [1,2,3,4]
...
plt.plot(the_list_of_data)
plt.show
```
  

You may not notice the error yourself - he missed the parentheses at the end of the last line, which actually CALLS the function. I've struggled with students skipping the parentheses on functions that don't take arguments. This misconception has a lot of probable sources - parentheses in math are often optional, they don't take up much visual space, etc. Students don't really understand what the difference is between these two ideas. And yes, I do try to address this difference directly in the video instruction.

![Calling vs. Saying](/images/calling_vs_saying.png)

I watched this student struggle with this error for a few minutes. At one point, he even called me over to ask if BlockPy could be broken, since his graph just wouldn't appear (you have to call show in order to make graphs appear in BlockPy). I explained that BlockPy was working correctly, but couldn't say much more due to the exam conditions. It was one of those stressful moments as an instructor - you desperately want to give them the answer, but you can't.

So I was pretty pleased when I saw how he finally figured it out. For whatever reason, he decided to look at his code from Block mode. This immediately revealed the problem. In the image below, the block in the bottom-left is the show without parentheses, which he immediately saw stuck out from the blocks above. After deleting it, he quickly found the correct version (bottom-right) and replaced it. He even went back and checked what the Python code looked like, nodding his head in agreement.

![](/images/show_with-and-without_parentheses.png)

Is this representative of anything? Probably not. But it was too good a story not to tell! I'm curious to check the log data and see if there are more stories like this one.