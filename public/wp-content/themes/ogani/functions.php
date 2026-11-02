<?php
function prefix_add_footer_styles() {
	// wp_enqueue_style('base', get_stylesheet_directory_uri() . '/base.css', array(), '4.0.0', 'all');
    // wp_enqueue_style('nk', get_stylesheet_directory_uri() . '/css.css', array(), '4.0.0', 'all');
};
add_action( 'get_footer', 'prefix_add_footer_styles' );


function hook_css() {
echo  "<link rel='stylesheet' id='FontAwesome' href='". get_stylesheet_directory_uri() . "/css/FontAwesome.Pro.6.4.0/css/all.min.css' type='text/css' media='all' />";
echo  "<link rel='stylesheet' id='NkCss' href='". get_stylesheet_directory_uri() . "/css.css?v=". time() ."' type='text/css' media='all' />";

}
add_action('wp_head', 'hook_css',99999);

function wc_custom_get_price_html( $price, $product ) {
    if ( $product->get_price() == 0 ) {
        if ( $product->is_on_sale() && $product->get_regular_price() ) {
            $regular_price = wc_get_price_to_display( $product, array( 'qty' => 1, 'price' => $product->get_regular_price() ) );
            $price = wc_format_price_range( $regular_price, __( 'Free!', 'woocommerce' ) );
        } else {
            $price = '<span class="amount red">' . __( 'Liên hệ', 'woocommerce' ) . '</span>';
        }
    }
    return $price;
}
add_filter( 'woocommerce_get_price_html', 'wc_custom_get_price_html', 10, 2 );

function thumb($size = 'thumbnail',$var = null) {
if ($ID !=null )
{
$postid = $ID;
}
else
{
  $postid = get_the_ID();
}
$src = wp_get_attachment_image_src( get_post_thumbnail_id($postid), $size, false, '' );
 $img = $src[0];
if ($img == '')
{

 $args = array(
   'post_type' => 'attachment',
   'numberposts' => -1,
   'post_status' => null,
   'orderby' => 'menu_order',
   'order' => 'DESC',
   'post_parent' => $postid
  );

  $attachments = get_posts( $args );
     if ( $attachments ) 
	 {
		$i=0;
        foreach ( $attachments as $attachment ) 
		{
		$i++;
		$image_attributes = wp_get_attachment_image_src( $attachment->ID ,'full' );
		if ( $i==1){ $img = $image_attributes[0];}
		}
	}
	
	if ($img == '')
		{
			global $post, $posts;
			$first_img = '';
			ob_start();
			ob_end_clean();
			$output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
			if($matches[1][0])
			{
			$img = get_bloginfo('template_url')."/thumb.php?src=".$matches[1][0]."&amp;w=".$width."&amp;h=".$height."&amp;zc=1&amp;q=90";
			}
				 
			
		}
}

	if($var)
	{
		return $img;
	}
	else
	{
	echo $img;
	}
}



# Limit Post
function tj_content_limit($max_char, $more_link_text = '', $stripteaser = 0, $more_file = '') {
    $content = get_the_content($more_link_text, $stripteaser, $more_file);
    $content = apply_filters('the_content', $content);
    $content = str_replace(']]>', ']]&gt;', $content);
    $content = strip_tags($content);

   if (strlen($_GET['p']) > 0) {
      echo "";
      echo $content;
      echo "...";
   }
   else if ((strlen($content)>$max_char) && ($espacio = strpos($content, " ", $max_char ))) {
        $content = substr($content, 0, $espacio);
        $content = $content;
        echo "";
        echo $content;
        echo "...";
   }
   else {
      echo "";
      echo $content;
   }
}

function sliderproduct_func($attr){
 
    $args = shortcode_atts( array(
            'id' => '',
        ), $attr );
ob_start();
?> 

<div class="slider-wrapper relative" id="slider-538958912" >
    <div class="slider slider-nav-simple slider-nav-large slider-nav-dark slider-nav-outside slider-style-focus"
        data-flickity-options='{
            "cellAlign": "center",
            "imagesLoaded": true,
            "lazyLoad": 1,
            "freeScroll": false,
            "wrapAround": true,
            "autoPlay": 6000,
            "pauseAutoPlayOnHover" : true,
            "prevNextButtons": true,
            "contain" : true,
            "adaptiveHeight" : true,
            "dragThreshold" : 10,
            "percentPosition": true,
            "pageDots": false,
            "rightToLeft": false,
            "draggable": true,
            "selectedAttraction": 0.1,
            "parallax" : 0,
            "friction": 0.6        }'
        >
		
<?php
    $args = array('post_type' => 'product',
		'showposts' => 12,
/*         'tax_query' => array(
            array(
                'taxonomy' => 'product_group',
                'field' => 'slug',
                'terms' => 'khuyen-mai',
            ),
        ), */
     );
     $loop = new WP_Query($args);
        while($loop->have_posts()) : $loop->the_post();
			 $src = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'shop_catalog', false, '' );
?> 
                           
        
	<section class="section text-center" id="section_170548062">
		<div class="bg section-bg fill bg-fill  bg-loaded" >

			
			
			

		</div>

		<div class="section-content relative">
			
	<div class="img has-hover x md-x lg-x y md-y lg-y" id="image_658842056">
								<div class="img-inner dark" >
			<img width="696" height="696" src="<?php echo $src[0];?>" class="attachment-large size-large" alt="" loading="lazy" />						
					</div>
	</div>
	
	<div id="gap-16178322" class="gap-element clearfix" style="display:block; height:auto;">
	
	</div>
	
<a class="button primary"  href="<?php the_permalink(); ?>" style="border-radius:99px;padding:0px 50px 0px 50px;">
    <span>SHOP</span>
  </a>

		</div>

		

	</section>
<?php
        endwhile;
wp_reset_query();
?>		

     </div>

     <div class="loading-spin dark large centered"></div>

<style>
#image_658842056 {
  width: 100%;
}
#gap-16178322 {
  padding-top: 20px;
}
#section_170548062 {
  padding-top: 30px;
  padding-bottom: 30px;
}
  #slider-538958912 .flickity-slider > * { max-width: 33.33% !important; }
  @media only screen and (max-width: 48em) { 
   #slider-538958912 .flickity-slider > * { max-width: 100% !important; }
  }
</style>
</div>

<?php
     return ob_get_clean();
}
 
add_shortcode( 'sliderproduct' , 'sliderproduct_func' );

function price($ID)
{
	if(get_post_meta( $ID, '_sale_price', true))
	{
	$price = get_post_meta( $ID, '_sale_price', true);	
	}
	else
	{
	$price = get_post_meta( $ID, '_regular_price', true);
	}
	return number_format(doubleval($price),0,',', ',');
}


add_filter('woocommerce_get_price_html', 'custom_price_html', 10, 2);
function custom_price_html($price, $product) {
    $custom_div = '<span class="stars_info"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>';
    return $price . $custom_div;
}
