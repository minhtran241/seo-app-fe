import { AiFillControl } from 'react-icons/ai';
import { MdSecurity, MdOutlineMilitaryTech } from 'react-icons/md';
import { IoMdCloudUpload } from 'react-icons/io';

const shieldCheckedIcon = <AiFillControl />;

const categoryIcons: JSX.Element[] = [
  <MdSecurity key={0} className="h-[40px] w-[40px]" />,
  <AiFillControl key={1} className="h-[40px] w-[40px]" />,
  <IoMdCloudUpload key={2} className="h-[40px] w-[40px]" />,
  <MdOutlineMilitaryTech key={3} className="h-[40px] w-[40px]" />,
];
export default categoryIcons;
