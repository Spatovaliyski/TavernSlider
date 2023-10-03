/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './save/style.scss';

/**
 * Internal dependencies
 */

import { TavernBlock } from './editor/edit';
import TavernBlockSave from './save/save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
  title: 'Tavern',
  icon: 'shield',
  category: 'common',
  attributes: {
    address: {
      type: 'string',
      default: 'https://wptavern.com',
    },
    postsPerPage: {
      type: 'number',
      default: 5,
    },
    posts: {
      type: 'array',
      default: [],
    },
    postsAuthors: {
      type: 'array',
      default: [],
    },
    postsThumbnails: {
      type: 'array',
      default: [],
    },
    tavernPluginPaginationColor: {
      type: 'string',
      default: '#000',
    },
    showPostTitle: {
      type: 'boolean',
      default: true,
    },
    showPostDate: {
      type: 'boolean',
      default: true,
    },
    showPostAuthor: {
      type: 'boolean',
      default: true,
    },
    sliderSize: {
      type: 'select',
      default: "100%",
      options: [
        "100%",
        "960px",
        "540px",
        "480px",
      ]
    },
  },
  edit: TavernBlock,
  save: TavernBlockSave,
});