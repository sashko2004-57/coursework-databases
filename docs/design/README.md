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
entity Datarecord.time <<TEXT>> #fcf4dc
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

@startuml

entity User <<ENTITY>> {
+ id <<NUMBER>>
+ name <<TEXT>>
+ email <<TEXT>>
+ password <<TEXT>>
+ roleId <<NUMBER>>
}

entity Role <<ENTITY>> {
+ id <<NUMBER>>
+ name <<TEXT>>
}

entity Datarecord <<ENTITY>> {
+ id <<NUMBER>>
+ name <<TEXT>>
+ data <<TEXT>>
+ type <<TEXT>>
+ time <<TEXT>>
+ description <<TEXT>>
}

entity Access <<ENTITY>> {
+ id <<NUMBER>>
+ userId <<NUMBER>>
+ datarecordId <<NUMBER>>
+ time <<DATETIME>>
+ type <<TEXT>>
}

entity Tag <<ENTITY>> {
+ id <<NUMBER>>
+ name <<TEXT>>
}

entity Category <<ENTITY>> {
+ id <<NUMBER>>
+ name <<TEXT>>
+ parentCategoryId <<NUMBER>>
}

entity DatarecordTag <<ENTITY>> {
+ id <<NUMBER>>
+ datarecordId <<NUMBER>>
+ tagId <<NUMBER>>
}

entity DatarecordCategory <<ENTITY>> {
+ id <<NUMBER>>
+ datarecordId <<NUMBER>>
+ categoryId <<NUMBER>>
}

Role "1.1"-r->"0.*" User
User "1.1"-->"0.*" Access
Access "0.*"-->"1.1" Datarecord
Tag "1.1"-d->"0.*" DatarecordTag
DatarecordTag "0.*"-l->"1.1" Datarecord
Category "1.1"-d->"0.*" DatarecordCategory
DatarecordCategory "0.*"-r->"1.1" Datarecord
Category "0.1"-->"0.*" Category

@enduml
