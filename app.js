const textElement = document.getElementById('text');
const btnElement1 = document.getElementById('btn1');
const btnElement2 = document.getElementById('btn2');
const imgElement = document.getElementById('img');


let images = JSON.parse(localStorage.getItem('images')) || [];
let scenarioArray = [];


function Scenario (text, option1, option2, outcome1, outcome2, image) {
    this.text = text;
    this.option1 = option1;
    this.option2 = option2;
    this.outcome1 = outcome1;
    this.outcome2 = outcome2;
    this.image = image;
    scenarioArray.push(this);
};


function startGame() {
    showScenario(0);
};


function showScenario(scenarioIndex) {
    const currentScenario = scenario[scenarioIndex];
    textElement.textContent = currentScenario.text;
    removeDisplayedImage();
    updateImage(currentScenario.image);
    buttonEvent(currentScenario);
};


function buttonEvent(currentScenario) {
  function button1click() {
    selectOption(currentScenario.outcome1);
    btnElement1.removeEventListener('click', button1click);
    btnElement2.removeEventListener('click', button2click);
  }

  function button2click() {
    selectOption(currentScenario.outcome2);
    btnElement1.removeEventListener('click', button1click);
    btnElement2.removeEventListener('click', button2click);
  }
  btnElement1.textContent = currentScenario.option1;
  btnElement1.addEventListener('click', button1click);

  btnElement2.textContent = currentScenario.option2;
  btnElement2.addEventListener('click', button2click );
}


function updateImage(imageUrl) {
  if (imageUrl && !images.includes(imageUrl)) {
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.id = 'scenario-image';
    imgElement.appendChild(imageElement);

    images.push(imageUrl);
    localStorage.setItem('images', JSON.stringify(images));
  }
}


  function selectOption(outcome) {
    console.log('Outcome:', outcome);
    if (outcome === 'restart') {
      startGame();
    } else {
      showScenario(outcome);
    }
  }

function removeDisplayedImage() {
    const displayedImage = document.getElementById('scenario-image');
    if (displayedImage) {
      displayedImage.remove();
    }
  }
  

  function resetGame() {
    scenarioArray = [];
    removeDisplayedImage();
  }
  

const scenario = [
    new Scenario ('You start your journey at a cross roads. Do you go left or right?', 'left', 'right', 1, 2, null),

    new Scenario ('While following the path, you reach a small house.', 'Knock on the door', 'Sneak in through the window', 3, 4, null),
        
    new Scenario ('You follow the path until you reach a forest.', 'Go in during the day', 'wait until night', 5, 6, null),
        
    new Scenario ('You are greeted by a mantis and he invites you to have tea with him. He offers you some cake.', 'Take the cake', 'Refuse the cake', 7, 8, null), 
    
    new Scenario ('You notice a mantis sleeping in a chair and a gold and silver coin on the table.', 'Take the silver coin', 'Take the gold coin', 9, 10, null),
       
    new Scenario ('You walk in to the into the forest and notice a hive hanging from a tree. As you go towards it a bee approaches you and offers you some honey.', 'Refuse the honey', 'Accept the honey', 11, 12, null),

    new Scenario ('You enter the forest at night and you find yourself getting sleepy. what do you do?', 'Sleep in a nearby tree', 'Sleep in a small cave', 13, 14, null),

    new Scenario ('The mantis is pleased with you and you both enjoy tea and cake together. Congratulations your found the Mantis.', 'Restart', null, 'restart', 0, 'Images/mantis.png'), //
    
    new Scenario ('The mantis find this extremely rude and you are eaten alive.', 'Restart', null, 'restart', 0, null), //
    
    new Scenario ('You take the silver coin and sneak to the back door. But you soon realise the mantis is stood right behind you.', 'Give the silver coin', null, 15, null, null),

    new Scenario ('You take the gold coin and sneak to the back door. But you soon realise the mantis is stood right behind you.', 'Give the gold coin', null, 16, null, null),

    new Scenario ('The bee takes offence and the whole swarm comes after you.', 'Restart', null, 'restart', null, null), //

    new Scenario ('The bee is happy you like the honey and brings you to the hive where he tells you to go meet with the queen.', 'Go to the chamber with a quite buzzing sound', 'Go to the chamber with the loudest buzzing sound', 17, 18, null),

    new Scenario ('You wake up to find a stag beetle who looks like hes about to fight you.', 'Get up and fight back', 'Stand your ground', 19, 20, null),

    new Scenario ('You wake up to find yourself in a web', 'wiggle and squirm', 'grab and nearby leaf and pull yourself out', 21, 22, null),

    new Scenario ('You try and give back the silver coin but the mantis hates silver and cuts off you head', 'Restart', null, 'restart', null, null), //

    new Scenario ('You give the gold coin back and the mantis gets distracted by its beauty while escape and make it outside. where do you go?', 'Run to a nearby pond', 'Run to a nearby lamp post', 23, 24, null),

    new Scenario ('You find yourself in a large room with a table full of food.', 'Start eating the food', 'Wait at the table', 25, 26, null),

    new Scenario ('You walk into a the storage chamber and fall into a pool of honey. You dont have wings so you sink into the sweet sticky honey.', 'Restart', null, 'restart', null, null), //

    new Scenario ('The beetle is too strong for you. You died in battle.', 'Restart', null, 'restart', null, null), //

    new Scenario ('The beetle admires your courage and youboth become gym bros. Congratulations you found the beetle.', 'Restart', null, 'restart', null, 'Images/beetle.png'), //

    new Scenario ('You become tangled in the web and must wait your your inevitable demise.', 'Restart', null, 'restart', null, null), //

    new Scenario ('A spider is surprised to find you escaped the web and decided to leave you alone. Congratulations you found the spider.', 'Restart', null, 'restart', null, 'Images/spider.png'), //

    new Scenario ('You slip and fall into the pond. Water is your weakness.', 'Restart', null, 'restart', null, null), //

    new Scenario ('You go and sit under the lamp for a while until you are approached by a moth. She is happy you also love lamps and you both just stare at the lamp together. Congratulations you found the moth.', 'Restart', null, 'restart', null, 'Images/moth.png'), //

    new Scenario ('The bees find this very rude and they throw you out of the hive.', 'Restart', null, 'restart', null, null), //

    new Scenario ('After waiting for a while the bee queen appears and you join her for dinner. Congratulations you found the bee queen.', 'Restart', null, 'restart', null, 'Images/bee.png'), //

   ]

    startGame();