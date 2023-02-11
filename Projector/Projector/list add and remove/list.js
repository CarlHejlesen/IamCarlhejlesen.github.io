// denne laver en reforence til indput boxen med id txt
const inputText = document.querySelector('#txt');
//Denne laver en reforence til submitknappen der hedder btn-list
const myButton = document.querySelector('.btn-list');
//denne laver en reforence til vores div container hvor vi vil opbevare vores elementer inde for ul format
const list = document.querySelector('.container ul');
//her starter vi en function ved et click fra en knap
myButton.addEventListener('click', (e)=>{
    //her der siger vi at vis vores indput box er tom kan vi ikke tilføje element.
    if(inputText.value != ""){
        //den her stopper vores element i at blive lavet hvis den ikke tjekker af
        e.preventDefault();
        //Her laver vi et element som hedder li vi forbinder det med constanten myLi
        const myLi = document.createElement('li');
        //Her siger vi at i elementet/boxen skal texten være = indput texten fra indput boxen
        myLi.innerHTML = inputText.value;
        //her tilføjer vi elementet myli til "containeren"
        list.appendChild(myLi);
        //her lave vi et indu et element der hedder span, og laver reforencen myspan
        const mySpan = document.createElement('span');
        //her siger vi at texten i elementet/boxen skal være =x
        mySpan.innerHTML = 'x';
        //her tilføjer vi elementet til myli som er sat i listen[list]
        myLi.appendChild(mySpan);
// det der basicly sker list[myLi[myspan[0]=x]=indput text]= her opbevarer vi vores main liste, kæmpe boksene
    }
    //Her starter vores ting til at fjerne elementer fra listen.
    //her linker vi alle elementer der har elementet span
    const close = document.querySelectorAll('span');
    //her finder vi ud af hvor mange elementer med span der er
    let num = close.length;
    //i dette for loop laver gør vi X knappen brugbar ved at tilknytte en onclick function
    for(let i=1;i<num;i++){
        //her tilføjer vi en click funcktion til x knap i rækkefølge
        close[i].addEventListener('click', ()=>{
//her gør vi det givende element usyndligt. parentElemented Li hvor span er en tilføjelse til dette.
            close[i].parentElement.style.opacity = 0;
            //her tilføjer vi en timer til hvor langt tid der skal gå fra vi vi gør elementet usynligt til at det bliver fjernet
            setTimeout(()=>{
                //denne søger for at vi ikke viser li "listen"
                close[i].parentElement.style.display = "none";
                //denne fjerne hvor parent element li som indeholder knappen, og texten altså vores box
                close[i].parentElement.remove();
                //5 er 5 milisecunder
            }, 5);
        });
        //til sidst sætter vi vores indput box til at være tom så den er klar til nyt indput
        inputText.value = "";
    }

});
