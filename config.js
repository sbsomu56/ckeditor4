/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	
	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'dialogui,dialog,about,basicstyles,blockquote,notification,button,toolbar,clipboard,resize,enterkey,entities,floatingspace,panel,floatpanel,listblock,richcombo,format,horizontalrule,wysiwygarea,indent,indentlist,fakeobjects,link,list,maximize,removeformat,sourcearea,table,undo,codeTag,imgur,eqneditor';
	config.skin = 'moono-lisa';
	// %REMOVE_END%

	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};
