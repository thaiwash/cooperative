
class Operate extends Interact {
	constructor() {
		super()
		console.log("operation")

		this.spawnCanvas()
		this.flush()
		this.multiplayerBox()
		this.actionButtons()
		this.mouseController()
	}
	
	windowSize() {
		var win = window
		var doc = document
		var docElem = doc.documentElement
		var body = doc.getElementsByTagName('body')[0]
		var width = win.innerWidth || docElem.clientWidth || body.clientWidth
		var height = win.innerHeight|| docElem.clientHeight|| body.clientHeight

		return [width, height]
	}
	
	spawnCanvas() {
		this.canvas = document.createElement('canvas')
		this.ctx = this.canvas.getContext("2d");
		
	
		var WindowSize = this.windowSize()
		var size = Math.min(WindowSize[0],WindowSize[1])
		size = size * 0.9
		
		this.boxSize = size
		
		this.canvas.width = size
		this.canvas.height = size

		this.canvas.style.border = "1px solid #000000"

		var marginal = ((Math.min(WindowSize[0],WindowSize[1]) - size) * 0.5)
		this.canvas.style.position = "absolute"
		this.canvas.style.top = marginal + "px"
		this.canvas.style.left = ((WindowSize[0]/2) - (size/2)) + "px"

		document.body.appendChild(this.canvas)
		
	}
	
	flush() {
		this.ctx.beginPath()
		this.ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
		
		this.ctx.fillRect(0,0, this.boxSize, this.boxSize)
		
		this.ctx.stroke()
	}
	
	multiplayerBox() {
		this.ctx.beginPath()
		this.ctx.strokeStyle = "black"
		
		var multiplayerBoxSize = (this.boxSize*0.4)
		
		var dimensions = [
			this.boxSize - multiplayerBoxSize,
			this.boxSize - multiplayerBoxSize,
			multiplayerBoxSize,
			multiplayerBoxSize
		]
		
		this.ctx.rect(
			dimensions[0],
			dimensions[1], 
			dimensions[2], 
			dimensions[3]
		)
		
		this.ctx.stroke()
		
	}
	
}
