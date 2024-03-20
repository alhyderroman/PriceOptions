import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

 const priceOptions=  [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access",
            "24/7 gym access",
            "Discounts on gym merchandise"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": "$49.99",
          "features": [
            "Access to all gym facilities",
            "Unlimited group fitness classes",
            "Personal training session per month",
            "Sauna and steam room access",
            "Nutritional counseling session"
          ]
        },
        {
          "id": 3,
          "name": "Family Membership",
          "price": "$79.99",
          "features": [
            "Access for entire family",
            "Kids' play area",
            "Discounts on additional services",
            "Free towel service",
            "Monthly gym challenges with prizes"
          ]
        }
      ];
      
    return (
        <div className="m-12 ">
            <h2 className="text-5xl">Best Prices in the town</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
                priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;