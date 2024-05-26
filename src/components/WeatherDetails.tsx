import React from 'react';
import { FiDroplet } from 'react-icons/fi';
import { ImMeter } from 'react-icons/im';
import { LuEye, LuSunrise, LuSunset } from 'react-icons/lu';
import { MdAir } from 'react-icons/md';

export interface WeatherDetailProps {
    visability: string;
    humidity: string;
    windSpeed: string;
    airPressure: string;
    sunrise: string;
    sunset: string;
}

export default function WeatherDetails(props: WeatherDetailProps) {
    const{
        visability = "25%",
        humidity = "61%",
        windSpeed = "7 km/h",
        airPressure = "1012 hPa",
        sunrise = "6.20",
        sunset = "18.48"
    } = props;
    return (
    <>
        <SingeWeatherDetail 
            icon={<LuEye />}
            information="Visability"
            value={visability}
        />
        <SingeWeatherDetail 
            icon={<FiDroplet />}
            information="Humidity"
            value={humidity}
        />
        <SingeWeatherDetail 
            icon={<MdAir />}
            information="Wind Speed"
            value={windSpeed}
        />
        <SingeWeatherDetail 
            icon={<ImMeter />}
            information="Air Pressure"
            value={airPressure}
        />
        <SingeWeatherDetail 
            icon={<LuSunrise />}
            information="Sunrise"
            value={sunrise}
        />
        <SingeWeatherDetail 
            icon={<LuSunset />}
            information="Sunset"
            value={sunset}
        />
    </>
    );
}

export interface SingeWeatherDetailProps {
    information: string;
    icon: React.ReactNode;
    value:string;
}

function SingeWeatherDetail(props: SingeWeatherDetailProps){
    return (
        <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
            <p className="whitespace-nowrap">{props.information}</p>
            <div className="text-3xl">{props.icon}</div>
            <p>{props.value}</p>
        </div>
    )
}