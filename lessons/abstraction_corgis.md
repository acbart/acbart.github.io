# Lesson Plan

Topic: Data Abstractions with the CORGIS Visualizer

Author: Austin Cory Bart <acbart@udel.edu>

Version: 0.1.0

Duration: 30 minutes

## Overview

In this lesson, students interact with an online platform for creating visualizations of a wide variety of datasets (including health, energy, books, law, and more). In doing so, they must confront the limitations of the abstraction inherent in the models presented.

1. Students will select a dataset from the CORGIS Visualizer, suggest possible concrete abstractions, and identify the kinds of questions that could be answered with those abstractions.
2. Students will analyze the actual data abstraction that they choose, develop a question related to the dataset, and then create a visualization that answers the question.
3. Students will suggest possible variations on the abstraction for the real-world thing that it represents, and identify limitations of the abstraction with regards to the questions it can answer.

## Purpose

Visualizations are a powerful way to summarize data into a medium accessible by a wider audience. Computational tools like Excel or Python's MatPlotLib can be used to quickly produce these visualizations. The result can then be analyzed and interpreted to draw conclusions. Increasingly, data is collected and used to answer important real-world questions by generating these visualizations. However, the collection of data is a design process with trade-offs and decisions. While a computational tool can make it easy to interact with a rich data abstraction, there are still limitations inherent by the process of formalizing an abstraction. In particular, the details that are removed by the process make it impossible to answer other kinds of questions.

## Learning Objectives

By the end of this lesson, learners will be able to…

1. Given a real world entity or idea, identify possible data abstractions and the questions answerable with that abstraction.
2. Given a tool that provides access to a large dataset, describe the abstraction represented by the data.
3. Given a tool that provides access to a large dataset, explain the kinds of questions such a tool could and could not answer.

## Standards Alignment

Relevant Computer Science Principles:

* 2.2 - Multiple levels of abstraction are used to write programs or create other computational artifacts.

* 2.3 - Models and simulations use abstraction to generate new understanding and knowledge.

* 3.1 - People use computer programs to process information to gain insight and knowledge.

* 3.2 - Computing facilitates exploration and the discovery of connections in information.

* 7.2 - Computing enables innovation in nearly every field.

* 7.5 - An investigative process is aided by effective organization and selection of resources. Appropriate technologies and tools facilitate the accessing of information and enable the ability to evaluate the credibility of sources.

## Assessment

To assess/verify the learning objectives:

1. Learners will show the instructors their completed graphs.
2. Learners will answer instructor questions in the Post-discussion.

## Prior Knowledge

Prior to this lesson, learners will already be able to:

1. Interpret histograms, line plots, scatter plots, and bar charts
2. Define the concept of a data abstraction (e.g., a dataset)

# Learners and Contexts

This lesson was designed for:

Age: Grades 9-12

Size: Any reasonably-sized class should work, probably in 10-50 range works best.

Instructors: No additional instructors are necessary. More instructors can help guide discussion.

Formality: Suitable for formal and informal settings.

Computers:

* This activity is plugged-in.
* The website works on both computers and smart phones/tablets.
* A keyboard is not required.
* A working internet connection is required to load the pages.

External Tool: https://think.cs.vt.edu/corgis/visualizer/

# Activities

Most of this lesson will be:
* Learners listening to me present
* Learners discussing in small groups
* Learners using the CORGIS Visualizer in small groups

## 1. Warm-up

Strategy: Present Content

Duration: 5 minutes

Content:

* **Hook**: Show a slide with all the CORGIS datasets' icons. Then, tell students that we're going to be looking at a big collection of data today, and ask them to start thinking about what they seem personally interested in. Ideally, students should be attracted to the colorful pictures involving cute CORGIS and find things that they think sounds interesting.
* Inform students that we will be analyzing data abstractions and making visualizations to answer real questions.
* Remind students about the definition of a data abstraction: a representation of reality with details removed.
* **Interactive**: Ask if anyone has any questions about how the concept of a data abstraction leads to datasets.
* Describe the growing importance of data, and how there are many kinds of data that have been collected out there.
* Highlight the connection between the act of gathering data and the limitations that imposes on the data itself.
* Describe the CORGIS collection, and give examples of some of its datasets.

Delivery:

* Publicly available Google Slides, presented from the front of the room.

## 2. Show CORGIS Datasets

Strategy: Provide Guidance

Duration: 2 minutes

Instructions:

* Organize students into groups of 2-3. Consider having only one laptop per group.
* Show the URL for the CORGIS website (think.cs.vt.edu/corgis/visualizer)
* Tell students to bring up the webpage, but to NOT open any links on the page yet.
* Tell students to look at the variety of datasets.
* Tell students to agree on a dataset that interests the group.

Rules:

* Students should NOT advance into any of the datasets' pages yet, they should just be browsing the collection.
* Students must agree on a single dataset

## 3. Dataset Discussion

Strategy: Support Practice

Duration: 5 minutes

Instructions:

* Tell students to discuss their chosen dataset as a group.
* Tell them to list specific properties and data they expect to find in the dataset.
* Tell them to describe how they expect the dataset to be structured and accessed.

Engagement:

* Walk around and encourage discussion about the datasets.
* If students are struggling to think of properties/data:
  * Ask them to describe the thing being abstracted.
  * Ask them what characteristics are relevant to answering questions related to the thing.
  * Ask them, what would they want to know about the thing?
  * For example, for the Cars dataset, they might list things like "make", "model", "year created" of a car. Alternatively, they might try to articulate that the dataset is about "individual people's cars" or "general makes of cars" or "the history of one person's car". You can encourage exotic thinking like, "the last year that the car had its windows replaced".
* If students have no guesses about how the data might be structured:
  * Ask them how they usually see data in a computer
  * Potential answers might be: spreadsheets, tables, graphs, paragraphs of explanation
  * Goal is to have them 
* Remind students not to access their dataset

Goals:

* Have students develop expectations of what a dataset should look like, to eventually contrast with reality.

## 4. Demo Visualizer

Strategy: Provide Guidance

Duration: 4 minutes

Instructions:

* Have students click the link for their dataset to open the Visualizer page.
* On your computer, click the link for the Weather dataset.
* Give a brief summary of the `Overview` section of the page. Mention that this dataset is from the National Weather Service, and summarizes weekly weather reports specifically from 2016 for the United States.
* Give an interactive tutorial on how to use the Visualizer tool's interface
  1. Show the graph produced at the bottom
  2. Demonstrate how the graph type can be changed with the `Chart Type` dropdown. Switch to a Histogram.
  3. Demonstrate how the data being plotted can be changed with the `Values` dropdown. Switch to "Temperature, Average".
  4. Demonstrate how the data can be filtered with the `Filter` and `By` dropdowns. Set to "Station, Location" and "Wilmington DE" (or other appropriate location).
  5. Interpret the produced graph. In this case, we are seeing the distribution of weekly average temperatures for Wilmington Delaware for the year 2016.
  6. Suggest a question that this dataset can answer. For example, someone interested in moving to Wilmington might wonder what the weather is like. Alternatively, city planners trying to weather proof the city might need to know the range of temperatures that can occur.
  7. Suggest a question that this dataset cannot answer because of its abstraction's limitations. For example, we don't know what the daily or hourly temperature looked like, just the weekly average. Further, we cannot answer anything involving humidity because that data is not available. You can particularly note that the although there is no data for other years or for other locations, the abstraction itself does not limit this - a nuance for how abstractions limit data collection vs. other kinds of limitations.

Notes:

* Some datasets are large, and may take a minute to load on slower connections. Test the internet connection to make sure it is stable. Try to avoid students all loading the datasets at the exact same time.

## 5. Dataset Exploration

Strategy: Support Practice

Duration: 8 minutes

Instructions:

* Tell each group to develop at least one question that this dataset can answer.
* Tell each group to develop a visualization that answers their question.
* Tell each group to develop a question that this dataset cannot answer because of its abstraction's limitations.

Engagement:

* Walk around and support students using the Visualizer.
* Common questions that might occur:
  * Most datasets have extra information for each field under the `Values` dropdown, in the `Overview` section, or in the link provided. If they cannot find the information even after all that, then you can tell them to use their best judgment.
  * If a graph is blank, then most likely they are using a filter that does not have any interesting data available. Ask them to remove the filter.
* If students are unsure what a feature does, have them experiment with the feature and see what happens. If they are still unsure, you might refer to the following:
  * Histograms have a `Bins` input box that adjusts how many boxes the histogram will have. Increasing the number can make a finer-grained graph, but less binning occurs so the relationships can be harder to see.
  * Bar Charts have a `Group By` dropdown that is distinct from the `Filter`. You can click on values in the left column to have them appear on the graph (and in the column on the right). You can remove values from the graph by clicking on the entries in the column on the right. The `Search` boxes allow you to find specific values, but remember to clear the search box after using it.

Goals:

* Students should produce a visualization that they can correctly interpret.
* Students should be able to articulate the limitations of an abstraction for developing a question.

Progress:

* You should see students interacting with the Visualizer and refining their graphs.

Correction:

* Students can ask each other if they agree with their answer.
* Students can ask instructor(s) if they agree with their answer.

Rules:

* Students should be discussing their question and not working individually.

## 6. Wrap-up

Strategy: Wrap-up

Duration: 6 minutes

Alert:

* Announce to everyone to stop working on their computers and to focus on you.

Instructions:

* If there is time available, ask some groups to share the question they could ask and a question they couldn't ask.
  * Make sure that their negative question is limited by the abstraction, not just the data collected.
* Then, give a brief description of the role of abstraction in data collection. Highlight the value of rich abstractions and existing data, but also the limitations.

Summary:

* Abstraction is a critical part of using computation to answer questions. Once we have a data abstraction, we can use tools like this Visualizer to answer a range of questions.
* However, abstractions inherently do not capture all possible information - that's the point of an abstraction, to remove unnecessary details. Therefore, the tools are always limited by what they can do with the abstractions available.

Next:

* Soon you will be looking closely at the assumptions involved in dataset collection and analysis. Keep in mind the limitations imposed by the data abstraction itself.
* Long term, you may need to develop data abstractions to answer questions. Consider very carefully the kinds of data you will need to capture in order to support the kind of computation you want to do.

# Contingency Planning

## Lack of Devices

* If no learners have devices, then we can collaborate as a class on a single dataset that we choose as a group.
* If only some learners do not have devices, then we can have a one device per group policy. We could also expand the group sizes as needed.

## Internet Issues

* If the internet goes down, then I can load the datasets from my local copy.
* If the internet is slow, then we will have larger groups and only have students access smaller datasets (TODO: list some).

## Projectors

* If I don't have a device to project my presentation, then I'll just read my slides out loud. I can write the URL on a whiteboard, chalkboard, or a piece of paper that I hand around the room.
* If I can't use my own device to project my presentation but have access to someone else's, then there will be no issues since the presentation is through a public Google Slides.

## Staff Numbers

* If I have too few instructors for the number of learners, then I will rely more on the students to discuss and share ideas.
* If I have too many instructors for the number of learners, then I can have the other instructors engage more deeply with each group.

## De-motivated Learners

* If a learner is not interested in their group's dataset, I will try to find ways to connect the dataset to their lives, or encourage their group to explain the dataset's importance to themselves. Otherwise, I will have the uninterested learner move to a different group.

## Struggling Learners

* If a learner is struggling with the Visualizer, I will ask them to watch their peer.
* If many learners are struggling with the Visualizer, I will group them together and walk them through another example (e.g., Earthquakes).

## Advanced Learners

* If a learner is finished with making their two questions, I will have them make more questions.
* If they make at least 3 of each kind of questions, I can have them look at another dataset.

# Instructional Materials

* [ ] [Instructor Slides](https://docs.google.com/presentation/d/1pazlB-fRIAbQRgKNzLMqxpx_H6RTuNf6TF07Li1tT8A/edit?usp=sharing)
* [ ] [CORGIS link](https://think.cs.vt.edu/corgis/visualizer/)
