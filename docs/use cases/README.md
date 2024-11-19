## Модель прецедентів

### 1. Загальна схема

@startuml

    ' Set global actor styles
    skinparam actor {
        BackgroundColor #ffed94
        BorderColor black
        FontColor black
    }

    actor "Користувач" as RegisteredUser
    actor "Дослідник" as DataResearcher #bffaa2
    actor "Експерт" as DataExpert #eacffa
    actor "Адміністратор системи" as SystemAdmin #94f1ff

    package "Управління обліковим записом" {
        usecase "Створити акаунт" as UC_1.1
        usecase "Увійти в систему" as UC_1.2  
        usecase "Редагувати профіль" as UC_1.3
        usecase "Перегляд доступних наборів даних" as UC_1.4
    }

    package "Робота з даними дослідника" {
        usecase "Завантажити новий набір даних" as UC_2.1    
        usecase "Отримати аналітику по даним" as UC_2.2
        usecase "Редагувати опис набору даних" as UC_2.3
    }

    package "Експертна оцінка даних" {
        usecase "Оцінити якість набору даних" as UC_3.1
        usecase "Додати експертну думку" as UC_3.2
    }

    package "Адміністрування системи" {
        usecase "Управління акаунтами користувачів" as UC_4.1
        usecase "Перевірка на відповідність стандартам" as UC_4.2
        usecase "Керування наборами даних" as UC_4.3
    }

    RegisteredUser --> UC_1.1
    RegisteredUser --> UC_1.2
    RegisteredUser --> UC_1.3
    RegisteredUser --> UC_1.4

    DataResearcher --|> RegisteredUser
    DataExpert --|> RegisteredUser
    SystemAdmin --|> RegisteredUser

    DataResearcher --> UC_2.1
    DataResearcher --> UC_2.2
    DataResearcher --> UC_2.3

    DataExpert --> UC_3.1
    DataExpert --> UC_3.2

    SystemAdmin --> UC_4.1
    SystemAdmin --> UC_4.2
    SystemAdmin --> UC_4.3

    footer
        Модель прецедентів для системи управління відкритими даними.
        НТУУ КПІ ім. І. Сікорського
        Київ-2024
    endfooter

@enduml



### 2. Схема взаємодії користувача

@startuml
skinparam actor {
    BackgroundColor #ffed94
    BorderColor black
    FontColor black
}

actor "Користувач" as RegisteredUser

usecase "<b>Створити акаунт</b>\nРеєстрація користувача" as UC_1.1
usecase "<b>Увійти в систему</b>\nАвторизація" as UC_1.2  
usecase "<b>Редагувати профіль</b>\nРедагування профілю" as UC_1.3
usecase "<b>Перегляд доступних наборів даних</b>\nОгляд даних" as UC_1.4

' Дочірні варіанти використання для "Редагувати профіль"
usecase "<b>Завантажити фото</b>\nДодавання аватара" as UC_1.3.1
usecase "<b>Змінити пароль</b>\nОновлення пароля" as UC_1.3.2

' Зв'язки між "Користувач" і основними прецедентами
RegisteredUser --> UC_1.1
RegisteredUser --> UC_1.2
RegisteredUser --> UC_1.3
RegisteredUser --> UC_1.4

' Зв'язки "extends" для підпроцесів у прецеденті "Редагувати профіль"
UC_1.3.1 ..|> UC_1.3 : extends
UC_1.3.2 ..|> UC_1.3 : extends

footer
    Модель прецедентів для зареєстрованого користувача.
    НТУУ КПІ ім. І. Сікорського
    Київ-2024
endfooter
@enduml


### 3. Схема взаємодії дослідника

@startuml
skinparam actor {
    BackgroundColor #bffaa2
    BorderColor black
    FontColor black
}

actor "Дослідник" as DataResearcher

usecase "<b>Завантажити новий набір даних</b>\nЗавантаження даних" as UC_2.1
usecase "<b>Отримати аналітику по даним</b>\nАналіз даних" as UC_2.2
usecase "<b>Редагувати опис набору даних</b>\nРедагування опису" as UC_2.3

' Дочірні варіанти використання
usecase "<b>Додати опис</b>\nДодавання текстового опису" as UC_2.1.1
usecase "<b>Позначити дані як публічні</b>\nПублікація даних" as UC_2.3.1

' Основні взаємодії
DataResearcher --> UC_2.1
DataResearcher --> UC_2.2
DataResearcher --> UC_2.3

' Зв'язки розширення (extends) для дочірніх прецедентів
UC_2.1.1 ..|> UC_2.1 : extends
UC_2.3.1 ..|> UC_2.3 : extends

footer
    Модель прецедентів для дослідника.
    НТУУ КПІ ім. І. Сікорського
    Київ-2024
endfooter
@enduml


### 4. Схема взаємодії експерта

@startuml
skinparam actor {
    BackgroundColor #bffaa2
    BorderColor black
    FontColor black
}

actor "Дослідник" as DataResearcher

usecase "<b>Завантажити новий набір даних</b>\nЗавантаження даних" as UC_2.1
usecase "<b>Отримати аналітику по даним</b>\nАналіз даних" as UC_2.2
usecase "<b>Редагувати опис набору даних</b>\nРедагування опису" as UC_2.3

' Дочірні варіанти використання
usecase "<b>Додати опис</b>\nДодавання текстового опису" as UC_2.1.1
usecase "<b>Позначити дані як публічні</b>\nПублікація даних" as UC_2.3.1

' Основні взаємодії
DataResearcher --> UC_2.1
DataResearcher --> UC_2.2
DataResearcher --> UC_2.3

' Зв'язки розширення (extends) для дочірніх прецедентів
UC_2.1.1 ..|> UC_2.1 : extends
UC_2.3.1 ..|> UC_2.3 : extends

footer
    Модель прецедентів для дослідника.
    НТУУ КПІ ім. І. Сікорського
    Київ-2024
endfooter
@enduml


### 5. Схема взаємодії адміністратора системи

@startuml
skinparam actor {
    BackgroundColor #94f1ff
    BorderColor black
    FontColor black
}

actor "Адміністратор системи" as SystemAdmin

usecase "Управління акаунтами користувачів" as UC_4.1
usecase "Перевірка на відповідність стандартам" as UC_4.2
usecase "Керування наборами даних" as UC_4.3

usecase "Заблокувати користувача" as UC_4.1.1
usecase "Відновити акаунт користувача" as UC_4.1.2
usecase "Перевірити новий набір даних" as UC_4.2.1
usecase "Затвердити набір даних" as UC_4.3.1

SystemAdmin --> UC_4.1
SystemAdmin --> UC_4.2
SystemAdmin --> UC_4.3

UC_4.1.1 ..|> UC_4.1 : extends
UC_4.1.2 ..|> UC_4.1 : extends
UC_4.2.1 ..|> UC_4.2 : extends
UC_4.3.1 ..|> UC_4.3 : extends

footer
    Модель прецедентів для адміністратора системи.
    НТУУ КПІ ім. І. Сікорського
    Київ-2024
endfooter
@enduml



В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.

*Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів.*



Вбудовування зображень діаграм здійснюється з використанням сервісу [plantuml.com](https://plantuml.com/). 

В markdown-файлі використовується опис діаграми

```md

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_3.0
    end header

    title
        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        <font size=16 color=black>Діаграма прецедентів
    end title


    actor "Користувач" as User #eeeeaa
    
    package UCD_1{
        usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }
    
    usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1
    usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2  
    usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1  
    usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2
    
    package UCD_1 {
        usecase "<b>UC_4</b>\nВикликати звіт" as UC_4 #aaeeaa
    }
    
    usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1  
    usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3  
    
    
    
    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends
    
    
    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

**Діаграма прецедентів**

</center>
```

яка буде відображена наступним чином

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    right header
        <font size=24 color=black>Package: <b>UCD_3.0
    end header

    title
        <font size=18 color=black>UC_8. Редагувати конфігурацію порталу
        <font size=16 color=black>Діаграма прецедентів
    end title


    actor "Користувач" as User #eeeeaa
    
    package UCD_1{
        usecase "<b>UC_1</b>\nПереглянути список \nзвітів" as UC_1 #aaeeaa
    }
    
    usecase "<b>UC_1.1</b>\nЗастосувати фільтр" as UC_1.1
    usecase "<b>UC_1.2</b>\nПереглянути метадані \nзвіту" as UC_1.2  
    usecase "<b>UC_1.2.1</b>\nДати оцінку звіту" as UC_1.2.1  
    usecase "<b>UC_1.2.2</b>\nПереглянути інформацію \nпро авторів звіту" as UC_1.2.2
    
    package UCD_1 {
        usecase "<b>UC_4</b>\nВикликати звіт" as UC_4 #aaeeaa
    }
    
    usecase "<b>UC_1.1.1</b>\n Використати \nпошукові теги" as UC_1.1.1  
    usecase "<b>UC_1.1.2</b>\n Використати \nрядок пошуку" as UC_1.1.2
    usecase "<b>UC_1.1.3</b>\n Використати \nавторів" as UC_1.1.3  
    
    
    
    User -> UC_1
    UC_1.1 .u.> UC_1 :extends
    UC_1.2 .u.> UC_1 :extends
    UC_4 .d.> UC_1.2 :extends
    UC_1.2 .> UC_1.2 :extends
    UC_1.2.1 .u.> UC_1.2 :extends
    UC_1.2.2 .u.> UC_1.2 :extends
    UC_1 ..> UC_1.2.2 :extends
    
    
    UC_1.1.1 -u-|> UC_1.1
    UC_1.1.2 -u-|> UC_1.1
    UC_1.1.3 -u-|> UC_1.1
    
    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer

@enduml

**Діаграма прецедентів**

</center>

