
let img_fetch = document.getElementById("img_fetch");
let name_fetch = document.getElementById("name_fetch");
let about_fetch = document.getElementById("about_fetch");
let ur_msg =document.getElementById("ur_msg");
let for_wv_ht = document.getElementById("for_wv_ht");
let for_mine_wv_ht = document.getElementById("for_mine_wv_ht");


let img2 = "./images/img2.jpg";

 let main = document.querySelector(".main"); 



function abc(){
     
     img_fetch.src = img2;
     name_fetch.innerHTML = "Reny Delvis";
     about_fetch.innerHTML = "Teacher, Stock-Trader, Writer";
     ur_msg.innerHTML = "Hi, my computer is not working since yesterday. I need the computer to reboot my Iron Man suit. Could you please help me?"
     for_wv_ht.classList.add("ur_msg_al");
     for_mine_wv_ht.classList.add("mine_wv_ht");
     for_wv_ht.classList.remove("mine1_msg");
     for_mine_wv_ht.classList.remove("mine2_msg");
     main.classList.add("active");
}


/* --- 2  ---- */

let img1 = "./images/img1.jpg";



function xyz(){
    img_fetch.src = img1;
    name_fetch.innerHTML = "John Mayers";
    about_fetch.innerHTML = "Account Manager";
    ur_msg.innerHTML = `Hi guys Ive got the O2 package and have really slow internet.
                        A speed check online said i can get 3mbps but it seems more 
                        like 0.5 these days, just freezing and taking ages to open
                        pages and open audio files for example. I have decided to switch
                        to the UPC package which offers 10mbps but do you think i will get it?`
    for_wv_ht.classList.add("mine1_msg");
    for_mine_wv_ht.classList.add("mine2_msg");
    for_wv_ht.classList.remove("ur_msg_al");
    for_mine_wv_ht.classList.remove("mine_wv_ht");
    main.classList.add("active"); 
}




/*  --- hover --- */

var links = document.querySelectorAll(".left_sub");

links.forEach(li=>{
    li.addEventListener("click",()=>{
        resetLinks();
        li.classList.add("active");
    })
})

function resetLinks(){
    links.forEach(li => {
        li.classList.remove("active")
    })
}



/*   --- remove active class --- */


let cross = document.querySelector(".cross");

cross.addEventListener('click', ()=>{
    main.classList.remove("active");
})


/* adding more functionality --- */


// 3.

let img3 = "./images/img3.jpg";

function abcd(){
     
    img_fetch.src = img3;
    name_fetch.innerHTML = "Sam Smith";
    about_fetch.innerHTML = "Singer, Musician & Song-Writer";
    ur_msg.innerHTML = "Hi, my computer is not working since yesterday. I need the computer to reboot my Iron Man suit. Could you please help me? If yes then please reply me soon as possible"
    for_wv_ht.classList.add("ur_msg_al");
    for_mine_wv_ht.classList.add("mine_wv_ht");
    for_wv_ht.classList.remove("mine1_msg");
    for_mine_wv_ht.classList.remove("mine2_msg");
    main.classList.add("active");
}


// 4.

let img4 = "./images/img4.jpg";

function abcde(){
     
    img_fetch.src = img4;
    name_fetch.innerHTML = "Steve John";
    about_fetch.innerHTML = "Frontend Devloper";
    ur_msg.innerHTML = "Hi, my computer is not working since yesterday. I need the computer to reboot my Iron Man suit. Could you please help me? "
    for_wv_ht.classList.add("ur_msg_al");
    for_mine_wv_ht.classList.add("mine_wv_ht");
    for_wv_ht.classList.remove("mine1_msg");
    for_mine_wv_ht.classList.remove("mine2_msg");
    main.classList.add("active");
}


// 5.

let img5 = "./images/img5.jpg";

function abcdef(){
     
    img_fetch.src = img5;
    name_fetch.innerHTML = "Sim Hetmayars";
    about_fetch.innerHTML = "Sports, Cricketer";
    ur_msg.innerHTML = `Hi, my computer is not working since yesterday. 
                        Could you please help me?Hi, my computer is not working since yesterday.
                        Could you please help me? Hi, my computer is not working since yesterday.
                        Could you please help me? v `
    for_wv_ht.classList.add("ur_msg_al");
    for_mine_wv_ht.classList.add("mine_wv_ht");
    for_wv_ht.classList.remove("mine1_msg");
    for_mine_wv_ht.classList.remove("mine2_msg");
    main.classList.add("active");
}

// 6.

let img6 = "./images/img6.jpg";

function abcdefg(){
     
    img_fetch.src = img6;
    name_fetch.innerHTML = "Ryan Loak";
    about_fetch.innerHTML = "Influencer";
    ur_msg.innerHTML = `Hi, my computer is not working since yesterday.
                        Could you please help me? Hi, my computer is not working 
                        since yesterday. Could you please help me Hi, my computer is 
                        not working since yesterday. Could you please help me`
    for_wv_ht.classList.add("ur_msg_al");
    for_mine_wv_ht.classList.add("mine_wv_ht");
    for_wv_ht.classList.remove("mine1_msg");
    for_mine_wv_ht.classList.remove("mine2_msg");
    main.classList.add("active");
}


// 7.

let img7 = "./images/img7.jpg";

function abcdefgh(){
     
    img_fetch.src = img7;
    name_fetch.innerHTML = "Zen Mendies";
    about_fetch.innerHTML = "Bussinessman";
    ur_msg.innerHTML = `Hi, my computer is not working since yesterday. Could you please
                        help me? Hi, my computer is not working since yesterday. Could you please help me Hi,
                        my computer is not working since yesterday. Could you please help me`
    for_wv_ht.classList.add("ur_msg_al");
    for_mine_wv_ht.classList.add("mine_wv_ht");
    for_wv_ht.classList.remove("mine1_msg");
    for_mine_wv_ht.classList.remove("mine2_msg");
    main.classList.add("active");
}


// 8.

let img8 = "./images/img8.jpg";

function abcdefghi(){
     
    img_fetch.src = img8;
    name_fetch.innerHTML = "Charlie Puth";
    about_fetch.innerHTML = "Singer & Composer";
    ur_msg.innerHTML = `Hi, my computer is not working since yesterday. Could you please
                        help Could you please help Could you please help  Could you please help  me? Hi, my 
                        computer is not working since yesterday. Could you please help me Hi, my computer is 
                        not working since yesterday. Could you please help me`
    for_wv_ht.classList.add("ur_msg_al");
    for_mine_wv_ht.classList.add("mine_wv_ht");
    for_wv_ht.classList.remove("mine1_msg");
    for_mine_wv_ht.classList.remove("mine2_msg");
    main.classList.add("active");
}