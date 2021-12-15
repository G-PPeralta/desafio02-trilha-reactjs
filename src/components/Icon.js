import React from "react";

export function Icon(props) {

  switch (props.name) {
    case 'action':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8594 2.17969C10.8695 2.17969 10.038 2.56983 9.44531 2.92969C9.14896 3.10962 8.90848 3.26994 8.74219 3.39844C8.70356 3.42829 8.69648 3.46415 8.67188 3.49219C8.69503 3.4841 8.72717 3.47686 8.76562 3.46875C8.80408 3.46064 8.93027 3.44531 8.92969 3.44531V4.94531C8.93027 4.94531 9.03039 4.95373 9.07031 4.94531C9.11024 4.93689 9.16259 4.90714 9.1875 4.89844C9.23732 4.88104 9.25732 4.86395 9.28125 4.85156C9.32911 4.82679 9.35425 4.81868 9.375 4.80469C9.4165 4.77669 9.44122 4.75565 9.46875 4.73438C9.52382 4.69183 9.58471 4.64903 9.65625 4.59375C9.79934 4.48318 9.99011 4.33413 10.2188 4.19531C10.676 3.91767 11.2743 3.67969 11.8594 3.67969C12.4094 3.67969 13.0007 3.91469 13.3828 4.24219L13.8047 4.59375L14.25 4.3125C14.4611 4.18586 14.774 4.125 15.1406 4.125C16.2906 4.125 17.1881 4.91274 17.4141 5.92969L17.5312 6.39844L17.9766 6.51562C18.9677 6.73587 19.8047 7.70905 19.8047 8.76562C19.8047 9.04896 19.6841 9.43045 19.5469 9.77344L19.4062 10.1719L19.6406 10.5C20.0246 11.012 20.25 11.5203 20.25 12.0703C20.25 13.3567 19.2703 14.3859 19.1953 14.4609L20.25 15.5391C20.325 15.4641 21.75 14.0839 21.75 12.0703C21.75 11.2594 21.4497 10.5614 21.0469 9.9375C21.1683 9.58915 21.3047 9.22544 21.3047 8.76562C21.3047 7.12917 20.2112 5.73139 18.7266 5.20312C18.2135 3.72756 16.8338 2.625 15.1406 2.625C14.7743 2.625 14.4001 2.7768 14.0156 2.90625C13.3941 2.47907 12.6648 2.17969 11.8594 2.17969ZM10.6406 5.97656C10.1023 5.97656 9.57599 6.18295 9.16406 6.58594C9.15844 6.59141 9.14617 6.58039 9.14062 6.58594L7.26562 8.41406L6.53906 8.29688L6.44531 8.27344V8.29688C5.95372 8.17341 5.57186 8.28334 5.32031 8.36719H5.29688L3.63281 8.97656H3.60938C2.81497 9.31702 2.25 10.0632 2.25 10.9453V14.5547C2.25 15.7464 2.50045 16.5943 3.1875 17.3672L3.21094 17.3906L3.23438 17.4141L6.21094 20.3203C6.21888 20.3283 6.22639 20.3359 6.23438 20.3438C8.16261 22.2465 11.2687 22.2488 13.125 20.3203H13.1484L17.3203 16.125C18.0473 15.398 18.0977 14.4045 17.9062 13.7344L17.8828 13.7109V13.6875C17.7138 13.2368 17.4317 12.9317 17.2266 12.7266C17.0214 12.5214 16.9055 12.3891 16.875 12.3281C16.8445 12.2671 16.8234 12.15 16.8047 11.9062C16.7859 11.6625 16.7648 11.3109 16.5703 10.9219C16.2369 10.255 15.6985 9.95452 15.4219 9.77344C15.4129 9.71132 15.4193 9.64533 15.3984 9.51562C15.343 9.17185 15.1525 8.61299 14.6953 8.17969C14.6794 8.16465 14.6885 8.14756 14.6719 8.13281L14.6484 8.15625C14.2248 7.75073 13.7774 7.50648 13.4062 7.42969C13.084 7.36301 12.8571 7.37007 12.8203 7.38281C12.8273 7.38171 12.8133 7.36035 12.7734 7.3125C12.6727 7.19165 12.4838 6.94418 12.2578 6.70312L12.1641 6.58594C11.75 6.17191 11.1863 5.97656 10.6406 5.97656ZM10.6406 7.5C10.8078 7.5 10.975 7.55308 11.0859 7.66406C11.3106 7.88868 11.4634 8.05606 11.625 8.25C11.7866 8.44394 12.0151 8.73424 12.4219 8.83594C12.8001 8.9305 12.9425 8.87333 13.1016 8.90625C13.2607 8.93917 13.4013 8.99508 13.6406 9.23438H13.6641L13.6875 9.25781C13.8678 9.41807 13.8855 9.52446 13.9219 9.75C13.9401 9.86277 13.9511 9.98607 13.9922 10.1719C14.0333 10.3577 14.1076 10.6628 14.3906 10.875C14.7706 11.16 15.1584 11.4263 15.2344 11.5781C15.2649 11.6391 15.2859 11.7797 15.3047 12.0234C15.3234 12.2672 15.3446 12.6188 15.5391 13.0078C15.7336 13.3968 15.9786 13.6114 16.1484 13.7812C16.3019 13.9347 16.3963 14.0277 16.4531 14.1562C16.4553 14.1612 16.451 14.1747 16.4531 14.1797C16.5551 14.5424 16.5807 14.7552 16.2656 15.0703L12.0703 19.2656L12.0469 19.2891C10.7593 20.638 8.65783 20.6344 7.28906 19.2656H7.26562L4.3125 16.3828L4.26562 16.3359C3.80362 15.8055 3.75 15.5744 3.75 14.5547V10.9453C3.75 10.7775 3.93972 10.4689 4.19531 10.3594L5.78906 9.79688C5.80682 9.79095 5.79453 9.77791 5.8125 9.77344C5.93379 9.74325 6.07269 9.74142 6.09375 9.72656H6.11719H6.16406L7.35938 9.96094L7.73438 10.0312L8.01562 9.77344L10.1953 7.66406C10.3063 7.55308 10.4735 7.5 10.6406 7.5Z" fill={props.color} />
        </svg>
      );

    case 'comedy':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.25C9.83148 2.25 8.28076 2.90076 7.3125 3.91406C6.34424 4.92736 6 6.23683 6 7.42969V7.54688C5.73458 7.51764 5.47833 7.5 5.25 7.5C3.64375 7.5 2.25 8.81323 2.25 10.5C2.25 12.1574 3.59265 13.5 5.25 13.5H5.55469L5.78906 13.2891C5.78906 13.2891 5.80079 13.2595 5.97656 13.1484C6.15234 13.0374 6.44646 12.8732 6.91406 12.7031C7.84928 12.363 9.44643 12 12 12C14.5536 12 16.1507 12.363 17.0859 12.7031C17.5535 12.8732 17.8477 13.0374 18.0234 13.1484C18.1992 13.2595 18.2109 13.2891 18.2109 13.2891L18.4453 13.5H18.75C20.4074 13.5 21.75 12.1574 21.75 10.5C21.75 8.84265 20.4074 7.5 18.75 7.5C18.5198 7.5 18.2614 7.51912 18 7.54688V7.42969C18 6.18702 17.6033 4.86453 16.6172 3.86719C15.6311 2.86985 14.0942 2.25 12 2.25ZM12 3.75C13.8058 3.75 14.8986 4.25046 15.5625 4.92188C16.2264 5.59329 16.5 6.49736 16.5 7.42969V7.75781C16.2773 7.79474 16.083 7.83672 15.8438 7.875C14.6848 8.06043 13.3592 8.25 12 8.25C10.6408 8.25 9.30071 8.06038 8.13281 7.875C7.90145 7.83828 7.71499 7.8168 7.5 7.78125V7.42969C7.5 6.52254 7.74639 5.61951 8.39062 4.94531C9.03486 4.27111 10.1185 3.75 12 3.75ZM5.25 9C5.69375 9 6.70384 9.18538 7.89844 9.375C9.09304 9.56462 10.5092 9.75 12 9.75C13.4908 9.75 14.8933 9.56457 16.0781 9.375C17.2629 9.18543 18.2596 9 18.75 9C19.6426 9 20.25 9.60735 20.25 10.5C20.25 11.3239 19.6956 11.8451 18.9141 11.9297C18.8776 11.9044 18.8849 11.9088 18.8438 11.8828C18.5742 11.7126 18.1652 11.5018 17.6016 11.2969C16.4743 10.887 14.6964 10.5 12 10.5C9.30357 10.5 7.52572 10.887 6.39844 11.2969C5.83479 11.5018 5.42578 11.7126 5.15625 11.8828C5.11512 11.9088 5.12245 11.9044 5.08594 11.9297C4.30441 11.8451 3.75 11.3239 3.75 10.5C3.75 9.63677 4.45625 9 5.25 9ZM12 12.75C11.1716 12.75 10.5 13.4216 10.5 14.25C10.5 15.0784 11.1716 15.75 12 15.75C12.8284 15.75 13.5 15.0784 13.5 14.25C13.5 13.4216 12.8284 12.75 12 12.75ZM7.73438 15C7.34271 15 6.89563 15.1603 6.51562 15.4453L6.46875 15.4922L6.42188 15.5391C5.89174 16.1023 5.8835 16.902 6.09375 17.5781C6.304 18.2543 6.72812 18.9206 7.28906 19.5234C8.41095 20.7292 10.1026 21.75 12 21.75C13.9032 21.75 15.5863 20.6931 16.6875 19.4766C17.2381 18.8683 17.658 18.2269 17.8594 17.5547C18.0607 16.8825 18.0302 16.0615 17.4844 15.5156C17.1415 15.1728 16.6573 15 16.2656 15C15.3121 15 14.7435 15.6048 14.0859 16.0312C13.4284 16.4577 12.7654 16.8047 11.9297 16.8047C11.1855 16.8047 10.5571 16.4599 9.91406 16.0312C9.27106 15.6026 8.68795 15 7.73438 15ZM7.73438 16.5C7.8308 16.5 8.36331 16.8021 9.07031 17.2734C9.77731 17.7448 10.7239 18.3047 11.9297 18.3047C13.194 18.3047 14.1763 17.7469 14.9062 17.2734C15.6362 16.7999 16.1692 16.5 16.2656 16.5C16.324 16.5 16.3225 16.4632 16.4297 16.5703C16.4839 16.6245 16.5166 16.7409 16.4062 17.1094C16.2959 17.4778 16.0197 17.9895 15.5859 18.4688C14.7184 19.4272 13.3218 20.25 12 20.25C10.6724 20.25 9.25155 19.4427 8.36719 18.4922C7.92501 18.0169 7.63897 17.5043 7.52344 17.1328C7.41272 16.7768 7.45829 16.6696 7.52344 16.5938C7.60533 16.5445 7.69425 16.5 7.73438 16.5Z" fill={props.color} />
        </svg>
      );

    case 'documentary':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C10.5027 3 9.22481 3.90284 8.625 5.17969C8.1085 4.75961 7.46247 4.5 6.75 4.5C5.10203 4.5 3.75 5.85203 3.75 7.5C3.75 8.04932 3.91054 8.55556 4.17188 9H3.75H3V9.75V18.75V19.5H3.75H15.75H16.5V18.75V16.8516L19.3828 17.9531L19.5 18H19.6406H20.25H21V17.25V11.25V10.5H20.25H19.6406H19.5L19.3828 10.5469L16.5 11.6484V9.75V9H15.75H14.9766C15.4575 8.36942 15.75 7.59938 15.75 6.75C15.75 4.68782 14.0622 3 12 3ZM12 4.5C13.2515 4.5 14.25 5.49848 14.25 6.75C14.25 8.00152 13.2515 9 12 9C10.7485 9 9.75 8.00152 9.75 6.75C9.75 5.49848 10.7485 4.5 12 4.5ZM6.75 6C7.58731 6 8.25 6.66269 8.25 7.5C8.25 8.33731 7.58731 9 6.75 9C5.91269 9 5.25 8.33731 5.25 7.5C5.25 6.66269 5.91269 6 6.75 6ZM4.5 10.5H15V12.2344V12.75V15.75V16.2656V18H4.5V10.5ZM6 12V13.5H9.75V12H6ZM19.5 12.1172V16.3828L16.5 15.2344V13.2656L19.5 12.1172Z" fill={props.color} />
        </svg>
      );

    case 'drama':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C8.875 3 4.38281 3.75 4.38281 3.75L3.75 3.86719V4.5V14.25C3.75 15.3125 4.35898 16.2184 5.13281 16.9922C5.90665 17.766 6.90597 18.4264 7.875 19.0078C9.81305 20.1706 11.7188 20.9531 11.7188 20.9531L12 21.0469L12.2812 20.9531C12.2812 20.9531 14.1869 20.1706 16.125 19.0078C17.094 18.4264 18.0934 17.766 18.8672 16.9922C19.641 16.2184 20.25 15.3125 20.25 14.25V4.5V3.86719L19.6172 3.75C19.6172 3.75 15.125 3 12 3ZM12 4.5C14.5282 4.5 17.8734 5.01823 18.75 5.15625V14.25C18.75 14.6875 18.4215 15.2816 17.7891 15.9141C17.1566 16.5465 16.281 17.1986 15.375 17.7422C13.7028 18.7455 12.2504 19.3038 12 19.4062C11.7496 19.3038 10.2972 18.7455 8.625 17.7422C7.71903 17.1986 6.84335 16.5465 6.21094 15.9141C5.57852 15.2816 5.25 14.6875 5.25 14.25V5.15625C6.12662 5.01823 9.4718 4.5 12 4.5ZM10.1719 8.32031L7.17188 9.82031L7.82812 11.1797L10.8281 9.67969L10.1719 8.32031ZM13.8281 8.32031L13.1719 9.67969L16.1719 11.1797L16.8281 9.82031L13.8281 8.32031ZM12 12.75C9.78333 12.75 8.41406 14.5312 8.41406 14.5312L9.58594 15.4688C9.58594 15.4688 10.6167 14.25 12 14.25C13.3833 14.25 14.4141 15.4688 14.4141 15.4688L15.5859 14.5312C15.5859 14.5312 14.2167 12.75 12 12.75Z" fill={props.color} />
        </svg>
      );

    case 'horror':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.6719 1.94531L20.4609 2.10938C20.4609 2.10938 20.022 2.44215 19.4062 2.78906C18.7905 3.13598 18.004 3.44531 17.5547 3.44531H17.4844C17.4844 3.44531 17.4996 3.7985 17.5078 4.14844L17.0391 3.65625C14.0367 6.50851 8.78906 11.5312 8.78906 11.5312L8.22656 12.0469L8.27344 12.0938L2.48438 17.6953L1.94531 18.2109L2.46094 18.75L4.40625 20.7656L4.66406 21.0234L5.01562 21C5.01562 21 5.80248 20.949 6.77344 20.7188C7.7444 20.4885 8.92013 20.1189 9.75 19.2891C10.4655 18.5736 10.7987 17.9052 11.1094 17.3203C11.3383 16.8894 11.5725 16.4714 12 15.9609L12.5859 16.5703L13.1016 17.1094L13.6406 16.5938C17.5625 12.7473 19.5862 10.2943 20.6484 8.25C21.7107 6.20567 21.75 4.57531 21.75 2.69531V1.94531H21H20.9297H20.6719ZM20.1797 4.07812C20.1264 5.22759 19.9778 6.29 19.3125 7.57031C18.4403 9.2488 16.5716 11.5444 13.125 14.9766L10.3594 12.0938C10.9598 11.5191 15.1104 7.55446 17.9297 4.875C18.7533 4.77872 19.5144 4.44998 20.1328 4.10156C20.1581 4.08733 20.1549 4.09235 20.1797 4.07812ZM19.5 10.125C19.5 10.125 18.375 12.525 18.375 13.125C18.375 13.725 18.9 14.25 19.5 14.25C20.1 14.25 20.625 13.725 20.625 13.125C20.625 12.525 19.5 10.125 19.5 10.125ZM9.32812 13.1719L10.9453 14.8594C10.3623 15.5361 10.0322 16.1301 9.77344 16.6172C9.44665 17.2323 9.25482 17.6514 8.69531 18.2109C8.25019 18.6561 7.2931 19.0412 6.44531 19.2422C5.76416 19.4037 5.40572 19.4335 5.20312 19.4531L4.05469 18.2344L9.32812 13.1719ZM17.625 15.75C17.625 15.75 16.875 16.8 16.875 17.25C16.875 17.7 17.175 18 17.625 18C18.075 18 18.375 17.7 18.375 17.25C18.375 16.8 17.625 15.75 17.625 15.75Z" fill={props.color} />
        </svg>
      );
    case 'family':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.75 4.5C4.68782 4.5 3 6.18782 3 8.25C3 9.38674 3.53023 10.3967 4.33594 11.0859C2.65852 11.9656 1.5 13.7366 1.5 15.75H3C3 13.6841 4.68409 12 6.75 12C7.78736 12 8.62496 12.3568 9.28125 13.0078C9.10664 13.3873 9 13.8074 9 14.25C9 15.0857 9.35645 15.837 9.91406 16.3828C8.91597 17.0592 8.25 18.2131 8.25 19.5H9.75C9.75 18.2591 10.7591 17.25 12 17.25C13.2409 17.25 14.25 18.2591 14.25 19.5H15.75C15.75 18.2131 15.084 17.0592 14.0859 16.3828C14.6436 15.837 15 15.0857 15 14.25C15 13.8074 14.8934 13.3873 14.7188 13.0078C15.375 12.3568 16.2126 12 17.25 12C19.3159 12 21 13.6841 21 15.75H22.5C22.5 13.7366 21.3415 11.9656 19.6641 11.0859C20.4698 10.3967 21 9.38674 21 8.25C21 6.18782 19.3122 4.5 17.25 4.5C15.1878 4.5 13.5 6.18782 13.5 8.25C13.5 9.38674 14.0302 10.3967 14.8359 11.0859C14.4507 11.2895 14.1025 11.5625 13.7812 11.8594C13.2796 11.4823 12.6711 11.25 12 11.25C11.3289 11.25 10.7204 11.4823 10.2188 11.8594C9.89752 11.5625 9.54933 11.2895 9.16406 11.0859C9.96977 10.3967 10.5 9.38674 10.5 8.25C10.5 6.18782 8.81218 4.5 6.75 4.5ZM6.75 6C8.00152 6 9 6.99848 9 8.25C9 9.50152 8.00152 10.5 6.75 10.5C5.49848 10.5 4.5 9.50152 4.5 8.25C4.5 6.99848 5.49848 6 6.75 6ZM17.25 6C18.5015 6 19.5 6.99848 19.5 8.25C19.5 9.50152 18.5015 10.5 17.25 10.5C15.9985 10.5 15 9.50152 15 8.25C15 6.99848 15.9985 6 17.25 6ZM12 12.75C12.8373 12.75 13.5 13.4127 13.5 14.25C13.5 15.0873 12.8373 15.75 12 15.75C11.1627 15.75 10.5 15.0873 10.5 14.25C10.5 13.4127 11.1627 12.75 12 12.75Z" fill={props.color} />
        </svg>
      );
  }
}