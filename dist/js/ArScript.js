let questions = [{
        question: 'واش كانت فيك السخانة في 10 أيام لي فاتت (التوريشة,العرق؟',
        input: {
            type: 'radio',
            qNumber: 'Q1',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'شحال درجة الحرارة ديالك ؟',

        input: {
            type: 'number',
            qNumber: 'Q2',
            name: 'درجة',
            min: 34,
            max: 42
        }
    }, {
        question: 'في الايام لي فاتو واش كانت فيك الكحبة اولا تزادت الكحبة لي كانت كتجيك عادية؟',

        input: {
            type: 'radio',
            qNumber: 'Q3',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش كتعاني من آلام عضلية غير معتادة في الأيام القليلة لي فاتت؟',

        input: {
            type: 'radio',
            qNumber: 'Q4',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش كتحس بآلام فحلقك هاد الايام ؟',

        input: {
            type: 'radio',
            qNumber: 'Q5',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'فهاد 24 ساعة لي فاتو واش كان فيك الإسهال ؟ على الاقل 3 مرات',

        input: {
            type: 'radio',
            qNumber: 'Q6',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'فهاد الايام لي فاتو، واش عيتي بطريقة ماشي عادية لدرجة بقيتي مريح اكثر من نص يوم ؟',

        input: {
            type: 'radio',
            qNumber: 'Q7',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش لقيتي صعوبة كبيرة فالماكلة و الشراب لاكثر من 24 ساعة ؟',

        input: {
            type: 'radio',
            qNumber: 'Q8',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش كتحس بضيق فالتنفس ملي كتكلم ولا كدير جهد كثر من العادة ؟',

        input: {
            type: 'radio',
            qNumber: 'Q9',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'فهاد الوقت كيف كتحس بالجسم ديالك ؟',

        input: {
            type: 'radio',
            qNumber: 'Q10',
            answer: [{
                text: 'مزيان',
                icon: ' far fa-laugh'
            }, {
                text: 'شويا',
                icon: ' far fa-smile'
            }, {
                text: 'عيان',
                icon: ' far fa-frown'
            }, {
                text: 'مهلوك',
                icon: 'far fa-dizzy'
            }]
        }
    }, {
        question: 'شحال عندك فعمرك ؟ هادشي باش نقدو نعرفو الخطورة ديال المرض إلا كان.',

        input: {
            type: 'number',
            qNumber: 'Q11',
            name: 'سنة',
            min: 15,
            max: 110
        }
    }, {
        question: 'شحال عندك فالوزن ؟ باش نعرفو مؤشر الوزن ديال الجسم ديالك حيث يقدر يتزاد عليك الحال فحالة كان فيك الڤيروس',

        input: {
            type: 'number',
            qNumber: 'Q12',
            name: 'كلغ',
            min: 20,
            max: 250
        }
    }, {
        question: 'شحال فيك فالطول ؟ باش نعرفو مؤشر الوزن ديال الجسم ديالك حيث يقدر يتزاد عليك الحال فحالة كان فيك الڤيروس',

        input: {
            type: 'number',
            qNumber: 'Q13',
            name: 'سنتيمتر',
            min: 80,
            max: 250
        }
    }, {
        question: 'واش عندك ارتفاع ضغط الدم ؟ ولا فيك مرض القلب او الأوعية الدموية ؟ او كتاخد دوا ديال القلب ؟',

        input: {
            type: 'radio',
            qNumber: 'Q14',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'فيك مرض السكر ؟',

        input: {
            type: 'radio',
            qNumber: 'Q15',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش فيك السرطان ولا كان فيك السرطان؟',

        input: {
            type: 'radio',
            qNumber: 'Q16',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش عندك الضيقة ؟ او متبع مع شي طبيب ديال الرية',

        input: {
            type: 'radio',
            qNumber: 'Q17',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش كدير دياليز؟',

        input: {
            type: 'radio',
            qNumber: 'Q18',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش عندك إلتهاب فالكبد ؟',

        input: {
            type: 'radio',
            qNumber: 'Q19',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش حاملة ؟',

        input: {
            type: 'radio',
            qNumber: 'Q20',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }, {
                text: 'راجل',
                icon: 'fa-male'

            }]
        }
    }, {
        question: 'واش عندك شي مرض تينقص لك المناعة ديالك ؟',

        input: {
            type: 'radio',
            qNumber: 'Q21',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }, {
        question: 'واش تتاخد شي دواء تينقص لك المناعة ديالك ؟ بحال: الكورتيكوستيرويدات ، الميثوتريكسات ، السيكلوسبورين ، تاكروليموس ، الآزوثيوبرين ، سيكلوفوسفاميد (كاين ادوية اخرى من غير هادو).',

        input: {
            type: 'radio',
            qNumber: 'Q22',
            answer: [{
                text: 'نعم',
                icon: 'fa-check'
            }, {
                text: 'لا',
                icon: 'fa-times'
            }]
        }
    }

]



let testBtn = document.getElementById("start");
let questionnaire = document.getElementById("questionnaire");
let Préambule = document.getElementById("Préambule");
let stepper = document.querySelectorAll(".stepper h1");
let nextBtn = document.querySelector(".next");
let previousBtn = document.querySelector(".previous");
let currentquestion = document.querySelector(".question");
let answerInputs = document.querySelector(".answer-inputs");
let progressBar = document.querySelector(".bar");
let questionNumber = document.querySelector(".question-number");
let inputBox = document.querySelector(".inputBox");

let result = document.querySelector("#Préambule h1");
let resultMessage = document.querySelectorAll("#Préambule p");

console.log(resultMessage[0]);

testBtn.addEventListener("click", startTest);

inputBox.addEventListener("change", (event) => {
    let input = event.target;

    if (input.type === "number") {
        let number = parseFloat(input.value);

        if (number >= input.min && number <= input.max) {
            answers[input.name] = input.value;
            console.log(answers);

            nextBtn.disabled = false;
        } else {
            nextBtn.disabled = true;
        }
    } else {
        answers[input.name] = input.id;
        console.log(answers);
        nextBtn.disabled = false;
    }
});

let currentQuestionIndex = 0;

function hideprevious() {
    if (currentQuestionIndex === 0) {
        previousBtn.classList.add("hide");
    } else {
        previousBtn.classList.remove("hide");
    }
}

function startTest() {
    stepper[0].classList.remove("active");
    stepper[1].classList.add("active");
    testBtn.style.display = "none";
    Préambule.style.display = "none";
    questionnaire.style.display = "block";
    hideprevious();
    nextBtn.disabled = true;
    showQuestion(questions[currentQuestionIndex]);
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < 21) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
        folowProgress(currentQuestionIndex);
        hideprevious();

        nextBtn.disabled = true;
        if (currentQuestionIndex === 21) {
            nextBtn.innerText = 'ننهي الإختبار'
            nextBtn.classList.add("result");
            let resultBtn = document.querySelector(".result");
            resultBtn.addEventListener("click", Results);
        } else {
            nextBtn.innerText = 'سؤال التالي'
        }
    }
});

previousBtn.addEventListener("click", () => {
    currentQuestionIndex--;
    showQuestion(questions[currentQuestionIndex]);
    folowProgress(currentQuestionIndex);
    hideprevious();
    transition('السؤال السابق')
    nextBtn.disabled = true;
    if (currentQuestionIndex === 21) {
        nextBtn.innerText = 'ننهي الإختبار'

    } else {
        nextBtn.innerText = 'السؤال التالي'
        nextBtn.classList.remove('نتائج');
    }
});

function showQuestion(question) {
    currentquestion.innerText = question.question;
    answerInputs.innerHTML = "";
    let inputAnswer = question.input.answer;
    let input = question.input;

    if (question.input.type === "radio") {
        inputAnswer.forEach((answer) => {
            answerInputs.innerHTML += `
                    <div>
                        <input type="radio" name="${input.qNumber}" id="${answer.text}">
                        <label for="${answer.text}">
                        <i class="fas ${answer.icon}"></i>
                        <span>${answer.text}</span> </label>
                    </div>`;
        });
    } else {
        answerInputs.innerHTML += `<input type="number" name="${input.qNumber}" id="${input.name}" min="${input.min}" max="${input.max}" placeholder="${input.min} - ${input.max}">
                                    <span class="input-span">${input.name}</span>`;
    }
}

function folowProgress(number) {
    let currentNmber = number + 1;

    questionNumber.innerText = currentNmber;
    progressBar.style.width = `${(100 / 23) * (number + 1)}%`;
}

function transition(frame) {

    animateBox.style.inputBox = ` ${frame} .5s ease`
    animateBox.addEventListener('animationend', () => {
        animateBox.style.inputBox = ``
    })
}

let answers = {};

let counter = 0;

function Results() {

    //symptomes positive

    let fievre = answers["Q1"] === "نعم";
    let toux = answers["Q3"] === "نعم";
    let malGorge = answers["Q5"] === "نعم";
    let courbatures = answers["Q4"] === "نعم";
    let diarrhee = answers["Q6"] === "نعم";

    //symptomes négatives

    let noFievre = answers["Q1"] === "لا";
    let noToux = answers["Q3"] === "لا";
    let noMalGorge = answers["Q5"] === "لا";
    let noCourbatures = answers["Q4"] === "لا";
    let noDiarrhee = answers["Q6"] === "لا";

    //gravité mineures positives

    let hauteFievre = answers["Q2"] > 39;
    let fatigue = answers["Q8"] === "نعم";
    let malaise =
        answers["Q11"] === "عيان" || answers["Q11"] === "مهلوك";

    //gravité mineures négatives

    let noHauteFievre = answers["Q2"] < 39;
    let noFatigue = answers["Q8"] === "لا";
    let noMalaise = answers["Q11"] === "مزيان" || answers["Q11"] === "شويا";

    // gravité majeures positives

    let basseFievre = answers["Q2"] < 35.4;
    let gene = answers["Q10"] === "نعم";
    let diffAlim = answers["Q9"] === "نعم";

    // gravité majeures négatives

    let noBasseFievre = answers["Q2"] > 35.4;
    let noGene = answers["Q10"] === "لا";
    let noDiffAlim = answers["Q9"] === "لا";



    if (answers["Q1"] === "نعم") {
        counter = counter + 1;
    }

    if (answers["Q8"] === "نعم" || answers["Q9"] === "نعم") {
        counter = counter + 1;
    }

    if (answers["Q10"] === "عيان" || answers["Q10"] === "مهلوك") {
        counter = counter + 1;
    }

    if (answers["Q14"] === "نعم" || answers["Q15"] === "نعم") {
        counter = counter + 1;
    }

    showResult(counter);
}

function showResult(counter) {
    stepper[1].classList.remove("active");
    stepper[2].classList.add("active");
    testBtn.style.display = "block";
    Préambule.style.display = "block";
    questionnaire.style.display = "none";
    testBtn.textContent = ' نعاود الإختبار'
    testBtn.addEventListener("click", () => {
        window.location.reload();
    });

    result.innerText = 'النتائج'

    if (counter === 0) {
        resultMessage[0].innerText = 'مافيكش فيروس كورونا على الأرجح، إذا عندك شك اتصل بالطبيب ديالك. ولا صوني ل 141'
        resultMessage[1].innerText = 'خليك فدارك حتى تحيد الاعراض، عبر درجة الحراة 2 مرات فالنهار. ومتنساوش النظافة و غسل إيديك بزاف ديال المرات فالنهار'
        resultMessage[0].style.fontSize = "30px";
        resultMessage[0].style.fontWeight = "bold";
        resultMessage[0].style.color = "#787878";
    } else if (counter === 1) {
        resultMessage[0].innerText = 'كنصحوك تبقى في الدار وتصوني على طبيب ديالك في حالة ماشكيتي براسك' +
            ' عاود الاختبار'
        resultMessage[1].innerText = 'خليك فدارك حتى تحيد الاعراض، عبر درجة الحراة 2 مرات فالنهار. ومتنساوش النظافة و غسل إيديك بزاف ديال المرات فالنهار'
        resultMessage[0].style.fontSize = "30px";
        resultMessage[0].style.fontWeight = "bold";
        resultMessage[0].style.color = "#787878";
    } else if (counter === 2) {
        resultMessage[0].innerText = "تقد تشاور مع طبيب فالتيليفون او يزورك طبيب فالدار" +
            "إذا كان عندك صعوبة فالتنفس او مقديتيش تاكل مزيان او تشرب لكثر من 24 ساعة ضروري اتصل ب" +
            "141"
        resultMessage[1].innerText = 'خليك فدارك حتى تحيد الاعراض، عبر درجة الحراة 2 مرات فالنهار. ومتنساوش النظافة و غسل إيديك بزاف ديال المرات فالنهار'
        resultMessage[0].style.fontSize = "30px";
        resultMessage[0].style.fontWeight = "bold";
        resultMessage[0].style.color = "#787878";
    } else {
        resultMessage[0].innerText = "اتصل ب 141"
        resultMessage[1].innerText = 'خليك فدارك حتى تحيد الاعراض، عبر درجة الحراة 2 مرات فالنهار. ومتنساوش النظافة و غسل إيديك بزاف ديال المرات فالنهار'
        resultMessage[0].style.color = "#d63031";
        resultMessage[0].style.fontSize = "50px";
        resultMessage[0].style.fontWeight = "bold";
    }
}