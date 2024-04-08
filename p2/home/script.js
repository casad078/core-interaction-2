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
        'category' : ['cards'],
        'back' : 'backs/img1b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "This card, positioned at the very top of my wall, acts as a parallel to my own wall; covered in art, frames, and people.",
        'artist' : "Chuchu Wang. @chuchuwang_art"
    },
    { 
        src: 'collections_images/img2.png', 
        'category' : ['cards'],
        'back' : 'backs/img2b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "I have been a collector of art buisness cards for about 2 or so years. It's a way to display a wide variety of art with limited space, something I was very interested in. And MoCCA had a lot of buisness cards.",
        'artist' : "Grace Kegel. @gess.wut"
    },
    {   
        src: 'collections_images/img3.png', 
        'category' : ['cards'],
        'back' : 'backs/img3b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "I love the color green. And it kinda looks like water. Slay.",
        'artist' : "Yuqi Liu. @yuqianita"

    },
    {   
        src: 'collections_images/img4.png', 
        'category' : ['cards'],
        'back' : 'backs/img4b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "SHROMPU, in a green frame, kinda like an old windows MSpaint canvas. Need I say more?",
        'artist' : "Alexander Laira. @alexanderlaird"
    },
    {   
        src: 'collections_images/img5.png', 
        'category' : ['cards'],
        'back' : 'backs/img5b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "I'm a big fan of the doodle style, and the bright saturated colors. Reminds me of the old Fancy Nancy books I used to read as a kid.",
        'artist' : "Chalzea Xu. @chalzea_art"
    },
    {   
        src: 'collections_images/img6.png',
        'category' : ['cards'],
        'back' : 'backs/img6b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "Cowboys. I have a plethora of Red Dead Redemption inspired things in my room, and this card adds to the aesthetic.",
        'artist' : "Marcos Santos. @mar_scribbles"
    },
    {   
        src: 'collections_images/img7.png', 
        'category' : ['cards'],
        'back' : 'backs/img7b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "Everyone stop. Go look at their website. Cry at how beautiful it is. Ok you can move on now.",
        'artist' : "Toma Vagner. tomavagner.com"
    },
    {   
        src: 'collections_images/img8.png', 
        'category' : ['cards'],
        'back' : '',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "Everyone stop. Go look at their website. Cry at how beautiful it is. Ok you can move on now.",
        'artist' : "Toma Vagner. tomavagner.com"
    },
    {   
        src: 'collections_images/img9.png', 
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img10.png', 
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img11.png', 
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img12.png', 
        'category' : ['photograph']
    },
    {   
        src: 'collections_images/img13.png',
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img14.png',
        'category' : ['prints']
    },
    {   
        src: 'collections_images/img15.png',
        'category' : ['postcard']
    },
    {   
        src: 'collections_images/img16.png',
        'category' : ['postcard']
    },
    {   
        src: 'collections_images/img17.png',
        'category' : ['postcard']
    },
    {   
        src: 'collections_images/img18.png',
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/img19.png',
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/img20.png',
        'category' : ['cards']
    },
    {   
        src: 'collections_images/img21.png',
        'category' : ['sticker']
    },
    {   
        src: 'collections_images/img22.png',
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/img23.png', 
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/img24.png',
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/img25.png',
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/img26.png',
        'category' : ['collaged']
    },
    {   
        src: 'collections_images/dmc2.png', 
        'category' : ['poster']
    },
    {   
        src: 'collections_images/img27.png', 
        'category' : ['photograph']
    },
    {   
        src: 'collections_images/img28.png', 
        'category' : ['photograph']
    },
    {   
        src: 'collections_images/img29.png', 
        'category' : ['stickers']
    },
    {   
        src: 'collections_images/img30.png', 
        'category' : ['gifts']
    },
    {   
        src: 'collections_images/img31.png', 
        'category' : ['gifts']
    },
    {   
        src: 'collections_images/img32.png', 
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
        src: 'collections_images/dmc1.png', 
        'category' : ['poster']
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
            // Create image element
            const img = document.createElement('img');
            img.src = image.src;
    
            // Append image to container
            container.appendChild(img);
    
            // Add categories as classes to the image
            if (image.category) {
                img.classList = image.category.toString().replaceAll(',', ' ');
            }
    
            // Add click event listener to each image
            img.addEventListener('click', function() {
                showModal(image);
            });
        });
    }
    
    function showModal(image) {
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('modalImage');
        const backImg = document.getElementById('backImage');
        const type = document.getElementById('type');
        const place = document.getElementById('place');
        const date = document.getElementById('date');
        const desc = document.getElementById('desc');
        const artist = document.getElementById('artist');
    
        modal.style.display = "block";
        backImg.src = image.back || ''; // If 'back' image is not available, display an empty string
        modalImg.src = image.src;
        type.textContent = image.type;
        place.textContent = image.place;
        date.textContent = image.date;
        desc.textContent = image.desc;
        artist.textContent = image.artist;
    
        // Close modal when close button is clicked
        const closeBtn = document.getElementsByClassName('close')[0];
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    
        // Close modal when clicking outside the modal content
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
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

    function togglePoster(){
        document.querySelectorAll('#masonry img').forEach(el => {
            el.classList.toggle('hide')
        })
        console.log(document.querySelectorAll('.poster'))
        document.querySelectorAll('.poster').forEach(el => {
            el.classList.toggle('hide')
        })

        document.querySelector('.poster').classList.toggle('color-changed');
    }
    