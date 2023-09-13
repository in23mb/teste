PennController.ResetPerfix(null);

Sequence("Participante", "Intrucoes", randomize"Experimento", SendResults(),"Final")

Heaser(

  defaultText
   .css("font-size", "1.2em")
   .print()
  , 

  defaultTextImput
   .css("font-size", "1.2em")
   .print()
  ,

  defaultTextButtom
   .css("font-size", "1.2em")
   .print()
   .center()
   .wait()
  
)

newtrial("Participante",

        newText("<p>Bem-Vindos</p>")
        ,
        newText("<p>Neste experimento, você vai ouvir um frase e depois deve escolher a melhoropção da interpretação para ela.</p>")
        ,

        newText("<p>Por favor, escreva seu NOME COMPLETO na caixa abaixo</p>")
        ,
        newTextImput("Nome")
        ,

)
