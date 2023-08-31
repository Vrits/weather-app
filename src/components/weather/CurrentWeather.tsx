import cloudy from '/public/Images/cloudy.jpg'
const CurrentWeather = () => {
  return (
    <div className="max-w-xl flex flex-col rounded-lg mt-2 overflow-hidden text-white" style={{backgroundImage: `url(${cloudy})`}}>
      <div className='bg-black/50 p-3' >
        <p className='font-bold text-xl'>
          Banjarmasin, South Kalimantan, Indonesia{" "}
          <span className='font-normal text-base'>As of 7:17 am WITA</span>
        </p>
      </div>
      <div className='p-4 flex justify-between items-center'>
        <div>
          <p className='text-7xl font-bold'>24°</p>
          <p className='font-bold text-lg'>Smoke</p>
          <p className='font-bold text-lg'>Day 36° • Night 22°</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-2h-24 h-24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
