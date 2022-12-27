
document.addEventListener('click', function(e){
    if (e.target.id === "submit-btn"){
        handleSubmitBtn()
    }

    if (e.target.dataset.code){
        handleCopyTextToClipBoard(e.target.dataset.code)
    }
})

function handleSubmitBtn(){
    const colorHexCode = document.getElementById('color-picker').value.slice(1)
    const schemeMode = document.getElementById('scheme-mode').value

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHexCode}&mode=${schemeMode}&count=5`)
        .then(res => res.json())
        .then(data => {
            let html = ""
            data.colors.forEach((color, index) => {
                html += `
                <section class="main-color">
                    <div class="color" style="background-color:${color.hex.value};"></div>
                    <div class="color-code">
                        <p data-code="color-${index+1}" id="color-${index+1}">${color.hex.value}</p>
                    </div>
                </section>
                `
            });
            document.getElementById('main-container').innerHTML = html  
        })
}

function handleCopyTextToClipBoard(id){
    let text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied the text: " + text)
      },() => {
        console.error('Failed to copy');
    });
}

