//Pixi canvas importeren
import * as PIXI from 'pixi.js'

//Afbeeldingen importeren
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"

// create a pixi canvas
const pixi = new PIXI.Application({ width: 900, height: 500, backgroundColor: 0xF0F0F0 })
document.body.appendChild(pixi.view)

// preload all our textures
const loader = new PIXI.Loader()
loader.add('fishTexture', fishImage)
      .add('bubbleTexture', bubbleImage)
loader.load(()=>loadCompleted())

let fish : PIXI.Sprite
let secondFish : PIXI.Sprite

// after loading is complete, create a fish sprite
function loadCompleted() {

    console.log("alle plaatjes zijn geladen")

    for(let i = 1; i <= 4; i++){
    fish = new PIXI.Sprite(loader.resources["fishTexture"].texture!)
    fish.x = 100 * Math.random();
    fish.y = 400 * Math.random();
    fish.tint = Math.random() * 0xFFFFFF
    pixi.stage.addChild(fish)
    }

    secondFish = new PIXI.Sprite(loader.resources["fishTexture"].texture!)
    secondFish.x = 400;
    secondFish.y = 100;
    pixi.stage.addChild(secondFish)

    let myfilter = new PIXI.filters.ColorMatrixFilter()
    secondFish.filters = [myfilter]
    myfilter.hue(Math.random()*360, false) // HUE filter

    let basicText = new PIXI.Text(`Score: 0 Lives: 3`)
    basicText.x = 50
    basicText.y = 100
    pixi.stage.addChild(basicText)

    let graphics = new PIXI.Graphics()
    graphics.beginFill(0xDE3249)
    graphics.drawRect(600, 200, 60, 20)
    graphics.endFill()

pixi.stage.addChild(graphics)

    pixi.ticker.add((delta) => update(delta))
}

function update(delta:number) {

    fish.x += 0.05 * delta;
    secondFish.x += 0.05 * delta;
    secondFish.y += 0.08 * delta;
}