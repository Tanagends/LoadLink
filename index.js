const contacts = [
    {
        id:'c-1',
        name:'email',
        icon:'envelope',
        link:'loadlink@gmail.com',
    },
    {
        id:'c-2',
        name:'instagram',
        icon:'instagram',
        link:'loadlink_official'
    },
    {
        id:'c-3',
        name:'facebook',
        icon:'facebook',
        link:'loadlink_official'
    },
    {
        id:'c-3',
        name:'whatsapp',
        icon:'whatsapp',
        link:'https://wa.me/263777888999'
    },
    {
        id:'c-4',
        name:'phone',
        icon:'phone-vibrate',
        link:'263777888999'
    }
];

const contactsContainer = document.getElementById('contact');
const footer = document.getElementById('footer-links');
const copy = document.getElementById('copyright'); 
const date = new Date().getFullYear();
copy.innerHTML = `&copy; ${date} Loadlink`;
let sidebar = document.getElementById('sidebar');

contacts.map((item) => {
    //rendering items on the contact us page
    let contContainer = document.createElement('div');
    contContainer.id = item.id;
    contContainer.className = 'article cont-container';
    let linkContainer = document.createElement('a');
    let detailContainer = document.createElement('div');
    let link = document.createElement('p');
    link.innerHTML = item.link;
    let name = document.createElement('h1');
    name.innerHTML = item.name;
    linkContainer.href = item.link;
    let linkIcon = document.createElement('i');
    linkIcon.className = `bi bi-${item.icon}`;
    linkContainer.appendChild(linkIcon);
    contContainer.appendChild(linkContainer);
    detailContainer.appendChild(name);
    detailContainer.appendChild(link);
    contContainer.appendChild(detailContainer);
    contactsContainer.appendChild(contContainer);
    
    //for footer
    let a = document.createElement('a');
    a.innerHTML = item.name;
    a.className = `bi bi-${item.icon} footer-list-item`;
    a.href = item.link;
    footer.appendChild(a);
})

const handleMenu = ()=> {
    if(sidebar.className == 'sidebar sidebar-hide'){
        sidebar.className = 'sidebar sidebar-show';
    }
    else{
        sidebar.className = 'sidebar sidebar-hide';
    }
}


const addForm = document.getElementById('footer');
const form = document.getElementById('form');
addForm.removeChild(form);

const getStarted = (action) => {
    if(action == 'true') addForm.appendChild(form);
    if(action == 'false' || action == "cancel" || action == "submit") addForm.removeChild(form);
}