const express = require('express')
const app = express();
const port = 2501;
const music = [
  {
    Title: 'Favour',
    Artist: 'Lawrence Oyor',
    Duration: '05:57',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e02931593c6f66316f731e5055b',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1034444642'
  },
  {
    Title: 'Onu Amonu',
    Artist: 'Theophilus Sunday',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'Time for Shifts',
    Artist: 'Godswill Oyor',
    Duration: '04:22',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e02f2323f6e1f9a1f2f3f4f5f6',
    Link: 'https://www.google.com/search?q=https://apple.co/godswill-oyor'
  },
  {
    Title: 'Eagles Flight',
    Artist: 'Lawrence Oyor ft. Theophilus Sunday',
    Duration: '08:34',
    Image: 'https://www.google.com/search?q=https://i.ytimg.com/vi/qYJvO0B6D7U/maxresdefault.jpg',
    Link: 'https://www.google.com/search?q=https://youtube.com/watch%3Fv%3DqYJvO0B6D7U'
  },
  {
    Title: 'Out of My Belly',
    Artist: 'Prospa Ochimana & Theophilus Sunday',
    Duration: '14:24',
    Image: 'https://www.google.com/search?q=https://i1.sndcdn.com/artworks-000600123.jpg',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/80123456'
  },
  {
    Title: 'Alignment Chant',
    Artist: 'Lawrence Oyor',
    Duration: '13:31',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e02888c001',
    Link: 'https://www.google.com/search?q=https://deezer.com/album/150000'
  },
  {
    Title: 'I Will Not Trade',
    Artist: 'Theophilus Sunday',
    Duration: '10:58',
    Image: 'https://www.google.com/search?q=https://i.ytimg.com/vi/theophilus/hqdefault.jpg',
    Link: 'https://www.google.com/search?q=https://audiomack.com/song/theophilus'
  },
  {
    Title: 'Adua Ke',
    Artist: 'Lawrence & Godswill Oyor',
    Duration: '05:00',
    Image: 'https://www.google.com/search?q=https://i.ytimg.com/vi/aduake/maxresdefault.jpg',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/160000'
  },
  {
    Title: 'Jugular Jugular',
    Artist: 'Lawrence Oyor ft. Greatman Takit',
    Duration: '04:36',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/jugular-art',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/295000'
  },
  {
    Title: 'Earthen Vessel',
    Artist: 'Theophilus Sunday',
    Duration: '20:43',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/theophilus-earthen',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/110000'
  },
  {
    Title: 'Rain of Favour',
    Artist: 'Lawrence & Godswill Oyor',
    Duration: '06:15',
    Image: 'hhttps://www.google.com/search?q=https://i.ytimg.com/vi/rainfavour/hqdefault.jpg',
    Link: 'https://www.google.com/search?q=https://apple.co/lawrence-oyor'
  },
  {
    Title: 'Holy Ghost Come',
    Artist: 'Theophilus Sunday',
    Duration: '15:35',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/hg-come',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/330000'
  },
  {
    Title: 'Stone of Help',
    Artist: 'Godswill Oyor ft. Nathaniel Bassey',
    Duration: '07:12',
    Image: 'https://www.google.com/search?q=https://i.ytimg.com/vi/stonehelp/hqdefault.jpg',
    Link: 'https://www.google.com/search?q=https://apple.co/stone-of-help'
  },
  {
    Title: 'My Daddy My Daddy',
    Artist: 'Lawrence Oyor',
    Duration: '13:32',
    Image: 'https://www.google.com/search?q=https://i.ytimg.com/vi/mydaddy/maxresdefault.jpg',
    Link: 'https://www.google.com/search?q=https://youtube.com/watch%3Fv%3Dmydaddy'
  },
  {
    Title: 'I Praise You',
    Artist: 'O’Tims ft. Godswill Oyor',
    Duration: '08:24',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/praise-you',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/440000'
  },
  {
    Title: 'Tongues of Glory',
    Artist: 'Theophilus Sunday',
    Duration: '03:55',
    Image: 'https://www.google.com/search?q=https://i.ytimg.com/vi/tongues/hqdefault.jpg',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/550000'
  },
  {
    Title: 'Burn the World',
    Artist: 'Lawrence & Godswill Oyor',
    Duration: '09:20',
    Image: 'https://www.google.com/search?q=https://i.ytimg.com/vi/burntheworld/hqdefault.jpg',
    Link: 'https://www.google.com/search?q=https://youtube.com/watch%3Fv%3D8ZAclxmv9xE'
  },  
  {
    Title: 'Adullam Chants',
    Artist: 'Theophilus Sunday',
    Duration: '04:33',
    Image: 'https://www.google.com/search?q=https://i.ytimg.com/vi/adullam/hqdefault.jpg',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/660000'
  },
  {
    Title: 'Joy on My Account',
    Artist: 'Lawrence Oyor',
    Duration: '09:07',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/joy-account',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/770000'
  },
  {
    Title: 'I Have Escaped',
    Artist: 'Lawrence Oyor',
    Duration: '05:45',
    Image: 'https://www.google.com/search?q=https://i.ytimg.com/vi/escaped/hqdefault.jpg',
    Link: 'https://www.google.com/search?q=https://apple.co/escaped'
  }
]

app.listen(port, ()=>{
  console.log('I am creating a Music API');
  
})

app.get('/home', (req, res) =>{
  res.send(music)
})