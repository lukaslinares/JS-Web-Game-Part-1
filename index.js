//function newImage
function newImage (url, left, bottom){
let item = document.createElement('img')
item.src = url
item.style.position = 'fixed'
item.style.left = left + 'px'
item.style.bottom = bottom + 'px' 
document.body.append(item)
return item
}

//  function newItem
function newItem(url, left, bottom){
let item = newImage(url, left, bottom)

item.addEventListener('dblclick', () => {
    item.remove()
})
}

//function background
function background(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

//background
background('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)
background('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)

//pictures
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 320, 70)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//items
newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

// Pine Tree
// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)//

//item pickUp
// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)
// sword.addEventListener('click', function(){
//     sword.remove()
// })