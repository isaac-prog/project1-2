let newsCounter=0;

async function loadNewsApi() {
  let apiKey = 'ab6e3bcb8285c9465972109f6f1a7761'
  let newsSearch = document.querySelector('#news-search').value;
  newsCounter += 1;
  if (newsCounter>1){
    document.getElementById('news-display').innerHTML = "";}
    // let response = await axios.get('news.json');
    let response = await axios.get('https://gnews.io/api/v4/search?q='+'"'+newsSearch.replace(/\s+/g, '-')+'"'+'&token='+apiKey);
  updateDisplay(response.data.articles);
};

let btn = document.querySelector('#search-btn');

btn.addEventListener('click', function(){
  loadNewsApi();
})

function updateDisplay(articles) {
  for (let eachArticles of articles) {
     
    let newsApiDate = eachArticles.publishedAt; // got from the Api
 
    let timestamp = new Date(newsApiDate).getTime();
    let Day = new Date(timestamp).getDate();
    let Month = new Date(timestamp).getMonth() + 1;
    let Year = new Date(timestamp).getFullYear();
    let OurNewDateFormat = `${Day}/${Month}/${Year}`;
 
      console.log(timestamp)
      console.log(OurNewDateFormat)
      console.log(eachArticles.url)
    

    let htmlSnippet = `<a href='${eachArticles.url}' style='text-decoration: none'><div class="card" style="width: 100%; border: 2px solid black; display: flex; justify-content: center; align-items:center">
            <img src='${eachArticles.image}' style="width:50%;height:50%;margin-right:15px;>
                <h2 class="card-title" style='font-size:3vw'>${eachArticles.title}</h2>
                <small style='font-size:2.5vw'>${eachArticles.description}</small>
                 <p><small>Date published: ${OurNewDateFormat}<small></p>
                    
            </div>
            </div>
            </a>`
    let newsDisplayDiv = document.querySelector("#news-display");
    newsDisplayDiv.innerHTML += htmlSnippet;
  }
}