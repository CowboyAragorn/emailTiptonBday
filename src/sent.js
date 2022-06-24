import newEmail from "./emailObject"

export default function sent(){
    let sentBtn = document.getElementById('sentBtn');
    let emailDisplayContainer = document.getElementById('emailDisplayContainer')
    let emailDisplayFlexContainer = document.getElementById('emailDisplayFlexContainer')
    let emailNameDisplay = document.getElementById('emailNameDisplay')
    let emailBody = document.getElementById('emailBody');
    let emailExitBtn = document.getElementById('emailExitBtn');
    let substitute = "     ' +'<br>'+'      ";

    const email1 = new newEmail(
        'LISTSERV-ucf-fb-coaches', //from
        'Dunaway Toxicology', //title
        'Nov 15', //date
        'Hello all,' +'<br>'+'<br>'+'Not sure who knows and who doesn\'t at this point ... toxicology on Dunaway came back positive for fentanyl. I don\'t want him wrapped up in this drug scandal that\'s happening on campus. His death is tragic and he deserves to die a hero. So this will be staying between us. If anyone asks, the pills he took were prescribed to him, and he got depressed and took too many of them. End of story.' +'<br>'+'<br>'+'Clark'
    )
    const email2 = new newEmail(
        'williamklansing@ucf.edu', //from
        'Study Group', //title
        'Nov 11', //date
        'Will,' +'<br>'+'<br>'+'Isaac reached out to me and said he wanted to talk about the study group he\'s in with you and Zach. I\'m gonna set your mind at ease ... nobody\'s getting in any trouble. I don\'t care how you\'re doing it ... you\'re getting those grades up. I need those two eligible to play for every game. Just keep doing what you\'re doing, and I\'ll talk to Isaac about it. I\'m sure he\'ll come around.' +'<br>'+'<br>'+'Coach Clark'
    )
    const email3 = new newEmail(
        'LISTSERV-ucf-fb-coaches', //from
        'Sports Drink Allergies', //title
        'Nov 10', //date
        'Hello Knights Coaches,' +'<br>'+'<br>'+'We anticipate a successful playoffs season this year, and with that being said, please remind your players that I am VERY allergic to red 40 dye. That means NO dumping over the sports drink on Coach, given that the sports drink is red/orange/purple. Blue and yellow are ok.' +'<br>'+'<br>'+'Clark'
    )
    const email4 = new newEmail(
        'mclark934@mailone.com', //from
        'Isaac', //title
        'Nov 13', //date
        'Hey honey,' +'<br>'+'<br>'+'I\'ve got no real reason to write you. I\'m just torn up about Isaac. Never saw it coming. What a great kid. I tried talking to Zach about it and he was standoffish. I wonder how he\'s feeling about it. I was beginning to think they were friends after all.' +'<br>'+'<br>'+'Love you. See you at home.' +'<br>'+'<br>'+'Dean'
    )
    let sentArray = [email1, email4, email2, email3]

    newEmail.prototype.displaySentPrototype = function(){
        let emailFlexContainer = document.createElement('button'); //It being a button makes it clickable
            emailFlexContainer.id = 'emailFlexContainer';
            emailFlexContainer.classList = 'emailFlex'
        //buttons to cross a task off, moving it to bottom of the array//
        let emailFrom = document.createElement('p');
            emailFrom.innerHTML = 'TO: '+ this.from;
            emailFrom.classList = 'emailFrom';
        let emailTitle = document.createElement('p');
            emailTitle.innerHTML = this.title;
            emailTitle.classList.add('emailTitle');
        let emailDate = document.createElement('p')
            emailDate.innerHTML = this.date;
            emailDate.classList.add('emailDate');
        emailFlexContainer.addEventListener('click', ()=>{
            emailPopoutBoxContainer.style.display = 'flex';
            emailNameDisplay.innerHTML = 'Subject: ' + this.title;
            emailBody.innerHTML = this.message;
        })
        emailDisplayFlexContainer.append(emailFlexContainer);
        emailFlexContainer.append(emailFrom);
        emailFlexContainer.append(emailTitle)
        emailFlexContainer.append(emailDate);;
    }



    function displaySent(){
        const elements = document.getElementsByClassName('emailFlex');
        //Empties the visual display for repinning
        while(elements.length > 0){ 
            emailDisplayFlexContainer.removeChild(elements[0]);
        }
        for(let p = 0; p < sentArray.length; p++){  //display the taskDisplayArray
            sentArray[p].displaySentPrototype();
        } 
        currentDisplayedInbox.innerHTML = 'Sent'
    }

   

    sentBtn.addEventListener('click', displaySent);
   


}