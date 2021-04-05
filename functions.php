<?php

add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );

function enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}


/**
  * Set up My Child Theme's textdomain.
  *
  * Declare textdomain for this child theme.
  * Translations can be added to the /languages/ directory.
  */
  function twentyfifteenchild_theme_setup() {
    load_child_theme_textdomain( 'twentytwentyonechild', get_stylesheet_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'twentytwentyonechild_theme_setup' );

?>