
// Menu Mobile(Responsive function)

document.getElementById('hamburguer-icon').onclick = function() {

  document.getElementById('sliding-header-menu-outer').style.right = "0";
}

document.getElementById('sliding-header-menu-close-button').onclick = function() {

  document.getElementById('sliding-header-menu-outer').style.right = "-320px";
}

// About us Tab (My Mission, My Vision and My Values functionalities implementation)

var aboutUs = {
  "My Mission": "Make each customer recognized as an authority in their segment. Add value to the business, enhance the growth of operations and promote and strengthen the client's relationship with its target audience, through the generation of relevant content.",
  "My Vision": "To be recognized by customers and the market as a partner, innovative and creative company, which always offers the best products and solutions in Integrated Business Communication.",
  "My Values": "<ul><li>Commitment</li><li>Innovation</li><li>Professional ethics</li><li>Overcoming results</li><li>Continuous improvement</li></ul>"
};

var unselected_color = "#646872";
var seletected_color = "#2A2D34";

var about_tags = document.getElementsByClassName('single-tab');

for(var i = 0; i < about_tags.length; i++) {
  about_tags[i].onclick = function() {
    for(var j = 0; j < about_tags.length; j++) {
      about_tags[j].style.backgroundColor = unselected_color;
      about_tags[j].style.fontWeight = 'normal';
    }

    this.style.backgroundColor = seletected_color;
    this.style.fontWeight = 'bold';

    var selected = this.innerHTML;
    document.getElementById('box-text').innerHTML = aboutUs[selected];
  }
}

// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

var current_service = 0;
//Previous button implementation
document.getElementById('service-previous').onclick = function() {
  if(current_service == 0){
    var previous = our_services.length - 1;
  }
  else{
    var previous = current_service - 1;
  }

  document.getElementById('service-title').innerHTML = our_services[previous].title;
  document.getElementById('service-text').innerHTML = our_services[previous].text;
  current_service = previous;
};

//Next button implementation
document.getElementById('service-next').onclick = function() {
  if(current_service == our_services.length - 1){
    var next = 0;
  }
  else{
    var next = current_service + 1;
  }

  document.getElementById('service-title').innerHTML = our_services[next].title;
  document.getElementById('service-text').innerHTML = our_services[next].text;
  current_service = next;
};


// Data Footer


