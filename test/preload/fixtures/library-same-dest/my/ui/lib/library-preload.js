sap.ui.require.preload({
	"my/ui/lib/library.js": "jQuery.sap.require(\"sap.ui.core.library\"),jQuery.sap.declare(\"my.ui.lib.library\"),sap.ui.getCore().initLibrary({name:\"my.ui.lib\",version:\"0.0.0\",dependencies:[\"sap.ui.core\"]});",
	"my/ui/lib/myJS.js": "/* © */\n\"use strict\";function myFunction(n,o){return n+o}/**\n* This is a copyright comment\n*/\n/* (c) */\n/* released under */\n/* license */\nconsole.log(\"myJS\");",
	"my/ui/lib/my.view.xml": "<my>XML</my>\n",
	"my/ui/lib/myHtmlPre.view.xml": "<my>XML</my>\n<!-- A comment in XML is the same as in HTML -->\n<html:pre>   </html:pre>",
	"my/ui/lib/foo.properties": "FOO=BAR\n"
}, "my/ui/lib/library-preload");