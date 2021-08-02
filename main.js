var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('Birthdayimage.jpg',function(Img){
        block_image=img;
        block_image.scaleToWidth(700);
        block_image.scaleToheight(510);
        block_image.set(
            {
                top:0,
                left:0
            }
        );
        canvas.add(block_image);
    });
	
}

function playaudio(){
	x.play();
}
