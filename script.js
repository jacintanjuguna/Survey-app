const surveyData = [{
        question: 'Which is your favorite social media?',
        a: 'Instagram',
        b: 'Pinterest',
        c: 'Youtube',
        d: 'Tiktok',
        e: 'Internet',
    }, {
        question: 'Whats your favorite content ',
        a: 'Politics and Sports',
        b: 'Celebrity Gossip',
        c: 'personal-development',
        d: 'music entertainment',
        e: 'others',

    }, {
        question: 'How long do you spend time on social media',
        a: 'Mostly mornings',
        b: 'Around Midday',
        c: 'Almost everytime',
        d: 'Barely',
    }, {
        question: 'Do you prefer videos or scripts',
        a: 'Videos',
        b: 'Scripts',
        c: 'None',
        d: 'Both',
    }, {
        question: 'What topics do you love most',
        a: 'Makeup & Beauty',
        b: 'Career tips',
        c: 'Tech content',
        d: 'Finance topics',
        e: 'Relationship advice',
        f: 'Healthy living',
        g: 'Fashion Trends',
    }

];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentSurvey = 0;

loadSurvey();

function loadSurvey() {
    const currentSurveyData = surveyData[currentSurvey];
    questionEl.innerText = currentSurveyData.question;


    a_text.innerText = currentSurveyData.a;
    b_text.innerText = currentSurveyData.b;
    c_text.innerText = currentSurveyData.c;
    d_text.innerText = currentSurveyData.d;


}

submitBtn.addEventListener('click', () => {
    currentSurvey++;

    if (currentSurvey < surveyData.length) {
        loadSurvey();
    } else {
        alert('Thanks for your response!');
    }

});