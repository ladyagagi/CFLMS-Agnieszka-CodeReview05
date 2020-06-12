$(document).ready(function(){

	const allMovies = JSON.parse(movies);

	for (var i=0; i<allMovies.length; i++) {

		let description = allMovies[i].description;

		let movie = `<div class="movieBox"> 
						<img src="${allMovies[i].image}">
						<div class="movieInfo"> 
								<div>
									<h4>  ${allMovies[i].title} </h4>
									<br>
									<p class="description"> ${allMovies[i].description}</p>
								</div>
								<div class="movieLikeContainer">
									<div class="movieLikeCounter"> 
										<p class="movieLike">Like</p>
										<p class="likeImg">&#xf087;</p>
									</div>
									<div>
										<div class="counterBox"></div>
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


});

