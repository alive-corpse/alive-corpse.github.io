/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
    config.extraPlugins = 'markdown';
	config.language = 'ru';
	// config.uiColor = '#AADC6E';
    config.toolbar = [
            { name: 'document', items : [ 'Source','Markdown','-','Maximize','ShowBlocks','Preview','-','Templates' ] },
            { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','-','SelectAll','-','Undo','Redo' ] },
            { name: 'editing', items : [ 'Find','Replace','-'] },
        '/',
            { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
            { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl'] },
            { name: 'links', items : [ 'Link','Unlink','Anchor','SimpleLink'] },
            { name: 'insert', items : [ 'Image','HorizontalRule','SpecialChar','CodeSnippet'] },
        '/',
            { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
            { name: 'colors', items : [ 'TextColor','BGColor' ] },
    ];
};
