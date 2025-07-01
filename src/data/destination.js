export const destinations = [
  {
    id: 'athens',
    name: 'Athens',
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.ehcJ76S6UzqaiuhZXLlLbgHaE8&pid=Api&P=0&h=180',
    shortDesc: 'The historical capital of Europe',
    activities: [
      {
        id: 'acropolis',
        name: 'Acropolis of Athens',
        imageUrl: "https://www.greeka.com/seedo/photos/149/athens-acropolis-top-1-1280.jpg",
        selected: false
      },
      {
        id: 'museum',
        name: 'Acropolis Museum',
        imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.GdSXSkK-p8qDxcziBAXS4AHaEK&pid=Api&P=0&h=180',
        selected: false
      },
      {
        id: 'national-museum',
        name: 'National Archeaological Museum',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.6ShxU8UuxbWEhK8DwxMI0wHaFj&pid=Api&P=0&h=180',
        selected: false
      },
      {
        id: 'city-tour',
        name: 'Athens City Tour with key Historical sites',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.BYwknMgsO96OoG9ZHygg4AHaE2&pid=Api&P=0&h=180',
        selected: false
      },
      {
        id: 'parthenon',
        name: 'Acropolis, Parthenon, Museum and City Guided Tour',
        imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.sLI2EutFAm7NqrQq1NnETgHaEK&pid=Api&P=0&h=180',
        selected: false
      },
      {
        id: 'delphi',
        name: 'Day Trip to Delphi',
        imageUrl: 'https://www.greeka.com/photos/sterea/delphi/hero/delphi-3-3840.jpg',
        selected: false
      },
      {
        id: 'meteora',
        name: 'Day Trip to Meteora Monasteries',
        imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.U3TNccljTcd-_Xd7fzJTzAHaEK&pid=Api&P=0&h=180',
        selected: false
      }
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Airbnb'
    ],
    metadata: {
      region: 'Mainland',
      popular: true,
      idealFor: ['history', 'culture']
    }
  },
  {
    id: 'santorini',
    name: 'Santorini',
    imageUrl: 'https://www.worldatlas.com/upload/84/c1/6a/shutterstock-1031949604.jpg',
    shortDesc: 'Famous for its stunning sunsets',
    activities: [
      {
        id: 'wine-tasting',
        name: 'Top Sites day trip, Wine Tasting and Oia Sunset',
        imageUrl: 'https://i.pinimg.com/originals/7a/94/68/7a9468a17e1291f36bdcb07d99fddd9e.jpg',
        selected: false
      },
      {
        id: 'volcano',
        name: 'Santorini Volcano',
        imageUrl: 'https://www.yourgreekisland.com/wp-content/uploads/volcano_santorini_thumb.jpg',
        selected: false
      },
      {
        id: 'oia',
        name: 'Oia Castle and Sunset',
        imageUrl: 'https://www.photohound.co/images/1031678l.jpg',
        selected: false
      },
      {
        id: 'highlights',
        name: 'Santorini highlights with wine and food',
        imageUrl: 'https://cdn.getyourguide.com/img/tour/610babd07abf1.jpeg/146.jpg',
        selected: false
      }
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Seafacing Villa',
      'Airbnb'
    ],
    metadata: {
      region: 'Cyclades',
      popular: true,
      idealFor: ['romance', 'photography']
    }
  },

  {
    id: 'mykonos',
    name: 'Mykonos',
    imageUrl: 'https://www.kivotoshotels.com/wp-content/uploads/2021/10/mykonos-sunset-scaled.jpg',
    shortDesc: 'The island of the winds',
    activities: [
      {
        id: 'delos',
        name: 'Trip to delos archaeological site',
        imageUrl: 'https://thumbs.dreamstime.com/b/walkway-amongst-ancient-remains-archaeological-site-delos-delos-island-greece-mykonos-91904544.jpg',
        selected: false
      },
      {
        id: 'windmills',
        name: 'Guided sightseeing tour with windmills',
        imageUrl: 'https://visitourgreece.com/wp-content/uploads/2021/10/Mykonos-Windmills-Sunset-scaled.jpg',
        selected: false
      },
      {
        id: 'wine',
        name: 'Winery experience with food and wine tasting',
        imageUrl: 'https://cdn.getyourguide.com/img/tour/673f0b549f700074405e90ccbd9c8b57631f7edb728ef06e8a24b65e926a5451.jpg/146.jpg',
        selected: false
      }
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Seafacing Villa',
      'Airbnb'
    ],
    metadata: {
      region: 'Dodecanese',
      popular: false,
      idealFor: ['history', 'beaches']
    }
  },

  {
    id: 'crete',
    name: 'Crete',
    imageUrl: 'https://handluggageonly.co.uk/wp-content/uploads/2018/01/Hand-Luggage-Only-11-8.jpg',
    shortDesc: "Greece's largest island",
    activities: [
      {
        id: 'knossos',
        name: 'Knossos Guided Trip',
        imageUrl: 'https://cdn.getyourguide.com/img/tour/5f0b314a37a75.jpeg/146.jpg',
        selected: false
      },
      {
        id: 'heraklion',
        name: 'Crete heraklion day trip',
        imageUrl: 'https://cdn.getyourguide.com/img/tour/5f0b314a37a75.jpeg/146.jpg',
        selected: false
      },
      {
        id: 'old-town',
        name: 'Old town guided tour with street food',
        imageUrl: 'https://thumbs.dreamstime.com/b/no-shortage-souvenir-shops-old-town-rethymno-crete-greece-no-shortage-souvenir-shops-old-town-rethymno-260789445.jpg',
        selected: false
      }
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Seafacing Villa',
      'Airbnb'
    ],
    metadata: {
      region: 'Dodecanese',
      popular: false,
      idealFor: ['history', 'beaches']
    }
  },

  {
    id: 'paros',
    name: 'Paros',
    imageUrl: 'https://www.ferryguy.com/wp-content/uploads/2019/10/Paros-Parikia1920x1280-1.jpg',
    shortDesc: "Greece's largest island",
    activities: [
      {
        id: 'boat',
        name: 'Paros Anti Paros boat trip with lunch and drinks',
        imageUrl: 'https://windmill-travel.gr/wp-content/uploads/2019/10/DSC_9669.jpg',
        selected: false
      },
      {
        id: 'snorkelling',
        name: 'Paros bay boat trip with snorkelling',
        imageUrl: 'https://www.parosvoyages.gr/wp-content/uploads/2022/01/snorkeling-paros.jpg',
        selected: false
      },
      {
        id: 'sunset_paros',
        name: 'Sunset Tour',
        imageUrl: 'https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2023/08/fd56b6a0cfd3c099f9d29a18b08f8153.png',
        selected: false
      }
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Seafacing Villa',
      'Airbnb'
    ],
    metadata: {
      region: 'Dodecanese',
      popular: false,
      idealFor: ['history', 'beaches']
    }
  },
  {
    id: 'rhodes',
    name: 'Rhodes',
    imageUrl: 'https://i.pinimg.com/originals/db/07/9e/db079e96961cd743f56aded25d503a15.jpg',
    shortDesc: "The city of knights",
    activities: [
      {
        id: 'lindos',
        name: 'Lindos Acropolis',
        imageUrl: 'https://visitourgreece.com/wp-content/uploads/2021/09/Lindos-Acropolis-1-scaled.jpg',
        selected: false
      },
      {
        id: 'old_town',
        name: 'Old town walking tour with guide',
        imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.R3UIi7E5z6p45c0DQJbhPgHaEo?pid=Api&P=0&h=180',
        selected: false
      },
      {
        id: 'city',
        name: 'Explore the new and medieval city',
        imageUrl: 'https://uniquedestination.mitsishotels.com/wp-content/uploads/2022/09/shutterstock_2144547169-1024x688.jpg',
        selected: false
      }
    ],
    accommodationOptions: [
      'Accomodation (3 Star)',
      'Accomodation (4 Star)',
      'Accomodation (5 Star)',
      'Seafacing Villa',
      'Airbnb'
    ],
    metadata: {
      region: 'Dodecanese',
      popular: false,
      idealFor: ['history', 'beaches']
    }
  }
];

// Optional: Helper functions for data access
export const getDestinationById = (id) => 
  destinations.find(dest => dest.id === id);

export const getPopularDestinations = () => 
  destinations.filter(dest => dest.metadata.popular);

export const getDestinationsByRegion = (region) => 
  destinations.filter(dest => dest.metadata.region === region);