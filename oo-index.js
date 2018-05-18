const eventArea = document.getElementById('event_area')
const imageArea = document.getElementById('image_area')
const attackButton = document.getElementById('attack').addEventListener("click",()=> sammyUnicorn.attack())
document.getElementById('restart').addEventListener("click",()=> sammyUnicorn.restart())
const defendButton = document.getElementById('defend').addEventListener("click",()=> sammyUnicorn.defend())
const healButton = document.getElementById('heal').addEventListener("click",()=> sammyUnicorn.heal())
const breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> sammyUnicorn.breakdance())
const eatButton = document.getElementById('eat').addEventListener("click",()=> sammyUnicorn.eatCronut())

class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
  }
  attack(){
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("'ATTAAAAAAAAAK!''"));
    eventArea.prepend(div);
    imageArea.className = 'attack';
  }
  restart() {
    while (eventArea.hasChildNodes()) {
        eventArea.removeChild(eventArea.lastChild);
    }
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Out on the street, ready to go!"));
    eventArea.prepend(div);
    imageArea.className = 'new';
  }

  defend() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You put sunglasses on."));
    eventArea.prepend(div);
    imageArea.className = 'defend';
  }

  heal() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You feel refreshed after yoga."));
    eventArea.prepend(div);
    imageArea.className = 'heal';
  }

  breakdance() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("It's really spinning class"));
    eventArea.prepend(div);
    imageArea.className = 'breakdance';
  }

  eatCronut() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You've gained 1000 health points."));
    eventArea.prepend(div);
    imageArea.className = 'eat';
  }
}

let sammyUnicorn = new Unicorn ("Sammy", "FlameThrower")
console.log(sammyUnicorn)
