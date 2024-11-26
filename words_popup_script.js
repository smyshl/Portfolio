function makeListOfWords() {
    const listOfWords = [
        {
            wordInHewbrew: 'שולחן',
            wordInRussian: 'стол',
            wordTranscriptionInRussian: 'шульхан',
            sentenceInHewbrew: 'גל השולח, מתחת לשולחן',
            sentenceInRussian: 'на столе, под столом',
            sentenceTranscriptionInRussian: 'аль hа-шульхан, митахат ле-шульхан',
        },
        {
            wordInHewbrew: 'בתיאבון',
            wordInRussian: 'приятного аппетита',
            wordTranscriptionInRussian: 'бетеавон',
            sentenceInHewbrew: '!בוקר טוב, בתיאבון',
            sentenceInRussian: 'Доброе утро, приятного аппетита!',
            sentenceTranscriptionInRussian: 'бокер тов, бетеавон!',
        },
        {
            wordInHewbrew: 'סלט ירקות',
            wordInRussian: 'овощной салат',
            wordTranscriptionInRussian: 'салат еракот',
            sentenceInHewbrew: 'הגכר אוכל סלט ירקות',
            sentenceInRussian: 'Мужчина ест овощной салат',
            sentenceTranscriptionInRussian: 'hа гевер охель салат еракот',
        },
        {
            wordInHewbrew: 'עולם מרתק',
            wordInRussian: 'удивительный мир',
            wordTranscriptionInRussian: 'олам мератек',
            sentenceInHewbrew: 'אנחנו רואים עולם מדהים',
            sentenceInRussian: 'Мы видим удивительный мир',
            sentenceTranscriptionInRussian: 'анахну роим олам мератек',
        },
        {
            wordInHewbrew: 'צריך',
            wordInRussian: 'нуждаюсь',
            wordTranscriptionInRussian: 'царих',
            sentenceInHewbrew: 'צריך לקנות אוכל',
            sentenceInRussian: 'Нужно купить еду',
            sentenceTranscriptionInRussian: 'царих ликнот охель',
        },
        {
            wordInHewbrew: 'לשכוח',
            wordInRussian: 'забывать',
            wordTranscriptionInRussian: 'лешкоах',
            sentenceInHewbrew: 'הוא יכול לשכוח אותך',
            sentenceInRussian: 'Он может тебя забыть',
            sentenceTranscriptionInRussian: 'hу яхоль лишкоах отах',
        },
        {
            wordInHewbrew: 'בבוקר',
            wordInRussian: 'утром',
            wordTranscriptionInRussian: 'ба-бокер',
            sentenceInHewbrew: 'הוא קורא בבוקר',
            sentenceInRussian: 'Он читает утром',
            sentenceTranscriptionInRussian: 'hу корэ ба-бокер',
        },
        {
            wordInHewbrew: 'כל ערב',
            wordInRussian: 'каждый вечер',
            wordTranscriptionInRussian: 'коль эрев',
            sentenceInHewbrew: 'כל ערב אנחנו צופים בטלוויזיה',
            sentenceInRussian: 'Каждый вечер мы смотрим телевизор',
            sentenceTranscriptionInRussian: 'коль эрев анахну цофим бетелевизия',
        },
        {
            wordInHewbrew: 'אוהב',
            wordInRussian: 'любит (мужской род)',
            wordTranscriptionInRussian: 'оhэв',
            sentenceInHewbrew: 'היא אוהבת חלב',
            sentenceInRussian: 'Она любит молоко',
            sentenceTranscriptionInRussian: 'hи оhэвет халав',
        },
        {
            wordInHewbrew: 'מדינה',
            wordInRussian: 'страна',
            wordTranscriptionInRussian: 'медина',
            sentenceInHewbrew: 'מדינת ישראל',
            sentenceInRussian: 'Страна Израиль',
            sentenceTranscriptionInRussian: 'мединат исраэль',
        },
    ]
    return listOfWords;
}


function getRandomWordObject(){
    const listOfWords = makeListOfWords();
    const randomWordObject = listOfWords[Math.floor(Math.random() * listOfWords.length)]
    return randomWordObject;
}


function makeInnerHTML(wordObject){
    const wordPart = `<p><span style="font-size: 1.5em"><strong>${wordObject.wordInHewbrew}</strong></span><br>[${wordObject.wordTranscriptionInRussian}] ${wordObject.wordInRussian}<br></p>`
    const sentencePart = `<p><span style="font-size: 1.2em"><strong>${wordObject.sentenceInHewbrew}</strong></span> <br> [${wordObject.sentenceTranscriptionInRussian}]<br>${wordObject.sentenceInRussian}</p>`
    return wordPart + sentencePart;
}


const popUpDivWrapper = document.createElement('div');

popUpDivWrapper.setAttribute('id', 'popUpDivWrapper');
popUpDivWrapper.style.position = 'fixed';
popUpDivWrapper.style.zIndex = 1000;
popUpDivWrapper.style.bottom = 0;
popUpDivWrapper.style.right = 0;
popUpDivWrapper.style.border = '1px black solid';
popUpDivWrapper.style.borderRadius = '10px';
// popUpDivWrapper.style.width = '28vw';
// popUpDivWrapper.style.minHeight = '45vh';
popUpDivWrapper.style.marginRight = '1vw';
popUpDivWrapper.style.marginBottom = '1.5vh';
popUpDivWrapper.style.display = 'flex';
popUpDivWrapper.style.flexDirection = 'column';
popUpDivWrapper.style.background = 'rgba(255, 255, 255, 0.8)';

document.body.appendChild(popUpDivWrapper);

const popUpElementsPlace = document.getElementById('popUpDivWrapper');

const popUpHeader = document.createElement('div');

popUpHeader.innerHTML = '<strong><u>Your Hebrew Word for Today</u><strong>';

popUpHeader.setAttribute('id', 'popUpHeader');
popUpHeader.style.border = '1px black solid';
popUpHeader.style.borderRadius = '8px';
popUpHeader.style.minHeight = '20%';
popUpHeader.style.margin = '0.5em';
popUpHeader.style.padding = '0.5em';
popUpHeader.style.display = 'flex';
popUpHeader.style.justifyContent = 'center';
popUpHeader.style.alignItems = 'center';

popUpElementsPlace.appendChild(popUpHeader);



const popUpSection = document.createElement('div');

popUpSection.innerHTML = makeInnerHTML(getRandomWordObject());

popUpSection.setAttribute('id', 'popUpSection');
popUpSection.style.border = '1px black solid';
popUpSection.style.borderRadius = '8px';
popUpSection.style.display = 'flex';
popUpSection.style.flexDirection = 'column';
popUpSection.style.justifyContent = 'center';
popUpSection.style.alignItems = 'center';
popUpSection.style.minHeight = '70%';
popUpSection.style.margin = '0.5em';
popUpSection.style.marginTop = 0;
popUpSection.style.padding = '0.5em';
popUpSection.style.cursor = 'pointer';
popUpSection.style.textAlign = 'center'


popUpElementsPlace.appendChild(popUpSection);


const popUpCloseElement = document.createElement('div');

popUpCloseElement.textContent = 'x';

popUpCloseElement.setAttribute('id', 'popUpCloseElement');
popUpCloseElement.style.border = '1px black solid';
popUpCloseElement.style.borderRadius = '50%';
popUpCloseElement.style.height = '1.5rem';
popUpCloseElement.style.width = '1.5rem';
popUpCloseElement.style.textAlign = 'center';
popUpCloseElement.style.lineHeight = '0.95rem';
popUpCloseElement.style.position = 'absolute';
popUpCloseElement.style.top = '-0.65rem';
popUpCloseElement.style.right = '-0.55vw';
popUpCloseElement.style.background = 'lightgray';
popUpCloseElement.style.cursor = 'pointer';

popUpElementsPlace.appendChild(popUpCloseElement);


popUpCloseElement.addEventListener('click', () => {
    popUpElementsPlace.remove();
})

popUpSection.addEventListener('click', () => {
    popUpSection.innerHTML = makeInnerHTML(getRandomWordObject());
})