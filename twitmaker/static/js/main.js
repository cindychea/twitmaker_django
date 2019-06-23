document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    axios.post(
      this.action,
      formData,
    ).then(function(response) {
      let tweetList = document.querySelector('.tweets');
      let newTweet = document.createElement('li');
      newTweet.className = 'tweet';
      let tweetMessage = document.createElement('p');
      let tweetTime = document.createElement('time');
      tweetTime.innerText = response.headers.date;
      tweetMessage.innerText = response.data.message;
      newTweet.appendChild(tweetTime);
      newTweet.appendChild(tweetMessage);
      tweetList.prepend(newTweet);
    }).catch(function(error) {
      console.log(error);
    });
  });
});