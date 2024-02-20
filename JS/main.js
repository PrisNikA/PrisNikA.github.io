const table = document.getElementById("table_class");
const header = table.querySelectorAll("th.head")
const body_table = table.querySelectorAll("td.classes");

const day_select = document.getElementById("day");
const class_select = document.getElementById("class")

function getShedule(day, classes){
    if (localStorage.getItem("visited") === null){
        localStorage.setItem("visited", "true");
        localStorage.setItem("classes", classes);
    } 

    if (day == "1"){
        if (classes == "1") {
            header[0].textContent = "1А"; header[1].textContent = "1Б", header[2].textContent = "1В";
            body_table[0].textContent = "Разговор о важном"; body_table[1].textContent = "Разговор о важном"; body_table[2].textContent = "Разговор о важном";
            body_table[3].textContent = "Чтение"; body_table[4].textContent = "Русский язык"; body_table[5].textContent = "Физкультура";
            body_table[6].textContent = "Русский язык"; body_table[7].textContent = "Чтение"; body_table[8].textContent = "Чтение";
            body_table[9].textContent = "Окружающий мир"; body_table[10].textContent = "Математика"; body_table[11].textContent = "Русский язык";
            body_table[12].textContent = "ИЗО"; body_table[13].textContent = ""; body_table[14].textContent = "Факультатив в мире сказок";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";

        }
        else if (classes == "2"){
            header[0].textContent = "2А"; header[1].textContent = "2Б", header[2].textContent = "2В";
            body_table[0].textContent = "Разговор о важном"; body_table[1].textContent = "Разговор о важном"; body_table[2].textContent = "Разговор о важном";
            body_table[3].textContent = "Математика"; body_table[4].textContent = "Физкультура"; body_table[5].textContent = "Физкультура";
            body_table[6].textContent = "Русский язык"; body_table[7].textContent = "Математика"; body_table[8].textContent = "Русский язык";
            body_table[9].textContent = "Чтение"; body_table[10].textContent = "Русский язык"; body_table[11].textContent = "Чтение";
            body_table[12].textContent = "ИЗО"; body_table[13].textContent = "Окружающий мир"; body_table[14].textContent = "Математика";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "3"){
            header[0].textContent = "3А"; header[1].textContent = "3Б", header[2].textContent = "3В";
            body_table[0].textContent = "Разговор о важном"; body_table[1].textContent = "Разговор о важном"; body_table[2].textContent = "Разговор о важном";
            body_table[3].textContent = "Английский язык"; body_table[4].textContent = "Русский язык"; body_table[5].textContent = "Математика";
            body_table[6].textContent = "Математика"; body_table[7].textContent = "Чтение"; body_table[8].textContent = "Физкультура";
            body_table[9].textContent = "Физкультура"; body_table[10].textContent = "Английский язык"; body_table[11].textContent = "Русский язык";
            body_table[12].textContent = "Русский язык"; body_table[13].textContent = "Физкультура"; body_table[14].textContent = "Окружающий мир";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "4"){
            header[0].textContent = "4А"; header[1].textContent = "4Б", header[2].textContent = "4В";
            body_table[0].textContent = "Разговор о важном"; body_table[1].textContent = "Разговор о важном"; body_table[2].textContent = "Разговор о важном";
            body_table[3].textContent = "Математика"; body_table[4].textContent = "Русский язык"; body_table[5].textContent = "Русский язык";
            body_table[6].textContent = "Русский язык"; body_table[7].textContent = "Математика"; body_table[8].textContent = "Математика";
            body_table[9].textContent = "Чтение"; body_table[10].textContent = "Чтение"; body_table[11].textContent = "Физкультура";
            body_table[12].textContent = "ИЗО"; body_table[13].textContent = "Физкультура"; body_table[14].textContent = "Музыка";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "5"){
            header[0].textContent = "5А"; header[1].textContent = "5Б", header[2].textContent = "5В";
            body_table[0].textContent = "Разговор о важном"; body_table[1].textContent = "Разговор о важном"; body_table[2].textContent = "Разговор о важном";
            body_table[3].textContent = "Русский язык"; body_table[4].textContent = "Технология"; body_table[5].textContent = "Математика";
            body_table[6].textContent = "Английский язык"; body_table[7].textContent = "Технология"; body_table[8].textContent = "Русский язык";
            body_table[9].textContent = "Технология"; body_table[10].textContent = "Математика"; body_table[11].textContent = "Английский язык";
            body_table[12].textContent = "Технология"; body_table[13].textContent = "Русский язык"; body_table[14].textContent = "Английский язык";
            body_table[15].textContent = "Математика"; body_table[16].textContent = "Английский язык"; body_table[17].textContent = "Литература";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";

        }

        else if (classes == "6"){
            header[0].textContent = "6А"; header[1].textContent = "6Б", header[2].textContent = "6В";
            body_table[0].textContent = "Разговор о важном"; body_table[1].textContent = "Разговор о важном"; body_table[2].textContent = "Английский язык";
            body_table[3].textContent = "Русский язык"; body_table[4].textContent = "Английский язык"; body_table[5].textContent = "Музыка";
            body_table[6].textContent = "Математика"; body_table[7].textContent = "Английский язык"; body_table[8].textContent = "Русский язык";
            body_table[9].textContent = "Английский язык"; body_table[10].textContent = "Русский язык"; body_table[11].textContent = "Математика";
            body_table[12].textContent = "Русский язык"; body_table[13].textContent = "Математика"; body_table[14].textContent = "Английский язык";
            body_table[15].textContent = "Английский язык"; body_table[16].textContent = "ФЗК"; body_table[17].textContent = "Разговор о важном";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";

        }

        else if (classes == "7"){
            header[0].textContent = "7А"; header[1].textContent = "7Б", header[2].textContent = "7В";
            body_table[0].textContent = "Информатика"; body_table[1].textContent = "Разговор о важном"; body_table[2].textContent = "Алгебра";
            body_table[3].textContent = "История"; body_table[4].textContent = "Алгебра"; body_table[5].textContent = "Русский язык";
            body_table[6].textContent = "Русский язык"; body_table[7].textContent = "Геометрия"; body_table[8].textContent = "Музыка";
            body_table[9].textContent = "Алгебра"; body_table[10].textContent = "Русский"; body_table[11].textContent = "ФЗК";
            body_table[12].textContent = "Литература"; body_table[13].textContent = "Музыка"; body_table[14].textContent = "ФЗК";
            body_table[15].textContent = "Разговор о важном"; body_table[16].textContent = "Литература"; body_table[17].textContent = "Разговор о важном";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "8"){
            header[0].textContent = "8А"; header[1].textContent = "8Б", header[2].textContent = "8В";
            body_table[0].textContent = "Разговор о важном"; body_table[1].textContent = "Разговор о важном"; body_table[2].textContent = "Разговор о важном";
            body_table[3].textContent = "География"; body_table[4].textContent = "Алгебра"; body_table[5].textContent = "Английский язык";
            body_table[6].textContent = "Английский язык"; body_table[7].textContent = "География"; body_table[8].textContent = "Алгебра";
            body_table[9].textContent = "Алгебра"; body_table[10].textContent = "Биология"; body_table[11].textContent = "Физика";
            body_table[12].textContent = "Биология"; body_table[13].textContent = "Физика"; body_table[14].textContent = "География";
            body_table[15].textContent = "Физика"; body_table[16].textContent = "Английский язык"; body_table[17].textContent = "Биология";
            body_table[18].textContent = "Русский язык"; body_table[19].textContent = "Музыка"; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "9"){
            header[0].textContent = "9А"; header[1].textContent = "9Б", header[2].textContent = "9В";
            body_table[0].textContent = "Алгебра"; body_table[1].textContent = "Разговор о важном"; body_table[2].textContent = "История";
            body_table[3].textContent = "Алгебра"; body_table[4].textContent = "ОБЖ"; body_table[5].textContent = "Обществознание";
            body_table[6].textContent = "История"; body_table[7].textContent = "Химия"; body_table[8].textContent = "Алгебра";
            body_table[9].textContent = "Обществознание"; body_table[10].textContent = "Английский язык"; body_table[11].textContent = "Алгебра";
            body_table[12].textContent = "Разговор о важном"; body_table[13].textContent = "Алгебра"; body_table[14].textContent = "ОБЖ";
            body_table[15].textContent = "ОБЖ"; body_table[16].textContent = "ФЗК"; body_table[17].textContent = "Химия";
            body_table[18].textContent = "Химия"; body_table[19].textContent = "ФЗК"; body_table[20].textContent = "Разговор о важном";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "10"){
            header[0].textContent = "10А"; header[1].textContent = "", header[2].textContent = "10Б";
            body_table[0].textContent = "Информатика"; body_table[1].textContent = ""; body_table[2].textContent = "Инф/Физ/Био";
            body_table[3].textContent = "Разговоры о важном"; body_table[4].textContent = ""; body_table[5].textContent = "Инф/Физ/Био";
            body_table[6].textContent = "Биология"; body_table[7].textContent = ""; body_table[8].textContent = "ОБЖ";
            body_table[9].textContent = "ОБЖ"; body_table[10].textContent = ""; body_table[11].textContent = "Алгебра";
            body_table[12].textContent = "Английский язык"; body_table[13].textContent = ""; body_table[14].textContent = "Алгебра";
            body_table[15].textContent = "Информатика"; body_table[16].textContent = ""; body_table[17].textContent = "География";
            body_table[18].textContent = "Обществознание"; body_table[19].textContent = ""; body_table[20].textContent = "Разговоры о важном";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "11"){
            header[0].textContent = "11А"; header[1].textContent = "", header[2].textContent = "11Б";
            body_table[0].textContent = "Разговоры о важном"; body_table[1].textContent = ""; body_table[2].textContent = "Разговоры о важном";
            body_table[3].textContent = "Русский язык"; body_table[4].textContent = ""; body_table[5].textContent = "Математика";
            body_table[6].textContent = "Физика"; body_table[7].textContent = ""; body_table[8].textContent = "Математика";
            body_table[9].textContent = "Литература"; body_table[10].textContent = ""; body_table[11].textContent = "Информатика";
            body_table[12].textContent = "История"; body_table[13].textContent = ""; body_table[14].textContent = "Русский язык";
            body_table[15].textContent = "История"; body_table[16].textContent = ""; body_table[17].textContent = "Литература";
            body_table[18].textContent = "Английский язык"; body_table[19].textContent = ""; body_table[20].textContent = "Физика";
            body_table[21].textContent = "Инф/Химия"; body_table[22].textContent = ""; body_table[23].textContent = "Астрономия";
        }
    }

    else if (day == "2"){
        if (classes == "1"){
            header[0].textContent = "1А"; header[1].textContent = "1Б", header[2].textContent = "1В";
            body_table[0].textContent = "Математика"; body_table[1].textContent = "Русский язык"; body_table[2].textContent = "Математика";
            body_table[3].textContent = "Чтение"; body_table[4].textContent = "Математика"; body_table[5].textContent = "ИЗО";
            body_table[6].textContent = "Русский язык"; body_table[7].textContent = "Окружающий мир"; body_table[8].textContent = "Чтение";
            body_table[9].textContent = "Физкультура"; body_table[10].textContent = "Физкультура"; body_table[11].textContent = "Русский язык";
            body_table[12].textContent = "Математика"; body_table[13].textContent = ""; body_table[14].textContent = "";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "2"){
            header[0].textContent = "2А"; header[1].textContent = "2Б", header[2].textContent = "2В";
            body_table[0].textContent = "Физкультура"; body_table[1].textContent = "Английский язык"; body_table[2].textContent = "Русский язык";
            body_table[3].textContent = "Русский язык"; body_table[4].textContent = "Музыка"; body_table[5].textContent = "Английский язык";
            body_table[6].textContent = "Музыка"; body_table[7].textContent = "Русский язык"; body_table[8].textContent = "Музыка";
            body_table[9].textContent = "Математика"; body_table[10].textContent = "Математика"; body_table[11].textContent = "Чтение";
            body_table[12].textContent = "Чтение"; body_table[13].textContent = "Чтение"; body_table[14].textContent = "Увлекательная грамматика";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "3"){
            header[0].textContent = "3А"; header[1].textContent = "3Б", header[2].textContent = "3В";
            body_table[0].textContent = "Математика"; body_table[1].textContent = "Русский язык"; body_table[2].textContent = "Русский язык";
            body_table[3].textContent = "Русский язык"; body_table[4].textContent = "Чтение"; body_table[5].textContent = "Математика";
            body_table[6].textContent = "Чтение"; body_table[7].textContent = "Английский язык"; body_table[8].textContent = "Чтение";
            body_table[9].textContent = "Музыка"; body_table[10].textContent = "Математика"; body_table[11].textContent = "ИЗО";
            body_table[12].textContent = "Окружающий мир"; body_table[13].textContent = "Технология"; body_table[14].textContent = "Английский язык";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "4"){
            header[0].textContent = "4А"; header[1].textContent = "4Б", header[2].textContent = "4В";
            body_table[0].textContent = "Математика"; body_table[1].textContent = "Физкультура"; body_table[2].textContent = "Русский язык";
            body_table[3].textContent = "Русский язык"; body_table[4].textContent = "Математика"; body_table[5].textContent = "Физкультура";
            body_table[6].textContent = "Физкультура"; body_table[7].textContent = "Русский язык"; body_table[8].textContent = "Английский язык";
            body_table[9].textContent = "Чтение"; body_table[10].textContent = "Английский язык"; body_table[11].textContent = "Математика";
            body_table[12].textContent = "ОРКСЭ"; body_table[13].textContent = "Чтение"; body_table[14].textContent = "Чтение";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "5"){
            header[0].textContent = "5А"; header[1].textContent = "5Б", header[2].textContent = "5В";
            body_table[0].textContent = "ОДНКНР"; body_table[1].textContent = "Русский язык"; body_table[2].textContent = "ИЗО";
            body_table[3].textContent = "История"; body_table[4].textContent = "Математика"; body_table[5].textContent = "Русский язык";
            body_table[6].textContent = "Музыка"; body_table[7].textContent = "История"; body_table[8].textContent = "Математика";
            body_table[9].textContent = "Математика"; body_table[10].textContent = "ОДНКНР"; body_table[11].textContent = "История";
            body_table[12].textContent = "Русский язык"; body_table[13].textContent = "Музыка"; body_table[14].textContent = "ФЗК";
            body_table[15].textContent = "Литература"; body_table[16].textContent = ""; body_table[17].textContent = "ОДНКНР";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "6"){
            header[0].textContent = "6А"; header[1].textContent = "6Б", header[2].textContent = "6В";
            body_table[0].textContent = "Биология"; body_table[1].textContent = "История"; body_table[2].textContent = "ОДНКНР";
            body_table[3].textContent = "ОДНКНР"; body_table[4].textContent = "Русский язык"; body_table[5].textContent = "Биология";
            body_table[6].textContent = "Русский язык"; body_table[7].textContent = "Литература"; body_table[8].textContent = "Математика";
            body_table[9].textContent = "Математика"; body_table[10].textContent = "Биология"; body_table[11].textContent = "Русский язык";
            body_table[12].textContent = "Музыка"; body_table[13].textContent = "Математика"; body_table[14].textContent = "Литература";
            body_table[15].textContent = "Литература"; body_table[16].textContent = "Музыка"; body_table[17].textContent = "История";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "7"){
            header[0].textContent = "7А"; header[1].textContent = "7Б", header[2].textContent = "7В";
            body_table[0].textContent = "Биология"; body_table[1].textContent = "Алгебра"; body_table[2].textContent = "Технология";
            body_table[3].textContent = "Алгебра"; body_table[4].textContent = "Русский язык"; body_table[5].textContent = "Технология";
            body_table[6].textContent = "Технология"; body_table[7].textContent = "Биология"; body_table[8].textContent = "Геометрия";
            body_table[9].textContent = "Технология"; body_table[10].textContent = "История"; body_table[11].textContent = "Русский язык";
            body_table[12].textContent = "Русский язык"; body_table[13].textContent = "Технология"; body_table[14].textContent = "Биология";
            body_table[15].textContent = "Литература"; body_table[16].textContent = "Технология"; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "8"){
            header[0].textContent = "8А"; header[1].textContent = "8Б", header[2].textContent = "8В";
            body_table[0].textContent = "Алгебра"; body_table[1].textContent = "Химия"; body_table[2].textContent = "Физика";
            body_table[3].textContent = "Геометрия"; body_table[4].textContent = "Физика"; body_table[5].textContent = "Информатика";
            body_table[6].textContent = "Физика"; body_table[7].textContent = "Алгебра"; body_table[8].textContent = "Обществознание";
            body_table[9].textContent = "Обществознание"; body_table[10].textContent = "Геометрия"; body_table[11].textContent = "Химия";
            body_table[12].textContent = "Русский язык"; body_table[13].textContent = "Обществознание"; body_table[14].textContent = "Алгебра";
            body_table[15].textContent = "Химия"; body_table[16].textContent = "Русский язык"; body_table[17].textContent = "Геометрия";
            body_table[18].textContent = ""; body_table[19].textContent = "Английский язык"; body_table[20].textContent = "Русский язык";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "9"){
            header[0].textContent = "9А"; header[1].textContent = "9Б", header[2].textContent = "9В";
            body_table[0].textContent = "Русский язык"; body_table[1].textContent = "Физика"; body_table[2].textContent = "История";
            body_table[3].textContent = "Литература"; body_table[4].textContent = "История"; body_table[5].textContent = "География";
            body_table[6].textContent = "География"; body_table[7].textContent = "Русский язык"; body_table[8].textContent = "Физика";
            body_table[9].textContent = "Физика"; body_table[10].textContent = "Литература"; body_table[11].textContent = "Английский язык";
            body_table[12].textContent = "История"; body_table[13].textContent = "География"; body_table[14].textContent = "Русский язык";
            body_table[15].textContent = "Английский язык"; body_table[16].textContent = "Информатика"; body_table[17].textContent = "Литература";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "Родной язык";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "10"){
            header[0].textContent = "10А"; header[1].textContent = "", header[2].textContent = "10Б";
            body_table[0].textContent = "Алгебра"; body_table[1].textContent = ""; body_table[2].textContent = "Русский язык";
            body_table[3].textContent = "Алгебра"; body_table[4].textContent = ""; body_table[5].textContent = "Физика";
            body_table[6].textContent = "Английский язык"; body_table[7].textContent = ""; body_table[8].textContent = "Геометрия";
            body_table[9].textContent = "Русский язык"; body_table[10].textContent = ""; body_table[11].textContent = "Геометрия";
            body_table[12].textContent = "Физика"; body_table[13].textContent = ""; body_table[14].textContent = "Английский язык";
            body_table[15].textContent = "История"; body_table[16].textContent = ""; body_table[17].textContent = "Литература";
            body_table[18].textContent = "Обществознание"; body_table[19].textContent = ""; body_table[20].textContent = "Литература";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "11"){
            header[0].textContent = "11А"; header[1].textContent = "", header[2].textContent = "11Б";
            body_table[0].textContent = "Английский язык"; body_table[1].textContent = ""; body_table[2].textContent = "ФЗК";
            body_table[3].textContent = "Английский язык"; body_table[4].textContent = ""; body_table[5].textContent = "ФЗК";
            body_table[6].textContent = "ФЗК"; body_table[7].textContent = ""; body_table[8].textContent = "История";
            body_table[9].textContent = "ФЗК"; body_table[10].textContent = ""; body_table[11].textContent = "Обществознание";
            body_table[12].textContent = "Родной язык"; body_table[13].textContent = ""; body_table[14].textContent = "Математика";
            body_table[15].textContent = "Физика"; body_table[16].textContent = ""; body_table[17].textContent = "Математика";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "Физика";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }
    }

    else if (day == "3"){
        if (classes == "1"){
            header[0].textContent = "1А"; header[1].textContent = "1Б", header[2].textContent = "1В";
            body_table[0].textContent = "Музыка"; body_table[1].textContent = "Математика"; body_table[2].textContent = "Математика";
            body_table[3].textContent = "Чтение"; body_table[4].textContent = "Русский язык"; body_table[5].textContent = "Чтение";
            body_table[6].textContent = "Русский язык"; body_table[7].textContent = "Музыка"; body_table[8].textContent = "Русский язык";
            body_table[9].textContent = "Математика"; body_table[10].textContent = "Чтение"; body_table[11].textContent = "Музыка";
            body_table[12].textContent = "Факультатив работа с текстом"; body_table[13].textContent = "Технология"; body_table[14].textContent = "Окружающий мир";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "2"){
            header[0].textContent = "2А"; header[1].textContent = "2Б", header[2].textContent = "2В";
            body_table[0].textContent = "Математика"; body_table[1].textContent = "Русский язык"; body_table[2].textContent = "Математика";
            body_table[3].textContent = "Английский язык"; body_table[4].textContent = "Математика"; body_table[5].textContent = "Русский язык";
            body_table[6].textContent = "Русский язык"; body_table[7].textContent = "Чтение"; body_table[8].textContent = "Окружающий мир";
            body_table[9].textContent = "Чтение"; body_table[10].textContent = "Окружающий мир"; body_table[11].textContent = "Чтение";
            body_table[12].textContent = "Окружающий мир"; body_table[13].textContent = "Технология"; body_table[14].textContent = "ИЗО";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "3"){
            header[0].textContent = "3А"; header[1].textContent = "3Б", header[2].textContent = "3В";
            body_table[0].textContent = "Русский язык"; body_table[1].textContent = "Русский язык"; body_table[2].textContent = "Русский язык";
            body_table[3].textContent = "Математика"; body_table[4].textContent = "Чтение"; body_table[5].textContent = "Чтение";
            body_table[6].textContent = "Чтение"; body_table[7].textContent = "Окружающий мир"; body_table[8].textContent = "Математика";
            body_table[9].textContent = "ИЗО"; body_table[10].textContent = "Математика"; body_table[11].textContent = "Окружающий мир";
            body_table[12].textContent = "Факультатив тайны русского языка"; body_table[13].textContent = "ИЗО"; body_table[14].textContent = "Факультатив тайны русского языка";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "4"){
            header[0].textContent = "4А"; header[1].textContent = "4Б", header[2].textContent = "4В";
            body_table[0].textContent = "Математика"; body_table[1].textContent = "ОРКСЭ"; body_table[2].textContent = "Русский язык";
            body_table[3].textContent = "Русский язык"; body_table[4].textContent = "Чтение"; body_table[5].textContent = "Чтение";
            body_table[6].textContent = "Английский язык"; body_table[7].textContent = "Русский язык"; body_table[8].textContent = "Окружающий мир";
            body_table[9].textContent = "Окружающий мир"; body_table[10].textContent = "Английский язык"; body_table[11].textContent = "ИЗО";
            body_table[12].textContent = ""; body_table[13].textContent = "Окружающий мир"; body_table[14].textContent = "Английский язык";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "5"){
            header[0].textContent = "5А"; header[1].textContent = "5Б", header[2].textContent = "5В";
            body_table[0].textContent = "Русский язык"; body_table[1].textContent = "Математика"; body_table[2].textContent = "Музыка";
            body_table[3].textContent = "Литература"; body_table[4].textContent = "Биология"; body_table[5].textContent = "Математика";
            body_table[6].textContent = "ФЗК"; body_table[7].textContent = "Русский язык"; body_table[8].textContent = "Технология";
            body_table[9].textContent = "ФЗК"; body_table[10].textContent = "Литература"; body_table[11].textContent = "Биология";
            body_table[12].textContent = "Биология"; body_table[13].textContent = "ФЗК"; body_table[14].textContent = "Русский язык";
            body_table[15].textContent = "Математика"; body_table[16].textContent = "ФЗК"; body_table[17].textContent = "Литература";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "6"){
            header[0].textContent = "6А"; header[1].textContent = "6Б", header[2].textContent = "6В";
            body_table[0].textContent = "Русский язык"; body_table[1].textContent = "География"; body_table[2].textContent = "ФЗК";
            body_table[3].textContent = "Литература"; body_table[4].textContent = "Русский язык"; body_table[5].textContent = "ФЗК";
            body_table[6].textContent = "Математика"; body_table[7].textContent = "ФЗК"; body_table[8].textContent = "Русский язык";
            body_table[9].textContent = "География"; body_table[10].textContent = "Математика"; body_table[11].textContent = "Литература";
            body_table[12].textContent = "ФЗК"; body_table[13].textContent = "ОДНКНР"; body_table[14].textContent = "Математика";
            body_table[15].textContent = "ФЗК"; body_table[16].textContent = "ИЗО"; body_table[17].textContent = "География";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "7"){
            header[0].textContent = "7А"; header[1].textContent = "7Б", header[2].textContent = "7В";
            body_table[0].textContent = "Русский язык"; body_table[1].textContent = "Алгебра"; body_table[2].textContent = "Информатика";
            body_table[3].textContent = "ВСтатистика"; body_table[4].textContent = "История"; body_table[5].textContent = "География";
            body_table[6].textContent = "География"; body_table[7].textContent = "Английский язык"; body_table[8].textContent = "Физика";
            body_table[9].textContent = "Физика"; body_table[10].textContent = "ВСтатистика"; body_table[11].textContent = "Английский язык";
            body_table[12].textContent = "Английский язык"; body_table[13].textContent = "Физика"; body_table[14].textContent = "Русский язык";
            body_table[15].textContent = "Музыка"; body_table[16].textContent = "ИЗО"; body_table[17].textContent = "Алгебра";
            body_table[18].textContent = ""; body_table[19].textContent = "География"; body_table[20].textContent = "Мои горизонты";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "8"){
            header[0].textContent = "8А"; header[1].textContent = "8Б", header[2].textContent = "8В";
            body_table[0].textContent = "ФЗК"; body_table[1].textContent = "История"; body_table[2].textContent = "Геометрия";
            body_table[3].textContent = "ФЗК"; body_table[4].textContent = "Русский язык"; body_table[5].textContent = "Алгебра";
            body_table[6].textContent = "Алгебра"; body_table[7].textContent = "Литература"; body_table[8].textContent = "История";
            body_table[9].textContent = "Геометрия"; body_table[10].textContent = "Технология"; body_table[11].textContent = "Русский язык";
            body_table[12].textContent = "Химия"; body_table[13].textContent = "Геометрия"; body_table[14].textContent = "Литература";
            body_table[15].textContent = "История"; body_table[16].textContent = "Информатика"; body_table[17].textContent = "Технология";
            body_table[18].textContent = "Английский язык"; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "9"){
            header[0].textContent = "9А"; header[1].textContent = "9Б", header[2].textContent = "9В";
            body_table[0].textContent = "Русский язык"; body_table[1].textContent = "Алгебра"; body_table[2].textContent = "История";
            body_table[3].textContent = "Литература"; body_table[4].textContent = "Геометрия"; body_table[5].textContent = "Информатика";
            body_table[6].textContent = "Алгебра"; body_table[7].textContent = "Русский язык"; body_table[8].textContent = "Химия";
            body_table[9].textContent = "Геометрия"; body_table[10].textContent = "Литература"; body_table[11].textContent = "Английский язык";
            body_table[12].textContent = "История"; body_table[13].textContent = "Английский язык"; body_table[14].textContent = "Алгебра";
            body_table[15].textContent = "Английский язык"; body_table[16].textContent = "История"; body_table[17].textContent = "Геометрия";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "10"){
            header[0].textContent = "10А"; header[1].textContent = "", header[2].textContent = "10Б";
            body_table[0].textContent = "Английский язык"; body_table[1].textContent = ""; body_table[2].textContent = "Алгебра";
            body_table[3].textContent = "Английский язык"; body_table[4].textContent = ""; body_table[5].textContent = "Алгебра";
            body_table[6].textContent = "ВСтатистика"; body_table[7].textContent = ""; body_table[8].textContent = "Английский язык";
            body_table[9].textContent = "История"; body_table[10].textContent = ""; body_table[11].textContent = "Литература";
            body_table[12].textContent = "Физика"; body_table[13].textContent = ""; body_table[14].textContent = "Информатика";
            body_table[15].textContent = "Литература"; body_table[16].textContent = ""; body_table[17].textContent = "Физика";
            body_table[18].textContent = "Обществознание"; body_table[19].textContent = ""; body_table[20].textContent = "Физика";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "Инф/Химия";
        }

        else if (classes == "11"){
            header[0].textContent = "11А"; header[1].textContent = "", header[2].textContent = "11Б";
            body_table[0].textContent = "Информатика"; body_table[1].textContent = ""; body_table[2].textContent = "Биология";
            body_table[3].textContent = "История"; body_table[4].textContent = ""; body_table[5].textContent = "Физика";
            body_table[6].textContent = "Обществознание"; body_table[7].textContent = ""; body_table[8].textContent = "Физика";
            body_table[9].textContent = "Астрономия"; body_table[10].textContent = ""; body_table[11].textContent = "Математика";
            body_table[12].textContent = "Литература"; body_table[13].textContent = ""; body_table[14].textContent = "Математика";
            body_table[15].textContent = "Математика"; body_table[16].textContent = ""; body_table[17].textContent = "Информатика";
            body_table[18].textContent = "Математика"; body_table[19].textContent = ""; body_table[20].textContent = "Информатика";
            body_table[21].textContent = "Английский язык"; body_table[22].textContent = ""; body_table[23].textContent = "";
        }
    }

    else if (day == "4"){
        if (classes == "1"){
            header[0].textContent = "1А"; header[1].textContent = "1Б", header[2].textContent = "1В";
            body_table[0].textContent = "Чтение"; body_table[1].textContent = "Чтение"; body_table[2].textContent = "Математика";
            body_table[3].textContent = "Русский язык"; body_table[4].textContent = "Математика"; body_table[5].textContent = "Чтение";
            body_table[6].textContent = "Технология"; body_table[7].textContent = "Русский язык"; body_table[8].textContent = "Русский язык";
            body_table[9].textContent = "Математика"; body_table[10].textContent = "Физкультура"; body_table[11].textContent = "Технология";
            body_table[12].textContent = ""; body_table[13].textContent = "Факультатив в мире сказок"; body_table[14].textContent = "";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "2"){
            header[0].textContent = "2А"; header[1].textContent = "2Б", header[2].textContent = "2В";
            body_table[0].textContent = "Русский язык"; body_table[1].textContent = "Математика"; body_table[2].textContent = "Математика";
            body_table[3].textContent = "Чтение"; body_table[4].textContent = "Русский язык"; body_table[5].textContent = "Русский язык";
            body_table[6].textContent = "Математика"; body_table[7].textContent = "Чтение"; body_table[8].textContent = "Окружающий мир";
            body_table[9].textContent = "Технология"; body_table[10].textContent = "ИЗО"; body_table[11].textContent = "Чтение";
            body_table[12].textContent = ""; body_table[13].textContent = ""; body_table[14].textContent = "Технология";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "3"){
            header[0].textContent = "3А"; header[1].textContent = "3Б", header[2].textContent = "3В";
            body_table[0].textContent = "Математика"; body_table[1].textContent = "Русский язык"; body_table[2].textContent = "Русский язык";
            body_table[3].textContent = "Русский язык"; body_table[4].textContent = "Музыка"; body_table[5].textContent = "Английский язык";
            body_table[6].textContent = "Чтение"; body_table[7].textContent = "Окружающий мир"; body_table[8].textContent = "Музыка";
            body_table[9].textContent = "Технология"; body_table[10].textContent = "Математика"; body_table[11].textContent = "Чтение";
            body_table[12].textContent = "Физкультура"; body_table[13].textContent = "Увлекательная грамматика"; body_table[14].textContent = "Технология";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "4"){
            header[0].textContent = "4А"; header[1].textContent = "4Б", header[2].textContent = "4В";
            body_table[0].textContent = "Музыка"; body_table[1].textContent = "Русский язык"; body_table[2].textContent = "ОРКСЭ";
            body_table[3].textContent = "Физкультура"; body_table[4].textContent = "Математика"; body_table[5].textContent = "Русский язык";
            body_table[6].textContent = "Математика"; body_table[7].textContent = "Чтение"; body_table[8].textContent = "Математика";
            body_table[9].textContent = "Русский язык"; body_table[10].textContent = "Музыка"; body_table[11].textContent = "Чтение";
            body_table[12].textContent = "Чтение"; body_table[13].textContent = ""; body_table[14].textContent = "Технология";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "5"){
            header[0].textContent = "5А"; header[1].textContent = "5Б", header[2].textContent = "5В";
            body_table[0].textContent = "Русский язык"; body_table[1].textContent = "География"; body_table[2].textContent = "Математика";
            body_table[3].textContent = "История"; body_table[4].textContent = "Математика"; body_table[5].textContent = "География";
            body_table[6].textContent = "ИЗО"; body_table[7].textContent = "История"; body_table[8].textContent = "Русский язык";
            body_table[9].textContent = "Математика"; body_table[10].textContent = "Русский язык"; body_table[11].textContent = "История";
            body_table[12].textContent = "География"; body_table[13].textContent = "Литература"; body_table[14].textContent = "ФЗК";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "6"){
            header[0].textContent = "6А"; header[1].textContent = "6Б", header[2].textContent = "6В";
            body_table[0].textContent = "Русский язык"; body_table[1].textContent = "Русский язык"; body_table[2].textContent = "Технология";
            body_table[3].textContent = "История"; body_table[4].textContent = "Английский язык"; body_table[5].textContent = "Технология";
            body_table[6].textContent = "Английский язык"; body_table[7].textContent = "Технология"; body_table[8].textContent = "Математика";
            body_table[9].textContent = "Математика"; body_table[10].textContent = "Технология"; body_table[11].textContent = "Английский язык";
            body_table[12].textContent = "Технология"; body_table[13].textContent = "Математика"; body_table[14].textContent = "Русский";
            body_table[15].textContent = "Технология"; body_table[16].textContent = "Литература"; body_table[17].textContent = "Литература";
            body_table[18].textContent = "Мои горизонты"; body_table[19].textContent = "Мои горизонты"; body_table[20].textContent = "Мои горизонты";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "7"){
            header[0].textContent = "7А"; header[1].textContent = "7Б", header[2].textContent = "7В";
            body_table[0].textContent = "Геометрия"; body_table[1].textContent = "Английский язык"; body_table[2].textContent = "История";
            body_table[3].textContent = "Алгебра"; body_table[4].textContent = "Русский язык"; body_table[5].textContent = "Английский язык";
            body_table[6].textContent = "География"; body_table[7].textContent = "ФЗК"; body_table[8].textContent = "Литература";
            body_table[9].textContent = "Английский язык"; body_table[10].textContent = "ФЗК"; body_table[11].textContent = "Алгебра";
            body_table[12].textContent = "Обществознание"; body_table[13].textContent = "Обществознание"; body_table[14].textContent = "Русский язык";
            body_table[15].textContent = "ФЗК"; body_table[16].textContent = "Геометрия"; body_table[17].textContent = "Обществознание";
            body_table[18].textContent = "ФЗК"; body_table[19].textContent = "Информатика"; body_table[20].textContent = "ИЗО";
            body_table[21].textContent = ""; body_table[22].textContent = "Мои горизонты"; body_table[23].textContent = "Мои горизонты";
        }

        else if (classes == "8"){
            header[0].textContent = "8А"; header[1].textContent = "8Б", header[2].textContent = "8В";
            body_table[0].textContent = "ВСтатистика"; body_table[1].textContent = "Английский язык"; body_table[2].textContent = "Музыка";
            body_table[3].textContent = "Информатика"; body_table[4].textContent = "История"; body_table[5].textContent = "ВСтатистика";
            body_table[6].textContent = "Биология"; body_table[7].textContent = "География"; body_table[8].textContent = "ОБЖ";
            body_table[9].textContent = "Музыка"; body_table[10].textContent = "Биология"; body_table[11].textContent = "Литература";
            body_table[12].textContent = "Литература"; body_table[13].textContent = "ВСтатистика"; body_table[14].textContent = "История";
            body_table[15].textContent = "География"; body_table[16].textContent = "Литература"; body_table[17].textContent = "Биология";
            body_table[18].textContent = "Мои горизонты"; body_table[19].textContent = "Мои горизонты"; body_table[20].textContent = "Английский язык";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "Мои горизонты";
        }

        else if (classes == "9"){
            header[0].textContent = "9А"; header[1].textContent = "9Б", header[2].textContent = "9В";
            body_table[0].textContent = "Русский язык"; body_table[1].textContent = "Физика"; body_table[2].textContent = "ФЗК";
            body_table[3].textContent = "Литература"; body_table[4].textContent = "Английский язык"; body_table[5].textContent = "ФЗК";
            body_table[6].textContent = "ФЗК"; body_table[7].textContent = "Биология"; body_table[8].textContent = "Русский язык";
            body_table[9].textContent = "ФЗК"; body_table[10].textContent = "География"; body_table[11].textContent = "Литература";
            body_table[12].textContent = "Биология"; body_table[13].textContent = "Русский язык"; body_table[14].textContent = "Физика";
            body_table[15].textContent = "Физика"; body_table[16].textContent = "Литература"; body_table[17].textContent = "Английский язык";
            body_table[18].textContent = "География"; body_table[19].textContent = "Химия"; body_table[20].textContent = "Биология";
            body_table[21].textContent = "Мои горизонты"; body_table[22].textContent = "Мои горизонты"; body_table[23].textContent = "Мои горизонты";
        }

        else if (classes == "10"){
            header[0].textContent = "10А"; header[1].textContent = "", header[2].textContent = "10Б";
            body_table[0].textContent = "Геометрия"; body_table[1].textContent = ""; body_table[2].textContent = "История";
            body_table[3].textContent = "Геометрия"; body_table[4].textContent = ""; body_table[5].textContent = "История";
            body_table[6].textContent = "Английский язык"; body_table[7].textContent = ""; body_table[8].textContent = "Геометрия";
            body_table[9].textContent = "Обществознание"; body_table[10].textContent = ""; body_table[11].textContent = "ВСтатистика";
            body_table[12].textContent = "Литература"; body_table[13].textContent = ""; body_table[14].textContent = "Химия";
            body_table[15].textContent = "Химия"; body_table[16].textContent = ""; body_table[17].textContent = "Русский язык";
            body_table[18].textContent = "Мои горизонты"; body_table[19].textContent = ""; body_table[20].textContent = "ФЗК";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "Мои горизонты";
        }

        else if (classes == "11"){
            header[0].textContent = "11А"; header[1].textContent = "", header[2].textContent = "11Б";
            body_table[0].textContent = "Литература"; body_table[1].textContent = ""; body_table[2].textContent = "ОБЖ";
            body_table[3].textContent = "ОБЖ"; body_table[4].textContent = ""; body_table[5].textContent = "Литература";
            body_table[6].textContent = "История"; body_table[7].textContent = ""; body_table[8].textContent = "Литература";
            body_table[9].textContent = "Химия"; body_table[10].textContent = ""; body_table[11].textContent = "Английский язык";
            body_table[12].textContent = "Право"; body_table[13].textContent = ""; body_table[14].textContent = "Английский язык";
            body_table[15].textContent = "ФЗК"; body_table[16].textContent = ""; body_table[17].textContent = "Обществознание";
            body_table[18].textContent = "Мои горизонты"; body_table[19].textContent = ""; body_table[20].textContent = "Мои горизонты";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }
    }

    else if (day == "5") {
        if (classes == "1"){
            header[0].textContent = "1А"; header[1].textContent = "1Б", header[2].textContent = "1В";
            body_table[0].textContent = "Математика"; body_table[1].textContent = "Русский язык"; body_table[2].textContent = "Математика";
            body_table[3].textContent = "Русский язык"; body_table[4].textContent = "Чтение"; body_table[5].textContent = "Русский язык";
            body_table[6].textContent = "Окружающий мир"; body_table[7].textContent = "Окружающий мир"; body_table[8].textContent = "Окружающий мир";
            body_table[9].textContent = "Физкультура"; body_table[10].textContent = "ИЗО"; body_table[11].textContent = "Физкультура";
            body_table[12].textContent = ""; body_table[13].textContent = ""; body_table[14].textContent = "";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        if (classes == "2"){
            header[0].textContent = "2А"; header[1].textContent = "2Б", header[2].textContent = "2В";
            body_table[0].textContent = "Физкультура"; body_table[1].textContent = "Чтение"; body_table[2].textContent = "Математика";
            body_table[3].textContent = "Английский язык"; body_table[4].textContent = "Английский язык"; body_table[5].textContent = "Физкультура";
            body_table[6].textContent = "Русский язык"; body_table[7].textContent = "Русский язык"; body_table[8].textContent = "Английский язык";
            body_table[9].textContent = "Окружающий мир"; body_table[10].textContent = "Физкультура"; body_table[11].textContent = "Русский язык";
            body_table[12].textContent = "Факультатив развитие познавательных способностей"; body_table[13].textContent = "Факультатив развитие познавательных способностей"; body_table[14].textContent = "";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        if (classes == "3"){
            header[0].textContent = "3А"; header[1].textContent = "3Б", header[2].textContent = "3В";
            body_table[0].textContent = "Английский язык"; body_table[1].textContent = "Математика"; body_table[2].textContent = "Разговор о важном";
            body_table[3].textContent = "Русский язык"; body_table[4].textContent = "Физкультура"; body_table[5].textContent = "Физкультура";
            body_table[6].textContent = "Окружающий мир"; body_table[7].textContent = "Чтение"; body_table[8].textContent = "Чтение";
            body_table[9].textContent = "Чтение"; body_table[10].textContent = "Русский язык"; body_table[11].textContent = "Русский язык";
            body_table[12].textContent = ""; body_table[13].textContent = ""; body_table[14].textContent = "";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        if (classes == "4"){
            header[0].textContent = "4А"; header[1].textContent = "4Б", header[2].textContent = "4В";
            body_table[0].textContent = "Английский язык"; body_table[1].textContent = "Математика"; body_table[2].textContent = "Русский язык";
            body_table[3].textContent = "Русский язык"; body_table[4].textContent = "Русский язык"; body_table[5].textContent = "Математика";
            body_table[6].textContent = "Окружающий мир"; body_table[7].textContent = "Окружающий мир"; body_table[8].textContent = "Чтение";
            body_table[9].textContent = "Чтение"; body_table[10].textContent = "Технология"; body_table[11].textContent = "Окружающий мир";
            body_table[12].textContent = "Технология"; body_table[13].textContent = "ИЗО"; body_table[14].textContent = "";
            body_table[15].textContent = ""; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        if (classes == "5"){
            header[0].textContent = "5А"; header[1].textContent = "5Б", header[2].textContent = "5В";
            body_table[0].textContent = "Русский язык"; body_table[1].textContent = "ИЗО"; body_table[2].textContent = "Математика";
            body_table[3].textContent = "Английский язык"; body_table[4].textContent = "Русский язык"; body_table[5].textContent = "Технология";
            body_table[6].textContent = "Английский язык"; body_table[7].textContent = "Литература"; body_table[8].textContent = "Английский язык";
            body_table[9].textContent = "Литература"; body_table[10].textContent = "Математика"; body_table[11].textContent = "Русский язык";
            body_table[12].textContent = "Математика"; body_table[13].textContent = "Английский язык"; body_table[14].textContent = "Литература";
            body_table[15].textContent = ""; body_table[16].textContent = "Английский язык"; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        if (classes == "6"){
            header[0].textContent = "6А"; header[1].textContent = "6Б", header[2].textContent = "6В";
            body_table[0].textContent = "Русский язык"; body_table[1].textContent = "Русский язык"; body_table[2].textContent = "История";
            body_table[3].textContent = "Литература"; body_table[4].textContent = "Литература"; body_table[5].textContent = "Обществознание";
            body_table[6].textContent = "Математика"; body_table[7].textContent = "Обществознание"; body_table[8].textContent = "Русский язык";
            body_table[9].textContent = "История"; body_table[10].textContent = "Математика"; body_table[11].textContent = "ИЗО";
            body_table[12].textContent = "ИЗО"; body_table[13].textContent = "История"; body_table[14].textContent = "Математика";
            body_table[15].textContent = "Обществознание"; body_table[16].textContent = "Русский язык"; body_table[17].textContent = "Русский язык";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        if (classes == "7"){
            header[0].textContent = "7А"; header[1].textContent = "7Б", header[2].textContent = "7В";
            body_table[0].textContent = "История"; body_table[1].textContent = "География"; body_table[2].textContent = "Английский язык";
            body_table[3].textContent = "Английский язык"; body_table[4].textContent = "Физика"; body_table[5].textContent = "История";
            body_table[6].textContent = "Физика"; body_table[7].textContent = "Английский язык"; body_table[8].textContent = "Литература";
            body_table[9].textContent = "Геометрия"; body_table[10].textContent = "Русский язык"; body_table[11].textContent = "Физика";
            body_table[12].textContent = "Русский язык"; body_table[13].textContent = "Литература"; body_table[14].textContent = "ВСтатистика";
            body_table[15].textContent = "ИЗО"; body_table[16].textContent = ""; body_table[17].textContent = "Геометрия";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "География";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        if (classes == "8"){
            header[0].textContent = "8А"; header[1].textContent = "8Б", header[2].textContent = "8В";
            body_table[0].textContent = "История"; body_table[1].textContent = "ФЗК"; body_table[2].textContent = "Русский язык";
            body_table[3].textContent = "Русский язык"; body_table[4].textContent = "ФЗК"; body_table[5].textContent = "География";
            body_table[6].textContent = "Английский язык"; body_table[7].textContent = "Русский язык"; body_table[8].textContent = "Химия";
            body_table[9].textContent = "ВСтатистика"; body_table[10].textContent = "ОБЖ"; body_table[11].textContent = "Английский язык";
            body_table[12].textContent = "Литература"; body_table[13].textContent = "Химия"; body_table[14].textContent = "ВСтатистика";
            body_table[15].textContent = "ОБЖ"; body_table[16].textContent = "Алгебра"; body_table[17].textContent = "ФЗК";
            body_table[18].textContent = "Технология"; body_table[19].textContent = "ВСтатистика"; body_table[20].textContent = "ФЗК";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        if (classes == "9"){
            header[0].textContent = "9А"; header[1].textContent = "9Б", header[2].textContent = "9В";
            body_table[0].textContent = "Английский язык"; body_table[1].textContent = "Алгебра"; body_table[2].textContent = "Русский язык";
            body_table[3].textContent = "Родной язык"; body_table[4].textContent = "Биология"; body_table[5].textContent = "Геометрия";
            body_table[6].textContent = "Геометрия"; body_table[7].textContent = "Родной язык"; body_table[8].textContent = "Биология";
            body_table[9].textContent = "Физика"; body_table[10].textContent = "Геометрия"; body_table[11].textContent = "Литература";
            body_table[12].textContent = "Информатика"; body_table[13].textContent = "Обществознание"; body_table[14].textContent = "География";
            body_table[15].textContent = "Биология"; body_table[16].textContent = "История"; body_table[17].textContent = "Физика";
            body_table[18].textContent = "Химия"; body_table[19].textContent = "Физика"; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "10"){
            header[0].textContent = "10А"; header[1].textContent = "", header[2].textContent = "10Б";
            body_table[0].textContent = "Русский язык"; body_table[1].textContent = ""; body_table[2].textContent = "Обществознание";
            body_table[3].textContent = "Литература"; body_table[4].textContent = ""; body_table[5].textContent = "Обществознание";
            body_table[6].textContent = "География"; body_table[7].textContent = ""; body_table[8].textContent = "ФЗК";
            body_table[9].textContent = "ФЗК"; body_table[10].textContent = ""; body_table[11].textContent = "Биология";
            body_table[12].textContent = "ФЗК"; body_table[13].textContent = ""; body_table[14].textContent = "Английский язык";
            body_table[15].textContent = "Психология"; body_table[16].textContent = ""; body_table[17].textContent = "";
            body_table[18].textContent = ""; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

        else if (classes == "11"){
            header[0].textContent = "11А"; header[1].textContent = "", header[2].textContent = "11Б";
            body_table[0].textContent = "География"; body_table[1].textContent = ""; body_table[2].textContent = "Химия";
            body_table[3].textContent = "Математика"; body_table[4].textContent = ""; body_table[5].textContent = "Английский язык";
            body_table[6].textContent = "Математика"; body_table[7].textContent = ""; body_table[8].textContent = "История";
            body_table[9].textContent = "Обществознание"; body_table[10].textContent = ""; body_table[11].textContent = "География";
            body_table[12].textContent = "Биология"; body_table[13].textContent = ""; body_table[14].textContent = "Родной язык";
            body_table[15].textContent = "Английский язык"; body_table[16].textContent = ""; body_table[17].textContent = "ФЗК";
            body_table[18].textContent = "Психология"; body_table[19].textContent = ""; body_table[20].textContent = "";
            body_table[21].textContent = ""; body_table[22].textContent = ""; body_table[23].textContent = "";
        }

    }
}

window.addEventListener("load", () => {
    let date = new Date();
    let day = String(date.getDay());
    if (localStorage.getItem("visited") !== null) {
        let classes = localStorage.getItem("classes");

        class_select.value = classes;
        day_select.value = day;

        getShedule(day, classes);
    }
})

day_select.addEventListener("change", () => getShedule(day_select.value, class_select.value));
class_select.addEventListener("change", () => getShedule(day_select.value, class_select.value));

