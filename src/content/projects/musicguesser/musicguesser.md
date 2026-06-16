---
title: "MusicGuesser"
tags: ["Frontend", "Backend", "Design", "Mobile App"]
technology: ["Kotlin", "Android"]
description: "A simple Music Guesser game"
pubDate: '2026-01-29'
heroImage: './musicguesser_hero.jpg'
featured: false
---

In the third semester of the Mobile Masterclass, we are free to choose how we want to earn our credits alongside the semester project. To earn my credits this semester, I created my own Kotlin project: a MusicGuesser. You can create quizzes using local MP3s and then guess the song title from a short snippet of the song in a quiz.

## Features

### Create a quiz

When you launch the app, you can select a folder containing local music. You are then taken to the main screen. Using the FloatingActionButton, you can create a new quiz. You can give it a name and select song titles using chosen search terms to add them to the quiz. You can then view the quiz in the list, along with information such as the name, the number of songs and your current ranking in each mode.

| ![MusicGuesser Main Screen](./guesser_mainscreen.jpg) | ![MusicGuesser Add Screen](./guesser_addscreen.jpg) |
| ------------------------------------------------ | ------------------------------------------------ |

### Start the quiz

When you tap on a quiz, you’ll be taken to the quiz’s start screen. There, you can select the mode – Random or Progression – along with the difficulty level. The mode determines how you can navigate through the songs. In Random mode, you can jump back and forth between each song. In Progression mode, you must guess the current song before you can move on. The difficulty level determines how long the song snippet is; the higher the difficulty, the shorter the snippet becomes.

| ![MusicGuesser Song Screen](./guesser_songscreen.jpg) |
|:-------------------------------------------------------:|

### Playing the quiz

When playing, you’ll see the player at the top, which you can use to play the clip. Below that are the navigation controls: buttons for skipping forwards and backwards, and in Random game mode, dot indicators showing which song you’re on, which you can also use to navigate. Once you’ve finished a song, you’ll be taken to the results screen. There, you receive a medal if you guessed all the songs correctly. If you complete the song on a higher difficulty level, you also receive a better medal. Finally, you can see which guesses you made for each song and whether they were correct.

| ![MusicGuesser Game Screen](./guesser_gamescreen.jpg) | ![MusicGuesser Result Screen](./guesser_resultscreen.jpg) |
| ------------------------------------------------ | ------------------------------------------------ |

## Technologies

The app was developed as a native Android app using Kotlin. Jetpack Compose was used as the UI toolkit. Some of the other libraries used include:
- Room: A persistence library that interacts with and manages an SQLite database via an abstraction layer, such as Entity and DAO classes.
- Media3 ExoPlayer: One of the core media players on Android and part of Jetpack Compose. It enables basic functionalities such as play, pause, etc.
Other smaller libraries used include, for example, Koin for dependency injection and Compose Navigation.

## Challenges

Probably the biggest challenge was the general use of Kotlin. We did have an introduction to Kotlin in the second semester, and we also used Kotlin for our semester project in the third semester. But developing an entire app on our own was a different matter altogether and a greater challenge.

Another challenge was installing the libraries. Often, the documentation pages did not list all the necessary dependencies for installation, or the information was spread across different pages or stated something different. They were also often still listed in the old format on the pages, where the versions were entered directly in the `build.gradle` file. Now there is a newer version where you enter the version in `libs.versions.otml` and define the dependency in `build.gradle.kts`. However, once you understand the general structure, this was a minor issue.

Another problem was the size of my music library. I have over 1,000 local songs, which made optimising the search function essential. After a bit of trial and error, I used the MediaStore, which automatically maintains an index of all media files on the phone and was able to access and retrieve my library in seconds.

## Lessons Learned and Next Steps

I learnt a great deal about the general use and development with Kotlin. I also learnt about the MVC principle, taught to me by one of my colleagues, using a BaseViewModel with Action, State and Effect classes. 

There are several ways in which this project could be expanded, with many ideas suggested by my colleagues during the presentation. For example, creating online quizzes that could be viewed by other people. New game modes, such as listening to songs in reverse or an endless mode, were also suggested.
