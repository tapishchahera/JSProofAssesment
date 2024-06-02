/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const arrNFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (NAME, IDNO, HEIGHT, HAIRCOLOUR) {
    const objNFT ={
        Name: NAME,
        ID: IDNO,
        Height: HEIGHT,
        HairColour: HAIRCOLOUR
    }
    arrNFT.push(objNFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i< arrNFT.length; i++ ){
        console.log(arrNFT[i]);
        console.log("\n");
    }
        console.log("\n");
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total no. of NFTs: " +arrNFT.length);
}

// call your functions below this line
mintNFT("Rohan", 101, 180, "Black");
mintNFT("Rahul", 102, 178, "Black");
mintNFT("Rohan", 103, 185, "Brown");
mintNFT("Rohan", 104, 177, "Beige");
mintNFT("Rohan", 105, 183, "Blue");

listNFTs();
getTotalSupply();
