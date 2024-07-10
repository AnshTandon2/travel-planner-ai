import { outputs } from '../types';
import Itinerary from '../components/itinerary';

interface formData {
    value: Promise<string>;
}

function ListPage(props: formData) {
    console.log(props.value); 
    const jsonPattern = /```(.+?)```/s;
    const match = (props.value as unknown as string).match(jsonPattern);
    const jslist: outputs[] = [];

    if (match) {
        const jsstr = match[1].trim();
        try {
            const itineraries = JSON.parse(jsstr);
            for (const key in itineraries) {
                jslist.push({
                    title: itineraries[key].title as string,
                    subtitle: itineraries[key].subtitle as string,
                    locations: itineraries[key].locations as string[],
                    descriptions: itineraries[key].descriptions as string[],
                    times: itineraries[key].times as number[],
                    costs: itineraries[key].costs as number[] 
                })
            }
        } catch (e) {
            console.log(e);
        }
    }
    else {
        console.log("No interpretation");
    }
    
    return (
        <div className="grid grid-cols-3 gap-4 h-full m-4">
            {jslist.map((value) => {return <Itinerary value={value} />})}
        </div>
    );
};

export default ListPage;
