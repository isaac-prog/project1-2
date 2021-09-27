## About SG Traffic

SG Traffic is a basic informative traffic website that allows user to gather general information about traffic safety. Users of the site can interact with charts and search up news articles to gather information. Links are provdied to redirect users to official traffic related websites to provide users with more insightful information.

## Organisation Goals and User Stories
As a non-profit traffic safety organisation, I want to provide resources about drug abuse related contents all within a single website so that youths at risk, counsellers and educators can access these materials with ease and to raise awareness of the negligence on the roads.The purpose of the website is to raise awareness of the adverse effects of traffic negligence. The end-user can be more well informed of the effects of safety on the roads, educators can utilise materials to teach youths about the dangers of traffic ignorance while the organisation can achieve its goals of raising awareness of traffic safety.
The website is targeted to educators to help raise awareness of the issues of traffic negligence. The website provides statistics, news and Singapore traffic related links, allowing users to search for their information within three clicks.

* Acceptance criteria: 
1. Links to Singapore traffic related websites so that users can navigate to a government approved website for more credible information
2. statistic to show Traffic related accidents in Singapore for users to analyse data for their own understanding and research purposes.
3. A search engine for users to search traffic-related articles with ease.

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

* link to the wireframe: https://app.moqups.com/mLztc8RnHf/view/page/adf9fab7d


## UI/UX

* 5 planes of the UX
1. Surface: The visual design was set to a dark theme, in line with the dark side of traffic negligence. The image depicts the aftermath of an accident, a grim reminder to stay safe on the roads

2. Skeleton design: The interface was set to a simple yet modern feel to the webpage. As youth has a shorter attention span, the use of less words and more pictorial form will keep them engaged for a longer time. As for the navigation design, all materials can be achieved within 3 clicks, so that the targeted audience will spend a longer time interacting with the website.

3. Structure: The more vital links of traffic guidelines and help are kept at the main page, as users seeking traffic related information can reduce the number of clicks as compared to the statistics and news. 

4. scope: The functional specs of filtering the statistics and getting news articles with the use of search engine to meet the user's need of getting all resources within a website.

5. Strategy: Links were designed to be at the front page to redirect users to the most credible traffic information in Singapore. Charts display the statistics and can be used as a deterrent factor for users who wants to be complacent on the roads. news articles act as further reinforced evidence of the current traffic related accidents to remind users to take traffic safety with upmost importance.

## Colors and fonts
Red symbolises bloodshed in traffic accidents to remind users about the high risk of traffic negligence, which could reult in death.
The fonts were delibrately enlarged and less words were used to capture the user's attention and keep their attention span on the page longer. The theme of the website is serious, so the contrast of black and red against a fainter whitesmoke would bring out the severity of the message: Traffic accidents result in serious injuries and even death.

## Features
1. Charts and its filters: Interactive and allow the users to seive through to find their desired statistics
2. Search bar: Allows the user to filter and search for news articles of a topic that they have in mind
3. Links to other websites: Allows the user to have more variety of informed choices
4. Color transition and page animation: keeps the users' interested and send a grave message to the user

## Technologies used
1. [Font awesome](https://fontawesome.com/ "Font Awesome")
   Font Awesome is used across the project HTML for icons used.
2. [ApexCharts](https://apexcharts.com/ "Apex Charts")
   Apex Charts is used for statistic graph in the statistic page
3. [Axios Library](https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js "Axios Library")
4. [Navbar Bootstrap](https://getbootstrap.com/docs/4.0/components/navbar/ "Bootstrap5 Navbar")
5. [Gnews.io](https://gnews.io/ "Gnews.io")


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

5. Test if color transition is working:
    a. when the user lands onto the landing page, the title and the subheader should transition from white to red

6. Test anchortag:
    a. when the user clicks on the "get started" button, the screen should scroll down to the external links container.

7. Test sliding animation:
    a. Users can navigate to a new page using the navbar
    b. They are expected to see sliding animations between the 2 pages that they navigated

## Deployment
1. Go to https://www.netlify.com/
2. click "get started for free" button
3. Login/signup
4. within the "Team overview" tab, click on "new site from git" button
5. Under continuous deployment, select github
6. select the Repo that you wish to deploy
7. leave the settings as it is, do not manipulate the settings and select "deploy"
8. you will be provided a new link, click on the new link and you will be redirected to your deployed website. Deployment done.

## credit 

GIA image: https://www.google.com/url?sa=i&url=https%3A%2F%2Fcz.linkedin.com%2Fcompany%2Fgiasingapore&psig=AOvVaw1PXW1ZI3pDXXqwLITYy2AH&ust=1632819578668000&source=images&cd=vfe&ved=0CAwQjhxqFwoTCMCI3YrlnvMCFQAAAAAdAAAAABAD

red cross image: https://i0.wp.com/www.concrete-online.co.uk/wp-content/uploads/2016/12/Red-Cross-Jon-Harald-S%C3%B8by-wikipedia.org_.jpg?fit=800%2C533&ssl=1

SSDC image: https://ssdcl.com.sg/wp-content/uploads/2019/03/course-1-new.jpg
Traffic police image: https://www.police.gov.sg/-/media/saluting_woman4.jpg?la=en&hash=94EC113503347327900C5B3DB960DF678102096B

Traffic accident wallpaper: https://media.istockphoto.com/photos/car-accident-picture-id969500140?k=20&m=969500140&s=612x612&w=0&h=D7o9GI7gyAh0ychyMi5sGMAWI0pTNURvw3PBsUOzbBg=

apexcharts: https://apexcharts.com/

Bootstrap 5: https://getbootstrap.com/docs/4.0/components/navbar/