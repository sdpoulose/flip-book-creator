let pathName;

const fileSelector = document.getElementById('file-selector');

fileSelector.addEventListener('change', (event) => {            
    const fileList = event.target.files;
    pathName = fileList[0].path;
    console.log(pathName);   
}); 




function createFlipBook() {
    console.log(pathName);
}