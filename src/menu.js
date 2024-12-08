function MenuContent() {
  const content = document.getElementById('content');

  const title = document.createElement('h1');
  title.innerText = 'Menu';
  content.appendChild(title);

  const menu = [
    {
      title: 'CREPE SALMON PHILADELFIA',
      description: '50g of salted salmon, cream cheese, and fresh cucumber rolled in a delicate crepe and served with Greek yogurt.'
    },
    {
      title: 'HOMEMADE PORK SAUSAGE WITH MASHED POTATO',
      description: 'A hearty dish for lovers of homemade flavors: creamy mashed potatoes paired perfectly with a juicy sausage in a rich tomato and onion sauce. On the side, enjoy a fresh salad mix with crisp cucumber slices, lightly dressed for balance. Warmth and taste that feel just like home!'
    },
    {
      title: 'CHICKEN STROGANOFF',
      description: 'Tender chicken fillet in a creamy mushroom sauce with a hint of paprika, served with buttery mashed potatoes. A perfect balance of comforting homemade flavors and refined restaurant quality. An ideal choice for classic cuisine lovers!'
    },
  ];

  menu.forEach((dish) => {
    const dishTitle = document.createElement('h3');
    dishTitle.innerText = dish.title;
    const dishDescription = document.createElement('p');
    dishDescription.innerText = dish.description;
    
    const dishCard = document.createElement('div');
    dishCard.className = 'dish-card';
    dishCard.appendChild(dishTitle);
    dishCard.appendChild(dishDescription);
    content.appendChild(dishCard);
  });

};

export { MenuContent };