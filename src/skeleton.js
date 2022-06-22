import './skeleton.css'

//this function defines the basic layout for the webpage//
export default function skeleton (){
    let base = document.createElement('div');
        base.id = 'base';
    let banner = document.createElement('banner');
        banner.id = 'banner';
    document.body.append(banner);
    document.body.append(base);

//banner
let bannerTitleContainer = document.createElement('div');
    bannerTitleContainer.id = 'bannerTitleContainer'
    banner.append(bannerTitleContainer);

    let bannerHeader1 = document.createElement('div');
        bannerHeader1.id = 'bannerHeader1';
        bannerHeader1.innerHTML = 'KNIGHTS';
        bannerTitleContainer.append(bannerHeader1)
    let bannerHeader2 = document.createElement('div');
        bannerHeader2.id = 'bannerHeader2';
        bannerHeader2.innerHTML = 'mail';
        bannerTitleContainer.append(bannerHeader2)



//Left hand menu bar//
    let menuBarContainer = document.createElement('div'); //This is the menu/nav bar on left side of screen
        menuBarContainer.id = 'menuBarContainer';

       
        let overallListMenuContainer = document.createElement('div');
            overallListMenuContainer.id = 'overallListMenuContainer';
            menuBarContainer.append(overallListMenuContainer);

            
           
            let inboxBtn = document.createElement('button');
                inboxBtn.classList = 'list';
                inboxBtn.innerHTML = 'Inbox'
                inboxBtn.id = '0';
                inboxBtn.classList.add('btn', 'listBtn')
                overallListMenuContainer.append(inboxBtn)

            let houseList = document.createElement('button');
                houseList.classList = 'list';
                houseList.innerHTML = 'Sent'
                houseList.id = '1';
                houseList.classList.add('btn', 'listBtn')
                overallListMenuContainer.append(houseList);

            let junkBtn = document.createElement('button');
                junkBtn.classList = 'list';
                junkBtn.innerHTML = 'Junk'
                junkBtn.id = '0';
                junkBtn.classList.add('btn', 'listBtn')
                overallListMenuContainer.append(junkBtn)
            
            let trashBtn = document.createElement('button');
                trashBtn.classList = 'list';
                trashBtn.innerHTML = 'Trash'
                trashBtn.id = '0';
                trashBtn.classList.add('btn', 'listBtn')
                overallListMenuContainer.append(trashBtn)
            
                
                


//Right hand popup for tasks and interactions includes popout boxes//
    let taskAndListContainer = document.createElement('div');
        taskAndListContainer.id = 'taskAndListContainer';
/*
    //Task popout box//
    let taskPopoutBoxContainer = document.createElement('div');
        taskPopoutBoxContainer.id = 'taskPopoutBoxContainer';
        taskAndListContainer.append(taskPopoutBoxContainer)
        let taskPopoutBox = document.createElement('div');
            taskPopoutBox.id = 'taskPopoutBox';
            taskPopoutBox.classList.add('taskPopoutBox')
            taskPopoutBoxContainer.append(taskPopoutBox);

            let listDisplayTaskbar = document.createElement('div');
                listDisplayTaskbar.id = 'listDisplayTaskbar';
                listDisplayTaskbar.classList = 'listDisplayTaskbar';
                taskPopoutBox.append(listDisplayTaskbar);
                let listNameDisplay = document.createElement('div');
                    listNameDisplay.id = 'listNameDisplay';
                    listNameDisplay.classList = 'listHeaders';
                    listDisplayTaskbar.append(listNameDisplay);
                let listExitBtn = document.createElement('button');
                    listExitBtn.id = 'listExitBtn';
                    listExitBtn.classList.add('btn','listExitBtn');
                    listExitBtn.innerHTML = 'x'
                    listDisplayTaskbar.append(listExitBtn);

            let taskDisplayContainer = document.createElement('div');
                taskDisplayContainer.id = 'taskDisplayContainer'
                taskPopoutBox.append(taskDisplayContainer)

            //where user types new tasks into popup/
            let inputContainer = document.createElement('div');
                inputContainer.id = 'inputContainer';
                taskPopoutBox.append(inputContainer)
                let userTaskInput = document.createElement('input');
                    userTaskInput.type = 'text';
                    userTaskInput.id = 'userTaskInput';
                    inputContainer.append(userTaskInput);
                let addTaskBtn = document.createElement('button');
                    addTaskBtn.id = 'addTaskBtn';
                    addTaskBtn.classList = 'btn';
                    addTaskBtn.innerHTML = '+';
                    inputContainer.append(addTaskBtn);


//Task info right next to task popout box//
let taskInfoPopoutContainer = document.createElement('div');
    taskInfoPopoutContainer.id = 'taskInfoPopoutContainer';
    taskAndListContainer.append(taskInfoPopoutContainer)
let taskInfoPopoutBox = document.createElement('div');
    taskInfoPopoutBox.id = 'taskInfoPopoutBox';
    taskInfoPopoutBox.classList.add('taskPopoutBox')
    taskInfoPopoutContainer.append(taskInfoPopoutBox);
//title display
    let taskTitleDisplayBox = document.createElement('div');
        taskTitleDisplayBox.id = 'taskTitleDisplayBox';
        taskTitleDisplayBox.classList = 'listHeaders';
        taskInfoPopoutBox.append(taskTitleDisplayBox);
        let taskTitleDisplay = document.createElement('div');
            taskTitleDisplay.id = 'taskTitleDisplay';
            taskTitleDisplay.classList = 'listHeaders';
            taskTitleDisplayBox.append(taskTitleDisplay);
//info display with titles & boxes hardcoded in, but filled in displayTaskDetails
/* 
let taskInfoDisplayContainer = document.createElement('div');
            taskInfoDisplayContainer.id = 'taskInfoDisplayContainer'
            //taskInfoPopoutBox.append(taskInfoDisplayContainer)
        let dueDateDisplayContainer = document.createElement('div');
            dueDateDisplayContainer.id = "dueDateDisplayContainer"
            //taskInfoDisplayContainer.append(dueDateDisplayContainer);
                let dueDateTitle = document.createElement('div');
                    dueDateTitle.id = 'dueDateTitle';
                    dueDateTitle.classList.add('infoTitle');
                    dueDateTitle.innerHTML = 'Finish by';
                    //dueDateDisplayContainer.append(dueDateTitle);
                let dueDateDisplay = document.createElement('div');
                    dueDateDisplay.id = 'dueDateDisplay';
                    //dueDateDisplayContainer.append(dueDateDisplay);
                let changeDueDateBtn = document.createElement('button');
                    changeDueDateBtn.id = 'changeDueDateBtn';
                    changeDueDateBtn.classList.add('btn');
                    //dueDateDisplayContainer.append(changeDueDateBtn);
                                            /* let priorityDisplayContainer = document.createElement('div');
                                                    priorityDisplayContainer.id = "priorityDisplayContainer"
                                                    taskInfoDisplayContainer.append(priorityDisplayContainer);
                                                        let priorityTitle = document.createElement('div');
                                                            priorityTitle.id = 'priorityTitle';
                                                            priorityTitle.classList.add('infoTitle');
                                                            priorityTitle.innerHTML = 'Priority Level';
                                                            priorityDisplayContainer.append(priorityTitle);
                                                        let priorityDisplay = document.createElement('div');
                                                            priorityDisplay.id = 'priorityDisplay';
                                                            priorityDisplayContainer.append(priorityDisplay);
                                                            
        let descriptionDisplayContainer = document.createElement('div');
            descriptionDisplayContainer.id = "descriptionDisplayContainer"
            //taskInfoDisplayContainer.append(descriptionDisplayContainer);
                let descriptionTitle = document.createElement('div');
                    descriptionTitle.id = 'descriptionTitle';
                    descriptionTitle.classList.add('infoTitle');
                    descriptionTitle.innerHTML = 'Notes';
                    //descriptionDisplayContainer.append(descriptionTitle);
                //let descriptionDisplay = document.createElement('button');
                let descriptionDisplay = document.createElement('textarea')
                    descriptionDisplay.id = 'descriptionDisplay';
                    //descriptionDisplayContainer.append(descriptionDisplay);


    

    //addList popout box - created so that it disallows clicking outside the box//
    let addListPopoutBoxContainer = document.createElement('div');
        addListPopoutBoxContainer.id = 'addListPopoutBoxContainer';
        addListPopoutBoxContainer.style.display = 'none';
        taskAndListContainer.append(addListPopoutBoxContainer)
    let addListPopoutBoxFlexContainer = document.createElement('div');
        addListPopoutBoxFlexContainer.id = 'addListPopoutBoxFlexContainer';
        addListPopoutBoxContainer.append(addListPopoutBoxFlexContainer);
    let addListPopoutBox = document.createElement('div');
            addListPopoutBox.id = 'addListPopoutBox';
            addListPopoutBoxFlexContainer.append(addListPopoutBox);

        let addListDisplayTaskbar = document.createElement('div');
                addListDisplayTaskbar.id = 'addListDisplayTaskbar';
                addListDisplayTaskbar.classList = 'listDisplayTaskbar';
                addListPopoutBox.append(addListDisplayTaskbar);
            let addListNameDisplay = document.createElement('div');
                    addListNameDisplay.id = 'addListNameDisplay';
                    addListNameDisplay.classList.add('listHeaders');
                    addListDisplayTaskbar.append(addListNameDisplay);
            let addListExitBtn = document.createElement('button');
                    addListExitBtn.id = 'addListExitBtn';
                    addListExitBtn.classList = 'btn';
                    addListExitBtn.innerHTML = 'x'
                    addListDisplayTaskbar.append(addListExitBtn);
        //addList input box//
        let addListInputContainer = document.createElement('div');
                addListInputContainer.id = 'addListInputContainer';
                addListPopoutBox.append(addListInputContainer)

                let userListInput = document.createElement('input');
                    userListInput.type = 'text';
                    userListInput.id = 'userListInput';
                    userListInput.classList.add('popoutItem')
                    addListInputContainer.append(userListInput);
                let addListPopupBtn = document.createElement('button');
                    addListPopupBtn.id = 'addListPopupBtn';
                    addListPopupBtn.classList.add('btn','popoutItem');
                    addListPopupBtn.innerHTML = '+';
                    addListInputContainer.append(addListPopupBtn);
    
        //Add date popout items
        let calendar = document.createElement('input');
            calendar.type = 'datetime-local';
            calendar.id = 'calendar';
            calendar.classList.add('popoutItem');
            addListInputContainer.append(calendar)
*/



    base.append(menuBarContainer);
    base.append(taskAndListContainer);
};