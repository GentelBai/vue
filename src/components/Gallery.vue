<template>
    
<div class="app-gallery">
    	<div class="gallery">
		<div class="container">
		         <h3>Gallery</h3>
			<div class="portfolio-bottom">
				<div class="gallery-one">
					<div class="col-md-4 gallery-left">
						<a href="images/l1.jpg" class=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="../assets/images/l1.jpg" alt="" class="img-responsive zoom-img"/>
						</a>
					</div>
					<div class="col-md-4 gallery-left">
						<a href="images/l2.jpg" class=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="../assets/images/l2.jpg" alt="" class="img-responsive zoom-img"/>
						</a>
					</div>
					<div class="col-md-4 gallery-left">
						<a href="images/l4.jpg" class=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="../assets/images/l4.jpg" alt="" class="img-responsive zoom-img"/>
						</a>
					</div>
					<div class="col-md-4 gallery-left">
						<a href="images/l3.jpg" class=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="../assets/images/l3.jpg" alt="" class="img-responsive zoom-img"/>
						</a>
					</div>
					<div class="col-md-4 gallery-left">
						<a href="images/l5.jpg" class=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="../assets/images/l5.jpg" alt="" class="img-responsive zoom-img"/>
						</a>
					</div>
					<div class="col-md-4 gallery-left">
						<a href="images/l6.jpg" class=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="../assets/images/l6.jpg" alt="" class="img-responsive zoom-img"/>
						</a>
					</div>
					<div class="col-md-4 gallery-left">
						<a href="images/l9.jpg" class=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="../assets/images/l9.jpg" alt="" class="img-responsive zoom-img"/>
						</a>
					</div>
					<div class="col-md-4 gallery-left">
						<a href="images/l7.jpg" class=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="../assets/images/l7.jpg" alt="" class="img-responsive zoom-img"/>
						</a>
					</div>
					<div class="col-md-4 gallery-left">
						<a href="images/l8.jpg" class=" mask b-link-stripe b-animate-go   swipebox"  title="Image Title">
								<img src="../assets/images/l8.jpg" alt="" class="img-responsive zoom-img"/>
						</a>
					</div>
					<div class="clearfix"> </div>
				</div>
			</div>
		</div>
	</div>

</div>

</template>
<script>
import '../assets/js/jquery.swipebox.min.js';
import '../assets/css/swipebox.css';
export default{
	mounted(){
		jQuery(function($) {
		$(".swipebox").swipebox();
		});
}
}	
</script>