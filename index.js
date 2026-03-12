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
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'Eagles Flight',
    Artist: 'Lawrence Oyor ft. Theophilus Sunday',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'Out of My Belly',
    Artist: 'Prospa Ochimana & Theophilus Sunday',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'Alignment Chant',
    Artist: 'Lawrence Oyor',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'I Will Not Trade',
    Artist: 'Theophilus Sunday',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'Adua Ke',
    Artist: 'Lawrence & Godswill Oyor',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'Jugular Jugular',
    Artist: 'Lawrence Oyor ft. Greatman Takit',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'Earthen Vessel',
    Artist: 'Theophilus Sunday',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'Rain of Favour',
    Artist: 'Lawrence & Godswill Oyor',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'Holy Ghost Come',
    Artist: 'Theophilus Sunday',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'Stone of Help',
    Artist: 'Godswill Oyor ft. Nathaniel Bassey',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'My Daddy My Daddy',
    Artist: 'Lawrence Oyor',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'I Praise You',
    Artist: 'Theophilus Sunday',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'Tongues of Glory',
    Artist: 'O’Tims ft. Godswill Oyor',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'Burn the World',
    Artist: 'Lawrence & Godswill Oyor',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'Adullam Chants',
    Artist: 'Theophilus Sunday',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'Joy on My Account',
    Artist: 'Lawrence Oyor',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  },
  {
    Title: 'I Have Escaped',
    Artist: 'Lawrence Oyor',
    Duration: '13:40',
    Image: 'https://www.google.com/search?q=https://i.scdn.co/image/ab67616d00001e021a361c77935790a8a6663f70',
    Link: 'https://www.google.com/search?q=https://deezer.com/track/1018805432'
  }
]

app.listen(port, ()=>{
  console.log('I am creating a Music API');
  
})

app.get('/home', (req, res) =>{
  res.send(music)
})