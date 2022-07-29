/*
 * dynamically inject the sharing links after the title
 */

	$(document).ready(function() {

			var sharesites = [
                { img: "pinboard", name: "Pinboard", site: "pinboard"},
                { img: "ycombinator", name: "HackerNews", site: "hn"},
				{ img: "twitter", name: "Twitter", site: "twitter"},
				{ img: "facebook", name: "Facebook", site: "facebook"},
				{ img: "reddit", name: "Reddit", site: "reddit"}
			];
			
			var shareDiv = $("<td>");
			shareDiv.css("text-align", "right");
			for (var loop = 0; loop < sharesites.length; loop++) {
				var site = sharesites[loop];
                shareDiv.append($("<a>")
		                    .attr("href", "https://simpleshare.io/go?site=" + site.site + "&ga=UA-328425-1&url=" + encodeURIComponent(window.location) + "&text=" + encodeURIComponent(document.title))
		                    .attr("title", "Share on " + site.name)
							.css("padding-left", "12px")
							.append($("<img>")
								.attr("src", "https://www.vectorlogo.zone/logos/" + site.img + "/" + site.img + "-tile.svg")
								.css("height", "32px")
								.attr("alt", "Share on " + site.name)
					)
				);

			}

			var title = $("h1").first();
			var table = $("<table>").css("width", "100%");
			title.before(table);
			table.append($("<tr>")
						.append($("<td>").append(title))
						.append(shareDiv)
						);
	});
