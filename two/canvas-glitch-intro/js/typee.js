var initDot = document.getElementById("loading");
var loading = setInterval(function() {
    if (initDot.innerHTML.length == 5) {
        initDot.innerHTML = "";
    } else {
        initDot.innerHTML += ".";
    }
}, 350); // Dot Speed

var $loadingMessage = $('#loadingH1');
var feedItems = [];
var feedItemsLength = 0;
var feedStat;
var Thefeeds = []
$loadingMessage.hide();
setTimeout(function() {
    clearInterval(loading);
    $loadingMessage.hide();
}, 1500);

var i;

function loadRSS() {
    $("#rss-feeds").rss("https://hnrss.org/newest?q=hacking", {
        limit: 50,
        filter: function(entry, tokens) {
            feedItems.push(tokens)
            feedItemsLength = feedItems.length;
            feedStat = feedItemsLength - 1;
            console.log(feedItems)
        }
    })
    

    setTimeout(function(){ Thefeeds = feedItems; console.log(Thefeeds);runProg(5); }, 2000);
    
    

}
loadRSS();

// $( document ).ready(function() {
//     console.log( feedItems );
//     var i;
//     for (i = 0; i < feedItems.length; i++) { 
//         console.log(feedItems)
//     }
// });


var name = "";
var alias = "";
var occupation = "";
var greeting = "UNIDENTIFIED ORGANIC LIFEFORM DETECTED";
var message = "LOADING NEXT hnrss.org FEED FOR @an0rak";
var $identityDiv = $("#identity-results");
var $interested = "Interested?";

function runProg(index){
    console.log(feedItems[index])
    initIdentityResults(index)
}


var initProgram = setTimeout(function() {

    name = feedItems[18].author;
    alias = feedItems[17].title;
    occupation = feedItems[17].url;
   




    function initIdentityResults(i) {
        
        $('.text-container').removeClass('hide')
        $("#message").addClass("sign cursor").text(message.substring(0, i));
        if (i < message.length) {
            setTimeout(function() {
                initIdentityResults(i + 1);
            }, 25);
        } else {
            $('#message').removeClass("cursor");
            var loadingResume = function() {
                //$("#loadingMessage2").show()
                var dotAlpha = document.getElementById("alpha-loading");
                var loadingAlpha = setInterval(function() {
                    if (dotAlpha.innerHTML.length == 6) {
                        dotAlpha.innerHTML = "";
                    } else {
                        dotAlpha.innerHTML += ".";
                        setTimeout(function() {
                            clearInterval(loadingAlpha);
                            $("#loadingMessage2").hide();
                        }, 2000);
                    }
                }, 350); // Dot Speed
            }
            loadingResume();

            function initName(i) {
                $("#message").text("DONE");

                $("#name").addClass("sign cursor").text(name.substring(0, i));
                if (i < name.length) {
                    setTimeout(function() {
                        initName(i + 1);
                    }, 25);
                } else {
                    $("#name").removeClass("cursor");
                    $("#alias").addClass("sign cursor")
                    setTimeout(function() {
                        initAlias(0);
                    }, 1500);
                }
            }
            setTimeout(function() {
                initName(0);
            }, 2500);
        }

        function initAlias(i) {
            $("#alias").text(alias.substring(0, i));
            // $("#rss-title").text(alias);
            if (i < alias.length) {
                setTimeout(function() {
                    initAlias(i + 1);
                }, 25);
            } else {
                $("#alias").removeClass("cursor");
                $("#occupation").addClass("sign cursor")
                setTimeout(function() {
                    initOccupation(0);
                }, 1500);
            }
        }

        function initOccupation(i) {
            $("#occupation").text(occupation.substring(0, i));
            if (i < occupation.length) {
                setTimeout(function() {
                    initOccupation(i + 1);
                }, 25);
            } else {
                $("#occupation").removeClass("cursor");
                $("#cursor").addClass("sign cursor").text($interested.substring(0, i));
                setTimeout(function() {
                    initIdentityResults(16)
                    runProg(5)
                    //initFrontEnd(0);
                    initialLoader();
                }, 1500);
            }
        }

        function initFrontEnd(i) {

            if (i < $interested.length) {
                setTimeout(function() {
                    initFrontEnd(i + 1);
                }, 25);
            } else {
                console.log("rinse")
                var imgSrc = myArr[Math.floor(Math.random() * myArr.length)];
                    console.log(imgSrc)
                setTimeout(function() {
                    $('#name').text("").removeClass("sign cursor");
                    $('#alias').text("").removeClass("sign cursor");
                    $('#occupation').text("").removeClass("sign cursor");
                    $('#cursor').text("").removeClass("sign cursor");
                    if (feedStat === 0) {
                        loadRSS()
                    } else {
                        feedStat = feedStat - 1
                    }
                    initIdentityResults(0);
                    name = feedItems[feedStat].author;
                    alias = feedItems[feedStat].title;
                    occupation = feedItems[feedStat].url;

                    
                    setup()
                }, 3000);
            }

        }


    }
    console.log(feedStat)

    // while (feedStat >= 0) {
    //     feedStat--;
    //     initIdentityResults(0);
    //     console.log(feedStat)
    // };
    initIdentityResults(0);




    // $.each(feedItems, function(index, value) {
    //     console.log(feedItems[index].title)
    //     name = "AUTHOR: " + feedItems[index].author;
    //     alias = "TITLE: " + feedItems[index].title;
    //     occupation = "URL: " + feedItems[index].url;
    //     // initIdentityResults(0);
    //     //initProgramAlpha(0)
    // });
    //initProgramAlpha(0)

}, 1500);

runProg()