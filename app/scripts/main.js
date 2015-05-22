
// //-------------------------------Setup------------------------------//

// var c = document.getElementById("c");
// var ctx = c.getContext('2d');

// c.width = window.innerWidth;
// c.height = window.innerHeight;

// //--------------------------Global Variables-----------------------//

// var midScreenX = c.width / 2;
// var midScreenY = c.height / 2;

// var particleSize = 2;

// var MAX_PARTICLES = 500;

// var PARTICLES = [];
// var GENERATORS = [];

// //------------------------------Objects---------------------------//
// function Vector(x, y){
//   this.x = x || 0;
//   this.y = y || 0;
  
//   this.add = function(vector){
//     this.x += vector.x;
//     this.y += vector.y;
//   };
  
//   this.getAngle = function(){
//     return atan2(this.y, this.x);
//   };
  
//   this.getMagnitude = function(){
//     return Math.sqrt(this.x * this.x + this.y * this.y);
//   };
// }

// function Particle(position, velocity, size, color){
//   this.position = position || new Vector(0, 0);
//   this.velocity = velocity || new Vector(0, 0);
//   this.size = size || 0;
//   this.color = color || '#000000';
  
//   this.move = function(){
//     this.position.add(this.velocity);
//   };
  
//   this.accelerate = function(vector){
//     this.velocity.add(vector);
//   };
  
//   this.checkSize = function(){
//     this.size += (Math.sqrt(Math.abs(this.position.x - midScreenX)^2 * Math.abs(this.position.y - midScreenY)^2) / 50);
//   };
  
//   this.draw = function(){
//     this.checkSize();
//     ctx.beginPath();
//     ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
//     ctx.fillStyle = this.color;
//     ctx.fill();
//     ctx.closePath();
//   };
  
//   this.inBounds = function(){
//     if(this.position.x > c.width || this.position.x < 0 || this.position.y > c.height || this.position.y < 0){
//       return true;
//     }
//   };
  
// }

// function Generator(position, velocity, rate, offset, color){
  
//   this.position = position;
//   this.velocity = velocity;
//   this.rate = rate;
//   this.count = 0;
//   this.on = true;
//   this.offset = offset;
//   this.segment = 0;
//   this.color = color;
//   this.angle = new Vector(0, 0);
  
//   this.move = function(position){
//     this.position.x = position.x;
//     this.position.y = position.y;};
  
  
//   this.iterate = function(){
//     this.count = (this.count + 1) % this.rate;
//     this.segment = this.segment + 1 % 48;
//   };
  
//   this.checkGen = function(){
//     if(this.count === 0)
//       return true;
//     return false;
//   };
  
//   this.generate = function(){
//     this.iterate();
//     if( this.on && this.checkGen()){
//       for(var i = 0; i < 4; i++){
//         PARTICLES.push(
//           new Particle(
//             new Vector(this.position.x, this.position.y),
//             new Vector(Math.cos(Math.PI * this.segment / 24 + Math.PI * 1/2 * i + this.offset) * this.velocity.x, Math.sin(Math.PI * this.segment / 24 + Math.PI * 1/2 * i + this.offset) * this.velocity.y),
//             particleSize,
//             this.color
//           )
//         );
//       }
//     }
//   };
  
// }

// //-----------------------------Main Logic------------------------//

// function init(){
//   GENERATORS.push(
//     new Generator(
//       new Vector(midScreenX, midScreenY),
//       new Vector(10, 10),
//       1,
//       0,
//       '#ccc'
//     )
//   ); 
//   GENERATORS.push(
//     new Generator(
//       new Vector(midScreenX, midScreenY),
//       new Vector(10, 10),
//       1,
//       Math.PI * 1/4,
//       '#ccc'
//     )
//   ); 
// }

// function checkParticles(){
//   if (PARTICLES.length >= MAX_PARTICLES){
//     PARTICLES.splice(0, (PARTICLES.length - MAX_PARTICLES));
//   }
//   for (var i = 0; i < PARTICLES.length; i++){
//     if (PARTICLES[i].inBounds()){
//       PARTICLES.splice(i, 1); 
//     }
//   }
// }

// function moveParticles(){
//   for (var i = 0; i < PARTICLES.length; i++){
//     PARTICLES[i].move();
//   }
// }

// function drawParticles(){
//   for (var i = 0; i < PARTICLES.length; i++){
//     PARTICLES[i].draw();
//   }
// }

// function generate(){
//   for (var i = 0; i < GENERATORS.length; i++){
//     GENERATORS[i].generate();
//   }
// }

// //-----------------------------The Loop--------------------------//

// function loop(){
//   clear();
//   update();
//   draw();
//   queue();  
// }

// function clear(){
//   ctx.clearRect( 0, 0, c.width, c.height );
// }

// function update(){
//   checkParticles();
//   moveParticles();
//   generate();
// }

// function draw(){
//   drawParticles();
// }

// function queue(){
//   requestAnimationFrame(loop); 
// }

// init();
// loop();
