/**
 * svgIcons Ver 1.0
 * 
 * Simple javascript function that draws icon by referencing an Id and classname to a <DIV> tag.
 * The function reads svg icon info from svg file and set size and color as indicated in Id in <DIV> tag.
 * 
 * For example, below HTML code will produce Instagram Icon with 30px size in '1F618D' color.
 * 
 * <div id="icon_instagram__30px__1F618D" class="icon_svg"></div>
 * 
 * '__' is a seperator,
 * First part is Id of svg icon in svg file,
 * Second part is the size,
 * Third part is the color in Hex code WITHOUT '#' as it is not allowed to use in Id in HTML.
 * 
 * Remarks: If icon needs to be repeated in on HTML file, since same Id can't be used in multiple DIV tags,
 * 			Id name can be distinguished by adding '__' and with numbers or any other letters.
 * 			Also, classname should always be 'icon_svg' in order for this function to work.
 * 
 * 
 * Function usage instructions:
 *  
 * @param {*} iconURL : Required -> Location of the .svg file.
 * 
 * @param {*} color   : Optional -> General icon color. If icon specific color is not defined from icon Id,
 * 						this color will be used, if not specified, 'black' color will be applied by default.
 * 						Any method that can be read from css could be used for this input.
 * 						eg. 'Red', '#17202A', 'rgb(255, 99, 71)'
 * 
 */

function svgIcons(iconURL,color) {
	// Search for div with 'icon_svg' classname.
	let icons = document.querySelectorAll('div.icon_svg');
	let iconColor;
	color = (!color) ? 'black' : color;

	icons.forEach(function(icon) {
		// Seperate icon Id and size from div Id name
		let parts = icon.id.split('__');
		if (parts.length >= 2) {
			let iconId = parts[0]; // (eg. icon_instagram)
			let iconSize = parts[1]; // (eg. 30px)
			iconColor = parts[2]; // (Only Hex color code numbers WITHOUT '#')

			// Define css
			let style = `
				#${icon.id}{
					-webkit-mask: url(${iconURL}#${iconId}) no-repeat center;
					mask: url(${iconURL}#${iconId}) no-repeat center;
					height: ${iconSize};
					width: ${iconSize};
				}
			`;
			// Create <style> tag and apply style defined above
			let styleTag = document.createElement('style');
			if (styleTag.styleSheet) {
				styleTag.styleSheet.cssText = style; // for IE
			} else {
				styleTag.appendChild(document.createTextNode(style)); // For other browser
			}
			document.head.appendChild(styleTag); // Add <style> tag under <head> tag
		}

		// Check if iconColor is a valid Hex color code, and use it if true OR set general color
		icon.style.backgroundColor = (function(iconColor) {
			const regex = /^([0-9A-F]{3}){1,2}$/i;
			return regex.test(iconColor) ? '#' + iconColor : color;
		})(iconColor);
	});
}
