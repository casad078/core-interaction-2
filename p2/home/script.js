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
    const closeButton = document.querySelector('.close-button');
    
    image.addEventListener('click', function() {
        bio.style.display = 'block'; // Show the bio
        // Apply blur effect
        setTimeout(function() {
            bio.style.backdropFilter = 'blur(5px)';
        }, 50); // Delay for smoother transition
        // Hide the image
        image.style.display = 'none';
    });
    
    // Add event listener to hide the bio when the close button is clicked
    closeButton.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation(); // Prevent the click event from bubbling up to the bio
        bio.style.display = 'none';
        image.style.display = 'block'; // Show the image again
    });
    
    // Add event listener to hide the bio when clicked outside the bio and not on the close button
    document.addEventListener('click', function(event) {
        // Check if the clicked element is not the bio, image, or close button
        if (!bio.contains(event.target) && event.target !== image && event.target !== closeButton) {
            bio.style.display = 'none';
            image.style.display = 'block'; // Show the image again
        }
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
        'artist' : "Artist: Chuchu Wang. @chuchuwang_art"
    },
    { 
        src: 'collections_images/img2.png', 
        'category' : ['cards'],
        'back' : 'backs/img2b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "I have been a collector of art buisness cards for about 2 or so years. It's a way to display a wide variety of art with limited space, something I was very interested in. And MoCCA had a lot of buisness cards.",
        'artist' : "Artist: Grace Kegel. @gess.wut"
    },
    {   
        src: 'collections_images/img3.png', 
        'category' : ['cards'],
        'back' : 'backs/img3b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "I love the color green. And it kinda looks like water. Slay.",
        'artist' : "Artist: Yuqi Liu. @yuqianita"

    },
    {   
        src: 'collections_images/img4.png', 
        'category' : ['cards'],
        'back' : 'backs/img4b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "SHROMPU, in a green frame, kinda like an old windows MSpaint canvas. Need I say more?",
        'artist' : "Artist: Alexander Laira. @alexanderlaird"
    },
    {   
        src: 'collections_images/img5.png', 
        'category' : ['cards'],
        'back' : 'backs/img5b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "I'm a big fan of the doodle style, and the bright saturated colors. Reminds me of the old Fancy Nancy books I used to read as a kid.",
        'artist' : "Artist: Chalzea Xu. @chalzea_art"
    },
    {   
        src: 'collections_images/img6.png',
        'category' : ['cards'],
        'back' : 'backs/img6b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "Cowboys. I have a plethora of Red Dead Redemption inspired things in my room, and this card adds to the aesthetic.",
        'artist' : "Artist: Marcos Santos. @mar_scribbles"
    },
    {   
        src: 'collections_images/img7.png', 
        'category' : ['cards'],
        'back' : 'backs/img7b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "Everyone stop. Go look at their website. Cry at how beautiful it is. Ok you can move on now.",
        'artist' : "Artist: Toma Vagner. tomavagner.com"
    },
    {   
        src: 'collections_images/img8.png', 
        'category' : ['cards'],
        'back' : 'backs/img8b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Flora Bai. @florabai.jpg"
    },
    {   
        src: 'collections_images/img9.png', 
        'category' : ['cards'],
        'back' : 'backs/img9b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Hannah Byers. @snillywilly"
    },
    {   
        src: 'collections_images/img10.png', 
        'category' : ['cards'],
        'back' : 'backs/img10b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Ivy Ma. @ivymajia"
    },
    {   
        src: 'collections_images/img11.png', 
        'category' : ['cards'],
        'back' : 'backs/img11b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Xiao Hua Yang. @dawnwatch"
    },
    {   
        src: 'collections_images/img12.png', 
        'category' : ['photograph'],
        'back' : 'backs/img12b.png',
        'type' : "Polaroid.",
        'place' : "New York",
        'date' : "2023",
        'desc' : "Milo. He's facinated by the sink for some reason." ,
        'artist': "Taken by my sister."
    },
    {   
        src: 'collections_images/img13.png',
        'category' : ['cards'],
        'back' : 'backs/img13b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "MORE COWBOYS. And it's a cat. And he's got an avocado! thanks.",
        'artist' : "Artist: Kat. @avokatdor"
    },
    {   
        src: 'collections_images/img14.png',
        'category' : ['prints'],
        'back' : 'backs/img14b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "The missprint of a really pretty floral pattern."
    },
    {   
        src: 'collections_images/img15.png',
        'category' : ['postcard'],
        'back' : 'backs/img15b.png',
        'type' : "Postcard.",
        'place' : "The MoMA.",
        'date' : "2023.",
        'desc' : "I thought it embodied my wish to frolic in a field. I am now aware of it's depressing story :(.",
        'artist' : "Artist: Andrew Wyeth, 1948"
    },
    {   
        src: 'collections_images/img16.png',
        'category' : ['prints'],
        'back' : 'backs/img16b.png',
        'type' : "Print.",
        'place' : "Parson's 2023 Illustration Thesis Exhibit.",
        'date' : "March 25th, 2023.",
        'desc' : "",
        'artist' : "Artist: Clara Waldheim. @comicbook_clara"
    },
    {   
        src: 'collections_images/img17.png',
        'category' : ['postcard'],
        'back' : 'backs/img17b.png',
        'type' : "Postcard.",
        'place' : "Printed Matter's 2022 NY Art Book Fair.",
        'date' : " Sunday October 16, 2022",
        'desc' : "",
        'artist' : "Artist: Rúna Thorkelsdóttir. www.BoekieWoekie.com "
    },
    {   
        src: 'collections_images/img18.png',
        'category' : ['collaged'],
        'back' : 'backs/img18b.png',
        'type' : "Collaged print.",
        'date' : "2023.",
        'desc' : "",
        'artist' : "Artist: me and a random magazine."
    },
    {   
        src: 'collections_images/img19.png',
        'category' : ['collaged'],
        'back' : 'backs/img19b.png',
        'type' : "Collaged print.",
        'date' : "2023.",
        'desc' : "",
        'artist' : "Artist: me and a random magazine."
    },
    {   
        src: 'collections_images/img20.png',
        'category' : ['cards'],
        'back' : 'backs/img20b.png',
        'type' : "Card.",
        'place' : "Parson's E4 Shop.",
        'date' : "November 9, 2022.",
        'desc' : "",
        'artist' : "Artist: Melanie Wu"
    },
    {   
        src: 'collections_images/img21.png',
        'category' : ['sticker'],
        'back' : 'backs/img21b.png',
        'type' : "Sticker.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "It's a cat dressed as a witch flying on a broom. I literally do not have to elaborate.",
        'artist' : "Artist: Kat. @avokatdor"
    },
    {   
        src: 'collections_images/img22.png',
        'category' : ['collaged'],
        'back' : 'backs/img22b.png',
        'type' : "Collaged print.",
        'date' : "2023.",
        'desc' : "It's Pedro Pascal. Do I NEED to say more??",
        'artist' : "Artist: me and a random magazine."
    },
    {   
        src: 'collections_images/img23.png', 
        'category' : ['collaged'],
        'back' : 'backs/img23b.png',
        'type' : "Collaged print.",
        'date' : "2023.",
        'desc' : "",
        'artist' : "Artist: me and a random magazine."
    },
    {   
        src: 'collections_images/img24.png',
        'category' : ['collaged'],
        'back' : 'backs/img24b.png',
        'type' : "Collaged print.",
        'date' : "2023.",
        'desc' : "",
        'artist' : "Artist: me and a random magazine."
    },
    {   
        src: 'collections_images/img25.png',
        'category' : ['collaged'],
        'back' : 'collections_images/img25.png',
        'type' : "Collaged print.",
        'date' : "202.3",
        'desc' : "",
        'artist' : "Artist: me and a random magazine."
    },
    {   
        src: 'collections_images/img26.png',
        'category' : ['collaged'],
        'back' : 'backs/img26b.png',
        'type' : "Collaged print.",
        'date' : "2023.",
        'desc' : "",
        'artist' : "Artist: me and a random magazine."
    },
    {   
        src: 'collections_images/dmc2.png', 
        'category' : ['poster'],
        'back': 'collections_images/dmc2.png',
        'type': "Poster.",
        'date': "2024.",
        'artist': "Artist: Dani Casado."
    },
    {   
        src: 'collections_images/img27.png', 
        'category' : ['photograph'],
        'back' : 'backs/img27b.png',
        'type' : "Polaroid.",
        'place' : "New York.",
        'date' : "2019.",
        'desc' : "",
        'artist' : "Taken by me."
    },
    {   
        src: 'collections_images/img28.png', 
        'category' : ['photograph'],
        'back' : 'backs/img28b.png',
        'type' : "Polaroid.",
        'place' : "Manhattan, New York",
        'date' : "2024.",
        'desc' : "",
        'artist' : "Taken by me."
    },
    {   
        src: 'collections_images/img29.png', 
        'category' : ['stickers'],
        'back' : 'backs/img29b.png',
        'type' : "Sticker.",
        'date' : "2023.",
        'desc' : "",
        'artist' : "Artist: @royarach"
    },
    {   
        src: 'collections_images/img30.png', 
        'category' : ['gifts'],
        'back' : 'backs/img30b.png',
        'type' : "Message.",
        'date' : "May 2022.",
        'desc' : "",
        'artist' : "Artist: Mr. Wong"
    },
    {   
        src: 'collections_images/img31.png', 
        'category' : ['gifts'],
        'back' : 'backs/img31b.png',
        'type' : "Wrapper.",
        'date' : "2022.",
        'desc' : "",
    },
    {   
        src: 'collections_images/img32.png', 
        'category' : ['cards'],
        'back' : 'backs/img32b.png',
        'type' : "Card.",
        'place' : "Bayside.",
        'date' : "2022",
        'desc' : "",
        'artist' : "Artist: Helaine Soller"
    },
    {   
        src: 'collections_images/img33.png', 
        'category' : ['cards'],
        'back' : 'backs/img33b.png',
        'type' : "Card.",
        'place' : "Parson's 2023 Illustration Thesis Exhibit.",
        'date' : "March 25th, 2023.",
        'desc' : "",
        'artist' : "Artist: Lil Guglich"
    },
    {   
        src: 'collections_images/img34.png', 
        'category' : ['cards'],
        'back' : 'backs/img34b.png',
        'type' : "Card.",
        'place' : "Parson's 2023 Illustration Thesis Exhibit.",
        'date' : "March 25th, 2023.",
        'desc' : "",
        'artist' : "Artist: Gaelin Zhao. gaelinzhao.com"
    },
    {   
        src: 'collections_images/img35.png', 
        'category' : ['collaged'],
        'back' : 'backs/img35b.png',
        'type' : "Collaged print.",
        'date' : "2023.",
        'desc' : "",
        'artist' : "Artist: me and a random magazine."
    },
    {   
        src: 'collections_images/img37.png', 
        'category' : ['photograph'],
        'back' : 'backs/img37b.png',
        'type' : "Pholaroid. Printed from digital image.",
        'place' : "New York",
        'date' : "2015",
        'desc' : "",
        'artist' : "Taken by my mom. "
    },
    {   
        src: 'collections_images/img38.png', 
        'category' : ['stickers'],
        'back' : 'backs/img38b.png',
        'type' : "Paper cut out.",
        'date' : "2018",
        'desc' : "",
        'artist' : "Artist: me, but heavily inspired by the Untitled Goose Game."
    },
    {   
        src: 'collections_images/img39.png', 
        'category' : ['gifts'],
        'back' : 'backs/img39b.png',
        'type' : "Bite mark on bristol paper.",
        'date' : "2023",
        'desc' : "",
        'artist' : "Artist: Milo the cat."
    },
    {   
        src: 'collections_images/img40.png',
        'category' : ['prints'],
        'back' : 'backs/img40b.png',
        'type' : "Zine.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Joy Freudeart. @Joyfruedeart"
    },
    {   
        src: 'collections_images/img41.png', 
        'category' : ['photograph'],
        'back' : 'backs/img41b.png',
        'type' : "Polaroid.",
        'place' : "New York",
        'date' : "2017.",
        'desc' : "",
        'artist' : "Taken by me."
    },
    {   
        src: 'collections_images/img42.png', 
        'category' : ['gifts'],
        'back' : 'backs/img42b.png',
        'type' : "Fruit gummy wrapper.",
        'place' : "Parsons.",
        'date' : "2022",
        'desc' : "",
    },
    {   
        src: 'collections_images/img43.png',
        'category' : ['photograph'] ,
        'back' : 'backs/img43b.png',
        'type' : "Polaroid. Printed from digital photo.",
        'place' : "New York.",
        'date' : "August 20th, 2023.",
        'desc' : "",
        'artist' : "Taken by me."
    },
    {   
        src: 'collections_images/img44.png', 
        'category' : ['photograph'],
        'back' : 'backs/img44b.png',
        'type' : "Polaroid. Printed from digital photo.",
        'place' : "New York.",
        'date' : "December 2023.",
        'desc' : "",
        'artist' : "Taken by me."
    },
    {   
        src: 'collections_images/img45.png', 
        'category' : ['gifts'],
        'back' : 'backs/img45b.png',
        'type' : "Note on Post-it.",
        'date' : "2018",
        'desc' : "",
        'artist' : "Artist: Carol."
    },
    {   
        src: 'collections_images/img46.png', 
        'category' : ['photograph'],
        'back' : 'backs/img46b.png',
        'type' : "Polaroid.",
        'place' : "New York.",
        'date' : "2019.",
        'desc' : "Tia Diana.",
        'artist' : "Taken by me."
    },
    {   
        src: 'collections_images/img48.png', 
        'category' : ['photograph'],
        'back' : 'backs/img48b.png',
        'type' : "Polaroid.",
        'place' : "New York.",
        'date' : "2016.",
        'desc' : "My dad.",
        'artist' : "Taken by me"
    },
    {   
        src: 'collections_images/img49.png', 
        'category' : ['gifts'],
        'back' : 'backs/img49b.png',
        'type' : "Doodle.",
        'date' : "2022.",
        'desc' : "",
        'artist' : "Artist: Nicole Correaa"
    },
    {   
        src: 'collections_images/img50.png', 
        'category' : ['gifts'],
        'back' : 'backs/img50b.png',
        'type' : "Doodle on recipt.",
        'place' : "Parsons.",
        'date' : "2023.",
        'desc' : "",
        'artist' : "Artist: Jessica Hyein"
    },
    {   
        src: 'collections_images/img51.png', 
        'category' : ['gifts'],
        'back' : 'backs/img51b.png',
        'type' : "Oragami.",
        'desc' : "",
        'artist' : "Artist: Carol"
    },
    {   
        src: 'collections_images/dmc1.png', 
        'category' : ['poster'],
        'back' : 'collections_images/dmc1.png',
        'type' : "Poster.",
        'date' : "2024",
        'desc' : "",
        'artist' : "Dani Casado"
    },
    {   
        src: 'collections_images/img52.png', 
        'category' : ['gifts'],
        'back' : 'backs/img52b.png',
        'type' : "Doodle.",
        'place' : "Parsons.",
        'date' : "2023.",
        'desc' : "",
        'artist' : "Artist: Lizzy"
    },
    {   
        src: 'collections_images/img53.png', 
        'category' : ['photograph'],
        'back' : 'backs/img53b.png',
        'type' : "Polaroid.",
        'place' : "New York",
        'date' : "1990s",
        'desc' : "",
    },
    {   
        src: 'collections_images/img55.png', 
        'category' : ['photograph'],
        'back' : 'backs/img55b.png',
        'type' : "Photo.",
        'place' : "New York",
        'date' : "2005.",
        'desc' : "",
        'artist' : "Taken by Kathy."
    },
    {   
        src: 'collections_images/img56.png', 
        'category' : ['collaged'],
        'back' : 'backs/img56b.png',
        'type' : "Magazine cut out.",
        'date' : "2023.",
        'desc' : "",
        'artist' : "Artist: Me and a random magazine."
    },
    {   
        src: 'collections_images/img57.png', 
        'category' : ['cards'],
        'back' : 'backs/img57b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Raquel A. Bumgarner. @fiarfli"
    },
    {   
        src: 'collections_images/img58.png', 
        'category' : ['cards'],
        'back' : 'backs/img58b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Gabriella Ellis. @okgardiellies"
    },
    {   
        src: 'collections_images/img60.png', 
        'category' : ['photograph'],
        'back' : 'backs/img60b.png',
        'type' : "Polaroid.",
        'place' : "New York.",
        'date' : "2017",
        'desc' : "",
        'artist' : "Taken by me."
    },
    {   
        src: 'collections_images/img61.png', 
        'category' : ['postcard'],
        'back' : 'backs/img61b.png',
        'type' : "Postcard.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Janelly Rodriguez. @Jellyjanelly_"
    },
    {   
        src: 'collections_images/img63.png', 
        'category' : ['cards'],
        'back' : 'backs/img63b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Alexander Laird. @alexanderlaird"
    },
    {   
        src: 'collections_images/img64.png', 
        'category' : ['collaged'],
        'back' : 'backs/img64b.png',
        'type' : "Magazine cut out on Bristolpad Paper.",
        'date' : "2023.",
        'desc' : "",
        'artist' : "Artist: Me and a random magazine."
    },
    {   
        src: 'collections_images/img65.png', 
        'category' : ['collaged'],
        'back' : 'backs/img65b.png',
        'type' : "Magazine cut out on Bristolpad Paper.",
        'date' : "2023.",
        'desc' : "",
        'artist' : "Artist: Me and a random magazine."
    },
    {   
        src: 'collections_images/img66.png', 
        'category' : ['photograph'],
        'back' : 'backs/img66b.png',
        'type' : "Polaroid.",
        'place' : "Massachusetts (probably).",
        'date' : "2023.",
        'desc' : "",
    },
    {   
        src: 'collections_images/img67.png', 
        'category' : ['collaged'],
        'back' : 'backs/img67b.png',
        'type' : "Magazine cut out on Bristolpad Paper.",
        'date' : "2023.",
        'desc' : "",
        'artist' : "Artist: Me and a random magazine."
    },
    {   
        src: 'collections_images/img68.png', 
        'category' : ['gifts'],
        'back' : 'backs/img68b.png',
        'type' : "Pin packaging.",
        'place' : "Brooklyn, New York.",
        'date' : "October 13th, 2023.",
        'desc' : "",
        'artist' : "Artist: The Crane Wives."
    },
    {   
        src: 'collections_images/img69.png', 
        'category' : ['cards'],
        'back' : 'backs/img69b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Erica Hoelting. @Ericahoeltingart"
    },
    {   
        src: 'collections_images/img70.png', 
        'category' : ['cards'],
        'back' : 'backs/img70b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Ande Wittenmeier. @andewitt.art"
    },
    {   
        src: 'collections_images/img71.png', 
        'category' : ['photograph'],
        'back' : 'backs/img71b.png',
        'type' : "Polaroid.",
        'place' : "New York.",
        'date' : "2018.",
        'desc' : "",
        'artist' : "Taken by me."
    },
    {   
        src: 'collections_images/img72.png', 
        'category' : ['photograph'],
        'back' : 'backs/img72b.png',
        'type' : "Polaroid..",
        'place' : "New York.",
        'date' : "November 8th, 2023.",
        'desc' : "",
        'artist' : "Taken by me."
    },
    {   
        src: 'collections_images/img73.png', 
        'category' : ['cards'],
        'back' : 'backs/img73b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Arist: @soyboysel"
    },
    {   
        src: 'collections_images/img74.png', 
        'category' : ['cards'],
        'back' : 'backs/img74b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Avery Mei Skillin. @Aveemei"
    },
    {   
        src: 'collections_images/img75.png', 
        'category' : ['cards'],
        'back' : 'backs/img75b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Sheez Lu. @sbreakthehills"
    },
    {   
        src: 'collections_images/img76.png', 
        'category' : ['cards'],
        'back' : 'backs/img76b.png',
        'type' : "Card.",
        'place' : "Parson's 2023 Illustration Thesis Exhibit.",
        'date' : "March 25th, 2023.",
        'desc' : "",
        'artist' : "Artist: Miriam Spalinski. @spalinskia"
    },
    {   
        src: 'collections_images/img77.png', 
        'category' : ['gifts'],
        'back' : 'backs/img77b.png',
        'type' : "Card.",
        'place' : "FiftyLan.",
        'date' : "2022.",
        'desc' : "",
    },
    {   
        src: 'collections_images/img78.png', 
        'category' : ['cards'],
        'back' : 'backs/img78b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Yadi Liu. @yadiiart"
    },
    {   
        src: 'collections_images/img79.png', 
        'category' : ['cards'],
        'back' : 'backs/img79b.png',
        'type' : "Card.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: Felix McKenna. @felix_the_frog"
    },
    {   
        src: 'collections_images/img80.png', 
        'category' : ['stickers'],
        'back' : 'backs/img80b.png',
        'type' : "Sticker.",
        'place' : "The MoCCA Illustration Festival.",
        'date' : "Saturday, March 16th. 2024.",
        'desc' : "",
        'artist' : "Artist: NOT!!! Jacob Voorheies. @not_jacob_voorheis"
    }
    ];

    
    function displayImages(images) {
        const container = document.getElementById('masonry');
        container.innerHTML = ''; // Clear previous images
        
        const shuffledImages = images.sort(() => Math.random() - 0.5);
        
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

    // Variable to track the animation state
let animationRunning = true;

// Function to start the scroll animation
function startScrollAnimation() {
    const masonry = document.getElementById('masonry');
    masonry.classList.add('scrolling');
}

// Function to stop the scroll animation
function stopScrollAnimation() {
    const masonry = document.getElementById('masonry');
    masonry.classList.remove('scrolling');
}

// Function to toggle the animation state
function toggleAnimation() {
    if (animationRunning) {
        stopScrollAnimation();
    } else {
        startScrollAnimation();
    }
    animationRunning = !animationRunning; // Toggle the animation state
}

// Call startScrollAnimation() to start scrolling when the page loads
window.addEventListener('load', function() {
    startScrollAnimation();
});

// Function to toggle the filters
function toggleFilter(filterClass){
    toggleAnimation();

    document.querySelectorAll('#masonry img').forEach(el => {
        el.classList.toggle('hide')
    });

    document.querySelectorAll('.' + filterClass).forEach(el => {
        el.classList.toggle('hide')
    });

    document.querySelector('.' + filterClass).classList.toggle('color-changed');
}

// Function to handle button clicks
function handleButtonClick(event) {
    const clickedButton = event.target;
    const filterClass = clickedButton.getAttribute('data-filter');

    // Check if the clicked button is already active
    const isActive = clickedButton.classList.contains('active');

    // Deactivate all buttons
    document.querySelectorAll('.filter-button').forEach(button => {
        button.classList.remove('active');
    });

    // If the clicked button was not already active, activate it and show corresponding images
    if (!isActive) {
        clickedButton.classList.add('active');

        // Hide all elements first
        document.querySelectorAll('#masonry img').forEach(el => {
            el.classList.add('hide');
        });

        // Show only the elements corresponding to the clicked button
        document.querySelectorAll('.' + filterClass).forEach(el => {
            el.classList.remove('hide');
        });
    } else {
        // If the clicked button was already active, remove the active class and show all images
        document.querySelectorAll('#masonry img').forEach(el => {
            el.classList.remove('hide');
        });
    }
}

// Add event listeners to all buttons with class 'filter-button'
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
