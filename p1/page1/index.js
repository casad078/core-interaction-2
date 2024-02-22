  // Get all trigger elements
  const triggers = document.querySelectorAll('.trigger');

  // Add click event listener to each trigger
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      // Get the next sibling element
      const nextParagraph = trigger.parentElement.nextElementSibling;

      // Toggle the visibility of the next paragraph
      if (nextParagraph) {
        nextParagraph.classList.toggle('hidden');
      }
    });
  });

  document.getElementById('revealAll').addEventListener('click', () => {
    const hiddenParagraphs = document.querySelectorAll('.hidden');
    hiddenParagraphs.forEach(paragraph => {
      paragraph.classList.remove('hidden');
    });
  });