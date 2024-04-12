# svgIcons
Simple javascript function that draws svg icon by referencing an Id and classname to a &lt;DIV> tag

svgIcons Ver 1.0

Simple javascript function that draws icon by referencing an Id and classname to a <DIV> tag.
The function reads svg icon info from svg file and set size and color as indicated in Id in <DIV> tag.

For example, below HTML code will produce Instagram Icon with 30px size in '1F618D' color.

<div id="icon_instagram__30px__1F618D" class="icon_svg"></div>
 
'__' is a seperator,
First part is Id of svg icon in svg file,
Second part is the size,
Third part is the color in Hex code WITHOUT '#' as it is not allowed to use in Id in HTML.

Remarks: If icon needs to be repeated in on HTML file, since same Id can't be used in multiple DIV tags,
		     Id name can be distinguished by adding '__' and with numbers or any other letters.
   			 Also, classname should always be 'icon_svg' in order for this function to work.


Function usage instructions:

@param {*} iconURL : Required -> Location of the .svg file.

@param {*} color   : Optional -> General icon color. If icon specific color is not defined from icon Id,
 	        					 this color will be used, if not specified, 'black' color will be applied by default.
   				      		 Any method that can be read from css could be used for this input.
 						         eg. 'Red', '#17202A', 'rgb(255, 99, 71)'
