import React from 'react'
const Er = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" {...props}>
    <path fill="#ea0437" d="M0 0h1000v500H0z" />
    <path fill="#4189dd" d="M0 500h1000V250" />
    <path fill="#12ad2b" d="M0 0h1000v250" />
    <path
      fill="#ffc726"
      d="M230.25 369.162c-10.81 2.985-17.008 11.371-16.85 19.284l53.211-.213c.478-8.503-6.517-16.367-17.166-19.464 52.097-1.076 97.357-20.59 105.58-33.112-8.138-3.532-17.548 2.152-24.257.844 15.928-7.361 63.647-38.248 55.889-71.36-6.031 18.392-24.3 33.609-32.081 37.694 17.826-27.067 42.166-55.247 21.049-77.069 1.066 12.648-8.037 26.567-12.058 27.613 10.34-28.6 20.206-64.507-2.197-88.179 2.942 8.556 1.754 32.691-2.297 33.776-1.248-19.448-4.566-60.353-25.047-59.77 6.505 5.79 9.351 21.595 9.496 37.56-4.668-10.937-9.972-19.171-21.318-27.247-9.178-17.602-25.508-32.186-41.84-42.634 1.833 12.812 3.35 22.92 21.24 36.209-9.328-.58-18.652-18.262-28.62-18.752-7.93-.382-14.151 7.185-27.108 2.83 1.434 4.277 7.48 6.171 8.755 9.335-2.775 1.917-9.364-.299-14.84-3.151 7.534 10.263 19.208 16.297 29.12 14.26 11.786-2.266 24.424-1.068 36.477 5.791-3.079 1.581-15.06 1.571-22.75.609 6.99 7.076 11.677 11.766 23.83 11.689 10.855-.071 16.546-5.79 19.334-2.248 6.808 8.067 11.39 16.13 17.085 25.628-12.58 1.39-8.788-14.228-22.799-22.216-7.872 16.293 9.055 35.608 20.577 43.637.155 12.247 1.945 22.494 7.14 31.818 3.501 6.574 8.028 13.303 6.321 28.14-6.897-5.024-13.638-21.966-11.158-35.416-8.633 2.355-12.008 17.535-7.94 25.177 3.04 5.818 5.07 16.951 1.564 21.928-3.417 4.637-3.775 4.118-3.73 14.07.122 5.955-3.205 12.997-8.623 17.907 1.131-4.196 2.421-11.415 1.168-15.927-4.283 7.265-15.028 14.783-18.412 22.595-3.322 7.829-4.165 21.39-20.245 24.517-20.686 4.106-27.826 7.691-41.137 13.138-1.477-10.11 2.945-31.193 11.399-29.99 8.254 1.468 33.28-8.624 24.328-29.707-1.768 6.645-7.666 13.13-14.043 13.417 6.89-8.939 19.185-18.194 13.197-33.172-3.329 6.367-8.564 14.007-16.503 18.306 8.51-16.31.988-21.189-9.118-7.756-3.817 5.182-6.122 15.567-8.547 28.756-3.97-10.727-3.708-24.847-8.412-36.313-4.914-12.399 6.521-15.673 11.903-14.678 13.177 3.518 35.198 3.516 33.562-18.253-5.691 7.364-15.671 9.638-26.449 6.987 12.104-8.838 21.661-25.464 8.173-34.143-.45 9.204-7.573 19.524-17.083 24.277-2.226-7.766-2.226-16.009-.317-25.045-5.31 5.59-9.189 17.22-12.273 30.441-.232-13.069 2.24-22.485 4.073-29.515 2.78-10.269 9.687-3.587 20.262-2.83 10.183.578 24.204-5.05 21.524-18.86-3.477 5.464-10.615 7.59-17.907 7.012 8.78-5.318 24.076-14.77 15.687-29.307-3.524 5.506-4.665 10.216-14.865 11.905 2.672-6.145 3.115-14.833 11.032-18.276-14.123-2.812-22.208 6.456-26.318 20.972-1.667-10.064-3.65-13.77-4.045-21.13 7.634-8.479 8.433-25.066-8.094-28.775-.98 8.556-.69 10.595 1.19 17.561-7.758-4.608-18.692-7.151-25.972-.634 4.932 5.322 12.566 10.008 24.332 4.203-2.78 9.093-10.008 7.537-19.942 4.07 6.072 11.404 13.734 13.43 22.19 12.116 4.428 11.673 4.623 20.542-8.315 37.542.598-10.564-.153-18.434-8.546-26.976-7.192-7.044-13.038.301-1.798 15.962-6.819-5.021-14.536-15.213-16.86-25.403-2.248 12.589-.224 27.426 6.745 35.743-3.296 3.522-7.044-.374-12.588-8.991 2.097 27.576 13.862 32.897 29.673 26.75.45 15.136.45 29.15 1.35 47.434-9.22-13.262-20.907-23.154-27.428-25.627-2.022 7.419 5.622 17.084 9.893 22.48-6.52-1.35-20.683-12.14-20.683-12.14-1.424 12.29 14.465 23.68 24.73 28.775-12.064-.525-17.387-5.095-25.18-12.589.151 34.095 36.942 28.174 43.837 22.93.9 16.785 2.182 36.19 3.08 52.976-10.4-1.815-9.582-4.942-18.482-5.766-24.7-.963-44.295-29.652-50.783-50.755-1.862 3.473-.385 7.107-2.088 11.374-4.01-10.359-9.134-23.737-16.005-29.963 1.75 6.039 1.935 12.175 1.327 23.462-2.358-7.313-4.552-9.555-4.71-18.14.15-6.59 6.358-11.452 6.014-20.722-.254-6.768-6.427-21.436-7.335-32.791-2.989 11.687-4.865 24.007-9.443 31.242 2.275-12.48 1.546-21.093 5.394-29.492 4.446-8.843 8.226-16.738 5.266-25.662-2.838 3.447-1.862 6.578-8.993 14.953-1.55-9.107 9.22-23.683 19.673-29.543 7.372-3.884 16.664-17.777 10.61-27.3-6.931 4.98-10.044 11.706-19.837 23.2 6.985-27.305 25.134-34.45 46.862-34.543 4.808-.022 14.501-1.758 17.222-8.12-6.125 2.364-13.366 2.665-19.81 1.375 4.69-6.885 14.566-5.99 23.77-6.03 7.218-.035 18.488-1.014 23.044-11.295-8.806 3.815-22.54 4.609-31.188 1.907 13.753-7.126 35.294-7.893 46.342-17.244-12.593-9.398-44.104 2.19-64.007 15.84 5.563-5.087 14.355-14.11 19.206-21.395-10.886-5.219-38.415 25.279-47.899 43.4-9.007 5.086-12.61 13.06-16.108 18.625 4.8-16.218 5.308-27.987 9.313-41.342-30.877 10.629-18.043 67.679-24.76 81.327.791-15.068.151-34.426-6.053-44.408-9.51 7.255-10.278 49.959-1.349 85.51-3.224-9.513-9.31-18.395-11.262-29.974-14.076 25.671 8.251 55.957 26.92 79.881-14.055-7.32-27.951-23.067-37.08-36.268 2.52 45.947 50.501 55.494 57.95 66.786-10.11-4.706-29.439-14.019-37.64-4.26 13.351 3.082 24.002 6.645 32.584 12.27 12.452 15.548 36.032 22.347 77.098 24.065z"
    />
  </svg>
);
export default Er;
