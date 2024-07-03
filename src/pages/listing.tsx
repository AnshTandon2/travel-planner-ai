import { parameters, outputs } from '../types';
import pipeline from "../components/Pipeline";
import Itinerary from '../components/itinerary';

interface formData {
    value: parameters;
}


function ListPage(props: formData) {
    const str: Promise<string> = pipeline(props.value);
    const jsonPattern = /```(.+?)```/s;
    const match = (str as unknown as string).match(jsonPattern);
    const jslist: outputs[] = [];

    if (match) {
        const jsstr = match[1].trim();
        try {
            const itineraries = JSON.parse(jsstr);
            for (let itinerary of itineraries) {
                jslist.push({
                    title: itinerary.title as string,
                    subtitle: itinerary.subtitle as string,
                    locations: itinerary.locations as string[],
                    descriptions: itinerary.descriptions as string[],
                    times: itinerary.times as number[],
                    costs: itinerary.costs as number[] 
                })
            }
        } catch (e) {
            console.log(e);
        }
    }
    else {
        console.log("No interpretation");
    }
    console.log(str); 
    
    return (
        <div className="grid grid-cols-3 gap-4 h-full m-4">
            {jslist.map((value) => {return <Itinerary value={value} />})}
        </div>
    );
};

export default ListPage;
