const evilbutton  =document .getElementById('evil-button')
 const OFFSET =100
evilbutton.addEventListener('click', () => 
{
alert('Nice Try')
window.close()
})

document.addEventListnrer('mousemove', (e) => {
    const x = e.pagex
    const y = e.pagey
    const ButtonBox = evilButton.getBoundingClientrect()
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width  )
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
    const horizontaloffset = buttonBox.width /2 + OFFSET
    const verticalloffset = buttonBox.height /2 + OFFSET
   if(Math.abs(horizontalDistanceFrom) <= horizontaloffset && Math.abs
   (verticalDistanceFrom) <=verticaloffset) {
setButtonPosition()
   }

})
 
function distanceFromCenter(boxPosition, mousePostion, boxSize){
    return boxPosition - mouseposition + boxSize /2 
}