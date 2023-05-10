const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    { 
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]  


const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: (string | number)[];
} = {
    firstName: "Eric",
    lastName: "Nkaka",
    isReturning: true,
    age: 54,
    stayedAt: ["Kigali", "Kicukiro", "Rwamagana","Nyamirambo",67]
}

const reviewsContains = document.querySelector('#reviews');

const reviewsTotal = (reviewsNumber: number, reviewer: string, isLoyalUser: boolean) => {
   const iconDisplay = isLoyalUser? '⭐': '';
   reviewsContains!.innerHTML = `Total reviews: ${reviewsNumber.toString()} |
   Last reviewed by ${reviewer} ${iconDisplay}`;
} 
reviewsTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);


console.log(you)