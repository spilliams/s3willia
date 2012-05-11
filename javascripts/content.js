/* Schema to copy-paste
{
  discipline:"dev",//eng, exp
  identifier:"",
  published:true,
  headerTitle:"",
  date:"",
  hyperlinks:{
    "code":"http://github.com/spilliams/",
    "demo":"http://spencerenglish.com/demo/"
  },
  imageSrc:"foo.png",
  paragraphs:[
    "",
    ""
  ]
}
*/

var articles = [
  {
    discipline:"dev",//eng, exp
    identifier:"fishtank",
    published:true,
    headerTitle:"Fishtank Grid for Google TV",
    date:"9 May 2012",
    hyperlinks:{
      "code":"http://github.com/spilliams/fishtank-grid",
      "demo":"http://spencerenglish.com/demo/fishtank"
    },
    imageSrc:"fishtank.png",
    paragraphs:[
      "What's better than just targeting 720p and 1080i/p devices using ugly media queries? Degradable, flexible grids that minimize page overflow. This simple implementation displays many tiles on a screen, and chooses a specific \"grade\" to display the tile at. The higher grades are bigger, and presumably contain more content. It only requires jQuery 1.1.4+ (untested below 1.7.1)."
    ]
  },
  {
    discipline:"exp",
    identifier:"makefixlearn",
    published:true,
    headerTitle:"Make, Fix, Learn",
    date:"5 May 2012",
    hyperlinks:{
      "gist":"https://gist.github.com/2651051"
    },
    imageSrc:"",
    paragraphs:[
      "This is a chronicle of my endeavor to make, fix or learn something every day for the foreseeable future. It also keeps track of my previous dreams both achieved and unachieved."
    ]
  },
  {
    discipline:"exp",
    identifier:"designeddecay",
    published:true,
    headerTitle:"Inspiration: Designed Decay",
    date:"10 April 2012",
    hyperlinks:{},
    imageSrc:"",
    paragraphs:[
      "I've been thinking about designed decay. Like when you break in a shoe and its performance becomes better as it wears out. Where the object is designed to decay, where the decay is built into its function or form",
      "I think it's a really cool idea to make things that mutate as they age such that the mutations are designed.",
      "I have a coaster made out of a bit of untreated white birch plywood. Really nice stuff. Every tiem I drink tea I'll leave the teabag on it. When the stain dries it gets darker and takes shape. Subsequent teabag-stains overwrite the previous ones, and splashing water on the coaster will wipe them all out.",
      "The line between \"Designed Decay\" and \"Ages Well\" is a fine one, but I think it's an important distinction. It will be fun applying this to my life and work."
    ]
  },
  {
    discipline:"eng",
    identifier:"ambilight",
    published:true,
    headerTitle:"Ambilight Clone",
    date:"24 Mar 2012",
    hyperlinks:{},
    imageSrc:"ambilight.jpg",
    paragraphs:[
      "<img src='images/previews/ambilight.jpg'/> With the help of the folks over at <a href='http://adafruit.com' target='_blank'>Adafruit</a>, I made an Arduino-based LED ambient backlight for my computer monitor. It looks great with movies and games! <img src='images/previews/ambilight2.jpg'/>"
    ]
  },
  {
    discipline:"dev",//eng, exp
    identifier:"sparrowlike",
    published:true,
    headerTitle:"Panning on a UITableViewCell",
    date:"21 Mar 2012",
    hyperlinks:{
      "code/demo":"http://github.com/spilliams/sparrowlike"
    },
    imageSrc:"",
    paragraphs:[
      "This demo is for anyone looking to create a custom pan gesture on a UITableViewCell. I had to stumble through many blind alleys before arriving at a solution and it is my hope that others after me can spend less time following in my misguided footsteps and more time forging ahead."
    ]
  },
  {
    discipline:"dev",//eng, exp
    identifier:"jquery-colorwheel",
    published:true,
    headerTitle:"jQuery ColorWheel",
    date:"19 Feb 2012",
    hyperlinks:{
      "code":"http://github.com/spilliams/color-wheel/",
      "demo":"http://spencerenglish.com/demo/jquery/color-wheel/"
    },
    imageSrc:"jquery-colorwheel.png",
    paragraphs:[
      "<img class='thumb' src='images/previews/jquery-colorwheel.png'> This plugin helps you generate your own custom colorwheel and colorpicker. The wheel is fashioned with CSS and very small <code>td</code>s. It's buggy and incomplete and very inefficient."
    ]
  },
  {
    discipline:"eng",
    identifier:"cmu",
    published:true,
    headerTitle:"Bachelor of Science",
    date:"22 Dec 2011",
    hyperlinks:{},
    imageSrc:"cmu.png",
    paragraphs:[
      "I graduated December 2011 from the Carnegie Institute of Technology at Carnegie Mellon University with a Bachelor of Science degree in Mechanical Engineering.",
      "During my time there I was intrigued by Computer Science and robotics, and I was a member of <a href='http://en.wikipedia.org/wiki/Scotch%27n%27Soda' target='_blank'>Scotch'n'Soda Theatre</a>, the University's student-run theatre company."
    ]
  },
  {
    discipline:"exp",
    identifier:"deutschland",
    published:true,
    headerTitle:"Deutschland, Paris, Wien",
    date:"Jun 2011",
    hyperlinks:{},
    imageSrc:"",
    paragraphs:[
      "In the summer of 2011 I traveled to <a href='http://en.wikipedia.org/wiki/Freiburg_im_Breisgau' target='_blank'>Freiburg im Brei&szlig;gau, Baden-W&uuml;rttemberg, Deutschland</a> to study the German language at the <a href='http://www.goethe.de/enindex.htm' target='_blank'>Goethe-Institut</a>. I also visited Paris and Wien during my travels.",
      "The experience changed me. When I was a little boy my world extend only to the edge of town. Then as I grew up my world grew with me. I had taken trips abroad before, even to other continents, but none of those trips expanded my world quite as much as this one did."
    ]
  },
  {
    discipline:"dev",//eng, exp
    identifier:"ribbrv1",
    published:true,
    headerTitle:"Ribbr v1.0",
    date:"15 Jun 2011",
    hyperlinks:{
      "source":"http://ribbr.com/dev/ribbr v1.0.zip",
      "demo":"http://ribbr.com/dev"
    },
    imageSrc:"ribbr.png",
    paragraphs:[
      "A simple proof-of-concept for a pure-CSS3 ribbon generator. Version 2.0, a full web-app, is currently in development."
    ]
  },
  {
    discipline:"dev",//eng, exp
    identifier:"itunes-search",
    published:false,
    headerTitle:"iTunes Search",
    date:"27 Jul 2007",
    hyperlinks:{
      "source":"http://spencerenglish.com/demo/other/itunes%20search.scpt"
    },
    imageSrc:"",
    paragraphs:[
      "A simple applescript that puts all songs whose title matches the given term into a new playlist."
    ]
  }
]