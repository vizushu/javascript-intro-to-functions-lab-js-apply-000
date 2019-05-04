function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase();
}
function logShout(string){
  console.log(string.toUpperCase());
}
function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
<<<<<<< HEAD
  if (string == string.toLowerCase()) return 'I can\'t hear you!'
  else if (string == string.toUpperCase()) return 'YES INDEED!'
  else if (string == 'I love you, Grandma.') return 'I love you, too.'
=======
  if (string === string.toLowerCase()) return 'I can\'t hear you!'
  else if (string === string.toUpperCase()) return 'YES INDEED!'
  else if (string === "I love you, Grandma.") return "I love you, too.";
>>>>>>> 6fb29c47219be20127db14b391da7df37e27f826
}
sayHiToGrandma('hello')
sayHiToGrandma('HELLO')
sayHiToGrandma('I love you, Grandma')