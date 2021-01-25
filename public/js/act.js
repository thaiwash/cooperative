class Act {
	constructor() {
		console.log("act")
		this.actions = []
	}
	
	registerAction(x, y, width, height, func) {
		this.actions.push({"box": { "pos": [x, y], "size": [width, height]}, "func": func})
	}
	
	act(x, y) {
		for (var i = 0; i < this.actions.length; i ++) {			
			if (this.within([x,y], this.actions[i].box)) {
				this.actions[i].func()
			}
		}
	}
	
	within(pos, box) {
		if( box.pos[0] <= pos[0] 
		 && pos[0] <= box.pos[0]+box.size[0] 
		 && box.pos[1] <= pos[1] 
		 && pos[1] <= box.pos[1]+box.size[1]) {
			return true
    	}
	}
}