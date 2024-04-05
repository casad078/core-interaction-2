//mobile menu//

document.addEventListener('DOMContentLoaded', function() {
    const mobileIcon = document.getElementById('mobile-icon');
    const menu = document.querySelector('.menu');

    mobileIcon.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
    // Function to hide the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!menu.contains(target) && target !== mobileIcon) {
            menu.classList.remove('show');
        }
    });
});

//loading screen//
window.addEventListener('load', function() {
    var loadDiv = document.getElementById('load');
    loadDiv.style.display = 'none';
  });

//little guy talking//
document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.littleguy img');
    const bio = document.querySelector('.bio');
    
    image.addEventListener('click', function() {
        bio.style.display = 'block'; // Show the bio
        // Apply blur effect
        setTimeout(function() {
            bio.style.backdropFilter = 'blur(5px)';
        }, 50); // Delay for smoother transition
        // Hide the image
        image.style.display = 'none';
    });
    
    // Add event listener to hide the content when clicked
    bio.addEventListener('click', function() {
        bio.style.display = 'none';
        image.style.display = 'block'; // Show the image again
    });
});

  

//images// 
const images =
    [
    { 
        src: 'collections_images/img1.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['cards']
    },
    { 
        src: 'collections_images/img2.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img3.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['cards']

    },
    {   
        src: 'collections_images/img4.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img5.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img6.png',
        link: 'https://www.coolsymbol.top/', 
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img7.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img8.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img9.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img10.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img11.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img12.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['photograph']
    },
    {   
        src: 'collections_images/img13.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img14.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['prints']
    },
    {   
        src: 'collections_images/img15.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['postcard']
    },
    {   
        src: 'collections_images/img16.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['postcard']
    },
    {   
        src: 'collections_images/img17.png',
        link: 'https://www.coolsymbol.top/',
        'category' : ['postcard']
    },
    {   
        src: 'collections_images/img18.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/img19.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/img20.png',
        link: 'https://www.coolsymbol.top/', 
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img21.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['sticker']
    },
    {   
        src: 'collections_images/img22.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/img23.png',
        link: 'https://www.coolsymbol.top/', 
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/img24.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/img25.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/img26.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/img27.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['photograph']
    },
    {   
        src: 'collections_images/img28.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['photograph']
    },
    {   
        src: 'collections_images/img29.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['stickers']
    },
    {   
        src: 'collections_images/img30.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['gifts']
    },
    {   
        src: 'collections_images/img31.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['gifts']
    },
    {   
        src: 'collections_images/img32.png', 
        link: 'https://www.coolsymbol.top/',
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img33.png', 
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img34.png', 
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img35.png', 
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/img36.png', 
        'category' : ['gifts']
    },
    {   
        src: 'collections_images/img37.png', 
        'category' : ['photograph']
    },
    {   
        src: 'collections_images/img38.png', 
        'category' : ['stickers']
    },
    {   
        src: 'collections_images/img39.png', 
        'category' : ['gifts']
    },
    {   
        src: 'collections_images/img40.png',
        'category' : ['prints'] 
    },
    {   
        src: 'collections_images/img41.png', 
        'category' : ['photograph']
    },
    {   
        src: 'collections_images/img42.png', 
        'category' : ['gifts']
    },
    {   
        src: 'collections_images/img43.png',
        'category' : ['photograph'] 
    },
    {   
        src: 'collections_images/img44.png', 
        'category' : ['photograph']
    },
    {   
        src: 'collections_images/img45.png', 
        'category' : ['gifts']
    },
    {   
        src: 'collections_images/img46.png', 
        'category' : ['photograph']
    },
    {   
        src: 'collections_images/img47.png', 
        'category' : ['gifts']
    },
    {   
        src: 'collections_images/img48.png', 
        'category' : ['photograph']
    },
    {   
        src: 'collections_images/img49.png', 
        'category' : ['gifts']
    },
    {   
        src: 'collections_images/img50.png', 
        'category' : ['gifts']
    },
    {   
        src: 'collections_images/img51.png', 
        'category' : ['gifts']
    },
    {   
        src: 'collections_images/img52.png', 
        'category' : ['gifts']
    },
    {   
        src: 'collections_images/img53.png', 
        'category' : ['photograph']
    },
    {   
        src: 'collections_images/img54.png', 
        'category' : ['gifts']
    },
    {   
        src: 'collections_images/img55.png', 
        'category' : ['photograph']
    },
    {   
        src: 'collections_images/img56.png', 
        'category' : ['collaged']
    },
    ];

    function displayImages(images) {
        const container = document.getElementById('masonry');
        container.innerHTML = ''; // Clear previous images
      
        images.forEach(image => {
                const imgElement = document.createElement('a');
                imgElement.href = image.link;
                const img = document.createElement('img');
                img.src = image.src;
                imgElement.appendChild(img);
                container.appendChild(imgElement);

                if(image.category){
                    console.log(image.category.toString().replaceAll(',', ' '));
                    img.classList = image.category.toString().replaceAll(',', ' ')
                }
                
        });

        
    }

    displayImages(images);


    function togglePostcards(){
        document.querySelectorAll('#masonry img').forEach(el => {
            el.classList.toggle('hide')
        })
        console.log(document.querySelectorAll('.postcard'))
        document.querySelectorAll('.postcard').forEach(el => {
            el.classList.toggle('hide')
        })

        document.querySelector('.postcard').classList.toggle('color-changed');
    }

    function toggleCards(){
        document.querySelectorAll('#masonry img').forEach(el => {
            el.classList.toggle('hide')
        })
        console.log(document.querySelectorAll('.cards'))
        document.querySelectorAll('.cards').forEach(el => {
            el.classList.toggle('hide')
        })
    
        document.querySelector('.cards').classList.toggle('color-changed');
    }

    function togglePhotograph(){
        document.querySelectorAll('#masonry img').forEach(el => {
            el.classList.toggle('hide')
        })
        console.log(document.querySelectorAll('.photograph'))
        document.querySelectorAll('.photograph').forEach(el => {
            el.classList.toggle('hide')
        })

        document.querySelector('.photograph').classList.toggle('color-changed');
    }

    function togglePrints(){
        document.querySelectorAll('#masonry img').forEach(el => {
            el.classList.toggle('hide')
        })
        console.log(document.querySelectorAll('.prints'))
        document.querySelectorAll('.prints').forEach(el => {
            el.classList.toggle('hide')
        })

        document.querySelector('.prints').classList.toggle('color-changed');
    }

    function toggleCollaged(){
        document.querySelectorAll('#masonry img').forEach(el => {
            el.classList.toggle('hide')
        })
        console.log(document.querySelectorAll('.collaged'))
        document.querySelectorAll('.collaged').forEach(el => {
            el.classList.toggle('hide')
        })

        document.querySelector('.collaged').classList.toggle('color-changed');
    }

    function toggleStickers(){
        document.querySelectorAll('#masonry img').forEach(el => {
            el.classList.toggle('hide')
        })
        console.log(document.querySelectorAll('.stickers'))
        document.querySelectorAll('.stickers').forEach(el => {
            el.classList.toggle('hide')
        })

        document.querySelector('.stickers').classList.toggle('color-changed');
    }

    function toggleGifts(){
        document.querySelectorAll('#masonry img').forEach(el => {
            el.classList.toggle('hide')
        })
        console.log(document.querySelectorAll('.gifts'))
        document.querySelectorAll('.gifts').forEach(el => {
            el.classList.toggle('hide')
        })

        document.querySelector('.gifts').classList.toggle('color-changed');
    }