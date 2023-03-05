function toggleMode(){
    const html = document.documentElement

    // if (html.classlist.contains('light')){
    //     html.classList.remove('light')
    // } else {
    //     html.classlist.add('light')
    // }

    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/hellokitty-icon.png')
    } else{
        img.setAttribute('src', './assets/6459-pixel-kuromi.png')
    }
}