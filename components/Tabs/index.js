// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topic = document.querySelector('.topics');

function Tabs(info){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = info;
    topic.appendChild(tab);
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        // deal with the response data in here
        // debugger
        response.data.topics.forEach(item =>{
            Tabs(item);
            // console.log(item);
        })
        }
        // console.log(response);
    )
    .catch( err => {
        // deal with the error in here
        console.log("Error:", err);
    })