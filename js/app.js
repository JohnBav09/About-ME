    'use strict'
    
    //Name of consumer (Optional)
    console.log('Welcome to my app')
    var name = prompt('What is your name')
    alert('Hi '  +  name  + ' it is nice to meet you')
    console.log('Asked for a name, result : + name')

//Birthday to get an age of our consumer
     console.log('Welcome to my app')
    var birthday = prompt('What is your birthday')
    alert( name  + 'You have a very nice bithday')
    console.log('Asked for a name, result : + birthday')

    //birthplace to get locations of where the consumer is
     console.log('Welcome to my app')
    var birthplace = prompt('Where were you born')
    alert( name   + ' ' + birthplace   + 'is beautiful')
    console.log('Asked for a Birthplace, result : + Birthplace')

    //favorite activity
     console.log('Welcome to my app')
    var leisure_activity = prompt('What is your favorite leisure activity')
    alert('Cool!')
    console.log('Asked for a name, result : + Favorite leisure activity')
    
    //stores all of the info from the answers
    console.log('Thank you')
    alert('Thanks ' + name + ' we got to know alot about you! your birthday is' +  birthday +  ' You were born in' +  birthplace +  ' and you like' + leisure_activity)
    console.log('Asked for a name, result : + name')

    var question = prompt('Can we ask you more questions? Lower case only.')
    
    if(question === 'yes')
    alert('Great! We really appriceate your time')

    var Mariners, Superbowl, Pokemon, Darksouls, Area, ultramoondeath, Multiplication, congrats

    Mariners = prompt('Do the Mariners have the longest postseason drought accross the 4 major sports?');
    
    console.log(typeof(Mariners));
    
    if(Mariners === 'yes'){
      Mariners = prompt('Correct!');
    } else {
     alert('They sadly are.')
    }
    
        console.log(typeof(Superbowl));
    Superbowl = prompt('There are 5 teams that havent made the Superbowl 3 Coming from the AFC Conference');
    
    if(Superbowl === 'no'){
      alert('Amazing!');
    } else {
      alert('Nope, only 4 teams have yet to make it to the superbowl');
    }
    
    console.log(typeof(Pokemon));
    Pokemon = prompt('There are 151 Pokemon in the First generation');
    
    if(Pokemon === 'yes'){
      alert('You must have caught them all');
    } else{ 
      alert('this game wasnt your cup of tea. That is just fine');
    }

    console.log(typeof(Darksouls));
    Darksouls = prompt(' Are there are 26 Bosses in Dark Souls 1 NOT including the DLC?');
    
    if(Darksouls === 'no'){
      alert('Let the light of Artorias Shine on you.');
    } else {
      alert('Manus will take you strait to the abyss');
    }

    console.log(typeof(Area));
    Area = prompt('Circles and sqares have there area calculated differently?');
    
    if(Area === 'Yes'){
      alert('Amazing!');
    } else {
      alert('One needs a radius other needs width');
    }

    var number_to_guess = '33' 
    var tries = 4

    /*need 3 tries 
    guess correctly
    tell to high or too low
    */
  console.log (typeof(ultramoondeath));
  ultramoondeath= prompt(' How many pokemon died in my Pokemon Ultra Moon Nuzlocke?')

  for(var i = 0; i < tries; i++){
   if(ultramoondeath > number_to_guess) {
      alert(ultramoondeath + ' Too high guess a lower number')
    } else if(ultramoondeath < number_to_guess) {
      alert(ultramoondeath + ' Too low guess a higher number') }
      else if(ultramoondeath === number_to_guess) {
      alert(ultramoondeath + ' was correct! CONGRATS! Next question') 
      }
      if(ultramoondeath === number_to_guess){
        console.log(ultramoondeath + ' was correct! CONGRATS! Next question');
      break; 
      }
      
      ultramoondeath= prompt(' Try again')
    }
        
    var tries2 = 6
    for(var j = 0; j < tries2; j++){
  console.log (typeof(Multiplication))
  Multiplication= prompt(' Name 1 of the 4 properties of multiplication. NOTE: Capitalize the first letter.')
  

if(Multiplication === 'Associative' || 'Commutative' || 'Identity' || 'Distributive') {
  alert('Amazing job');
} else {
  Multiplication= prompt(' Try again')
}

if(Multiplication === 'Associative' || 'Commutative' || 'Identity' || 'Distributive'){
  console.log( Multiplication + ' was correct! CONGRATS! Next question');
break; 
}

    }

Multiplication= prompt("All possible answers include: 'Associative', 'Commutative', 'Identity', 'Distributive'")

console.log(typeof(congrats));

Congrats = prompt('you got a 7/7! There is not any wrong ansewers! You are not expected to know these random facts!');

