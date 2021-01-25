class Interact extends Act {
	constructor() {
		super()
		console.log("interaction")
		
		this.mouseDown = false
		this.mousePos = [0,0]
		this.lastMousePos = [0,0]
		this.selected = 0
	}
	
	actionButtons() {
		var self = this
	
		this.imgPen = new Image(64, 64)
		this.imgTilde = new Image(64, 64)
		this.imgInfo = new Image(64, 64)

		this.imgPen.onload = function () {
			
			self.ctx.fillStyle = "rgba(255, 255, 255)"
			self.ctx.fillRect(10, 10, 32, 32)			
			self.ctx.stroke()
			
			self.ctx.drawImage(self.imgPen, 10, 10, 32, 32)
			
			self.ctx.fillStyle = "rgba(0, 0, 0)"
			self.ctx.rect(10, 10, 32, 32)
			self.ctx.stroke()
			

			self.registerAction(10, 10, 32, 32, function() {
								
				self.redraw()
				self.ctx.fillStyle = "rgba(255, 255, 0, 0.8)"
				self.ctx.fillRect(10, 10, 32, 32)			
				self.ctx.stroke()

				self.ctx.drawImage(self.imgPen, 10, 10, 32, 32)
				self.selected = 1
			})
		}
		
		this.imgTilde.onload = function () {

			self.ctx.fillStyle = "rgba(255, 255, 255)"
			self.ctx.fillRect(10+32, 10, 32, 32)	
			self.ctx.stroke()

			self.ctx.drawImage(this, 10 + 32, 10, 32, 32)

			self.ctx.fillStyle = "rgba(0, 0, 0)"
			self.ctx.rect(10 + 32, 10, 32, 32)
			self.ctx.stroke()

			self.registerAction(10+32, 10, 32, 32, function() {
				self.redraw()
				
				self.ctx.fillStyle = "rgba(255, 255, 0, 0.8)"
				self.ctx.fillRect(10+32, 10, 32, 32)			
				self.ctx.stroke()

				self.ctx.drawImage(self.imgTilde, 10+32, 10, 32, 32)

				self.selected = 2
			})
		}
		
		this.imgInfo.onload = function () {
			self.ctx.drawImage(self.imgInfo, 10 + 32 + 32, 10, 32, 32)
			self.ctx.rect(10 + 32 + 32, 10, 32, 32)			
			self.ctx.stroke()	
			self.ctx.stroke()
		}
		
		this.imgPen.src = "/img/icons8-ball-point-pen-64.png"
		this.imgTilde.src = "/img/icons8-text-cursor-64.png"
		this.imgInfo.src = "/img/icons8-information-64.png"
	}
	
	redraw() {
		var self = this
		self.ctx.fillStyle = "rgba(255, 255, 255, 1)"
		self.ctx.fillRect(10, 10, 32, 32)
		self.ctx.stroke()

		self.ctx.drawImage(this.imgPen, 10, 10, 32, 32)
		
		self.ctx.fillStyle = "rgba(0, 0, 0, 1)"
		self.ctx.rect(10, 10, 32, 32)
		self.ctx.stroke()

		// ---------------------------------------------

		self.ctx.fillStyle = "rgba(255, 255, 255, 1)"
		self.ctx.fillRect(10+32, 10, 32, 32)			
		self.ctx.stroke()
		
		self.ctx.drawImage(this.imgTilde, 10+32, 10, 32, 32)		

		self.ctx.fillStyle = "rgba(0, 0, 0, 1)"
		self.ctx.rect(10, 10, 32, 32)
		self.ctx.stroke()
	}
	
	
	drawLine() {
		if (this.mouseDown) { 
			this.ctx.beginPath()
			this.ctx.moveTo(this.lastMousePos[0], this.lastMousePos[1])
			this.ctx.lineTo(this.mousePos[0], this.mousePos[1])
			this.ctx.stroke()
		}
	}
	
	mouseController() {
		var self = this
		this.canvas.onmousemove = function(evt) {
			self.lastMousePos = self.mousePos
			self.mousePos = [evt.layerX, evt.layerY]
			
			if (self.selected == 1) {
				self.drawLine()
			}
			
			if (self.selected == 2) {
				self.drawText()
			}				
			self.drawLine()
		}
		
		this.canvas.onmousedown = function(evt) {
			self.act(evt.layerX, evt.layerY)
			self.mouseDown = true
		}
		
		this.canvas.onmouseup = function(evt) {
			self.mouseDown = false
		}
	}
}