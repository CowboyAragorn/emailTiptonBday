import newEmail from "./emailObject"

export default function inbox(){
    let inboxBtn = document.getElementById('inboxBtn');
    let emailDisplayContainer = document.getElementById('emailDisplayContainer')
    let emailDisplayFlexContainer = document.getElementById('emailDisplayFlexContainer')
    let emailNameDisplay = document.getElementById('emailNameDisplay')
    let emailBody = document.getElementById('emailBody');
    let emailExitBtn = document.getElementById('emailExitBtn')

    const email1 = new newEmail(
        'Jerome', //from
        'Hate ur guys', //title
        '8/7', //date
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet erat et mauris porta ultrices. Suspendisse ullamcorper justo quis placerat mattis. Mauris et nisi vel nunc dapibus cursus vitae et diam. Mauris convallis rutrum tellus aliquam pharetra. Proin volutpat eu nibh sit amet blandit. Vestibulum quis ipsum vel orci congue feugiat ut et urna. In suscipit justo nec odio congue, ac laoreet enim aliquet. Sed consequat tempor libero, nec aliquam ipsum maximus quis.'
    )
    const email2 = new newEmail(
        'Candy', //from
        'Hey handsome', //title
        '10/10', //date
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet erat et mauris porta ultrices. Suspendisse ullamcorper justo quis placerat mattis. Mauris et nisi vel nunc dapibus cursus vitae et diam. Mauris convallis rutrum tellus aliquam pharetra. Proin volutpat eu nibh sit amet blandit. Vestibulum quis ipsum vel orci congue feugiat ut et urna. In suscipit justo nec odio congue, ac laoreet enim aliquet. Sed consequat tempor libero, nec aliquam ipsum maximus quis.'
    )
    let inboxArray = [email1, email2]


    newEmail.prototype.displayInboxPrototype = function(){
        let emailFlexContainer = document.createElement('button'); //It being a button makes it clickable
            emailFlexContainer.id = 'emailFlexContainer';
            emailFlexContainer.classList = 'emailFlex'
        //buttons to cross a task off, moving it to bottom of the array//
        let emailFrom = document.createElement('p');
            emailFrom.innerHTML = 'FROM: '+ this.from;
            emailFrom.classList = 'emailFrom';
        let emailTitle = document.createElement('p');
            emailTitle.innerHTML = this.title;
            emailTitle.classList.add('emailTitle')
        emailFlexContainer.addEventListener('click', ()=>{
            emailPopoutBoxContainer.style.display = 'flex';
            emailNameDisplay.innerHTML = this.title;
            emailBody.innerHTML = this.message;
        })
        emailDisplayFlexContainer.append(emailFlexContainer);
        emailFlexContainer.append(emailFrom);
        emailFlexContainer.append(emailTitle);
    }



    function displayInbox(){
        const elements = document.getElementsByClassName('emailFlex');
        //Empties the visual display for repinning
        while(elements.length > 0){ 
            emailDisplayFlexContainer.removeChild(elements[0]);
        }
        for(let p = 0; p < inboxArray.length; p++){  //display the taskDisplayArray
            inboxArray[p].displayInboxPrototype();
        } 
    }

   
    emailExitBtn.addEventListener('click',()=>{
        emailPopoutBoxContainer.style.display = 'none';
    })
    inboxBtn.addEventListener('click', displayInbox);
    displayInbox();


}