import "@/core/scss/index.scss";
import "./styles/globals.css";
import '@mdi/font/css/materialdesignicons.min.css';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import AreaList from '../components/AreaList';
import { Area } from '../models/Area';
import {CitiesList} from '@/constants/areaList'


export default function Home() {
  const [filteredAreas, setFilteredAreas] = useState(CitiesList);
  const [loading, setLoading] = useState(false);
  const handleSearch = (query: string): void => {
    const filtered: Area[] = CitiesList.filter((area: Area) => 
      area.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAreas(filtered);
  };

  return (
    <div className="md:w-1/5 xs:w-full mx-auto bg-white relative">
      <SearchBar onSearch={handleSearch} />
      <AreaList areas={filteredAreas} />
      
    </div>
  );
}