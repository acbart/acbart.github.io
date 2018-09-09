---
layout: post
title: Harry Potter and the Tonal Analysis
author: Austin Cory Bart
tags: [data science, harry potter]
---

Harry Potter and the Sorcerer's Stone has, roughly, 5746 sentences, spread out over 17 chapters. I know this because I have recently tried making a new style of English dataset for the CORGIS project. Previously, we had attempted to create datasets for English majors by analyzing a corpus of books and computing some statistics (difficulty, sentiment analysis, etc.). This new approach would look at a single book, which actually gives us the ability to compute some new statistics.

  

One of these statistics is particularly interesting: [Tone Analysis](https://tone-analyzer-demo.mybluemix.net/) using BlueMix from IBM Watson. Essentially, this service allows you to get a variety of tonal information for a sequence of sentences. For instance, you can get the estimated "Sad"ness of a sentence as a decimal 0..1 value, along with a number for "Joy", "Fear", "Anger", and "Disgust".

  

So what happens when you put in the text of the first Harry Potter book?

![Tonal Analysis without Rolling Average](/images/hp-tonal-without_rolling.png)

Unfortunately, that's not particularly helpful. The results of tone analysis fluctuates so much over just a few sentences that we end up with a mess of lines. I believe that the only reason its purple is because that was the last tone drawn.

  

It is fairly easy to create a Rolling Average with Pandas+Scipy+Numpy. This helps tease out a more useful graph, especially when the tones are standardized.

  

![Tonal Analysis with Rolling Average](/images/hp-tonal-rolling.png)

  

Suddenly, we can actually see trends! And those trends can be matched up against points in the book (Spoilers!):

*   Around sentence 1000, we see Hagrid confront the Durselys' and the famous "Yer a Wizard, Harry". Hagrid's pretty angry in this scene.
*   Around sentence 2000, Harry is meeting Ron and hanging out on the Hogwarts Express - high Joy!
*   And then around 2500, we head down to the dungeons with Snape and see a massive surge in Disgust.
*   Sentence 3000 is encountering Fluffy and then the Troll, which I suppose accounts for the surge in Disgust and Anger.
*   Briefly after that, near 3500, we can see the spike in Joy thanks to Harry winning the Quidditch match.
*   4500 puts us in the Forbidden Forest - plenty of Fear and Anger there, apparently.
*   I believe that the surge right after 5000 represents the adventure down to the mirror
*   And the last few hundred sentences of Joy show the ending of the book

Now, it's not a perfect match up, and there are a lot of other trends to explain here. But I did think it was interesting to see how we could pair up important events with peaks and troughs. Unfortunately, all the postprocessing I had to do makes this kind of analysis out of the reach of most of our students without some more help. I have to carefully think about how to make this kind of data available in such a way that its still useful. Dataset creation is tricky business!