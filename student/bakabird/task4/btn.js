/*
//  btn_cube 
//      @events click
*/
let btn_cube = document.getElementsByClassName("dashbd__btn--cube")[0];

btn_cube.addEventListener("click", function() {
    // the game list slide outside from right
    const game_list = document.getElementsByClassName("gamestudio")[0];
    game_list.style.left = "0px";

    // when touch the dashbd 
    // game_list will slide inside
    const dashbd = document.getElementsByClassName("dashbd")[0];
    dashbd.addEventListener("click", closeList, true)
});

function closeList() {
    const dashbd = document.getElementsByClassName("dashbd")[0];
    const game_list = document.getElementsByClassName("gamestudio")[0];
    game_list.style.left = "";
    dashbd.removeEventListener("click", closeList);
}

/*
//  gamestudio__next(btn_next)
//      @events click
*/
let gamestudio__next = document.getElementsByClassName("gamestudio__next")[0];

gamestudio__next.addEventListener("click", function() {
    List = new game_list();
    List.UP();
}, true)


function game_list() {
    this.last = document.getElementsByClassName("gamestudio__list-last")[0];
    this.next = document.getElementsByClassName("gamestudio__list-next")[0];
    this.now = document.getElementsByClassName("gamestudio__list-now")[0];
    this.UP = function() {

        // kill 'last'
        const body = document.getElementsByClassName("gamestudio__lists")[0];
        body.removeChild(this.last);

        // move 'next' & 'now'
        this.now.classList.remove("gamestudio__list-now");
        this.now.classList.add("gamestudio__list-last");
        this.next.classList.remove("gamestudio__list-next");
        this.next.classList.add("gamestudio__list-now");

        // creat new 'next'
        const newNext = document.createElement("div");
        newNext.classList.add("gamestudio__list");
        newNext.classList.add("gamestudio__list-next");
        body.appendChild(newNext);

        // flash
        this.flash();
    };
    this.flash = function() {
        this.last = document.getElementsByClassName("gamestudio__list-last")[0];
        this.next = document.getElementsByClassName("gamestudio__list-next")[0];
        this.now = document.getElementsByClassName("gamestudio__list-now")[0];
    };
}