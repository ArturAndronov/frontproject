import React from "react";
import { SVGProps } from "./types";

const LogInSVG = (props:SVGProps) => {

    const {className = ""} = props;

    return (
        <div className={className}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 14.25C8.58579 14.25 8.25 14.5858 8.25 15C8.25 15.4142 8.58579 15.75 9 15.75H15C15.9665 15.75 16.75 14.9665 16.75 14V2C16.75 1.0335 15.9665 0.25 15 0.25H9C8.58579 0.25 8.25 0.585788 8.25 1C8.25 1.41421 8.58579 1.75 9 1.75L15 1.75C15.1381 1.75 15.25 1.86193 15.25 2L15.25 14C15.25 14.1381 15.1381 14.25 15 14.25H9Z" fill="#3E4554"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 9.11522C0.25 9.80557 0.809643 10.3652 1.5 10.3652H6.1126C6.11912 10.4386 6.12595 10.512 6.13308 10.5854L6.18711 11.1413C6.26954 11.9894 7.17014 12.4973 7.93856 12.1291C9.57279 11.3459 11.1514 10.1706 12.4049 8.8618C12.8691 8.37712 12.8691 7.61278 12.4049 7.12811L12.3057 7.02454C11.0522 5.71578 9.57279 4.64403 7.93856 3.86084C7.17014 3.49258 6.26954 4.00049 6.18711 4.8486L6.13308 5.40448C6.12595 5.47787 6.11912 5.55128 6.1126 5.6247L1.5 5.6247C0.809644 5.6247 0.25 6.18435 0.25 6.8747V9.11522ZM7.55321 9.53069C7.51071 9.15373 7.19132 8.86522 6.80797 8.86522H1.75L1.75 7.1247H6.80797C7.20406 7.1247 7.53186 6.81671 7.55652 6.42139C7.57466 6.13051 7.59784 5.83987 7.62605 5.54959L7.64173 5.38824C8.94657 6.06069 10.1342 6.9409 11.1577 7.99496C10.7303 8.43505 10.2744 8.84484 9.79324 9.22186C9.12201 9.74782 8.40176 10.21 7.64173 10.6017L7.62605 10.4403C7.59784 10.15 7.57466 9.85941 7.55652 9.56853C7.55572 9.55582 7.55462 9.54321 7.55321 9.53069Z" fill="#3E4554"/>
            </svg>
        </div>
    );
};

export default LogInSVG;