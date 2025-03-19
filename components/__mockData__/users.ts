export const users = [
  {
    id: 'Alice',
    name: 'Alice',
    friends: ['Bernou'],
    recommended: [
      {
        id: '2',
        name: 'Walking dead',
        category: 'Serie',
        platform: 'Netflix',
        recommendedBy: 'Alice',
        rating: '8/10',
        comment: 'This is amazing',
      },
      {
        id: '3',
        name: 'Nelson Mandela Biography',
        category: 'Book',
        platform: 'Kobo',
        recommendedBy: 'Alice',
        rating: '10/10',
        comment: 'Recommend absolutely!!!',
      },
    ],
    recoNotSeen: [
      {
        id: '1',
        name: 'Singing in the rain',
        category: 'Movie',
        platform: 'Home',
        recommendedBy: 'Bernou',
        rating: '9/10',
        comment: 'Old school ',
      },
    ],
  },
  {
    id: 'Bernou',
    name: 'Bernou',
    friends: ['Alice'],
    recommended: [
      {
        id: '1',
        name: 'Singing in the rain',
        category: 'Movie',
        platform: 'Home',
        recommendedBy: 'Bernou',
        rating: '9/10',
        comment: 'Old school ',
      },
    ],
    recoNotSeen: [
      {
        id: '2',
        name: 'Walking dead',
        category: 'Serie',
        platform: 'Netflix',
        recommendedBy: 'Alice',
        rating: '8/10',
        comment: 'This is amazing',
      },
      {
        id: '3',
        name: 'Nelson Mandela Biography',
        category: 'Book',
        platform: 'Kobo',
        recommendedBy: 'Alice',
        rating: '10/10',
        comment: 'Recommend absolutely!!!',
      },
    ],
  },
];
