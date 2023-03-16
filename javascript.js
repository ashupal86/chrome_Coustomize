
// CLOCK TIME FUNCTION
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    
    if (hrs>12){
        hrs=(hrs-12)
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

// CLOCK DATE FUNCTION
function date(){
    var date=new Date();
    var dd=date.getDate();
    var mm=date.getMonth();
    var yy=date.getFullYear();

    if (dd<10) {
        
        dd=String(dd)
    }
    if (mm<10){
        mm='0'+String(mm)
    }

    var f_date=dd+'/'+mm+'/'+yy
    document.getElementById('date').innerHTML=f_date;
}
setInterval(date,10);

// DAY FUNCTION IS HERE
function day(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let days = weekday[d.getDay()];

    document.getElementById('day1').innerHTML=days.toUpperCase();
}
setInterval(day,10);


// Quote function is here
function quote(){
    const quotes=["If the highest aim of a captain were to preserve his ship, he would keep it in port forever.' —Thomas Aquinas","More is lost by indecision than wrong decision.'—Marcus Tullius Cicero","“Relentlessly prune bullshit, don't wait to do things that matter, and savor the time you have. That's what you do when life is short.” —Paul Graham","“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” —Dale Carnegie","“Courage is like a muscle. We strengthen it by use.” —Ruth Gordo","“If there is no struggle, there is no progress.” —Frederick Douglass","“The best way out is always through.” ―Robert Frost","“If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.” —Tobias Lütke","“I have stood on a mountain of no’s for one yes.” —Barbara Elaine Smith","“Don't bunt. Aim out of the ballpark. Aim for the company of immortals.” ―David Ogilvy","“Show up, show up, show up, and after a while the muse shows up, too.” —Isabel Allende","“Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had.” —Angela Bassett","“Inspiration does exist, but it must find you working.” —Pablo Picasso","'Imagine a movie where main character\nsits and do nothing  Now, look at you'","“You can get everything in life you want if you will just help enough other people get what they want.” —Zig Ziglar","'There is no Tommorow so get up and do it now'","'Give your 110% now so you wont\nregret later on'"];
    const rand=Math.round(Math.random()*(quotes.length-1))
    

    
    document.getElementById('Quote').innerHTML=quotes[rand];
}


setInterval(quote,10000);



function bigclock(){
    location.href="bigger_clock.html"
}

function start(){
    let name=window.prompt("Enter Shortcut name: ")
    let url=window.prompt("Enter URL:")
    if (name=="" || url=="" ){
        window.alert("Canceled") }
    else{
        document.writeln(' <a href="'+url+'" id="new_pin_item"><img src="'+url+'/favicon.ico"  alt="">'+name+'</a>')
    }
    
}




