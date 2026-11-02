<?php
/**
 * Header product featured.
 *
 * @package          Flatsome/WooCommerce/Templates
 * @flatsome-version 3.16.0
 */

?>
<div class="shop-page-title product-page-title dark  featured-title page-title <?php flatsome_header_title_classes() ?>">
	<div class="div_top_1"></div>
	
	<div class="page-title-bg fill">
		<div class="title-bg fill bg-fill" data-parallax-fade="true" data-parallax="-2" data-parallax-background data-parallax-container=".page-title"></div>
		<div class="title-overlay fill"></div>
	</div>

	<div class="page-title-inner flex-row container medium-flex-wrap flex-has-center">
	  <div class="flex-col">
	 	 &nbsp;
	  </div>
	  <div class="flex-col flex-center text-center">
			<h2 class="lead"><?php the_title(); ?></h2>
			<div class="shape_1"></div>
			<div class="gap-element clearfix" style="display:block; height:auto; padding-top: 30px;"></div>
			<?php do_action('flatsome_product_title') ;?>
	  </div>
	  <div class="flex-col flex-right nav-right text-right medium-text-center">
	  	  	 <?php do_action('flatsome_product_title_tools') ;?>
	  </div>
	</div>
	<div class="div_bot_1"></div>
</div>

