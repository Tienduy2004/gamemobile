const khung = document.getElementById("khung");
const dstron = document.getElementsByClassName("tron");
const diem = document.getElementById("diem");
const start = document.getElementById("start");
const thoigian = document.getElementById("thoigian");
const ketthuc = document.getElementById("ketthuc");
const Refresh = document.getElementsByClassName("Refresh");
const khunga = document.querySelector("khung");
let soCanTim = 1;
function taoDanhSach(){
    for (let index = 30; index >= 1; index--) {
        khung.innerHTML += '<div class="tron">'+index+'</div>';
        
    }
}
function thaydoivitri() {
    for (let index = 0; index < dstron.length; index++) {
        const element = dstron[index];
        if(window.innerHeight <= 450 && window.innerWidth <= 750)
        {
            
            element.style.top = laySoNgauNhien(0,300-20)+"px";
            element.style.left = laySoNgauNhien(0,450 -20)+"px";
        }
        else{
            element.style.top = laySoNgauNhien(0,350-20)+"px";
            element.style.left = laySoNgauNhien(0,500 -20)+"px";
        }
       
        
    }
}
function laySoNgauNhien(min,max) {
    return Math.floor(Math.random() * (max - min)+min);
}

function tinhDiem(){
    for (let index = 0; index < dstron.length; index++) {
        const element = dstron[index];
        element.onclick = function(){
            if(element.innerHTML == soCanTim)
            {
                diem.innerHTML = parseInt(diem.innerHTML) + 5;
                soCanTim++;
                element.style.background = "red";
                element.style.zIndex = -1;
            }
        }
        
    }
}

function batDau(){
    
    taoDanhSach();
    thaydoivitri();
    tinhDiem();
    setTimeout(hetGio,60000);
    demGio();
}
function hetGio(){
    
    ketthuc.innerHTML += '<div id="hetgio"></div>';
    ketthuc.innerHTML += '<button Class="Refresh">Refresh</button>';
    const element = Refresh[0];
    element.onclick = function(){
        window.location.reload();
    }
}
function demGio(){
    let time = 60;
    const myInterval = setInterval(function(){
        time--;
        thoigian.innerHTML = time;
        if(thoigian.innerHTML == 0)
        {
            clearInterval(myInterval);
        }
        
    },1000);
    
}
start.onclick = batDau;

