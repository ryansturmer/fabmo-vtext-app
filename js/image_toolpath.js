function getLowerLeftMostPoint(ps) {
	all_points = ps.getPoints();
	var xmin = all_points[0][0];
	var ymin = all_points[0][1];
	for(var i in all_points) {
		p = all_points[i];
		if(p[0] < xmin) {
			if(p[1] < ymin) {
				xmin = p[0];
				ymin = p[1];
			}
		}
	}
	return [xmin,ymin];
}

function getHighestPoint(ps) {
	all_points = ps.getPoints();
	var pmin = all_points[0];
	var vmin = ps.value(pmin[0],pmin[1]);
	for(var i in all_points) {
		p = all_points[i];
		if(ps.value(p[0],p[1]) < vmin) {
			min = p;
		}
	}
	return pmin;
}

function extractGlyphs(ps) {
	function destructiveSearch(ps, x, y, glyph) {
		if(glyph) {
			var glyph = glyph;
		} else {
			var glyph = new PointStore();
		}
		if(ps.has(x,y)) {
			px = ps.value(x,y);
			glyph.add(x,y,px);
			ps.remove(x,y);
			destructiveSearch(ps, x+0,y+1, glyph); //N
			destructiveSearch(ps, x+1,y+1,glyph); //NE
			destructiveSearch(ps, x+1,y+0, glyph); //E
			destructiveSearch(ps, x+1,y-1,glyph); //SE
			destructiveSearch(ps, x+0,y-1,glyph); //S
			destructiveSearch(ps, x-1,y-1,glyph); //SW
			destructiveSearch(ps, x-1,y+0,glyph); //W
			destructiveSearch(ps, x-1,y+1,glyph); //NW
		}
		return glyph;
	}

	glyphs = [];
	while(ps.size() > 0) {
		var starting_point = getLowerLeftMostPoint(ps);
		var x = starting_point[0];
		var y = starting_point[1];
		glyphs.push(destructiveSearch(ps, x,y));
	}
	return glyphs;
}

function glyphToPath(glyph) {
	// Visit memo, increment pixel values on each visit
	var memo = glyph.clone(0);
	// Unvisited set, remove pixels once visited
	var unvisited = glyph.clone();
	// Path stack for backtracking
	var pathstack = [];
	// Path which is ultimately returned
	var path = [];
	// True if we've passed a junction since we started walking the path
	var has_choices = false;

	function choices(x,y,v) {
		neighbors = [];
		if(memo.value(x+0,y+1) <= v) {neighbors.push([x+0,y+1]);}
		if(memo.value(x+1,y+1) <= v) {neighbors.push([x+1,y+1]);}
		if(memo.value(x+1,y+0) <= v) {neighbors.push([x+1,y+0]);}
		if(memo.value(x+1,y-1) <= v) {neighbors.push([x+1,y-1]);}
		if(memo.value(x+0,y-1) <= v) {neighbors.push([x+0,y-1]);}
		if(memo.value(x-1,y-1) <= v) {neighbors.push([x-1,y-1]);}
		if(memo.value(x-1,y+0) <= v) {neighbors.push([x-1,y+0]);}
		if(memo.value(x-1,y+1) <= v) {neighbors.push([x-1,y+1]);}
		return neighbors
	}

	function visit(x,y) {
		memo.increment(x,y);
		unvisited.remove(x,y);
		path.push([x,y]);
		return choices(x,y,0);
	}

	// Break out of this 
	while(unvisited.size() > 0) {
		// Start at the "highest" point (the one with the lowest pixel value)
		var loc = getHighestPoint(unvisited);
		// Initially, there's one and only one path to search
		has_choices = false;

		// We'll break out of this loop every time we pick the tool up or if we've visited everything
		while(unvisited.size() == 0) {
			// Visit the current location
			next_choices = visit(loc[0],loc[1]);

			// If the there are more than one paths to take, take the first one,
			// but make a note that there's choices left to explore
			if(next_choices.length > 1) {
				has_choices = true;
				pathstack.push(loc);
				loc = next_choices[0];
			} else if(next_choices.length == 1) {
				pathstack.push(loc);
				loc = next_choices[0];
			} else {
				// If there's still a place we can go that has unexplored choices,
				// we allow backtracking over our existing path to revisit them
				loc = has_choices ? pathstack.pop() : null;
			}

			// loc === null means we ran out of explorable branches, or we ran out of area to backtrack
			// either way, pick up the tool, and resume with any unexplored area that's left.
			if(loc == null) {
				path.push(null); // Marker in the output path to indicate that we're picking up the tool
				break;
			}
		}
	}
	return path;
}