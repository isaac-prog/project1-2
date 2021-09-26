## About SG Traffic

SG Traffic is a basic informative drug-abuse website that allows user to gather general information about the abuses of drugs. 

## Project Complexity

SG Traffic follows theme 2 of the following complexity matrix:

* Consume the GET endpoint of an API, or consume a CSV/JSON file
* Adding or removing DOM elements to the display (map, DOM tree, game screen) base on user's actions
* Modifying the CSS of DOM elements based on the user's actions 
* Use of 1D traversal of array 
* Each use of a unique functional mapping method (map, reduce, filter)
* Each use of CSS layout technique (Bootstrap columns, flex box, grid) 
* Each instance of a graph changing dynamically based on the user's action 
* Each instance of one type of graph covered in class (bar, line, chart etc.) 
* Each of one of the following: synchronized chart, chart with at least 3 series, chart reading data from JSON/CSV files or API 
* Each customization added to the default chart (change of colors, for example) 
* Each instance of one type of graph not covered in class


## UI/UX
* User stories:
As a non-profit anti-drug abuse organisation, I want to provide resources about drug abuse related contents all within a single website so that youths at risk, counsellers and educators can access these materials with ease and to raise awareness of the abuse of drugs.

* link to the wireframe: https://app.moqups.com/mLztc8RnHf/view/page/adf9fab7d

* Acceptance criteria:
1. Links to Singapore traffic related websites
2. statistic to show Traffic related accidents in Singapore
3. A search engine to search traffic-related articles with ease


* 5 planes of the UX
1. Surface: The visual design was set to a dark theme, in line with the dark side of traffic negligence. The image depicts the aftermath of an accident, a grim reminder to stay safe on the roads

2. Skeleton design: The interface was set to a simple yet modern feel to the webpage. As youth has a shorter attention span, the use of less words and more pictorial form will keep them engaged for a longer time. As for the navigation design, all materials can be achieved within 3 clicks, so that the targeted audience will spend a longer time interacting with the website.

3. Structure: The more vital links of traffic guidelines and help are kept at the main page, as users seeking traffic related information can reduce the number of clicks as compared to the statistics and news. 

4. scope: The functional specs of filtering the statistics and getting news articles with the use of search engine to meet the user's need of getting all resources within a website.

5.Strategy: The purpose of the website is to raise awareness of the adverse effects of traffic negligence. The end-user can be more well informed of the effects of safety on the roads, educators can utilise materials to teach youths about the dangers of traffic ignorance while the organisation can achieve its goals of raising awareness of traffic safety.

## Features
The website is targeted to educators to help raise awareness of the issues of traffic negligence. The website provides statistics, news and Singapore traffic related links, allowing users to search for their information within three clicks.

## Technologies used
1. [Font awesome](https://fontawesome.com/ "Font Awesome")
   Font Awesome is used across the project HTML for icons used.
2. [ApexCharts](https://apexcharts.com/ "Apex Charts")
   Apex Charts is used for statistic graph in the statistic page
3. [Axios Library](https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js "Axios Library")

## Testing
1. Test if webpage is mobile responsive: 
    a. Right click and select inspect element
    b. Ctrl + Shift + M (For windows users) OR Cmd + M (For Mac users)
    c. under the responsive dropdown, select desired screen width. Contents on the screen should readjust accordingly

2. Test if filter works in statistics line graph
    a. Enter the start and end year accordingly in the text boxes provided.
    b. Graph should readjust according to the time-frame allocated by you.
    c. Alternatively, highlighting a region in the line/bar chart should cause the chart to filter within the x-axis of the highlighted region

3. Clicking on the legend on the line/bar chart should toggle the view of the chart shown.

4. Test for searching of news articles.
    a. Enter keywords into the search bar,
    b. everytime a new keyword is searched, the page should clear old contents and provide the latest content based on the keywords searched.

Note: The news Api only allows up to 100 request a day due to limitation of using a free plan.
