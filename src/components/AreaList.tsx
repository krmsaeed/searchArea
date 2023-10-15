import { FC } from 'react';
import { Area } from '../models/Area';
interface AreaListProps {
    areas: Area[];
  }
const AreaList: FC<AreaListProps> = ({ areas }) => {
    return (
      <ul className='list-none p-2'>
        {areas.map((area) => (
          <li key={area.id} className='flex text-normal justify-between border-b-2 border-b-grey py-2 flex-row-reverse' >
            <input  type="radio" name='area' value={area.id} id={`${area.id}`} className='accent-base'/>
            <label htmlFor={`${area.id}`} className='w-full text-right text-tColor text-xs'>{area.name}</label>
          </li>
        ))}
      </ul>
    );
  };
  
  export default AreaList;
  