import React from 'react';

import { IconProps } from '../IconRoot';

export const FolderPlusOutline: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M12.75 9.75007C12.75 9.33586 12.4142 9.00007 12 9.00007C11.5858 9.00007 11.25 9.33586 11.25 9.75007V12.2501H8.75C8.33579 12.2501 8 12.5859 8 13.0001C8 13.4143 8.33579 13.7501 8.75 13.7501H11.25V16.2501C11.25 16.6643 11.5858 17.0001 12 17.0001C12.4142 17.0001 12.75 16.6643 12.75 16.2501V13.7501H15.25C15.6642 13.7501 16 13.4143 16 13.0001C16 12.5859 15.6642 12.2501 15.25 12.2501H12.75V9.75007Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 9.75007H2.02752C1.99999 10.237 1.99999 10.8194 2 11.5179V14.4822C1.99999 15.295 1.99999 15.9506 2.04336 16.4815C2.08803 17.0282 2.18239 17.5083 2.40873 17.9525C2.76825 18.6581 3.34193 19.2318 4.04754 19.5913C4.49176 19.8177 4.9719 19.912 5.51853 19.9567C6.04945 20.0001 6.70507 20.0001 7.51793 20.0001H16.4821C17.2949 20.0001 17.9506 20.0001 18.4815 19.9567C19.0281 19.912 19.5082 19.8177 19.9525 19.5913C20.6581 19.2318 21.2317 18.6581 21.5913 17.9525C21.8176 17.5083 21.912 17.0282 21.9566 16.4815C22 15.9506 22 15.295 22 14.4822V11.5179C22 10.7051 22 10.0495 21.9566 9.5186C21.912 8.97197 21.8176 8.49183 21.5913 8.04761C21.2317 7.342 20.6581 6.76832 19.9525 6.4088C19.5082 6.18246 19.0281 6.0881 18.4815 6.04344C17.9506 6.00006 17.2949 6.00006 16.4821 6.00007L12.7438 6.00007C12.7341 5.70621 12.7096 5.45422 12.6478 5.22362C12.3704 4.18834 11.5617 3.3797 10.5265 3.10229C10.1427 2.99947 9.69972 2.99971 9.10319 3.00004L6.31903 3.00007C5.7153 3.00006 5.21703 3.00005 4.81113 3.03322C4.38956 3.06766 4.00203 3.14158 3.63803 3.32705C3.07354 3.61467 2.6146 4.07361 2.32698 4.6381C2.14151 5.0021 2.06759 5.38963 2.03315 5.8112C1.99998 6.2171 1.99999 6.71536 2 7.31908V9.75007ZM10.1382 4.55118C9.97152 4.50651 9.74577 4.50007 9 4.50007H6.35C5.70757 4.50007 5.27085 4.50066 4.93328 4.52824C4.60447 4.5551 4.43631 4.6038 4.31902 4.66356C4.03677 4.80737 3.8073 5.03684 3.66349 5.31909C3.60372 5.43639 3.55503 5.60454 3.52816 5.93335C3.51019 6.15332 3.50368 6.4154 3.50133 6.74907C3.67247 6.62083 3.8551 6.50685 4.04754 6.4088C4.49176 6.18246 4.9719 6.0881 5.51853 6.04344C6.04944 6.00006 6.70506 6.00006 7.5179 6.00007L11.2426 6.00007C11.2357 5.80689 11.2228 5.70094 11.1989 5.61184C11.0602 5.09421 10.6559 4.68988 10.1382 4.55118ZM5.64068 7.53845C5.18681 7.57554 4.92604 7.64467 4.72852 7.74531C4.30516 7.96102 3.96095 8.30523 3.74524 8.72859C3.6446 8.92611 3.57547 9.18688 3.53838 9.64075C3.50058 10.1034 3.5 10.6976 3.5 11.5501V14.4501C3.5 15.3025 3.50058 15.8968 3.53838 16.3594C3.57547 16.8133 3.6446 17.074 3.74524 17.2716C3.96095 17.6949 4.30516 18.0391 4.72852 18.2548C4.92604 18.3555 5.18681 18.4246 5.64068 18.4617C6.10331 18.4995 6.69755 18.5001 7.55 18.5001H16.45C17.3025 18.5001 17.8967 18.4995 18.3593 18.4617C18.8132 18.4246 19.074 18.3555 19.2715 18.2548C19.6948 18.0391 20.039 17.6949 20.2548 17.2716C20.3554 17.074 20.4245 16.8133 20.4616 16.3594C20.4994 15.8968 20.5 15.3025 20.5 14.4501V11.5501C20.5 10.6976 20.4994 10.1034 20.4616 9.64075C20.4245 9.18688 20.3554 8.92611 20.2548 8.72859C20.039 8.30523 19.6948 7.96102 19.2715 7.74531C19.074 7.64467 18.8132 7.57554 18.3593 7.53845C17.8967 7.50066 17.3025 7.50007 16.45 7.50007H7.55C6.69755 7.50007 6.10331 7.50066 5.64068 7.53845Z"
            fill="currentColor"
        />
    </svg>
);
