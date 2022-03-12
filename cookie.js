const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split("; ");
    const findCookie = allCookie.find(c => c.includes(name)); // country
    if (findCookie) {
        // console.log();
        "country = BD"
        const cookieNameValue = findCookie.split("=");
        return cookieNameValue[1];
    }
};