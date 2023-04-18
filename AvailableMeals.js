import classes from './AvailableMeals.module.css'

const DUMMY_MEALS =[
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        prices: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german speciality',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbeque Chicken',
        description: 'Aamerican, raw, meaty',
        price: 12.99,
    }
]


const AvailableMeals = () => {

    const mealsList= DUMMY_MEALS.map((meal) => <li>{meal.name}</li>)

    return (
        <section className={classes.meals}>
            <ul>
                {mealsList}
            </ul>
        </section>

    )
}

export default AvailableMeals