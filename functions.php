<?php

add_action( 'wp_enqueue_scripts', 's3willia_enqueue_scripts' );

if ( ! function_exists( 's3willia_enqueue_scripts' ) ) :

/**
* Add theme styles and scripts here
*/
function s3willia_enqueue_scripts() {

	if ( ! is_admin() ) {
		wp_enqueue_style(
			's3willia-style',
			get_bloginfo( 'stylesheet_url' )
		);
	}

}

endif; // s3willia_enqueue_scripts

add_action( 'after_setup_theme', 's3willia_setup' );

if ( ! function_exists( 's3willia_setup' ) ) :

/**
* Set up your theme here
*/
function s3willia_setup() {
	add_theme_support( 'post-thumbnails' );
}

endif; // s3willia_setup
