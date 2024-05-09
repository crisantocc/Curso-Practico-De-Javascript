// Excercise: Manage a PlayList

function managePlaylist (playlist, newSong){
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const initialPlaylist = ['Sweater Weather', 'What you know', 'Eventually']
const newSongToAdd = 'The Adults Are Talking'

const updatePlaylist = managePlaylist(initialPlaylist, newSongToAdd)

console.log('Initial playlist: ', initialPlaylist)
console.log('New song to add: ', newSongToAdd)
console.log('Updated playlist: ', updatePlaylist)

