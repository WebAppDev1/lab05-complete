'use strict';

import _ from 'lodash';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const playlistCollection = require("./playlist-store.json");
            
const playlistStore = {

  // import the playlist collection object
  playlistCollection: playlistCollection.playlistCollection,

  // function to get all of the playlists
  getAllPlaylists() {
    return this.playlistCollection;
  },
  
  getPlaylist(id) {
    return _.find(this.playlistCollection, { id: id });
  },
  
  removeSong(id, songId) {
    const playlist = this.getPlaylist(id);
    _.remove(playlist.songs, { id: songId });
  },
  
  removePlaylist(id) {
    _.remove(this.playlistCollection, { id: id });
  },

};

// export the playlistStore object so it can be used elsewhere
export default playlistStore;