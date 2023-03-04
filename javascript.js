function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    
    if (hrs>12){
        hrs=hrs-12
    }
    if (hrs<10){
        hrs="0"+String(hrs)
    }
    if (min<10){
        min='0'+String(min)
    }
    

    document.getElementById('hrs').innerHTML = hrs;
    document.getElementById('mins').innerHTML = min;
    
}
setInterval(displayTime, 10);

function date(){
    var date=new Date();
    var dd=date.getDate();
    var mm=date.getMonth();
    var yy=date.getFullYear();

    if (dd<10) {
        dd='0'+String(dd)
    }
    if (mm<10){
        mm='0'+String(mm)
    }

    var f_date=dd+'/'+mm+'/'+yy
    document.getElementById('date').innerHTML=f_date;
}
setInterval(date,10);