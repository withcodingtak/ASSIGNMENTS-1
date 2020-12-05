let ask = prompt ("Do You to calculate area of circle, rectangle or triangle");

switch (ask) {
  case 'rectangle':
    let length_r = prompt("What is the length of rectangle");
    let width_r = prompt("What is the width of rectangle");
    let area_r = (length_r*width_r);
  alert(`Area of the Rectangle is ${area_r}`);
    break;
   
  case 'circle':
    let radius = prompt("What is the radius of circle");
    let area_c = (22/7*radius*radius);
    alert(`Area of circle is ${area_c}`);
    break;
    
  case 'triangle':
    let height_t = prompt("What is the height of Triangle");
    let base_t = prompt("What is the base of triangle");
    let area_t = (1/2*base_t*height_t);
    alert (`Area of Triangle is ${area_t}`);
    
    break;
  
  
  
  default:
    alert (" Sorry We don't support that");
}

