/**
 * Adapted by @pushthings4ward from
 *
 * Based on work by Nuno Baldaia (@nunobaldaia) for REACTION project
 * Based on the work by Mike Bostock (@mbostock) for the
 * New York Times interactive visualization: "At the Republican Convention, the Words Being Used"
 * http://www.nytimes.com/interactive/2012/08/28/us/politics/convention-word-counts.html
 */


var data = {};

/**
 * Data processing
 */
(function() {

data.topics = [
  {
    "name": "Things You Probably Didn't Know About",
    "count": "10",
    "sentiment": "positive",
    "forms": "Things You Probably Didn't Know About"
  },
  {
    "name": "Problems Only People",
    "count": "10",
    "sentiment": "positive",
    "forms": "Problems Only People"
  },
  {
    "name": "Words That Mean Something",
    "count": "12",
    "sentiment": "positive",
    "forms": "Words That Mean Something"
  },
  {
    "name": "Definitive Proof That",
    "count": "12",
    "sentiment": "positive",
    "forms": "Definitive Proof That"
  },
  {
    "name": "Things Only People Who",
    "count": "10",
    "sentiment": "positive",
    "forms": "Things Only People Who"
  },
  {
    "name": "The Definitive Ranking Of",
    "count": "12",
    "sentiment": "positive",
    "forms": "The Definitive Ranking Of"
  },
  {
    "name": "This Is What Happens When",
    "count": "10",
    "sentiment": "positive",
    "forms": "This Is What Happens When"
  },
  {
    "name": "Words That Have A Totally Different Meaning",
    "count": "9",
    "sentiment": "positive",
    "forms": "Words That Have A Totally Different Meaning"
  },
  {
    "name": "Tell Us About Yourself(ie)",
    "count": "8",
    "sentiment": "positive",
    "forms": "Tell Us About Yourself"
  },
  {
    "name": "Americans Try",
    "count": "9",
    "sentiment": "positive",
    "forms": "Americans Try"
  },
  {
    "name": "Things We Learned",
    "count": "4",
    "sentiment": "positive",
    "forms": "Things We Learned"
  },
  {
    "name": "Photos That Prove",
    "count": "7",
    "sentiment": "positive",
    "forms": "Photos That Prove"
  },
  {
    "name": "Pictures That Prove",
    "count": "6",
    "sentiment": "positive",
    "forms": "Pictures That Prove"
  },
  {
    "name": "Problems every",
    "count": "6",
    "sentiment": "positive",
    "forms": "Problems every"
  },
  {
    "name": "Thoughts Everyone Has",
    "count": "6",
    "sentiment": "positive",
    "forms": "Thoughts Everyone Has"
  },
  {
    "name": "Watch This Adorable",
    "count": "3",
    "sentiment": "positive",
    "forms": "Watch This Adorable"
  },
  {
    "name": "Everything You Need To Know About",
    "count": "6",
    "sentiment": "positive",
    "forms": "Everything You Need To Know About"
  },
  {
    "name": "Pickup Lines That Would",
    "count": "4",
    "sentiment": "positive",
    "forms": "Pickup Lines That Would"
  },
  {
    "name": "Celebrity #TBT Photos You May Have Missed This Week",
    "count": "8",
    "sentiment": "positive",
    "forms": "Celebrity #TBT Photos You May Have Missed This Week"
  },
  {
    "name": "Here's What You Should Eat For Dinner",
    "count": "6",
    "sentiment": "positive",
    "forms": "Here's What You Should Eat For Dinner"
  },
  {
    "name": "Celebrity Tweets You Missed Today",
    "count": "9",
    "sentiment": "positive",
    "forms": "Celebrity Tweets You Missed Today"
  },
  {
    "name": "Leonardo DiCaprio",
    "count": "4",
    "sentiment": "positive",
    "forms": "Leonardo DiCaprio"
  },
  {
    "name": "Undeniable Proof That",
    "count": "4",
    "sentiment": "positive",
    "forms": "Undeniable Proof That"
  },
  {
    "name": "GIFs That Prove",
    "count": "3",
    "sentiment": "positive",
    "forms": "GIFs That Prove"
  },
  {
    "name": "Things People With",
    "count": "4",
    "sentiment": "positive",
    "forms": "Things People With"
  }







]
.map(topic);

function topic(topic) {
  topic.re = new RegExp("\\b(" + topic.forms.split(";").map(d3.requote).join("|") + ")\\b", "gi");
  return topic;
}

data.comments = [
  
{"text" : "25 Things You Probably Didn't Know About \"Seinfeld\""},
{"text" : "39 Things You Probably Didn't Know About The \"Back To The Future\" Trilogy"},
{"text" : "10 Things You Probably Didn't Know About \"The Giver\""},
{"text" : "36 Things You Probably Didn't Know About \"The Catcher In The Rye\""},
{"text" : "36 Things You Probably Didn't Know About \"The Simpsons\""},
{"text" : "10 Things You Probably Didn't Know About \"The Giver\""},
{"text" : "61 Things You Probably Didn't Know About \"Friends\""},
{"text" : "49 Things You Probably Didn't Know About Melbourne"},
{"text" : "29 Things You Probably Didn't Know About \"The Parent Trap\""},
{"text" : "39 Things You Probably Didn't Know About \"Doctor Who\""},
{"text" : "23 Problems Only People Raised By Teachers Will Understand"},
{"text" : "21 Problems Only People In Vancouver Understand"},
{"text" : "23 Problems Only People With Freckles Will Understand"},
{"text" : "20 Problems Only People Who Can't Hide Their Emotions Understand"},
{"text" : "17 Problems Only People With Dyed Hair Have"},
{"text" : "Problems Only People With Hot Bodies Will Understand"},
{"text" : "17 Problems Only People With Dyed Hair Have"},
{"text" : "23 Problems Only People Who Smoke Weed Would Understand"},
{"text" : "25 Problems Only People Who Have Played In A School Orchestra Will Understand"},
{"text" : "25 Problems Only People Who Can't Sing Will Understand"},
{"text" : "21 Words That Mean Something Different With Your Best Friend"},
{"text" : "19 Words That Mean Something Completely Different When You're A Gay Man"},
{"text" : "17 Words That Mean Something Totally Different When You Move In With Your Partner"},
{"text" : "16 Words That Mean Something Completely Different When You're A Lesbian"},
{"text" : "29 Words That Mean Something Totally Different When You're A Writer"},
{"text" : "17 Words That Mean Something Totally Different When Spelled Backwards"},
{"text" : "19 Words That Mean Something Totally Different To Humanities Students"},
{"text" : "17 Words That Mean Something Totally Different To Fast Food Workers"},
{"text" : "23 Words That Mean Something Very Different If You Work In Entertainment"},
{"text" : "17 Words That Mean Something Different When You Have A Dog"},
{"text" : "21 Words That Mean Something Different When You're A Cat"},
{"text" : "19 Words That Mean Something Totally Different When You're A Scientist"},
{"text" : "Definitive Proof That Gaston Is The Thirstiest Disney Character"},
{"text" : "This Vine Is Definitive Proof That Literally No One Wants To Be Michelle In Destiny's Child"},
{"text" : "Definitive Proof That Shay Mitchell Is ***Flawless"},
{"text" : "Definitive Proof That Pugs Are The Most Confusing Creatures On Earth"},
{"text" : "Definitive Proof That French Men Are The Hottest"},
{"text" : "Weird Al's Newest Parody Music Video Is Definitive Proof That He Is Part Of The Illuminati"},
{"text" : "Definitive Proof That Eye Color Changes Everything"},
{"text" : "Definitive Proof That Guys Are Hotter When They Are Covered In Dirt"},
{"text" : "Definitive Proof That The X-Men Are Sexier IRL"},
{"text" : "Definitive Proof That Max Was The Smartest Character In \"The Little Mermaid\""},
{"text" : "Definitive Proof That Queensland Is The Sunshine State"},
{"text" : "Definitive Proof That Queensland Is The Real Sunshine State"},
{"text" : "26 Things Only People Who Studied Abroad In Australia Will Understand"},
{"text" : "21 Things Only People Who Hate Texting Know To Be True"},
{"text" : "15 Things Only People Who Are Literally Addicted To Chocolate Will Understand"},
{"text" : "27 Things Only People Who Grew Up Nerdy Understand"},
{"text" : "18 Things Only People Who Read To Escape Will Understand"},
{"text" : "25 Things Only People Who Fail At Exercise Will Understand"},
{"text" : "18 Things Only People Who Read To Escape Will Understand"},
{"text" : "22 Things Only People Who Hate Noise Will Understand"},
{"text" : "25 Things Only People Who Like To Be Alone Will Understand"},
{"text" : "25 Things Only People Who Like To Be Alone Will Understand"},
{"text" : "The Definitive Ranking Of Presidents Who Look Like Their Pets"},
{"text" : "The Definitive Ranking Of The \"Planet Of The Apes\" Movies"},
{"text" : "The Definitive Ranking Of The \"Planet Of The Apes\" Movies"},
{"text" : "The Definitive Ranking Of Hangover Cures"},
{"text" : "The Definitive Ranking Of The Worst Places To Fart"},
{"text" : "The Definitive Ranking Of Kingdom Hearts' Organization XIII By Sexiness"},
{"text" : "The Definitive Ranking Of The Men On \"Gilmore Girls\""},
{"text" : "The Definitive Ranking Of The 5 Best Dog Sex GIFs"},
{"text" : "The Definitive Ranking Of The Men On \"Gilmore Girls\""},
{"text" : "The Definitive Ranking Of Disney Character Hairstyles"},
{"text" : "The Definitive Ranking Of '90s Aussie Kids TV Shows"},
{"text" : "The Definitive Ranking Of '90s Aussie Kids TV Shows"},
{"text" : "This Is What Happens When You Invite The Obamas To Your Wedding"},
{"text" : "This Is What Happens When A Famous Person Instagrams You"},
{"text" : "This Is What Happens When You Replace Women In Everyday Situations With Men"},
{"text" : "This Is What Happens When 200+ Artists Recreate An Episode Of \"Sailor Moon\""},
{"text" : "This Is What Happens When You Try And Back Out Of Jumping Off A Diving Board"},
{"text" : "This Is What Happens When A Fox Steals And Tries To Eat Your GoPro"},
{"text" : "This Is What Happens When Wolf Blitzer Goes Inside A Hamas Tunnel"},
{"text" : "This Is What Happens When You Ask A Bunch Of Gay Men To Draw Vaginas"},
{"text" : "This Is What Happens When A Fox Steals And Tries To Eat Your GoPro"},
{"text" : "This Is What Happens When You Ask A Bunch Of Gay Men To Draw Vaginas"},
{"text" : "21 Words That Have A Totally Different Meaning In Ohio"},
{"text" : "15 Words That Have A Totally Different Meaning In Montreal"},
{"text" : "23 Words That Have A Totally Different Meaning In Ohio"},
{"text" : "29 Words That Have A Totally Different Meaning When You're Black"},
{"text" : "29 Words That Have A Totally Different Meaning When You're Black"},
{"text" : "28 Words That Have A Totally Different Meaning For People Who Work Shifts"},
{"text" : "19 Words That Have A Totally Different Meaning In Ireland"},
{"text" : "22 Words That Have A Totally Different Meaning When You Are A Runner"},
{"text" : "22 Words That Have A Totally Different Meaning When You're A Dancer"},
{"text" : "Tell Us About Yourself(ie): Ellar Coltrane"},
{"text" : "Tell Us About Yourself(ie): Linda Perry"},
{"text" : "Tell Us About Yourself(ie): Tom Ellis"},
{"text" : "Tell Us About Yourself(ie): Irina Shayk"},
{"text" : "Tell Us About Yourself(ie): Nat Faxon"},
{"text" : "Tell Us About Yourself(ie): Larenz Tate"},
{"text" : "Tell Us About Yourself(ie): Kim Raver"},
{"text" : "Tell Us About Yourself(ie): Jesse Metcalfe"},
{"text" : "Americans Try Filipino Street Food"},
{"text" : "Americans Try Irish Snack Foods"},
{"text" : "Watch Americans Try International Sodas For The First Time"},
{"text" : "Americans Try Singaporean Food"},
{"text" : "Watch Americans Try Thai Snacks For The First Time"},
{"text" : "Americans Try Canadian Snacks"},
{"text" : "Americans Try Indian Snacks For The First Time"},
{"text" : "Americans Try To Guess The Meaning Of Australian Words"},
{"text" : "Americans Try To Guess The Meaning Of Australian Words"},
{"text" : "12 Things We Learned From The New Harry Potter Short Story"},
{"text" : "15 Things We Learned From Kanye's GQ Cover Story"},
{"text" : "10 Things We Learned About The Making Of \"Divergent\""},
{"text" : "16 Things We Learned From Bill Nye The Science Guy's Emails With The White House"},
{"text" : "10 Photos That Prove Pixie Cuts Totally Change Your Face"},
{"text" : "21 Photos That Prove Everything Is Better With Batman"},
{"text" : "33 Photos That Prove Australian Women Are Insanely Gorgeous"},
{"text" : "23 Photos That Prove Trey Phillips From \"Laguna Beach\" Is Still The Best"},
{"text" : "13 Photos That Prove Cats Run The Illuminati"},
{"text" : "29 Photos That Prove Turtlenecks Must Be Stopped"},
{"text" : "13 Photos That Prove Cats Run The Illuminati"},
{"text" : "31 Pictures That Prove South Africa Is The Craziest Place On Earth"},
{"text" : "19 Shocking Pictures That Prove Australia Is The Home Of The Illuminati"},
{"text" : "23 Pictures That Prove Glasses Make Guys Look Obscenely Hot"},
{"text" : "29 Pictures That Prove New Zealand Is The Greatest Country On Earth"},
{"text" : "22 Pictures That Prove We're Living In The Damn Future"},
{"text" : "24 Pictures That Prove That Life Hacks Have Gone Way Too Far"},
{"text" : "23 Problems Every Only Child Will Understand"},
{"text" : "24 Problems Every Intern Will Understand"},
{"text" : "25 Problems Every Short Man Faces In His Life"},
{"text" : "38 Problems Every Italian Kid Knows"},
{"text" : "21 Problems Every Jump Roper Faces In Their Life"},
{"text" : "37 Tube Problems Every Londoner Has Experienced"},
{"text" : "86 Thoughts Everyone Has At Catholic Mass"},
{"text" : "53 Thoughts Everyone Has When Doing Laundry"},
{"text" : "46 Thoughts Everyone Has When They Go To The Cheesecake Factory"},
{"text" : "53 Thoughts Everyone Has When Doing Laundry"},
{"text" : "46 Thoughts Everyone Has When They Go To The Cheesecake Factory"},
{"text" : "57 Thoughts Everyone Has When Trying To Get A Baby To Go To Sleep"},
{"text" : "15 Thoughts Everyone Who Hates Taking Shots Has Had"},
{"text" : "105 Thoughts Everyone Has During A Traffic Jam"},
{"text" : "19 Thoughts Everyone Has When Starting Triathlon Training"},
{"text" : "Watch This Adorable Father-Daughter Duo Dance Flawlessly To \"Problem\" By Ariana Grande"},
{"text" : "Watch This Adorable Toddler Attempt To Crawl Through A Spinning Wheel"},
{"text" : "Watch This Adorable Baby Girl Freak Out When Katy Perry's \"Dark Horse\" Comes On The Radio"},
{"text" : "This Photo Of Dwayne \"The Rock\" Johnson Is Everything You Need To Know About The '90s"},
{"text" : "Everything You Need To Know About The Surge Of Unaccompanied Minors At The Border"},
{"text" : "27 T-Shirts That Tell You Everything You Need To Know"},
{"text" : "Everything You Need To Know About The Post-Credits Scene In \"Guardians Of The Galaxy\""},
{"text" : "Everything You Need To Know About The Post-Credits Scene In \"Guardians Of The Galaxy\""},
{"text" : "Everything You Need To Know About Australia's New Security Measures Called #TeamAustralia"},
{"text" : "Everything You Need To Know About The Feud Between Charlize Theron And Tia Mowry"},
{"text" : "18 Pickup Lines That Would Actually Work In The Midwest"},
{"text" : "18 Pickup Lines That Would Only Work In L.A."},
{"text" : "21 Pickup Lines That Would Definitely Work In New York City"},
{"text" : "19 Pickup Lines That Would Definitely Work In Canada"},
{"text" : "15 Celebrity #TBT Photos You May Have Missed This Week"},
{"text" : "15 Celebrity #TBT Photos You May Have Missed This Week"},
{"text" : "11 Celebrity #TBT Photos You May Have Missed This Week"},
{"text" : "11 Celebrity #TBT Photos You May Have Missed This Week"},
{"text" : "13 Celebrity #TBT Photos You May Have Missed This Week"},
{"text" : "13 Celebrity #TBT Photos You May Have Missed This Week"},
{"text" : "12 Celebrity #TBT Photos You May Have Missed This Week"},
{"text" : "12 Celebrity #TBT Photos You May Have Missed This Week"},
{"text" : "Here's What You Should Eat For DInner"},
{"text" : "Here's What You Should Eat For Dinner"},
{"text" : "Here's What You Should Eat For Dinner"},
{"text" : "Here's What You Should Eat For Dinner"},
{"text" : "Here's What You Should Eat For Dinner"},
{"text" : "Here's What You Should Eat For Dinner"},
{"text" : "8 Celebrity Tweets You Missed Today"},
{"text" : "9 Celebrity Tweets You Missed Today"},
{"text" : "8 Celebrity Tweets You Missed Today"},
{"text" : "8 Celebrity Tweets You Missed Today"},
{"text" : "10 Celebrity Tweets You Missed Today"},
{"text" : "9 Celebrity Tweets You Missed Today"},
{"text" : "9 Celebrity Tweets You Missed Today"},
{"text" : "9 Celebrity Tweets You Missed Today"},
{"text" : "8 Celebrity Tweets You Missed Today"},
{"text" : "Leonardo DiCaprio Has Morphed Into Jack Nicholson"},
{"text" : "Leonardo DiCaprio Does Karate On A Yacht"},
{"text" : "Leonardo DiCaprio Contemplates His Existence While On A Giant Boat"},
{"text" : "Leonardo DiCaprio's Intense Watergun Fight Is Actually Why Waterguns Were Invented"},
{"text" : "Undeniable Proof That Forearms Are Just The Sexiest"},
{"text" : "Undeniable Proof That Spike And Angel Were Meant To Be"},
{"text" : "Undeniable Proof That Tacos Are The Greatest Food Ever Made"},
{"text" : "Undeniable Proof That \"Guardians Of The Galaxy\" And \"The Lego Movie\" Have The Exact Same Plot"},
{"text" : "22 GIFs That Prove The World Is Not Such A Bad Place"},
{"text" : "18 GIFs That Prove Science Is The Coolest Subject Ever"},
{"text" : "27 GIFs That Prove Lumpy Space Princess From \"Adventure Time\" Is All Of Us"},
{"text" : "17 Things People With Bitchface Are Actually Thinking"},
{"text" : "13 Things People With Moles Know To Be True"},
{"text" : "15 Things People With Unisex Names Know To Be True"},
{"text" : "18 Things People With Strict Parents Completely Understand"}










      
      
  
]
.map(comment).filter(function(comment) { return comment.mentions.length; });

function comment(comment) {
  var mentions = [];
  data.topics.forEach(function(topic) {
    while ((result = topic.re.exec(comment.text))) {
      if (topic.name == "votar") {
      }
      mentions.push({
        topic: topic,
        index: result.index
      });
    }

  });
  // sort the mentions by their occurnece in the comment
  mentions.sort(function(a, b) { return a.index - b.index; });

  // console.log(mentions.map(function(m){ return m.topic.name+":"+m.index; })+" | "+comment.text);

  comment.mentions = mentions;
  return comment;
}

// data.topics.map(function(topic) {
//   var comments = data.comments.filter(function(comment) { return comment.mentions.map(function(m) { return m.topic; }).indexOf(topic) != -1; });
//   console.log(topic.name + " " + comments.length);
// });

//data.trends = [
//  {
//    "timestamp": "2012-09-09T12:00:00Z",
//    "value": 1230
//  },
//  {
//    "timestamp": "2012-09-09T13:00:00Z",
//    "value": 2077
//  },
//  {
//    "timestamp": "2012-09-10T14:00:00Z",
//    "value": 1505
//  }
//];

})();


/**
 * Bubble Cloud visualization
 */
(function() {

var width = 673,
    height = 450;

var padding = 4, // collision padding
    maxRadius = 44, // collision search radius ... Größe der Bubbles
    maxComments = 14, // limit displayed mentions
    activeTopic; // currently-displayed topic

var r = d3.scale.sqrt()
    .domain([0, d3.max(data.topics, function(d) { return d.count; })])
    .range([0, maxRadius]);

var force = d3.layout.force()
    .gravity(0)
    .charge(0)
    .size([width, height])
    .on("tick", tick);

var node = d3.select(".g-nodes").selectAll(".g-node"),
    label = d3.select(".g-labels").selectAll(".g-label");

d3.select(".g-nodes").append("rect")
    .attr("class", "g-overlay")
    .attr("width", width)
    .attr("height", height)
    .on("click", clear);

d3.select(window)
    .on("hashchange", hashchange);

updateTopics(data.topics);
hashchange();

// Update the known topics.
function updateTopics(topics) {
  topics.forEach(function(d, i) { d.r = Math.max(12, r(d.count)); }); // min. collision
  force.nodes(data.topics = topics).start();
  updateNodes();
  updateLabels();
}

// Update the displayed nodes.
function updateNodes() {
  node = node.data(data.topics, function(d) { return d.name; });

  node.exit().remove();

  node.enter().append("a")
      .attr("class", function(d) { return "g-node "+d.sentiment; })
      .attr("xlink:href", function(d) { return "#" + encodeURIComponent(d.name); })
      .call(force.drag)
      .call(linkTopic)
    .append("circle");

  node.select("circle")
      .attr("r", function(d) { return r(d.count); });
}

// Update the displayed node labels.
function updateLabels() {
  label = label.data(data.topics, function(d) { return d.name; });

  label.exit().remove();

  var labelEnter = label.enter().append("a")
      .attr("class", "g-label")
      .attr("href", function(d) { return "#" + encodeURIComponent(d.name); })
      .call(force.drag)
      .call(linkTopic);

  labelEnter.append("div")
      .attr("class", "g-name")
      .text(function(d) { return d.name; });

  labelEnter.append("div")
      .attr("class", "g-value");

  label
      .style("font-size", function(d) { return Math.max(10, r(d.count) / 3.6) + "px"; })
      .style("width", function(d) { return r(d.count) * 2.5 + "px"; });

  // Create a temporary span to compute the true text width.
  label.append("span")
      .text(function(d) { return d.name; })
      .each(function(d) { d.dx = Math.max(2.5 * r(d.count), this.getBoundingClientRect().width); })
      .remove();

  label
      .style("width", function(d) { return d.dx + "px"; })
    .select(".g-value");
     // .text(function(d) { return d.count + (d.r > 60 ? " Items" : ""); });  //hier habe ich die Anzahl der Nennungen ausgeblendet

  // Compute the height of labels when wrapped.
  label.each(function(d) { d.dy = this.getBoundingClientRect().height; });
}

// Update the active topic.
function updateActiveTopic(topic) {
  if (activeTopic = topic) {
    node.classed("g-selected", function(d) { return d === topic; });
    updateMentions(topic);
    // d3.select("#g-topic").text((topic.commentsCount > maxComments ? "Uma amostra dos " : topic.commentsCount || "Não há") + " comentários que utilizam a palavra “" + topic.name + "”");
  } else {
    node.classed("g-selected", false);
    updateMentions()
    // d3.select("#g-topic").text("Uma amostra dos comentários");
  }
}

// Update displayed comments.
function updateMentions(topic) {
  var comments = data.comments.filter(function(comment) { return !topic || comment.mentions.map(function(mention) { return mention.topic; }).indexOf(topic) != -1; });

  // If too many comments, a random sample is used
  if (comments.length > maxComments) {
    comments = shuffle(comments).slice(0, maxComments);
  }

  // Rather than compute a data-join, just blow away the entire layout.
  // With wider support for multi-column layout, a data-join would work.
  var column = d3.selectAll(".g-mentions")
      .datum(0)
      .html(null);

  var heights = column.data(),
      indexes = d3.range(heights.length);

  // Incrementally add each new speaker to the shortest column untill filling the available space
  var overflow = false;
  comments.forEach(function(comment) {
    if (overflow) return;

    var index = d3.first(indexes, function(a, b) { return heights[a] - heights[b]; });

    var div = d3.select(column[0][index]).append("div")
        .attr("class", "g-mention");

    var commentTopics = comment.mentions.map(function(mention) { return mention.topic; });

    // Mark all the topics as anchors
    var commentHtml = comment.text;

    var uniqueTopics = [];
    commentTopics.forEach(function(t) {
      if (uniqueTopics.indexOf(t) == -1) {
        // Replace only once per topic
        commentHtml = commentHtml.replace(t.re, '<a>$1</a>');
        uniqueTopics.push(t);
      }
    });

    // div.append("p")
    //     .attr("class", "date")
    //     .text("YYYY-MM-DD");

    var p = div.append("p")
        .attr("class", "mention")
        .html(commentHtml);

    p.selectAll("a")
      .data(commentTopics)
        .attr("href", function(d) { return "#" + encodeURIComponent(d.name); })
        .attr("class", function(d) { return d == topic ? d.sentiment+" active" : d.sentiment; })
        .call(linkTopic);

    heights[index] += div.node().getBoundingClientRect().height;

    if (heights[index] > 3500) {
      div.remove();
      overflow = true;
    }
  });
}

// Assign event handlers to topic links.
function linkTopic(a) {
  a   .on("click", click)
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);
}

// Returns the topic matching the specified name, approximately.
// If no matching topic is found, returns undefined.
function findTopic(name) {
  for (var i = 0, n = data.topics.length, t; i < n; ++i) {
    if ((t = data.topics[i]).name === name || new RegExp("^" + (t = data.topics[i]).re.source + "$", "i").test(name)) {
      return t;
    }
  }
}

// Simulate forces and update node and label positions on tick.
function tick(e) {
  node
      .each(gravity(e.alpha * .1))
      .each(collide(.5))
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  label
      .style("left", function(d) { return (d.x - d.dx / 2) + "px"; })
      .style("top", function(d) { return (d.y - d.dy / 2) + "px"; });
}

// Custom gravity to favor a non-square aspect ratio.
function gravity(alpha) {
  var cx = width / 2,
      cy = height / 2,
      ax = alpha / 4,
      ay = alpha;
  return function(d) {
    d.x += (cx - d.x) * ax;
    d.y += (cy - d.y) * ay;
  };
}

// Resolve collisions between nodes.
function collide(alpha) {
  var q = d3.geom.quadtree(data.topics);
  return function(d) {
    var r = d.r + maxRadius + padding,
        nx1 = d.x - r,
        nx2 = d.x + r,
        ny1 = d.y - r,
        ny2 = d.y + r;
    q.visit(function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d) && d.other !== quad.point && d !== quad.point.other) {
        var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = d.r + quad.point.r + padding;
        if (l < r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  };
}

// Fisher–Yates shuffle.
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// Update the active topic on hashchange, perhaps creating a new topic.
function hashchange() {
  var name = decodeURIComponent(location.hash.substring(1)).trim();
  updateActiveTopic(name && name != "!" ? findTopic(name) : null);
}

// Clear the active topic when clicking on the chart background.
function clear() {
  location.replace("#!");
}

// Rather than flood the browser history, use location.replace.
function click(d) {
  location.replace("#" + encodeURIComponent(d === activeTopic ? "!" : d.name));
  d3.event.preventDefault();
}

// When hovering the label, highlight the associated node and vice versa.
// When no topic is active, also cross-highlight with any mentions in excerpts.
function mouseover(d) {
  node.classed("g-hover", function(p) { return p === d; });
  d3.selectAll(".g-mention a").classed("g-hover", function(a) { return a === d; });
}

// When hovering the label, highlight the associated node and vice versa.
// When no topic is active, also cross-highlight with any mentions in excerpts.
function mouseout(d) {
  node.classed("g-hover", false);
  d3.selectAll(".g-mention a").classed("g-hover", false);
}

})();


/**
 * Trendline visualization
 */
(function() {

var settings = {
  animatinoDuration: 1000,
  eventTextHeight: 0,
  eventIconSize: 0,
  eventMargin: 2,
  markerColor: "#444",
  fillColor: "#FECEA8",
  strokeColor: "#E5BA94",
  strokeWidth: 2
};

function drawTrendline(svg, width, height, granularity, trends, options) {
  trends.forEach(function(trend) {
    if (typeof(trend.timestamp) == "string") {
      trend.timestamp = new Date(trend.timestamp);
    }
  });

  var xMin = d3.first(trends).timestamp;
  var xMax = d3.last(trends).timestamp;
  var yMin = 0;
  var yMax = d3.max(trends, function(d) { return d.value; });
  var xScale = d3.time.scale().domain([xMin, xMax]).range([0, width]);
  var yScale = d3.scale.linear().domain([yMin, yMax]).range([0, height-settings.eventTextHeight-settings.eventIconSize-2*settings.eventMargin]);
  var innerSvg = svg.append("svg:g").attr("class", "trendline").attr("transform", "translate(0,"+height+")");


  // Events
  innerSvg.selectAll(".event").remove();

  var prevEventX = 0;
  var prevEventY = 0;

  trends.forEach(function(trend) {
    var x = xScale(trend.timestamp);
    var y;

    if (trend.event) {
      y = x-prevEventX < settings.eventIconSize ? prevEventY-settings.eventIconSize : height;

      var eventSvg = innerSvg.append("svg:g")
      .attr("class", "event up "+trend.event.type)
      .attr("data-timestamp", trend.timestamp);

      eventSvg.append("svg:line")
      .attr("x1", x)
      .attr("x2", x)
      .attr("y1", 0)
      .attr("y2", -(y-settings.eventTextHeight-settings.eventIconSize-2*settings.eventMargin));

      eventSvg.append("svg:image")
      .attr("x", x-settings.eventIconSize/2)
      .attr("y", -(y-settings.eventTextHeight-settings.eventMargin))
      .attr("width", settings.eventIconSize+"px")
      .attr("height", settings.eventIconSize+"px")
      .attr("xlink:href", "img/trendline-event-icons/"+trend.event.type+".png")
      .on("mouseover", function() {
        highlightEvent(d3.event.target.parentNode);
      })
      .on("mouseout", function() {
        highlightEvent();
      })
      .on("click", function() {
        if (trend.event.type === "Match") {
          switch (currentPage.type) {
            case "home":
            window.location.hash = "home&match="+trend.event.id;
            break;
            case "team":
            case "player":
            window.location.hash = currentPage.type+"="+currentPage.id+"&match="+trend.event.id;
            break;
          }
        }
      });

      eventSvg.append("svg:text")
      .attr("x", x)
      .attr("y", -height)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "baseline")
      .text(trend.event.text);

      prevEventX = x;
      prevEventY = y;
    }

  });

  // Adjust text x position to be always visible
  innerSvg.selectAll("text")[0].forEach(function(text) {
    var bbox = text.getBBox();
    if (bbox.x < 0) {
      d3.select(text).attr("x", bbox.width/2);
    } else if (bbox.x + bbox.width > width) {
      d3.select(text).attr("x", width-bbox.width/2);
    }
  });

  //// Generators
  var areaGenerator = d3.svg.area()
  .x(function(d) { return xScale(d.timestamp); })
  .y1(function(d) { return -yScale(d.value); })
  .interpolate("linear");

  var lineGenerator = d3.svg.line()
  .x(function(d) { return xScale(d.timestamp); })
  .y(function(d) { return -yScale(d.value); })
  .interpolate("linear");

  var hitAreaGenerator = d3.svg.area()
  .x(function(d) { return xScale(d.timestamp); })
  .y1(function(d) { return -yScale(d.value)-20; })
  .interpolate("linear");

  //// Area/line
  var area = innerSvg.selectAll("path.area").data([trends]);
  updatePath(area, areaGenerator);

  var line = innerSvg.selectAll("path.line").data([trends]);
  updatePath(line, lineGenerator);

  var hitArea = innerSvg.selectAll("path.hit-area").data([trends]);
  updatePath(area, hitAreaGenerator);

  // Enter
  var newArea = area.enter()
  .append("svg:path")
  .attr("class", "area")
  .attr("fill", settings.fillColor);
  updatePath(newArea, areaGenerator);

  var newLine = line.enter()
  .append("svg:path")
  .attr("class", "line")
  .attr("fill", "transparent")
  .attr("stroke", settings.strokeColor)
  .attr("stroke-width", settings.strokeWidth);
  updatePath(newLine, lineGenerator);

  var marker = innerSvg.append("svg:circle")
  .attr("class", "marker")
  .attr("r", "4")
  .attr("fill", settings.markerColor);

  var newHitArea = hitArea.enter()
  .append("svg:path")
  .attr("class", "hit-area")
  .attr("fill", "transparent");
  updatePath(newHitArea, hitAreaGenerator);

  // Exit
  area.exit().remove(); // TODO check this
  line.exit().remove(); // TODO check this
  hitArea.exit().remove(); // TODO check this


  // Interactivity
  var trendsDict = {};
  trends.forEach(function(trend) {
    var timestamp = getDateRoundedToGranularity(trend.timestamp, granularity);
    trendsDict[timestamp] = trend;
  });

  var timeFormat = d3.time.format("%e %b %H:%M")
  var maxTrend = trends.reduce(function(prevTrend, currentTrend) {
    return !prevTrend || currentTrend.value > prevTrend.value ? currentTrend : prevTrend;
  });

  function setMarker(timestamp) {
    var value = trendsDict[timestamp].value,
        tooltipText = value+" Tweets pro Stunde, "+timeFormat(timestamp);
    marker.attr("cx", xScale(timestamp)).attr("cy", -yScale(value));
    d3.select("#trendline-tooltip").html(tooltipText);
    highlightEvent(".event[data-timestamp='"+timestamp+"']");
  }


  newHitArea
  .on("mouseout", function() {
    setMarker(maxTrend.timestamp);
  })
  .on("mousemove", function() {
    var timestamp = getDateRoundedToGranularity(xScale.invert(d3.mouse(d3.event.target)[0]), granularity);
    setMarker(timestamp);
  });

  setMarker(maxTrend.timestamp);
}

function updatePath(area, generator) {
  area.transition()
  .duration(settings.animatinoDuration)
  .attr("d", generator);
}

function highlightEvent(selector) {
  d3.selectAll(".event").classed("highlighted", false);
  if (selector) {
    d3.select(selector).classed("highlighted", true);
  }
}

function getDateRoundedToGranularity(date, granularity) {
  return new Date(Math.round(date.getTime()/granularity)*granularity);
}

drawTrendline(d3.select("#g-trendline"), 673, 80, 3600e3, data.trends);

})();