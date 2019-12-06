// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function Tab(topic){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;
    return tab;
}

document.querySelector('.topics').appendChild(Tab('all'));
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        data.data.topics.forEach(i => {
            document.querySelector('.topics').appendChild(Tab(i));
        });
    })
    .catch(error => {
        console.log(error);
    })
    