 // Array of names for the Ethereum project in different languages
 const names = [
    "Satanblantoss",
    "maostlab",
    "mo3500",
    "whatkindofmilkuare",
    "ten chemik",
    "Maksymilian Ostrowski",
    "Fr3j@Wh1t3",
    "ph3nU11",
    "M@k$Ym1li4n",
    "m40$tl48",
    "Mak$ymilian",
    "SantosBlantOss",
    "FrejaWhite",
    "Maksymilian Ostr",
    "wh4tk1nd0fm1lkU@r3",
    "M4k$Ym1l1@n 0$tr0w$k1",
    "t3n ch3m1k",
    "phenull",
    "M@k$Ym1l14n 0$tR",
    "S4tan81ant0$$",
];

// Function to update the text content of the element with id "nick_names"
function updateName() {
    // Get the current name index from the data attribute or start with 0
    let currentIndex = parseInt(document.getElementById('nick_names').getAttribute('data-index')) || 0;
    
    // Update the text content with the current name
    document.getElementById('nick_names').textContent = names[currentIndex];
    
    // Calculate the next index (circularly)
    const nextIndex = (currentIndex + 1) % names.length;
    
    // Update the data attribute with the next index
    document.getElementById('nick_names').setAttribute('data-index', nextIndex);
}

// Set an interval to update the name every 2 seconds
setInterval(updateName, 300);

// Initial call to set the first name
updateName();