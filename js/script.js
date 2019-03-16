
$(document).ready(function(){
  
  
    // Initializing scrollspy
    
    
    /* Initializing scroll snap
    $(function() {
          $.scrollify({
                  section : ".landing-page-section",
          sectionName : "landing-page-section-scroll",
          setHeights: false,
          scrollSpeed: 600,
          touchScroll: true,
          interstitialSection: '.footer-main',
          });
      }); */
    
    $(".scrollify-action").on('click', function(){
      if ( $(this).data('scroll') == 'next' ) {
        $.scrollify.next();
      }
      else if ( $(this).data('scroll') == 'prev' ) {
        $.scrollify.previous();
      }
    });
    
    // Scrollspy on the floating nav
    $('body').scrollspy({ target: '.floating-scrollspy' });
    
    
    // Smooth scroll on hash
    $('.floating-scrollspy  a').on('click',  function(event){
      event.preventDefault();
  
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
    });
    
});






var PI2 = Math.PI * 2;
var HALF_PI = Math.PI / 2;

var isTouch = 'ontouchstart' in window;
var isSafari =  !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

function Canvas(options) {
  options = _.clone(options || {});
  this.options = _.defaults(options, this.options);
  
  this.el = this.options.el;
  this.ctx = this.el.getContext('2d');
  
  this.dpr = window.devicePixelRatio || 1;
  
  this.updateDimensions();
  window.addEventListener('resize', this.updateDimensions.bind(this), false);
  this.resetTarget();
  
  if(isTouch){
      // touch
	  this.el.addEventListener('touchstart', this.touchMove.bind(this), false);
 	 this.el.addEventListener('touchmove', this.touchMove.bind(this), false);
//   	this.el.addEventListener('touchend', this.resetTarget.bind(this), false);
  } else {
    // Mouse
    window.addEventListener('mousemove', this.mouseMove.bind(this), false);
 	 window.addEventListener('mouseout', this.resetTarget.bind(this), false);
  }
  
  this.setupParticles();

  this.loop();
}

Canvas.prototype.updateDimensions = function() {
  this.width = this.el.width = _.result(this.options, 'width') * this.dpr;
  this.height = this.el.height = _.result(this.options, 'height') * this.dpr;
  this.el.style.width = _.result(this.options, 'width') + 'px';
  this.el.style.height = _.result(this.options, 'height') + 'px';
}

// Update the orb target
Canvas.prototype.mouseMove = function(event) {
	this.target = new Vector(event.clientX * this.dpr, event.clientY* this.dpr);
}

// Reset to center when we mouse out
Canvas.prototype.resetTarget = function() {
	this.target = new Vector(this.width / 2, this.height /2);
}

// Touch Eent
Canvas.prototype.touchMove = function(event) {
  if(event.touches.length === 1) {  event.preventDefault(); }

	this.target = new Vector(event.touches[0].pageX * this.dpr, event.touches[0].pageY * this.dpr);
}

// Defaults
Canvas.prototype.options = {
  count: 20,
  speed: 0.5,
  width: 400,
  height: 400,
  size: 10,
  radius: 5,
  background: '29, 22, 52',
  maxDistance: 100
}

Canvas.prototype.setupParticles = function() {
  this.particles = [];
  var index = -1;
  var between = PI2 / this.options.count;
  while(++index < this.options.count) {
    var x;
    var y;
    var angle;
    var max = Math.max(this.width, this.height);
    
    angle = (index + 1) * between;
    
    x = Math.cos(angle) * max;
    x += this.width / 2;

    y = Math.sin(angle) * max;
    y += this.height / 2;
    
    var particle = new Particle({
      x: x,
      y: y,
      radius: this.options.radius,
      size: this.options.size,
      angle: angle,
      color: this.options.color
    });
    
    this.particles.push(particle);
  }
}

Canvas.prototype.findClosest = function() {
  var index = -1;
  var pointsLength = this.particles.length;

  while(++index < pointsLength) {
    var closestIndex = -1;
    this.particles[index].closest = [];
    
    while(++closestIndex < pointsLength) {
      var closest = this.particles[closestIndex];
      var distance = this.particles[index].position.distanceTo(closest.position);
      if(distance < this.options.maxDistance) {
        var vector = new Vector(closest.position.x, closest.position.y);
        vector.opacity = 1 - (distance / this.options.maxDistance);
        vector.distance = distance;
        this.particles[index].closest.push(vector);
      }
    }
  }
}

Canvas.prototype.loop = function() {
//   this.clear();
  if(isTouch || isSafari) {
	  this.ghost();
  } else {
	  this.ghostGradient();
  }    
  if(this.options.maxDistance > 0) {
	  this.findClosest();
  }    
  this.draw();
  
  window.requestAnimationFrame(_.bind(this.loop, this));
}

Canvas.prototype.clear = function() {
  this.ctx.clearRect(0, 0 , this.width, this.height);
}

Canvas.prototype.ghost = function() {
  this.ctx.globalCompositeOperation = "source-over";
  this.ctx.rect(0, 0 , this.width, this.height);
  if(typeof this.options.background === 'string') {
	  this.ctx.fillStyle = "rgb(" + this.options.background + ")";
  } else  {
    this.ctx.fillStyle = "rgb(" + this.options.background[0] + ")";
  }
    
  this.ctx.fill();
}

Canvas.prototype.ghostGradient = function() {
  var gradient;
  
  if(typeof this.options.background === 'string') {
    this.ctx.fillStyle = 'rgb(' + this.options.background + ')';   
  } else {
	 	var gradient = this.ctx.createRadialGradient(this.width/2, this.height/2, 0, this.width/2, this.height/2, Math.max(this.width, this.height)/2);
    
    var length = this.options.background.length;
    for(var i = 0; i < length; i++){
      gradient.addColorStop((i+1) / length, 'rgb(' + this.options.background[i] + ')');
    }
    this.ctx.fillStyle = gradient;
  }
  
  this.ctx.globalOpacity = 0.1;
  this.ctx.globalCompositeOperation = "darken";
  this.ctx.fillRect(0, 0 , this.width, this.height);
}

// Draw
Canvas.prototype.draw = function() {
  var index = -1;
  var length = this.particles.length;
  while(++index < length) {
    var point = this.particles[index];
    var color = point.color || this.options.color;
    point.update(this.target, index);
    
    this.ctx.globalAlpha = 0.3;
    this.ctx.globalCompositeOperation = "lighten";
    this.ctx.fillStyle = 'rgb(' + color + ')';
    this.ctx.beginPath();
    this.ctx.arc(point.position.x, point.position.y, point.size, 0, PI2, false);
    this.ctx.closePath();
    this.ctx.fill();
    
    if(this.options.maxDistance > 0) {
	    this.drawLines(point, color);
    }
  }  
}

// Draw connecting lines
Canvas.prototype.drawLines = function (point, color) {
  color = color || this.options.color;
  var index = -1;
  var length = point.closest.length;
  this.ctx.globalAlpha = 0.2;
  this.ctx.globalCompositeOperation = "screen";
  this.ctx.lineCap = 'round';
  while(++index < length) {
    this.ctx.lineWidth = (point.size * 2) *  point.closest[index].opacity;
    this.ctx.strokeStyle = 'rgba(' + color + ', ' + point.closest[index].opacity + ')';
    this.ctx.beginPath();
    this.ctx.moveTo(point.position.x, point.position.y);
    this.ctx.lineTo(point.closest[index].x, point.closest[index].y);
    this.ctx.stroke();
  }
}

function Particle(options) {
  options = _.clone(options || {});
  this.options = _.defaults(options, this.options);
  
  this.position = this.shift = new Vector(this.options.x, this.options.y);
  
  this.speed = this.options.speed || 0.01 + Math.random() * 0.04;
  
  this.angle = this.options.angle || 0;
    
  if(this.options.color) {
    var color = this.options.color.split(',');
	  var colorIndex = -1;
    while(++colorIndex < 3) {      
      color[colorIndex] = Math.round(parseInt(color[colorIndex], 10) + (Math.random()*100)-50);
      
      // Clamp
      color[colorIndex] = Math.min(color[colorIndex], 255);
      color[colorIndex] = Math.max(color[colorIndex], 0);
    }
    this.color = color.join(', ');
  } 
  
  // Size
  this.options.size = this.options.size || 7;
  this.size = 1 + Math.random() * this.options.size;
  this.targetSize = this.options.targetSize || this.options.size;
  
  this.orbit = this.options.radius * 0.5 + (this.options.radius * 0.5 * Math.random());
}

Particle.prototype.update = function(target, index) {
  this.angle += this.speed;

  this.shift.x += (target.x - this.shift.x) * this.speed;
  this.shift.y += (target.y - this.shift.y) * this.speed;

  this.position.x = this.shift.x + Math.cos(index + this.angle) * this.orbit;
  this.position.y = this.shift.y + Math.sin(index + this.angle) * this.orbit;
  
  if(!isSafari) {
    this.size += (this.targetSize - this.size) * 0.03;

    if(Math.round(this.size) === Math.round(this.targetSize)) {
      this.targetSize = 1 + Math.random() * this.options.size;
    }
  }
}

function Vector(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Vector.prototype.distanceTo = function(vector, abs) {
  var distance = Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2));
  return abs || false ? Math.abs(distance) : distance;
};

new Canvas({
  el: document.getElementById('canvas'),

  count: 25,
  speed: 0.3,
  radius: 6,
  width: function() { return window.innerWidth; },
  height: function() { return window.innerHeight; },
  size: 15,
  color: '30, 180, 1',
  maxDistance: 100,
  background: ['1, 62, 66', '1, 40, 60']
});