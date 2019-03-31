<template>
   	<div>
    	<div id="home" class="header">
 			<div class="header-top">
 				<div class="container">
 					<div class="head-nav">
 						<div class="logo">
 							<a href="index.html"><h1>Jolly<span>Games</span></h1></a>
 						</div>
 						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
 						<div class="clearfix"></div>
 						<span class="menu"></span>
 						<div class="top-menu">
 							<ul>
 							<router-link tag="li" to="/home" class="active"><a class="color1" href="javascript:;" >Home</a></router-link>
							<router-link tag="li" to="/about"><a class="color2" href="javascript:;" >About</a></router-link>
							<router-link tag="li" to="/contact"><a class="color2" href="javascript:;" >Contact</a></router-link>
							<router-link tag="li" to="/gallery"><a class="color2" href="javascript:;" >Gallery</a></router-link>
							<router-link tag="li" to="/about"><a class="color2" href="javascript:;" >About</a></router-link>
							<router-link tag="li" to="/about"><a class="color2" href="javascript:;" >About</a></router-link>
							
						
 						 		<div class="clearfix"></div>  
 							</ul>
 						</div>
 				</div>
 			</div>
 		</div>
		<!-- banner-bottom -->
 		<div class="banner">

 			<!-- //End-slider-script -->
 				<div  id="top" class="callbacks_container">
 					<ul class="rslides" id="slider3">
 						<li>
 							<img class="img-responsive" src="../assets/images/1.jpg" alt="">
 						</li>
 						<li>
 						<img class="img-responsive" src="../assets/images/2.jpg" alt="">
 						</li>
 						<li>
 						<img class="img-responsive" src="../assets/images/1.jpg" alt="">
 						</li>
 					</ul>
 				</div>
 			</div>
 		</div>
			
 	</div> 
	
 </template>

<script>
import '../assets/js/jquery-1.11.1.min.js';
import '../assets/js/responsiveslides.min.js';
export default {
	mounted(){
		$( "span.menu" ).click(function() {
			$( ".top-menu" ).slideToggle( "slow", function() {
				// Animation complete.
			});
		});
			// Slideshow 4
		$("#slider3").responsiveSlides({
			auto: true,
			pager:true,
			nav:false,
			speed: 500,
			namespace: "callbacks",
			before: function () {
				$('.events').append("<li>before event fired.</li>");
			},
			after: function () {
				$('.events').append("<li>after event fired.</li>");
			}
		});
		
	}
}
</script>


<style>






.header-top {
  background: #fff;
}
.head-nav p {
  text-align: center;
  text-transform: uppercase;
  font-size: 1em;
  padding: 1em 0;
  color: #888;
    display: none;
}
a:hover{
 text-decoration:none;
}

</style>



