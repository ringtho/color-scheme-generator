
document.getElementById('submit-btn').addEventListener('click', function(){
    const colorHexCode = document.getElementById('color-picker').value.slice(1)
    const schemeMode = document.getElementById('scheme-mode').value

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHexCode}&mode=${schemeMode}&count=5`)
        .then(res => res.json())
        .then(data => {
            let html = ""
            data.colors.forEach(color => {
                html += `
                <section class="main-color">
                    <div class="color" style="background-color:${color.hex.value};"></div>
                    <div class="color-code">
                        <p>${color.hex.value}</p>
                    </div>
                </section>
                `
            });
            document.getElementById('main-container').innerHTML = html  
        })
})




