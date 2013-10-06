/* Schema to copy-paste
  {
    discipline:"dev",//or eng, exp, required
    identifier:"", // required
    published:true,
    headerTitle:"",
    date:"", // Will appear as plain text
    hyperlinks:{
      "code":"http://github.com/spilliams/",
      "demo":"http://spencerenglish.com/demo/"
    },
    imageSrc:"foo.png", // or empty string
    paragraphs:[
      "",
      ""
    ]
  },
*/
// Keep these in chronological order, most recent at the top

var articles = [
  {
    discipline:"dev",//eng, exp
    identifier:"upstart",
    published:false,
    headerTitle:"Upstart Labs",
    date:"October 2013",
    hyperlinks:{
      "Upstart's website":"http://www.upstartlabs.com/"
    },
    imageSrc:"upstart.png",
    paragraphs:[
      "My first job out of college was amazing. I had the good fortune to have been snapped up by startup accelerator Upstart Labs in January 2012. I was their first junior developer and I stayed with them for 22 months before they closed doors.",
      "While I was there I led development on at least 9 major projects, both as a web developer and an iOS developer. In fact, Upstart paid me to learn iOS and&mdash;briefly&mdash;Android.",
      "My responsibilities were to take initiative during development and to work closely with other team roles including manager, designer, client, test user and back-end developer. In some cases I pair-programmed with another front-end developer, but for the most part I did my work by myself. For some projects we tested out management tools like Lighthouse, Asana, Github Issues or Trello. I didn't write many automated test cases because the team was focused on developing prototypes. Making sure that features worked for 90% of users 90% of the time was more important than buttoning down every edge case.",
      "The community at Upstart was very supportive. We went to conferences, hosted presentations and brown-bag lunches, threw launch parties for our clients, even played hookie sometimes to make frambois floats on the roof.",
      "I value highly my experiences at Upstart Labs and I don't think I could have found a better entry level position to start my career."
    ]
  },
  {
    discipline:"eng",//eng, exp
    identifier:"coathooks",
    published:true,
    headerTitle:"Coat Hook Build",
    date:"9 September 2013",
    hyperlinks:{
      "process photos":"https://www.facebook.com/media/set/?set=a.10201033342942155.1073741826.1425030030&type=1&l=2b37e042ab"
    },
    imageSrc:"hooks.jpg",
    paragraphs:[
      "This apartment has needed decent coat hooks ever since I moved in 11 months ago. When I set about my decorating research on Pinterest the hooks were near the top of the list. I even found some I liked on the Internet, but since they were no longer for sale I was forced to recreate them myself.",
      "<img data-src='images/articles/hooks/finished1.jpg'/>",
      "These coat hooks are based on the <a href='http://cargocollective.com/workerman/Muchroom' target='_blank'>MUCHroom</a>, by Adam Brackney. I'm not sure what process he used, but my ideals for this project were<br /><ul><li>clean, sharp lines and corners</li><li>invisible fasteners</li><li>Easy installation</li><li>Bonus points: reusability</li><li>Bonus points: made from recycled material</li></ul>",
      "<img data-src='images/articles/hooks/sketches.jpg'/>",
      "I started with some scrap plywood pieces leftover from my last endeavor. They were mostly 1/2&quot; x 1/2&quot;, and 10-12&quot; long. I started by gluing 6 together in a 2x3 grid, alternating the grains for Style! Then I cut the end at a 45&deg; angle and chiseled out a small cavity.",
      "<img data-src='images/articles/hooks/cavity.jpg'/>",
      "The cavity allowed me to embed a drywall-screw into the coat hook. When I glued another 1x3 grid of plywood on top, it appeared as if the screw comes from nowhere!",
      "<img data-src='images/articles/hooks/clamp.jpg'/>",
      "A little light sanding with 80-grit paper, 2 coats of Dark Walnut stain, 2 coats of polyurethane and voilà! Once I finished one hook without killing myself or ruining any of my coats, I started the other two.",
      "<img data-src='images/articles/hooks/progress.jpg'/>",
      "Now I have a place to put dripping raincoats and scarves I never wear!",
      "<img data-src='images/articles/hooks/finished2.jpg'/>",
      "For anyone who wants to recreate my success, my materials/expendables list:",
      "<ul><li>scrap plywood (1/2&quot; x 1/2&quot; x 12&quot;, qty 18)</li><li>drywall screws (2 1/8&quot;, qty 3)</li><li>drywall anchors (<a href='https://www.google.com/search?hl=en&q=nylon+zip-it&gbv=2&biw=1361&bih=607&sei=U58uUofuJcPMiQLqzYGQDQ&tbm=isch#gbv=2&hl=en&q=nylon+zip-it+drywall+anchor&safe=active&tbm=isch' target='_blank'>nylon ZIP-IT</a>, qty 3)</li><li>wood glue</li><li>wood putty</li><li>80-grit sandpaper</li><li>Dark Walnut stain</li><li>clear satin polyurethane</li></ul>",
      "And my tools list:<ul><li>hand saw</li><li>screw-gun (1/4&quot; bit and quick-change drywall bit)</li><li>chisel (1/2&quot;)</li><li>quick-clamps (6)</li><li>hand screwdriver</li><li>putty knife</li><li>random orbital sander</li></ul>"
    ]
  },
  {
    discipline:"exp",//eng, exp
    identifier:"wmcsd",
    published:true,
    headerTitle:"The Corps of Self-Discovery",
    date:"23 August 2013",
    hyperlinks:{
      "blog":"http://www.williamsandmeyer.co/",
      "twitter photos":"https://twitter.com/surlylewis/media/grid",
      "photosynths":"http://photosynth.net/userprofilepage.aspx?user=spilliams&content=Synths",
      "route":"http://www.spencersbigadventure.com/tours/5"
    },
    imageSrc:"wmcsd.png",
    paragraphs:[
      "In the summer of 2013 I undertook a quest to finish my cross-country cycling tour. This time I was with my good friend Grace, whom I had met in college 4 years previous.",
      "<img data-src='images/articles/wmcsd/0.jpg'/>",
      "We started in St Louis MO where Grace lived and about where I left off at the end of last year's tour. We kicked everything off with a big barbecue party with Grace's friends and family, then hit the Katy trail. At first it was slow going because we weren't in shape yet, besides which the Missouri was flooding and there was some tornado damage to cut through.",
      "<img data-src='images/articles/wmcsd/1.jpg'/>",
      "For the most part we stayed in public campgrounds. We each brought a tent&mdash;until one fateful stormy night in South Dakota, when we discovered how not-waterproof Grace's tent was. Sometimes we stayed with hosts from the WarmShowers network (which is like Couch Surfing but only for cyclists) and a handful of times we splurged on a hotel. I was really happy to camp though. I have a lot of good childhood memories in campgrounds, and I was disappointed last year that I didn't camp more.",
      "<img data-src='images/articles/wmcsd/2.jpg'/>",
      "Our route followed the Lewis &amp; Clark trail up the Missouri River, and we would have continued north some more but we heard some pretty terrifying stories of the hydrofracking in North Dakota. We decided to detour West, and we were not sorry. Advantages of the detour were places like the Badlands, the Black Hills, the Bighorn mountains and Yellowstone National Park.",
      "<img data-src='images/articles/wmcsd/3.jpg'/>",
      "<img data-src='images/articles/wmcsd/4.jpg'/>",
      "There was never a day we didn't get on a bike. We would plan a &quot;rest day&quot; every 4 or 5 riding days, but those ended up being more about laundry and chores than actual resting. But we did some sightseeing too. In the Black Hills we took a day off to bike up the first half of the Needles Highway, to Sylvan Lake. There we took a relaxing swim before hiking up Harney Peak&mdash;the tallest US mountain East of the Rockies. This photo was taken during the Needles ride.",
      "<img data-src='images/articles/wmcsd/5.jpg'/>",
      "We had a lot of fun riding through Yellowstone, and once we were in Montana my mother caught up to us in her car and supported us through the Rockies. We drove for parts of that, because not doing so would mean we wouldn't get to see Glacier National Park, which is something I'd wanted to see for a long time.",
      "<img data-src='images/articles/wmcsd/9.jpg'/>",
      "<img data-src='images/articles/wmcsd/10.jpg'/>",
      "<img data-src='images/articles/wmcsd/11.jpg'/>",
      "<img data-src='images/articles/wmcsd/12.jpg'/>",
      "Once we were on the Columbia river it wasn't long before we hit the Gorge and its unceasing Easterly winds. That last week of riding was the toughest I can remember, and entailed a couple of late night rides, a couple of early morning rides (before sunrise), and not a few tears of frustration. Here we are just after the 3000-mile mark near Umatilla WA.",
      "<img data-src='images/articles/wmcsd/7.jpg'/>",
      "After taking a few days' vacation in Portland, we took to the bikes again to finish the last leg: to the Pacific! We were joined by my brother and Grace's father. We rode out to a primitive USFS campground that Saturday night and the next morning, after stopping for breakfast in Astoria, we made it to Seaside and the welcoming (bronze) arms of Captains Meriwether Lewis and William Clark. Grace's mother and grandmother were there at the finish line too! We all drove back to Portland and enjoyed a celebratory dinner.",
      "<img data-src='images/articles/wmcsd/8.jpg'/>",
      "In all, we biked over 3300 miles in 11 weeks. This map shows the route we took, next to last year's for contrast.",
      "<img data-src='images/articles/wmcsd/route.jpg'/>",
    ]
  },
  {
    discipline:"eng",
    identifier:"woodworking2013",
    published:true,
    headerTitle:"Hibernation '13",
    date:"March 2013",
    hyperlinks:{
      "bed frame process photos":"https://www.facebook.com/media/set/?set=a.10200702431389573.2207303.1425030030&type=1&l=ee5c90176b",
      "tv table process photos":"https://www.facebook.com/media/set/?set=a.10200879808543891.1073741825.1425030030&type=1&l=5efd309b0d"
    },
    imageSrc:"woodworking13.jpg",
    paragraphs:[
      "In the winter of 2012-2013 I got bored with my free time stuck at home during the rain, and I was sick of sleeping on the floor. So I did something about it. I embarked on two woodworking projects over a couple of months, with abounding success.",
      "The first and more successful project was a bed frame. The design was based on an <a href='http://www.instructables.com/id/Nail-less-glue-less-almost-screw-less-fire-finish/' target='_blank'>instructable</a> I found. The main idea here was for easy assembly.",
      "<img data-src='images/articles/bed.jpg'/>",
      "The outer rails are clear cedar 1x8s, the inner frame is std 2x6, and the corner posts are std 6x6. The sheet (not pictured) is 5/8\" rough ply.",
      "The bed frame in all took me almost a month, maybe $200 in materials, and I had a lot of fun!",
      "The next project I undertook was a table for my TV and various living room media devices. At the time my TV was sitting on a side table, and I wanted my side table back. So I built a tv table.",
      "<img data-src='images/articles/tv.jpg'/>",
      "The whole thing is built with 1/2\" birch ply, high-grade stuff.",
      "I'm not exactly proud of it, but I don't consider it a failure. I definitely learned a lot about process and furniture ideals. For instance: furniture looks much nicer with several coats of poly (which this project did not use). And sand, sand, sand, sand. Then, sand.",
      "My next woodworking project will be to make some coat hooks in the style of Workerman's <a href='http://workerman.storenvy.com/products/6087-muchroom-wall-hook-rosewood' target='_blank'>Muchroom Wall Hook</a>, then matching towel racks. But this hobby phase has run its course for now and I'll get back into it in a few months.",
      "<span class='sans'>Update 9/2/2013:</span> I have upgraded the media console in my living room. I had bought a new speaker system and AV receiver, which it turns out is a standard width and too wide for the existing shelf. So I cut the wall out, inserted a support and a new shelf. Then, because I was tired of how much it didn't shine, I applied two coats of satin-finish polyurethane. Oh, and I put real feet on the thing too. Here's the result:",
      "<img data-src='images/articles/tv2.jpg'/>"
    ]
  },
  {
    discipline:"dev",//eng, exp
    identifier:"kiss",
    published:true,
    headerTitle:"KISS",
    date:"8 December 2012",
    hyperlinks:{},
    imageSrc:"",
    paragraphs:[
      "Keep It Simple, Stupid. The story of this website.",
      "I wanted something to show off my work, something that could give a prospective employer a glance into my personality and attitude, not to mention my mad skillz. It's not a blog. Yes, I say \"I\" a lot, and I write in my speaking voice, but don't be fooled: I do that with everybody. My blog is now <a href='http://blog.spencerenglish.com' target='_blank'>over here</a>.",
      "Anyway, this site is super simple. One page. No searching. Doesn't look shitty on a phone.",
      "It uses <a href='http://compass-style.org/' target='_blank'>Compass</a> and <a href='http://foundation.zurb.com/' target='_blank'>Foundation</a>. Color inspiration came from <a href='http://colorschemedesigner.com/' target='_blank'>Color Scheme Designer</a> and the background from <a href='http://subtlepatterns.com/' target='_blank'>Subtle Patterns</a>. Iconography by the talented <a href='http://jasminerae.me/' target='_blank'>Jasmine Friedrich</a>, available at <a href='http://thenounproject.com/' target='_blank'>The Noun Project</a>.",
      "Opinions expressed here are my own. Work displayed here is mine unless otherwise stated."
    ]
  },
  {
    discipline:"eng",
    identifier:"tablaptop",
    published:true,
    headerTitle:"DIY Tablaptop",
    date:"12 October 2012",
    hyperlinks:{},
    imageSrc:"tablaptop.jpg",
    paragraphs:[
      "So I had an extra laptop lying around. I used to use it as a home media server, but then the Internet got better and now all my media lives in the cloud.",
      "Then I saw what some friends of mine did with theirs: they reversed the display and hung it on the wall. After plugging in a wireless keyboard and mouse it works as a tv or picture frame or recipe book.",
      "So I got creative with my 2009 13\" Macbook. The process was not simple, required some soldering, lots of Dremel-ing and some finger-crossing. Here's the result:",
      "<img data-src='images/articles/tablaptop.jpg'/> (If you can't tell, it's running Ubuntu)",
      "Since building it, the tablaptop has sat on the hobby table. After finishing it I was struck with \"well, now what?\", and the answer was \"fashion brackets to afix it to a wall, possibly in any location/orientation, get a wireless keyboard and mouse, make sure power is available (the laptop's battery died years ago)\". Too much, for what gain? So the project stalled.",
      "I did have fun working on it, and I like to think it helped my soldering skills, but the truth is that a real tablet is far and away better at being a kitchen device than a junky old laptop. Sorry, Rorqual."
    ]
  },
  {
    discipline:"exp",
    identifier:"xcbt2012",
    published:true,
    headerTitle:"Personal Growth and Killer Calves",
    date:"August 2012",
    hyperlinks:{
      "photos":"https://www.facebook.com/media/set/?set=a.4988463595772.2198941.1425030030&type=1&l=364ac6498d",
      "videos":"http://www.youtube.com/playlist?list=PLJ9rBKWG7TZ_6twwQPIhbvvr9bQcyHQ7S",
      "blogs":"http://blog.spencerenglish.com/category/xc-tour/",
      "route":"http://www.spencersbigadventure.com/tours/3"
    },
    imageSrc:"xcbt.jpg",
    paragraphs:[
      "In August and September of 2012 I attempted to bike across the United States of America, without companions and carrying everything I needed with me. TL;DR: I did not succeed. That is, I did not meet that goal. I did however succeed in many other ways.",
      "<img data-src='images/articles/xcbt4.jpg' />",
      "I made it from Portland, Maine to Hannibal, Missouri (I stopped biking around Jacksonville, IL though...but who's counting?). It took me 4 weeks. In all I had I think 7 rest days, most of which were spent in Pittsburgh.",
      "Along the way I met quite a few interesting people. I carried a tent and sleeping bag with me, and I camped out for a few nights (mostly between DC and Pittsburgh). The majority of evenings I spent with host families from <a href='http://warmshowers.org/' target='_blank'>Warmshowers.org</a>: a network of cycling enthusiasts. It's like Couch Surfing but only for cycling tourists.",
      "<img data-src='images/articles/xcbt2.jpg' />",
      "My bike was a Surly Cross-Check, which I had purchased after my previous bike&mdash;a 70s (I won't call it \"vintage\") Peugeot&mdash;was totalled in a collision. Coincidentally, the Peugeot was red, and the car that hit me was a Taurus...anyway. The panniers were lovingly hand-made by my brother, the man behind <a href='http://northstbags.com' target='_blank'>North St Bags</a>. The saddle is a Brooks B17 Standard, and since it broke in around the 800-mile mark it was a joy to ride on.",
      "<img data-src='images/articles/xcbt3.jpg' />",
      "So why did the tour end early? It comes down to lifestyles. I knew from the beginning that a tour of this scale would be less of an athletic feat than a lifestyle change, and I was not wrong. Working a 9-5 in an office building with the same people, the work is all the same, the content is all the same. You know ahead of time how to go about your day, and what you'll experience. On a tour, only the former is true. One of your crutches has been removed. One of your eyes has been opened. You know that you'll spend the day biking, but you have absolutely no idea what's going to happen.",
      "I also knew from the start that the tour was going to happen in two distinct halves. The first half (between Portland, Maine and Hannibal, Missouri) was filled with family and friends and reunions and parties. The second half...well I don't know <b>anybody</b> between the Hannibal/Madison longitude and the West Coast. I have family connections, and my friends have family connections, but there was nobody I knew personally. So I had to figure out a meaningful path to take. I decided on the Lewis &amp; Clark trail. It would extend the length of the trip by a third, but in the end I would be a happy biker.",
      "Long story short, when I got to Hannibal I realized (a) I wouldn't make it back home before my leave time was used up, and (b) the transition between the two attitudes of the tour&mdash;visiting with people versus visiting with the ghosts of frontiersmen&mdash;would take more than just teeth-gritting. So instead I relaxed for a weekend, had some fun in Columbia and Hannibal and packed up my gear.",
      "<img data-src='images/articles/xcbt1.jpg' />",
      "Plans are underway for continuing the tour next summer&mdash;this time with a partner."
    ]
  },
  {
    discipline:"dev",//eng, exp
    identifier:"sba",
    published:true,
    headerTitle:"Big Adventure v1.0",
    date:"August 2012",
    hyperlinks:{
      "demo":"http://spencersbigadventure.herokuapp.com/"
    },
    imageSrc:"",
    paragraphs:[
      "An app that scrapes social media and pulls in GPS data to provide near-real-time personal tracking. For when you're traveling and want to show off where you are / let people know you're not dead."
    ]
  },
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
    published:false,
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
    imageSrc:"tea.jpg",
    paragraphs:[
      "I've been thinking about designed decay. Like when you break in a shoe and its performance becomes better as it wears out. Where the object is designed to decay, where the decay is built into its function or form.",
      "I think it's a really cool idea to make things that mutate as they age such that the mutations are designed.",
      "I made a few coasters out of a bit of untreated white birch plywood. Really nice stuff. Every time I drink tea I'll leave the teabag sitting on it. When the stain dries it gets darker and takes shape. Subsequent teabag-stains overwrite the previous ones, and splashing water on the coaster will wipe them all out.",
      "<img data-src='images/articles/tea.JPG'/>",
      "This is the kind of \"decay\" I'm referring to. No, the coaster isn't structurally compromised, but its original form is not being preserved either. One thing I noticed about the coaster's mutation is that when I get a really dark or interesting stain on it, my interaction with the coaster becomes different. I don't put teabags on it as willingly, or I do so in a way I hope will augment the stain rather than wipe it out. The mutation of the item's form has also affected its function.",
      "The line between \"Designed Decay\" and \"Ages Well\" is a fine one, but I think it's an important distinction. It will be fun applying this to my life and work."
    ]
  },
  {
    discipline:"eng",
    identifier:"ambilight",
    published:true,
    headerTitle:"Ambilight Clone",
    date:"24 March 2012",
    hyperlinks:{},
    imageSrc:"ambilight.jpg",
    paragraphs:[
      "<img data-src='images/articles/ambilight.jpg'/>",
      "With the help of the folks over at <a href='http://adafruit.com' target='_blank'>Adafruit</a>, I made an Arduino-based LED ambient backlight for my computer monitor. It looks great with movies and games!",
      "<img data-src='images/articles/ambilight2.jpg'/>"
    ]
  },
  {
    discipline:"dev",//eng, exp
    identifier:"sparrowlike",
    published:true,
    headerTitle:"Panning on a UITableViewCell",
    date:"21 March 2012",
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
    date:"19 February 2012",
    hyperlinks:{
      "code":"http://github.com/spilliams/color-wheel/",
      "demo":"http://spencerenglish.com/demo/jquery/color-wheel/"
    },
    imageSrc:"jquery-colorwheel.png",
    paragraphs:[
      "<img class='thumb' data-src='images/articles/jquery-colorwheel.png'> This plugin helps you generate your own custom colorwheel and colorpicker. The wheel is fashioned with CSS and very small <code>td</code>s. It's buggy and incomplete and very inefficient."
    ]
  },
  {
    discipline:"eng",
    identifier:"cmu",
    published:true,
    headerTitle:"Bachelor of Science",
    date:"22 December 2011",
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
    date:"June 2011",
    hyperlinks:{},
    imageSrc:"deutschland.jpg",
    paragraphs:[
      "<img data-src='images/articles/freiburg1.jpg' />",
      "In the summer of 2011 I traveled to <a href='http://en.wikipedia.org/wiki/Freiburg_im_Breisgau' target='_blank'>Freiburg im Brei&szlig;gau, Baden-W&uuml;rttemberg, Deutschland</a> to study the German language at the <a href='http://www.goethe.de/enindex.htm' target='_blank'>Goethe-Institut</a>. I also visited Paris and Wien during my travels.",
      "<img data-src='images/articles/freiburg2.jpg' />",
      "At first there was a shock&mdash;similar to the one I experienced upon moving to Pittsburgh (or Portland). Everything is alien and backwards, like the dream where things that should look familiar are the wrong color, or in the wrong place. I slowly got over that and started exploring.",
      "<img data-src='images/articles/paris2.jpg' />",
      "The experience changed me. When I was a little boy my world extended only to the edge of town. Then as I grew up my world grew with me. It grew to include New England, and the Eastern Seaboard, and the whole of the United States. I took trips abroad with family and the Boy Scouts, even to other continents, but none of those trips expanded my world quite as much as this one did.",
      "<img data-src='images/articles/paris1.jpg' />"
    ]
  },
  {
    discipline:"dev",//eng, exp
    identifier:"ribbrv1",
    published:true,
    headerTitle:"Ribbr v1.0",
    date:"15 June 2011",
    hyperlinks:{
      "source":"http://ribbr.com/dev/ribbr v1.0.zip",
      "demo":"http://ribbr.com/dev"
    },
    imageSrc:"ribbr.png",
    paragraphs:[
      "A simple proof-of-concept for a pure-CSS3 ribbon generator. Version 2.0, a full web-app, is currently in development with no estimated launch date."
    ]
  },
  {
    discipline:"dev",//eng, exp
    identifier:"itunes-search",
    published:false,
    headerTitle:"iTunes Search",
    date:"27 July 2007",
    hyperlinks:{
      "source":"http://spencerenglish.com/demo/other/itunes%20search.scpt"
    },
    imageSrc:"",
    paragraphs:[
      "A simple applescript that puts all songs whose title matches the given term into a new playlist."
    ]
  }
]
