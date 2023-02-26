import {Module} from '../core/module'
import {getRandomColor} from '../core/functions'
import MY_IMAGE from '../../assets/bur.png'

export class TestModule extends Module {

    trigger() {
        const img = document.createElement('img')
        img.className ='img'
        img.src = MY_IMAGE
        document.body.append(img)

        console.log('trigger is working')
        const audio = new Audio('../assets/buratino.mp3');
        audio.play();

        const myInterval = setInterval( function(){
            document.body.style.background = getRandomColor()

        }, 200);

        function myStopFunction() {

            clearInterval(myInterval)
            document.body.style.background = 'white';
            img.remove()

        }
        setTimeout( () =>{myStopFunction() }, 10000)




    }

}