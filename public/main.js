const navigation = document.getElementById('navigation-bar-container');
const nav_items = document.querySelectorAll('.list-item')
const about_container = document.querySelector('#about-container')
const products_container = document.querySelector('#products-container')
const space2 = document.querySelector('.space2')

const dropDown = () => {
    if(navigation.classList.contains('base')){
        navigation.classList.add('appear')
        navigation.classList.remove('base')
    }
    // nav items drop simultaneously
    nav_items.forEach((n,index)=>{
    setTimeout(()=>{
        n.classList.add('appear')
        n.classList.remove('base')
        },75*(index+1))
    })

}
const hideMe = () => {
    if(navigation.classList.contains('appear')){
        navigation.classList.remove('appear')
        navigation.classList.add('base')
    }
    // nav items drop simultaneously
    for(let x = nav_items.length-1; x>=0; x--){
        nav_items[x].classList.remove('appear')
        nav_items[x].classList.add('base')
    }
}

window.addEventListener('scroll',e=>{
    // get scroll position for Y
    let yPos = window.scrollY
    return (yPos > 0) ? dropDown() : hideMe()
})
// function for hiding the navigation bar
const iDoNotSelectNavigation = (e) => {
    return /space|hr|pre-bod-container/g.test(e.target.classList[0])||/profile-container/g.test(e.target.id)
}
window.addEventListener('click',e=>{
    // get scroll position for Y
    if(iDoNotSelectNavigation(e)){
        navigation.classList.add('base')
        navigation.classList.remove('appear')
    }
})
window.addEventListener('touchstart',e=>{
    // get scroll position for Y
    if(iDoNotSelectNavigation(e)){
        navigation.classList.add('base')
        navigation.classList.remove('appear')
    }
})

//click base
const clickBaseNav=()=>{
    if(navigation.classList.contains('base')){
        navigation.addEventListener('click',e=>{
            dropDown()
        })
    }

}
clickBaseNav()


// hide and appear content
const contentDrop = () => {
    if(about_container.classList.contains('hide-content')){
        about_container.classList.add('appear-content')
        about_container.classList.remove('hide-content')
    }

}

const contentHide = () => {
    if(about_container.classList.contains('appear-content')){
        about_container.classList.remove('appear-content')
        about_container.classList.add('hide-content')
    }
   
}
const contentDrop2Index = () => {
    if(products_container.classList.contains('hide-content-down')){
        products_container.classList.add('appear-content')
        products_container.classList.remove('hide-content-down')
    }

}
const contentHide2Index = () => {
    if(products_container.classList.contains('appear-content')){
        products_container.classList.remove('appear-content')
        products_container.classList.add('hide-content-down')
    }
   
}

// if the pathname includes "index", then execute event listener
if(/index|account/g.test(window.location.pathname)){
    window.addEventListener('scroll',e=>{
        let top = space2.getBoundingClientRect().y
        // get scroll position for Y
        let yPos = window.scrollY
    
        // if scroll Position is greater than, or equal to, .pre-bod-container's y-position(from bottom)
        // display top content
        // else
        // display bottom content
        if(yPos >= top){
            console.log('test passo n scroll')
            contentHide()
            contentDrop2Index()
        }
        else{
            contentDrop()
            contentHide2Index()
        }
    })
}

// figcaptions change color while hovering over figure image
const figLabelGlow = () => {
    let fig = document.querySelectorAll('figure')

    fig.forEach(f=>{
        f.addEventListener('mouseover',e=>{
            let figCap = e.currentTarget.children[1];
            figCap.style='background:#fff;color:indigo;transform:scale(.95);'
        })
    })
    fig.forEach(f=>{
        f.addEventListener('mouseout',e=>{
            let figCap = e.currentTarget.children[1];
            figCap.style='background:none;color:#000;'
        })
    })
    
}
figLabelGlow()