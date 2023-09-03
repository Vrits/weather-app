

const WeatherDetail = () => {
    return ( 
        <div className="flex flex-col bg-white rounded-lg pt-4 pb-8 px-8 mt-4 shadow-lg max-w-xl text-slate-800">
            <h2 className="text-xl font-bold">Weather Today in Banjarmasin, South Kalimantan, Indonesia</h2>
            <div className="my-4">
                <p>Feels Like</p>
                <p className="text-6xl">24°</p>
            </div>
            <div className="sm:flex justify-between divide-y divide-solid divide-slate-600 sm:divide-y-0 space-y-4 sm:space-y-0">

            <div className="flex flex-col flex-1 items-center divide-y divide-slate-600 divide-solid space-y-4">
                <div className="flex justify-between px-4 w-full space-x-4 pt-4">
                    <p>High / Low</p>
                    <p>36° / 22°</p>
                </div>
                <div className="flex justify-between px-4 w-full space-x-4 pt-4">
                    <p>Wind</p>
                    <p>5 km/h</p>
                </div>
                <div className="flex justify-between px-4 w-full space-x-4 pt-4">
                    <p>Humidity</p>
                    <p>91%</p>
                </div>
                <div className="flex justify-between px-4 w-full space-x-4 pt-4">
                    <p>Dew Point</p>
                    <p>20°</p>
                </div>
                </div>
                <div className="flex flex-col items-center divide-y divide-slate-600 divide-solid space-y-4">

                <div className="flex justify-between px-4 w-full space-x-4 pt-4">
                    <p>Pressure</p>
                    <p>1010.2 mb</p>
                </div>
                <div className="flex justify-between px-4 w-full space-x-4 pt-4">
                    <p>UV Index</p>
                    <p>0 of 11</p>
                </div>
                <div className="flex justify-between px-4 w-full space-x-4 pt-4">
                    <p>Visibility</p>
                    <p>0.69 km</p>
                </div>
                <div className="flex justify-between px-4 w-full space-x-4 pt-4">
                    <p>Moon Phase</p>
                    <p>Waning Gibbous</p>
                </div>
            </div>
            </div>

        </div>
     );
}
 
export default WeatherDetail;