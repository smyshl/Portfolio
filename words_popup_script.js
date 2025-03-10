function makeListOfWords() {
    const listOfWords = [
        {
            wordInHewbrew: 'שֻׁלְחָן',
            wordTranscriptionInRussian: 'шульхан',
            wordInRussian: 'стол',
            sentenceInHewbrew: 'עַל הַשֻּׁלְחָן, מִתַּחַת לַשֻּׁלְחָן',
            sentenceTranscriptionInRussian: 'аль ha-шульхан, митахат ле-шульхан',
            sentenceInRussian: 'на столе, под столом'
        },
        {
            wordInHewbrew: 'בְּתֵאָבוֹן',
            wordTranscriptionInRussian: 'бетеавон',
            wordInRussian: 'приятного аппетита',
            sentenceInHewbrew: 'בְּתֵאָבוֹן לְכֻלָּם',
            sentenceTranscriptionInRussian: 'бетеавон',
            sentenceInRussian: 'приятного аппетита всем'
        },
        {
            wordInHewbrew: 'סָלַט יְרָקוֹת',
            wordTranscriptionInRussian: 'салат еракот',
            wordInRussian: 'зеленый салат',
            sentenceInHewbrew: 'אַבָּא שֶׁלִּי אוֹהֵב סָלַט יְרָקוֹת',
            sentenceTranscriptionInRussian: 'аба шели оhев салат еракот',
            sentenceInRussian: 'мой папа любит зеленый салат'
        },
        {
            wordInHewbrew: 'עוֹלָם מְרַתֵּק',
            wordTranscriptionInRussian: 'олам мератек',
            wordInRussian: 'увлекательный мир',
            sentenceInHewbrew: 'בֵּן שֶׁלִּי אוֹהֵב אַגָּדָה עַל הָעוֹלָם מְרַתֵּק',
            sentenceTranscriptionInRussian: 'бен шели оheв агада аль hа-олам мератек',
            sentenceInRussian: 'мой сын любит сказку про волшебный мир'
        },
        {
            wordInHewbrew: 'צָרִיךְ',
            wordTranscriptionInRussian: 'царих ',
            wordInRussian: 'нужно, должен',
            sentenceInHewbrew: 'צָרִיךְ לִקְנוֹת אֹכֶל',
            sentenceTranscriptionInRussian: 'царих ликнот охель',
            sentenceInRussian: 'нужно купить пищу'
        },
        {
            wordInHewbrew: 'שׁוֹכֵחַ, שׁוֹכַחַת',
            wordTranscriptionInRussian: 'шохеах, шохахат',
            wordInRussian: 'я забываю; он забывает/ты (м.р.) забываешь; она забывает/ты (ж.р.) забываешь ',
            sentenceInHewbrew: 'לִשְׁכֹּחַ מִכָּל הַצָּרוֹת, לִשְׁכֹּחַ אֶת הֶעָבָר',
            sentenceTranscriptionInRussian: 'лишкоах ми-коль ha-царот, лишкоах эт ha-авар',
            sentenceInRussian: 'забыть обо всех бедах, забыть прошлое'
        },
        {
            wordInHewbrew: 'בַּבֹּקֶר',
            wordTranscriptionInRussian: 'ба-бокер',
            wordInRussian: 'утром',
            sentenceInHewbrew: 'בַּבֹּקֶר אֲנִי לוֹמֶדֶת',
            sentenceTranscriptionInRussian: 'ба-бокер ани ломедет',
            sentenceInRussian: 'утром я учусь'
        },
        {
            wordInHewbrew: 'כָּל עֶרֶב ',
            wordTranscriptionInRussian: 'коль эрев',
            wordInRussian: 'каждый вечер',
            sentenceInHewbrew: 'כָּל עֶרֶב אֲנַחְנוּ רוֹאִים סְרָטִים',
            sentenceTranscriptionInRussian: 'коль эрев анахну роим сратим',
            sentenceInRussian: 'каждый вечер мы смотрим фильмы'
        },
        {
            wordInHewbrew: 'אוֹהֵב, אוֹהֶבֶת',
            wordTranscriptionInRussian: 'оhев, оhевет',
            wordInRussian: 'я люблю; он любит / ты (м.р.) любишь; она любит /ты (ж.р.) любишь',
            sentenceInHewbrew: 'הוּא אוֹהֵב לְבַשֵּׁל / הִיא אוֹהֶבֶת לְצַיֵּר',
            sentenceTranscriptionInRussian: 'hу oheв левашель/hи оhевет лецаер',
            sentenceInRussian: 'он любит готовить/она любит рисовать'
        },
        {
            wordInHewbrew: 'רוֹצֶה, רוֹצָה',
            wordTranscriptionInRussian: 'роце, роца',
            wordInRussian: 'я хочу (м.р., ж.р.), ты (м.р.) хочешь, ты (ж.р.) хочешь, он хочет, он хочет',
            sentenceInHewbrew: 'אֲנִי רוֹצֶה/רוֹצָה לָגוּר בְּיִשְׂרָאֵל',
            sentenceTranscriptionInRussian: 'ани роце/роца лагур бе-Исраэль',
            sentenceInRussian: 'я хочу жить в Израиле'
        },
        {
            wordInHewbrew: 'טוֹב, טוֹבָה',
            wordTranscriptionInRussian: 'тов, това',
            wordInRussian: 'хороший, хорошая',
            sentenceInHewbrew: 'יוֹם טוֹב, כָּל טוּב, חֲבֵרָה טוֹבָה',
            sentenceTranscriptionInRussian: 'йом тов, коль тув, хавера това',
            sentenceInRussian: 'хороший день, всех благ, хорошая подруга'
        },
        {
            wordInHewbrew: 'נֶחְמָד, נֶחְמָדָה',
            wordTranscriptionInRussian: 'нэхмад, нэхмада',
            wordInRussian: 'симпатичный, симпатичная',
            sentenceInHewbrew: 'כֶּלֶב נֶחְמָד, בַּחוּרָה נֶחְמָדָה',
            sentenceTranscriptionInRussian: 'келев нэхмад, бахура нэхмада',
            sentenceInRussian: 'симпатичный пес, симпатичная девшка'
        },
        {
            wordInHewbrew: 'קֹדֶם',
            wordTranscriptionInRussian: 'кодэм',
            wordInRussian: 'раньше, прежде, в прошлом',
            sentenceInHewbrew: 'קֹדֶם, כְּשֶׁגַּרְתִּי בָּעִיר, הָלַכְתִּי לַיָּם כָּל יוֹם ',
            sentenceTranscriptionInRussian: 'кодем кше гарти ба-ир халахти ла-ям коль йом',
            sentenceInRussian: 'Раньше, когда я жил в городе, я ходил на море каждый день.'
        },
        {
            wordInHewbrew: 'קֹדֶם',
            wordTranscriptionInRussian: 'кодэм',
            wordInRussian: 'раньше, прежде, в прошлом',
            sentenceInHewbrew: 'קֹדֶם, לִפְנֵי שֶׁהִתְחַלְתִּי לַעֲבֹד כָּאן, עָבַדְתִּי בְּחֶבְרָה אַחֶרֶת',
            sentenceTranscriptionInRussian: 'кодем лифней ше-итхальти лаавод кан авадти бе-хевра ахерет',
            sentenceInRussian: 'Раньше, до того как я начал работать здесь, я работал в другой компании.'
        },
        {
            wordInHewbrew: 'קֹדֶם כֹּל',
            wordTranscriptionInRussian: 'кодем коль',
            wordInRussian: 'прежде всего',
            sentenceInHewbrew: 'קֹדֶם כֹּל בּוֹאוּ נִבְדֹּק  הַאִם  הַכֹּל מוּכָן',
            sentenceTranscriptionInRussian: 'кодем коль боу нивдок ha-им haколь мухан',
            sentenceInRussian: 'Прежде всего, давайте проверим, все ли готово.'
        },
        {
            wordInHewbrew: 'אַחַר כָּךְ',
            wordTranscriptionInRussian: 'ахар ках',
            wordInRussian: 'после этого, затем',
            sentenceInHewbrew: 'קֹדֶם נְבַקֵּר בִּירוּשָׁלַיִם, אַחַר כָּךְ נִיסַּע לְיָם הַמֶּלַח',
            sentenceTranscriptionInRussian: 'кодем невакер бе-ерушалаим, ахар ках ниса ле-ям ha-мелах',
            sentenceInRussian: ' Сначала мы посетим Иерусалим, затем поедем на Мертвое море.'
        },
        {
            wordInHewbrew: 'אַחַר כָּךְ',
            wordTranscriptionInRussian: 'ахар ках',
            wordInRussian: 'после этого, затем',
            sentenceInHewbrew: ' אֲסַיֵּם אֶת הַפְּרוֹיֵקְט, אַחַר כָּךְ אֶקַּח חֻפְשָׁה',
            sentenceTranscriptionInRussian: 'асайем эт ha-проект, ахар ках эках хуфша',
            sentenceInRussian: ' Я закончу проект, потом возьму отпуск.'
        },
        {
            wordInHewbrew: 'מוֹרֶה, מוֹרָה',
            wordTranscriptionInRussian: 'морэ, мора',
            wordInRussian: 'учитель, учительница',
            sentenceInHewbrew: 'מוֹרֶה לְעִבְרִית, מוֹרֶה לְמוּזִיקָה',
            sentenceTranscriptionInRussian: 'морэ ле-иврит, морэ ле-музика',
            sentenceInRussian: 'учитель иврита, учитель музыки'
        },
        {
            wordInHewbrew: 'מְנַהֵל, מְנַהֶלֶת',
            wordTranscriptionInRussian: 'менаhель, менаhелет',
            wordInRussian: 'руководитель, руководительница, менеджер',
            sentenceInHewbrew: 'מְנַהֵל פְּרוֹיֵקְט',
            sentenceTranscriptionInRussian: 'менаhель проект',
            sentenceInRussian: 'менеджер проекта'
        },
        {
            wordInHewbrew: 'מְנַהֵל, מְנַהֶלֶת',
            wordTranscriptionInRussian: 'менаhель, менаhелет',
            wordInRussian: 'руководитель, руководительница, менеджер',
            sentenceInHewbrew: 'מְנַהֶלֶת מַשְׁאַבֵּי אֱנוֹש',
            sentenceTranscriptionInRussian: 'менаhель машъабей энош',
            sentenceInRussian: 'HR, менеджер по кадрам'
        },
        {
            wordInHewbrew: 'מְנַהֵל, מְנַהֶלֶת',
            wordTranscriptionInRussian: 'менаhель, менаhелет',
            wordInRussian: 'руководитель, руководительница, менеджер',
            sentenceInHewbrew: 'מְנַהֵל שִׁוּוּק',
            sentenceTranscriptionInRussian: 'менаhель шивук',
            sentenceInRussian: 'менеджер по маркетингу'
        },
        {
            wordInHewbrew: 'מְנַהֵל, מְנַהֶלֶת',
            wordTranscriptionInRussian: 'менаhель, менаhелет',
            wordInRussian: 'руководитель, руководительница, менеджер',
            sentenceInHewbrew: 'אֲנִי מְנַהֵל צְוָתִים מְגֻוָּנִים ',
            sentenceTranscriptionInRussian: 'ани менаhель цватим мегуваним',
            sentenceInRussian: 'Я управляю разнообразными командами'
        },
        {
            wordInHewbrew: 'מְנַהֵל, מְנַהֶלֶת',
            wordTranscriptionInRussian: 'менаhель, менаhелет',
            wordInRussian: 'руководитель, руководительница, менеджер',
            sentenceInHewbrew: 'הוּא מְנַהֵל אֶת הַפְּרוֹיֵקְט עִם מַגָּע אִישִׁי ',
            sentenceTranscriptionInRussian: 'hу менаhель эт ha-проект им мага иши',
            sentenceInRussian: 'Он руководит проектом, используя индивидуальный подход'
        },
        {
            wordInHewbrew: 'מִשְׁפָּחָה',
            wordTranscriptionInRussian: 'мишпаха',
            wordInRussian: 'семья',
            sentenceInHewbrew: 'הַמִּשְׁפָּחָה שֶׁלִּי גְּדוֹלָה',
            sentenceTranscriptionInRussian: 'ha-мишпаха шели гдола',
            sentenceInRussian: 'У меня большая семья'
        },
        {
            wordInHewbrew: 'מִשְׁפָּחָה',
            wordTranscriptionInRussian: 'мишпаха',
            wordInRussian: 'семья',
            sentenceInHewbrew: 'אֲנִי אוֹהֵב/אוֹהֶבֶת אֶת הַמִּשְׁפָּחָה שֶׁלִּי',
            sentenceTranscriptionInRussian: 'ани оhев/оhевет эт ha-мишпаха шели',
            sentenceInRussian: 'Я люблю свою семью'
        },
        {
            wordInHewbrew: 'דּוּד שֶׁמֶשׁ',
            wordTranscriptionInRussian: 'дуд шемеш',
            wordInRussian: 'солнечный бойлер',
            sentenceInHewbrew: 'קָנִינוּ בַּיִת עִם דּוּד שֶׁמֶשׁ מֻבְנֶה',
            sentenceTranscriptionInRussian: 'канину байт им дуд шемеш мувнэ',
            sentenceInRussian: 'Мы купили дом со встроенным солнечным бойлером'
        },
        {
            wordInHewbrew: 'קוֹרֵא, קוֹרֵאת',
            wordTranscriptionInRussian: 'я читаю; он читает/ты читаешь (м.р.); она читает / ты читаешь (ж.р.) ',
            wordInRussian: 'коре, корет',
            sentenceInHewbrew: 'הוּא קוֹרֵא סֵפֶר מְעַנְיֵן',
            sentenceTranscriptionInRussian: 'hу корэ сефер меаньен',
            sentenceInRussian: 'Он читает интересную книгу'
        },
        {
            wordInHewbrew: 'קוֹרֵא, קוֹרֵאת',
            wordTranscriptionInRussian: 'я читаю; он читает/ты читаешь (м.р.); она читает / ты читаешь (ж.р.) ',
            wordInRussian: 'коре, корет',
            sentenceInHewbrew: 'הַיַּלְדָּה קוֹרֵאת בְּקוֹל רָם',
            sentenceTranscriptionInRussian: 'ha-яльда корэт бе-коль рам',
            sentenceInRussian: 'Девочка читает вслух'
        },
        {
            wordInHewbrew: 'מֵבִיא, מְבִיאָה',
            wordTranscriptionInRussian: 'я приношу, привожу; он приносит, приводит/ты приносишь, приводишь (м.р.); она приносит, приводит / ты приносишь, приводишь (ж.р.) ',
            wordInRussian: 'меви, мевиа',
            sentenceInHewbrew: 'הַמּוֹרָה מֵבִיאָה דֻּגְמָאוֹת טוֹבוֹת',
            sentenceTranscriptionInRussian: 'ha-мора мевиа дугмаот товот',
            sentenceInRussian: 'Учительница приводит хорошие примеры'
        },
        {
            wordInHewbrew: 'מֵבִיא, מְבִיאָה',
            wordTranscriptionInRussian: 'я приношу, привожу; он приносит, приводит/ты приносишь, приводишь (м.р.); она приносит, приводит / ты приносишь, приводишь (ж.р.) ',
            wordInRussian: 'меви, мевиа',
            sentenceInHewbrew: 'הוּא מְבִיאַ עוּגָה לִמְסִבָּה',
            sentenceTranscriptionInRussian: 'hу меви уга ле-месиба',
            sentenceInRussian: 'Он приносит торт на вечеринку'
        },
        {
            wordInHewbrew: 'חָדָשׁ',
            wordTranscriptionInRussian: 'хадаш',
            wordInRussian: 'новый',
            sentenceInHewbrew: 'יֵשׁ לִי חָבֵר חָדָשׁ',
            sentenceTranscriptionInRussian: 'еш ли хавер хадаш',
            sentenceInRussian: 'У меня новый друг'
        },
        {
            wordInHewbrew: 'חֲדָשָׁה',
            wordTranscriptionInRussian: 'хадаша',
            wordInRussian: 'новая',
            sentenceInHewbrew: 'יֵשׁ לִי שִׂמְלָה חֲדָשָׁה',
            sentenceTranscriptionInRussian: 'еш ли симла хадаша',
            sentenceInRussian: 'У меня новое платье'
        },
        {
            wordInHewbrew: 'גָּמִישׁ',
            wordTranscriptionInRussian: 'гамиш',
            wordInRussian: 'гибкий, упругий, эластичный',
            sentenceInHewbrew: 'זֶה כַּדּוּר גָּמִישׁ, אֶפְשָׁר לְשַׂחֵק בּוֹ בַּגַּן',
            sentenceTranscriptionInRussian: 'зе кадур гамиш, эфшар лесахек бо ба-ган',
            sentenceInRussian: 'Это упругий мяч, с ним можно играть в саду'
        },
        {
            wordInHewbrew: 'גָּמִישׁ',
            wordTranscriptionInRussian: 'гамиш',
            wordInRussian: 'гибкий, упругий, эластичный',
            sentenceInHewbrew: 'הַיַּלְדָּה גְּמִישָׁה, הִיא עוֹשָׂה סְפּוֹרְט כָּל יוֹם',
            sentenceTranscriptionInRussian: 'ha-яльда гмиша, hи оса спорт коль йом',
            sentenceInRussian: 'Девочка гибкая, она занимается спортом каждый день'
        },
        {
            wordInHewbrew: 'בֶּן כַּמָּה אַתָּה/בַּת כַּמָּה אַתְּ',
            wordTranscriptionInRussian: 'сколько тебе лет (м.р.)/сколько тебе лет (ж.р.)',
            wordInRussian: 'бен кама ата/бат кама ат',
            sentenceInHewbrew: 'תִּשְׁאֲלוּ אֶת מִיכַל בַּת כַּמָּה אַתְּ',
            sentenceTranscriptionInRussian: 'тишъалу эт Михаль бат кама ат',
            sentenceInRussian: 'Спросите Михаль сколько ей лет'
        },
        {
            wordInHewbrew: 'אֹשֶׁר וְעֹשֶׁר',
            wordTranscriptionInRussian: 'счастья и достатка!',
            wordInRussian: 'ошер ве-ошер',
            sentenceInHewbrew: 'אֲנִי מְאַחֵל לָךְ אֹשֶׁר וְעֹשֶׁר',
            sentenceTranscriptionInRussian: 'ани меахель лах ошер ве-ошер',
            sentenceInRussian: 'Я желаю тебе Счастья и достатка'
        }
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
popUpDivWrapper.style.maxWidth = '40vw';
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