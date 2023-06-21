'use client';
import { useEffect, useState } from "react";
import { Hero, SearchBar, CustomFilter, CarCard, ShowMoreBtn} from "@components";
import { fuels, yearsOfProduction } from "@constants";
import { fetchCars } from "@utils";
import Image from "next/image";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    try{
      setLoading(true);
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        model: model || "",
        fuel: fuel || "",
        year: year || 2022,
        limit: limit || 10,
      });
      setAllCars(result);
    }catch(error){
      console.log(error);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);
  // Render
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width"
        id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">
              Car catalog
              <p>Explore the cars you might like</p>
            </h1>
          </div>

          <div className="home__filters">
            <SearchBar
              setManufacturer={setManufacturer}
              setModel={setModel}
            />
            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels} 
              setFilter={setFuel} />
              <CustomFilter title="year" options={yearsOfProduction}
              setFilter={setYear}/>
            </div>
          </div>

          { loading ? (
              <div className="mt-16 w-full flex-center">
                <Image src="/vercel.svg"
                  width={50}
                  height={50}
                  alt="loading"
                  className="object-contain"/>
              </div> )
              : !Array.isArray(allCars) || allCars.length < 1 || !allCars
            ? (
              <div className="home__cars-wrapper">
                <p className="text-2xl font-bold">
                  No cars found
                </p>
              </div>
            )
          :(
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car, i) => (
                  <CarCard car={car} key={`${i}-car`}/>
                ))}
              </div>
              <ShowMoreBtn 
                pageNumber={(limit || 10) / 10}
                isNext={(limit || 10) > allCars.length}
                setLimit={setLimit}
                />
            </section>
          )}

      </div>
    </main>
  )
}
