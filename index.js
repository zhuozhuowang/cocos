cc.game.onStart = function () {
  var MyScene = cc.Scene.extend({
    onEnter: function () {
      this._super()
      var size = cc.director.getWinSize()
      var label = cc.LabelTTF.create('Hello World', 'Arial', 40)
      label.setPosition(size.width / 2, size.height / 2)
      this.addChild(label, 1)
    }
  })
  cc.director.runScene(new MyScene())
}
cc.game.run('gameCanvas')
