(function() {
     function AlbumCtrl(Fixtures, SongPlayer, Metric, $rootScope) {
      console.log($rootScope.songPlays);
      console.log($rootScope.registerAlbum);
      this.albumData = Fixtures.getAlbum();
      this.songPlayer = SongPlayer;
      this.Metric = Metric;
      }

     angular
         .module('gorillaMus')
         .controller('AlbumCtrl', ['Fixtures','SongPlayer', 'Metric', '$rootScope', AlbumCtrl]);
 })();
