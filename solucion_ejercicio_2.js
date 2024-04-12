class Character {
    constructor(name, health, damage) {
      // Atributos
      this.name = name;
      this.health = health;
      this.maxhealth = health;
      this.damage = damage;
      this.healthHistory = []; // Historial de vida del personaje
      this.healthHistory.push(health); // Añadir la salud inicial al historial
    }
    // Verifica si el personaje está vivo
    isAlive() {
      return this.health > 0;
    }
  
    // Ataca a otro personaje seleccionado
    attack(target) {
      console.log(`${this.name} deals ${this.damage} DMG to ${target.name}`);
      target.health -= this.damage;
      target.healthHistory.push(target.health); // Añadir la nueva salud al historial
    }
  
    // Retorna la información actual del personaje
    status() {
      return `${this.name} - HP ${this.health}/${this.maxhealth}`;
    }
  }
  
  
  // Función para combatir
  function fight(firstCharacter, secondCharacter) {
    console.log("Empieza el combate!");
    updateHealth("hero", hero.health, hero.maxhealth);
    updateHealth("enemy", enemy.health, enemy.maxhealth);
    while (true) {
  
      // Primer personaje ataca si está vivo
      if (firstCharacter.isAlive()) {
        firstCharacter.attack(secondCharacter);
        updateHealth("hero", hero.health, hero.maxhealth);
        updateHealth("enemy", enemy.health, enemy.maxhealth);
      } else {
        console.log(`${firstCharacter.name} died!`);
        break;
      }
  
      // Segundo personaje ataca si está vivo
      if (secondCharacter.isAlive()) {
        secondCharacter.attack(firstCharacter);
        updateHealth("hero", hero.health, hero.maxhealth);
        updateHealth("enemy", enemy.health, enemy.maxhealth);
      } else {
        console.log(`${secondCharacter.name} died!`);
        break;
      }
    }
    console.log("Fin del combate");
    console.log(hero.healthHistory);
    console.log(enemy.healthHistory);
  }

  // Función para actualizar la vida en el HTML
  function updateHealth(character, health, maxHealth) {
    const healthBar = document.getElementById(`${character}-health-bar`);
    const percentage = (health / maxHealth) * 100;
    healthBar.style.width = `${percentage}%`;
  }

  
  // Creación de personajes
  const hero = new Character("Heroe", 100, 10);
  const enemy = new Character("Limo", 50, 5);





  document.addEventListener("keydown", function(event) {
    if (event.key === 'x' || event.key === 'X') {
        if (hero.isAlive() && enemy.isAlive()) {
            hero.attack(enemy);
            updateHealth("hero", hero.health, hero.maxhealth);
            checkEndGame();
        }
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === 'x' || event.key === 'X') {
        if (hero.isAlive() && enemy.isAlive()) {
            enemy.attack(hero);
            updateHealth("enemy", enemy.health, enemy.maxhealth);
            checkEndGame();
        }
    }
});

function updateHealth(character, health, maxHealth) {
    const healthBar = document.getElementById(`${character}-health-bar`);
    const percentage = (health / maxHealth) * 100;
    healthBar.style.width = `${percentage}%`;
    document.getElementById(`${character}-status`).innerText = `${character.toUpperCase()}: ${health}/${maxHealth}`;
}
function checkEndGame() {
    if (!hero.isAlive() || !enemy.isAlive()) {
        console.log("Fin del combate");
        console.log(hero.healthHistory);
        console.log(enemy.healthHistory);
    }
}


function actualizar (){
    
}
  
  // Comenzar combate
  fight(hero, enemy);