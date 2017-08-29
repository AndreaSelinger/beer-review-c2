var beers = [];
var beerObject = {};

$('.post-beer').on('click', function () {
    
    var name = $('.beer-input').val();
    var category = $('.category-input').val();
    var rating = $('#RateBeer option:selected').text();

    var addBeer = function (name, category,rating) {

        beerObject = {
            name: name,
            category:category,
            rating: rating
        }
    
        beers.push(beerObject);

    }
    var updateBeers =function(){
        $("ul").empty();
        for(i=0;i<beers.length;i++) {
            $('.beers-list').append('<li>' + beers[i].name + ', ' + beers[i].category + ', ' + beers[i].rating + '</li>');
        }
    }
    addBeer(name, category,rating);
    updateBeers();
})

$("#ulSuperHeroes").children("li").sort(function (a, b) {
    return $(a).val() - $(b).val();

})

