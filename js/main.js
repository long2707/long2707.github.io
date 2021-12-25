document.onclick= (e)=>{
    if(e.target.closest('.select')){
        document.querySelector('.select__category').classList.toggle('active');
    }
    else{
        document.querySelector('.select__category').classList.toggle('active', false);
    }
}
// count down

const countDOwndate= new Date("jul 27, 2022 00:00:00").getTime();

const d = setInterval(()=>{
    const now= new Date().getTime();
    const distance= countDOwndate- now;
    const days= Math.floor(distance/ (1000 *60 *60 *24));
    const hours= Math.floor((distance % (1000 * 60 * 60 *60))/(1000*60*60));
    const minters= Math.floor((distance % (1000 * 60 *60))/(1000*60));
    const seconds= Math.floor((distance%(1000*60))/ 1000);

    document.getElementById("date-sale").innerHTML= days+ 'd : '+ hours+ 'h : '+ minters+'m : '+ seconds+ 's';
}, 1000)


const $$ = document.querySelector.bind(document);
const $$$= document.querySelectorAll.bind(document);

const tabs= $$$('.orderby-item');
const panes= $$$('.products-item');

tabs.forEach((tab, index)=>{
    const pane= panes[index];
    tab.onclick= ()=>{
 $$(".orderby-item.active").classList.remove('active');
    $$(".products-item.active").classList.remove('active');

    
       tab.classList.add('active');
       pane.classList.add("active");
    }
   
});

// scroll

window.onscroll= ()=>{
    btn__scroll();
}
 function btn__scroll(){
     if(document.body.scrollTop >100|| document.documentElement.scrollTop>100){
         document.getElementById('btn__scroll').style.display='block';
     }
     else{
        document.getElementById('btn__scroll').style.display='none';
     }
     document.getElementById('btn__scroll').addEventListener('click', ()=>{
         document.body.scrollTop=0;
         document.documentElement.scrollTop=0;
     })
 }
function form__account(){
      $$(".form__add").style.display='block';
      document.body.style.overflow='hidden';
}

 const login= document.getElementById('loginForm');
 const reg= document.getElementById('registerForm');
const Indicator= document.getElementById('Indicator');
 function loginform(){
    login.style.transform="translateX(300px)";
    reg.style.transform="translateX(300px)";
    Indicator.style.transform="translateX(13px)";
    Indicator.style.width= 65 +'px';
 }
 function regform(){
    login.style.transform="translateX(0px)";
    reg.style.transform="translateX(0px)";
    Indicator.style.transform="translateX(112px)";
    Indicator.style.width= 80 +'px';
 }
 $$('.form__account').onclick= ()=>{
     $$('.form__add').style.display='none';
     document.body.style.overflow='scroll';
 }