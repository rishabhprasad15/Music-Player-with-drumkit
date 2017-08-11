            var currentSongNumber = 1;
            var willLoop = 0;
            var willShuffle = 0;
            var changemenu=0;
            $('#volume-toggle').on('click', function() {
                $('#volume-toggle').toggleClass('fa-volume-up').toggleClass('fa-volume-off');
                var audio = document.querySelector('audio');
                audio.muted = !audio.muted;
              });

    //             function removeTransition(e) {
    //   if (e.propertyName !== 'transform')
    //   return;
    //   e.target.classList.remove('playing');
    // }
    //
    // function playSound(e) {
    //    if (changemenu == 1)
    //    {
    //   const audio = document.querySelector(`.drumaudio[data-key="${e.keyCode}"]`);
    //   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    //   if (!audio && input)
    //   return;
    //
    //   key.classList.add('playing');
    //   audio.currentTime = 0;
    //   audio.play();
    // }
    // }
    //
    // const keys = Array.from(document.querySelectorAll('.key'));
    // keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    // window.addEventListener('keydown', playSound);
    //
    //
    // $('.fa-signal').on('click',function() {
    //    $('.fa-signal').toggleClass('disabled');
    //       changemenu = 1 - changemenu;
    //       console.log(changemenu);
    //      if (changemenu == 1)
    // {
    //       $('.mymenu').removeClass('hidden');
    //         $('.drumplaylist').removeClass('hidden');
    //         $('.fa-repeat').addClass('disabled');
    //           $('.fa-random').addClass('disabled');
    //           $('.fa-step-backward').addClass('disabled');
    //           $('.fa-step-forward').addClass('disabled');
    //          $('.fa-caret-square-o-right').addClass('disabled');
    //           $('.fa-caret-square-o-left').addClass('disabled');
    //           $('.fa-play').addClass('disabled');
    //           $('.fa-pause').addClass('disabled');
    //           $('.content').addClass('hidden');
    //
    //     }
    //       else
    //       {
    //         $('.content').removeClass('hidden');
    //         $('.fa-step-backward').removeClass('disabled');
    //         $('.fa-step-forward').removeClass('disabled');
    //         $('.fa-caret-square-o-right').removeClass('disabled');
    //          $('.fa-caret-square-o-left').removeClass('disabled');
    //          $('.fa-play').removeClass('disabled');
    //          $('.fa-pause').removeClass('disabled');
    //            $('.drumplaylist').addClass('hidden');
    //         $('.mymenu').addClass('hidden');
    //       }
    //    });



            $('audio').on('timeupdate', function() {
                   var audio = document.querySelector('audio');
                   $('.progress-filled').stop().animate({'width': (audio.currentTime) / audio.duration * 100 + '%'}, 250, 'linear');
                  });

                  // The 'scrub' function: it updates the current time whenever the user clicks
                  // anywhere on the progress bar.
                  $('.player-progress').on('click', function(event) {
                   var audio = document.querySelector('audio');
                   var progress = document.querySelector('.player-progress');

                   var scrubTime = (event.offsetX / progress.offsetWidth) * audio.duration;
                   audio.currentTime = scrubTime;
                  });
            $('.fa-repeat').on('click',function() {
                $('.fa-repeat').toggleClass('disabled')
                willLoop = 1 - willLoop;
            });
            $('.fa-random').on('click',function() {
                $('.fa-random').toggleClass('disabled')
                willShuffle = 1 - willShuffle;
            });
            function timeJump() {
                var song = document.querySelector('audio')
                song.currentTime = song.duration - 5;
            }
            function randomExcluded(min, max, excluded) {
                  var n = Math.floor(Math.random() * (max-min) + min);
                  if (n >= excluded) n++;
                  return n;
              }
              $('audio').on('ended',function() {
              var audio = document.querySelector('audio');
                    //runs if shuffle is on
              if (willShuffle == 1) {
                  var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
                  var nextSongObj = songs[nextSongNumber-1];
                  audio.src = nextSongObj.fileName;
                  toggleSong();
                  changeCurrentSongDetails(nextSongObj);
                  currentSongNumber = nextSongNumber;
              }
              //runs if singnumber is less than 4
              else if(currentSongNumber < 4) {
                  var nextSongObj = songs[currentSongNumber];
                  audio.src = nextSongObj.fileName;
                  toggleSong();
                  changeCurrentSongDetails(nextSongObj);
                  currentSongNumber = currentSongNumber + 1;
              }
              //runs if loop is on
              else if(willLoop == 1) {
                  var nextSongObj = songs[0];
                  audio.src = nextSongObj.fileName;
                  toggleSong();
                  changeCurrentSongDetails(nextSongObj);
                  currentSongNumber =  1;
              }
              else {
                  $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                  audio.currentTime = 0;
              }
          })
          $('.fa-step-forward').on('click',function() {
            var audio = document.querySelector('audio');
                  //runs if shuffle is on
            if (willShuffle == 1) {
                var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
                var nextSongObj = songs[nextSongNumber-1];
                audio.src = nextSongObj.fileName;
                toggleSong();
                changeCurrentSongDetails(nextSongObj);
                currentSongNumber = nextSongNumber;
            }
            //runs if singnumber is less than 4
            else if(currentSongNumber < 4) {
                var nextSongObj = songs[currentSongNumber];
                audio.src = nextSongObj.fileName;
                toggleSong();
                changeCurrentSongDetails(nextSongObj);
                currentSongNumber = currentSongNumber + 1;
            }
            //runs if loop is on
            else if(willLoop == 1) {
                var nextSongObj = songs[0];
                audio.src = nextSongObj.fileName;
                toggleSong();
                changeCurrentSongDetails(nextSongObj);
                currentSongNumber =  1;
            }
            else {
                $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                audio.currentTime = 0;
            }
          });
          //runs if backward is clicked
          $('.fa-step-backward').on('click',function() {
            var audio = document.querySelector('audio');
                  //runs if shuffle is on
            if (willShuffle == 1) {
                var nextSongNumber = randomExcluded(1,4,currentSongNumber); // Calling our function from Stackoverflow
                var nextSongObj = songs[nextSongNumber-1];
                audio.src = nextSongObj.fileName;
                toggleSong();
                changeCurrentSongDetails(nextSongObj);
                currentSongNumber = nextSongNumber;
            }
            //runs if singnumber is less than 4
            else if(currentSongNumber > 1) {
                var nextSongObj = songs[currentSongNumber-2];
                audio.src = nextSongObj.fileName;
                toggleSong();
                changeCurrentSongDetails(nextSongObj);
                currentSongNumber = currentSongNumber - 1;
            }
            //runs if loop is on
            else if(willLoop == 1) {
                var nextSongObj = songs[songs.length-1];
                audio.src = nextSongObj.fileName;
                toggleSong();
                changeCurrentSongDetails(nextSongObj);
                currentSongNumber =  1;
            }
            else {
                $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                audio.currentTime = 0;
            }
          });

function toggleSong() {
    var song = document.querySelector('audio');
    if(song.paused == true) {
    console.log('Playing');
    $('.play-icon').removeClass('fa-play').addClass('fa-pause');
    song.play();
    }
    else {
    console.log('Pausing');
    $('.play-icon').removeClass('fa-pause').addClass('fa-play');
    song.pause();
    }
    }
    //update current time and song duration
    function fancyTimeFormat(time)
        {
            // Hours, minutes and seconds
            var hrs = ~~(time / 3600);
            var mins = ~~((time % 3600) / 60);
            var secs = time % 60;

            // Output like "1:01" or "4:03:59" or "123:03:59"
            var ret = "";

            if (hrs > 0) {
                ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
            }

            ret += "" + mins + ":" + (secs < 10 ? "0" : "");
            ret += "" + secs;
            return ret;
        }
        //this function updates the song details and image
        function changeCurrentSongDetails(songObj) {
            $('.current-song-image').attr('src','img/' + songObj.image)
            $('.current-song-name').text(songObj.name)
            $('.current-song-album').text(songObj.album)
         }
        //this function updates the duartion and current time
    function updateCurrentTime() {
       var song = document.querySelector('audio');
       //console.log(song.currentTime);
       //console.log(song.duration);
       //round of milli seconds
       var currentTime=Math.floor(song.currentTime);
       //changes the format in a fancy way
       currentTime=fancyTimeFormat(currentTime);
       var duration=Math.floor(song.duration);
       duration=fancyTimeFormat(duration);
       $('.time-elapsed').text(currentTime);
       $('.song-duration').text(duration);
       }
     //load these function as soon window opens
       //var songName1 = 'Badri Ki Dulhania (Title Track)';
       //var songName2 = 'Humma Song';
       //var songName3 = 'Nashe Si Chadh Gayi';
       //var songName4 = 'The Breakup Song';
      //  Declares a single string containing all the songs


      function addSongNameClickEvent(songObj,position) {

              var songName=songObj.fileName;//acceses the name value of the object
              var id = '#song' +  position;
            $(id).click(function() {
            var audio = document.querySelector('audio');
            var currentSong = audio.src;
            if(currentSong.search(songName) != -1)
            {
            toggleSong();
            }
            else {
            audio.src = songName;
            toggleSong();
            changeCurrentSongDetails(songObj); // updates the song details and image
            }
            });
        }

        var songs = [{
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
       'image':'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
        'image':'song2.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
        'image':'song3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image':'song4.jpg'
    },


  ]
       window.onload = function() {


           $('#num-of-songs').text(songs.length);
          changeCurrentSongDetails(songs[0]);//loads the first song details and image
         updateCurrentTime();
         setInterval(function() {updateCurrentTime();},1000);


         for(var i=0;i<songs.length;i++){
          //selects the first value of the object
           var obj=songs[i];
           //sets the value of name to our desired colums name
           var name='#song'+(i+1);
             var song=$(name);
             song.find('.song-name').text(obj.name);

        song.find(' .song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        //does all the looping work in the single go
        addSongNameClickEvent(obj,i+1)
    }


    $('#songs').DataTable({
         paging: false,
         language: {
           searchPlaceholder:"Search songs"
         },


    });

      }










$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if (name.length > 2) {
        var message = "Welcome, " + name;
        $('.main .user-name').text(message);
        $('.welcome-screen').addClass('hidden');
        $('.main').removeClass('hidden');
    } else {
        $('#name-input').addClass('error');
    }
});
$('.play-icon').on('click', function() {

   //now toggle song function will be called which will take care of all the toggle needs when pause play icons are clicked
  toggleSong();
});
$('body').on('keypress', function(event) {
            var target=event.target;
            //checks the event object if the spacebar is pressed and wheather target is input or not
            if (event.keyCode == 32 && target.tagName!='INPUT') {
   //now toggle song function will be called which will take care of all the toggle needs when spacebar is pushed
                toggleSong();
            }
        });
