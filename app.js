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
const body =  document.querySelector('body');
const img = document.createElement('img');

const createImage =(path)=>{
    return new Promise((resolve,reject)=>{       
            
        img.setAttribute('src', path);
        img.addEventListener('onload', ()=>{
            
           resolve( img);           
        })  
        
        img.addEventListener('error', ()=>{
           reject(new Error(`The image failed to load!`)); 
        })            

    })
}

createImage('./img/img-1.jpg').
then(body.appendChild(img)).
catch((err)=>console.log(err))