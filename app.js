// Your tasks:
// PART 1
// 1. Create a function 'createImage' which receives 'imgPath' as an input.
// This function returns a promise which creates a new image (use
// document.createElement('img')) and sets the .src attribute to the
// provided image path
// 2. When the image is done loading, append it to the DOM element with the
// 'images' class, and resolve the promise. The fulfilled value should be the
// image element itself. In case there is an error loading the image (listen for
// the'error' event), reject the promise
// 3. If this part is too tricky for you, just watch the first part of the solution
// PART 2
// 4. Consume the promise using .then and also add an error handler
// 5. After the image has loaded, pause execution for 2 seconds using the 'wait'
// function we created earlier
// 6. After the 2 seconds have passed, hide the current image (set display CSS
// property to 'none'), and load a second image (Hint: Use the image element
// returned by the 'createImage' promise to hide the current image. You will
// need a global variable for that 😉)
// 7. After the second image has loaded, pause execution for 2 seconds


let img;

const createImage = (path) => {
    return new Promise((resolve,reject)=>{       
     img = document.createElement('img');
        img.src = path;

        img.addEventListener('load', ()=>{  
            imgContainer.appendChild(img);          
           resolve( img);           
        })  
        
        img.addEventListener('error', ()=>{
           reject(new Error(`The image failed to load!`)); 
        });
    });
};

const wait = (seconds) => {
    return new Promise ((resolve) =>{
        setTimeout(resolve, 1000 * seconds);
    });
}

createImage('img/img-1.jpg').then(img => { 
        console.log(`Image was loaded`);        
    return wait(2);
}).
then(()=>{
    console.log(`I waited 2 seconds`);
    img.style.display='none';
    return createImage('img/img-2.jpg')
 }).
 then(img => { 
    console.log(`The second image was loaded`);
    //img.style.display='block';
    return wait(2)
}).
then(() =>console.log(`I waited 2 more seconds!`)).
catch((err) => console.error(err))



