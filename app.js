document.addEventListener("DOMContentLoaded", (event) => {
    cconsole.log(
        "Succes, DOM fully loaded and parsed!",
        "font-size: 12px font-weight: 900; color #38a745;"
    )


    let number = MAth.floor(Math.random() * (11 - 1) + 1);
    let isBool = true



    const print = (message) => {
        console.log(
            `%c${message}`,
            "font-size: 12px; font-weight: 900; color #007bff;"
        )
        return console.log(
            `%c The random number is %c${number}.`,
            "font-size: 12px; font-weight: 500; color: #6c757d;",
            "font-size: 12px; font-weight: 900; color: #6c757d;"
        )
    }

    print("Hello World!");
    console.log(
        "   %CDelay;%c 0%c second(s)",
        "font-size: 10px; font-weight: 500; color: #6c757d;; text-decoration: underline;",
        "font-size: 10px; font-weight: 900; color: #6c757d;",
        "font-size: 10px; font-weight: 500; color: #6c757d;"
    )


    const multiply = () => {
        let multiplyNumber = number * 4;
        console.log(
            `%C${number} %cmultiplied by %c4%c is %c${multiplyNumber}!`,
            "font-size: 12px; font-weight: 900; color: #6c757d;", 
            "font-size: 12px; font-weight: 500; color: #6c757d;", 
        )

        console.log(
            "   %cDelay:%c 2%c seconds",
            "font-size: 10px; font-weight: 500; color: #6c757d;; text-decoration: underline;",
            "font-size: 10px; font-weight: 900; color: #6c757d;",
            "font-size: 10px; font-weight: 500; color: #6c757d;"
        )
    }


    setTimeout(multiply, 2000);


    const getWords = (word1, word2, word3, word4) => {

        console.log(
            `%c1st Word: %c${word1}`, 
            "font-size: 12px; font-weight: 900; color: #343a40;", 
            "font-size: 12px; font-weight: 500; color: #343a40;"   
        )
        console.log(
            "   %cDelay:%c 0%c second(s)",
            "font-size: 10px; font-weight: 500; color: #343a40; text-decoration: underline;",
            "font-size: 10px; font-weight: 900; color: #343a40;",
            "font-size: 10px; font-weight: 500; color: #343a40;"
        )
        setTimeout(() => {
            console.log(
                `%c2nd Word: %c${word2}`, 
                "font-size: 12px; font-weight: 900; color: #343a40;", 
                "font-size: 12px; font-weight: 500; color: #343a40;" 
            )
            console.log(
                "   %cDelay:%c 3%c seconds",
                "font-size: 10px; font-weight: 500; color: #343a40; text-decoration: underline;",
                "font-size: 10px; font-weight: 900; color: #343a40;",
                "font-size: 10px; font-weight: 500; color: #343a40;"
            )

        }, 3000)

        setTimeout(() => {
            console.log(
                `%c3rd Word: %c${word3}`,
                "font-size: 12px; font-weight: 900; color: #343a40;", 
                "font-size: 12px; font-weight: 500; color: #343a40;"
            )
            console.log(
                "   %cDelay:%c 2%c seconds",
                "font-size: 10px; font-weight: 500; color: #343a40; text-decoration: underline;",
                "font-size: 10px; font-weight: 900; color: #343a40;",
                "font-size: 10px; font-weight: 500; color: #343a40;"
            )
        },2000)

        setTimeout(() => {
            console.log(
                `%c4th Word: %c${word4}`, 
                "font-size: 12px; font-weight: 900; color: #343a40;", 
                "font-size: 12px; font-weight: 500; color: #343a40;"   
            )
            console.log(
                "   %cDelay:%c 1%c second",
                "font-size: 10px; font-weight: 500; color: #343a40; text-decoration: underline;",
                "font-size: 10px; font-weight: 900; color: #343a40;",
                "font-size: 10px; font-weight: 500; color: #343a40;" 
            )
        }, 1000)
    }


    getWords("Hello", "Goodbye", "Hola", "Aidos");


    const done = (message) => {
        console.log(
            `%c${message}`,
            "font-size: 14px; font-weight: 800; color: #28a745;"
        )
    }

    const countdown = (start, callback) => {
        console.log(
            `%cCountdown%c: %c${start}%c seconds`,
            "font-size: 12px; font-weight: 600; color: #343a40;",
            "font-size: 12px; font-weight: 600; color: #343a40;", 
            "font-size: 12px; font-weight: 700; color: #dc3545;",
            "font-size: 12px; font-weight: 400; color: #dc3545;"
        )
        console.log(
            "  %cDelay:%c 0%c second(s)",
            "font-size: 10px; font-weight: 500; color: #343a40; text-decoration: underline;",
            "font-size: 10px; font-weight: 900; color: #dc3545;",
            "font-size: 10px; font-weight: 500; color: #dc3545;"
        )
        start -= 1;
        const timer = setInterval(() => {
            if(start > 1) {
                console.log(
                    `%cCountdown%c: %c${start}%c seconds`,
                    "font-size: 12px; font-weight: 600; color: #343a40;",
                    "font-size: 12px; font-weight: 600; color: #343a40;", 
                    "font-size: 12px; font-weight: 700; color: #dc3545;",
                    "font-size: 12px; font-weight: 400; color: #dc3545;"
                )
                console.log(
                    "  %cDelay:%c 1%c second",
                    "font-size: 10px; font-weight: 500; color: #343a40; text-decoration: underline;",
                    "font-size: 10px; font-weight: 900; color: #dc3545;",
                    "font-size: 10px; font-weight: 500; color: #dc3545;"
                )
                start -= 1;
            } else if(start === 1) {
                console.log(
                    `%cCountdoen%c: %c${start} %c second`,
                    "font-size: 12px; font-weight: 600; color: #343a40;",
                    "font-size: 12px; font-weight: 600; color: #343a40;",
                    "font-size: 12px; font-weight: 700; color: #dc3545;",
                    "font-size: 12px: font-weight: 400; color: #dc3545;"
                )
                console.log(
                    "  %cDelay:%c 1%c second",
                    "font-size: 10px; font-weight: 500; color: #343a40; text-decoration: underline;",
                    "font-size: 10px; font-weight: 900; color: #dc3545;",
                    "font-size: 10px; font-weight: 500; color: #dc3534;"
                )
                start -= 1;
            } else if(start ===0) {
                callback("Done");
                clearInterval(timer);
            }
        }, 1000)

    }

    countdown(10, done);


    let orderingChickenSaladSandwich = () => {
        return new Promise((resolve, reject) => {
            if(isBool === true) {
                let order = {
                    sandwich: "chicken",
                    vegetables: "lettuce"
                };
                resolve(order);
            }else if(isBool === false) {
            let error = new Error("Oops, something went wrong!");
            reject(error);
            }
        })
        
    }

    const orderFood = () => {
        return new Promise((reslove) => {
            setTimeout(() => {
                reslove(1);
            }, 1000);
        })
    }

    const multiplyByTwo = (number1) => number1 * 2;
    const multiplyByFour = (number2) => number2 * 4;
    const mulitplyBySix = (number3) => number3 * 6;

    promiseOne().then((result1) => {
        let multiply2 = multiplyByTwo(result1);
        console.log(
            `%c2 %cmultiplied by %c2%c is %c${multiply2}!`,
            "font-size: 12px; font-weight: 900; color: #fd7e14;",
            "font-size: 12px; font-weight: 500; color: #fd7e14;",
            "font-size: 12px; font-weight: 900; color: #fd7e14;",
            "font-size: 12px; font-weight: 500; color: #fd7e14;",
            "font-size: 12px; font-weight: 900; color: #fd7e14;"
        )
        console.log(
            "   %cDelay:%c 0%c second(s)",
            "font-size: 10px; font-weight: 500; color: #fd7e14; text-decoration: underline;",
            "font-size: 10px; font-weight: 900; color: #fd7e14;",
            "font-size: 10px; font-weight: 500; color: #fd7e14;"
        )
        return multiply2
    }).then((result2) => {
        let multiply4 = multiplyByFour(result2);
        console.log(
            `%c2 %cmultiplied by %c4%c is %c${multiply4}!`,
            "font-size: 12px; font-weight: 900; color: #fd7e14;",
            "font-size: 12px; font-weight: 500; color: #fd7e14;",
            "font-size: 12px; font-weight: 900; color: #fd7e14;",
            "font-size: 12px; font-weight: 500; color: #fd7e14;",
            "font-size: 12px; font-weight: 900; color: #fd7e14;" 
        )
        console.log(
            "   %cDelay:%c 0%c second(s)",
            "font-size: 10px; font-weight: 500; color: #fd7e14; text-decoration: underline;",
            "font-size: 10px; font-weight: 900; color: #fd7e14;",
            "font-size: 10px; font-weight: 500; color: #fd7e14;"  
        )
        return multiply4;
    }).then((result3) => {
        let multiply6 = mulitplyBySix(result3);
        console.log(
            `%c8 %cmultiplied by %c6%c is %c${multiply6}!`,
            "font-size: 12px; font-weight: 900; color: #fd7e14;",
            "font-size: 12px; font-weight: 500; color: #fd7e14;",
            "font-size: 12px; font-weight: 900; color: #fd7e14;",
            "font-size: 12px; font-weight: 500; color: #fd7e14;",
            "font-size: 12px; font-weight: 900; color: #fd7e14;" 
        )
        console.log(
            "   %cDelay:%c 0%c second(s)",
            "font-size: 10px; font-weight: 500; color: #fd7e14; text-decoration: underline;",
            "font-size: 10px; font-weight: 900; color: #fd7e14;",
            "font-size: 10px; font-weight: 500; color: #fd7e14;"
        )
        return multiply6;
    }).catch((error) => {
        let rutRoh = new Error("Oops, something went wrong!");
        console.log(rutRoh);
    });


});





