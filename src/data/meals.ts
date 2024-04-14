export interface MealDescription {
  readonly nameMeal: string
  readonly ingredients: string
  readonly isVegan?: boolean
  readonly isVegetarian?: boolean
  readonly isGlutenFree?: boolean
}
export interface Meals {
  readonly title: string
  readonly provider?: string
  readonly mealTitle?: string
  readonly mealDescription: MealDescription[]
}

export const meals: Meals[] = [
  {
    title: "Friday's dinner",
    provider: 'Bar de la FIB',
    mealTitle: 'Warm bocadillos',
    mealDescription: [
      {
        nameMeal: 'Croquetas',
        ingredients: '',
      },
      {
        nameMeal: 'Breaded chicken',
        ingredients: '',
      },
      {
        nameMeal: 'Bacon and cheese',
        ingredients: '',
      },
      {
        nameMeal: 'Hamburger and cheese',
        ingredients: '',
      },
      {
        nameMeal: 'Tortilla de patatas (spanish omelette)',
        ingredients: '',
        isVegetarian: true,
      },
      {
        nameMeal: 'Vegan',
        ingredients: '',
        isVegan: true,
      },
      {
        nameMeal: 'Hamburger and cheese - gluten free',
        ingredients: '',
        isGlutenFree: true,
      },
    ],
  },
  {
    title: 'Saturday Midnight snack',
    mealTitle: 'Waffle or Crepe',
    mealDescription: [
      {
        nameMeal: 'Waffle or Crepe',
        ingredients: '',
      },
      {
        nameMeal: 'Toppings',
        ingredients: 'Chocolate, Strawberry, Whipped cream, Sugar',
      },
    ],
  },
  {
    title: 'Saturday Breakfast',
    mealTitle: 'Cold bocadillos and pastries',
    mealDescription: [
      {
        nameMeal: 'Bocatas',
        ingredients:
          'Fuet, Queso, Jamón York, Jamón Serrano, Tortilla de patatas',
      },
      {
        nameMeal: 'Bolleria',
        ingredients: 'Croissant de chocolate, Croissant de crema',
      },
      {
        nameMeal: 'Zumos',
        ingredients: 'Naranja, Piña',
      },
    ],
  },
  {
    title: 'Saturday Lunch',
    provider: 'La bambina',
    mealTitle: 'Paella',
    mealDescription: [
      {
        nameMeal: 'Paella valenciana',
        ingredients: '',
        isGlutenFree: true,
      },
      {
        nameMeal: 'Paella vegetariana',
        ingredients: '',
        isVegetarian: true,
        isVegan: true,
        isGlutenFree: true,
      },
    ],
  },
  {
    title: 'Saturday Afternoon snack',
    provider: 'Pura fruta',
    mealTitle: 'Ice cream time',
    mealDescription: [
      {
        nameMeal: 'Chocolate',
        ingredients: '',
        isGlutenFree: true,
      },
    ],
  },
  {
    title: 'Saturday Dinner',
    provider: 'Dominos',
    mealTitle: 'Pizza time',
    mealDescription: [
      {
        nameMeal: 'Gluten free pizza',
        ingredients: 'Cheese, Tomato sauce, Ham',
        isGlutenFree: true,
      },
      {
        nameMeal: 'Campesina',
        ingredients: '',
        isVegetarian: true,
      },
      {
        nameMeal: 'BBQ',
        ingredients: '',
      },
    ],
  },
  {
    title: 'Sunday Midnight snack',
    mealTitle: 'Make your own yogurt',
    mealDescription: [
      {
        nameMeal: 'Yogurt',
        ingredients: '',
        isGlutenFree: true,
      },
      {
        nameMeal: 'Vegetal Yogurt',
        ingredients: '',
        isVegetarian: true,
        isVegan: true,
        isGlutenFree: true,
      },
      {
        nameMeal: 'Toppings',
        ingredients: 'Chocolate, Strawberry, Whipped cream, Sugar',
      },
    ],
  },
  {
    title: 'Sunday Breakfast',
    mealTitle: 'Cold bocadillos and pastries',
    mealDescription: [
      {
        nameMeal: 'Bocatas',
        ingredients:
          'Fuet, Queso, Jamón York, Jamón Serrano, Tortilla de patatas',
      },
      {
        nameMeal: 'Bolleria',
        ingredients: 'Croissant de chocolate, Croissant de crema',
      },
      {
        nameMeal: 'Zumos',
        ingredients: 'Naranja, Piña',
      },
    ],
  },
  {
    title: 'Sunday Lunch',
    provider: 'TBD',
    mealTitle: 'TBD',
    mealDescription: [
      {
        nameMeal: 'TBD',
        ingredients: '',
      },
    ],
  },
]
