// Global transition speed
var transitionSpeed = 0.5;

// Global ease setting
var easing = Power4.easeOut;

// Banner duration timer start time
var startTime;

// Timeline reference
var tl, tl2;

////////////////////////////////////////////////////////////////////////
// @FT1 - code block start
//VARIABLE DECLARATIONS
var thisFeedLoaded=false;
var showDefault=false;
var ctURL = "";


var default_exit = myFT.$("#default_exit");

default_exit.on('click',function(){
  myFT.clickTag(1,ctURL);
});

function checkURL(u){
  if(u.indexOf("http://")==0||u.indexOf("https://")==0){return true}
  return false
}

myFT.on('instantads',function(){
      ctURL=myFT.instantAds.Retail_default_clickTag_URL
      myFT.dispatch('RL1_available');

    });
    myFT.on('theFeedLoaded', function(e) {
      console.log('RL1: Richload recieved feed from Base file)');
      feedLoaded(e.a);
    });
    myFT.on('RL1_play', function () {
      init();
    });
    /*
    ////////////////////////////////////////////////
       LOADING FEED START
    ////////////////////////////////////////////////

    Please note: JetBlue setup has feeds loading form the base file and then passed into richLoads via a custom event
    called 'theFeedLoaded'.
    */
    function feedLoaded(feedItems) {
      let partner_logo_src = feedItems[0].image_logo_300x250;

      if(partner_logo_src == "n/a"){
        //no partner logo included in feed, do nothing
      }else{
        //partner logo included in feed
        console.log('partner logo included!')

        var partner_logo_img = myFT.$("#partner_logo_img");
        partner_logo_img[0].src=partner_logo_src;
      }

      if(!thisFeedLoaded){
        thisFeedLoaded=true;
        try {
          /*Setting variable values from loaded feed (FEED PASSED THROUGH THE --theFeedLoaded-- CUSTOM EVENT)*/
          /*For example: the following variable ctURL is used to pass a url from feed into a dynamic clickTag*/
          ctURL = checkURL(myFT.instantAds.Retail_dynamic_click_URL)?myFT.instantAds.Retail_dynamic_click_URL:feedItems[0]['url'];
          //This variable will be passed through clicktag (inside clickEvent handler below) as a parameter
          //myFT.clickTag(1, ctURL);
          //If using dynamic text, set variables values to feed or dynamic variables setup in manifest/versions within instandAd*/
        } catch (e) {
          showDefault = true;
        }
        setupContent();
      }
    }
    function setupContent() {
      //Populate dynamic text with feed and/or dynamic variable data here
      //Once all dynamic content has been populated, dispatch event to the base file to notify richload 1 ready to start playing
      myFT.dispatch('RL1_ready_to_play');
    }

// @FT1 - code block end
///////////////////////////////////////////////////////////////////////////////////////


// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax();

  animate();
  setRollover();
}


function animate() {
  // const cardBounce = CustomEase.create("custom", "M0,0,C0,0,0.05,0.228,0.09,0.373,0.12,0.484,0.139,0.547,0.18,0.654,0.211,0.737,0.235,0.785,0.275,0.864,0.291,0.896,0.303,0.915,0.325,0.944,0.344,0.97,0.356,0.989,0.38,1.009,0.413,1.039,0.441,1.18,0.48,1.08,0.496,1.089,0.51,1.091,0.53,1.095,0.552,1.099,0.582,1.1,0.6,1.1,0.716,1.1,0.716,1.064,0.8,1.024,0.865,0.992,1,1,1,1");

  tl.set("#container", { autoAlpha: 0, force3D: true });
  // tl.set("#cta", { autoAlpha: 0, force3D: true, rotation: .001 });
  // tl.set("#card", { autoAlpha: 0, scale: 0.3 });
  // tl.set(['#terms'], { autoAlpha: 0})

  // let video play
  tl.addLabel('start', 0)
    .to('#container', .1, { autoAlpha: 1 }, 'start+=0')

    .to('#topPanel, #pinkBar', 0.5, { y: "-=58" }, 'start+=0.5')

    .to(['#copy1, #cta, #terms0'], 0.5, { autoAlpha: 1 }, '-=0.25')
    .to(['#copy1,#terms0'], 0.2, { autoAlpha: 0 }, '+=2.5')

    .to(['#copy2a'], 0.2, { autoAlpha: 1 }, '+=0')
    .to(['#copy2b'], 0.3, { autoAlpha: 1 }, '+=0')
    .to(['#copy2a, #copy2b'], 0.1, { autoAlpha: 0 }, '+=2.5')

    .to(['#copy3a'], 0.2, { autoAlpha: 1 }, '+=0')
    .to(['#copy3b'], 0.3, { autoAlpha: 1 }, '+=0')
    .to(['#copy3a, #copy3b'], 0.1, { autoAlpha: 0 }, '+=2.5')

    .to(['#copy4a'], 0.2, { autoAlpha: 1 }, '+=0')
    .to(['#copy4b'], 0.3, { autoAlpha: 1 }, '+=0')
    .to(['#copy4a, #copy4b'], 0.1, { autoAlpha: 0 }, '+=2.5')

    .to('#topPanel, #pinkBar', 0.5, { y: "-=182" }, '+=0')
    // .to('#terms0', 0, { autoAlpha: 0 }, '-=0.5')

    .to('#cta', 0.15, { scale: 1.1, ease: Power1.easeInOut, rotationZ: 0.1, force3D: true }, '+=0')
    .to('#cta', 0.15, { scale: 1.0, ease: Power1.easeInOut, rotationZ: 0.1, force3D: true }, '+=0')


  // .to('#pink-bar-1', 0, { autoAlpha: 0 }, '-=1.4')




}

////////////////////////////////////////
//@FT3 code block start
function playEndframe(param1){
  myFT.dispatch('init_RL2');
}
//@FT3 code block end
////////////////////////////////////////

//grow CTA on hover
function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.25, { scale: 1.05, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.25, { scale: 1, ease: Power1.easeInOut })
}

////////////////////////////////////////
//@FT4 code block start

// End timer custom event listener (dispatched from RL2 when animation complete)
myFT.on('stopTimer',function(){
  // show total banner animation time in browser console.
  var endTime = new Date();
  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
})

//@FT4 code block end
////////////////////////////////////////
// const d = new Date();
// let year = d.getFullYear();
// document.getElementById("year").innerHTML = year;