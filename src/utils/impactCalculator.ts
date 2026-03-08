export function calculateImpact(quantity:number){
    const PlasticPerItem=12;
    const CarbonPerItem=0.05;

    const plastic_saved_grams=quantity*PlasticPerItem;
    const carbon_avoided_kg=quantity*CarbonPerItem;
    
    return {
        plastic_saved_grams,
        carbon_avoided_kg
    }
}