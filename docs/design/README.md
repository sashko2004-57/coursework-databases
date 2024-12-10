# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

# Модель бізнес-об'єктів

@startuml

entity User <<ENTITY>> #ffe396
entity User.id <<NUMBER>> #fcf4dc
entity User.name <<TEXT>> #fcf4dc
entity User.email <<TEXT>> #fcf4dc
entity User.password <<TEXT>> #fcf4dc
User.id -r-* User
User.name -r-* User
User.email --* User
User.password --* User

entity Role <<ENTITY>> #ffe396
entity Role.id <<NUMBER>> #fcf4dc
entity Role.name <<TEXT>> #fcf4dc
Role.id -l-* Role
Role.name -r-* Role

entity Datarecord <<ENTITY>> #ffe396
entity Datarecord.id <<NUMBER>> #fcf4dc
entity Datarecord.name <<TEXT>> #fcf4dc
entity Datarecord.data <<TEXT>> #fcf4dc
entity Datarecord.type <<TEXT>> #fcf4dc
entity Datarecord.time <<DATETIME>> #fcf4dc
entity Datarecord.description <<TEXT>> #fcf4dc
Datarecord.id -d-* Datarecord
Datarecord.name -u-* Datarecord
Datarecord.data -d-* Datarecord
Datarecord.type -u-* Datarecord
Datarecord.time -d-* Datarecord
Datarecord.description -u-* Datarecord

entity Access <<ENTITY>> #ffe396
entity Access.id <<NUMBER>> #fcf4dc
entity Access.time <<DATETIME>> #fcf4dc
entity Access.type <<TEXT>> #fcf4dc
Access.id --* Access
Access.time --* Access

entity Tag <<ENTITY>> #ffe396
entity Tag.id <<NUMBER>> #fcf4dc
entity Tag.name <<TEXT>> #fcf4dc
Tag.id --* Tag
Tag.name --* Tag

entity Category <<ENTITY>> #ffe396
entity Category.id <<NUMBER>> #fcf4dc
entity Category.name <<TEXT>> #fcf4dc
Category.id --* Category
Category.name --* Category

entity DatarecordTag <<ENTITY>> #ffe396
entity DatarecordTag.id <<NUMBER>> #fcf4dc
DatarecordTag.id -u-* DatarecordTag

entity DatarecordCategory <<ENTITY>> #ffe396
entity DatarecordCategory.id <<NUMBER>> #fcf4dc
DatarecordCategory.id -u-* DatarecordCategory

Role "1.1"-d-"0.*" User
User "1.1"--"0.*" Access
Access "0.*"--"1.1" Datarecord
Tag "1.1"-d-"0.*" DatarecordTag
DatarecordTag "0.*"-l-"1.1" Datarecord
Category "1.1"-d-"0.*" DatarecordCategory
DatarecordCategory "0.*"-r-"1.1" Datarecord
Category "1.1"--"0.*" Category

@enduml

# ER-модель
entity User <>{ User.id:NUMBER User.username:TEXT User.email:TEXT User.password:TEXT User.firstname:TEXT User.lastname:TEXT }

entity Role <<ENTITY>>{ 
    Role.name:TEXT 
    Role.id:NUMBER 
}

entity Permission <<ENTITY>> {
    Permission.id:NUMBER
    Permission.name:TEXT
}

entity Grant_Permission <<ENTITY>> {
}

entity Request <<ENTITY>> {
    Request.id:NUMBER
    Request.type:TEXT
    Request.message:TEXT
}

entity Access <<ENTITY>>{ 
    Access.id:NUMBER 
}

entity Datafile <<ENTITY>> { 
    Datafile.id:NUMBER 
    Datafile.name:TEXT 
    Datafile.content:TEXT 
    Datafile.description:TEXT 
    Datafile.format:TEXT 
    Datafile.date:NUMBER    
}

entity Datafile_tag <<ENTITY>>{ 
}

entity Tag <<ENTITY>>{ 
    Tag.name:TEXT 
}

User"0,*" -- "1,1"Role

Permission "1,1"--"0,*" Grant_Permission
Grant_Permission "0,*"--"1,1" Role

User "1,1"--"0,*" Request

User"1,1" -- "0,*"Access

Request "0,*"-r-"1,1" Access

Access"0,*" -- "1,1"Datafile 
Datafile"1,1" -r- "0,*"Datafile_tag 
Datafile_tag"0,*" -r- "1,1"Tag 




# Реляційна схема 
![Diagram](https://github.com/user-attachments/assets/c164ab09-60de-48c0-b914-b12b7f82fcc0)

