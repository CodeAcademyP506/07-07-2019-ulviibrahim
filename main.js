var emptyDiv = document.getElementsByClassName("emptyDiv");

for (let i = 0; i < emptyDiv.length; i++) {

}


var flags = [
    { Azerbaycan: ["blue", "red", "green", "Azerbaycan"] },
    { tr: ["red", "red", "red", "Turkiye"] },
    { rus: ["white", "blue", "red", "Rusiya"] },
    { ger: ["black", "red", "orange", "Almaniya"] },
]

console.log(flags[0].Azerbaycan[1])

// for(let i=0;i<flags[0].az.length;i++){

//    console.log( flags[0].az[i])
// }



var colors = document.getElementsByClassName("colors");

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("dragstart", myDragStart)
}

var emptyDiv = document.querySelectorAll(".emptyDiv");

for (let i = 0; i < emptyDiv.length; i++) {
    emptyDiv[i].addEventListener("dragenter", myDragEnter);
    emptyDiv[i].addEventListener("dragleave", myDragleave);
    emptyDiv[i].addEventListener("dragover", myDragOver);
    emptyDiv[i].addEventListener("drop", myDragDrop)
}

function myDragEnter(e) {
    e.preventDefault()
}

function myDragleave(e) {
    e.preventDefault()
}

function myDragOver(e) {
    e.preventDefault()
}


function myDragStart(e) {
    e.dataTransfer.setData("c", e.target.style.backgroundColor);

    // $(".colorsFlag").remove(flagname)
}
var li = document.getElementsByTagName("li")
for (let i = 0; i < li.length; i++) {

}


$(".colors").mouseover(function () {
    $(".colorsFlag").find("span").html(" ")

})



function myDragDrop(e) {
    e.target.style.backgroundColor = e.dataTransfer.getData("c")
    if (emptyDiv[0].style.backgroundColor == flags[0].Azerbaycan[0] && emptyDiv[1].style.backgroundColor == flags[0].Azerbaycan[1] && emptyDiv[2].style.backgroundColor == flags[0].Azerbaycan[2]) {
        //   $(flagname).html( flags[0].Azerbaycan[3])  
        var flagname = $("<span class='flagname'>  Tebrikler siz " + li[0].innerText + " Bayragini duzelde bildiniz </span>")

        $(".colorsFlag").append(flagname)
        $(flagname).addClass("alert")
        console.log(li[0])
        $(li[0]).css(
            {
                "text-decoration": "line-through",
                "color": "green"

            })
    
    }

    if (emptyDiv[0].style.backgroundColor == flags[1].tr[0] && emptyDiv[1].style.backgroundColor == flags[1].tr[1] && emptyDiv[2].style.backgroundColor == flags[1].tr[2]) {
        //   $(flagname).html( flags[0].Azerbaycan[3]) 
        var flagname = $("<span class='flagname'>  Tebrikler siz " + li[1].innerText + " Bayragini duzelde bildiniz </span>")

        $(".colorsFlag").append(flagname)
        $(flagname).addClass("alert")
        console.log(li[0])
        $(li[1]).css(
            {
                "text-decoration": "line-through",
                "color": "green"

            })



    }


    if (emptyDiv[0].style.backgroundColor == flags[2].rus[0] && emptyDiv[1].style.backgroundColor == flags[2].rus[1] && emptyDiv[2].style.backgroundColor == flags[2].rus[2]) {
        //   $(flagname).html( flags[0].Azerbaycan[3]) 
        var flagname = $("<span class='flagname'>  Tebrikler siz " + li[2].innerText + " Bayragini duzelde bildiniz </span>")

        $(".colorsFlag").append(flagname)
        $(flagname).addClass("alert")
        $(li[2]).css(
            {
                "text-decoration": "line-through",
                "color": "green"

            })

    }
    if (emptyDiv[0].style.backgroundColor == flags[3].ger[0] && emptyDiv[1].style.backgroundColor == flags[3].ger[1] && emptyDiv[2].style.backgroundColor == flags[3].ger[2]) {
        //   $(flagname).html( flags[0].Azerbaycan[3]) 
        var flagname = $("<span class='flagname'>  Tebrikler siz " + li[3].innerText + " Bayragini duzelde bildiniz </span>")

        $(".colorsFlag").append(flagname)
        $(flagname).addClass("alert")
        console.log(li[0])
        $(li[3]).css(
            {
                "text-decoration": "line-through",
                "color": "green"

            })

    }

    if ($(li[0]).css("color") == "rgb(0, 128, 0)" && $(li[1]).css("color") == "rgb(0, 128, 0)" && $(li[2]).css("color") == "rgb(0, 128, 0)" && $(li[3]).css("color") == "rgb(0, 128, 0)") {
        var img = $(" <img src='img1.png'>")
        img.addClass("won")
        $(".flag").html("    <span class= 'timeout'> Cavabiniz yoxlanilir...</span>")
        setTimeout(function () {
            $(".flag").html(img).css("background-color", "white")


        }, 4000);
    }


}


$(li[0]).click(function () {
    emptyDiv[0].style.backgroundColor = "blue"
    $(li[0]).click(function () {
        emptyDiv[1].style.backgroundColor = "red"
        $(li[0]).click(function () {
            emptyDiv[2].style.backgroundColor = "green"
            var flagname = $("<span class='flagname'>  Cox teessuf siz " + li[0].innerText + " Bayragini duzelde bilmediniz </span>")

            $(".colorsFlag").append(flagname)
            $(flagname).addClass("alertwrong")
            console.log(li[0])
            $(li[0]).css(
                {
                    "text-decoration": "line-through",
                    "color": "red"
    
                })
        })
    })
})

$(li[1]).click(function () {
    emptyDiv[0].style.backgroundColor = "red"
    
    $(li[1]).click(function () {
        emptyDiv[1].style.backgroundColor = "red"
        $(li[1]).click(function () {
            emptyDiv[2].style.backgroundColor = "red"
            var flagname = $("<span class='flagname'>  Cox teessuf siz " + li[1].innerText + " Bayragini duzelde bilmediniz </span>")

            $(".colorsFlag").append(flagname)
            $(flagname).addClass("alertwrong")
            console.log(li[1])
            $(li[1]).css(
                {
                    "text-decoration": "line-through",
                    "color": "red"
    
                })
        })
    })
})

$(li[2]).click(function () {
    emptyDiv[0].style.backgroundColor = "white"
    $(li[2]).click(function () {
        emptyDiv[1].style.backgroundColor = "blue"
        $(li[2]).click(function () {
            emptyDiv[2].style.backgroundColor = "red"
            var flagname = $("<span class='flagname'>  Cox teessuf siz " + li[2].innerText + " Bayragini duzelde bilmediniz </span>")

            $(".colorsFlag").append(flagname)
            $(flagname).addClass("alertwrong")
            console.log(li[2])
            $(li[2]).css(
                {
                    "text-decoration": "line-through",
                    "color": "red"
    
                })
        })
    })
})

$(li[3]).click(function () {
    emptyDiv[0].style.backgroundColor = "black"
    $(li[3]).click(function () {
        emptyDiv[1].style.backgroundColor = "red"
        $(li[3]).css("color", "rgb(255, 254, 254)")
        $(li[3]).click(function () {
            emptyDiv[2].style.backgroundColor = "orange"
            var flagname = $("<span class='flagname'>  Cox teessuf siz " + li[3].innerText + " Bayragini duzelde bilmediniz </span>")

            $(".colorsFlag").append(flagname)
            $(flagname).addClass("alertwrong")
            console.log(li[2])
            $(li[3]).css(
                {
                    "text-decoration": "line-through",
                    "color": "red"
    
                })
        })
    })
})



$(li).mouseover(function () {
    $(".colorsFlag").find("span").hide()

})
for(let i=0;i<li.length;i++){
    $(li).on("click",$(li[i]),function(){
        var count=0

        console.log(count++)
        if($(li[0]).css("color") == "rgb(255, 0, 0)"&&$(li[1]).css("color") == "rgb(255, 0, 0)"&&$(li[2]).css("color") == "rgb(255, 0, 0)"&&$(li[3]).css("color") == "rgb(255, 254, 254)"  )  {
    setTimeout(function(){
        $(".flag").html("    <span class= 'timeout'> Cavabiniz yoxlanilir...</span>")
    },3000)
            var img = $(" <img src='img1.png'>")
            img.addClass("won")
           
            setTimeout(function () {
                $(".flag").html("<span class= 'timeout'> Siz cox zeif Netice gosterdiniz </span>")
        
        
            }, 6000);
        }
    })


}


