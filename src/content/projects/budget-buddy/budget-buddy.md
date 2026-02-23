---
title: "Budget Buddy - Digital Household Budget Book"
tags: ["Ionic", "Angular", "Nest.js", "TypeScript"]
description: "Digital Housefold book created with Ionic and Nest.js"
pubDate: '2025-06-12'
heroImage: './budget_buddy.svg'
featured: true
---

## First semester

Part of the first semester in the Mobile Masterclass was to program your own project, which you were allowed to define yourself. I had recently become more familiar with finances and was therefore looking around for digital household accounts. After a little searching, however, I couldn't find any that made it easy to enter data on both mobile and desktop devices. After learning the multi-platform language [[21.11 Ionic|Ionic]] in class, I had the opportunity to create my own household account. Since creating a household budget book is a major undertaking, the initial focus was on implementing basic functions such as creating accounts and performing transactions on these accounts.

### Features

As mentioned, I focused on the main functions in this project:

#### Login

There is a simple login form that prevents unauthorized users from viewing the data. If you are not logged in, you cannot use the backend or navigate to other pages in the frontend except for the login page. So far, there is only one pre-created user who has access to everything. However, there are plans to expand the functions.

Once you are logged in, there is a tab bar on the main page with a profile page where you can simply log out again.

| ![‘Login Screen’](login_screen.png) | ![‘Profile Screen’](profile_screen.png) |
| --------------------------- --------- | ------------------------------------ |

#### Account view

The second tab on the tab bar is for the accounts to which you enter transactions. Each account simply has a name, and they are sorted by name. You can also view the total amount of all transactions on this account.

As on the transaction page, you can add new accounts here, edit them by tapping on them, and delete them by swiping left. When you delete an account, all transactions on that account are also deleted. 

| ![‘Accounts Screen’](accounts_screen.png) | ![‘New Account Screen’](new_account_screen.png) | ![‘Delete Account Action’](delete_account_action.png) |
| ----------------------------------- - | ------------------------------------ | ------------------------------------ |

#### Transaction view

When you are logged in and on the main page, you will see three tabs at the bottom. The first tab takes you to the transaction page. Here you can see all transactions listed by date and grouped by month. 

You can see whether money was withdrawn or deposited, as well as further information such as which account was used for the transaction and on what date it was carried out. You can also add an optional description and see the category of the transaction. The transactions are predefined entries in the database that you can use to classify your transactions.

On this page, you can also add new transactions using the floating button. Click on a transaction to edit it or drag a transaction to the left to delete it.

| ![‘Transaction Screen’](transaction_screen.png) | ![‘Add Transaction Screen’](add_transaction_screen.png) | ![‘Delete Transaction Action’](delete_transaction_action.png) |
| ------------------------------------ | ------------------------------------ | --------------------- --------------- |

### Technologies

For the frontend, I used Ionic in conjunction with Angular. For the backend, I used NestJS. I also used various libraries for the backend, such as TypeOrm for object and relation mapping, class-validator for validating requests and responses, and bcrypt for encrypting passwords. 

Login works via a JWT, which is generated in the backend and sent to the frontend. On the one hand, the routes in the backend are secured, but on the other hand, certain pages in the frontend can only be accessed with a valid JWT.

### Challenges

I had already become familiar with Ionic during my bachelor's degree and also completed a semester project in it. Therefore, I was already somewhat familiar with its use. However, I had not yet had any contact with NestJS, especially not with object relation mapping. Above all, I was unfamiliar with the connection between Ionic and NestJS. 

The exercise project we did in class was very helpful here. I knew what the general structure should be and how to get started correctly. This allowed me to acquire the knowledge piece by piece and create my NestJS backend and connect it to my Ionic frontend.

### Lessons learned and next steps

I learned a lot from this project, especially about using NestJS. But also about using Ionic. Since the semester project was done as a team, it's natural that some parts of Ionic were covered less. But now, after this project, I feel much more confident with Ionic and NestJS.

In the coming semesters, I would like to continue this project, mainly for myself. I would like to expand the system further, for example with a graphical view of expenses and income or a system that can track various subscriptions.

## Second semester

In the second semester, part of the Mobile Masterclass assignment is to program your own semester project. I was very interested in continuing my digital household budget book, which was written in Ionic + Angular last semester. I wanted to improve the basic functions and add new ones. Basically, I wanted to refactor my code to incorporate improvements suggested by the lecturers, but also to improve it myself. Furthermore, I wanted to expand my user functions so that new users could register and accounts and transactions were user-specific. Finally, I also wanted to incorporate graphs to display expenses and income graphically.

### Features

#### Registration

It was already possible to log in before. However, this was only possible via a predefined test account. Now it is also possible to create new users. This new page can be easily accessed from the login page and you can also return to the login page. 

As with the login, successful registration takes you to the transaction view. Each user also receives a default account called “Bank Account” at the beginning so that they can start adding transactions right away. I have also made the profile page a little nicer. There is a default user image and you can see the email address of the logged-in user.

| ![‘Register Screen’](register_screen.png) | ![‘New Profile Screen’](profile_screen_2.png) |
| ------------------------------------ | ------------------------------------ |

#### Graph view

There is now a new tab called “Statistics” in the tab bar at the bottom. This takes you to the graph view. In this view, you can switch between income and expenses. You can also specify the time period. You can either select a month of the year or switch to the annual view via a drop-down menu, where you can see all transactions for the selected year.

Pie charts are used in the actual graphics view. These show the proportions of expenditure/income for a specific category in that month/year. When you hover over them, you can also see the exact amount for that category. In addition, there is a list view at the bottom with the categories and amounts, which are also sorted according to the percentages in the pie chart

| ![‘Spendings Statistics Screen’](statistics_screen_spendings.png) | ![‘Spendings Statistics Screen 2’](statistics_screen_spendings2.png) | ![‘Earnings Statistics Screen’](statistics_screen_earnings.png) |
| ------------------------- ----------- | ------------------------------------ | ------------------------------------ |

### Technologies

I continue to use Ionic in conjunction with Angular in the frontend and NestJS in the backend. However, some technologies have been added. In the backend, I expanded my Swagger documentation, which was already included in the project but had not yet been used properly. Swagger is used to document REST endpoints. I did this because I wanted to use OpenAPI in the frontend. OpenAPI automatically generates the necessary classes from the Swagger documentation so that I can work with the same classes and methods in the frontend as in the backend. Before OpenAPI, I had to create classes in the frontend for all entities in the backend, along with manually calling the routes.

With OpenAPI, I can now use the generated service classes to easily call methods that handle everything themselves, along with the necessary models. I also used the “Ngx-charts” package, which allows me to create interactive charts in Ionic.

### Challenges

Using Ionic and NestJS was less of a challenge in this project than in the last one. In addition, at the beginning of the semester, we did a project with NestJS and Ionic + React during Wild Week, where I was also able to draw on my knowledge of these tools.

The biggest challenge was probably the graph library, “ngx-charts.” The problem here was that the documentation wasn't very good. You can see which graphs are available and which settings you can use for them, but the documentation doesn't really provide any sample code or examples of what the methods expect. The documentation was also not entirely accurate. For example, the documentation mentioned an attribute for the pie chart that the actual chart didn't have at all.

This sometimes made it difficult to use the graphs effectively. But there was one good thing: there is a demo page where you can at least see what all the different graphs look like and customize them yourself using the checkboxes and inputs provided. Unfortunately, these weren't entirely helpful for the actual implementation either.

### Lessons learned and next steps

First, I learned how to use OpenAPI with NestJS and Ionic + Angular. Fortunately, I was able to refer to a blog post by my fellow student Jan Weiß, which was very helpful. When everything is documented in NestJS, it is very easy to start using the classes in the frontend. 

I also now know how to integrate graphic views into Ionic Angular. Although there may be other graph libraries with different functionalities, I now know how to use them in principle under certain circumstances.



