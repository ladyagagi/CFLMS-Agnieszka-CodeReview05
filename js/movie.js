$(document).ready(function(){

	const allMovies = JSON.parse(movies);

	for (var i=0; i<allMovies.length; i++) {

		let description = allMovies[i].description;
		like = Math.floor(Math.random()* 100);

		let movie = `<div class="movieBox"> 
						<div class="mainImg">
							<img src="${allMovies[i].image}">
						</div>
						<div class="movieInfo"> 
								<div>
									<h3>  ${allMovies[i].title} </h3>
									<br>
									<p class="description"> ${allMovies[i].description}</p>
								</div>
								<div class="movieLikeContainer">
									<div class="movieLikeCounter"> 
										<p class="movieLike">Like</p>
										<p class="likeImg">
											<img src="img/like.png" alt=""</p>
									</div>
									<div>
										<div id="key" class="counterBox">${like}</div>
									</div> 
								</div> 
						</div>		
					</div>`

		$('#moviesContainer').append(movie);				
}

var movieLikeCounter = $('.movieLikeCounter');
var countNum = $('.counterBox');

for ( let i = 0; i < movieLikeCounter.length; i++) {
	$(movieLikeCounter[i]).on('click', countUp);
		
	function countUp(){
		countNum[i].innerHTML++;
	}
}

$('#sort').click(sortClick);

function sortClick (){
// 	for ( let i = 0; i < countNum.length; i++) {
		console.log(123);
};

sortClick();

});

//var wert = document.querySelector(".counterBox")

// function zeigWert () {
// 	var zeigWert = document.querySelector(".counterBox").getAttribute



// console.log(zeigWert); }

//



// var = []

