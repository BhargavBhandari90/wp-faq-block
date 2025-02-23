<?php
/**
 * Plugin Name:       WP FAQ Block
 * Description:       Example block scaffolded with Create Block tool.
 * Author:            BuntyWP
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-faq-block
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! defined( 'WPFAQ_VERSION' ) ) {
	/**
	 * The version of the plugin.
	 */
	define( 'WPFAQ_VERSION', '0.1.0' );
}

if ( ! defined( 'BPRPA_PATH' ) ) {
	/**
	 *  The server file system path to the plugin directory.
	 */
	define( 'BPRPA_PATH', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'BPRPA_URL' ) ) {
	/**
	 * The url to the plugin directory.
	 */
	define( 'BPRPA_URL', plugin_dir_url( __FILE__ ) );
}

if ( ! defined( 'BPRPA_BASE_NAME' ) ) {
	/**
	 * The url to the plugin directory.
	 */
	define( 'BPRPA_BASE_NAME', plugin_basename( __FILE__ ) );
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_wp_faq_block_block_init() {
	register_block_type( __DIR__ . '/build/wp-faq-block' );
}
add_action( 'init', 'create_block_wp_faq_block_block_init' );

function create_block_wp_faq_clock_scripts() {
	wp_enqueue_style( 'wp-faq-clock', BPRPA_URL . 'assets/css/block.css' );
}

add_action( 'wp_enqueue_scripts', 'create_block_wp_faq_clock_scripts' );
// add_action( 'enqueue_block_editor_assets', 'create_block_wp_faq_clock_scripts' );
