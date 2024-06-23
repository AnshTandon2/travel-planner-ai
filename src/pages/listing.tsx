import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

interface Location {
    location: string;
    pricePerPerson: number;
    openingTime: number;
    closingTime: number;
    rating: number;
    link: string;
}

interface SearchResults {
    search: Location[];
}


//this is mock data - replace with data retrieved from llm
const data: SearchResults = {
    search: [
        {
            location: "Balboa Park",
            pricePerPerson: 0,
            openingTime: 600,
            closingTime: 2200,
            rating: 4.8,
            link: "https://www.balboapark.org/"
        },
        {
            location: "La Jolla Cove",
            pricePerPerson: 0,
            openingTime: 600,
            closingTime: 2200,
            rating: 4.8,
            link: "https://www.sandiego.org/explore/things-to-do/beaches-bays/la-jolla-cove.aspx"
        },
        {
            location: "San Diego Museum of Art",
            pricePerPerson: 20,
            openingTime: 1000,
            closingTime: 1700,
            rating: 4.6,
            link: "https://www.sdmart.org/"
        },
        {
            location: "Old Town San Diego State Historic Park",
            pricePerPerson: 0,
            openingTime: 1000,
            closingTime: 1700,
            rating: 4.7,
            link: "https://www.parks.ca.gov/?page_id=663"
        },
        {
            location: "Cabrillo National Monument",
            pricePerPerson: 20,
            openingTime: 900,
            closingTime: 1700,
            rating: 4.7,
            link: "https://www.nps.gov/cabr/index.htm"
        },
        {
            location: "Seaport Village",
            pricePerPerson: 0,
            openingTime: 1000,
            closingTime: 2100,
            rating: 4.5,
            link: "https://www.seaportvillage.com/"
        }
    ]
};

const ListPage: React.FC = () => {
    const columnDefs: ColDef<Location>[] = [
        { headerName: "Location", field: "location" },
        { headerName: "Price Per Person", field: "pricePerPerson" },
        { headerName: "Opening Time", field: "openingTime" },
        { headerName: "Closing Time", field: "closingTime" },
        { headerName: "Rating", field: "rating" },
        { headerName: "Link", field: "link" }
    ];

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact
                rowData={data.search}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );
};

export default ListPage;
