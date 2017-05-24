
function GetClocksAjax() {
    return new Promise(function(resolve, reject) {
        const request = new XMLHttpRequest();
        const url = "/Clock/GetTimeZone";
        request.open("GET", url);
        request.setRequestHeader("Content-type", "application/json");
        request.addEventListener("load",
            function() {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(`Server error ${request.status}`);
                }
            },
            false);
        request.addEventListener("error",
            function() {
                reject("Cannot Make Ajax Request");
            },
            false);
        request.send();
    });
}

GetClocksAjax().then(function(value) {
        const data = JSON.parse(value);
        /* Create html elements */
        const clocksTable = document.createElement("table");
        $("#clocksId").append(clocksTable);
        const clockstr = document.createElement("tr");
        clocksTable.appendChild(clockstr);
        /* Clocks */
        for (let i = 0; i < data.length; i++) {
            const clockstd = document.createElement("td");
            clockstr.appendChild(clockstd);

            const divCity = document.createElement("div");
            divCity.setAttribute("id", `city${i}Id`);
            divCity.setAttribute("class", "city");
            clockstd.appendChild(divCity);

            const divTime = document.createElement("div");
            divTime.setAttribute("id", `time${i}Id`);
            divTime.setAttribute("class", "time");
            clockstd.appendChild(divTime);
            getClockBar(data[i], i);
        }
    },
    function(reason) {
        console.log(reason);
    });

/*Get time from server*/
function getClockBar(timeZ, i) {
    const timeZone = timeZ;
    const appendix = i;
    function getTime() {
        let reqTime;
        let isUpdated = 0;
        let timer;
        function getClock() {
            return new Promise(function(resolve, reject) {
                const request = new XMLHttpRequest();
                const url = "/Clock/GetDate";
                request.open("GET", url);
                request.setRequestHeader("Content-type", "application/json");
                request.addEventListener("load",
                    function() {
                        if (request.status === 200) {
                            resolve(request.responseText);
                        } else {
                            reject(`Server error ${request.status}`);
                        }
                    },
                    false);
                request.addEventListener("error",
                    function() {
                        reject("Cannot Make Ajax Request");
                    },
                    false);
                request.send();
                reqTime = new Date();
            });
        }

        getClock().then(function(value) {
                isUpdated = 0;
                const respTime = new Date();
                const start = new Date(value);
                const timediff = respTime.getTime() - reqTime.getTime();
                start.setMilliseconds(start.getMilliseconds() + timediff);
                var h, m, s;
                document.getElementById(`city${appendix}Id`).innerHTML = timeZone.Name;

                function setTime(today) {
                    if (isUpdated === 0) {
                        if (timeZone.hours < 0) {
                            h = today.getHours() + timeZone.Hours + 24;
                        } else {
                            h = today.getHours() + timeZone.Hours;
                        }
                        if (h === 24) {
                            h = 0;
                        }
                        if (h > 24) {
                            h = h - 24;
                        }
                        m = today.getMinutes() + timeZone.Minutes;
                        if (m > 60) {
                            m -= 60;
                            h++;
                        }
                        if (m < 0) {
                            m += 60;
                            h--;
                        }
                        if (m === 60) {
                            m = 0;
                            h++;
                        }
                        s = today.getSeconds();
                        timer = m;
                    } else {
                        if (m === 59 && s === 59) {
                            h++;
                            m = 0;
                            s = 0;
                            if (h === 24) {
                                h = 0;
                            }
                        } else if (s === 59 && m !== 59) {
                            m++;
                            s = 0;
                        } else {
                            s++;
                        }
                    }
                    h = checkTime(h);
                    m = checkTime(m);
                    s = checkTime(s);
                    document.getElementById(`time${appendix}Id`).innerHTML = h + ":" + m + ":" + s;
                    isUpdated = 1;
                    if ((parseInt(m) - timer) === 10) {
                        return getTime();
                    }
                    const t = setTimeout(setTime, 1000);
                }

                setTime(start);
            },
            function(reason) {
                console.log(reason);
            });
    }
    getTime();
}
function checkTime(i) {
    if (i < 10) {
        if (i.toString().length !== 2) {
            i = `0${i}`;
        }
    };  // add zero in front of numbers < 10
    return i;
}


export default GetClocksAjax;