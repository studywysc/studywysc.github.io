<!-- 0.190722 -->

    start.html
    <!-- replace with this when app switching comes
    <div class="col-2 col-md-1"> d-none d-md-block -->

<!-- 0.190721 safari tweaks -->

@media not all and (min-resolution:.001dpcm) { 
  @supports (-webkit-appearance:none) and (stroke-color:transparent) { /*safari only*/
    .homefadeb00 {
      animation: fade-in-bottom 1.25s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.25s both;
      /*animation: fade-in-bottom 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;*/
    }
      .homefadeb01 {
        animation: fade-in-bottom 1.25s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.5s both;
        /*animation: fade-in-bottom 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.12s both;*/
      }
      .homefadeb02 {
        animation: fade-in-bottom 1.25s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.75s both;
        /*animation: fade-in-bottom 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.36s both;*/
      }
      .homefadeb03 {
        animation: fade-in-bottom 1.25s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both;
        /*animation: fade-in-bottom 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.60s both;*/
      }
      .homefadeb04 {
        animation: fade-in-bottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 14s both;
        /*animation: fade-in-bottom 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) 14s both;*/
      }
      .homefade00 {
        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        /*animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;*/
      }
  } 
}

<!-- 0.190716 put body css back in the css file -->
    body{background-color:#212121;}.headerbg{background-position:center;background-attachment:fixed;background-size:cover;background-repeat:no-repeat;height:calc(100vh + 165px);}


            <!--
            <div style="position:absolute;width:100%;height:100vh;">
                <svg id="svg" class="svgheader" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" style="left:0;bottom:0;">
                    !-- <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="#8C5340" stroke-width="120"
                    stroke-linecap="round" />
                    <path d="M0,150 C150,150 350,0 500,0" />
                        M-400,400 C400,340 1400,100 812,150
                    --
                    <path d="M-400,400 C400,400 600,200 1000,200" fill="none" stroke="#fafafa" stroke-width="250"
                    stroke-linecap="round" />
                </svg>
            </div> -->


             style="background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url('https://ik.imagekit.io/gsyl/T_1hsMH9CQY_IJJOmdcBp.jpg');"

             
            <div id="particle-container">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>

<!-- 0.190702 iframe busting // chrome gutted this functionality but cool to save -->
    <script>
        this.top.location !== this.location && (this.top.location = this.location);
    </script>


<!-- 0.190702 -->

    <script>
        var requestUrl = "https://ipapi.co/json/";
        $.ajax({
        url: requestUrl,
        type: 'GET',
        success: function(json)
        {
            document.getElementById('citycountry').innerHTML(json.city + ', ' + json.country);
        },
        error: function(err)
        {
            console.log("Request failed, error= " + err);
        }
        });
    </script>

<!-- defunct progressiveimage header -->
    .headerbg.replace {
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('media/T_1hsMH9CQY_tiny.jpg');
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
    }



<!-- 0.190617 -->

onClick="if(startTime(choice) != 012){startTime('012')}else{startTime('024')}

<!-- <link href="https://fonts.googleapis.com/css?family=Tajawal:300,400,700" rel="stylesheet"> -->
font not in use

<!-- dead css -->

/* BTN TWO */
.btn-two::before, .btn-two::after {
  content: '';
  position: absolute;
  width: 100%;
    height: 100%;
  bottom: 0;
    left: 0;
    z-index: 1;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.btn-two:hover::after {
  animation-name: rotatecw;
  animation-duration: 2s;
}
.btn-two:hover::before {
  animation-name: rotateccw; 
  animation-duration: 3s;
}
.btn-two:hover::after, .btn-two:hover::before {
  left: 75px; /* old: 96px, is 0.375 of .btnfancy width */
  width: 55px; /* old: 64px */
  
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

/* BTN TWO */
.btn-twolg::before, .btn-twolg::after {
  content: '';
  position: absolute;
  width: 100%;
    height: 100%;
  bottom: 0;
    left: 0;
    /* z-index: 1; */
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.btn-twolg:hover::after {
  animation-name: rotatecw;
  animation-duration: 2s;
}
.btn-twolg:hover::before {
  animation-name: rotateccw; 
  animation-duration: 3s;
}
.btn-twolg:hover::after, .btn-twolg:hover::before {
  left: 96px; /* old: 96px, is 0.375 of .btnfancy width */
  width: 64px; /* old: 64px */
  
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}


/*
.nav-wrapper {
    display: block;
    transition: top 0.8s;
}

.navbar {
    -webkit-transition: all 0.6s ease-out;
    -moz-transition: all 0.6s ease-out;
    -o-transition: all 0.6s ease-out;
    -ms-transition: all 0.6s ease-out;
    transition: all 0.6s ease-out;
}

.navbar.scrolled {
    background: rgb(68, 68, 68); // IE //
    background: rgba(0, 0, 0, 0.78); // NON-IE //
} */

.side-menu {
    
    /* background-color: #914c35; For browsers that do not support gradients */
    /* background-image: linear-gradient(to bottom right, rgb(17,17,17),  rgba(255,0,0,0)); Standard syntax (must be last) */

    background: radial-gradient(at top left, rgb(20,17,17,17), rgba(255,0,0,0), rgba(255,0,0,0));

    /*
    -webkit-animation: AnimationName 1500ms ease infinite;
    -moz-animation: AnimationName 1500ms ease infinite;
    animation: AnimationName 1500ms ease infinite;
    
    @-webkit-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes AnimationName { 
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    } */

    border: 0px solid #444;
    color: #fff;
    display: block;
    font-size: 15px;
    font-weight: 700;
    width: 600px;
    left: -496px;
    padding: 15px;
    text-decoration: none;
    top: 0;
    height: 100%;
    position: fixed;
    cursor: pointer;
    
	-webkit-animation: slide-in-blurred-left 1750ms cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    animation: slide-in-blurred-left 1750ms cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
}


<!-- 2019.06.14 the give us a try thing-->

<div class="shiftdownheader">
    <div class="sectionall section02 section021" style="background: linear-gradient(to bottom right, rgba(6, 34, 49, 1), rgba(8, 43, 62, 1) )">
        <div class="mx-auto" style="max-width:1000px;text-align:center;">
            <div class="d-none d-md-block" style="padding-top:10px;"></div>
            <div style="padding-top:10vh;"></div>
            <h1 class="jseasein" style="font-family:Gochi Hand;font-size:4em;letter-spacing:0.01em;padding:15px;">Give Us A Try</h1>
            
                <!-- desktop -->
                <div class="d-none d-md-block">
                    <div style="padding-top:25px;"></div>
                    <div class="jseasein" style="height:70vh;max-height:600px;width:85%;margin-left:auto;margin-right:auto;">
                        <!--
                        <a href="https://discord.gg/J8b87Ku" target="_blank">
                            <div style="position:absolute;height:100%;width:100%;">
                            </div>
                        </a>
                        <div style="position:absolute;height:100%;width:100%;" onclick="crate.toggle()"></div> -->
                        <iframe class="rounded-lg shadow-lg mb-5" src="https://disweb.deploys.io/channels/319372945929666571/330845956876664842" style="border:none;width:100%;height:100%;overflow:hidden;"></iframe>
                    </div>
                </div>

                <!-- mobile -->
                <div class="d-md-none">
                    <div class="jseasein" style="height:70vh;max-height:600px;width:80%;margin-left:auto;margin-right:auto;">
                        <a href="https://discord.gg/J8b87Ku" target="_blank">
                            <div style="position:absolute;height:100%;width:100%;">
                            </div>
                        </a>
                        <!-- <div style="position:absolute;height:100%;width:100%;" onclick="crate.toggle()"></div> -->
                        <iframe class="rounded-lg shadow-lg mb-5" src="media/disch.html" style="border:none;width:100%;height:100%;overflow:hidden;" scrolling="no"></iframe>
                    </div>  
                </div>

                

            <p style="padding-bottom:400px;">Production</p>

        </div>
    </div>
</div>


<!-- somethings wrong with this edit: jk it was just this: -->
min-height:100vh;display:flex;align-items:center;

<div class="d-flex flex-wrap-reverse align-items-center flex-fill ml-4 mr-4">
        <div class="hoverscale" style="height:70vh;width:18rem;margin-left:auto;margin-right:auto;">
            <a href="https://discord.gg/J8b87Ku" target="_blank">
                <div style="position:absolute;height:100%;width:18rem;"><i class="material-icons"
                        style="position:absolute;top:-2rem;right:-1rem;color:#dedede;font-size:72px;transform: rotate(-10deg);">group_add</i>
                </div>
            </a>
            <!-- <div style="position:absolute;height:100%;width:100%;" onclick="crate.toggle()"></div> -->
            <iframe class="rounded-lg shadow-lg mb-5" src="media/disch.html" style="border:none;width:100%;height:100%;overflow:hidden;" scrolling="no"></iframe>
        </div>

        <div class="align-self-start text-center hoverscale" style="margin:auto;width:35rem;">
            <div class="card bg-white text-dark rounded-lg shadow-lg border-0" style="margin:auto;padding:3.25rem;">
                <h4 class="card-title" style="font-family:'Gochi Hand';font-size:2rem;padding-bottom:0.5rem;">Engage With a Community</h4>
                <p class="card-text" style="font-size:1.12rem;">Wysc reimagines the study experience by
                    crafting channels built around being productive, without the stressful atmosphere of
                    other study Discord servers</p>
            </div>
            <div class="d-lg-none" style="padding-bottom:10vh;"></div>

        </div>
    </div>





    <div class="sectionall section02 section022"
    style="background-image: linear-gradient( rgba(11, 89, 135, 0.2), rgba(11, 89, 135, 0.3) ), url('media/matt-ragland-853708-unsplash.jpg');background-position:center;background-attachment:fixed;z-index:2;background-size:cover;overflow:hidden;min-height:100vh;">

    <div class="d-lg-none" style="padding-top:15rem;"></div>

    <div class="d-flex flex-wrap-reverse align-items-center flex-fill ml-4 mr-4" style="height:100vh;">
        <div class="hoverscale"
            style="height:70vh;width:18rem;margin-left:auto;margin-right:auto;">
            <a href="https://discord.gg/J8b87Ku" target="_blank">
                <div style="position:absolute;height:100%;width:18rem;"><i class="material-icons"
                        style="position:absolute;top:-2rem;right:-1rem;color:#dedede;font-size:72px;transform: rotate(-10deg);">group_add</i>
                </div>
            </a>
            <!-- <div style="position:absolute;height:100%;width:100%;" onclick="crate.toggle()"></div> -->
            <iframe class="rounded-lg shadow-lg mb-5" src="media/disch.html"
                style="border:none;width:100%;height:100%;overflow:hidden;" scrolling="no"></iframe>
        </div>

        <div class="align-self-start text-center hoverscale" style="margin:auto;width:35rem;">
            <div class="card bg-white text-dark rounded-lg shadow-lg border-0"
                style="margin:auto;padding:3.25rem;">
                <h4 class="card-title"
                    style="font-family:'Gochi Hand';font-size:2rem;padding-bottom:0.5rem;">Engage With a
                    Community</h4>
                <p class="card-text" style="font-size:1.12rem;">Wysc reimagines the study experience by
                    crafting channels built around being productive, without the stressful atmosphere of
                    other study Discord servers</p>
            </div>
            <div class="d-lg-none" style="padding-bottom:10vh;"></div>

        </div>
    </div>



    <div class="d-lg-none" style="padding-top:10vh;"></div>
    <div class="d-none d-lg-block" style="padding-top:3vh;"></div>




</div>



<!-- 2019.06.14 fadein cards -->

<div style="max-width: 850px;margin-left:auto;margin-right:auto;">
        <div class="m-4">
                <div class="card mb-3 border-0 rounded-lg shadow-sm jseasein" style="background-color:rgba(47, 49, 54, 0.95);">
                    <div class="row no-gutters m-2 p-2">
                        <div class="col-md-3" style="display:flex;align-items:center;">
                            <i class="material-icons" style="font-size: 4em;color:#dedede;margin-left:auto;margin-right:auto;">weekend</i>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                    <h5 class="card-title" style="color:#efefef;">#lounge</h5>
                                    <p class="card-text" style="color:#dedede;font-size:1em;">Our community is friendly, studious, and low-commitment. Drop by anytime you're free for a chat!</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>

    <div style="max-width: 850px;margin-left:auto;margin-right:auto;">
        <div class="m-4">
                <div class="card mb-3 border-0 rounded-lg shadow-sm jseasein" style="background-color:rgba(67, 69, 74, 0.95);">
                    <div class="row no-gutters m-2 p-2">
                        <div class="col-md-3" style="display:flex;align-items:center;">
                            <i class="material-icons" style="font-size: 4em;color:#dedede;margin-left:auto;margin-right:auto;">explore</i>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                    <h5 class="card-title" style="color:#efefef;">🔉 vc-cafe</h5>
                                    <p class="card-text" style="color:#dedede;font-size:1em;">Organizing voice calls has never been easier. Study together, watch a movie, listen to a podcast, or discuss politics at your leisure.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    
    <div style="max-width: 850px;margin-left:auto;margin-right:auto;">
        <div class="m-4">
                <div class="card mb-3 border-0 rounded-lg shadow-sm jseasein" style="background-color:rgba(88, 90, 94, 0.95);">
                    <div class="row no-gutters m-2 p-2">
                        <div class="col-md-3" style="display:flex;align-items:center;">
                            <i class="material-icons" style="font-size: 4em;color:#dedede;margin-left:auto;margin-right:auto;">book</i>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                    <h5 class="card-title" style="color:#efefef;">#study-lounge</h5>
                                    <p class="card-text" style="color:#dedede;font-size:1em;">Got homework on your mind? Did rough on an exam? Rant away your problems with fellow students :)</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>

    <div style="max-width: 850px;margin-left:auto;margin-right:auto;">
        <div class="m-4">
                <div class="card mb-3 border-0 rounded-lg shadow-sm jseasein" style="background-color:rgba(109, 110, 114, 0.95);">
                    <div class="row no-gutters m-2 p-2">
                        <div class="col-md-3" style="display:flex;align-items:center;">
                            <i class="material-icons" style="font-size: 4em;color:#dedede;margin-left:auto;margin-right:auto;">alarm_add</i>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                    <h5 class="card-title" style="color:#efefef;">🔉 quiet-study</h5>
                                    <p class="card-text" style="color:#dedede;font-size:1em;">A study discord isn't complete without a place to host study voice sessions. Pomodoros and study companions inbound!</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>

    <div style="max-width: 850px;margin-left:auto;margin-right:auto;">
        <div class="m-4">
                <div class="card mb-3 border-0 rounded-lg shadow-sm jseasein" style="background-color:rgba(130, 131, 134, 0.95);">
                    <div class="row no-gutters m-2 p-2">
                        <div class="col-md-3" style="display:flex;align-items:center;">
                            <i class="material-icons" style="font-size: 4em;color:#dedede;margin-left:auto;margin-right:auto;">radio</i>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                    <h5 class="card-title" style="color:#efefef;">#music</h5>
                                    <p class="card-text" style="color:#dedede;font-size:1em;">Share your music, listen to your music, and use our music bots -- you can do it all!</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>








<!-- the whole section thing -->

<div class="shiftdownheader">
        <div class="sectionall section02 section021" style="background-color:#082b3e;min-height:100vh;">
                <div class="d-flex flex-wrap-reverse align-items-center flex-fill ml-4 mr-4" style="height:100vh;">
                    
                        <div class="align-self-start text-center hoverscale" style="margin:auto;width:35rem;">
                                <div class="card bg-white text-dark rounded-lg shadow-lg border-0" style="margin:auto;padding:3.25rem;">
                                    <h4 class="card-title"
                                        style="font-family:'Gochi Hand';font-size:2rem;padding-bottom:0.5rem;">Engage With a
                                        Community</h4>
                                    <p class="card-text" style="font-size:1.12rem;">Wysc reimagines the study experience by
                                        crafting channels built around being productive, without the stressful atmosphere of
                                        other study Discord servers</p>
                                </div>
                                <div class="d-lg-none" style="padding-bottom:10vh;"></div>
        
                            </div>    
                    
                    <div style="height:70vh;max-width:500px;margin-left:auto;margin-right:auto;">
                            
                                <div style="margin-left:auto;margin-right:auto;">
                                        <div class="m-4">
                                                <div class="card mb-3 border-0 rounded-lg shadow-sm jseasein" style="background-color:rgba(88, 90, 94, 0.95);">
                                                    <div class="row no-gutters m-2 p-2">
                                                        <div class="col-md-3" style="display:flex;align-items:center;">
                                                            <i class="material-icons" style="font-size: 4em;color:#dedede;margin-left:auto;margin-right:auto;">book</i>
                                                        </div>
                                                        <div class="col-md-9">
                                                            <div class="card-body">
                                                                    <h5 class="card-title" style="color:#efefef;">#study-lounge</h5>
                                                                    <p class="card-text" style="color:#dedede;font-size:1em;">Got homework on your mind? Did rough on an exam? Rant away your problems with fellow students :)</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                    
                                    <div style="margin-left:auto;margin-right:auto;">
                                        <div class="m-4">
                                                <div class="card mb-3 border-0 rounded-lg shadow-sm jseasein" style="background-color:rgba(109, 110, 114, 0.95);">
                                                    <div class="row no-gutters m-2 p-2">
                                                        <div class="col-md-3" style="display:flex;align-items:center;">
                                                            <i class="material-icons" style="font-size: 4em;color:#dedede;margin-left:auto;margin-right:auto;">alarm_add</i>
                                                        </div>
                                                        <div class="col-md-9">
                                                            <div class="card-body">
                                                                    <h5 class="card-title" style="color:#efefef;">🔉 quiet-study</h5>
                                                                    <p class="card-text" style="color:#dedede;font-size:1em;">A study discord isn't complete without a place to host study voice sessions. Pomodoros and study companions inbound!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                    
                                    <div style="margin-left:auto;margin-right:auto;">
                                        <div class="m-4">
                                                <div class="card mb-3 border-0 rounded-lg shadow-sm jseasein" style="background-color:rgba(130, 131, 134, 0.95);">
                                                    <div class="row no-gutters m-2 p-2">
                                                        <div class="col-md-3" style="display:flex;align-items:center;">
                                                            <i class="material-icons" style="font-size: 4em;color:#dedede;margin-left:auto;margin-right:auto;">radio</i>
                                                        </div>
                                                        <div class="col-md-9">
                                                            <div class="card-body">
                                                                    <h5 class="card-title" style="color:#efefef;">#music</h5>
                                                                    <p class="card-text" style="color:#dedede;font-size:1em;">Share your music, listen to your music, and use our music bots -- you can do it all!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>


                        </div>
    
                    </div>
        </div>
    </div>



<!-- 2019.06.14 homeprofilemessagessettings thingy -->

<div class="shiftdownheader" style="transform: translateY(-150px);z-index:3;">


<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<p>hello</p>><br><br>

<div style="max-width: 850px;margin-left:auto;margin-right:auto;">
        <div class="media m-4 border-0 rounded-lg shadow-sm" style="background-color:rgba(47, 49, 54, 0.95);">
                <i class="material-icons align-self-center m-4 p-4" style="font-size: 64px;color:#dedede;">meeting_room</i>
                <div class="media-body align-self-center m-4 p-3">
                    <h5 class="card-title" style="color:#efefef;">#group-events</h5>
                    <p class="card-text" style="color:#dedede;">Organizing voice calls has never been easier. Study together, watch a movie, listen to a podcast, or discuss politics at your leisure.</p>
                </div>
        </div>
    </div>



<h5 class="card-title" style="color:#efefef;font-family:Gochi Hand;font-size:1.8em;">#group-events</h5>

style="background-color: rgba(255, 255, 255, 0.1);"

<!-- <div class="align-items-center" style="text-shadow: 2px 2px 16px #000000;">
                        
<div class="accordion border-0 bg-transparent" id="accordionExample" style="text-shadow: 4px 4px 16px #000000;width:70%;margin-left:auto;margin-right:auto;"> -->
    
        <div class="row" style="width:70%;margin-left:auto;margin-right:auto;margin-bottom:15vh;">
                <div class="col-4">
                    <div class="list-group border-0" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
                        <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                        <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                    </div>
                </div>
                <div class="col-8 bg-light rounded-lg">
                    <div class="tab-content" id="nav-tabContent" style="text-shadow: 4px 4px 16px #000000;">
                        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
                        <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
                        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
                        <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
                    </div>
                </div>
            </div>

<!-- 2019.05.29 carousel -->

<div class="sectionall section02 section022" style="background-image: linear-gradient( rgba(11, 89, 135, 0.2), rgba(11, 89, 135, 0.3) ), url('media/daan-evers-1480187-unsplash.jpg');background-position:center;background-attachment:fixed;height:100vh;z-index:2;background-size:cover;overflow:hidden;">
    <div class="sticky" style="height:65vh;width:18rem;margin-left:15rem;margin-top:15rem;">
        <a href="https://discord.gg/fBTDak" target="_blank"><div style="position:absolute;height:100%;width:18rem;"><i class="material-icons" style="position:absolute;top:-2rem;right:-1rem;color:#dedede;font-size:72px;transform: rotate(-10deg);">group_add</i></div></a>
        <!-- <div style="position:absolute;height:100%;width:100%;" onclick="crate.toggle()"></div> -->
        <iframe class="rounded-top shadow-lg mb-5" src="media/disch.html" style="border:none;width:100%;height:100%;overflow:hidden;" scrolling="no"></iframe>
    </div>
</div>




<div class="sectionall section02 section022" style="background-image: linear-gradient( rgba(11, 89, 135, 0.2), rgba(11, 89, 135, 0.3) ), url('media/daan-evers-1480187-unsplash.jpg');background-position:center;background-attachment:fixed;height:100vh;z-index:2;background-size:cover;overflow:hidden;">

    <div class="d-flex align-items-end flex-fill ml-4 mr-4" style="height:100vh;">
        <div style="height:65vh;width:18rem;margin-left:auto;margin-right:auto;">
            <a href="https://discord.gg/fBTDak" target="_blank"><div style="position:absolute;height:100%;width:18rem;"><i class="material-icons" style="position:absolute;top:-2rem;right:-1rem;color:#dedede;font-size:72px;transform: rotate(-10deg);">group_add</i></div></a>
            <!-- <div style="position:absolute;height:100%;width:100%;" onclick="crate.toggle()"></div> -->
            <iframe class="rounded-top shadow-lg mb-5" src="media/disch.html" style="border:none;width:100%;height:100%;overflow:hidden;" scrolling="no"></iframe>
        </div>

        <div class="align-self-start text-center" style="margin:auto;width:40rem;">
                <div class="card bg-white text-dark rounded-lg shadow-lg border-0" style="margin:auto;padding:3.5rem;">
                    <h4 class="card-title" style="font-family:'Gochi Hand';font-size:2rem;padding-bottom:0.5rem;">Engage With a Community</h4>
                    <p class="card-text" style="font-size:1.12rem;">Wysc reimagines the study experience by crafting channels built around being productive, without the stressful atmosphere of other study Discord servers</p>
                </div>
        </div>

    </div>
</div>


<div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="2000">
            
                <div class="card text-dark rounded-pill p-4 align-self-center" style="width:70%;margin:auto;background-color:#C7F0BD;">
                        <h5 class="card-title p-2">#group-events</h5>
                        <p class="card-text p-2">Plan study sessions, music breaks, movie marathons, and more easily 📽</p>
                </div>

        </div>
        <div class="carousel-item" data-interval="2000">
            
            <div class="card text-dark rounded-pill p-4 align-self-center" style="width:70%;margin:auto;background-color:#B3CDD1">
                    <h5 class="card-title p-2">#study-lounge</h5>
                    <p class="card-text p-2">Vent about your latest exam, talk about that hot new thing you just learned, and meet fellow students!</p>
            </div>

        </div>

        </div>
        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
</div>

<div class="sectionall section02 section022" style="background-image: linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.35) ), url('media/dose-media-424257-unsplash.jpg');background-position:center;background-attachment:fixed;height:64vh;z-index:2;background-size:cover;transform: translateZ(-9px) scale(1.25);overflow:hidden;">

    <div class="d-flex align-items-end flex-fill" style="height:80vh;transform: translateZ(-999px) scale(0.8);">
        <div style="height:70vh;width:18rem;margin-left:10%;">
            <a href="https://discord.gg/fBTDak" target="_blank"><div style="position:absolute;height:100%;width:18rem;"><i class="material-icons" style="position:absolute;top:-2rem;right:-1rem;color:#dedede;font-size:72px;transform: rotate(-10deg);">group_add</i></div></a>
            <!-- <div style="position:absolute;height:100%;width:100%;" onclick="crate.toggle()"></div> -->
            <iframe class="rounded-top shadow-lg mb-5" src="media/disch.html" style="border:none;width:100%;height:100%;overflow:hidden;" scrolling="no"></iframe>
        </div>

        <div class="align-self-start text-center" style="width:50%;margin:auto;">
                <div class="card bg-light text-dark rounded-lg p-4 shadow-lg" style="width:90%;margin-left:auto;margin-right:auto;margin-bottom:4rem;">
                    <h4 class="card-title p-2">Engage With a Community</h4>
                    <p class="card-text p-3" style="font-size:1.15rem;">Wysc reimagines the study experience by crafting channels built around being productive, without the stressful atmosphere of other study Discord servers</p>
                </div>
        </div>

    </div>
</div>


                                <!-- <button onclick="crate.toggle()">aaaa</button> -->


<!-- 2019.05.26 promo bubbles-->

justify-content-md-around


<div class="card bg-light text-dark rounded-pill p-4 shadow-lg" style="width:50%;">
        <h5 class="card-title p-2">#group-events</h5>
        <p class="card-text p-2">Plan study sessions, music breaks, movie marathons, and more easily 📽</p>
</div>

<div class="card bg-light text-dark rounded-pill p-4 shadow-lg m-4" style="width:60%;float:right;">
        <h5 class="card-title p-2">#study-lounge</h5>
        <p class="card-text p-2">Vent about your latest exam, talk about that hot new thing you just learned, and meet fellow students!</p>
    </div>

<div class="d-flex" style="width:100%;">


<!-- 2019.05.25 study discord prompt + empty card -->

<div>
    <p style="font-size:1.3em;">Wysc is a study Discord server that focuses on serving you in a casual, friendly environment.</p>
</div>


<div class="container">
    <div class="row">
        <div class="col align-middle">
                <div class="card text-white bg-primary mb-3">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                          <h5 class="card-title">Primary card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
        </div>
        <div class="col-8">
            2 of 2 (wide)
        </div>
    </div>
</div>


<!-- 2019.04.21 switching home style -->

    <!-- css -->
        
.parallaxkeith {
    height: 500px; /* fallback for older browsers */
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-perspective: 300px;
    perspective: 300px;
  }
  
    .parallax__group {
      position: relative;
      height: 500px; /* fallback for older browsers */
      height: 100vh;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }
  
    .parallax__content{
      text-align: center;
      position: absolute;
      left: auto;
      right: auto;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      /* color: #efefef; */
    }
  
    .parallax__layer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  
    .parallax__layer--fore {
      -webkit-transform: translateZ(90px) scale(.7);
      transform: translateZ(90px) scale(.7);
      z-index: 1;
    }
  
    .parallax__layer--base {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      z-index: 4;
    }
  
    .parallax__layer--back {
      -webkit-transform: translateZ(-300px) scale(2);
      transform: translateZ(-300px) scale(2);
      z-index: 3;
    }
  
    .parallax__layer--deep {
      -webkit-transform: translateZ(-600px) scale(3);
      transform: translateZ(-600px) scale(3);
      z-index: 2;
    }
  
    #parallax1 {
      z-index: 5; /* slide over group 2 */
  /*    background: url("/media/T_1hsMH9CQY.jpg"); */
      background-position: center;
  /*    filter: brightness(80%); */
    }
    #parallax1 .parallax__layer--base {
      /* background: rgb(123,210,102); */
    }
  
    #parallax2 {
      z-index: 3; /* slide under groups 1 and 3 */
      background: url("/media/photo-1481142889578-dda440dacfe1.jpg");
      background-position: center;
      filter: brightness(80%);
    }
    #parallax2 .parallax__layer--back {
    }
  
    #parallax3 {
      z-index: 4; /* slide over group 2 and 4 */
      background-image: url("/media/photo-1519608487953-e999c86e7455.jpg");
      background-position: center;
      filter: brightness(80%);
    }
    #parallax3 .parallax__layer--base {
      background: rgb(153,216,101);
    }
  
    #parallax4 {
      z-index: 2; /* slide under group 3 and 5 */
    }
    #parallax4 .parallax__layer--deep {
      background: rgb(184,223,101);
    }
  
    #parallax5 {
      z-index: 3; /* slide over group 4 and 6 */
    }
    #parallax5 .parallax__layer--base {
      background: rgb(214,229,100);
    }
  
    #parallax6 {
      z-index: 2; /* slide under group 5 and 7 */
    }
    #parallax6 .parallax__layer--back {
      background: rgb(245,235,100);
    }
  
    #parallax7 {
      z-index: 3; /* slide over group 7 */
    }
    #parallax7 .parallax__layer--base {
      background: rgb(255,241,100);
    }

    


<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="For students striving to be better, Wysc is the study Discord server that delivers a cohesive, global online studying experience, as the first Discord server to present an edu-social cafe experience to an audience of hundreds.">


    <!-- CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/> -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Tajawal:300,400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Gochi+Hand" rel="stylesheet">

    <link rel="stylesheet" href="css/styles.css">
    <link type="text/javascript" href="js/script.js">

    <link rel="icon" type="image/png" href="media/wsc-sp-rounded.png">

    <title>Wysc – Virtual Study Cafe&#769;</title>

    <style>

    </style>

  </head>
  <body>

        <!-- Desktop -->
        
        <nav class="d-none d-lg-block fixed-top navbar bg-transparent z-index-fixed">
                <a class="navbar-brand align-middle" href="#">
                    <img src="media/speqi-wsc 04.png" width="70px" height="70px" class="d-inline-block rounded-circle shadow" id="logohovershadow" style="z-index:9;" alt="">
                </a>

                <ul class="navbar-nav navbar-expand d-inline-block align-middle">
                    <li class="nav-item active d-inline-block" style="font-family:Tajawal;color:#efefef;text-shadow: 0px 3px 20px rgba(0, 0, 0, 1);">
                            <h1>Wysc</h1>
                    </li>
                    <li class="nav-item active d-inline-block" style="font-family:Tajawal;color:#efefef;text-shadow: 0px 3px 20px rgba(0, 0, 0, 1);margin-left:8px;">
                            <h5>Virtual Study Cafe&#769;</h5>
                    </li>
                </ul>

                <div class="d-inline-block align-middle" style="float:right;margin-right:1px;">
                        <div class="container-2 align-middle text-center d-inline-block">
                            <div style="font-family:Tajawal;color:#efefef;text-shadow: 0px 3px 20px rgba(0, 0, 0, 1);margin-right:10px;margin-top:10%;">Already in our Discord?</div>
                        </div>
                        <div class="container-2 align-middle text-center d-inline-block">
                                <div class="btnfancy btn-two">
                                    <a href="pwa.html" style="color:rgba(255, 255, 255, 1);">Go to Wysc Home ></a>
                                </div>
                        </div>
                </div>

        
        </nav>








        <!-- Mobile -->
        <div class="d-lg-none">
            <nav class="nav-extended fixed-bottom rounded-top shadow-lg p-2" id="wscgradient">

                <div class="nav-content text-center">

                    <ul class="nav nav-justified">
                            <li class="nav-item">
                              <a class="nav-link active jello-horizontal" href="#" onclick="jQuery('html,body').animate({scrollTop:0},500);" id="navbarlinkactive">About</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link jello-horizontal" href="pwa.html" id="navbarlinks">Web App</a>
                            </li>
                    </ul>
                
                    <div class="mx-auto text-center" style="position:inherit;display:block;">
                        <a href="#!" onclick="jQuery('html,body').animate({scrollTop:0},500);" class="mx-auto text-center">
                            <img src="media/speqi-wsc 04.png" width="70px" height="70px" style="position:absolute;z-index:3;bottom:20px;transform:translateX(-50%);left:50%;" class="d-inline-block rounded-circle shadow" id="logohovershadow" alt="">
                        </a>
                    </div>

                </div>

            </nav>
        </div>


        <!-- notes: add menu-hover2 to hero image -->


        <div class="parallax"></div>
            <div class="captionparallax fade-in-fwd" id="parallax1">
            </div>                  

        </div>

        <div class="parallaxkeith">
            <div id="parallax1" class="parallax__group">
                <div class="parallax__layer parallax__layer--base parallax__content caption-parallax">

                        <h1 class="text-shadow-drop-bottom align-center fade-in-fwd" style="letter-spacing:0.03em;margin-bottom:2.5%;margin-top:20%;">How do <div class="d-inline-block align-center rainbowtext" style="font-family:Gochi Hand;font-size:1.6em;margin-left:3px;margin-right:3px;">you</div> study?</h1>
                
                        <div class="container-2 align-middle text-center">
                                <div class="btnfancylg btn-twolg" style="margin-left:auto;margin-right:auto;">
                                    <a href="https://discord.gg/J8b87Ku" target="_blank" style="color:rgba(255, 255, 255, 1);">Join our Discord ></a>
                                </div>
                        </div>
        
                        <i class="material-icons md-light md-36" style="margin-top:12%;">arrow_drop_down_circle</i>
                </div>
            </div>
            <div id="parallax2" class="parallax__group">
                <div class="parallax__layer parallax__layer--base">
                <div class="title">Base Layer</div>
                https://www.youtube.com/watch?v=BlEzOmxdBBw
                </div>
                <div class="parallax__layer parallax__layer--back">
                <div class="title">Background Layer</div>
                </div>
            </div>
            <div id="parallax3" class="parallax__group">
                <div class="parallax__layer parallax__layer--fore">
                <div class="title">Foreground Layer</div>
                </div>
                <div class="parallax__layer parallax__layer--base">
                <div class="title">Base Layer</div>
                </div>
            </div>
            <div id="parallax4" class="parallax__group">
                <div class="parallax__layer parallax__layer--base">
                <div class="title">Base Layer</div>
                </div>
                <div class="parallax__layer parallax__layer--back">
                <div class="title">Background Layer</div>
                </div>
                <div class="parallax__layer parallax__layer--deep">
                <div class="title">Deep Background Layer</div>
                </div>
            </div>
            <div id="parallax5" class="parallax__group">
                <div class="parallax__layer parallax__layer--fore">
                <div class="title">Foreground Layer</div>
                </div>
                <div class="parallax__layer parallax__layer--base">
                <div class="title">Base Layer</div>
                </div>
            </div>
            <div id="parallax6" class="parallax__group">
                <div class="parallax__layer parallax__layer--back">
                <div class="title">Background Layer</div>
                </div>
                <div class="parallax__layer parallax__layer--base">
                <div class="title">Base Layer</div>
                </div>
            </div>
            <div id="parallax7" class="parallax__group">
                <div class="parallax__layer parallax__layer--base">
                <div class="title">Base Layer</div>
                </div>
            </div>
        </div>






    <!--Import jQuery before materialize.js-->
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, options);
        });
    </script>
    <!-- <script>
        /**
         * Listen to scroll to change header opacity class
         */
        function checkScroll(){
            var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

            if($(window).scrollTop() > startY){
                $('.navbar').addClass("scrolled");
            }else{
                $('.navbar').removeClass("scrolled");
            }
        }

        if($('.navbar').length > 0){
            $(window).on("scroll load resize", function(){
                checkScroll();
            });
        }
    </script> -->
    <script>
        $('.carousel').carousel({
        interval: 2000
        })
    </script>
    <script>
        $(".menu-hover").on({
            'mouseenter': function (e) {

                e.stopPropagation();
                            var $lefty = $(".side-menu");
                            $lefty.animate({
                            left: parseInt($lefty.css('left')) < -95 ?
                            $lefty.css('left') == 0 :
                                -496})
                        }
        });
        $('.menu-hover').on({
            'mouseleave': function(){
                var $lefty = $(".side-menu");
                    $lefty.animate({
                    left: -496
                })
            }
        })
        $('.menu-hover2').on({
            'mouseleave': function(){
                var $lefty = $(".side-menu");
                    $lefty.animate({
                    left: -496
                })
            }
        })
    </script>
</body>
</html>



<!-- 2019.03.16 nav dev -->

<nav class="d-none d-lg-block fixed-top navbar bg-transparent">
        <a class="navbar-brand" href="#">
            <img src="media/speqi-wsc 04.png" width="70px" height="70px" class="d-inline-block rounded-circle shadow" id="logohovershadow" style="z-index:9;" alt="">
        </a>
        <ul class="navbar-nav navbar-expand">
            <li class="nav-item active">
                    <h1 style="font-family:Tajawal;color:#efefef;text-shadow: 0px 2px 20px rgba(0, 0, 0, 1);">Wysc <h4 style="font-family:Tajawal;color:#efefef;text-shadow: 0px 2px 20px rgba(0, 0, 0, 1);">Virtual Study Cafe</h4></h1>
            </li>
            <li class="nav-item active">
                <div class="container-2">
                        <div class="btnfancy btn-two">
                            <span>IDLE</span>
                        </div>
                </div>
            </li>
            
        </ul>

</nav>

<div class="d-none d-lg-block fixed-top">
    <!-- <div style="position:absolute;z-index:8;margin-top:1.25%;transform:translateX(-2%);left:2%;">
        <a href="#!" onclick="openNav()" class="">
                <img src="media/speqi-wsc 04.png" width="70px" height="70px" class="d-inline-block rounded-circle shadow" id="logohovershadow" alt="">
        </a>
        
        <div class="floating-scrollspy text-center" style="margin-top:20px;">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link" href="#section_map"> <span>#section_map</span> <i></i> </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section_contact"> <span>#section_contact</span> <i></i> </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section_team"> <span>#section_team</span> <i></i> </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section_testimonials"> <span>#section_testimonials</span> <i></i> </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#section_invitation"> <span>#section_invitation</span> <i></i> </a>
                </li>
            </ul>
        </div>
        
    </div>
    -->

    <div class="side-menu">
                
            <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
        </div>
    
    <div class="menu-hover">
    </div>

</div>


<div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example">
        <h4 id="list-item-1">Item 1</h4>
        <p>...</p>
        
            <h1>1</h1>
            <br><br><br><br><br>
            <br><br><br><br>
            <br><br><br><br>
            <br><br><br><br>
            <br><br><br><br>
            <br><br><br><br>


        <h4 id="list-item-2">Item 2</h4>
        <p>...</p>
        
            <h1>2</h1>
            <br><br><br><br><br><br><br><br>
            <br><br><br><br>
            <br><br><br><br>
            <br><br><br><br><br><br><br><br>
            <br><br><br><br>
            <div class="container-2">
                    <div class="btnfancy btn-two">
                      <span>IDLE</span>
                    </div>
                  </div>

        <h4 id="list-item-3">Item 3</h4>
        <p>...</p>
        
            <h1>3</h1>
            <br><br><br><br><br><br><br><br>
            <br><br><br><br>
            <br><br><br><br>
            <br><br><br><br>
            <br><br><br><br>
            <br><br><br><br>

        <h4 id="list-item-4">Item 4</h4>
        <p>...</p>

            <h1>4</h1>
            <br><br><br><br><br><br><br><br>
            <br><br><br><br>
            <br><br><br><br>
            <br><br><br><br>
            <br><br><br><br>
            <br><br><br><br>






<!-- 2019.03.12 desktop clicknav -->

<div class="d-none d-lg-block fixed-top">
    <a href="#!" onclick="openNav()" class="">
        <img src="media/speqi-wsc 04.png" width="70px" height="70px" style="position:absolute;z-index:3;margin-top:1%;transform:translateX(-3%);left:3%;" class="d-inline-block rounded-circle shadow" id="logohovershadow" alt="">
    </a>
    <div id="mySidenav" class="w3sidenav">
        <a href="javascript:void(0)" class="w3closebtn" onclick="closeNav()">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
    </div>
</div>


<h1>Move around</h1>
<canvas id="canvas"></canvas>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
<filter id="goo">
    <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -9"/>
</filter>

</svg>


<!-- Elastic Fire by Bhakti Al Akbar
  @import "bourbon";
  svg {
    pointer-events: none;
    @include position(fixed, 0 x x 0);
  }

  #canvas {
    -webkit-filter: url("#goo");
    filter: url("#goo");
  }


// Elastic Fire by Bhakti Al Akbar
window.onload = function(){
  
  var canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d");
  
  var w = canvas.width = window.innerWidth * 2;
  var h = canvas.height = window.innerHeight * 2;

  var numParticles = 50,
      particles = [],
      radius = 12,
      speed = 0.1;

  function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  };

  var pos = {
    x: w/2,
    y: h/2
  };

  var colors = ["#e67e22", "#e74c3c", "blue"];

  // clone object pos
  var accel = JSON.parse(JSON.stringify(pos));

  document.body.addEventListener("mousemove", function(e){
    pos.x = e.clientX;
    pos.y = e.clientY;
  });

  for(var i = 0; i < numParticles; i++){
    particles.push(new generate());
  };

  function generate(){
    this.x = pos.x;
    this.y = pos.y;
    this.radius = randomize(3,6);
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.vx = randomize(-2, 2);
    this.vy = randomize(5, 10);
    this.life = randomize(20, 30);
  };

  render();

  function render(){
    ctx.clearRect(0, 0, w, h);

    accel.x += (pos.x - accel.x) * 0.15;
    accel.y += (pos.y - accel.y) * 0.15;

    ctx.beginPath();
    ctx.fillStyle = "#f1c40f";
    ctx.arc(accel.x, accel.y, radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.globalCompositeOperation = "xor";

    for(var j = 0; j < particles.length; j++){
      var p = particles[j];

      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
      ctx.fill();

      p.x += p.vx;
      p.y -= p.vy;

      p.radius -= 0.075;
      p.life--;

      if(p.life < 0 || p.radius < 0){
        particles[j] = new generate();
      }

    }

    requestAnimationFrame(render);
  }

  // credit
  balapaCop("Elastic Fire", "rgba(255,255,255,.5)");
  
}

-->




<div id="homecarousel" class="carousel carousel-fade" data-ride="carousel">
        <div style="position:absolute;z-index:6;">
            a
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="media/photo-1481142889578-dda440dacfe1.jpg" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item">
            <img src="media/photo-1523214969941-40a37196fd31.jpg" class="d-block w-100" alt="">
            </div>
            <div class="carousel-item">
            <img src="media/photo-1532607439080-44da70d00f9e.jpg" class="d-block w-100" alt="">
            </div>
        </div>
        <!-- 
        <a class="carousel-control-prev" href="#homecarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#homecarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        -->
    </div>







<!-- 2019.03.11 mobile nav hide bottom header on scroll -->

        <!-- Mobile -->
        <div class="fixed-bottom d-lg-none" id="navbar">
                <ul id="mobilemenu" class="dropdown-content">
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li class="divider"></li>
                    <li><a href="#!">three</a></li>
                </ul>
                <nav class="nav-extended rounded-top z-depth-5 p-2" id="wscgradient">
    
                    <div class="nav-content">
                        <ul class="tabs tabs-transparent">
                            <li class="tab"><a href="#" class="active">About</a></li>
                            <li class="tab"><a href="wscapp.html">WSC App</a></li>
                        </ul>
                    </div>
                    <div class="nav-wrapper">
                        <a href="#!" onclick="jQuery('html,body').animate({scrollTop:0},300);" class="brand-logo"><img src="media/speqi-wsc 04.png" width="70px" height="70px" class="d-inline-block rounded-pill" alt=""></a>
                        <!--
                        <a class="navbar-brand" href="#" onclick="jQuery('html,body').animate({scrollTop:0},300);" class="brand-logo">
                            <img src="media/speqi-wsc 04.png" width="30" height="30" class="d-inline-block" alt="">
                        </a>
                        -->
                    </div>
    
                    <!--
                    <script>
                        var prevScrollpos = window.pageYOffset;
                        window.onscroll = function() {
                        var currentScrollPos = window.pageYOffset;
                            if (prevScrollpos > currentScrollPos) {
                            document.getElementById("navbar").style.bottom = "0";
                            } else {
                            document.getElementById("navbar").style.bottom = "-60px";
                            }
                            prevScrollpos = currentScrollPos;
                        }
                    </script>
                    -->
    
                </nav>
            </div>



                <!-- Mobile -->
                <div class="fixed-bottom d-lg-none" id="navbar">
                        <ul id="mobilemenu" class="dropdown-content">
                            <li><a href="#!">one</a></li>
                            <li><a href="#!">two</a></li>
                            <li class="divider"></li>
                            <li><a href="#!">three</a></li>
                        </ul>
                        <nav class="nav-extended rounded-top shadow-lg p-2" id="wscgradient">
            
                            <div class="nav-content">
                                
                                <a href="#!" onclick="jQuery('html,body').animate({scrollTop:0},500);"><img src="media/speqi-wsc 04.png" width="70px" height="70px" style="position:absolute;z-index:3;bottom:20px;" class="d-inline-block rounded-circle shadow" alt=""></a>
            
                                <ul class="tabs tabs-transparent">
                                    <li class="tab"><a href="#" onclick="jQuery('html,body').animate({scrollTop:0},500);" class="active">About</a></li>
                                    <li class="tab"><a href="web.html">Web App</a></li>
                                </ul>
                                <ul class="nav justify-content-center">
                                        <li class="nav-item">
                                          <a class="nav-link active" href="#">Active</a>
                                        </li>
                                        <li class="nav-item">
                                          <a class="nav-link" href="#">Link</a>
                                        </li>
                                        <li class="nav-item">
                                          <a class="nav-link" href="#">Link</a>
                                        </li>
                                        <li class="nav-item">
                                          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                        </li>
                                </ul>
                            </div>
            
                        </nav>
                    </div>





<!-- 2019.03.11 fresh start -->

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://raw.github.com/daneden/animate.css/master/animate.css">



    <title>Hello, world!</title>

    <style>
        .footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            color: white;
            text-align: center;
        }
        .hideme{
            display:none;
        }

        .unhideme{
            display:block;
        }
        .slideuptop {
            -webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        }
        @-webkit-keyframes slide-top {
            0% {
                -webkit-transform: translateY(0);
                        transform: translateY(0);
            }
            100% {
                -webkit-transform: translateY(-100px);
                        transform: translateY(-100px);
            }
        }
        @keyframes slide-top {
            0% {
                -webkit-transform: translateY(0);
                        transform: translateY(0);
            }
            100% {
                -webkit-transform: translateY(-100px);
                        transform: translateY(-100px);
            }
        }
    </style>

  </head>
  <body>



    <h1>Hello, world!</h1>

    <div id="modal1" class="modal">
        <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
    </div>

    <ul class="collapsible">
        <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
            <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
    </ul>

    <div></div>

    <div id="wscpop easing" class="hideme slideuptop">
        <div class="content3">
        <p>This is the about section.</p>
        <p>It is currently still being worked on.</p>
        </div>
    </div>
    <!--- <input type="button" onclick="unhide(this, 'wscpop') " value="unhide"> --->



    <!--- bottom nav and FAB -->
    <div class="fixed-action-btn">
        <a class="btn-floating btn-large red"  onclick="unhide(this, 'wscpop') " value="unhide">
            <i class="large material-icons">mode_edit</i>
        </a>
    </div>
    
    <nav class="nav-extended footer">
        <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Logo</a>
            <ul class="right hide-on-med-and-down">
                <li><a>A link</a></li>
                <li><a>A second link</a></li>
                <li><a>A third link</a></li>
            </ul>
        </div>
    </nav>



    <!-- Optional JavaScript -->

    <script>
        var easing = anime({
        targets: '#easing .el',
        translateX: 250,
        easing: 'easeInOutQuart'
        });
    </script>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            var instances = M.FloatingActionButton.init(elems, {
            hoverEnabled: false
            });
        });
    </script>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, options);
        });
    </script>
    
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems, options);
        });
    </script>
    <script type="text/javascript">
        function unhide(clickedButton, divID) {
        var item = document.getElementById(divID);
        if (item) {
            if(item.className=='hideme'){
                item.className = 'unhideme' ;
                clickedButton.value = 'hide'
            }else{
                item.className = 'hideme';
                clickedButton.value = 'unhide'
            }
        }}
    </script>
    
    
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

  </body>
</html>






<!-- 2018.07.09 tabs html-->

/* Style the tab */
.tab {
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    position: fixed;
    bottom: 0;
    width: 100%;
}

/* Style the buttons inside the tab */
.tab button {
    background-color: inherit;
    float: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
    background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
    background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
} */

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">


    <title>WSC App</title>

    <style>
        body {font-family: 'Source Sans Pro', sans-serif;}
        
        /* Style the tab */
        .tab {
            overflow: hidden;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        
        /* Style the buttons inside the tab */
        .tab button {
            background-color: inherit;
            float: none;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 14px 16px;
            transition: 0.3s;
            font-size: 17px;
        }
        
        /* Change background color of buttons on hover */
        .tab button:hover {
            background-color: #ddd;
        }
        
        /* Create an active/current tablink class */
        .tab button.active {
            background-color: #ccc;
        }
        
        /* Style the tab content */
        .tabcontent {
            display: none;
            padding: 6px 12px;
            border: 1px solid #ccc;
            border-top: none;
        }
        </style>

  </head>
  <body>
    <h1>Hello, world!</h1>

    
    
    <div id="London" class="tabcontent">
    <h3>London</h3>
    <p>London is the capital city of England.</p>
    </div>
    
    <div id="Paris" class="tabcontent">
    <h3>Paris</h3>
    <p>Paris is the capital of France.</p> 
    </div>
    
    <div id="Tokyo" class="tabcontent">
    <h3>Tokyo</h3>
    <p>Tokyo is the capital of Japan.</p>
    </div>

    <!-- <div class="tab justify-content-center">
            <button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">London</button>
            <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
            <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
    </div> -->

    <ul class="nav tab justify-content-center">
        <li class="nav-item">
            <a class="nav-link tablinks active" href="#">Active</a>
        </li>
        <li class="nav-item">
            <a class="nav-link tablinks" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link tablinks" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link tablinks disabled" href="#">Disabled</a>
        </li>
    </ul>
    
    <script>
    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
    </script>
    

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
  </body>
</html>