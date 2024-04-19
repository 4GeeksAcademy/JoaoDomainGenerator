let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = [".com", ".net", ".io", ".ie"]

function randonName(array1,array2,array3,extension){
    let finalArray = []
    let myExtension = 0
    for (let i = 0; i < pronoun.length; i++){
        for (let j = 0; j < adj.length; j++){
            for (let l = 0; l < noun.length; l++){
                let myExcuse = document.getElementById('row');
                let myElement = document.createElement('p')
                myElement.innerText = array1[i] + array2[j] + array3[l]+extension[myExtension]

                myExcuse.appendChild(myElement)
                /*
                myExtension = Math.floor(Math.random()*extension.length)
                finalArray.push(array1[i] + array2[j] + array3[l]+extension[myExtension]) */

            }
        }
    }

    return finalArray
}

randonName(pronoun,adj,noun,extensions)
console.log(randonName(pronoun,adj,noun,extensions))