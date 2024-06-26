// variable to hold  NFT's
const totalNFT=[];

// This function will accept a set of parameters, 
// and use the parameters to generate an NFT object and its metadata,
//then the result is saves in the above variable.
function mintNFT (name,age,gender,email,profession,location,hobby) {
    const NFT ={
        "Name" : name,
        "Age" : age,
        "Gender" : gender,
        "Email" : email,
        "Profession" : profession,
        "Location" : location,
        "Hobby" : hobby
    }
    totalNFT.push(NFT);
    console.log("Minted : "+ name+ "\n");
}

//"loop" to traverse a "array" of NFTs.
//and print their metadata
function listNFTs () {
    for(let i=0;i<totalNFT.length; i++) {
        console.log("Name        : " + totalNFT[i].Name);
        console.log("Age         : " + totalNFT[i].Age);
        console.log("Gender      : " + totalNFT[i].Gender);
        console.log("Email       : " + totalNFT[i].Email);
        console.log("Profession  : " + totalNFT[i].Profession)
        console.log("Location    : " + totalNFT[i].Location);
        console.log("Hobby       : " + totalNFT[i].Hobby + "\n");
    }

}

//Function to Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Number of NFTs: " + totalNFT.length);
}

// calling the  functions 

mintNFT("Aman","22","Male","inspireamandeep1@gmail.com","Student","India","Reading");
mintNFT("Darwin ","27","Male","darwin@gmail.com","Electrical Engineer" ,"USA","Watching Movies");
mintNFT("Isabella","19","Female","isabella987@gmail.com","Student","Mexico","Playing Computer Games");
mintNFT("Rengoku ","20","Male","rengoku004@gmail.com","Software Developer","Japan","Playing Football");

listNFTs();
getTotalSupply();