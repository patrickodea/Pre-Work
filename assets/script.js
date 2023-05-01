var topic = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topic[Math.floor(Math.random() * topic.length)];
/*I went ahead and changed my array variable to be topic prior to getting to Module 3.4.4 where you get the error for them not matching.  I instead used topic not topics.*/

console.log("Here are the topics we learned through Prework:");
listTopic();
console.log("Which topic should we study first?");
selectTopic();
/*Not sure if the function names need to be at the end of the code or not*/

function listTopic()
{
for (var x = 0; x < topic.length; x++) {
    console.log(topic[x] );
}
}
function selectTopic() {
if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopic  === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopic  === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
}

/*Functions split into two different steps.  1.List the topic 2.Select the topic. for loop used to cycle through our topics (variable topic). This value then goes into the randomizer.
  if statements used to look for exact matches to execute what gets displayed based on value given from randomtopic (randomizer value). */