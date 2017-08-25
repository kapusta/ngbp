(function(angular){
  'use strict';

  /**
    @name movieService
    @memberof ngbp
    @ngdoc factory
    @description provides list of movies and functions for altering list
  */
  angular.module('ngbp').factory('MovieService', function() {
    var movieService = {};

    movieService.list = [
      {
        title: 'Wonder Woman',
        releaseDate: 'June 2, 2017',
        genre: 'Fantasy/Science fiction',
        rating: 'PG-13',
        reviews: [

            {
              name: 'Molly Freeman',
              worth: 15.00,
              thoughts: 'Born to play the role of "Wonder Woman", Gadot ' +
              'proves that women can be fierce and loyal, as well as ' +
              'empathetic, in director Patty Jenkins\' epic, satisfying ' +
              'origin story.'
            },
            {
            name: 'David Edelstein',
            worth: 6.02,
            thoughts: 'The gushing reviews of Wonder Woman suggest that ' +
            'people are grading on a big curve, but the limpness of the ' +
            'storytelling is certainly preferable to the whacking pacing of ' +
            'other movies of its ilk.'
          }
        ]
      },
      {
        title: 'Spider-Man: Homecoming',
        releaseDate: 'July 7, 2017',
        genre: 'Fantasy/Science fiction',
        rating: 'PG-13',
        reviews: [
          {
            name: 'Nick De Semlyn',
            worth: 11.00,
            thoughts: 'The characters and scenarios are familiar, but ' +
            'this is a loose, cool, funny remix that makes them feel ' +
            'fresh again. Plus, it’s mercifully short on life lessons from ' +
            'Aunt May.'
          }
        ]
      },
      {
        title: 'War for the Planet of the Apes',
        releaseDate: 'July 14, 2017',
        genre: 'Science fiction/Drama',
        rating: 'PG-13',
        reviews: [
          {
            name: 'James Dyer',
            worth: 12.00,
            thoughts: 'Apes together strong. And, thanks to an evocative ' +
            'story and the most realistic anthropoids you’ll find outside ' +
            'a zoo, this third Apes is the strongest yet.'
          }
        ]
      },
      {
        title: 'Get Out',
        releaseDate: 'February 24, 2017',
        genre: 'Mystery/Thriller',
        rating: 'R',
        reviews: [
          {
            name: 'David Sims',
            worth: 14.76,
            thoughts: 'Get Out is an extremely confident debut feature ' +
            'for Peele, one steeped in the language of horror cinema rather ' +
            'than merely copying it.'
          },
          {
            name: 'Ann Hornada',
            worth: 12.00,
            thoughts: 'Like all great movies, “Get Out” faithfully obeys the ' +
            'conventions of its genre — in this case horror films shot ' +
            'through with brutal wit and sharp-eyed allegory.'
          },
          {
            name: 'Manohla Dargis',
            worth: 10.50,
            thoughts: 'Get Out smartly balances its tones to provide ' +
            'viewers with an entertaining and clever satire that is equal ' +
            'parts funny and terrifying.'
          }
        ]
      },
      {
        title: 'The Fate of the Furius',
        releaseDate: 'April 14, 2017',
        genre: 'Crime/Thriller',
        rating: 'PG-13',
        reviews: []
      },
      {
        title: 'Cars 3',
        releaseDate: 'June 16, 2017',
        genre: 'Sport/Action',
        rating: 'G',
        reviews: [
          {
            name: 'Sandie Angulo Chen',
            worth: 15.00,
            thoughts: 'This "threequel" promotes the idea that girls can ' +
            '(and should!) do anything they set out to accomplish and that ' +
            'there\'s something special about the mentor/protégé bond'
          },
          {
            name: 'Sandie Angulo Chen',
            worth: 8.00,
            thoughts: 'An exceedingly sweet and polished fable that unfolds ' +
            'with a kid-friendly, by-the-book emotional directness'
          }
        ]
      }
    ];

    movieService.getMovie = function(title) {
      for(var i = 0; i < movieService.list.length; i++) {
        var movie = movieService.list[i];

        if(movie.title === title) {
          return movie;
        }
      }
    };

    movieService.addMovie = function(title, releaseDate, genre, rating) {
      var newMovie = {
        title: title,
        releaseDate: releaseDate,
        genre: genre,
        rating: rating,
        reviews: []
      };

      movieService.list.push(newMovie);
    };

    return movieService;
  });

}(window.angular));
