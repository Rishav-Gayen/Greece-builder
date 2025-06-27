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
    id: 'rhodes',
    name: 'Rhodes',
    imageUrl: 'https://i.pinimg.com/originals/db/07/9e/db079e96961cd743f56aded25d503a15.jpg',
    shortDesc: 'The city of Knights',
    activities: [
      {
        id: 'lindos',
        name: 'Lindos Acropolis',
        imageUrl: 'http://www.greekboston.com/wp-content/uploads/2017/04/Acropolis-of-Lindos.jpg',
        selected: false
      },
      {
        id: 'old-town',
        name: 'Old Town walking tour with guide',
        imageUrl: 'https://www.discovergreece.com/sites/default/files/2021-02/the_palace_of_the_grand_master.jpg',
        selected: false
      },
      {
        id: 'medieval',
        name: 'Explore the new medieval city',
        imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.n8NWGHX9otbadXfEebJeywHaE7&pid=Api&P=0&h=180',
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