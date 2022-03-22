//if the div class is author when the user clic the element this change to .author-active
//else this change .autor class (hide the element)
function ShowHideAttribution(){
    let authorState = document.querySelector('#author');
    authorState.className = authorState.className === "author" ? "author-active" : "author"; 
}