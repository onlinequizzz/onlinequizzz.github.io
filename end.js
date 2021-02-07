const finalScore = document.getElementById('finalScore');
const link = document.getElementById('link');

const mostRecentScore = localStorage.getItem('mostRecentScore');
const answerLink = localStorage.getItem('answerLink');

finalScore.innerText = mostRecentScore;
link.href = answerLink;