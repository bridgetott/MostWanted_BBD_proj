"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      mainMenu(searchResults, people)
      break;
    case 'no':
      let searchTrait = [];
      searchResults = traitToSearch(people, searchTrait);      
      infoCheck(searchResults, people);
      break;
      default:
    app(people); // restart app
      break;
  }
  
}


function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }
  person = person[0];
  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      displayPerson(person)
    break;
    case "family":
<<<<<<< HEAD
    var family = [];
    Family(person, people, family);
    displayFamilyMembers(family);
=======
      findSiblings(person, people);
      findSpouse(person, people);
      // if(displayOption = "family"){
      //   parent
      // }
    // TODO: get person's family
>>>>>>> 73fedd085c4455017abdceb8389e77ff7dbab44c
    break;
    case "descendants":
    var descendants = [];
    searchDescendents(person, people, descendants);
    displayPeople(descendants);
    break;
    case "restart":
    app(people); 
    break;
    case "quit":
    return; 
    default:
    return mainMenu(person, people); 
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
 
  return foundPerson;
}

<<<<<<< HEAD

function traitsValidate(input){
  return input.toLowerCase() == "height" || input.toLowerCase() == "gender" || input.toLowerCase() == "weight";
}

function searchByGender(people, filterGender){
  let gender = promptFor("What is the person's gender?", chars);

  filterGender = people.filter(function(person){
    if(person.gender == gender){
=======
function searchByTrait(people){
  let gender = promptFor("What is the person's gender?", chars)
  let height = promptFor("What is the person's height?", chars)
  let height = promptFor("What is the person's eyecolor?", chars)
  let height = promptFor("What is the person's dob?", chars)

  let foundPerson = people.filter(function(person){
    if(person.gender === gender && person.height === height && person.eyecolor === eyeColor && person.dob === dob){
>>>>>>> 73fedd085c4455017abdceb8389e77ff7dbab44c
      return true;
    }
    else{
      return false;
    }
  })
  
  return filterGender;
}

function searchByHeight(people, filterHeight){
  let height = promptFor("What is the person's height, in inches?", chars);

  filterHeight = people.filter(function(person){
    if(person.height == height){
      return true;
    }
    else{
      return false;
    }
  })
<<<<<<< HEAD

  return filterHeight;
}

function searchByWeight(people, filterWeight){
  let weight = promptFor("What is the person's weight, in pounds?", chars);

  filterWeight = people.filter(function(person){
    if(person.weight == weight){
      return true;
    }
    else{
=======
}
function findSiblings(person, people){
  
  let foundSiblings = person.filter(function(element){
    if(element.parents.includes(person.parents) && element.parents.includes(person.parents) === people.id){
      return true;
    }
    else if(element.parents.includes(person.parents) === people.id){
      return true;
    }
    else if(element.parents.includes(person.parents) === null ){
>>>>>>> 73fedd085c4455017abdceb8389e77ff7dbab44c
      return false;
    }
  })
  return filterWeight;
}


function searchDescendents(person, people, family){
  let searchPersonId = person.id;
  let descendants = people.filter(function(person){
      if(person.parents.includes(searchPersonId)){
        return true;
      }
      else{
        return false;
      }
  })
  for(var i = 0; i < descendants.length; i++){
    family.push(descendants[i]);
  }
  if(descendants !== null){
    for(var i = 0; i < descendants.length; i++){
      searchDescendents(descendants[i], people, family)
    }
  }
  else{
    return family;
  }
}

function Parents(person, people, family){
  let parents = [];
  parents = people.filter(function(a){
    if(person.parents !== null){
      if(person.parents.includes(a.id)){
        return true;
      }
      else{
        return false;
      }
    }
  })      
  if(parents != null){
    for(var i = 0; i < parents.length; i++){
      parents[i].relation = "Parent";
      family.push(parents[i]);
    }
  }
  return family;
}

function Siblings(person, people, family){
  let siblings;
  if(person.parents != null){
    for(var i = 0; i < person.parents.length; i++ ){
      siblings = people.filter(function(a){
        if(a.parents.includes(person.parents[i]) && a.id !== person.id){
          return true;
        }
        else{
          return false;
        }
      })
    }
  }
  if(siblings != null){
    for(var i = 0; i < siblings.length; i++){
      siblings[i].relation = "Sibling";
      family.push(siblings[i]);
    }
  }
  return family;
}

function Spouse(person, people, family){
  let spouse;
   spouse = people.filter(function(a){
    if(person.currentSpouse != null){
      if(person.currentSpouse == a.id){
        return true;
      }
      else{
        return false;
      }
    }
  })      
  if(spouse != null){
    for(var i = 0; i < spouse.length; i++){
      spouse[i].relation = "Spouse";
      family.push(spouse[i]);
    }
  }
  return family;
}

function Family(person, people, family){
  Siblings(person, people, family);
  Parents(person, people, family);
  Spouse(person, people, family);
  return family;
  }


function traitToSearch(people, searchTrait){
  let searchType = promptFor("What trait would you like to search by. Type 'gender', 'height', or 'weight'", traitsValidate).toLowerCase();
  switch(searchType){
    case 'gender':
      searchTrait = searchByGender(people, searchTrait); 
      return searchTrait;
      break;
    case 'height':
      searchTrait = searchByHeight(people, searchTrait);   
      return searchTrait;
      break;
    case 'weight':
      searchTrait = searchByWeight(people, searchTrait);      
      return searchTrait;
      break;      
    default:
    app(people);
      break;
  }
}

function filterTraits(people, searchTrait){
  searchTrait = searchByTraits(people, searchTrait)
  return searchTrait;
}
function infoCheck(itemCheck, people){
  if (itemCheck == undefined){
    alert("Could not find anyone that matches your search.  Try");
    return app(people);
  }
   else if (itemCheck.length == 1){
    mainMenu(itemCheck, people);
  }
  else if (itemCheck.length > 1){
    displayPeople(itemCheck);
    return app(people);
  }
}

function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayFamilyMembers(people){
  if(people.length != 0){
    alert(people.map(function(person){
      return person.firstName + " " + person.lastName+ " - " + person.relation;
    }).join("\n"));
  }
  else{
    alert("This person has no immediate family"); 
  }
}

function displayPerson(person){
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Date of Birth:" + person.dob + "\n";
  personInfo += "Height:" + person.height + "\n";
  personInfo += "Weight:"+ person.weight + "\n";
  personInfo += "Eye Color:"+ person.eyeColor + "\n";
  personInfo += "Occupation:"+ person.occupation + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}


function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}


function chars(input, response){
  return true; 
  
}