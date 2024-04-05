window.addEventListener('load', function() {
    var loadDiv = document.getElementById('load');
    loadDiv.style.display = 'none';
  });


//images//
const images =
    [
    { 
        src: 'collections_images/img1.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': true,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    { 
        src: 'collections_images/img2.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': true,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img3.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': true,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img4.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': true,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img5.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': true,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img6.png',
        link: 'https://www.coolsymbol.top/', 
        'postcard': false,
        'photograph':false,
        'cards': true,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img7.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': true,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img8.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': true,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img9.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': true,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img10.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': true,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img11.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': true,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img12.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':true,
        'cards': false,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img13.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': true,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img14.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': true,
        'photograph':false,
        'cards': false,
        'prints': true,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img15.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': true,
        'photograph':false,
        'cards': false,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img16.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': true,
        'photograph':false,
        'cards': false,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img17.png',
        link: 'https://www.coolsymbol.top/',
        'postcard': true,
        'photograph':false,
        'cards': false,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false 
    },
    {   
        src: 'collections_images/img18.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': false,
        'prints': false,
        'collaged': true,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img19.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': false,
        'prints': false,
        'collaged': true,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img20.png',
        link: 'https://www.coolsymbol.top/', 
        'postcard': false,
        'photograph':false,
        'cards': true,
        'prints': false,
        'collaged': false,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img21.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': false,
        'prints': false,
        'collaged': false,
        'stickers': true,
        'messages': false
    },
    {   
        src: 'collections_images/img22.png', 
        link: 'https://www.coolsymbol.top/',
        'postcard': false,
        'photograph':false,
        'cards': false,
        'prints': false,
        'collaged': true,
        'stickers': false,
        'messages': false
    },
    {   
        src: 'collections_images/img23.png',
        link: 'https://www.coolsymbol.top/', 
    },
    {   
        src: 'collections_images/img24.png', 
        link: 'https://www.coolsymbol.top/',
    },
    {   
        src: 'collections_images/img25.png', 
        link: 'https://www.coolsymbol.top/',
    },
    {   
        src: 'collections_images/img26.png', 
        link: 'https://www.coolsymbol.top/',
    },
    {   
        src: 'collections_images/img27.png', 
        link: 'https://www.coolsymbol.top/',
    },
    {   
        src: 'collections_images/img28.png', 
        link: 'https://www.coolsymbol.top/',
    },
    {   
        src: 'collections_images/img29.png', 
        link: 'https://www.coolsymbol.top/',
    },
    {   
        src: 'collections_images/img30.png', 
        link: 'https://www.coolsymbol.top/',
    },
    {   
        src: 'collections_images/img31.png', 
        link: 'https://www.coolsymbol.top/',
    },
    {   
        src: 'collections_images/img32.png', 
        link: 'https://www.coolsymbol.top/',
    },
    {   
        src: 'collections_images/img33.png', 
    },
    {   
        src: 'collections_images/img34.png', 
    },
    {   
        src: 'collections_images/img35.png', 
    },
    {   
        src: 'collections_images/img36.png', 
    },
    {   
        src: 'collections_images/img37.png', 
    },
    {   
        src: 'collections_images/img38.png', 
    },
    {   
        src: 'collections_images/img39.png', 
    },
    {   
        src: 'collections_images/img40.png', 
    },
    {   
        src: 'collections_images/img41.png', 
    },
    {   
        src: 'collections_images/img42.png', 
    },
    {   
        src: 'collections_images/img43.png', 
    },
    {   
        src: 'collections_images/img44.png', 
    },
    {   
        src: 'collections_images/img45.png', 
    },
    {   
        src: 'collections_images/img46.png', 
    },
    {   
        src: 'collections_images/img47.png', 
    },
    {   
        src: 'collections_images/img48.png', 
    },
    {   
        src: 'collections_images/img49.png', 
    },
    {   
        src: 'collections_images/img50.png', 
    },
    {   
        src: 'collections_images/img51.png', 
    },
    {   
        src: 'collections_images/img52.png', 
    },
    {   
        src: 'collections_images/img53.png', 
    },
    {   
        src: 'collections_images/img54.png', 
    },
    {   
        src: 'collections_images/img55.png', 
    },
    {   
        src: 'collections_images/img56.png', 
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
        });
      }

      // Initial display of all images
      displayImages(images);
