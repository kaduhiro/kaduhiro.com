import { IconProps } from '@/types';

export const IconLogoSimple = ({ className, width, height, fill }: IconProps) => {
  return (
    <>
      <svg
        className={className}
        width={width}
        height={height}
        viewBox='0 0 305 154'
        fill={fill}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M137 153.496C136.75 153.499 136.5 153.5 136.25 153.5C94.1383 153.5 60 119.362 60 77.25C60 35.1383 94.1383 1 136.25 1C136.5 1 136.75 1.00121 137 1.00361V31.0167C136.585 31.0056 136.168 31 135.75 31C110.483 31 90 51.483 90 76.75C90 102.017 110.483 122.5 135.75 122.5C136.168 122.5 136.585 122.494 137 122.483V153.496Z' />
        <path d='M0 0H30V153H0V0Z' />
        <path d='M304.5 76.25C304.5 118.362 270.362 152.5 228.25 152.5C228.167 152.5 228.083 152.5 228 152.5V121.499C253.152 121.365 273.5 100.934 273.5 75.75C273.5 50.5664 253.152 30.1352 228 30.0007V0.000401145C228.083 0.000133783 228.167 0 228.25 0C270.362 0 304.5 34.1383 304.5 76.25Z' />
        <path d='M168 0H198V153H168V0Z' />
      </svg>
    </>
  );
};
