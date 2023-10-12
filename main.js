//change navbar styles on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>100)
})

//show/hide faq answer
const faqs=document.querySelectorAll('.faq')
faqs.forEach(faq => {
const answer = faq.querySelector('.question_answer');
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        answer.classList.toggle('open'); 


        //change icon
        const icon=faq.querySelector('.faq_icon i')
        if(icon.className ==='uil uil-plus'){
            icon.className='uil uil-minus'
        }
        else{
            icon.className='uil uil-plus'
        }
    })
});


//hide/show the menu
const menu=document.querySelector('.nav_menu')
const menuBtn=document.querySelector('#open-menu-btn')
const closeBtn=document.querySelector('#close-menu-btn')
menuBtn.addEventListener('click',()=>{
    menu.style.display='flex'
    closeBtn.style.display='inline-block'
    menuBtn.style.display='none'
})

//close nav menu
const closeNav=()=>{
    menu.style.display='none'
    closeBtn.style.display='none'
    menuBtn.style.display='inline-block'
}
closeBtn.addEventListener('click',closeNav)



//add courses in courses page
let courses=[
    {
        img:'./images/1.jpg',
        title:'Resonsive SmartHome Website Design',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non hic iusto reprehenderit unde veniam magnam? '
    },
    {
        img:'./images/2.jpg',
        title:'Responsive Social Media Website UI Design',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non hic iusto reprehenderit unde veniam magnam? '
    },
    {
        img:'./images/3.jpg',
        title:'Responsive Admin Dashboard UI Design',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non hic iusto reprehenderit unde veniam magnam? '
    },
    {
        img:'./images/4.jpg',
        title:'Responsive Food Website UI Design',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non hic iusto reprehenderit unde veniam magnam? '
    },  
    {
        img:'./images/5.jpg',
        title:'Let\'s Make 30 Website!',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non hic iusto reprehenderit unde veniam magnam? '
    }, 
    {
        img:'./images/6.jpg',
        title:'Responsive Website',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non hic iusto reprehenderit unde veniam magnam? '
    },
    {
        img:'./images/7.jpg',
        title:'Dashboard UI Design',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non hic iusto reprehenderit unde veniam magnam? '
    },
    {
        img:'./images/8.jpg',
        title:'Responsive UI/UX Design',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non hic iusto reprehenderit unde veniam magnam? '
    },
    {
        img:'./images/9.jpg',
        title:'Website UI/UX Design',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non hic iusto reprehenderit unde veniam magnam? '
    }, 
    {
        img:'./images/10.jpg',
        title:'Responsive Protofile Website',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non hic iusto reprehenderit unde veniam magnam? '
    },
    {
        img:'./images/11.jpg',
        title:'Improve Website UX',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non hic iusto reprehenderit unde veniam magnam? '
    },
    {
        img:'./images/12.jpg',
        title:'UX/UI Designs',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non hic iusto reprehenderit unde veniam magnam? '
    },
    {
        img:'./images/13.jpg',
        title:'UX/UI Ideas For Your Website',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non hic iusto reprehenderit unde veniam magnam? '
    },
    {
        img:'./images/14.jpg',
        title:'Responsive Website',
        desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto non hic iusto reprehenderit unde veniam magnam? '
    },   
]

const render=()=>{
    let element=``
    for(let i=0;i<courses.length;i++){
        element+=`
        <article class="course">
                    <div class="course_image">
                        <img src="${courses[i].img}">
                    </div>
                    <div class="course_info">
                        <h4>${courses[i].title}</h4>
                        <p>${courses[i].desc}</p>
                        <a href="courses.html" class=" btn btn-primary">Learn More</a>
                    </div>
        </article>`
    }
    return element;
}
document.querySelector('.courses_container').innerHTML=render();